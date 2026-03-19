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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSolutionsOpen && !event.target.closest('.solutions-dropdown')) {
        setIsSolutionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSolutionsOpen]);

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

  const navLinksBeforeDropdown = [
    { href: `/${locale}/#about`, label: t('header.about'), isRouterLink: false },
    { href: `/${locale}/#proyectos`, label: t('header.projects'), isRouterLink: false },
    { href: `/${locale}/#clientes`, label: t('header.clients'), isRouterLink: false },
  ];

  const solutionsServices = [
    { href: `/${locale}/soluciones/desarrollo-web`, label: locale === 'es' ? 'Desarrollo Web' : 'Web Development' },
    { href: `/${locale}/soluciones/landing-pages`, label: 'Landing Pages' },
    { href: `/${locale}/soluciones/aplicaciones-web`, label: locale === 'es' ? 'Aplicaciones Web' : 'Web Applications' },
    { href: `/${locale}/soluciones/ecommerce`, label: 'Ecommerce' },
    { href: `/${locale}/soluciones/google-ads`, label: 'Google Ads' },
    { href: `/${locale}/soluciones/mantenimiento-web`, label: locale === 'es' ? 'Mantenimiento Web' : 'Web Maintenance' },
    { href: `/${locale}/soluciones/atencion-cliente-ia`, label: locale === 'es' ? 'IA para Atención al Cliente' : 'AI for Customer Service' },
  ];

  const solutionsBase = `/${locale}/soluciones`;

  const navLinksAfterDropdown = [
    { href: `/${locale}/#testimonios`, label: t('header.testimonials') || 'Testimonios', isRouterLink: false },
    { href: `/${locale}/blog`, label: t('header.blog'), isRouterLink: true },
  ];

  const handleSolutionsToggle = () => {
    setIsSolutionsOpen(prev => !prev);
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
            
            {/* Solutions Dropdown */}
            <div 
              className="solutions-dropdown"
            >
              <button 
                className="solutions-toggle"
                onClick={handleSolutionsToggle}
              >
                {t('header.solutions')}
                <span className={`dropdown-arrow ${isSolutionsOpen ? 'open' : ''}`}>▼</span>
              </button>
              {isSolutionsOpen && (
                <motion.div 
                  className="solutions-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="solutions-menu-content">
                    <div className="solutions-main">
                      <Link 
                        to={solutionsBase} 
                        className="solutions-main-link"
                        onClick={handleSolutionClick}
                      >
                        {locale === 'es' ? 'Ver todas las soluciones' : 'See all solutions'}
                      </Link>
                    </div>
                    <div className="solutions-divider"></div>
                    <div className="solutions-list">
                      {solutionsServices.map((service, index) => (
                        <Link 
                          key={index}
                          to={service.href}
                          className="solutions-item"
                          onClick={handleSolutionClick}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
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
            <a href={`/${locale}/contacto`} className="contact-btn">{t('header.contact')}</a>
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
            
            {navLinksAfterDropdown.map(link => (
              link.isRouterLink ? (
                <Link key={link.href} to={link.href} onClick={closeMobileMenu}>{link.label}</Link>
              ) : (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.label}</a>
              )
            ))}
            
            {/* Mobile Solutions Dropdown */}
            <div className="mobile-solutions-dropdown">
              <button 
                className="mobile-solutions-toggle"
                onClick={handleSolutionsToggle}
              >
                {t('header.solutions')}
                <span className={`dropdown-arrow ${isSolutionsOpen ? 'open' : ''}`}>▼</span>
              </button>
              {isSolutionsOpen && (
                <motion.div 
                  className="mobile-solutions-menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to={solutionsBase} 
                    className="mobile-solutions-main-link"
                    onClick={handleSolutionClick}
                  >
                    {locale === 'es' ? 'Ver todas las soluciones' : 'See all solutions'}
                  </Link>
                  {solutionsServices.map((service, index) => (
                    <Link 
                      key={index}
                      to={service.href}
                      className="mobile-solutions-item"
                      onClick={handleSolutionClick}
                    >
                      {service.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
            
            <LanguageToggle />
            <a href={`/${locale}/contacto`} className="contact-btn">{t('header.contact')}</a>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
