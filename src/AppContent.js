import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalNotice from './components/LegalNotice';
import CookiesPolicy from './components/CookiesPolicy';
import SiteHeader from './components/SiteHeader';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import NotFoundPage from './components/NotFoundPage';

const AppContent = () => {
  return (
    <Router>
      <SiteHeader />
      <div className="main-content">
        <Routes>
          {/* Rutas en español */}
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          
          {/* Rutas en inglés */}
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/blog" element={<BlogList />} />
          <Route path="/en/blog/:slug" element={<BlogPost />} />

          {/* Páginas legales */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/cookies-policy" element={<CookiesPolicy />} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
      <CookieBanner />
    </Router>
  );
};

export default AppContent;
