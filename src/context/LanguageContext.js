import React, { createContext, useContext } from 'react';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { translations, defaultLocale } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLocale }) => {
  // Temporarily simplified to avoid circular dependency
  const locale = initialLocale || defaultLocale;

  const t = (key) => {
    return (translations[locale] && translations[locale][key]) || translations[defaultLocale][key] || key;
  };

  const toggleLanguage = () => {
    // Simplified toggle - just switch between es/en
    const newLocale = locale === 'en' ? 'es' : 'en';
    window.location.href = `/${newLocale}${window.location.pathname.replace(/^\/(es|en)/, '')}`;
  };

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
