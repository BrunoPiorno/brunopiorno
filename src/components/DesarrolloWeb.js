import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
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

  const complementaryIcons = {
    conversion: (
      <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.3" />
        <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.6" />
        <circle cx="24" cy="24" r="5" fill="currentColor" />
      </svg>
    ),
    ads: (
      <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
        <path d="M10 32l8-10 8 6 12-16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M30 12h10v10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="34" r="2" fill="currentColor" opacity="0.7" />
      </svg>
    ),
    maintenance: (
      <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
        <path d="M14 30l12 12 4-4-6-6 6-6-6-6 4-4-12-12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="14" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
    automation: (
      <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
        <circle cx="24" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="11" cy="32" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="37" cy="32" r="5" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M24 22v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M20 28l-6 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M28 28l6 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  };

  const idealIcons = {
    business: (
      <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
        <rect x="8" y="14" width="32" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M16 14v-6h16v6" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M18 24h4v4h-4zM26 24h4v4h-4z" fill="currentColor" />
        <path d="M12 36h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    goals: (
      <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
        <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.4" />
        <circle cx="24" cy="24" r="10" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.7" />
        <path d="M24 14v10l7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    team: (
      <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
        <circle cx="16" cy="18" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="32" cy="18" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M8 38c0-5 4-9 9-9h14c5 0 9 4 9 9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    evolve: (
      <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
        <path d="M24 6l6 10-6 4-6-4 6-10z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        <path d="M18 20l-6 16 12-4 12 4-6-16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    ),
  };

  const complementaryServices = locale === 'es'
    ? [
        {
          iconKey: 'conversion',
          title: 'Landing Pages orientadas a conversión',
          lead: 'Pensadas para convertir visitas en consultas.',
          description: 'Las usamos en campañas específicas, lanzamientos o acciones con objetivos medibles y tiempos cortos.',
          example: 'Ejemplo típico: captación de leads cualificados desde Google Ads o LinkedIn Ads.'
        },
        {
          iconKey: 'ads',
          title: 'Google Ads & Paid Acquisition',
          lead: 'Diseñadas para generar tráfico calificado sostenible.',
          description: 'Nos enfocamos en campañas que alimentan al sitio con intención real, optimizando keywords, anuncios y páginas de destino.',
          example: 'Ejemplo: sostener flujo de oportunidades B2B mientras el equipo comercial escala.'
        },
        {
          iconKey: 'maintenance',
          title: 'Mantenimiento y evolución web',
          lead: 'Asegura estabilidad, performance y mejoras continuas.',
          description: 'Incluye actualizaciones técnicas, monitoreo y evolutivos para mantener el sitio alineado al negocio.',
          example: 'Ejemplo: releases mensuales para sumar nuevos casos, productos o integraciones.'
        },
        {
          iconKey: 'automation',
          title: 'Automatización con IA en atención',
          lead: 'Integramos bots y flujos inteligentes para responder rápido.',
          description: 'Entrenamos asistentes con tu información real para clasificar consultas, derivar leads y liberar al equipo.',
          example: 'Ejemplo: asistente que filtra solicitudes de soporte y agenda llamadas prioritarias.'
        }
      ]
    : [
        {
          iconKey: 'conversion',
          title: 'Conversion-focused landing pages',
          lead: 'Built to turn visits into qualified inquiries.',
          description: 'We use them for campaigns, launches or initiatives with measurable objectives and short deadlines.',
          example: 'Example: capturing qualified B2B leads from Google Ads or LinkedIn Ads.'
        },
        {
          iconKey: 'ads',
          title: 'Google Ads & paid acquisition',
          lead: 'Designed to sustain qualified traffic.',
          description: 'We focus on campaigns that feed the site with real intent, optimizing keywords, ads and landing experiences.',
          example: 'Example: keeping a steady pipeline while the sales team scales.'
        },
        {
          iconKey: 'maintenance',
          title: 'Web maintenance & evolution',
          lead: 'Keeps stability, performance and ongoing improvements.',
          description: 'Covers technical updates, monitoring and incremental releases so the site follows the business.',
          example: 'Example: monthly releases to add new case studies, products or integrations.'
        },
        {
          iconKey: 'automation',
          title: 'Customer automation with AI',
          lead: 'We integrate bots and smart flows for faster answers.',
          description: 'Assistants are trained with your real knowledge to classify inquiries, route leads and free up the team.',
          example: 'Example: assistant that filters support requests and schedules priority calls.'
        }
      ];

  const idealCriteria = locale === 'es'
    ? [
        {
          iconKey: 'business',
          title: 'Negocios en marcha',
          highlight: 'Tu empresa ya opera con clientes y mercado claros.',
          detail: 'Necesitás que el sitio represente el nivel actual y sostenga el crecimiento.'
        },
        {
          iconKey: 'goals',
          title: 'Objetivos comerciales concretos',
          highlight: 'El sitio debe generar consultas, pedidos o leads calificados.',
          detail: 'Lo tratamos como una herramienta para ventas y desarrollo de negocio.'
        },
        {
          iconKey: 'team',
          title: 'Interlocutores disponibles',
          highlight: 'Contás con referentes internos que aportan criterio y feedback.',
          detail: 'El proyecto avanza con decisiones ágiles y colaboración real.'
        },
        {
          iconKey: 'evolve',
          title: 'Necesidad de evolucionar',
          highlight: 'Tu sitio actual quedó corto o no refleja el posicionamiento.',
          detail: 'Buscás una base sólida para coordinar próximas iniciativas digitales.'
        }
      ]
    : [
        {
          iconKey: 'business',
          title: 'Established operations',
          highlight: 'Your company already runs with real customers and a defined market.',
          detail: 'You need the site to reflect the current level and support growth.'
        },
        {
          iconKey: 'goals',
          title: 'Clear commercial objectives',
          highlight: 'The website must generate qualified inquiries or requests.',
          detail: 'We treat it as a tool for sales and business development.'
        },
        {
          iconKey: 'team',
          title: 'Available stakeholders',
          highlight: 'You have internal references who provide direction and feedback.',
          detail: 'The project progresses with agile decisions and real collaboration.'
        },
        {
          iconKey: 'evolve',
          title: 'Need to evolve',
          highlight: 'Your current site is outdated or misaligned with your positioning.',
          detail: 'You want a solid base for upcoming digital initiatives.'
        }
      ];

  const processSteps = locale === 'es'
    ? [
        {
          title: 'Análisis del negocio',
          lead: 'Entendemos objetivos, contexto y prioridades reales.',
          description: 'Define qué debe lograr el sitio y qué métricas vamos a mover.'
        },
        {
          title: 'Arquitectura y foco',
          lead: 'Convertimos objetivos en estructura y alcance técnico.',
          description: 'Priorizamos contenidos, integraciones y criterios antes del diseño.'
        },
        {
          title: 'Experiencia y contenido',
          lead: 'Diseñamos interfaz y mensajes que guían al usuario.',
          description: 'Prototipamos layouts y microcopys listos para validar con tu equipo.'
        },
        {
          title: 'Desarrollo y QA',
          lead: 'Construimos con código mantenible y pruebas en cada iteración.',
          description: 'Integramos CMS, automatizaciones y performance antes del lanzamiento.'
        },
        {
          title: 'Lanzamiento y mejora continua',
          lead: 'Acompañamos la puesta en línea y los ajustes reales.',
          description: 'Medimos comportamiento y planificamos evolutivos junto a tu equipo.'
        }
      ]
    : [
        {
          title: 'Business analysis',
          lead: 'We understand objectives, context and real priorities.',
          description: 'Defines what the site must achieve and which metrics we need to move.'
        },
        {
          title: 'Architecture and focus',
          lead: 'We translate objectives into structure and technical scope.',
          description: 'Content, integrations and criteria are prioritized before design.'
        },
        {
          title: 'Experience and content',
          lead: 'We design interface and messaging that guide the user.',
          description: 'Layouts and microcopy are prototyped ready to validate with your team.'
        },
        {
          title: 'Development & QA',
          lead: 'We build with maintainable code and iteration-based testing.',
          description: 'CMS, automations and performance are integrated before launch.'
        },
        {
          title: 'Launch and continuous improvement',
          lead: 'We stay for the go-live and real adjustments.',
          description: 'We measure behaviour and plan evolutions alongside your team.'
        }
      ];

  const solutionPrinciples = locale === 'es'
    ? [
        {
          title: 'Contexto de negocio primero',
          description: 'Definimos propuesta de valor, audiencias y objetivos antes de diseñar.'
        },
        {
          title: 'Arquitectura y contenido precisos',
          description: 'Estructuramos el sitio para que explique qué haces y cómo se trabaja contigo.'
        },
        {
          title: 'Interacción enfocada en conversión',
          description: 'Cada vista guía a la acción correcta: agendar, cotizar o solicitar información.'
        }
      ]
    : [
        {
          title: 'Business context first',
          description: 'We define value proposition, audiences and goals before touching design.'
        },
        {
          title: 'Precise architecture & content',
          description: 'We structure the site so it explains what you do and how to work with you.'
        },
        {
          title: 'Conversion-focused interaction',
          description: 'Every view guides the next action: schedule, request pricing or talk to sales.'
        }
      ];

  const websiteTypes = locale === 'es'
    ? [
        {
          icon: '🏢',
          title: 'Sitios corporativos estratégicos',
          description:
            'Reposicionan a la compañía con narrativa clara, credenciales profundas y roadmap de crecimiento, dejando preparados casos, métricas y próximos pasos para el equipo comercial.',
          examples: ['Holding y empresas B2B', 'Firmas industriales y tecnológicas']
        },
        {
          icon: '🤝',
          title: 'Servicios profesionales y consultoras',
          description:
            'Exponen metodología, procesos, equipo y diferenciales de valor con storytelling consultivo. Incluyen casos destacados, paquetes de servicio y llamadas a la acción de alto valor.',
          examples: ['Estudios de arquitectura e ingeniería', 'Consultoras de negocio / boutiques creativas']
        },
        {
          icon: '⚙️',
          title: 'Plataformas orientadas a demanda',
          description:
            'Diseñadas para captar oportunidades, automatizar contactos y nutrir pipelines. Integran formularios inteligentes, automatizaciones y contenido educativo para cada etapa del funnel.',
          examples: ['Empresas SaaS y tecnología', 'Servicios con ciclos de venta consultivos']
        },
        {
          icon: '🚀',
          title: 'One-pagers para ofertas puntuales',
          description:
            'Activan campañas o lanzamientos específicos con foco en mensaje y CTA. Destacan beneficio único, urgencia y pasos de conversión listos para equipos de marketing o eventos.',
          examples: ['Eventos privados', 'Programas de formación corporativa']
        }
      ]
    : [
        {
          icon: '🏢',
          title: 'Strategic corporate sites',
          description:
            'Reposition the company with a sharp narrative, deep credentials and a growth roadmap, packaging case studies, metrics and next steps for commercial conversations.',
          examples: ['Holdings and B2B companies', 'Industrial and technology firms']
        },
        {
          icon: '🤝',
          title: 'Professional services & consulting',
          description:
            'Showcases methodology, process, team and value differentiators with consultative storytelling. Includes signature cases, service packages and high-value CTAs.',
          examples: ['Architecture / engineering studios', 'Boutique consulting or creative firms']
        },
        {
          icon: '⚙️',
          title: 'Demand-oriented platforms',
          description:
            'Built to capture opportunities, automate contacts and nurture pipelines. Combines smart forms, automations and educational content for each funnel stage.',
          examples: ['SaaS & tech companies', 'Services with consultative sales cycles']
        },
        {
          icon: '🚀',
          title: 'Focused one-pagers',
          description:
            'Activate campaigns or launches with precise messaging and CTA. Highlights singular benefits, urgency and conversion paths ready for marketing pushes or events.',
          examples: ['Private events', 'Corporate training programs']
        }
      ];

  return (
    <div className="desarrollo-web-page">
      <Helmet>
        <title>{t('meta.desarrolloWebTitle')}</title>
      </Helmet>
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
              {locale === 'es'
                ? 'Diseñamos y desarrollamos sitios web pensados para representar correctamente tu negocio, comunicar con claridad y generar oportunidades reales.'
                : 'We design and develop websites designed to correctly represent your business, communicate clearly and generate real opportunities.'}
            </motion.p>
            <motion.p
              className="hero-highlight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
              <motion.a
                href={locale === 'es' ? 'https://www.globalalora.com/es/llamada-de-relevamiento' : 'https://www.globalalora.com/en/discovery-call'}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {locale === 'es' ? 'Hablar sobre tu proyecto' : 'Talk about your project'}
                <span className="duration">
                  {locale === 'es' ? 'Llamada online de 20 minutos' : '20-minute online call'}
                </span>
              </motion.a>
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
          <h2 className="problem-section-title">
            {locale === 'es' ? '¿Tu sitio web te está frenando?' : 'Is your website holding you back?'}
          </h2>
          <p className="problem-section-subtitle">
            {locale === 'es'
              ? 'Muchas empresas tienen un sitio web que no está alineado con el nivel real de su negocio, generando desafíos como:'
              : 'Many companies have a website that doesn\'t align with their actual business level, creating challenges like:'}
          </p>
          <div className="problem-grid">
            <div className="problem-item">
              <span className="problem-icon">💡</span>
              <h3 className="problem-item-title">
                {locale === 'es' ? 'Falta de Reflejo Profesional' : 'Lack of Professional Reflection'}
              </h3>
              <p className="problem-item-description">
                {locale === 'es'
                  ? 'La imagen online no comunica la calidad y seriedad de tu empresa.'
                  : 'The online image doesn\'t communicate the quality and seriousness of your company.'}
              </p>
            </div>
            <div className="problem-item">
              <span className="problem-icon">⏳</span>
              <h3 className="problem-item-title">
                {locale === 'es' ? 'Obsoleto o Confuso' : 'Outdated or Confusing'}
              </h3>
              <p className="problem-item-description">
                {locale === 'es'
                  ? 'Un diseño anticuado o una navegación poco clara frustran a tus visitantes.'
                  : 'An outdated design or unclear navigation frustrates your visitors.'}
              </p>
            </div>
            <div className="problem-item">
              <span className="problem-icon">📈</span>
              <h3 className="problem-item-title">
                {locale === 'es' ? 'Baja Conversión' : 'Low Conversion'}
              </h3>
              <p className="problem-item-description">
                {locale === 'es'
                  ? 'No genera consultas, contactos o ventas que tu negocio necesita.'
                  : 'It doesn\'t generate the inquiries, contacts, or sales your business needs.'}
              </p>
            </div>
            <div className="problem-item">
              <span className="problem-icon">🚀</span>
              <h3 className="problem-item-title">
                {locale === 'es' ? 'Sin Escalabilidad' : 'No Scalability'}
              </h3>
              <p className="problem-item-description">
                {locale === 'es'
                  ? 'No acompaña el crecimiento y las nuevas necesidades de tu negocio.'
                  : 'It doesn\'t support the growth and new needs of your business.'}
              </p>
            </div>
          </div>
          <div className="problem-conclusion">
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
          className="section-content solution-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="solution-header">
            <span className="solution-eyebrow">
              {locale === 'es' ? 'Metodología' : 'Methodology'}
            </span>
            <h2 className="solution-title">
              {locale === 'es'
                ? 'Un sistema web pensado para que tu negocio se entienda y convierta'
                : 'A web system built so your business is understood and converts'}
            </h2>
            <p className="solution-subtitle">
              {locale === 'es'
                ? 'Diseñamos desde el negocio, no desde plantillas. Cada entrega se enfoca en explicar qué haces, cómo trabajas y cuál es el siguiente paso.'
                : 'We design from the business outward. Every deliverable explains what you do, how you work and the next step to take.'}
            </p>
          </div>
          <div className="solution-grid">
            {solutionPrinciples.map((principle, index) => (
              <div className="solution-card" key={index}>
                <h3>{principle.title}</h3>
                <p className="solution-subtitle">{principle.description}</p>
              </div>
            ))}
          </div>
          <div className="solution-footer">
            <p className="solution-subtitle">
              {locale === 'es'
                ? 'Partimos de objetivos medibles y responsables definidos en tu equipo. No usamos atajos ni sitios genéricos.'
                : 'We start from measurable goals and clear ownership on your team. No shortcuts, no generic sites.'}
            </p>
          </div>
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
          <div className="services-summary">
            <span className="services-summary-label">
              {locale === 'es' ? 'Conclusión' : 'Conclusion'}
            </span>
            <p>
              {locale === 'es'
                ? 'Todo lo necesario para contar con un sitio web profesional, funcional y preparado para crecer.'
                : 'Everything required to operate with a professional, functional site that is ready to scale.'}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Website Types Section */}
      <section className="website-types-section">
        <motion.div 
          className="section-content website-types-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="website-types-header">
            <h2>{locale === 'es' ? 'Tipos de sitios web que desarrollamos' : 'Types of websites we develop'}</h2>
            <p>
              {locale === 'es'
                ? 'Partimos del objetivo y de la audiencia. Cada tipo de sitio responde a una necesidad específica del negocio.'
                : 'We start from the business objective and the audience. Every site type responds to a specific need.'}
            </p>
          </div>
          <div className="website-types-grid">
            {websiteTypes.map((type, index) => (
              <div className="website-type-card" key={index}>
                {type.icon && <div className="website-type-icon">{type.icon}</div>}
                <div className="website-type-content">
                  <h3>{type.title}</h3>
                  <p>{type.description}</p>
                </div>
                <div className="website-type-examples">
                  {type.examples.map((example, idx) => (
                    <span key={idx}>{example}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="website-types-footer">
            <p>
              {locale === 'es'
                ? 'Si el proyecto requiere una solución específica, diseñamos la arquitectura a medida y la validamos junto a tu equipo.'
                : 'If the project needs a specific approach, we design the architecture from scratch and validate it with your team.'}
            </p>
          </div>
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
          <div className="projects-conclusion">
            <p>
              {locale === 'es'
                ? 'Cada proyecto responde a un objetivo distinto, pero todos comparten el mismo enfoque: que el sitio web cumpla una función real dentro del negocio.'
                : 'Each project responds to a different objective, yet they all share the same focus: the website must fulfill a real business function.'}
            </p>
          </div>
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
                {service.iconKey && (
                  <div className="complementary-icon">
                    {complementaryIcons[service.iconKey]}
                  </div>
                )}
                <h3>{service.title}</h3>
                <p className="complementary-lead"><strong>{service.lead}</strong></p>
                <p className="complementary-description">{service.description}</p>
                <div className="complementary-example">{service.example}</div>
              </motion.div>
            ))}
          </div>
          <div className="complementary-note">
            <p>
              {locale === 'es'
                ? 'Durante el análisis inicial evaluamos qué servicios suman valor real al proyecto y solo proponemos los que impactan en los objetivos.'
                : 'During the initial analysis we evaluate which services add real value to the project and only propose those that impact the objectives.'}
            </p>
          </div>
        </motion.div>
      </section>

      {/* How We Work Section - Timeline */}
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
              ? 'Un método claro, conectado y medible en cada etapa.'
              : 'A clear, connected and measurable method at every stage.'}
          </p>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="process-step-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="process-step-content">
                  <h3>{step.title}</h3>
                  <p className="process-step-lead"><strong>{step.lead}</strong></p>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="process-summary">
            <span>{locale === 'es' ? 'Principio de trabajo' : 'Working principle'}</span>
            <p>
              {locale === 'es'
                ? 'Trabajamos con procesos claros, comunicación directa y solo los pasos necesarios para lograr resultados reales.'
                : 'We work with clear processes, direct communication and only the steps required to deliver real results.'}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Ideal For Section */}
      <section className="ideal-for-section">
        <motion.div 
          className="section-content ideal-for-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="ideal-for-header">
            <h2>{locale === 'es' ? 'Este servicio es ideal si' : 'This service is ideal when'}</h2>
            <p>
              {locale === 'es'
                ? 'Trabajamos mejor con equipos que ya están operando y necesitan un sitio web que acompañe decisiones reales de negocio.'
                : 'We work best with teams that are already operating and need a website aligned with real business decisions.'}
            </p>
          </div>
          <div className="ideal-for-grid">
            {idealCriteria.map((item, index) => (
              <div className="ideal-for-item" key={index}>
                {item.iconKey && (
                  <div className="ideal-icon">
                    {idealIcons[item.iconKey]}
                  </div>
                )}
                <h3>{item.title}</h3>
                <p>
                  <strong>{item.highlight}</strong> {item.detail}
                </p>
              </div>
            ))}
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
            <motion.a 
              href={locale === 'es' ? 'https://www.globalalora.com/es/llamada-de-relevamiento' : 'https://www.globalalora.com/en/discovery-call'}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {locale === 'es' ? 'Agendar una llamada de 20 minutos' : 'Schedule a 20-minute call'}
            </motion.a>
            <p className="cta-note">
              {locale === 'es'
                ? 'Evaluamos tu proyecto y te decimos si podemos ayudarte.'
                : 'We evaluate your project and tell you if we can help you.'}
            </p>
            <div className="whatsapp-divider"></div>
            <div className="whatsapp-section">
              <h3 className="whatsapp-title">
                {locale === 'es'
                  ? 'Y si no puedes con tu ansiedad y quieres hablar con nosotros ahora mismo, contáctanos por whatsapp'
                  : 'And if you can\'t wait and want to talk to us right now, contact us on whatsapp'}
              </h3>
              <motion.a
                href={`https://api.whatsapp.com/send/?phone=${encodeURIComponent("+5491124629452")}&text=${encodeURIComponent(
              locale === "es" 
                ? "Hola! Me gustaría obtener más información sobre sus servicios." 
                : "Hello! I would like to get more information about your services."
            )}&type=phone_number&app_absent=0`}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button whatsapp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {locale === 'es'
                  ? '¡Contáctanos por Whatsapp ahora!'
                  : 'Contact us on WhatsApp now!'}
              </motion.a>
            </div>
          </div>
          <div className="cta-image" style={{
            background: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80") center/cover'
          }}></div>
        </motion.div>
      </section>

      {/* Chatbot AI - Soporte disponible */}
      <Chatbot />
    </div>
  );
};

export default DesarrolloWeb;
