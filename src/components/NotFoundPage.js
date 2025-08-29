import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import notFoundImage from '../images/404.png';
import '../App.css';

const NotFoundPage = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, delay: 0.4 },
    },
  };

  return (
    <motion.div
      className="not-found-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.img
        src={notFoundImage}
        alt="404 Not Found"
        style={{ width: '300px', marginBottom: '2rem' }}
        variants={imageVariants}
      />
      <motion.h1 variants={itemVariants}>{t('notFound.title')}</motion.h1>
      <motion.p variants={itemVariants}>{t('notFound.subtitle')}</motion.p>
      <motion.div variants={itemVariants}>
        <button className="cta-button" onClick={() => (window.location.href = '/')}>
          {t('notFound.button')}
        </button>
      </motion.div>
    </motion.div>
  );
};

export default NotFoundPage;
