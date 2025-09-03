import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const roles = [
    {
      name: t('roles.developer'),
      icon: 'fas fa-code',
    },
    {
      name: t('roles.designer'),
      icon: 'fas fa-paint-brush',
    },
    {
      name: t('roles.seller'),
      icon: 'fas fa-chart-line',
    },
    {
      name: t('roles.qa'),
      icon: 'fas fa-vial',
    },
    {
      name: t('roles.pm'),
      icon: 'fas fa-tasks',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <div className="section-title">
            <h2>{t('about.title')}</h2>
          </div>
          <div className="about-content">
            <p>{t('about.desc')}</p>
          </div>
        </div>
        <div className="roles-grid">
          {roles.map((role, index) => (
            <div key={index} className="role-card">
              <i className={role.icon}></i>
              <h3>{role.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
