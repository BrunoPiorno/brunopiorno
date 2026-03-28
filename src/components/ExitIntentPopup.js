import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './ExitIntentPopup.css';

const STORAGE_KEY = 'alora_exit_popup_shown';
const COOLDOWN_DAYS = 3;

const ExitIntentPopup = () => {
  const { locale } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  const shouldShow = useCallback(() => {
    const last = localStorage.getItem(STORAGE_KEY);
    if (!last) return true;
    const diff = (Date.now() - parseInt(last, 10)) / (1000 * 60 * 60 * 24);
    return diff >= COOLDOWN_DAYS;
  }, []);

  useEffect(() => {
    let triggered = false;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 5 && !triggered && shouldShow()) {
        triggered = true;
        setTimeout(() => setIsVisible(true), 200);
      }
    };

    if (window.innerWidth >= 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
    } else {
      // Mobile: show after 45s
      const timer = setTimeout(() => {
        if (shouldShow()) setIsVisible(true);
      }, 45000);
      return () => clearTimeout(timer);
    }

    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [shouldShow]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  const ctaUrl = locale === 'en'
    ? 'https://www.globalalora.com/en/discovery-call'
    : 'https://www.globalalora.com/es/llamada-de-relevamiento';

  const handleCTA = () => {
    if (window.gtag) {
      window.gtag('event', 'exit_popup_cta_click', { locale });
    }
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  const handleWhatsApp = () => {
    const msg = locale === 'es'
      ? 'Hola! Estaba viendo su web y quiero saber cuánto cuesta mi proyecto.'
      : 'Hi! I was on your site and want to know how much my project costs.';
    window.open(
      `https://api.whatsapp.com/send/?phone=${encodeURIComponent('+5491124629452')}&text=${encodeURIComponent(msg)}&type=phone_number&app_absent=0`,
      '_blank'
    );
    handleClose();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="eip-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            className="eip-modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', damping: 22, stiffness: 320 }}
            role="dialog"
            aria-modal="true"
          >
            <button className="eip-close" onClick={handleClose} aria-label="Cerrar">
              <i className="fas fa-times"></i>
            </button>

            <div className="eip-icon">💡</div>

            <p className="eip-eyebrow">
              {locale === 'es' ? '¡Espera! Antes de irte...' : 'Wait! Before you go...'}
            </p>

            <h2 className="eip-title">
              {locale === 'es'
                ? '¿Sabés cuánto cuesta tu proyecto?'
                : 'Do you know how much your project costs?'}
            </h2>

            <p className="eip-subtitle">
              {locale === 'es'
                ? 'Reservá una sesión gratuita de 20 minutos y te damos una cotización en menos de 24hs. Sin compromiso.'
                : 'Book a free 20-minute session and get a quote within 24 hours. No commitment.'}
            </p>

            <a
              href={ctaUrl}
              className="eip-btn-primary"
              onClick={handleCTA}
            >
              <i className="fas fa-calendar-alt"></i>
              {locale === 'es' ? 'Reservar sesión gratuita' : 'Book free session'}
            </a>

            <p className="eip-or">
              {locale === 'es' ? 'o escribinos directo' : 'or message us directly'}
            </p>

            <button className="eip-btn-whatsapp" onClick={handleWhatsApp}>
              <i className="fab fa-whatsapp"></i>
              {locale === 'es' ? 'Hablar por WhatsApp' : 'Chat on WhatsApp'}
            </button>

            <button className="eip-dismiss" onClick={handleClose}>
              {locale === 'es' ? 'No gracias, me la pierdo' : 'No thanks, I\'ll pass'}
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
