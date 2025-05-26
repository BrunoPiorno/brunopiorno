import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { locale, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={`Change language to ${locale === 'en' ? 'Spanish' : 'English'}`}
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
