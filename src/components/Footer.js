import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>&copy; {currentYear} Alora. {t('footer.rights')}</p>
        <div className="footer-links">
          <Link to="/legal-notice">{t('footer.legal')}</Link>
          <Link to="/privacy-policy">{t('footer.privacy')}</Link>
          <Link to="/cookies-policy">{t('footer.cookies')}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
