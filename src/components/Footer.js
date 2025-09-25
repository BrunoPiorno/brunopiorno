import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import DesignRushWidget from './DesignRushWidget';

const Footer = () => {
  const { t, locale } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-content">
        <DesignRushWidget />
        <p>&copy; {currentYear} Alora. {t('footer.rights')}</p>
        <div className="footer-links">
          <a href={`/${locale}/legal-notice`}>{t('footer.legal')}</a>
          <a href={`/${locale}/privacy-policy`}>{t('footer.privacy')}</a>
          <a href={`/${locale}/cookies-policy`}>{t('footer.cookies')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
