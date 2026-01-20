import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import '../App.css';

const ContactSection = () => {
  const { t, locale } = useLanguage();
  return (
    <section id="contacto" className="contact-section">
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.subtitle')}</p>
        <div className="contact-buttons">
          <motion.a
            href={locale === 'en' ? "https://wa.me/+541124629452" : "https://wa.me/+541124629452"}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button whatsapp"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-whatsapp"></i>
            WhatsApp
          </motion.a>
          <motion.a
            href="mailto:brunopiornop@gmail.com"
            className="contact-button email"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-envelope"></i>
            Email
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/aloraglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button linkedin"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </motion.a>
          <motion.a
            href="https://www.instagram.com/globalalora/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button instagram"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-instagram"></i>
            {t('contact.instagram')}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
