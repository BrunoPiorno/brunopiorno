import React from 'react';
import { useParams } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import MainLayout from './components/MainLayout';
import { defaultLocale } from './translations';

const LanguageWrapper = () => {
  const { lang } = useParams();
  const supportedLocales = ['es', 'en'];
  const locale = supportedLocales.includes(lang) ? lang : defaultLocale;

  return (
    <LanguageProvider initialLocale={locale}>
      <MainLayout />
    </LanguageProvider>
  );
};

export default LanguageWrapper;
