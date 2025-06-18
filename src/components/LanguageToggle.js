import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';
import posts from '../data/blogPosts';
import posts_en from '../data/blogPosts_en';

const LanguageToggle = () => {
  const { locale, toggleLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleLanguageToggle = () => {
    // Primero cambiamos el idioma en el contexto
    toggleLanguage();
    
    // Luego actualizamos la URL según la página actual
    const currentPath = location.pathname;
    const isCurrentlyEnglish = locale === 'en';
    
    // Si estamos en un post del blog
    if (currentPath.includes('/blog/')) {
      const slug = currentPath.split('/').pop();
      
      // Buscamos el post actual
      const currentPosts = isCurrentlyEnglish ? posts_en : posts;
      const otherPosts = isCurrentlyEnglish ? posts : posts_en;
      
      const currentPost = currentPosts.find(p => p.slug === slug);
      
      if (currentPost) {
        // Si encontramos el post actual, buscamos su equivalente en el otro idioma
        const translatedPost = otherPosts.find(p => 
          p.slug === currentPost.translationSlug || p.translationSlug === currentPost.slug
        );
        
        if (translatedPost) {
          // Si encontramos la traducción, redirigimos a la URL correcta
          const newPath = isCurrentlyEnglish 
            ? `/blog/${translatedPost.slug}` 
            : `/en/blog/${translatedPost.slug}`;
          
          navigate(newPath);
          return; // Importante para evitar que se ejecute el código siguiente
        }
      }
    }
    
    // Para otras páginas o si no encontramos traducción del post
    if (isCurrentlyEnglish && !currentPath.startsWith('/en')) {
      // Si estamos en inglés pero la URL no tiene /en, añadimos /en
      navigate(`/en${currentPath === '/' ? '' : currentPath}`);
    } else if (!isCurrentlyEnglish && currentPath.startsWith('/en')) {
      // Si estamos en español pero la URL tiene /en, lo quitamos
      navigate(currentPath.replace('/en', '') || '/');
    }
  };

  return (
    <button 
      className="language-toggle"
      onClick={handleLanguageToggle}
      aria-label={`Change language to ${locale === 'en' ? 'Spanish' : 'English'}`}
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
