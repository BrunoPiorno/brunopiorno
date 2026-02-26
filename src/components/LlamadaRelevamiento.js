import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import SiteHeader from './SiteHeader';
import '../App.css';
import '../devicons/devicon.min.css';
import './LlamadaRelevamiento.css';

const LlamadaRelevamientoContent = ({ forcedLocale, standalone = false }) => {
  const { locale } = useLanguage();
  const location = useLocation();
  
  // Detectar idioma de la ruta
  const detectLocaleFromPath = () => {
    if (location.pathname.includes('/discovery-call')) return 'en';
    if (location.pathname.includes('/llamada-de-relevamiento')) return 'es';
    return locale;
  };
  
  const currentLocale = forcedLocale || detectLocaleFromPath();

  useEffect(() => {
    // Agregar clase al body para esta página
    document.body.classList.add('llamada-relevamiento-page');
    
    // Cargar el script de Tidycal
    const script = document.createElement('script');
    script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.classList.remove('llamada-relevamiento-page');
      // Limpiar el script si es necesario
      const existingScript = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const tidycalPath = currentLocale === 'es' ? 'alora/20-minutos-reunion' : 'alora/20-minutes';

  return (
    <>
      {/* Header del sitio con menú oculto - solo en modo standalone */}
      {standalone && (
        <div className="llamada-header-wrapper">
          <SiteHeader hideMenu={true} />
        </div>
      )}

      <div className="llamada-relevamiento-container">
        {/* Simple Header */}
        <div className="llamada-header">
          <h2>
            {currentLocale === 'es' 
              ? 'Agenda tu llamada de relevamiento' 
              : 'Schedule your discovery call'}
          </h2>
          <p>
            {currentLocale === 'es'
              ? 'Selecciona el momento que mejor se adapte a tu agenda'
              : 'Select the time that best fits your schedule'}
          </p>
        </div>

        {/* Calendar Section */}
        <div className="llamada-calendar-wrapper">
          <div 
            className="tidycal-embed" 
            data-path={tidycalPath}
          ></div>
        </div>
      </div>
    </>
  );
};

const LlamadaRelevamiento = ({ standalone = false, locale: forcedLocale }) => {
  if (standalone) {
    return (
      <LanguageProvider initialLocale={forcedLocale}>
        <Helmet>
          <title>
            {forcedLocale === 'es' 
              ? 'Llamada de Relevamiento | Alora' 
              : 'Discovery Call | Alora'}
          </title>
          <meta name="description" content={
            forcedLocale === 'es'
              ? 'Agenda una llamada de 20 minutos para analizar tu proyecto y descubrir cómo podemos ayudarte a alcanzar tus objetivos.'
              : 'Schedule a 20-minute call to analyze your project and discover how we can help you achieve your goals.'
          } />
          <html lang={forcedLocale} />
        </Helmet>
        <LlamadaRelevamientoContent forcedLocale={forcedLocale} standalone={true} />
      </LanguageProvider>
    );
  }

  // Para uso dentro del layout normal (si alguna vez se necesita)
  return <LlamadaRelevamientoContent forcedLocale={forcedLocale} standalone={false} />;
};

export default LlamadaRelevamiento;
