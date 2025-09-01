import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import MainLayout from './components/MainLayout';

const LanguageWrapper = () => {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
};

export default LanguageWrapper;
