import React from 'react';
import { Route } from 'react-router-dom';
import posts from './data/blogPosts';
import posts_en from './data/blogPosts_en';

// Este archivo genera rutas estáticas para react-snap
// Permite prerenderizar todas las páginas del blog para que los meta tags sean visibles para los crawlers

export default (
  <>
    <Route path="/" />
    <Route path="/blog" />
    <Route path="/en" />
    <Route path="/en/blog" />
    
    {/* Rutas para posts en español */}
    {posts.map(post => (
      <Route key={`es-${post.slug}`} path={`/blog/${post.slug}`} />
    ))}
    
    {/* Rutas para posts en inglés */}
    {posts_en.map(post => (
      <Route key={`en-${post.slug}`} path={`/en/blog/${post.slug}`} />
    ))}
  </>
);
