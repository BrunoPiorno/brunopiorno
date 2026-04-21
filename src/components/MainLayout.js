import React from 'react';
import { useLocation } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import Footer from './Footer';
import CookieBanner from './CookieBanner';
import AppRoutes from '../AppRoutes';

const MainLayout = () => {
  const location = useLocation();
  
  // Ocultar menú en páginas de llamada de relevamiento y contacto
  const isCallPage = location.pathname.includes('/llamada-de-relevamiento') ||
                     location.pathname.includes('/discovery-call') ||
                     location.pathname.includes('/contacto') ||
                     location.pathname.includes('/contact');
                     
  
  return (
    <>
      <SiteHeader hideMenu={isCallPage} />
      <div className="main-content">
        <AppRoutes />
      </div>
      <Footer />
      <CookieBanner />
    </>
  );
};

export default MainLayout;
