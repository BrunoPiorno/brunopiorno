import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import posts from '../data/blogPosts';
import posts_en from '../data/blogPosts_en';
import { useLanguage } from '../context/LanguageContext';
import '../App.css';

import SiteHeader from './SiteHeader';
import ContactSection from './ContactSection';
import Chatbot from './Chatbot';

const BlogList = () => {
  const { locale, t } = useLanguage();
  const selectedPosts = locale === 'en' ? posts_en : posts;

  const sortedPosts = [...selectedPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featuredPost = sortedPosts[0];
  const relatedPosts = sortedPosts.slice(1, 4);
  const canonicalUrl = `https://globalalora.com/${locale}/blog`;

  if (!featuredPost) {
    return (
      <main className="blog-post-page">
        <section className="hero-section">
          <div className="section-content">
            <h1>{locale === 'en' ? 'Articles coming soon' : 'Pronto habrá artículos'}</h1>
            <p>
              {locale === 'en'
                ? 'We are preparing the first story for this space.'
                : 'Estamos preparando el primer artículo para este espacio.'}
            </p>
          </div>
        </section>
      </main>
    );
  }

  const isTiendaNubePost = featuredPost.slug.includes('tienda-nube');

  const emphasisSubtitle =
    locale === 'es'
      ? 'Entonces, ¿cuál conviene: Tienda Nube o WooCommerce?'
      : 'So, Which One Should You Choose?';

  const ctaContent = isTiendaNubePost
    ? {
        eyebrow: locale === 'es' ? 'Decisión Tienda Nube vs WooCommerce' : 'Tienda Nube vs WooCommerce decision',
        title:
          locale === 'es'
            ? '¿Cuál plataforma te conviene hoy (y mañana)?'
            : 'Which platform fits you today (and tomorrow)?',
        description:
          locale === 'es'
            ? 'Revisamos tu catálogo, operaciones, integraciones y proyección para definir si Tienda Nube, WooCommerce u otra alternativa impulsará tu ecommerce.'
            : 'We review your catalog, operations, integrations and roadmap to decide whether Tienda Nube, WooCommerce or another stack will scale your ecommerce.',
        bullets: locale === 'es'
          ? ['Diagnóstico técnico + comercial', 'Recomendación con próximos pasos', 'Plan de implementación o migración']
          : ['Technical + commercial diagnosis', 'Recommendation with next steps', 'Implementation or migration plan'],
      }
    : {
        eyebrow: locale === 'es' ? 'Diagnóstico estratégico' : 'Strategic diagnosis',
        title:
          locale === 'es'
            ? '¿Listo para convertir visitas en oportunidades reales?'
            : 'Ready to turn visits into real opportunities?',
        description:
          locale === 'es'
            ? 'Reservemos una llamada gratuita para analizar tu modelo de negocio y definir la pieza digital que necesitás.'
            : 'Book a free call so we can review your business model and define the digital asset you actually need.',
        bullets: locale === 'es'
          ? ['Mapa de tu embudo actual', 'Prioridades de contenido', 'Siguiente mejor acción']
          : ['Current funnel map', 'Content priorities', 'Next best action'],
      };

  const renderContentBlock = (block, idx) => {
    if (block.type === 'text') {
      const isEmphasisBlock =
        idx > 0 &&
        featuredPost.content[idx - 1]?.type === 'subtitle' &&
        featuredPost.content[idx - 1]?.value === emphasisSubtitle;
      const rawLines = block.value.split('\n');
      const listLines = rawLines.map((line) => line.trim()).filter((line) => line.length > 0);
      const isUnorderedList = listLines.length > 1 && listLines.every((line) => line.startsWith('- '));
      const isOrderedList = listLines.length > 1 && listLines.every((line) => /^\d+\./.test(line));

      if (isEmphasisBlock) {
        return (
          <div key={idx} className="emphasis-block">
            {rawLines
              .map((line) => line.trim())
              .filter((line) => line.length > 0)
              .map((line, lineIdx) => (
                <p key={`${idx}-emphasis-${lineIdx}`}>
                  <strong>{line}</strong>
                </p>
              ))}
          </div>
        );
      }

      if (isUnorderedList) {
        return (
          <ul key={idx} className="blog-rich-list">
            {listLines.map((line, itemIdx) => (
              <li key={`${idx}-${itemIdx}`}>
                <span>{line.replace(/^\-\s*/, '')}</span>
              </li>
            ))}
          </ul>
        );
      }

      if (isOrderedList) {
        return (
          <ol key={idx} className="blog-rich-list ordered">
            {listLines.map((line, itemIdx) => (
              <li key={`${idx}-${itemIdx}`}>
                <span>{line.replace(/^\d+\.\s*/, '')}</span>
              </li>
            ))}
          </ol>
        );
      }

      return (
        <p key={idx} className="blog-paragraph">
          {rawLines.map((line, lineIdx) => (
            <React.Fragment key={`${idx}-line-${lineIdx}`}>
              {line}
              {lineIdx !== rawLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      );
    }

    if (block.type === 'code') {
      return (
        <pre key={idx}>
          <code>{block.value}</code>
        </pre>
      );
    }

    if (block.type === 'comparison' && Array.isArray(block.rows)) {
      return (
        <div key={idx} className="blog-comparison-wrapper">
          <div className="blog-comparison-table">
            <div className="table-head">
              <span>{block.headers?.[0]}</span>
              <span>{block.headers?.[1]}</span>
              <span>{block.headers?.[2]}</span>
            </div>
            {block.rows.map((row, rowIdx) => (
              <div key={`${idx}-row-${rowIdx}`} className="table-row">
                <span className="label">{row.label}</span>
                <span className="landing" data-label={block.headers?.[1]}>
                  {row.landing}
                </span>
                <span className="website" data-label={block.headers?.[2]}>
                  {row.website}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (block.type === 'subtitle') {
      const className = block.value === emphasisSubtitle ? 'emphasis-subtitle' : undefined;
      return (
        <h2 key={idx} className={className}>
          {block.value}
        </h2>
      );
    }

    if (block.type === 'faq' && Array.isArray(block.items)) {
      return (
        <div key={idx} className="blog-faqs">
          {block.items.map((item, faqIdx) => (
            <div className="faq-item" key={`${idx}-faq-${faqIdx}`}>
              <div className="faq-question">
                <span className="faq-icon">?</span>
                <p>{item.question}</p>
              </div>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <SiteHeader />
      <main className="blog-post-page blog-feature-page">
        <Helmet prioritizeSeoTags={true}>
          <title>{`${featuredPost.title} | Alora Blog`}</title>
          <meta name="description" content={featuredPost.description} />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:title" content={`${featuredPost.title} | Alora Blog`} />
          <meta property="og:description" content={featuredPost.description} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:image" content={featuredPost.cover} />
          <meta property="og:locale" content={locale === 'en' ? 'en_US' : 'es_ES'} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${featuredPost.title} | Alora Blog`} />
          <meta name="twitter:description" content={featuredPost.description} />
          <meta name="twitter:image" content={featuredPost.cover} />
        </Helmet>

        <section className="hero-section" id="featured-hero">
          <div className="section-content">
            <div className="hero-content">
              <div className="hero-text">
                <h1>{featuredPost.title}</h1>
                <p className="hero-subtitle">{featuredPost.description}</p>
                <p>
                  {locale === 'es'
                    ? 'Artículo editorial basado en casos reales dentro de Alora.'
                    : 'Editorial article based on real Alora projects.'}
                </p>
                <div className="hero-meta">
                  <span className="blog-post-date">{featuredPost.date}</span>
                </div>
              </div>
              <div className="hero-image">
                <img src={featuredPost.cover} alt={featuredPost.title} className="blog-post-img" loading="lazy" />
              </div>
            </div>

            <section className="blog-post-content">
              {featuredPost.content.map((block, idx) => renderContentBlock(block, idx))}
            </section>

            <section className="blog-post-cta">
              <div className="cta-card">
                <div className="cta-text">
                  <p className="eyebrow">{ctaContent.eyebrow}</p>
                  <h3>{ctaContent.title}</h3>
                  <p>{ctaContent.description}</p>
                  <ul>
                    {ctaContent.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                  <a
                    className="cta-button blog-cta-button"
                    href={locale === 'es' ? 'https://www.globalalora.com/es/llamada-de-relevamiento' : 'https://www.globalalora.com/en/discovery-call'}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {locale === 'es' ? 'Reservar una llamada de relevamiento' : 'Book a discovery call'}
                  </a>
                </div>
                <div className="cta-visual">
                  <img
                    src={isTiendaNubePost
                      ? 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80'
                      : 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80'}
                    alt={locale === 'es' ? 'Equipo trabajando en estrategia digital' : 'Team planning digital strategy'}
                    loading="lazy"
                  />
                </div>
              </div>
            </section>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="related-posts compact">
            <div className="section-content">
              <h2>{locale === 'es' ? 'Artículos relacionados' : 'Related articles'}</h2>
              <ul className="related-links">
                {relatedPosts.map((post) => (
                  <li key={post.slug}>
                    <p className="related-date">{post.date}</p>
                    <Link to={`/${locale}/blog/${post.slug}`}>
                      <strong>{post.title}</strong>
                    </Link>
                    <span className="related-snippet">{post.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <ContactSection />
      <Chatbot />
    </>
  );
};

export default BlogList;
