import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Chatbot from './Chatbot';
import fpnnImage from '../images/fpnn.png';
import terraLauquenImage from '../images/grupoterralauquen.com.ar_.png';
import cichicImage from '../images/chichicImage.png';
import tenisDeMesaImage from '../images/tenisdemesatrenque.com.ar_.png';
import './DesarrolloWeb.css';

const DesarrolloWeb = () => {
  const { t, locale } = useLanguage();

  useEffect(() => {
    // Agregar clase al body para esta página
    document.body.classList.add('desarrollo-web-page');
    
    return () => {
      // Limpiar clase al desmontar
      document.body.classList.remove('desarrollo-web-page');
    };
  }, []);

  const projects = [
    {
      title: 'Fundación Por Nuestros Niños',
      description: locale === 'es'
        ? 'Sitio completamente custom, desarrollado a medida con diseño personalizado que refleja la identidad de la fundación, su misión, programas y formas de colaborar.'
        : 'Completely custom site, developed to measure with personalized design that reflects the foundation\'s identity, mission, programs and collaboration methods.',
      image: fpnnImage,
      url: 'http://fpnn.org.ar/'
    },
    {
      title: 'Grupo Terra Lauquen',
      description: locale === 'es'
        ? 'Sitio corporativo para grupo empresarial con múltiples divisiones. Desarrollo web complejo con gestión de contenido y estructura multinivel.'
        : 'Corporate site for business group with multiple divisions. Complex web development with content management and multilevel structure.',
      image: terraLauquenImage,
      url: 'https://www.terralauquen.com'
    },
    {
      title: 'Cichic',
      description: locale === 'es'
        ? 'Plataforma e-commerce de moda y accesorios. Desarrollo web completo con catálogo de productos, carrito de compras y pasarela de pago.'
        : 'Fashion and accessories e-commerce platform. Complete web development with product catalog, shopping cart and payment gateway.',
      image: cichicImage,
      url: 'https://www.cichic.com'
    },
    {
      title: 'Tenis De Mesa Trenque',
      description: locale === 'es'
        ? 'Sitio institucional para club deportivo con sistema de gestión de torneos, inscripciones online y resultados en tiempo real.'
        : 'Institutional site for sports club with tournament management system, online registrations and real-time results.',
      image: tenisDeMesaImage,
      url: 'https://www.tenisdemesatrenque.com'
    }
  ];

  const services = [
    {
      icon: '🎨',
      title: locale === 'es' ? 'Diseño visual alineado a la identidad de marca' : 'Visual design aligned with brand identity',
      description: locale === 'es'
        ? 'Creamos un diseño visual que representa correctamente tu marca y transmite profesionalismo.'
        : 'We create a visual design that correctly represents your brand and conveys professionalism.'
    },
    {
      icon: '📋',
      title: locale === 'es' ? 'Definición de estructura y jerarquía de contenidos' : 'Definition of structure and content hierarchy',
      description: locale === 'es'
        ? 'Organizamos la información de forma lógica para que los usuarios encuentren lo que buscan fácilmente.'
        : 'We organize information logically so users find what they are looking for easily.'
    },
    {
      icon: '🧭',
      title: locale === 'es' ? 'Navegación clara e intuitiva' : 'Clear and intuitive navigation',
      description: locale === 'es'
        ? 'Diseñamos una navegación que guíe al usuario hacia los objetivos del sitio web.'
        : 'We design navigation that guides the user toward the website objectives.'
    },
    {
      icon: '📱',
      title: locale === 'es' ? 'Experiencia optimizada para dispositivos móviles' : 'Optimized experience for mobile devices',
      description: locale === 'es'
        ? 'Garantizamos que el sitio funcione perfectamente en todos los dispositivos y tamaños de pantalla.'
        : 'We ensure the site works perfectly on all devices and screen sizes.'
    },
    {
      icon: '⚙️',
      title: locale === 'es' ? 'Desarrollo técnico sólido y escalable' : 'Solid and scalable technical development',
      description: locale === 'es'
        ? 'Construimos con tecnología moderna que permita el crecimiento y futuras mejoras.'
        : 'We build with modern technology that allows growth and future improvements.'
    },
    {
      icon: '🔧',
      title: locale === 'es' ? 'Sitio web autogestionable' : 'Self-manageable website',
      description: locale === 'es'
        ? 'Te entregamos control total para que puedas actualizar contenidos sin necesidad de conocimientos técnicos.'
        : 'We give you full control so you can update content without technical knowledge.'
    },
    {
      icon: '⚡',
      title: locale === 'es' ? 'Optimización básica de rendimiento y SEO técnico' : 'Basic performance optimization and technical SEO',
      description: locale === 'es'
        ? 'Optimizamos la velocidad y los aspectos técnicos fundamentales para el posicionamiento en buscadores.'
        : 'We optimize speed and fundamental technical aspects for search engine positioning.'
    },
    {
      icon: '🔗',
      title: locale === 'es' ? 'Integración con formularios y herramientas externas' : 'Integration with forms and external tools',
      description: locale === 'es'
        ? 'Conectamos el sitio con las herramientas que ya usas para facilitar la gestión de consultas.'
        : 'We connect the site with the tools you already use to facilitate inquiry management.'
    }
  ];

  const complementaryServices = [
    {
      icon: '🎯',
      title: locale === 'es' ? 'Landing Pages' : 'Landing Pages',
      description: locale === 'es'
        ? 'Para campañas específicas, lanzamientos o captación de leads con un objetivo concreto.'
        : 'For specific campaigns, launches or lead capture with a specific objective.'
    },
    {
      icon: '📈',
      title: 'Google Ads',
      description: locale === 'es'
        ? 'Para generar tráfico calificado y acelerar la generación de consultas o ventas.'
        : 'To generate qualified traffic and accelerate the generation of inquiries or sales.'
    },
    {
      icon: '🔧',
      title: locale === 'es' ? 'Mantenimiento Web' : 'Web Maintenance',
      description: locale === 'es'
        ? 'Para asegurar estabilidad, actualizaciones y mejoras continuas una vez publicado el sitio.'
        : 'To ensure stability, updates and continuous improvements once the site is published.'
    },
    {
      icon: '🤖',
      title: locale === 'es' ? 'IA para atención al cliente' : 'AI for customer service',
      description: locale === 'es'
        ? 'Para automatizar respuestas, calificar consultas y optimizar el proceso de contacto.'
        : 'To automate responses, qualify inquiries and optimize the contact process.'
    }
  ];

  return (
    <div className="desarrollo-web-page">
      {/* Hero Section - Igual que el resto del sitio */}
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
              {locale === 'es' ? 'Desarrollo Web' : 'Web Development'}
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {locale === 'es' ? 'Sitios web profesionales orientados a resultados' : 'Professional results-oriented websites'}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {locale === 'es'
                ? 'Diseñamos y desarrollamos sitios web pensados para representar correctamente tu negocio, comunicar con claridad y generar oportunidades reales.'
                : 'We design and develop websites designed to correctly represent your business, communicate clearly and generate real opportunities.'}
            </motion.p>
            <motion.p
              className="hero-highlight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {locale === 'es'
                ? 'Un sitio web no es solo diseño. Es estructura, mensaje, experiencia y objetivo.'
                : 'A website is not just design. It is structure, message, experience and objective.'}
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button 
                className="cta-button primary large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(locale === 'es' ? 'https://tidycal.com/alora/20-minutos-reunion' : 'https://tidycal.com/alora/20-minutes', '_blank')}
              >
                {locale === 'es' ? 'Hablar sobre tu proyecto' : 'Talk about your project'}
                <span className="duration">
                  {locale === 'es' ? 'Llamada online de 20 minutos' : '20-minute online call'}
                </span>
              </motion.button>
            </motion.div>
          </div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              background: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80") center/cover'
            }}
          ></motion.div>
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'El problema habitual' : 'The usual problem'}
          </h2>
          <p>
            {locale === 'es'
              ? 'Muchos negocios tienen un sitio web que:'
              : 'Many businesses have a website that:'}
          </p>
          <div className="problems-list">
            <div className="problem-item">
              <span className="problem-icon">❌</span>
              <span>
                {locale === 'es'
                  ? 'No refleja su verdadero nivel profesional'
                  : 'Does not reflect their true professional level'}
              </span>
            </div>
            <div className="problem-item">
              <span className="problem-icon">❌</span>
              <span>
                {locale === 'es'
                  ? 'Está desactualizado o es confuso'
                  : 'Is outdated or confusing'}
              </span>
            </div>
            <div className="problem-item">
              <span className="problem-icon">❌</span>
              <span>
                {locale === 'es'
                  ? 'No genera consultas ni contactos'
                  : 'Does not generate inquiries or contacts'}
              </span>
            </div>
            <div className="problem-item">
              <span className="problem-icon">❌</span>
              <span>
                {locale === 'es'
                  ? 'No acompaña el crecimiento del negocio'
                  : 'Does not support business growth'}
              </span>
            </div>
          </div>
          <div className="problem-result">
            <p>
              {locale === 'es'
                ? 'El resultado es claro: visitas que no convierten y oportunidades perdidas.'
                : 'The result is clear: visits that don\'t convert and lost opportunities.'}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'Nuestra solución' : 'Our solution'}
          </h2>
          <p>
            {locale === 'es'
              ? 'En Alora desarrollamos sitios web claros, modernos y funcionales, diseñados para que el usuario entienda rápidamente:'
              : 'At Alora we develop clear, modern and functional websites, designed so that the user quickly understands:'}
          </p>
          <div className="solution-points">
            <div className="solution-point">
              <span className="point-number">1</span>
              <span>
                {locale === 'es' ? 'quién eres' : 'who you are'}
              </span>
            </div>
            <div className="solution-point">
              <span className="point-number">2</span>
              <span>
                {locale === 'es' ? 'qué ofreces' : 'what you offer'}
              </span>
            </div>
            <div className="solution-point">
              <span className="point-number">3</span>
              <span>
                {locale === 'es' ? 'y cuál es el siguiente paso' : 'and what is the next step'}
              </span>
            </div>
          </div>
          <p className="solution-approach">
            {locale === 'es'
              ? 'Cada proyecto parte del negocio y sus objetivos, no de plantillas genéricas.'
              : 'Each project starts from the business and its objectives, not from generic templates.'}
          </p>
        </motion.div>
      </section>

      {/* Service Details Section */}
      <section className="service-details-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'Qué incluye el servicio de desarrollo web' : 'What the web development service includes'}
          </h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="service-icon">
                  <span>{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="services-summary">
            {locale === 'es'
              ? 'Todo lo necesario para contar con un sitio web profesional, funcional y preparado para crecer.'
              : 'Everything necessary to have a professional, functional website ready to grow.'}
          </p>
        </motion.div>
      </section>

      {/* Website Types Section */}
      <section className="website-types-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'Tipos de sitios web que desarrollamos' : 'Types of websites we develop'}
          </h2>
          <div className="types-grid">
            <div className="type-item">
              <span className="type-icon">🏢</span>
              <span>
                {locale === 'es' ? 'Sitios web corporativos' : 'Corporate websites'}
              </span>
            </div>
            <div className="type-item">
              <span className="type-icon">💼</span>
              <span>
                {locale === 'es' ? 'Sitios web de servicios profesionales' : 'Professional service websites'}
              </span>
            </div>
            <div className="type-item">
              <span className="type-icon">🏛️</span>
              <span>
                {locale === 'es' ? 'Sitios institucionales' : 'Institutional websites'}
              </span>
            </div>
            <div className="type-item">
              <span className="type-icon">📄</span>
              <span>
                {locale === 'es' ? 'One pages estratégicas' : 'Strategic one pages'}
              </span>
            </div>
            <div className="type-item">
              <span className="type-icon">🎯</span>
              <span>
                {locale === 'es' ? 'Sitios orientados a captación de leads' : 'Lead capture oriented websites'}
              </span>
            </div>
          </div>
          <p className="types-note">
            {locale === 'es'
              ? 'Si el proyecto requiere una solución específica, se evalúa y se define de forma conjunta.'
              : 'If the project requires a specific solution, it is evaluated and defined jointly.'}
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'Proyectos web desarrollados' : 'Web projects developed'}
          </h2>
          <p>
            {locale === 'es'
              ? 'Desarrollamos sitios web para distintos tipos de negocios, siempre con el mismo criterio: claridad, profesionalismo y orientación a resultados.'
              : 'We develop websites for different types of businesses, always with the same criteria: clarity, professionalism and results orientation.'}
          </p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => window.open(project.url, '_blank')}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="projects-conclusion">
            {locale === 'es'
              ? 'Cada proyecto responde a un objetivo distinto, pero todos comparten el mismo enfoque: que el sitio web cumpla una función real dentro del negocio.'
              : 'Each project responds to a different objective, but all share the same approach: that the website fulfills a real function within the business.'}
          </p>
        </motion.div>
      </section>

      {/* Complementary Services Section */}
      <section className="complementary-services-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'Servicios que complementan el desarrollo web' : 'Services that complement web development'}
          </h2>
          <p>
            {locale === 'es'
              ? 'Un sitio web alcanza su máximo potencial cuando forma parte de un sistema digital completo. Según el objetivo del proyecto, el desarrollo web puede complementarse con otros servicios.'
              : 'A website reaches its maximum potential when it is part of a complete digital system. Depending on the project objective, web development can be complemented with other services.'}
          </p>
          <div className="complementary-grid">
            {complementaryServices.map((service, index) => (
              <motion.div 
                key={index}
                className="complementary-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="complementary-icon">
                  <span>{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="complementary-note">
            {locale === 'es'
              ? 'Durante el análisis inicial se evalúa si tiene sentido integrar alguno de estos servicios o si el desarrollo web por sí solo es suficiente.'
              : 'During the initial analysis, it is evaluated whether it makes sense to integrate any of these services or if web development alone is sufficient.'}
          </p>
        </motion.div>
      </section>

      {/* How We Work Section - Grid Design */}
      <section className="process-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'Cómo trabajamos' : 'How we work'}
          </h2>
          <p>
            {locale === 'es'
              ? 'Un proceso claro y estructurado para garantizar resultados.'
              : 'A clear and structured process to guarantee results.'}
          </p>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-icon">🔍</div>
              <div className="process-number">01</div>
              <h3>
                {locale === 'es' ? 'Análisis del negocio y los objetivos' : 'Business and objectives analysis'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'Estudiamos tu negocio, competencia y objetivos para definir la mejor estrategia.'
                  : 'We study your business, competition and objectives to define the best strategy.'}
              </p>
            </div>
            <div className="process-card">
              <div className="process-icon">📋</div>
              <div className="process-number">02</div>
              <h3>
                {locale === 'es' ? 'Definición de estructura y enfoque' : 'Definition of structure and approach'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'Diseñamos la arquitectura y definimos el alcance técnico del proyecto.'
                  : 'We design the architecture and define the technical scope of the project.'}
              </p>
            </div>
            <div className="process-card">
              <div className="process-icon">🎨</div>
              <div className="process-number">03</div>
              <h3>
                {locale === 'es' ? 'Diseño de la experiencia y los contenidos' : 'Design of experience and content'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'Creamos el diseño visual y estructuramos los contenidos para máxima efectividad.'
                  : 'We create the visual design and structure the content for maximum effectiveness.'}
              </p>
            </div>
            <div className="process-card">
              <div className="process-icon">⚡</div>
              <div className="process-number">04</div>
              <h3>
                {locale === 'es' ? 'Desarrollo del sitio web' : 'Website development'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'Construimos el sitio con tecnología moderna y mejores prácticas.'
                  : 'We build the site with modern technology and best practices.'}
              </p>
            </div>
            <div className="process-card">
              <div className="process-icon">🚀</div>
              <div className="process-number">05</div>
              <h3>
                {locale === 'es' ? 'Publicación y entrega final' : 'Publication and final delivery'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'Lanzamos el sitio y te entregamos el control total con capacitación incluida.'
                  : 'We launch the site and deliver full control with included training.'}
              </p>
            </div>
          </div>
          <p className="process-summary">
            {locale === 'es'
              ? 'Proceso claro, comunicación directa y sin pasos innecesarios.'
              : 'Clear process, direct communication and without unnecessary steps.'}
          </p>
        </motion.div>
      </section>

      {/* Ideal For Section */}
      <section className="ideal-for-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'Este servicio es ideal si' : 'This service is ideal if'}
          </h2>
          <div className="ideal-list">
            <div className="ideal-item">
              <span className="ideal-icon">✓</span>
              <span>
                {locale === 'es'
                  ? 'Tu negocio ya está en funcionamiento'
                  : 'Your business is already operating'}
              </span>
            </div>
            <div className="ideal-item">
              <span className="ideal-icon">✓</span>
              <span>
                {locale === 'es'
                  ? 'Necesitas un sitio web profesional y actualizado'
                  : 'You need a professional and updated website'}
              </span>
            </div>
            <div className="ideal-item">
              <span className="ideal-icon">✓</span>
              <span>
                {locale === 'es'
                  ? 'Quieres generar consultas de forma constante'
                  : 'You want to generate inquiries constantly'}
              </span>
            </div>
            <div className="ideal-item">
              <span className="ideal-icon">✓</span>
              <span>
                {locale === 'es'
                  ? 'Buscas una base sólida para futuras acciones digitales'
                  : 'You are looking for a solid base for future digital actions'}
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section - Igual que Soluciones */}
      <section className="final-cta-section">
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
                ? '¿Hablamos de tu sitio web?' 
                : 'Shall we talk about your website?'}
            </h2>
            <p>
              {locale === 'es'
                ? 'Si necesitas un sitio web profesional que represente correctamente tu negocio y esté preparado para crecer, coordinamos una llamada breve para analizar tu caso.'
                : 'If you need a professional website that correctly represents your business and is ready to grow, we schedule a brief call to analyze your case.'}
            </p>
            <motion.button 
              className="cta-button primary large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(locale === 'es' ? 'https://tidycal.com/alora/20-minutos-reunion' : 'https://tidycal.com/alora/20-minutes', '_blank')}
            >
              {locale === 'es' ? 'Agendar una llamada de 20 minutos' : 'Schedule a 20-minute call'}
            </motion.button>
            <p className="cta-note">
              {locale === 'es'
                ? 'Evaluamos tu proyecto y te decimos si podemos ayudarte.'
                : 'We evaluate your project and tell you if we can help you.'}
            </p>
          </div>
          <div className="cta-image" style={{
            background: 'url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80") center/cover'
          }}></div>
        </motion.div>
      </section>

      {/* Chatbot AI - Soporte disponible */}
      <Chatbot />
    </div>
  );
};

export default DesarrolloWeb;
