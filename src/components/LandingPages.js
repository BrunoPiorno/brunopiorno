import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Chatbot from './Chatbot';
import starleyImage from '../images/starleyweb.png';
import josejoseImage from '../images/josejose.png';
import protorneosImage from '../images/protorneo.png';
import tenisDeMesaImage from '../images/tenisdemesatrenque.com.ar_.png';
import './LandingPages.css';

const LandingPages = () => {
  const { t, locale } = useLanguage();

  useEffect(() => {
    // Agregar clase al body para esta página
    document.body.classList.add('landing-pages-page');
    
    return () => {
      // Limpiar clase al desmontar
      document.body.classList.remove('landing-pages-page');
    };
  }, []);

  const projects = [
    {
      title: 'Starley',
      description: locale === 'es'
        ? 'Sitio WordPress con tema Flatsome para catálogo de productos e información empresarial. Desarrollo de mejoras personalizadas y nuevas funcionalidades para optimizar la experiencia de usuario y la presentación de productos.'
        : 'WordPress site with Flatsome theme for product catalog and company information. Development of custom improvements and new functionalities to optimize user experience and product presentation.',
      image: starleyImage,
      url: 'https://starley.com.ar'
    },
    {
      title: 'José José',
      description: locale === 'es'
        ? 'Desarrollado a medida con WordPress como CMS, utilizando PHP, MySQL, HTML5, SCSS y JavaScript. Tema completamente personalizado sin uso de plantillas preexistentes, optimizado para rendimiento, SEO y móvil.'
        : 'Custom-designed website using WordPress as CMS, developed with PHP, MySQL, HTML5, CSS3, and JavaScript. Fully personalized theme with no prebuilt templates, optimized for performance, SEO, and mobile compatibility.',
      image: josejoseImage,
      url: 'https://josejose.com.ar'
    },
    {
      title: 'Protorneos',
      description: locale === 'es'
        ? 'Sitio web liviano y estático desarrollado con HTML5, CSS3 y JavaScript puro. Diseño responsive, estructura optimizada para velocidad de carga y fácil mantenimiento, ideal para mostrar información institucional y deportiva sin depender de CMS.'
        : 'Lightweight and static website built with pure HTML5, CSS3, and JavaScript. Fully responsive, optimized for fast loading and easy maintenance, ideal for showcasing sports or institutional information without a CMS.',
      image: protorneosImage,
      url: 'https://protorneos.com'
    },
    {
      title: 'Tenis De Mesa Trenque',
      description: locale === 'es'
        ? 'Desarrollamos un sitio web informativo moderno y dinámico para el club de Tenis de Mesa en Trenque Lauquen. El proyecto fue realizado en React, lo que garantiza una experiencia rápida, fluida y adaptable en cualquier dispositivo.'
        : 'We developed a modern and dynamic informative website for the Table Tennis club in Trenque Lauquen. The project was built with React, guaranteeing a fast, fluid and adaptable experience on any device.',
      image: tenisDeMesaImage,
      url: 'https://www.tenisdemesatrenque.com'
    }
  ];

  const services = [
    {
      icon: '🎯',
      title: locale === 'es' ? 'Definición del objetivo principal de conversión' : 'Definition of main conversion objective',
      description: locale === 'es'
        ? 'Identificamos el objetivo específico que perseguimos con la landing page.'
        : 'We identify the specific objective we pursue with the landing page.'
    },
    {
      icon: '📋',
      title: locale === 'es' ? 'Estructura estratégica orientada a resultados' : 'Strategic structure oriented to results',
      description: locale === 'es'
        ? 'Diseñamos la arquitectura perfecta para guiar al usuario hacia la conversión.'
        : 'We design the perfect architecture to guide the user towards conversion.'
    },
    {
      icon: '✍️',
      title: locale === 'es' ? 'Copy claro, directo y enfocado en beneficios' : 'Clear, direct copy focused on benefits',
      description: locale === 'es'
        ? 'Creamos textos persuasivos que conectan con las necesidades del usuario.'
        : 'We create persuasive texts that connect with user needs.'
    },
    {
      icon: '🎨',
      title: locale === 'es' ? 'Diseño visual alineado a la marca' : 'Visual design aligned with the brand',
      description: locale === 'es'
        ? 'Desarrollamos un diseño profesional que representa tu identidad de marca.'
        : 'We develop a professional design that represents your brand identity.'
    },
    {
      icon: '📱',
      title: locale === 'es' ? 'Experiencia optimizada para dispositivos móviles' : 'Experience optimized for mobile devices',
      description: locale === 'es'
        ? 'Garantizamos una experiencia perfecta en todos los dispositivos.'
        : 'We guarantee a perfect experience on all devices.'
    },
    {
      icon: '⚡',
      title: locale === 'es' ? 'Desarrollo técnico rápido y eficiente' : 'Fast and efficient technical development',
      description: locale === 'es'
        ? 'Construimos la landing page con tecnología moderna y mejores prácticas.'
        : 'We build the landing page with modern technology and best practices.'
    },
    {
      icon: '🔗',
      title: locale === 'es' ? 'Integración con formularios, agendas o herramientas externas' : 'Integration with forms, calendars or external tools',
      description: locale === 'es'
        ? 'Conectamos la landing page con las herramientas que ya utilizas.'
        : 'We connect the landing page with the tools you already use.'
    },
    {
      icon: '🚀',
      title: locale === 'es' ? 'Optimización básica de velocidad y rendimiento' : 'Basic speed and performance optimization',
      description: locale === 'es'
        ? 'Optimizamos la carga y el rendimiento para máxima conversión.'
        : 'We optimize loading and performance for maximum conversion.'
    }
  ];

  const processSteps = [
    {
      icon: '🔍',
      number: '01',
      title: locale === 'es' ? 'Análisis del objetivo y la oferta' : 'Analysis of objective and offer',
      description: locale === 'es'
        ? 'Estudiamos tu objetivo, tu oferta y tu público para definir la estrategia.'
        : 'We study your objective, your offer and your audience to define the strategy.'
    },
    {
      icon: '📋',
      number: '02',
      title: locale === 'es' ? 'Definición de estructura y mensaje' : 'Definition of structure and message',
      description: locale === 'es'
        ? 'Diseñamos la arquitectura y el mensaje clave para máxima efectividad.'
        : 'We design the architecture and key message for maximum effectiveness.'
    },
    {
      icon: '🎨',
      number: '03',
      title: locale === 'es' ? 'Diseño de la experiencia y el contenido' : 'Design of experience and content',
      description: locale === 'es'
        ? 'Creamos el diseño visual y desarrollamos el contenido persuasivo.'
        : 'We create the visual design and develop the persuasive content.'
    },
    {
      icon: '⚡',
      number: '04',
      title: locale === 'es' ? 'Desarrollo de la landing page' : 'Development of the landing page',
      description: locale === 'es'
        ? 'Construimos la landing page con tecnología moderna y optimización.'
        : 'We build the landing page with modern technology and optimization.'
    },
    {
      icon: '🚀',
      number: '05',
      title: locale === 'es' ? 'Publicación y entrega final' : 'Publication and final delivery',
      description: locale === 'es'
        ? 'Lanzamos la landing page y te entregamos el control total.'
        : 'We launch the landing page and deliver full control to you.'
    }
  ];

  const idealFor = [
    {
      icon: '💰',
      text: locale === 'es'
        ? 'Inviertes en tráfico y no estás convirtiendo'
        : 'You invest in traffic and are not converting'
    },
    {
      icon: '🎯',
      text: locale === 'es'
        ? 'Necesitas generar leads de forma directa'
        : 'You need to generate leads directly'
    },
    {
      icon: '✅',
      text: locale === 'es'
        ? 'Quieres validar una oferta o servicio'
        : 'You want to validate an offer or service'
    },
    {
      icon: '⚡',
      text: locale === 'es'
        ? 'Buscas una página enfocada en acción, no en información'
        : 'You are looking for a page focused on action, not information'
    }
  ];

  return (
    <div className="landing-pages-page">
      {/* Hero Section - Mismo que DesarrolloWeb */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-text">
            <h1>
              {locale === 'es' ? 'Landing pages diseñadas para convertir' : 'Landing pages designed to convert'}
            </h1>
            <p className="hero-subtitle">
              {locale === 'es'
                ? 'Diseñamos landing pages enfocadas en un solo objetivo: convertir visitas en leads, contactos o ventas.'
                : 'We design landing pages focused on a single objective: converting visits into leads, contacts or sales.'}
            </p>
            <p className="hero-highlight">
              {locale === 'es'
                ? 'Una landing page no es un sitio web reducido. Es una herramienta estratégica pensada para acción inmediata.'
                : 'A landing page is not a reduced website. It is a strategic tool designed for immediate action.'}
            </p>
            <div className="hero-buttons">
              <motion.button 
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(locale === 'es' ? 'https://tidycal.com/alora/20-minutos-reunion' : 'https://tidycal.com/alora/20-minutes', '_blank')}
              >
                {locale === 'es' ? 'Hablamos sobre tu proyecto' : 'Let\'s talk about your project'}
                <span className="duration">
                  {locale === 'es' ? 'Llamada online de 20 minutos' : 'Online 20-minute call'}
                </span>
              </motion.button>
            </div>
          </div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              background: 'url("https://nubedocs.es/wp-content/uploads/2021/01/20210111-que-es-una-landing-page.png") center/cover'
            }}
          ></motion.div>
        </motion.div>
      </section>

      {/* Problem Section - Grilla de 4 */}
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
              ? 'Muchos negocios invierten en tráfico, campañas o contenidos, pero:'
              : 'Many businesses invest in traffic, campaigns or content, but:'}
          </p>
          <div className="problems-grid">
            <div className="problem-card">
              <div className="problem-icon">🚫</div>
              <h3>
                {locale === 'es'
                  ? 'Páginas que no convierten'
                  : 'Pages that don\'t convert'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'Envían a los usuarios a páginas que no están optimizadas para la conversión.'
                  : 'They send users to pages that are not optimized for conversion.'}
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🔄</div>
              <h3>
                {locale === 'es'
                  ? 'Demasiada información'
                  : 'Too much information'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'Mezclan demasiada información y objetivos en una sola página.'
                  : 'They mix too much information and objectives on a single page.'}
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">❓</div>
              <h3>
                {locale === 'es'
                  ? 'Mensaje confuso'
                  : 'Confusing message'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'No tienen un mensaje claro ni una acción definida para el usuario.'
                  : 'They don\'t have a clear message or defined action for the user.'}
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">💸</div>
              <h3>
                {locale === 'es'
                  ? 'Pérdida de oportunidades'
                  : 'Lost opportunities'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'Pierden oportunidades valiosas por falta de foco y claridad.'
                  : 'They lose valuable opportunities due to lack of focus and clarity.'}
              </p>
            </div>
          </div>
          <div className="problem-result">
            <p>
              {locale === 'es'
                ? 'El resultado es siempre el mismo: tráfico que llega, pero no convierte.'
                : 'The result is always the same: traffic arrives, but doesn\'t convert.'}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Landing vs Website Section */}
      <section className="comparison-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? '¿Necesito un sitio web o una landing page?' : 'Do I need a website or a landing page?'}
          </h2>
          <p>
            {locale === 'es'
              ? 'No todos los objetivos requieren un sitio web completo. En muchos casos, una landing page es la solución más efectiva.'
              : 'Not all objectives require a complete website. In many cases, a landing page is the most effective solution.'}
          </p>
          
          <div className="comparison-grid">
            <div className="comparison-card landing-card">
              <h3>
                {locale === 'es' ? 'Cuándo conviene una landing page' : 'When a landing page is advisable'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'Una landing page es la mejor opción si:'
                  : 'A landing page is the best option if:'}
              </p>
              <div className="comparison-list">
                <div className="comparison-item">
                  <span className="item-icon">🎯</span>
                  <span>
                    {locale === 'es'
                      ? 'Tienes un objetivo único y claro (captar leads, vender un servicio, agendar llamadas).'
                      : 'You have a single, clear objective (capture leads, sell a service, schedule calls).'}
                  </span>
                </div>
                <div className="comparison-item">
                  <span className="item-icon">💰</span>
                  <span>
                    {locale === 'es'
                      ? 'Inviertes en campañas de pago o tráfico específico.'
                      : 'You invest in paid campaigns or specific traffic.'}
                  </span>
                </div>
                <div className="comparison-item">
                  <span className="item-icon">⚡</span>
                  <span>
                    {locale === 'es'
                      ? 'Necesitas convertir rápidamente sin distracciones.'
                      : 'You need to convert quickly without distractions.'}
                  </span>
                </div>
                <div className="comparison-item">
                  <span className="item-icon">✅</span>
                  <span>
                    {locale === 'es'
                      ? 'Quieres validar una oferta o servicio concreto.'
                      : 'You want to validate a specific offer or service.'}
                  </span>
                </div>
              </div>
              <p className="comparison-conclusion">
                {locale === 'es'
                  ? 'La landing page elimina lo innecesario y guía al usuario hacia una sola acción.'
                  : 'The landing page eliminates the unnecessary and guides the user toward a single action.'}
              </p>
            </div>

            <div className="comparison-card website-card">
              <h3>
                {locale === 'es' ? 'Cuándo conviene un sitio web' : 'When a website is advisable'}
              </h3>
              <p>
                {locale === 'es'
                  ? 'Un sitio web completo es más adecuado si:'
                  : 'A complete website is more suitable if:'}
              </p>
              <div className="comparison-list">
                <div className="comparison-item">
                  <span className="item-icon">🏢</span>
                  <span>
                    {locale === 'es'
                      ? 'Necesitas presentar tu negocio de forma integral.'
                      : 'You need to present your business comprehensively.'}
                  </span>
                </div>
                <div className="comparison-item">
                  <span className="item-icon">🔧</span>
                  <span>
                    {locale === 'es'
                      ? 'Ofreces varios servicios o soluciones.'
                      : 'You offer several services or solutions.'}
                  </span>
                </div>
                <div className="comparison-item">
                  <span className="item-icon">🎯</span>
                  <span>
                    {locale === 'es'
                      ? 'Buscas posicionamiento de marca y presencia institucional.'
                      : 'You seek brand positioning and institutional presence.'}
                  </span>
                </div>
                <div className="comparison-item">
                  <span className="item-icon">🏗️</span>
                  <span>
                    {locale === 'es'
                      ? 'Quieres construir una base sólida a largo plazo.'
                      : 'You want to build a solid long-term foundation.'}
                  </span>
                </div>
              </div>
              <p className="comparison-conclusion">
                {locale === 'es'
                  ? 'El sitio web funciona como el centro de tu ecosistema digital.'
                  : 'The website functions as the center of your digital ecosystem.'}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Recommendation Section */}
      <section className="recommendation-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? '¿Qué recomendamos en Alora?' : 'What do we recommend at Alora?'}
          </h2>
          <p>
            {locale === 'es'
              ? 'No se trata de elegir uno u otro por defecto. Se trata de elegir la herramienta correcta según tu objetivo actual.'
              : 'It\'s not about choosing one or the other by default. It\'s about choosing the right tool according to your current objective.'}
          </p>
          <div className="recommendation-content">
            <div className="recommendation-text">
              <p>
                {locale === 'es'
                  ? 'En muchos proyectos: la landing page se utiliza para convertir, y el sitio web para respaldar, posicionar y escalar.'
                  : 'In many projects: the landing page is used to convert, and the website to support, position and scale.'}
              </p>
              <p>
                {locale === 'es'
                  ? 'Durante el análisis inicial evaluamos tu caso y te recomendamos la opción más adecuada, incluso si eso implica no desarrollar ambos.'
                  : 'During the initial analysis we evaluate your case and recommend the most appropriate option, even if that means not developing both.'}
              </p>
            </div>
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
              ? 'En Alora diseñamos landing pages claras, directas y orientadas a conversión, pensadas para guiar al usuario paso a paso hacia una acción concreta.'
              : 'At Alora we design clear, direct and conversion-oriented landing pages, designed to guide the user step by step towards a specific action.'}
          </p>
          <div className="solution-points">
            <div className="solution-point">
              <span className="point-icon">🎯</span>
              <span>
                {locale === 'es' ? 'el objetivo del negocio' : 'the business objective'}
              </span>
            </div>
            <div className="solution-point">
              <span className="point-icon">👥</span>
              <span>
                {locale === 'es' ? 'el nivel de conciencia del usuario' : 'the user\'s awareness level'}
              </span>
            </div>
            <div className="solution-point">
              <span className="point-icon">📊</span>
              <span>
                {locale === 'es' ? 'la fuente de tráfico' : 'the traffic source'}
              </span>
            </div>
          </div>
          <p className="solution-conclusion">
            {locale === 'es' ? 'Nada se deja al azar.' : 'Nothing is left to chance.'}
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'Qué incluye el servicio de landing pages' : 'What the landing pages service includes'}
          </h2>
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
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="services-conclusion">
            {locale === 'es'
              ? 'Todo orientado a que el usuario entienda, confíe y actúe.'
              : 'All oriented so that the user understands, trusts and acts.'}
          </p>
        </motion.div>
      </section>

      {/* Types Section */}
      <section className="types-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'Tipos de landing pages que desarrollamos' : 'Types of landing pages we develop'}
          </h2>
          <div className="types-grid">
            <div className="type-item">
              <span className="type-icon">🎯</span>
              <span>
                {locale === 'es' ? 'Captación de leads' : 'Lead capture'}
              </span>
            </div>
            <div className="type-item">
              <span className="type-icon">💼</span>
              <span>
                {locale === 'es' ? 'Venta de servicios' : 'Service sales'}
              </span>
            </div>
            <div className="type-item">
              <span className="type-icon">🚀</span>
              <span>
                {locale === 'es' ? 'Lanzamientos y campañas específicas' : 'Launches and specific campaigns'}
              </span>
            </div>
            <div className="type-item">
              <span className="type-icon">📅</span>
              <span>
                {locale === 'es' ? 'Reserva de llamadas o reuniones' : 'Call or meeting reservation'}
              </span>
            </div>
            <div className="type-item">
              <span className="type-icon">✅</span>
              <span>
                {locale === 'es' ? 'Validación de ofertas o ideas' : 'Validation of offers or ideas'}
              </span>
            </div>
          </div>
          <p className="types-note">
            {locale === 'es'
              ? 'Si el objetivo es claro, la landing page se adapta.'
              : 'If the objective is clear, the landing page adapts.'}
          </p>
        </motion.div>
      </section>

      {/* Projects Section - Grilla de 4 */}
      <section className="projects-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'Proyectos de landing pages desarrollados' : 'Landing page projects developed'}
          </h2>
          <p>
            {locale === 'es'
              ? 'Diseñamos landing pages para distintos tipos de campañas y negocios, siempre con el mismo criterio: simplicidad, foco y conversión.'
              : 'We design landing pages for different types of campaigns and businesses, always with the same criteria: simplicity, focus and conversion.'}
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
              ? 'Cada landing page responde a un objetivo específico, pero todas comparten el mismo principio: eliminar fricción y maximizar la conversión.'
              : 'Each landing page responds to a specific objective, but all share the same principle: eliminate friction and maximize conversion.'}
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
            {locale === 'es' ? 'Servicios que complementan una landing page' : 'Services that complement a landing page'}
          </h2>
          <p>
            {locale === 'es'
              ? 'Una landing page alcanza su máximo rendimiento cuando forma parte de un sistema completo. Según el objetivo del proyecto, suele combinarse con otros servicios.'
              : 'A landing page reaches its maximum performance when it is part of a complete system. Depending on the project objective, it is usually combined with other services.'}
          </p>
          <div className="complementary-grid">
            <div className="complementary-item">
              <h4>Google Ads</h4>
              <p>
                {locale === 'es'
                  ? 'Para atraer tráfico con intención real y acelerar resultados.'
                  : 'To attract traffic with real intent and accelerate results.'}
              </p>
            </div>
            <div className="complementary-item">
              <h4>
                {locale === 'es' ? 'Desarrollo Web' : 'Web Development'}
              </h4>
              <p>
                {locale === 'es'
                  ? 'Cuando la landing forma parte de un ecosistema digital más amplio.'
                  : 'When the landing is part of a broader digital ecosystem.'}
              </p>
            </div>
            <div className="complementary-item">
              <h4>
                {locale === 'es' ? 'Mantenimiento y optimización' : 'Maintenance and optimization'}
              </h4>
              <p>
                {locale === 'es'
                  ? 'Para realizar ajustes, mejoras y optimizaciones continuas.'
                  : 'To make adjustments, improvements and continuous optimizations.'}
              </p>
            </div>
            <div className="complementary-item">
              <h4>
                {locale === 'es' ? 'IA para atención al cliente' : 'AI for customer service'}
              </h4>
              <p>
                {locale === 'es'
                  ? 'Para responder consultas, calificar leads y automatizar el primer contacto.'
                  : 'To respond to inquiries, qualify leads and automate first contact.'}
              </p>
            </div>
          </div>
          <p className="complementary-note">
            {locale === 'es'
              ? 'Durante el análisis inicial se define si tiene sentido integrar alguno de estos servicios o si la landing page por sí sola es suficiente.'
              : 'During the initial analysis it is defined if it makes sense to integrate any of these services or if the landing page alone is sufficient.'}
          </p>
        </motion.div>
      </section>

      {/* Process Section */}
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
              ? 'Proceso claro, rápido y enfocado en resultados.'
              : 'Clear, fast and results-focused process.'}
          </p>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div className="process-card" key={index}>
                <div className="process-icon">{step.icon}</div>
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
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
            {idealFor.map((item, index) => (
              <div className="ideal-item" key={index}>
                <span className="ideal-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section - Exactamente igual que DesarrolloWeb */}
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
                ? '¿Hablamos de tu landing page?' 
                : 'Shall we talk about your landing page?'}
            </h2>
            <p>
              {locale === 'es'
                ? 'Si necesitas una landing page diseñada para convertir y alineada a tu objetivo de negocio, coordinamos una llamada breve y lo analizamos juntos.'
                : 'If you need a landing page designed to convert and aligned with your business objective, we schedule a brief call and analyze it together.'}
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
            background: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80") center/cover'
          }}></div>
        </motion.div>
      </section>

      {/* Chatbot AI - Soporte disponible */}
      <Chatbot />
    </div>
  );
};

export default LandingPages;
