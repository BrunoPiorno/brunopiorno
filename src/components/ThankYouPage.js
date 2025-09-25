import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ThankYouPage = () => {
  const { t, locale } = useLanguage();

  return (
    <div className="thank-you-page">
      <motion.div 
        className="thank-you-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="thank-you-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h1>{t('thankyou.title')}</h1>
        <p>{t('thankyou.message')}</p>
        <Link to={`/${locale}`} className="cta-button">
          {t('thankyou.backButton')}
        </Link>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
