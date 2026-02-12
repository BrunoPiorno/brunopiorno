import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Chatbot from './Chatbot';
import './Soluciones.css';

const Soluciones = () => {
  const { t, locale } = useLanguage();

  const iconPalette = {
    teal: 'linear-gradient(135deg, #0ea5e9, #34d399)',
    violet: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    amber: 'linear-gradient(135deg, #f59e0b, #f97316)',
    rose: 'linear-gradient(135deg, #fb7185, #f472b6)',
    slate: 'linear-gradient(135deg, #334155, #64748b)',
    emerald: 'linear-gradient(135deg, #10b981, #22d3ee)'
  };

  const iconLibrary = {
    globe: (
      <svg viewBox="0 0 32 32" className="soluciones-icon-svg">
        <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M4 16h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 4c-3 4-3 20 0 24m0-24c3 4 3 20 0 24" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    target: (
      <svg viewBox="0 0 32 32" className="soluciones-icon-svg">
        <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
    gear: (
      <svg viewBox="0 0 32 32" className="soluciones-icon-svg">
        <path d="M12 6l2-2h4l2 2 3-1 2 3-2 3 2 3-2 3-3-1-2 2h-4l-2-2-3 1-2-3 2-3-2-3 2-3z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    cart: (
      <svg viewBox="0 0 32 32" className="soluciones-icon-svg">
        <path d="M6 8h3l3 15h12l3-11H10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="13" cy="27" r="2" fill="currentColor" />
        <circle cx="24" cy="27" r="2" fill="currentColor" />
      </svg>
    ),
    ads: (
      <svg viewBox="0 0 32 32" className="soluciones-icon-svg">
        <path d="M8 6h16v8H8z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="26" r="2" fill="currentColor" />
        <circle cx="20" cy="26" r="2" fill="currentColor" opacity="0.7" />
      </svg>
    ),
    wrench: (
      <svg viewBox="0 0 32 32" className="soluciones-icon-svg">
        <path d="M20 6a6 6 0 01-6 6l-2 2-6 6 6 6 6-6 2-2a6 6 0 006-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="8" r="2" fill="currentColor" />
      </svg>
    ),
    bot: (
      <svg viewBox="0 0 32 32" className="soluciones-icon-svg">
        <rect x="6" y="10" width="20" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="17" r="2" fill="currentColor" />
        <circle cx="20" cy="17" r="2" fill="currentColor" />
        <path d="M16 6v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 26h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  };

  const renderIcon = (iconName, tone = 'teal', wrapperClass = 'soluciones-icon-wrapper') => {
    if (!iconLibrary[iconName]) return null;
    return (
      <span className={wrapperClass} style={{ background: iconPalette[tone] || iconPalette.teal }}>
        {iconLibrary[iconName]}
      </span>
    );
  };

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
      icon: 'globe',
      tone: 'teal',
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
      icon: 'target',
      tone: 'rose',
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
      icon: 'gear',
      tone: 'violet',
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
      icon: 'cart',
      tone: 'amber',
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
      icon: 'ads',
      tone: 'slate',
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
      icon: 'wrench',
      tone: 'emerald',
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
      icon: 'bot',
      tone: 'rose',
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
                onClick={() => {
                  const servicesSection = document.querySelector('.soluciones-services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
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
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {index === 6 ? (
                // Layout premium para IA Service (índice 6 = 7mo servicio, el último)
                <>
                  <div className="novedad-badge">NOVEDAD</div>
                  <div className="service-icon">
                    {renderIcon(service.icon, service.tone)}
                  </div>
                  <div className="service-content">
                    <div className="service-text">
                      <h3>{service.title}</h3>
                      <p>{service.purpose}</p>
                    </div>
                    <div className="service-actions">
                      <motion.button 
                        className="cta-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {locale === 'es' ? 'Descubrir cómo funciona' : 'Discover how it works'}
                      </motion.button>
                    </div>
                  </div>
                </>
              ) : (
                // Layout normal para otros servicios
                <>
                  <div className="service-icon">
                    {renderIcon(service.icon, service.tone)}
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.purpose}</p>
                    <motion.button 
                      className="cta-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {locale === 'es' ? 'Ver detalle' : 'See details'}
                    </motion.button>
                  </div>
                </>
              )}
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
              ? 'Nuestros servicios no funcionan de forma aislada. Los mejores resultados aparecen cuando se combinan de forma estratégica, según el objetivo de cada negocio.'
              : 'Our services don\'t work in isolation. The best results appear when they are strategically combined according to each business\'s objectives.'}
          </p>
          <p className="section-subtitle">
            {locale === 'es'
              ? 'Estas son las combinaciones más habituales y el rol que cumple cada una dentro del sistema:'
              : 'These are the most common combinations and the role each plays within the system:'}
          </p>
        </motion.div>

        <div className="combinations-detailed">
          <motion.div 
            className="combination-card-detailed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="combination-header">
              <div className="combination-icon">🚀</div>
              <div className="combination-title">
                <h3>Landing Page + Google Ads</h3>
                <p className="combination-tagline">Campañas de conversión rápidas y medibles</p>
              </div>
            </div>
            <div className="combination-description">
              <p>
                {locale === 'es'
                  ? 'Esta combinación es ideal cuando el objetivo es obtener resultados en el corto plazo. La landing page se diseña con un único foco (lead, contacto o venta) y Google Ads se encarga de atraer usuarios con intención real.'
                  : 'This combination is ideal when the objective is to obtain short-term results. The landing page is designed with a single focus (lead, contact or sale) and Google Ads is responsible for attracting users with real intent.'}
              </p>
              <p className="combination-uses">
                <strong>{locale === 'es' ? 'Funciona especialmente bien para:' : 'Works especially well for:'}</strong>
              </p>
              <ul>
                <li>{locale === 'es' ? 'Captación de leads' : 'Lead generation'}</li>
                <li>{locale === 'es' ? 'Venta de servicios concretos' : 'Sale of specific services'}</li>
                <li>{locale === 'es' ? 'Lanzamientos y validación de ofertas' : 'Launches and offer validation'}</li>
              </ul>
              <p className="combination-footer">
                {locale === 'es' ? 'Todo el sistema está pensado para medir, optimizar y escalar.' : 'The entire system is designed to measure, optimize and scale.'}
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="combination-card-detailed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="combination-header">
              <div className="combination-icon">🏢</div>
              <div className="combination-title">
                <h3>Web corporativa + mantenimiento</h3>
                <p className="combination-tagline">Presencia profesional estable a largo plazo</p>
              </div>
            </div>
            <div className="combination-description">
              <p>
                {locale === 'es'
                  ? 'El sitio web corporativo funciona como la base digital del negocio. El servicio de mantenimiento garantiza que esa base se mantenga actualizada, segura y operativa con el paso del tiempo.'
                  : 'The corporate website functions as the digital base of the business. The maintenance service ensures that this base remains updated, secure and operational over time.'}
              </p>
              <p className="combination-uses">
                <strong>{locale === 'es' ? 'Esta combinación es clave para:' : 'This combination is key for:'}</strong>
              </p>
              <ul>
                <li>{locale === 'es' ? 'Empresas que necesitan una imagen profesional sólida' : 'Companies that need a solid professional image'}</li>
                <li>{locale === 'es' ? 'Negocios que quieren una web confiable y siempre actualizada' : 'Businesses that want a reliable and always updated website'}</li>
                <li>{locale === 'es' ? 'Proyectos que buscan estabilidad y soporte continuo' : 'Projects seeking stability and continuous support'}</li>
              </ul>
              <p className="combination-footer">
                {locale === 'es' ? 'La web no se publica y se abandona: se mantiene y se optimiza.' : 'The website is not published and abandoned: it is maintained and optimized.'}
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="combination-card-detailed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="combination-header">
              <div className="combination-icon">🛍️</div>
              <div className="combination-title">
                <h3>Ecommerce + Google Ads + Meta Ads + Email Marketing</h3>
                <p className="combination-tagline">Sistema completo de ventas online y recurrencia</p>
              </div>
            </div>
            <div className="combination-description">
              <p>
                {locale === 'es'
                  ? 'Esta combinación permite cubrir todo el recorrido del cliente, desde la intención de compra hasta la recompra. Google Ads capta usuarios que ya están buscando productos similares. Meta Ads trabaja el descubrimiento de productos, la visibilidad de marca y el remarketing. El ecommerce convierte ese tráfico en ventas con una experiencia de compra clara y optimizada. El email marketing se encarga de recuperar carritos, fidelizar clientes y aumentar el valor de cada compra.'
                  : 'This combination allows covering the entire customer journey, from purchase intention to repurchase. Google Ads captures users who are already searching for similar products. Meta Ads works on product discovery, brand visibility and remarketing. The ecommerce converts that traffic into sales with a clear and optimized shopping experience. Email marketing is responsible for recovering carts, retaining customers and increasing the value of each purchase.'}
              </p>
              <p className="combination-uses">
                <strong>{locale === 'es' ? 'Es ideal para:' : 'It is ideal for:'}</strong>
              </p>
              <ul>
                <li>{locale === 'es' ? 'Escalar ventas online de forma sostenida' : 'Scaling online sales sustainably'}</li>
                <li>{locale === 'es' ? 'No depender de un solo canal de tráfico' : 'Not depending on a single traffic channel'}</li>
                <li>{locale === 'es' ? 'Recuperar carritos abandonados' : 'Recovering abandoned carts'}</li>
                <li>{locale === 'es' ? 'Aumentar la recompra y el ticket medio' : 'Increasing repurchase and average ticket'}</li>
              </ul>
              <p className="combination-footer">
                {locale === 'es' ? 'Todo funciona como un único sistema conectado.' : 'Everything works as a single connected system.'}
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="combination-card-detailed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="combination-header">
              <div className="combination-icon">🤖</div>
              <div className="combination-title">
                <h3>Web + IA para atención al cliente</h3>
                <p className="combination-tagline">Atención automática 24/7 sin aumentar el equipo</p>
              </div>
            </div>
            <div className="combination-description">
              <p>
                {locale === 'es'
                  ? 'La web capta las consultas y la IA se encarga de atenderlas, filtrarlas y organizarlas. Esto permite responder más rápido, no perder oportunidades y reducir la carga operativa.'
                  : 'The website captures inquiries and the AI is responsible for attending, filtering and organizing them. This allows responding faster, not losing opportunities and reducing operational load.'}
              </p>
              <p className="combination-uses">
                <strong>{locale === 'es' ? 'Funciona muy bien para:' : 'Works very well for:'}</strong>
              </p>
              <ul>
                <li>{locale === 'es' ? 'Negocios con muchas consultas repetitivas' : 'Businesses with many repetitive inquiries'}</li>
                <li>{locale === 'es' ? 'Empresas que necesitan mejorar tiempos de respuesta' : 'Companies that need to improve response times'}</li>
                <li>{locale === 'es' ? 'Proyectos que quieren escalar sin sumar personal' : 'Projects that want to scale without adding staff'}</li>
              </ul>
              <p className="combination-footer">
                {locale === 'es' ? 'La tecnología acompaña el crecimiento, no lo frena.' : 'Technology accompanies growth, it does not hinder it.'}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="combinations-conclusion"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="conclusion-text">
            {locale === 'es'
              ? 'Cada combinación se define según el objetivo del negocio. No se trata de sumar servicios, sino de usar los necesarios para que el sistema funcione de forma eficiente.'
              : 'Each combination is defined according to the business objective. It is not about adding services, but using the necessary ones so that the system works efficiently.'}
          </p>
          <div className="warning-box">
            <div className="warning-icon">⚠️</div>
            <div className="warning-content">
              <h4>{locale === 'es' ? 'No trabajamos con paquetes cerrados obligatorios.' : 'We do not work with mandatory closed packages.'}</h4>
              <p>
                {locale === 'es'
                  ? 'Analizamos cada caso y recomendamos solo los servicios que realmente tienen sentido, incluso si eso implica empezar por uno solo.'
                  : 'We analyze each case and recommend only the services that really make sense, even if it means starting with just one.'}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How We Work Section - PROFESSIONAL PROCESS */}
      <section className="soluciones-process-professional">
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
              ? 'Un proceso diseñado para proyectos reales. Sin paquetes cerrados, ni pasos genéricos.'
              : 'A process designed for real projects. No closed packages, no generic steps.'}
          </p>
        </motion.div>

        <div className="process-cards-professional">
          <motion.div 
            className="process-card-professional alignment-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="process-label">
              <span className="label-text">alineación</span>
            </div>
            <div className="process-icon">
              <span>🎯</span>
            </div>
            <div className="process-content">
              <h3>Descubrimiento estratégico</h3>
              <p className="process-description">
                No hacemos una llamada, hacemos una inmersión. Analizamos tu negocio, competencia, 
                objetivos reales y restricciones. Aquí definimos si el proyecto tiene sentido.
              </p>
              <div className="process-highlight">
                <span className="highlight-label">Lo importante aquí:</span>
                <p>Validamos la viabilidad antes de escribir una línea de código. Ahorramos tiempo y dinero.</p>
              </div>
              <div className="client-benefit">
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">Ganas: Claridad total sobre qué funciona y qué no en tu caso específico</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="process-card-professional decision-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="process-label">
              <span className="label-text">decisión</span>
            </div>
            <div className="process-icon">
              <span>📋</span>
            </div>
            <div className="process-content">
              <h3>Propuesta sin sorpresas</h3>
              <p className="process-description">
                Entregamos un documento detallado con alcance exacto, tecnología recomendada, 
                tiempos realistas y costos transparentes. No hay "depende" ni "después vemos".
              </p>
              <div className="process-highlight">
                <span className="highlight-label">Lo importante aquí:</span>
                <p>Definimos el éxito del proyecto con métricas concretas, no con promesas vagas.</p>
              </div>
              <div className="client-benefit">
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">Ganas: Seguridad presupuestaria y claridad sobre el resultado esperado</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="process-card-professional execution-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="process-label">
              <span className="label-text">ejecución</span>
            </div>
            <div className="process-icon">
              <span>⚡</span>
            </div>
            <div className="process-content">
              <h3>Desarrollo enfocado</h3>
              <p className="process-description">
                Construimos lo que acordamos, nada más y nada menos. Cada semana tienes visibilidad 
                real del avance, con acceso al código y pruebas funcionales. No hay cajas negras.
              </p>
              <div className="process-highlight">
                <span className="highlight-label">Lo importante aquí:</span>
                <p>Entregas incrementales cada 7 días. Si algo no funciona, lo corregimos en el momento.</p>
              </div>
              <div className="client-benefit">
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">Ganas: Control total sobre el proyecto y sin sorpresas al final</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="process-card-professional growth-card featured"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="process-label">
              <span className="label-text">mejora continua</span>
            </div>
            <div className="process-icon">
              <span>📈</span>
            </div>
            <div className="process-content">
              <h3>Optimización real</h3>
              <p className="process-description">
                El lanzamiento no es el fin, es el inicio. Monitoreamos performance, 
                analizamos datos y ajustamos basados en comportamiento real de usuarios.
              </p>
              <div className="process-highlight">
                <span className="highlight-label">Lo importante aquí:</span>
                <p>Medimos lo que importa: conversión, velocidad, usabilidad. No métricas de vanidad.</p>
              </div>
              <div className="client-benefit">
                <span className="benefit-icon">✓</span>
                <span className="benefit-text">Ganas: Tu proyecto mejora con el tiempo, no se queda obsoleto</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="process-conclusion"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="process-statement">
            <p className="main-statement">
              {locale === 'es' 
                ? 'Este proceso empieza con una conversación, no con un presupuesto.' 
                : 'This process starts with a conversation, not with a budget.'}
            </p>
            <p className="sub-statement">
              {locale === 'es'
                ? 'Hablemos de tu proyecto. Si tiene sentido, trabajamos juntos. Si no, te lo decimos.'
                : 'Let\'s talk about your project. If it makes sense, we work together. If not, we\'ll tell you.'}
            </p>
          </div>
          <motion.button 
            className="process-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {locale === 'es' ? 'Iniciar conversación' : 'Start conversation'}
          </motion.button>
        </motion.div>
      </section>

      {/* Target Audience Section - EDITORIAL DESIGN */}
      <section className="soluciones-target-editorial">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Con quién trabajamos (y con quién no)' : 'Who we work with (and who we don\'t)'}</h2>
          <p>
            {locale === 'es'
              ? 'Tenemos criterio claro. Preferimos proyectos donde podemos generar valor real y evitar frustraciones.'
              : 'We have clear criteria. We prefer projects where we can generate real value and avoid frustrations.'}
          </p>
        </motion.div>

        <div className="target-editorial-layout">
          <div className="target-ideal-section">
            <motion.div 
              className="target-ideal-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="target-section-header">
                <h3>Trabajamos mejor con proyectos que...</h3>
                <div className="target-line"></div>
              </div>
              
              <div className="target-points">
                <div className="target-point">
                  <div className="point-number">01</div>
                  <div className="point-content">
                    <h4>Tienen un desafío real que resolver</h4>
                    <p>No buscan "tener una web" por tenerla. Necesitan solucionar un problema específico: generar leads, vender online, automatizar procesos, escalar operaciones.</p>
                  </div>
                </div>

                <div className="target-point">
                  <div className="point-number">02</div>
                  <div className="point-content">
                    <h4>Entienden que el buen trabajo toma tiempo</h4>
                    <p>Saben que los resultados no aparecen mágicamente. Valoran el proceso, la planificación y están dispuestos a invertir en calidad técnica y estratégica.</p>
                  </div>
                </div>

                <div className="target-point">
                  <div className="point-number">03</div>
                  <div className="point-content">
                    <h4>Quieren ser parte del proceso</h4>
                    <p>No delegan y desaparecen. Participan activamente, toman decisiones, dan feedback constructivo. Entienden que son el experto en su negocio, nosotros en tecnología.</p>
                  </div>
                </div>

                <div className="target-point">
                  <div className="point-number">04</div>
                  <div className="point-content">
                    <h4>Piensan a largo plazo</h4>
                    <p>No buscan soluciones rápidas baratas. Invierten en algo que dure, que se pueda optimizar y que crezca con su negocio. Prefieren hacerlo bien una vez.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="target-not-section">
            <motion.div 
              className="target-not-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="target-section-header">
                <h3>Este no es el lugar adecuado si...</h3>
                <div className="target-line"></div>
              </div>
              
              <div className="target-points">
                <div className="target-point">
                  <div className="point-number">01</div>
                  <div className="point-content">
                    <h4>Buscan el precio más bajo</h4>
                    <p>Entendemos presupuestos ajustados, pero si el único criterio es "el más barato", probablemente no seamos la mejor opción. No competimos con freelancers a $5/hora.</p>
                  </div>
                </div>

                <div className="target-point">
                  <div className="point-number">02</div>
                  <div className="point-content">
                    <h4>Quieren resultados mañana</h4>
                    <p>Si esperan vender 10.000 unidades la semana siguiente al lanzar, no somos honestos prometiéndolo. El crecimiento real requiere estrategia, tiempo y optimización.</p>
                  </div>
                </div>

                <div className="target-point">
                  <div className="point-number">03</div>
                  <div className="point-content">
                    <h4>No quieren participar del proceso</h4>
                    <p>Si prefieren "encargar y olvidarse", probablemente no funcione. Los proyectos exitosos requieren colaboración, decisiones y feedback del cliente.</p>
                  </div>
                </div>

                <div className="target-point">
                  <div className="point-number">04</div>
                  <div className="point-content">
                    <h4>Necesitan algo "rápido y fácil"</h4>
                    <p>Lo simple rara vez es efectivo. Si buscan plantillas prefabricadas o soluciones mágicas, hay otras opciones más adecuadas para ese enfoque.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="target-conclusion"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="target-statement">
            {locale === 'es'
              ? 'No somos para todos. Y eso está bien. Preferimos decir "no" temprano a trabajar en proyectos que no funcionen.'
              : 'We\'re not for everyone. And that\'s okay. We prefer to say "no" early rather than work on projects that won\'t work.'}
          </p>
        </motion.div>
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
            <motion.a 
              className="cta-button large primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(locale === 'es' ? 'https://tidycal.com/alora/20-minutos-reunion' : 'https://tidycal.com/alora/20-minutes', '_blank')}
            >
              {locale === 'es' ? 'Agendar una llamada de 20 minutos' : 'Schedule a 20-minute call'}
            </motion.a>
            <p className="cta-note">
              {locale === 'es'
                ? 'Sin compromiso. Evaluamos tu caso y te decimos si podemos ayudarte.'
                : 'No commitment. We evaluate your case and tell you if we can help you.'}
            </p>
          </div>
          <div className="cta-image"></div>
        </motion.div>
      </section>

      {/* Chatbot AI - Soporte disponible */}
      <Chatbot />
    </div>
  );
};

export default Soluciones;
