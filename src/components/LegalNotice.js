import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const LegalNotice = () => {
  const { t } = useLanguage();

  return (
    <div className="blog-post" style={{ marginTop: '120px', marginBottom: '4rem' }}>
      <Helmet>
        <title>{`${t('legalNotice.title')} - Bruno Piorno`}</title>
        <meta name="description" content={t('legalNotice.meta_description')} />
      </Helmet>
      <div className="blog-post-header">
        <h1 className="headline">{t('legalNotice.title')}</h1>
      </div>
      <motion.div 
        className="blog-post-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>{t('legalNotice.content.p1')}</p>
        <h2>{t('legalNotice.section1.title')}</h2>
        <p>{t('legalNotice.section1.content')}</p>
        <h2>{t('legalNotice.section2.title')}</h2>
        <p>{t('legalNotice.section2.content')}</p>
      </motion.div>
    </div>
  );
};

export default LegalNotice;
