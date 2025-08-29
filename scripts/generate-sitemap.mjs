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
  '/',
  '/blog',
  '/en',
  '/en/blog',
  '/privacy-policy',
  '/legal-notice',
  '/cookies-policy',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
    .map((route) => {
      return `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
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
