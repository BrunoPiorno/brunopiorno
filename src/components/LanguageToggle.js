import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
  const { locale, toggleLanguage } = useLanguage();

  // El botón ahora es mucho más simple. 
  // La lógica de navegación está centralizada en LanguageContext.
  return (
    <button 
      className="language-toggle"
      onClick={toggleLanguage} // Solo llamamos a la función del contexto
      aria-label={`Change language to ${locale === 'en' ? 'Spanish' : 'English'}`}
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
