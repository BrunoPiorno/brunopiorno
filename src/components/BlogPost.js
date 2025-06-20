import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import posts from '../data/blogPosts';
import posts_en from '../data/blogPosts_en';
import { useLanguage } from '../context/LanguageContext';
import '../App.css';

import SiteHeader from './SiteHeader';
import ContactSection from './ContactSection';

const BlogPost = () => {
  const { slug } = useParams();
  const { locale, t } = useLanguage();
  
  // Hacer scroll al inicio de la página cuando se carga el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Determinamos si estamos en la ruta en inglés o español
  const isEnglishPath = window.location.pathname.startsWith('/en/');
  
  console.log('BlogPost - Debug Info:');
  console.log('Current slug:', slug);
  console.log('Context locale:', locale);
  console.log('Is English Path:', isEnglishPath);
  console.log('Posts EN available:', posts_en.length);
  console.log('Posts ES available:', posts.length);
  console.log('Posts EN slugs:', posts_en.map(p => p.slug));
  console.log('Posts ES slugs:', posts.map(p => p.slug));
  
  // Usamos la ruta actual para determinar qué conjunto de posts usar primero
  const primaryPosts = isEnglishPath ? posts_en : posts;
  const secondaryPosts = isEnglishPath ? posts : posts_en;
  
  // Primero buscamos en el conjunto de posts que corresponde a la ruta actual
  let post = primaryPosts.find(p => p.slug === slug);
  
  console.log('Found post:', post ? 'Yes' : 'No');
  if (post) {
    console.log('Post title:', post.title);
    console.log('Post content blocks:', post.content.length);
  }
  
  // Si no encontramos el post y el idioma del contexto no coincide con la ruta,
  // podría ser que el usuario cambió el idioma pero la URL no se actualizó
  if (!post) {
    // Buscar en el conjunto secundario por slug directo
    post = secondaryPosts.find(p => p.slug === slug);
    
    // Si lo encontramos, redirigir a la URL correcta
    if (post) {
      const correctPath = locale === 'en' ? `/en/blog/${slug}` : `/blog/${slug}`;
      if (correctPath !== window.location.pathname) {
        window.location.href = correctPath;
        return null;
      }
    } else {
      // Intentar encontrar por translationSlug
      const translatedPost = primaryPosts.find(p => p.translationSlug === slug);
      if (translatedPost) {
        const correctPath = isEnglishPath ? `/en/blog/${translatedPost.slug}` : `/blog/${translatedPost.slug}`;
        window.location.href = correctPath;
        return null;
      }
    }
  }

  if (!post) return (
    <main className="blog-post-page">
      <h1>{t('blog.notFound')}</h1>
      <Link to={locale === 'en' ? '/en/blog' : '/blog'}>{t('blog.backToBlog')}</Link>
    </main>
  );

  // Generar la URL completa del post para compartir y meta tags
  // Aseguramos que la URL no tenga barras duplicadas y esté bien formada
  const fullPostUrl = `https://brunopiorno.com.ar${locale === 'en' ? '/en/blog/' : '/blog/'}${post.slug}`;
  console.log('Sharing URL:', fullPostUrl);

  return (
    <>
      <SiteHeader />
      <main className="blog-post-page">
        <Helmet prioritizeSeoTags={true}>
          {/* Básicos */}
          <title>{post.title} | {t('blog.metaTitle')}</title>
          <meta name="description" content={post.description} />
          <link rel="canonical" href={fullPostUrl} />
          
          {/* Open Graph / Facebook */}
          <meta property="og:title" content={`${post.title} | ${t('blog.metaTitle')}`} />
          <meta property="og:description" content={post.description} />
          <meta property="og:image" content={post.cover} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={fullPostUrl} />
          <meta property="og:site_name" content="Bruno Piorno" />
          <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'es_ES'} />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${post.title} | ${t('blog.metaTitle')}`} />
          <meta name="twitter:description" content={post.description} />
          <meta name="twitter:image" content={post.cover} />
          <meta name="twitter:url" content={fullPostUrl} />
          
          {/* LinkedIn */}
          <meta property="linkedin:title" content={`${post.title} | ${t('blog.metaTitle')}`} />
          <meta property="linkedin:description" content={post.description} />
          <meta property="linkedin:image" content={post.cover} />
          <meta property="article:published_time" content={post.date} />
          <meta property="article:author" content="Bruno Piorno" />
        </Helmet>
      <article className="blog-post">
        <header className="blog-post-header">
          <img src={post.cover} alt={post.title} className="blog-post-img" loading="lazy" />
          <h1 className="headline">{post.title}</h1>
          <span className="blog-post-date">{post.date}</span>
          <div className="blog-share">
            <span className="share-label">{t('blog.share')}</span>
            <a
              href="#"
              aria-label={t('blog.shareLinkedin')}
              className="share-btn linkedin"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullPostUrl)}`,
                  'linkedinshare',
                  'width=600,height=600'
                );
                return false;
              }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(fullPostUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('blog.shareTwitter')}
              className="share-btn twitter"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullPostUrl)}&text=${encodeURIComponent(post.title)}`,
                  'twittershare',
                  'width=600,height=450'
                );
                return false;
              }}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullPostUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('blog.shareFacebook')}
              className="share-btn facebook"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullPostUrl)}`,
                  'facebookshare',
                  'width=600,height=450'
                );
                return false;
              }}
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </header>
        <section className="blog-post-content">
          {post.content.map((block, idx) => {
            if (block.type === 'text') return <p key={idx}>{block.value}</p>;
            if (block.type === 'code') return <pre key={idx}><code>{block.value}</code></pre>;
            if (block.type === 'subtitle') return <h2 key={idx}>{block.value}</h2>;
            return null;
          })}
        </section>
      </article>
    </main>
    <ContactSection />
    </>
  );
};

export default BlogPost;
