import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LanguageWrapper from './LanguageWrapper';

const AppContent = () => {
  return (
    <Routes>
      {/* Redirect root to default language */}
      <Route path="/" element={<Navigate to="/es" replace />} />
      
      {/* Language-specific routes */}
      <Route path="/:lang/*" element={<LanguageWrapper />} />

    </Routes>
  );
};

export default AppContent;
