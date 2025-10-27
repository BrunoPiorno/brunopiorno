import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./components/HomePage'));
const BlogList = lazy(() => import('./components/BlogList'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const LegalNotice = lazy(() => import('./components/LegalNotice'));
const CookiesPolicy = lazy(() => import('./components/CookiesPolicy'));
const ThankYouPage = lazy(() => import('./components/ThankYouPage'));

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/legal-notice" element={<LegalNotice />} />
      <Route path="/cookies-policy" element={<CookiesPolicy />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
