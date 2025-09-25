import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import NotFoundPage from './components/NotFoundPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalNotice from './components/LegalNotice';
import CookiesPolicy from './components/CookiesPolicy';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/blog" element={<BlogList />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/legal-notice" element={<LegalNotice />} />
    <Route path="/cookies-policy" element={<CookiesPolicy />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
