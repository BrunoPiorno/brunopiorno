import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LanguageWrapper from './LanguageWrapper';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';

const LlamadaRelevamiento = lazy(() => import('./components/LlamadaRelevamiento'));

const AppContent = () => {
  return (
    <Routes>
      {/* Rutas standalone para llamada de relevamiento en ambos idiomas */}
      <Route 
        path="/llamada-de-relevamiento" 
        element={
          <Suspense fallback={<Loader />}>
            <LlamadaRelevamiento standalone={true} locale="es" />
          </Suspense>
        } 
      />
      <Route 
        path="/discovery-call" 
        element={
          <Suspense fallback={<Loader />}>
            <LlamadaRelevamiento standalone={true} locale="en" />
          </Suspense>
        } 
      />
      
      {/* Redirect root to default language */}
      <Route path="/" element={<Navigate to="/es" replace />} />
      
      {/* Language-specific routes */}
      <Route path="/:lang/*" element={<LanguageWrapper />} />

    </Routes>
  );
};

export default AppContent;
