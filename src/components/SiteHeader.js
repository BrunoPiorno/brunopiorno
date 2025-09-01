import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import '../App.css';

const SiteHeader = () => {
  const { t, locale } = useLanguage();
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: `/${locale}/#servicios`, label: t('header.services'), isRouterLink: false },
    { href: `/${locale}/#proyectos`, label: t('header.projects'), isRouterLink: false },
    { href: `/${locale}/#clientes`, label: t('header.clients'), isRouterLink: false },
    { href: `/${locale}/#metodologia`, label: t('header.methodology'), isRouterLink: false },
    { href: `/${locale}/#tecnologias`, label: t('header.technologies'), isRouterLink: false },
    { href: `/${locale}/blog`, label: t('header.blog'), isRouterLink: true },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className={`nav-content ${isMobileMenuOpen ? 'menu-open' : ''}`}>
        <Link 
          to={`/${locale}`}
          className="logo-container"
          onClick={closeMobileMenu}
        >
          <motion.img
            src="/logo-web.png"
            alt="Alora"
            className="logo"
            transition={{ duration: 0.2 }}
          />
        </Link>

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
            link.isRouterLink ? (
              <Link key={link.href} to={link.href} onClick={closeMobileMenu}>{link.label}</Link>
            ) : (
              <a key={link.href} href={link.href} onClick={closeMobileMenu}>{link.label}</a>
            )
          ))}
          <LanguageToggle />
          <a href={`/${locale}/#contacto`} className="contact-btn" onClick={closeMobileMenu}>{t('header.contact')}</a>
        </motion.div>
      </div>
    </header>
  );
};

export default SiteHeader;
