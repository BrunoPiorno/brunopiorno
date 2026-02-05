import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Soluciones.css';

const Soluciones = () => {
  const { t, locale } = useLanguage();

  useEffect(() => {
    // Agregar clase al header para esta página
    document.body.classList.add('soluciones-page');
    
    return () => {
      // Limpiar clase al desmontar
      document.body.classList.remove('soluciones-page');
    };
  }, []);

  const services = [
    {
      icon: '🌐',
      title: locale === 'es' ? 'Desarrollo Web' : 'Web Development',
      purpose: locale === 'es' 
        ? 'Crear una presencia digital profesional y funcional.'
        : 'Create a professional and functional digital presence.',
      ideal: locale === 'es'
        ? 'Tu web actual no representa bien tu negocio o no genera consultas.'
        : 'Your current website doesn\'t represent your business well or doesn\'t generate inquiries.',
      id: 'desarrollo-web'
    },
    {
      icon: '🎯',
      title: locale === 'es' ? 'Landing Pages' : 'Landing Pages',
      purpose: locale === 'es'
        ? 'Captar leads o vender una oferta concreta.'
        : 'Capture leads or sell a specific offer.',
      ideal: locale === 'es'
        ? 'Tenés tráfico o campañas activas y necesitás convertir mejor.'
        : 'You have traffic or active campaigns and need to convert better.',
      id: 'landing-pages'
    },
    {
      icon: '⚙️',
      title: locale === 'es' ? 'Aplicaciones Web' : 'Web Applications',
      purpose: locale === 'es'
        ? 'Desarrollar sistemas y plataformas a medida.'
        : 'Develop custom systems and platforms.',
      ideal: locale === 'es'
        ? 'Tu negocio necesita una solución específica que no existe en el mercado.'
        : 'Your business needs a specific solution that doesn\'t exist in the market.',
      id: 'aplicaciones-web'
    },
    {
      icon: '🛒',
      title: locale === 'es' ? 'Ecommerce' : 'Ecommerce',
      purpose: locale === 'es'
        ? 'Vender productos online de forma clara y escalable.'
        : 'Sell products online clearly and scalably.',
      ideal: locale === 'es'
        ? 'Querés profesionalizar o mejorar tu canal de ventas online.'
        : 'You want to professionalize or improve your online sales channel.',
      id: 'ecommerce'
    },
    {
      icon: '📈',
      title: 'Google Ads',
      purpose: locale === 'es'
        ? 'Captar demanda activa con intención de compra.'
        : 'Capture active demand with purchase intent.',
      ideal: locale === 'es'
        ? 'Querés generar consultas o ventas sin depender solo de lo orgánico.'
        : 'You want to generate inquiries or sales without relying only on organic.',
      id: 'google-ads'
    },
    {
      icon: '🔧',
      title: locale === 'es' ? 'Mantenimiento Web' : 'Web Maintenance',
      purpose: locale === 'es'
        ? 'Mantener tu sitio actualizado, estable y seguro.'
        : 'Keep your site updated, stable and secure.',
      ideal: locale === 'es'
        ? 'Tu web ya existe y necesitás soporte continuo sin dolores de cabeza.'
        : 'Your website already exists and you need continuous support without headaches.',
      id: 'mantenimiento-web'
    },
    {
      icon: '🤖',
      title: locale === 'es' ? 'IA para Atención al Cliente' : 'AI for Customer Service',
      purpose: locale === 'es'
        ? 'Automatizar respuestas, calificar leads y agendar reuniones.'
        : 'Automate responses, qualify leads and schedule meetings.',
      ideal: locale === 'es'
        ? 'Recibís muchas consultas y perdés oportunidades por falta de tiempo.'
        : 'You receive many inquiries and lose opportunities due to lack of time.',
      id: 'ia-atencion'
    }
  ];

  const combinations = [
    {
      title: locale === 'es' ? 'Landing Page + Google Ads' : 'Landing Page + Google Ads',
      description: locale === 'es'
        ? 'Para campañas de conversión rápidas y medibles.'
        : 'For fast and measurable conversion campaigns.',
      icon: '🚀'
    },
    {
      title: locale === 'es' ? 'Web corporativa + mantenimiento' : 'Corporate website + maintenance',
      description: locale === 'es'
        ? 'Presencia profesional estable a largo plazo.'
        : 'Stable professional long-term presence.',
      icon: '🏢'
    },
    {
      title: locale === 'es' ? 'Ecommerce + Google Ads' : 'Ecommerce + Google Ads',
      description: locale === 'es'
        ? 'Ventas online con tráfico cualificado.'
        : 'Online sales with qualified traffic.',
      icon: '🛍️'
    },
    {
      title: locale === 'es' ? 'Web + IA para atención al cliente' : 'Website + AI for customer service',
      description: locale === 'es'
        ? 'Atención 24/7 sin aumentar el equipo.'
        : '24/7 attention without increasing the team.',
      icon: '🤖'
    }
  ];

  return (
    <div className="soluciones-page">
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {locale === 'es' ? 'Servicios digitales orientados a resultados reales' : 'Digital services focused on real results'}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {locale === 'es'
                ? 'Transformamos ideas en soluciones digitales que impulsan tu negocio y generan crecimiento medible.'
                : 'We transform ideas into digital solutions that drive your business and generate measurable growth.'}
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button 
                className="cta-button primary large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {locale === 'es' ? 'Ver todos los servicios' : 'See all services'}
              </motion.button>
            </motion.div>
          </div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="soluciones-services">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Nuestros Servicios' : 'Our Services'}</h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <div className="service-purpose">
                <strong>{locale === 'es' ? 'Para qué sirve' : 'What it\'s for'}</strong>
                <p>{service.purpose}</p>
              </div>
              <div className="service-ideal">
                <strong>{locale === 'es' ? 'Ideal si…' : 'Ideal if…'}</strong>
                <p>{service.ideal}</p>
              </div>
              <motion.button 
                className="cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {locale === 'es' ? 'Ver detalle' : 'See details'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Combinations Section - GRILLA DE 4 */}
      <section className="soluciones-combinations">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Cómo se combinan los servicios' : 'How services combine'}</h2>
          <p>
            {locale === 'es'
              ? 'Nuestros servicios no funcionan de forma aislada. La mayoría de los proyectos combinan varias soluciones para lograr resultados reales.'
              : 'Our services don\'t work in isolation. Most projects combine several solutions to achieve real results.'}
          </p>
        </motion.div>

        <div className="combinations-enhanced">
          {combinations.map((combo, index) => (
            <motion.div 
              key={index}
              className="combination-card-enhanced"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="combination-icon">{combo.icon}</div>
              <div className="combination-content">
                <h4>{combo.title}</h4>
                <p>{combo.description}</p>
                <div className="combination-plus">
                  <span>+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How We Work Section */}
      <section className="soluciones-process">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Cómo trabajamos' : 'How we work'}</h2>
          <p>
            {locale === 'es'
              ? 'Un proceso claro y transparente para llevar tu proyecto desde la idea hasta el resultado.'
              : 'A clear and transparent process to take your project from idea to result.'}
          </p>
        </motion.div>

        <div className="process-timeline">
          {[
            {
              number: '1',
              title: locale === 'es' ? 'Llamada de descubrimiento' : 'Discovery call',
              description: locale === 'es'
                ? 'Conocemos tu negocio, objetivos y desafíos para entender exactamente lo que necesitas.'
                : 'We get to know your business, objectives and challenges to understand exactly what you need.'
            },
            {
              number: '2',
              title: locale === 'es' ? 'Propuesta personalizada' : 'Custom proposal',
              description: locale === 'es'
                ? 'Diseñamos una solución alineada con tus objetivos, con tiempos y costos claros.'
                : 'We design a solution aligned with your objectives, with clear timelines and costs.'
            },
            {
              number: '3',
              title: locale === 'es' ? 'Diseño y desarrollo' : 'Design and development',
              description: locale === 'es'
                ? 'Construimos tu solución con las mejores prácticas y tecnología actual.'
                : 'We build your solution with best practices and current technology.'
            },
            {
              number: '4',
              title: locale === 'es' ? 'Acompañamiento y optimización' : 'Support and optimization',
              description: locale === 'es'
                ? 'Acompañamos y mejoramos continuamente tu solución para asegurar su éxito.'
                : 'We support and continuously improve your solution to ensure its success.'
            }
          ].map((step, index) => (
            <motion.div 
              key={index}
              className="process-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="soluciones-target">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Para quién es (y para quién no)' : 'Who it\'s for (and who it\'s not)'}</h2>
          <p>
            {locale === 'es'
              ? 'Trabajamos con proyectos serios que buscan resultados reales y crecimiento sostenible.'
              : 'We work with serious projects that seek real results and sustainable growth.'}
          </p>
        </motion.div>

        <div className="target-audience">
          <div className="target-column">
            <motion.div 
              className="target-card ideal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="target-header">
                <h3>{locale === 'es' ? 'Trabajamos con' : 'We work with'}</h3>
                <div className="target-icon">✅</div>
              </div>
              <ul>
                <li>{locale === 'es' ? 'Negocios reales con objetivos claros' : 'Real businesses with clear objectives'}</li>
                <li>{locale === 'es' ? 'Empresas y profesionales que buscan resultados' : 'Companies and professionals seeking results'}</li>
                <li>{locale === 'es' ? 'Proyectos con intención de crecimiento' : 'Projects with growth intentions'}</li>
                <li>{locale === 'es' ? 'Quienes valoran la calidad y profesionalismo' : 'Those who value quality and professionalism'}</li>
              </ul>
            </motion.div>
          </div>

          <div className="target-column">
            <motion.div 
              className="target-card not-ideal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="target-header">
                <h3>{locale === 'es' ? 'No somos para' : 'We\'re not for'}</h3>
                <div className="target-icon">❌</div>
              </div>
              <ul>
                <li>{locale === 'es' ? 'Proyectos improvisados sin dirección' : 'Improvised projects without direction'}</li>
                <li>{locale === 'es' ? 'Búsqueda de "lo más barato" sin criterio' : 'Search for "the cheapest" without criteria'}</li>
                <li>{locale === 'es' ? 'Soluciones mágicas sin estrategia' : 'Magic solutions without strategy'}</li>
                <li>{locale === 'es' ? 'Quienes no quieren invertir en calidad' : 'Those who don\'t want to invest in quality'}</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="soluciones-cta">
        <motion.div 
          className="cta-content-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2>
              {locale === 'es' 
                ? '¿Querés saber qué servicio es el indicado para tu negocio?' 
                : 'Want to know which service is right for your business?'}
            </h2>
            <p>
              {locale === 'es'
                ? 'Evaluamos tu caso y te decimos con honestidad si podemos ayudarte a alcanzar tus objetivos.'
                : 'We evaluate your case and honestly tell you if we can help you achieve your objectives.'}
            </p>
            <motion.button 
              className="cta-button large primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {locale === 'es' ? 'Agendar una llamada de 20 minutos' : 'Schedule a 20-minute call'}
            </motion.button>
            <p className="cta-note">
              {locale === 'es'
                ? 'Sin compromiso. Evaluamos tu caso y te decimos si podemos ayudarte.'
                : 'No commitment. We evaluate your case and tell you if we can help you.'}
            </p>
          </div>
          <div className="cta-image"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default Soluciones;
