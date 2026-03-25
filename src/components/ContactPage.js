import React from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { useLanguage } from "../context/LanguageContext";
import ContactForm from "./ContactForm";
import ContactSection from "./ContactSection";
import Chatbot from "./Chatbot";
import "../App.css"; // Importar estilos globales para que sea exactamente igual a la homepage
import "./ContactPage.css";

const ContactPage = () => {
  const { t, locale } = useLanguage();

  return (
    <div className="contact-page">
      <Helmet>
        <title>{t('meta.contactTitle')}</title>
      </Helmet>
      {/* Hero Section - Nueva sección creativa */}
      <section className="contact-hero">
        <div className="contact-hero-container">
          {/* Izquierda: Contenido del hero */}
          <div className="contact-hero-content">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {locale === "es"
                ? "🚀 Transformación Digital"
                : "🚀 Digital Transformation"}
            </motion.div>

            <h1 className="hero-title">
              {locale === "es"
                ? "Hablemos de tu proyecto"
                : "Let’s talk about your project"}
            </h1>

            <p className="hero-subtitle">
              {locale === "es"
                ? "En GlobalAlora creamos sistemas digitales inteligentes que impulsan el crecimiento, optimizan operaciones y conectan con tus clientes de manera significativa y rentable."
                : "At GlobalAlora, we create intelligent digital systems that drive growth, optimize operations, and connect with your customers in a meaningful and profitable way."}
            </p>

            {/* CTA Fuerte */}
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href={`https://api.whatsapp.com/send/?phone=${encodeURIComponent("+541124629452")}&text=${encodeURIComponent(
                  locale === "es" 
                    ? "Hola! Me gustaría obtener más información sobre sus servicios." 
                    : "Hello! I would like to get more information about your services."
                )}&type=phone_number&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {locale === "es"
                  ? "Hablar con un especialista"
                  : "Talk to a specialist"}
              </motion.a>
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
                  {locale === "es"
                    ? "Proyectos Exitosos"
                    : "Successful Projects"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8+</div>
                <div className="stat-label">
                  {locale === "es"
                    ? "Años de Experiencia"
                    : "Years of Experience"}
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">
                  {locale === "es"
                    ? "Clientes Satisfechos"
                    : "Satisfied Clients"}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Derecha: Formulario de contacto */}
          <div className="contact-content">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2>
                {locale === "es" ? "¿Listo para empezar?" : "Ready to start?"}
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chatbot AI - Soporte disponible */}
      <Chatbot />
    </div>
  );
};

export default ContactPage;
