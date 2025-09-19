import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const DesignRushWidget = () => {
  const { t } = useLanguage();
  const widgetRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Función para inicializar el widget
    const initializeWidget = () => {
      if (widgetRef.current) {
        console.log('Attempting to initialize widget...');
        
        // Método 1: Buscar función global de inicialización
        if (typeof window.DesignRushWidget !== 'undefined') {
          console.log('Found DesignRushWidget global function');
          window.DesignRushWidget();
        }
        
        // Método 2: Disparar eventos que el script podría estar escuchando
        const events = ['DOMContentLoaded', 'load', 'designrush:init'];
        events.forEach(eventName => {
          const event = new Event(eventName);
          document.dispatchEvent(event);
          widgetRef.current.dispatchEvent(event);
        });
        
        // Método 3: Crear un observer para detectar cambios en el DOM
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
              console.log('DOM changed, widget might have been added');
            }
          });
        });
        
        if (widgetRef.current) {
          observer.observe(widgetRef.current, { childList: true, subtree: true });
        }
        
        // Limpiar observer después de 10 segundos
        setTimeout(() => observer.disconnect(), 10000);
      }
    };

    // Verificar si el script ya está cargado
    const existingScript = document.querySelector('script[src*="designrush.com"]');
    
    if (existingScript) {
      console.log('DesignRush script already exists, initializing...');
      setTimeout(initializeWidget, 500);
      return;
    }

    console.log('Loading DesignRush script...');
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.designrush.com/topbest/js/widgets/agency-reviews.js';
    
    script.onload = () => {
      console.log('DesignRush script loaded successfully');
      scriptLoadedRef.current = true;
      
      // Intentar inicializar inmediatamente y también con delay
      initializeWidget();
      setTimeout(initializeWidget, 1000);
      setTimeout(initializeWidget, 3000);
    };

    script.onerror = (error) => {
      console.error('Error loading DesignRush widget script:', error);
    };

    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
        scriptLoadedRef.current = false;
      }
    };
  }, []);

  return (
    <section className="designrush-review-section">
      <div className="review-content">
        <div className="review-header">
          <i className="fas fa-star"></i>
          <h3>{t('reviews.title') || '¿Te gustó nuestro trabajo?'}</h3>
          <p>{t('reviews.subtitle') || 'Comparte tu experiencia y ayuda a otros a conocer nuestro servicio'}</p>
        </div>
        
        <div className="review-widget">
          <div 
            ref={widgetRef}
            data-designrush-widget 
            data-agency-id="101457" 
            data-style="dark" 
            aria-label="DesignRush agency reviews section"
          ></div>
          <noscript>
            <a 
              href="https://www.designrush.com/agency/profile/alora#reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Alora reviews on DesignRush"
              className="review-fallback-link"
            >
              {t('reviews.fallback') || 'Déjanos tu reseña en DesignRush'}
            </a>
          </noscript>
        </div>
      </div>
    </section>
  );
};

export default DesignRushWidget;