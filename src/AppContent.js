import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalNotice from './components/LegalNotice';
import CookiesPolicy from './components/CookiesPolicy';
import LanguageWrapper from './LanguageWrapper';

const AppContent = () => {
  return (
    <Routes>
      {/* Redirect root to default language */}
      <Route path="/" element={<Navigate to="/es" replace />} />
      
      {/* Language-specific routes */}
      <Route path="/:lang/*" element={<LanguageWrapper />} />

      {/* Static legal pages */}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/legal-notice" element={<LegalNotice />} />
      <Route path="/cookies-policy" element={<CookiesPolicy />} />
    </Routes>
  );
};

export default AppContent;
