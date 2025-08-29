import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import '../App.css';

const SiteHeader = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // En blog y otras páginas, los anchors no hacen scroll, así que los links van a /#seccion
  const navLinks = [
    { href: '/#servicios', label: t('header.services') },
    { href: '/#proyectos', label: t('header.projects') },
    { href: '/#clientes', label: t('header.clients') },
    { href: '/#metodologia', label: t('header.methodology') },
    { href: '/#tecnologias', label: t('header.technologies') },
    { href: '/blog', label: t('header.blog') },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className={`nav-content ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <motion.a 
          href="/"
          className="logo-container"
        >
          <motion.img
            src="/logo-web.png"
            alt="Alora"
            className="logo"
            transition={{ duration: 0.2 }}
          />
        </motion.a>

        <div className="mobile-controls">
          <LanguageToggle />
          <button 
            className="mobile-menu-button" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <motion.div 
          className="nav-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {navLinks.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          <LanguageToggle />
          <a href="/#contacto" className="contact-btn">{t('header.contact')}</a>
        </motion.div>
      </div>
    </header>
  );
};

export default SiteHeader;
