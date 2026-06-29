// react-snap's CLI only supports a static `include` list from package.json
// (it has no real "externalRoutes" option, despite a previous config trying
// to use one). This wrapper calls react-snap's Node API directly so we can
// pass the full route list — including every blog post slug — computed at
// build time from src/crawlableRoutes.js.
const url = require('url');
const { run } = require('react-snap');
const pkg = require('../package.json');
const routes = require('../src/crawlableRoutes.js');

const publicUrl = process.env.PUBLIC_URL || pkg.homepage;

run({
  publicPath: publicUrl ? url.parse(publicUrl).pathname : '/',
  ...pkg.reactSnap,
  include: routes,
}).catch((error) => {
  console.error(error);
  process.exit(1);
});
