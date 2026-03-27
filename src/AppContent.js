import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LanguageWrapper from './LanguageWrapper';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';

const LlamadaRelevamiento = lazy(() => import('./components/LlamadaRelevamiento'));

// Redirects any route without language prefix to /es/...
const RedirectToEs = () => {
  const location = useLocation();
  return <Navigate to={`/es${location.pathname}${location.search}${location.hash}`} replace />;
};

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

      {/* Redirect routes without language prefix to /es/ */}
      <Route path="/soluciones/*" element={<RedirectToEs />} />
      <Route path="/blog/*" element={<RedirectToEs />} />
      <Route path="/blog" element={<Navigate to="/es/blog" replace />} />
      <Route path="/presentacion" element={<Navigate to="/es/presentacion" replace />} />
      <Route path="/contacto" element={<Navigate to="/es/contacto" replace />} />
      <Route path="/contact" element={<Navigate to="/en/contact" replace />} />
      <Route path="/whatsapp-generator" element={<Navigate to="/es/whatsapp-generator" replace />} />
      <Route path="/reseñas" element={<Navigate to="/es/reseñas" replace />} />
      <Route path="/thank-you" element={<Navigate to="/es/thank-you" replace />} />
      <Route path="/privacy-policy" element={<Navigate to="/es/privacy-policy" replace />} />
      <Route path="/legal-notice" element={<Navigate to="/es/legal-notice" replace />} />
      <Route path="/cookies-policy" element={<Navigate to="/es/cookies-policy" replace />} />
      <Route path="/propuesta/*" element={<RedirectToEs />} />

      {/* Language-specific routes */}
      <Route path="/:lang/*" element={<LanguageWrapper />} />

    </Routes>
  );
};

export default AppContent;
