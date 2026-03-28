import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './ExitIntentPopup.css';

const STORAGE_KEY = 'alora_exit_popup_shown';
const COOLDOWN_DAYS = 7;

const ExitIntentPopup = () => {
  const { locale } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const shouldShow = useCallback(() => {
    const last = localStorage.getItem(STORAGE_KEY);
    if (!last) return true;
    const diff = (Date.now() - parseInt(last, 10)) / (1000 * 60 * 60 * 24);
    return diff >= COOLDOWN_DAYS;
  }, []);

  useEffect(() => {
    let triggered = false;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 10 && !triggered && shouldShow()) {
        triggered = true;
        // Small delay so it feels natural
        setTimeout(() => setIsVisible(true), 300);
      }
    };

    // Only on desktop (no exit intent on mobile, use scroll instead)
    if (window.innerWidth >= 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
    } else {
      // On mobile: show after 60s of being on page
      const timer = setTimeout(() => {
        if (shouldShow()) setIsVisible(true);
      }, 60000);
      return () => clearTimeout(timer);
    }

    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [shouldShow]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  };

  const handleWhatsApp = () => {
    const msg = locale === 'es'
      ? 'Hola! Estaba viendo su web y me gustaría saber cuánto cuesta mi proyecto.'
      : 'Hi! I was browsing your site and would like to know how much my project costs.';
    const url = `https://api.whatsapp.com/send/?phone=${encodeURIComponent('+5491124629452')}&text=${encodeURIComponent(msg)}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
    handleClose();
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // Track in GA4 if available
    if (window.gtag) {
      window.gtag('event', 'exit_popup_email', { email });
    }
    setSubmitted(true);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setTimeout(() => {
      setIsVisible(false);
    }, 2500);
  };

  const copy = {
    es: {
      eyebrow: '¡Espera! Antes de irte...',
      title: '¿Sabés cuánto cuesta tu proyecto?',
      subtitle: 'Dejanos tu email y te enviamos una estimación gratuita en menos de 24 horas. Sin compromisos.',
      placeholder: 'tu@email.com',
      btn: 'Quiero mi estimación gratis',
      or: 'o si preferís una respuesta inmediata',
      whatsapp: 'Hablar por WhatsApp ahora',
      successTitle: '¡Perfecto! 🎉',
      successMsg: 'Te escribimos en menos de 24 horas.',
      close: 'No gracias, me la pierdo',
    },
    en: {
      eyebrow: 'Wait! Before you go...',
      title: 'Do you know how much your project costs?',
      subtitle: 'Leave your email and we\'ll send you a free estimate within 24 hours. No commitment.',
      placeholder: 'your@email.com',
      btn: 'Get my free estimate',
      or: 'or if you prefer an instant answer',
      whatsapp: 'Chat on WhatsApp now',
      successTitle: 'Perfect! 🎉',
      successMsg: 'We\'ll write to you within 24 hours.',
      close: 'No thanks, I\'ll pass',
    },
  };

  const c = copy[locale] || copy.es;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            className="eip-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="eip-modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
          >
            <button className="eip-close" onClick={handleClose} aria-label="Cerrar">
              <i className="fas fa-times"></i>
            </button>

            {!submitted ? (
              <>
                <p className="eip-eyebrow">{c.eyebrow}</p>
                <h2 className="eip-title">{c.title}</h2>
                <p className="eip-subtitle">{c.subtitle}</p>

                <form className="eip-form" onSubmit={handleEmailSubmit}>
                  <input
                    type="email"
                    className="eip-input"
                    placeholder={c.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoFocus
                  />
                  <button type="submit" className="eip-btn-primary">
                    {c.btn}
                  </button>
                </form>

                <p className="eip-or">{c.or}</p>

                <button className="eip-btn-whatsapp" onClick={handleWhatsApp}>
                  <i className="fab fa-whatsapp"></i>
                  {c.whatsapp}
                </button>

                <button className="eip-dismiss" onClick={handleClose}>
                  {c.close}
                </button>
              </>
            ) : (
              <motion.div
                className="eip-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="eip-success-icon">✅</div>
                <h3>{c.successTitle}</h3>
                <p>{c.successMsg}</p>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
