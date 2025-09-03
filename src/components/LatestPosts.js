import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import posts from '../data/blogPosts';
import posts_en from '../data/blogPosts_en';
import '../App.css';

const LatestPosts = () => {
  const { locale, t } = useLanguage();
  
  // Seleccionar los posts según el idioma actual
  const currentPosts = locale === 'en' ? posts_en : posts;
  
  // Ordenar los posts por fecha (más recientes primero) y tomar los 3 primeros
  const latestPosts = [...currentPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section id="latest-news" className="latest-posts-section">
      <div className="latest-posts-container">
        <h2 className="section-title">{t('latestPosts').title}</h2>
        <p className="section-subtitle">{t('latestPosts').subtitle}</p>
        
        <div className="latest-posts-grid">
          {latestPosts.map((post) => (
            <div key={post.slug} className="latest-post-card">
              <img 
                src={post.cover} 
                alt={post.title} 
                className="latest-post-image" 
                loading="lazy" 
              />
              <div className="latest-post-content">
                <span className="latest-post-date">{t('latestPosts').date} {post.date}</span>
                <h3 className="latest-post-title">{post.title}</h3>
                <p className="latest-post-excerpt">{post.description}</p>
                <Link 
                  to={`/${locale}/blog/${post.slug}`} 
                  className="read-more-link"
                >
                  {t('latestPosts').readMore} <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all-container">
          <Link 
            to={`/${locale}/blog`} 
            className="view-all-button"
          >
            {t('latestPosts').viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
