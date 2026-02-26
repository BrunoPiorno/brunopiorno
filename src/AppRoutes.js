import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';

const HomePage = lazy(() => import('./components/HomePage'));
const BlogList = lazy(() => import('./components/BlogList'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const LegalNotice = lazy(() => import('./components/LegalNotice'));
const CookiesPolicy = lazy(() => import('./components/CookiesPolicy'));
const ThankYouPage = lazy(() => import('./components/ThankYouPage'));
const ReviewsPage = lazy(() => import('./components/ReviewsPage'));
const WhatsAppGenerator = lazy(() => import('./components/WhatsAppGenerator'));
const Soluciones = lazy(() => import('./components/Soluciones'));
const DesarrolloWeb = lazy(() => import('./components/DesarrolloWeb'));
const LandingPages = lazy(() => import('./components/LandingPages'));
const AplicacionesWeb = lazy(() => import('./components/AplicacionesWeb'));
const Ecommerce = lazy(() => import('./components/Ecommerce'));
const GoogleAds = lazy(() => import('./components/GoogleAds'));
const ProposalLanding = lazy(() => import('./components/proposals/ProposalLanding'));
const PresentationPage = lazy(() => import('./components/PresentationPage'));

const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/soluciones" element={<Soluciones />} />
      <Route path="/soluciones/desarrollo-web" element={<DesarrolloWeb />} />
      <Route path="/soluciones/landing-pages" element={<LandingPages />} />
      <Route path="/soluciones/aplicaciones-web" element={<AplicacionesWeb />} />
      <Route path="/soluciones/ecommerce" element={<Ecommerce />} />
      <Route path="/soluciones/google-ads" element={<GoogleAds />} />
      <Route path="/whatsapp-generator" element={<WhatsAppGenerator />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/legal-notice" element={<LegalNotice />} />
      <Route path="/cookies-policy" element={<CookiesPolicy />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/presentacion" element={<PresentationPage />} />
      <Route path="/reseñas" element={<ReviewsPage />} />
      <Route path="/propuesta/:slug" element={<ProposalLanding />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
