import React from 'react';
import SiteHeader from './SiteHeader';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import AppRoutes from '../AppRoutes';

const MainLayout = () => {
  return (
    <>
      <SiteHeader />
      <div className="main-content">
        <AppRoutes />
      </div>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default MainLayout;
