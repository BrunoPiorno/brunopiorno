import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './AloraTransition.css';
import oldLogo from '../images/logo-mio.png';
import newLogo from '../images/logo-web.png';

const AloraTransition = () => {
  const { t } = useLanguage();

  return (
    <section className="alora-transition-section">
      <motion.div
        className="alora-transition-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="transition-column old-brand">
          <motion.img 
            src={oldLogo} 
            alt="Alora Logo" 
            className="transition-logo old-logo"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('alora.previously')}
          </motion.p>
        </div>

        <motion.div 
          className="arrows-wrapper"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <i className="fas fa-angle-right"></i>
          <i className="fas fa-angle-right"></i>
          <i className="fas fa-angle-right"></i>
        </motion.div>

        <div className="transition-column new-brand">
          <motion.img 
            src={newLogo} 
            alt="Alora Logo" 
            className="transition-logo new-logo"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('alora.now')}
          </motion.p>
        </div>
      </motion.div>
      <motion.div 
        className="alora-message"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <h2>{t('alora.title')}</h2>
        <p>{t('alora.subtitle')}</p>
      </motion.div>
    </section>
  );
};

export default AloraTransition;
