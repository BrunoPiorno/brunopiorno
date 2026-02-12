import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import '../App.css';

const SiteHeader = ({ hideMenu = false }) => {
  const { t, locale } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  

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
    setIsSolutionsOpen(false);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMobileMenu();

    const targetId = href.split('#')[1];
    const targetElement = document.getElementById(targetId);

    const homePath = `/${locale}`;

    if (location.pathname !== homePath) {
      navigate(homePath);
      setTimeout(() => {
        const newTargetElement = document.getElementById(targetId);
        if (newTargetElement) {
          newTargetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Espera a que la navegación se complete
    } else {
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const solutionsBase = `/${locale}/soluciones`;

  const navLinksBeforeDropdown = [
    { href: `/${locale}/#about`, label: t('header.about'), isRouterLink: false },
    { href: `/${locale}/#proyectos`, label: t('header.projects'), isRouterLink: false }
  ];

  const navLinksAfterDropdown = [
    { href: `/${locale}/#clientes`, label: t('header.clients'), isRouterLink: false },
    { href: `/${locale}/#tecnologias`, label: t('header.technologies'), isRouterLink: false }
  ];

  const solutionsMenu = locale === 'es'
    ? [
        { label: 'Desarrollo Web', href: `${solutionsBase}/desarrollo-web` },
        { label: 'Landing Pages', href: `${solutionsBase}/landing-pages` },
        { label: 'Aplicaciones Web', href: `${solutionsBase}/aplicaciones-web` },
        { label: 'Ecommerce', href: `${solutionsBase}/ecommerce` },
        { label: 'Google Ads', href: `${solutionsBase}/google-ads` }
      ]
    : [
        { label: 'Web Development', href: `${solutionsBase}/desarrollo-web` },
        { label: 'Landing Pages', href: `${solutionsBase}/landing-pages` },
        { label: 'Web Applications', href: `${solutionsBase}/aplicaciones-web` },
        { label: 'Ecommerce', href: `${solutionsBase}/ecommerce` },
        { label: 'Google Ads', href: `${solutionsBase}/google-ads` }
      ];

  const handleSolutionsToggle = () => {
    setIsSolutionsOpen(prev => !prev);
  };

  const handleSolutionsHover = (open) => {
    if (window.innerWidth >= 992) {
      setIsSolutionsOpen(open);
    }
  };

  const handleSolutionClick = () => {
    closeMobileMenu();
    setIsSolutionsOpen(false);
  };

  const handleSolutionsClick = () => {
    navigate(solutionsBase);
    closeMobileMenu();
  };

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
          {!hideMenu && <LanguageToggle />}
          {!hideMenu && (
            <button 
              className="mobile-menu-button" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>

        {!hideMenu && (
          <motion.div 
            className="nav-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {navLinksBeforeDropdown.map(link => (
              link.isRouterLink ? (
                <Link key={link.href} to={link.href} onClick={closeMobileMenu}>{link.label}</Link>
              ) : (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
              )
            ))}
            <div
              className={`nav-item has-dropdown ${isSolutionsOpen ? 'open' : ''}`}
              onMouseEnter={() => handleSolutionsHover(true)}
              onMouseLeave={() => handleSolutionsHover(false)}
            >
              <button
                className="dropdown-trigger"
                type="button"
                aria-haspopup="true"
                aria-expanded={isSolutionsOpen}
                onClick={handleSolutionsClick}
              >
                {t('header.solutions')}
                <span className="dropdown-icon" aria-hidden="true">⌄</span>
              </button>
              <div className="solutions-dropdown">
                {solutionsMenu.map(item => (
                  <Link key={item.href} to={item.href} onClick={handleSolutionClick}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {navLinksAfterDropdown.map(link => (
              link.isRouterLink ? (
                <Link key={link.href} to={link.href} onClick={closeMobileMenu}>{link.label}</Link>
              ) : (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
              )
            ))}
            <LanguageToggle />
            <a href={`/${locale}/#contacto`} className="contact-btn" onClick={(e) => handleNavClick(e, `/${locale}/#contacto`)}>{t('header.contact')}</a>
          </motion.div>
        )}
        {isMobileMenuOpen && !hideMenu && (
          <motion.div 
            className="mobile-nav-links"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinksBeforeDropdown.map(link => (
              link.isRouterLink ? (
                <Link key={link.href} to={link.href} onClick={closeMobileMenu}>{link.label}</Link>
              ) : (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
              )
            ))}
            <div className={`mobile-dropdown ${isSolutionsOpen ? 'open' : ''}`}>
              <button className="dropdown-trigger" onClick={handleSolutionsToggle}>
                {t('header.solutions')}
                <span className="dropdown-icon" aria-hidden="true">⌄</span>
              </button>
              {isSolutionsOpen && (
                <div className="solutions-dropdown">
                  {solutionsMenu.map(item => (
                    <Link key={item.href} to={item.href} onClick={handleSolutionClick}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinksAfterDropdown.map(link => (
              link.isRouterLink ? (
                <Link key={link.href} to={link.href} onClick={closeMobileMenu}>{link.label}</Link>
              ) : (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
              )
            ))}
            <LanguageToggle />
            <a href={`/${locale}/#contacto`} className="contact-btn" onClick={(e) => handleNavClick(e, `/${locale}/#contacto`)}>{t('header.contact')}</a>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
