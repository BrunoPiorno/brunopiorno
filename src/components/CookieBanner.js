import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <p>
        {t('cookies.banner.text')} 
        <Link to="/privacy-policy">{t('cookies.banner.link')}</Link>.
      </p>
      <div className="cookie-banner-buttons">
        <button onClick={handleAccept} className="cta-button">{t('cookies.banner.accept')}</button>
        <button onClick={handleReject} className="cta-button secondary">{t('cookies.banner.reject')}</button>
      </div>
    </div>
  );
};

export default CookieBanner;
