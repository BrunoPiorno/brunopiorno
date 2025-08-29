const fs = require('fs');
const path = require('path');

// Definir los posts directamente en este script para evitar problemas de importación
const posts = [
  {
    slug: 'tendencias-seo-para-desarrolladores',
    translationSlug: 'seo-trends-for-developers',
    title: 'Tendencias SEO para desarrolladores',
    description: 'Las claves de SEO técnico que todo dev debe conocer para destacar en Google en 2025.',
    date: '2025-06-17',
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'optimizacion-rendimiento-web',
    translationSlug: 'web-performance-optimization',
    title: 'Optimización de rendimiento web',
    description: 'Técnicas avanzadas para mejorar la velocidad de carga y experiencia de usuario.',
    date: '2025-06-10',
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'diseno-web-accesible',
    translationSlug: 'accessible-web-design',
    title: 'Diseño web accesible',
    description: 'Cómo crear sitios web inclusivos que cumplan con los estándares de accesibilidad WCAG.',
    date: '2025-06-03',
    cover: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80',
  }
];

const posts_en = [
  {
    slug: 'seo-trends-for-developers',
    translationSlug: 'tendencias-seo-para-desarrolladores',
    title: 'SEO Trends for Developers',
    description: 'Technical SEO keys that every dev should know to stand out on Google in 2025.',
    date: '2025-06-17',
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'web-performance-optimization',
    translationSlug: 'optimizacion-rendimiento-web',
    title: 'Web Performance Optimization',
    description: 'Advanced techniques to improve loading speed and user experience.',
    date: '2025-06-10',
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    slug: 'accessible-web-design',
    translationSlug: 'diseno-web-accesible',
    title: 'Accessible Web Design',
    description: 'How to create inclusive websites that meet WCAG accessibility standards.',
    date: '2025-06-03',
    cover: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80',
  }
];

// Intentar cargar posts adicionales desde los archivos (si es posible)
try {
  // Esta parte es opcional y solo se ejecutará en entornos donde sea posible
  console.log('Attempting to load additional posts from files...');
  // No hacemos nada más aquí para evitar errores en Vercel
} catch (e) {
  console.log('Using predefined posts only');
}

console.log(`Loaded ${posts.length} Spanish posts and ${posts_en.length} English posts`);

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
  const domain = 'https://globalalora.com';
  const postUrl = locale === 'en' 
    ? `${domain}/en/blog/${post.slug}` 
    : `${domain}/blog/${post.slug}`;
  
  // Reemplazar los meta tags en el HTML base
  let postHtml = baseHtml;
  
  // Reemplazar título
  postHtml = postHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${post.title} | Alora</title>`
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
      <meta name="author" content="Alora" />
      
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Alora" />
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
