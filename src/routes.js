import React from 'react';
import posts from './data/blogPosts';
import posts_en from './data/blogPosts_en';

// Este archivo genera rutas estáticas para react-snap
// Permite prerenderizar todas las páginas del blog para que los meta tags sean visibles para los crawlers

const routes = [
  '/',
  '/blog',
  '/en',
  '/en/blog',
  
  // Rutas para posts en español
  ...posts.map(post => `/blog/${post.slug}`),
  
  // Rutas para posts en inglés
  ...posts_en.map(post => `/en/blog/${post.slug}`)
];

export default routes;
