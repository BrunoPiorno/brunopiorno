import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to read and eval the module content
const importPosts = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  // Isolate the array by removing the export statement
  const arrayString = fileContent.replace('export default', '');
  // Use eval to parse the array string into an object
  return eval(arrayString);
};

const postsPath = path.resolve(__dirname, '../src/data/blogPosts.js');
const postsEnPath = path.resolve(__dirname, '../src/data/blogPosts_en.js');

const posts = importPosts(postsPath);
const posts_en = importPosts(postsEnPath);


const BASE_URL = 'https://globalalora.com';

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/es', priority: '1.0', changefreq: 'weekly' },
  { path: '/en', priority: '0.9', changefreq: 'weekly' },
  { path: '/es/soluciones', priority: '0.9', changefreq: 'monthly' },
  { path: '/en/soluciones', priority: '0.8', changefreq: 'monthly' },
  { path: '/es/soluciones/desarrollo-web', priority: '0.9', changefreq: 'monthly' },
  { path: '/en/soluciones/desarrollo-web', priority: '0.8', changefreq: 'monthly' },
  { path: '/es/soluciones/landing-pages', priority: '0.9', changefreq: 'monthly' },
  { path: '/en/soluciones/landing-pages', priority: '0.8', changefreq: 'monthly' },
  { path: '/es/soluciones/aplicaciones-web', priority: '0.9', changefreq: 'monthly' },
  { path: '/en/soluciones/aplicaciones-web', priority: '0.8', changefreq: 'monthly' },
  { path: '/es/soluciones/ecommerce', priority: '0.9', changefreq: 'monthly' },
  { path: '/en/soluciones/ecommerce', priority: '0.8', changefreq: 'monthly' },
  { path: '/es/soluciones/mantenimiento-web', priority: '0.8', changefreq: 'monthly' },
  { path: '/en/soluciones/mantenimiento-web', priority: '0.7', changefreq: 'monthly' },
  { path: '/es/soluciones/google-ads', priority: '0.9', changefreq: 'monthly' },
  { path: '/en/soluciones/google-ads', priority: '0.8', changefreq: 'monthly' },
  { path: '/es/soluciones/atencion-cliente-ia', priority: '0.9', changefreq: 'monthly' },
  { path: '/en/soluciones/atencion-cliente-ia', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/es/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/en/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/legal-notice', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookies-policy', priority: '0.3', changefreq: 'yearly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
    .map(({ path, priority, changefreq }) => {
      return `
    <url>
      <loc>${BASE_URL}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`;
    })
    .join('')}
  ${posts
    .map(({ slug }) => {
      return `
    <url>
      <loc>${BASE_URL}/blog/${slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>`;
    })
    .join('')}
  ${posts_en
    .map(({ slug }) => {
      return `
    <url>
      <loc>${BASE_URL}/en/blog/${slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>`;
    })
    .join('')}
</urlset>`;

const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);

console.log('Sitemap generated successfully!');
