import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import '../App.css';
import '../devicons/devicon.min.css';
import ContactForm from './ContactForm';
import Chatbot from './Chatbot';

const ServicesPage = () => {
  const { t, locale } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = useMemo(() => [
    {
      id: 'desarrollo-web',
      title: t('services.webdev.title'),
      description: t('services.webdev.desc'),
      detailedDescription: t('services.webdev.detailed'),
      icon: 'devicon-html5-plain',
      features: [
        t('services.webdev.feature1'),
        t('services.webdev.feature2'),
        t('services.webdev.feature3'),
        t('services.webdev.feature4')
      ],
      technologies: ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      id: 'landing-page',
      title: t('services.landing.title'),
      description: t('services.landing.desc'),
      detailedDescription: t('services.landing.detailed'),
      icon: 'devicon-figma-plain',
      features: [
        t('services.landing.feature1'),
        t('services.landing.feature2'),
        t('services.landing.feature3'),
        t('services.landing.feature4')
      ],
      technologies: ['Figma', 'Framer Motion', 'Tailwind CSS', 'GSAP']
    },
    {
      id: 'aplicacion-web',
      title: t('services.webapp.title'),
      description: t('services.webapp.desc'),
      detailedDescription: t('services.webapp.detailed'),
      icon: 'devicon-react-original',
      features: [
        t('services.webapp.feature1'),
        t('services.webapp.feature2'),
        t('services.webapp.feature3'),
        t('services.webapp.feature4')
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'REST API']
    },
    {
      id: 'woocommerce',
      title: t('services.woocommerce.title'),
      description: t('services.woocommerce.desc'),
      detailedDescription: t('services.woocommerce.detailed'),
      icon: 'devicon-woocommerce-plain',
      features: [
        t('services.woocommerce.feature1'),
        t('services.woocommerce.feature2'),
        t('services.woocommerce.feature3'),
        t('services.woocommerce.feature4')
      ],
      technologies: ['WooCommerce', 'WordPress', 'PHP', 'MySQL', 'Stripe API']
    },
    {
      id: 'google-ads',
      title: t('services.googleads.title'),
      description: t('services.googleads.desc'),
      detailedDescription: t('services.googleads.detailed'),
      icon: 'devicon-google-plain',
      features: [
        t('services.googleads.feature1'),
        t('services.googleads.feature2'),
        t('services.googleads.feature3'),
        t('services.googleads.feature4')
      ],
      technologies: ['Google Ads', 'Google Analytics', 'Tag Manager', 'SEO Tools']
    },
    {
      id: 'mantenimiento',
      title: t('services.maintenance.title'),
      description: t('services.maintenance.desc'),
      detailedDescription: t('services.maintenance.detailed'),
      icon: 'devicon-github-original',
      features: [
        t('services.maintenance.feature1'),
        t('services.maintenance.feature2'),
        t('services.maintenance.feature3'),
        t('services.maintenance.feature4')
      ],
      technologies: ['GitHub', 'CI/CD', 'Monitoring Tools', 'Backup Systems']
    },
    {
      id: 'atencion-ia',
      title: t('services.aisupport.title'),
      description: t('services.aisupport.desc'),
      detailedDescription: t('services.aisupport.detailed'),
      icon: 'devicon-python-plain',
      features: [
        t('services.aisupport.feature1'),
        t('services.aisupport.feature2'),
        t('services.aisupport.feature3'),
        t('services.aisupport.feature4')
      ],
      technologies: ['Python', 'TensorFlow', 'NLP', 'Chatbot APIs', 'Machine Learning']
    }
  ], [t]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="services-page">
      <Helmet>
        <title>{t('servicesPage.meta.title')}</title>
        <meta name="description" content={t('servicesPage.meta.description')} />
        <meta name="keywords" content={t('servicesPage.meta.keywords')} />
        <meta property="og:title" content={t('servicesPage.meta.title')} />
        <meta property="og:description" content={t('servicesPage.meta.description')} />
        <meta property="og:image" content="/aloralogo.png" />
        <meta property="og:url" content="https://globalalora.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('servicesPage.meta.title')} />
        <meta name="twitter:description" content={t('servicesPage.meta.description')} />
        <meta name="twitter:image" content="https://globalalora.com/aloralogo.png" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section services-hero">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t('servicesPage.hero.title')}</h1>
            <p>{t('servicesPage.hero.subtitle')}</p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="#contacto"
                onClick={(e) => scrollToSection(e, 'contacto')}
                className="cta-button"
              >
                {t('servicesPage.hero.cta')}
              </a>
              <a 
                href="#servicios-detallados" 
                onClick={(e) => scrollToSection(e, 'servicios-detallados')}
                className="cta-button secondary"
              >
                {t('servicesPage.hero.cta2')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Detailed Section */}
      <section id="servicios-detallados" className="services-detailed-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('servicesPage.detailed.title')}</h2>
          <p>{t('servicesPage.detailed.subtitle')}</p>
        </motion.div>

        <div className="services-detailed-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-detailed-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-header">
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
              </div>
              
              <div className="service-content">
                <p className="service-description">{service.description}</p>
                <p className="service-detailed-description">{service.detailedDescription}</p>
                
                <div className="service-features">
                  <h4>{t('servicesPage.features.title')}</h4>
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="fas fa-check"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-technologies">
                  <h4>{t('servicesPage.technologies.title')}</h4>
                  <div className="tech-tags">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('servicesPage.process.title')}</h2>
          <p>{t('servicesPage.process.subtitle')}</p>
        </motion.div>

        <div className="process-timeline">
          {[
            { step: '1', title: t('servicesPage.process.step1.title'), desc: t('servicesPage.process.step1.desc') },
            { step: '2', title: t('servicesPage.process.step2.title'), desc: t('servicesPage.process.step2.desc') },
            { step: '3', title: t('servicesPage.process.step3.title'), desc: t('servicesPage.process.step3.desc') },
            { step: '4', title: t('servicesPage.process.step4.title'), desc: t('servicesPage.process.step4.desc') },
            { step: '5', title: t('servicesPage.process.step5.title'), desc: t('servicesPage.process.step5.desc') }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="process-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="process-step">{item.step}</div>
              <div className="process-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('servicesPage.cta.title')}</h2>
          <p>{t('servicesPage.cta.subtitle')}</p>
          <div className="cta-buttons">
            <a 
              href={locale === 'en' ? "https://wa.me/+541124629452" : "https://wa.me/+5491124629452"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <i className="fab fa-whatsapp"></i> {t('servicesPage.cta.whatsapp')}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact-section">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('servicesPage.contact.title')}</h2>
          <p>{t('servicesPage.contact.subtitle')}</p>

          <ContactForm />

          <div className="alternative-contact">
            <div className="separator">o</div>
            <p>{t('servicesPage.contact.alternatives')}</p>
          </div>
          
          <div className="contact-buttons">
            <motion.a
              href={locale === 'en' ? "https://wa.me/+541124629452" : "https://wa.me/+5491124629452"}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button whatsapp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </motion.a>
            
            <motion.a
              href="mailto:info@globalalora.com"
              className="contact-button email"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-envelope"></i>
              Email
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/company/aloraglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button linkedin"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </motion.a>

            <motion.a
              href="https://www.instagram.com/globalalora/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button instagram"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-instagram"></i>
              Instagram
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Chatbot AI */}
      <Chatbot />
    </div>
  );
};

export default ServicesPage;
