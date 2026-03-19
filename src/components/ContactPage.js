import React from "react";
import { motion } from "framer-motion";
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
                ? "Desarrollamos la web que tu negocio necesita para crecer"
                : "We develop the web your business needs to grow"}
            </h1>

            <p className="hero-subtitle">
              {locale === "es"
                ? "En GlobalAlora no solo desarrollamos software. Creamos soluciones inteligentes que impulsan el crecimiento, optimizan operaciones y conectan con tus clientes de manera significativa."
                : "At GlobalAlora we don't just develop software. We create intelligent solutions that drive growth, optimize operations, and connect with your customers in meaningful ways."}
            </p>

            {/* CTA Fuerte */}
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href={
                  locale === "en"
                    ? "https://wa.me/+541124629452"
                    : "https://wa.me/+541124629452"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
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
            {locale === "es" ? "Por qué elegirnos" : "Why choose us"}
          </h2>

          <div className="values-grid">
            <motion.div
              className="value-card"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(45, 97, 103, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="value-icon">💡</div>
              <h3>
                {locale === "es"
                  ? "Innovación Constante"
                  : "Constant Innovation"}
              </h3>
              <p>
                {locale === "es"
                  ? "Siempre a la vanguardia de las últimas tecnologías y tendencias del mercado digital."
                  : "Always at the forefront of the latest technologies and digital market trends."}
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(45, 97, 103, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="value-icon">🤝</div>
              <h3>
                {locale === "es" ? "Partnership Real" : "Real Partnership"}
              </h3>
              <p>
                {locale === "es"
                  ? "Nos convertimos en un verdadero socio estratégico para el crecimiento de tu negocio."
                  : "We become a true strategic partner for your business growth."}
              </p>
            </motion.div>

            <motion.div
              className="value-card"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(45, 97, 103, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="value-icon">🚀</div>
              <h3>
                {locale === "es" ? "Resultados Medibles" : "Measurable Results"}
              </h3>
              <p>
                {locale === "es"
                  ? "Enfoque en métricas y KPIs que demuestran el impacto real de nuestras soluciones."
                  : "Focus on metrics and KPIs that demonstrate the real impact of our solutions."}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Social Networks Section */}
      <section className="social-networks">
        <motion.div
          className="social-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="social-title">
            {locale === "es" ? "Nuestras redes:" : "Our networks:"}
          </h2>

          <div className="social-links">
            <motion.a
              href={locale === 'en' ? "https://wa.me/+541124629452" : "https://wa.me/+541124629452"}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link whatsapp"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/company/aloraglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </motion.a>
            
            <motion.a
              href="mailto:info@globalalora.com"
              className="social-link email"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-envelope"></i>
              <span>Email</span>
            </motion.a>
            
            <motion.a
              href="https://www.instagram.com/globalalora/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Chatbot AI - Soporte disponible */}
      <Chatbot />
    </div>
  );
};

export default ContactPage;
