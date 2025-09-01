import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import NotFoundPage from './components/NotFoundPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/blog" element={<BlogList />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;
