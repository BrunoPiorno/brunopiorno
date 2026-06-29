// Prerenders every route in src/crawlableRoutes.js to a static index.html so
// crawlers without JavaScript (search engines, AI/GEO bots, link unfurlers)
// receive real content instead of the empty CRA shell.
//
// react-snap was tried first but its bundled puppeteer@1.20.0 ships a
// Chromium binary that can't run on Vercel's build image (missing
// libnss3.so and friends — that container has no desktop libs at all).
// puppeteer-core + @sparticuz/chromium is the standard pairing for headless
// Chrome on Vercel/Lambda: a Chromium build with no system-lib dependencies.
const fs = require('fs');
const path = require('path');
const express = require('express');
const puppeteer = require('puppeteer-core');
const routes = require('../src/crawlableRoutes.js');

const BUILD_DIR = path.resolve(__dirname, '../build');
const PORT = 45678;
const NAV_TIMEOUT_MS = 30000;
const SETTLE_DELAY_MS = 500;

function startServer(shellHtml) {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.static(BUILD_DIR));
    // Any path not matching a real static asset is an app route: always
    // serve the original, untouched shell so earlier prerendered pages
    // never leak into routes that haven't been visited yet.
    app.use((req, res) => res.type('html').send(shellHtml));
    const server = app.listen(PORT, () => resolve(server));
  });
}

async function launchBrowser() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) {
    return puppeteer.launch({
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
  }

  // @sparticuz/chromium ships ESM-only (no "require" export condition), so
  // it must be loaded with a dynamic import even from this CommonJS script.
  const { default: chromium } = await import('@sparticuz/chromium');
  return puppeteer.launch({
    executablePath: await chromium.executablePath(),
    args: chromium.args,
  });
}

function outputPathFor(route) {
  const clean = route.replace(/^\//, '').replace(/\/$/, '');
  const dir = clean ? path.join(BUILD_DIR, clean) : BUILD_DIR;
  return path.join(dir, 'index.html');
}

async function prerenderRoute(page, route) {
  const url = `http://localhost:${PORT}${route}`;
  await page.goto(url, { waitUntil: 'networkidle0', timeout: NAV_TIMEOUT_MS });
  await new Promise((resolve) => setTimeout(resolve, SETTLE_DELAY_MS));
  const html = await page.content();
  const outPath = outputPathFor(route);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`prerendered ${route}`);
}

(async () => {
  const shellHtml = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8');
  const server = await startServer(shellHtml);
  const browser = await launchBrowser();

  try {
    const page = await browser.newPage();
    for (const route of routes) {
      await prerenderRoute(page, route);
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`Prerendered ${routes.length} routes.`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
