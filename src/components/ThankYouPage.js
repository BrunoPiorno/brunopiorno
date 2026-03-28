import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import './ThankYouPage.css';

const ThankYouPage = () => {
  const { t, locale } = useLanguage();

  useEffect(() => {
    if (window.gtag) {
      gtag('event', 'conversion', {
        'send_to': 'AW-17870984533/mzbxCJXq4-EbENWqxslC',
        'value': 1.0,
        'currency': 'USD'
      });
    }
    document.body.classList.add('page-thank-you');
    return () => document.body.classList.remove('page-thank-you');
  }, []);

  const steps = locale === 'es'
    ? [
        { icon: 'fa-envelope', title: 'Recibimos tu mensaje', desc: 'Ya tenemos tus datos y el detalle de tu proyecto.' },
        { icon: 'fa-search', title: 'Lo analizamos', desc: 'Revisamos tu caso y preparamos una propuesta personalizada.' },
        { icon: 'fa-phone', title: 'Te contactamos', desc: 'Un experto te escribe o llama en menos de 24 horas.' },
      ]
    : [
        { icon: 'fa-envelope', title: 'We received your message', desc: 'We already have your details and project info.' },
        { icon: 'fa-search', title: 'We analyze it', desc: 'We review your case and prepare a personalized proposal.' },
        { icon: 'fa-phone', title: 'We contact you', desc: 'An expert writes or calls you within 24 hours.' },
      ];

  return (
    <div className="thank-you-page">
      <Helmet>
        <title>{t('meta.thankYouTitle')}</title>
      </Helmet>

      {/* Hero */}
      <motion.section
        className="ty-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="ty-check">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <h1>{locale === 'es' ? '¡Mensaje recibido!' : 'Message received!'}</h1>
        <p className="ty-subtitle">
          {locale === 'es'
            ? 'Gracias por escribirnos. Te respondemos en menos de 24 horas con una propuesta personalizada.'
            : 'Thanks for reaching out. We\'ll reply within 24 hours with a personalized proposal.'}
        </p>
      </motion.section>

      {/* Next steps */}
      <motion.section
        className="ty-steps"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>{locale === 'es' ? '¿Qué pasa ahora?' : 'What happens next?'}</h2>
        <div className="ty-steps-grid">
          {steps.map((step, i) => (
            <div className="ty-step" key={i}>
              <div className="ty-step-number">{i + 1}</div>
              <div className="ty-step-icon"><i className={`fas ${step.icon}`}></i></div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA: book call */}
      <motion.section
        className="ty-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>{locale === 'es' ? '¿No querés esperar?' : 'Don\'t want to wait?'}</h2>
        <p>
          {locale === 'es'
            ? 'Agendá ahora mismo una llamada gratuita de 20 minutos y hablamos de tu proyecto al instante.'
            : 'Book a free 20-minute call right now and let\'s talk about your project instantly.'}
        </p>
        <a
          href={locale === 'es' ? 'https://tidycal.com/alora/20-minutos-reunion' : 'https://tidycal.com/alora/20-minutes'}
          target="_blank"
          rel="noopener noreferrer"
          className="ty-btn-primary"
        >
          <i className="fas fa-calendar-alt"></i>
          {locale === 'es' ? 'Agendar llamada gratuita' : 'Book free call'}
        </a>
      </motion.section>

      {/* Social proof mini */}
      <motion.section
        className="ty-social"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="ty-social-label">{locale === 'es' ? 'Mientras esperás, seguinos:' : 'While you wait, follow us:'}</p>
        <div className="ty-social-links">
          <a href="https://www.linkedin.com/company/aloraglobal" target="_blank" rel="noopener noreferrer" className="ty-social-btn">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://www.instagram.com/globalalora/" target="_blank" rel="noopener noreferrer" className="ty-social-btn">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href={`/${locale}/blog`} className="ty-social-btn">
            <i className="fas fa-newspaper"></i> {locale === 'es' ? 'Blog' : 'Blog'}
          </a>
        </div>
      </motion.section>

      {/* Back home */}
      <motion.div
        className="ty-back"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Link to={`/${locale}`} className="ty-btn-secondary">
          <i className="fas fa-arrow-left"></i>
          {locale === 'es' ? 'Volver al inicio' : 'Back to home'}
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
