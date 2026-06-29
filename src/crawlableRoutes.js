// Rutas que react-snap debe prerenderizar como HTML estático.
// Usa require/module.exports (CommonJS): react-snap carga este archivo
// directamente con Node, sin pasar por el bundler/babel de CRA.
const posts = require('./data/blogPosts');
const posts_en = require('./data/blogPosts_en');

const staticRoutes = [
  '/',
  '/es',
  '/en',
  '/es/soluciones',
  '/en/soluciones',
  '/es/soluciones/desarrollo-web',
  '/en/soluciones/desarrollo-web',
  '/es/soluciones/landing-pages',
  '/en/soluciones/landing-pages',
  '/es/soluciones/aplicaciones-web',
  '/en/soluciones/aplicaciones-web',
  '/es/soluciones/ecommerce',
  '/en/soluciones/ecommerce',
  '/es/soluciones/chatbots',
  '/en/soluciones/chatbots',
  '/es/soluciones/mantenimiento-web',
  '/en/soluciones/mantenimiento-web',
  '/es/soluciones/google-ads',
  '/en/soluciones/google-ads',
  '/es/soluciones/atencion-cliente-ia',
  '/en/soluciones/atencion-cliente-ia',
  '/es/blog',
  '/en/blog',
  '/es/privacy-policy',
  '/en/privacy-policy',
  '/es/legal-notice',
  '/en/legal-notice',
  '/es/cookies-policy',
  '/en/cookies-policy',
];

const postRoutes = posts.map((post) => `/es/blog/${post.slug}`);
const postRoutesEn = posts_en.map((post) => `/en/blog/${post.slug}`);

module.exports = [...staticRoutes, ...postRoutes, ...postRoutesEn];
