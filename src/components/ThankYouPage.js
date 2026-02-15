import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ThankYouPage = () => {
  const { t, locale } = useLanguage();

  useEffect(() => {
    // Event snippet for EN - FORM SENT conversion page
    if (window.gtag) {
      gtag('event', 'conversion', {
        'send_to': 'AW-17870984533/mzbxCJXq4-EbENWqxslC',
        'value': 1.0,
        'currency': 'USD'
      });
    }

    // Add page class to body
    document.body.classList.add('page-thank-you');

    // Cleanup: remove class when component unmounts
    return () => {
      document.body.classList.remove('page-thank-you');
    };
  }, []);

  return (
    <div className="thank-you-page">
      <motion.div 
        className="thank-you-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="thank-you-icon">
          <i className="fa-solid fa-check-circle"></i>
        </div>
        <h1>{t('thankyou.title')}</h1>
        <p>{t('thankyou.message')}</p>
        
        <div className="calendar-section">
          <h3>{t('thankyou.calendarTitle')}</h3>
          <p>{locale === 'es' 
            ? 'Si no quieres esperar nuestra respuesta, puedes reservar ahora mismo una llamada gratuita con nosotros haciendo click en el siguiente botón:'
            : 'If you don\'t want to wait for our response, you can book a free call with us right now by clicking the following button:'
          }</p>
        </div>
        
        <a 
          href={locale === 'es' 
            ? 'https://www.globalalora.com/es/llamada-de-relevamiento' 
            : 'https://www.globalalora.com/en/discovery-call'
          } 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-button"
        >
          {locale === 'es' ? 'Agenda Reunión' : 'Schedule Meeting'}
        </a>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
