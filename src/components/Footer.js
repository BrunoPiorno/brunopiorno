import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>&copy; {currentYear} Alora. {t('footer.rights')}</p>
        <div className="footer-links">
          <a href="/legal">{t('footer.legal')}</a>
          <a href="/privacidad">{t('footer.privacy')}</a>
          <a href="/cookies">{t('footer.cookies')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
