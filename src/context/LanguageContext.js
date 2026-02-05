import React, { createContext, useContext } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { translations, defaultLocale } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLocale }) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Usamos initialLocale si se proporciona, sino derivamos de la URL
  const locale = initialLocale || (params.lang && ['en', 'es'].includes(params.lang) ? params.lang : defaultLocale);

  const t = (key) => {
    return (translations[locale] && translations[locale][key]) || translations[defaultLocale][key] || key;
  };

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    const currentPath = location.pathname;
    
    // Reemplazamos el prefijo de idioma actual por el nuevo
    const newPath = currentPath.startsWith(`/${locale}`) 
      ? currentPath.replace(`/${locale}`, `/${newLocale}`) 
      : `/${newLocale}${currentPath}`;

    navigate(newPath);
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
