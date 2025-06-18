// Este archivo exporta las rutas que react-snap debe prerenderizar
import posts from './data/blogPosts';
import posts_en from './data/blogPosts_en';

// Generar todas las rutas que deben ser prerenderizadas
const routes = [
  '/',
  '/blog',
  '/en',
  '/en/blog'
];

// Añadir rutas para cada post en español
posts.forEach(post => {
  routes.push(`/blog/${post.slug}`);
});

// Añadir rutas para cada post en inglés
posts_en.forEach(post => {
  routes.push(`/en/blog/${post.slug}`);
});

module.exports = routes;
