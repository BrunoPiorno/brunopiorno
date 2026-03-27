import React from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import MainLayout from './components/MainLayout';
import { defaultLocale } from './translations';

const LanguageWrapper = () => {
  const { lang, '*': rest } = useParams();
  const location = useLocation();
  const supportedLocales = ['es', 'en'];

  // If the first segment is not a valid locale, redirect to /es/[full-path]
  if (!supportedLocales.includes(lang)) {
    const fullPath = rest ? `/${lang}/${rest}` : `/${lang}`;
    return <Navigate to={`/es${fullPath}${location.search}${location.hash}`} replace />;
  }

  return (
    <LanguageProvider initialLocale={lang}>
      <MainLayout />
    </LanguageProvider>
  );
};

export default LanguageWrapper;
