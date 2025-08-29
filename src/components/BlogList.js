import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import posts from '../data/blogPosts';
import posts_en from '../data/blogPosts_en';
import { useLanguage } from '../context/LanguageContext';
import '../App.css';

import SiteHeader from './SiteHeader';
import ContactSection from './ContactSection';

const BlogList = () => {
  const { locale, t } = useLanguage();
  const selectedPosts = locale === 'en' ? posts_en : posts;
  const blogPath = locale === 'en' ? '/en/blog' : '/blog';

  return (
    <>
      <SiteHeader />
      <main className="blog-list-page">
        <Helmet>
          <title>{locale === 'en' ? t('blog.metaTitleEn') : t('blog.metaTitle')}</title>
          <meta name="description" content={locale === 'en' ? t('blog.metaDescriptionEn') : t('blog.metaDescription')} />
          <meta property="og:title" content={locale === 'en' ? t('blog.metaTitleEn') : t('blog.metaTitle')} />
          <meta property="og:description" content={locale === 'en' ? t('blog.metaDescriptionEn') : t('blog.metaDescription')} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://globalalora.com${blogPath}`} />
        </Helmet>
        <section className="blog-hero">
          <h1 className="headline">{t('blog.headline')}</h1>
          <p className="intro">{t('blog.intro')}</p>
        </section>
        <section className="blog-list">
          {selectedPosts.map(post => (
            <article key={post.slug} className="blog-card">
              <Link to={`${blogPath}/${post.slug}`} className="blog-card-link">
                <img src={post.cover} alt={post.title} className="blog-card-img" loading="lazy" />
                <div className="blog-card-content">
                  <h2>{post.title}</h2>
                  <p className="blog-card-desc">{post.description}</p>
                  <span className="blog-card-date">{post.date}</span>
                </div>
              </Link>
            </article>
          ))}
        </section>
      </main>
      <ContactSection />
    </>
  );
};

export default BlogList;
