import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
