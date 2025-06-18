const fs = require('fs');
const path = require('path');
const posts = require('../src/data/blogPosts');
const posts_en = require('../src/data/blogPosts_en');

// Función para crear directorios recursivamente si no existen
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

// Leer el archivo index.html base
const indexPath = path.resolve(__dirname, '../build/index.html');
const baseHtml = fs.readFileSync(indexPath, 'utf8');

// Función para generar HTML con meta tags para un post específico
function generatePostHtml(post, locale) {
  const domain = 'https://brunopiorno.com.ar';
  const postUrl = locale === 'en' 
    ? `${domain}/en/blog/${post.slug}` 
    : `${domain}/blog/${post.slug}`;
  
  // Reemplazar los meta tags en el HTML base
  let postHtml = baseHtml;
  
  // Reemplazar título
  postHtml = postHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${post.title} | Bruno Piorno</title>`
  );
  
  // Buscar la sección de meta tags
  const metaTagsStart = postHtml.indexOf('<meta name="viewport"');
  const metaTagsEnd = postHtml.indexOf('</head>');
  
  if (metaTagsStart !== -1 && metaTagsEnd !== -1) {
    // Extraer la sección actual de meta tags
    const currentMetaTags = postHtml.substring(metaTagsStart, metaTagsEnd);
    
    // Crear nuevos meta tags específicos para el post
    const newMetaTags = `
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="${post.description}" />
      <meta name="keywords" content="desarrollo web, diseño web, SEO, ${post.tags ? post.tags.join(', ') : ''}" />
      <meta name="author" content="Bruno Piorno Polucci" />
      
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Bruno Piorno" />
      <meta property="og:title" content="${post.title}" />
      <meta property="og:description" content="${post.description}" />
      <meta property="og:image" content="${post.cover}" />
      <meta property="og:url" content="${postUrl}" />
      <meta property="og:locale" content="${locale === 'en' ? 'en_US' : 'es_ES'}" />
      
      <!-- Twitter Card -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="${post.title}" />
      <meta name="twitter:description" content="${post.description}" />
      <meta name="twitter:image" content="${post.cover}" />
      <meta name="twitter:url" content="${postUrl}" />
      
      <!-- LinkedIn -->
      <meta property="linkedin:title" content="${post.title}" />
      <meta property="linkedin:description" content="${post.description}" />
      <meta property="linkedin:image" content="${post.cover}" />
      
      <link rel="canonical" href="${postUrl}" />
    `;
    
    // Reemplazar los meta tags actuales con los nuevos
    postHtml = postHtml.replace(currentMetaTags, newMetaTags);
  }
  
  return postHtml;
}

// Generar páginas HTML estáticas para cada post en español
posts.forEach(post => {
  const postPath = path.resolve(__dirname, `../build/blog/${post.slug}/index.html`);
  ensureDirectoryExistence(postPath);
  
  const postHtml = generatePostHtml(post, 'es');
  fs.writeFileSync(postPath, postHtml);
  console.log(`Generated static page for ES post: ${post.slug}`);
});

// Generar páginas HTML estáticas para cada post en inglés
posts_en.forEach(post => {
  const postPath = path.resolve(__dirname, `../build/en/blog/${post.slug}/index.html`);
  ensureDirectoryExistence(postPath);
  
  const postHtml = generatePostHtml(post, 'en');
  fs.writeFileSync(postPath, postHtml);
  console.log(`Generated static page for EN post: ${post.slug}`);
});

console.log('All static pages generated successfully!');
