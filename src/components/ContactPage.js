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
        <meta name="description" content={locale === 'es' ? 'Contactá a Alora para hablar de tu proyecto digital. Respondemos en menos de 24 horas con una propuesta personalizada.' : 'Contact Alora to talk about your digital project. We respond within 24 hours with a personalized proposal.'} />
        <meta name="keywords" content={locale === 'es' ? 'contacto agencia web, presupuesto web, contratar desarrollador, agencia digital Argentina' : 'contact web agency, web quote, hire developer, digital agency'} />
        <link rel="canonical" href={`https://globalalora.com/${locale}/contacto`} />
        <meta property="og:title" content={locale === 'es' ? 'Alora | Contacto — Hablemos de tu Proyecto' : "Alora | Contact — Let's Talk About Your Project"} />
        <meta property="og:description" content={locale === 'es' ? 'Contactá a Alora. Te respondemos en menos de 24 horas con una propuesta personalizada.' : 'Contact Alora. We respond within 24 hours with a personalized proposal.'} />
        <meta property="og:image" content="https://globalalora.com/aloralogo.png" />
        <meta property="og:url" content={`https://globalalora.com/${locale}/contacto`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={locale === 'es' ? 'Alora | Contacto' : 'Alora | Contact'} />
        <meta name="twitter:description" content={locale === 'es' ? 'Hablemos de tu proyecto. Respondemos en menos de 24 horas.' : "Let's talk about your project. We respond within 24 hours."} />
        <meta name="twitter:image" content="https://globalalora.com/aloralogo.png" />
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

            <motion.p
              className="hero-urgency"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {locale === "es"
                ? "📅 Agenda tu consulta gratuita — cupos limitados este mes"
                : "📅 Book your free consultation — limited spots this month"}
            </motion.p>

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

            {/* Qué pasa después */}
            <motion.div
              className="contact-process"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="contact-process-title">
                {locale === "es" ? "¿Qué pasa después?" : "What happens next?"}
              </p>
              <div className="contact-process-steps">
                <div className="process-step">
                  <div className="process-step-num">1</div>
                  <p className="process-step-text">
                    {locale === "es"
                      ? <><strong>Revisamos tu consulta</strong> en menos de 24 horas.</>
                      : <><strong>We review your message</strong> within 24 hours.</>}
                  </p>
                </div>
                <div className="process-step">
                  <div className="process-step-num">2</div>
                  <p className="process-step-text">
                    {locale === "es"
                      ? <><strong>Agendamos una llamada</strong> para entender tu proyecto en profundidad.</>
                      : <><strong>We schedule a call</strong> to understand your project in depth.</>}
                  </p>
                </div>
                <div className="process-step">
                  <div className="process-step-num">3</div>
                  <p className="process-step-text">
                    {locale === "es"
                      ? <><strong>Recibís una propuesta</strong> personalizada sin compromiso.</>
                      : <><strong>You receive a custom proposal</strong> with no commitment.</>}
                  </p>
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
