import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ContactForm from './ContactForm';
import ContactSection from './ContactSection';
import '../App.css'; // Importar estilos globales para que sea exactamente igual a la homepage
import './ContactPage.css';

const ContactPage = () => {
  const { t, locale } = useLanguage();

  return (
    <div className="contact-page">
      {/* Hero Section - Nueva sección creativa */}
      <section className="contact-hero">
        <motion.div 
          className="contact-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {locale === 'es' ? '🚀 Transformación Digital' : '🚀 Digital Transformation'}
          </motion.div>
          
          <h1 className="hero-title">
            {locale === 'es'
              ? 'Desarrollamos la web que tu negocio necesita para crecer'
              : 'We develop the web your business needs to grow'
            }
          </h1>
          
          <p className="hero-subtitle">
            {locale === 'es'
              ? 'En GlobalAlora no solo desarrollamos software. Creamos soluciones inteligentes que impulsan el crecimiento, optimizan operaciones y conectan con tus clientes de manera significativa.'
              : 'At GlobalAlora we don\'t just develop software. We create intelligent solutions that drive growth, optimize operations, and connect with your customers in meaningful ways.'
            }
          </p>

          {/* CTA Fuerte */}
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="cta-button"
              onClick={() => {
                const element = document.getElementById('contacto');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {locale === 'es' ? 'Hablar con un especialista' : 'Talk to a specialist'}
            </motion.button>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">
                {locale === 'es' ? 'Proyectos Exitosos' : 'Successful Projects'}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-label">
                {locale === 'es' ? 'Años de Experiencia' : 'Years of Experience'}
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">
                {locale === 'es' ? 'Clientes Satisfechos' : 'Satisfied Clients'}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="cta-text">
              {locale === 'es'
                ? 'Tu visión + nuestra experiencia = resultados extraordinarios'
                : 'Your vision + our expertise = extraordinary results'
              }
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section - Pequeña sección de valores */}
      <section className="contact-values">
        <motion.div 
          className="values-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="values-title">
            {locale === 'es' 
              ? 'Por qué elegirnos' 
              : 'Why choose us'
            }
          </h2>
          
          <div className="values-grid">
            <motion.div 
              className="value-card"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(45, 97, 103, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="value-icon">💡</div>
              <h3>
                {locale === 'es' ? 'Innovación Constante' : 'Constant Innovation'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'Siempre exploramos nuevas tecnologías y metodologías para llevar tu negocio al siguiente nivel.'
                  : 'We always explore new technologies and methodologies to take your business to the next level.'
                }
              </p>
            </motion.div>

            <motion.div 
              className="value-card"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(45, 97, 103, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="value-icon">🤝</div>
              <h3>
                {locale === 'es' ? 'Partnership Real' : 'Real Partnership'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'No somos solo proveedores, somos socios estratégicos comprometidos con tu éxito.'
                  : 'We are not just providers, we are strategic partners committed to your success.'
                }
              </p>
            </motion.div>

            <motion.div 
              className="value-card"
              whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(45, 97, 103, 0.2)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="value-icon">⚡</div>
              <h3>
                {locale === 'es' ? 'Ejecución Rápida' : 'Fast Execution'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'Transformamos tus ideas en realidad con agilidad y precisión técnica.'
                  : 'We transform your ideas into reality with agility and technical precision.'
                }
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section - Exactamente igual que la homepage */}
      <section id="contacto" className="contact-section">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Contanos tu proyecto y te respondemos en menos de 24 hs' : 'Tell us about your project and we\'ll respond in less than 24 hours'}</h2>
          <p>{locale === 'es' ? 'Dejanos tus datos y nos comunicaremos a la brevedad' : 'Leave us your details and we\'ll get in touch soon'}</p>

          <ContactForm />

          <div className="alternative-contact">
            <div className="separator">o</div>
            <p>{t('contact.alternatives')}</p>
          </div>
          
          <div className="contact-buttons">
            <motion.a
              href={locale === 'en' ? "https://wa.me/+541124629452" : "https://wa.me/+541124629452"}
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
              {t('contact.instagram')}
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
