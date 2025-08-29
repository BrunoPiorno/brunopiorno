import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const CookiesPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="blog-post" style={{ marginTop: '120px', marginBottom: '4rem' }}>
        <Helmet>
            <title>{`${t('cookiesPolicy.title')} - Alora`}</title>
            <meta name="description" content={t('cookiesPolicy.meta_description')} />
        </Helmet>
        <div className="blog-post-header">
          <h1 className="headline">{t('cookiesPolicy.title')}</h1>
        </div>
        <motion.div 
            className="blog-post-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <p>{t('cookiesPolicy.content.p1')}</p>
            <h2>{t('cookiesPolicy.section1.title')}</h2>
            <p>{t('cookiesPolicy.section1.content')}</p>
            <h2>{t('cookiesPolicy.section2.title')}</h2>
            <p>{t('cookiesPolicy.section2.content')}</p>
        </motion.div>
    </div>
  );
};

export default CookiesPolicy;
