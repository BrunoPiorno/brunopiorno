import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import posts from '../data/blogPosts';
import posts_en from '../data/blogPosts_en';
import { useLanguage } from '../context/LanguageContext';
import '../App.css';

import SiteHeader from './SiteHeader';
import ContactSection from './ContactSection';

const BlogPost = () => {
  const { slug } = useParams();
  const { locale, t } = useLanguage();
  const navigate = useNavigate();

  // Scroll to top on component load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const currentPosts = locale === 'en' ? posts_en : posts;
  const alternatePosts = locale === 'en' ? posts : posts_en;

  let post = currentPosts.find(p => p.slug === slug);

  // This effect handles the redirection when the language changes
  useEffect(() => {
    if (!post) {
      const postInAlternateLang = alternatePosts.find(p => p.slug === slug);
      if (postInAlternateLang) {
        const translatedSlug = postInAlternateLang.translationSlug;
        const newPath = `/${locale}/blog/${translatedSlug}`;
        navigate(newPath, { replace: true });
      }
    }
  }, [locale, slug, post, alternatePosts, navigate]);

  // If the post is not found after checking, show a 404-like message
  if (!post) {
    // While redirecting, it's better to show nothing or a loader
    // A simple 404 is shown if the slug doesn't exist in any language
    const postExistsInAnyLanguage = alternatePosts.some(p => p.slug === slug);
    if (postExistsInAnyLanguage) {
      return null; // Or a loading spinner
    }

    return (
      <main className="blog-post-page">
        <h1>{t('blog.notFound')}</h1>
        <Link to={`/${locale}/blog`}>{t('blog.backToBlog')}</Link>
      </main>
    );
  }

  const fullPostUrl = `https://globalalora.com/${locale}/blog/${post.slug}`;

  return (
    <>
      <SiteHeader />
      <main className="blog-post-page">
        {/* Hero Section - Específico para cada post */}
        <section className="hero-section" id="hero">
          <div className="section-content">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-text">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {post.title}
                </motion.h1>
                <motion.p
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {post.description}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {locale === 'es'
                    ? 'Artículo técnico basado en nuestra experiencia real desarrollando soluciones digitales.'
                    : 'Technical article based on our real experience developing digital solutions.'}
                </motion.p>
                <motion.div
                  className="hero-meta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <span className="blog-post-date">{post.date}</span>
                </motion.div>
              </div>
              <motion.div 
                className="hero-image"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img src={post.cover} alt={post.title} className="blog-post-img" loading="lazy" />
              </motion.div>
            </motion.div>
            
            <section className="blog-post-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {post.content.map((block, idx) => {
                  if (block.type === 'text') return (
                    <motion.p 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                    >
                      {block.value}
                    </motion.p>
                  );
                  if (block.type === 'code') return (
                    <motion.pre 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                    >
                      <code>{block.value}</code>
                    </motion.pre>
                  );
                  if (block.type === 'subtitle') return (
                    <motion.h2 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                    >
                      {block.value}
                    </motion.h2>
                  );
                  return null;
                })}
              </motion.div>
            </section>
          </div>
        </section>
        
        <Helmet prioritizeSeoTags={true}>
          <title>{`${post.title} | Alora`}</title>
          <meta name="description" content={post.description} />
          <link rel="canonical" href={fullPostUrl} />

          {/* Open Graph / Facebook */}
          <meta property="og:title" content={`${post.title} | Alora`} />
          <meta property="og:description" content={post.description} />
          <meta property="og:image" content={post.cover} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={fullPostUrl} />
          <meta property="og:site_name" content="Alora" />
          <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'es_ES'} />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${post.title} | Alora`} />
          <meta name="twitter:description" content={post.description} />
          <meta name="twitter:image" content={post.cover} />
          <meta name="twitter:url" content={fullPostUrl} />

          {/* LinkedIn */}
          <meta property="linkedin:title" content={`${post.title} | Alora`} />
          <meta property="linkedin:description" content={post.description} />
          <meta property="linkedin:image" content={post.cover} />
          <meta property="article:published_time" content={post.date} />
          <meta property="article:author" content="Alora" />
        </Helmet>
      </main>
      <ContactSection />
    </>
  );
};

export default BlogPost;
