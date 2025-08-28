import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="blog-post" style={{ marginTop: '120px', marginBottom: '4rem' }}>
      <div className="blog-post-header">
        <h1 className="headline">{t('privacy.title')}</h1>
      </div>
      <div className="blog-post-content">
        <p>{t('privacy.intro')}</p>
        
        <h2>{t('privacy.dataCollection.title')}</h2>
        <p>{t('privacy.dataCollection.content')}</p>
        
        <h2>{t('privacy.dataUse.title')}</h2>
        <p>{t('privacy.dataUse.content')}</p>
        
        <h2>{t('privacy.cookies.title')}</h2>
        <p>{t('privacy.cookies.content')}</p>
        
        <h2>{t('privacy.rights.title')}</h2>
        <p>{t('privacy.rights.content')}</p>
        
        <h2>{t('privacy.contact.title')}</h2>
        <p>{t('privacy.contact.content')}</p>

        <h2>{t('privacy.gdpr.title')}</h2>
        <p>{t('privacy.gdpr.content')}</p>

        <div className="blog-post-footer">
            <Link to="/" className="cta-button">{t('privacy.goBack')}</Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
