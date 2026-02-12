import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Chatbot from './Chatbot';
import './Ecommerce.css';

const Ecommerce = () => {
  const { locale } = useLanguage();

  useEffect(() => {
    document.body.classList.add('ecommerce-page');
    return () => document.body.classList.remove('ecommerce-page');
  }, []);

  const iconPalette = {
    teal: 'linear-gradient(135deg, #06b6d4, #14b8a6)',
    violet: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
    amber: 'linear-gradient(135deg, #f97316, #facc15)',
    rose: 'linear-gradient(135deg, #f43f5e, #fb7185)',
    slate: 'linear-gradient(135deg, #312e81, #475569)',
    emerald: 'linear-gradient(135deg, #10b981, #34d399)'
  };

  const iconLibrary = {
    cart: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <path d="M6 8h3l3 15h12l3-11H10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="13" cy="27" r="2" fill="currentColor" />
        <circle cx="24" cy="27" r="2" fill="currentColor" />
      </svg>
    ),
    funnel: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <path d="M6 8h20l-8 10v6l-4 3v-9z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    logistics: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <rect x="4" y="10" width="24" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M4 18h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="11" cy="24" r="3" fill="currentColor" opacity="0.85" />
        <circle cx="23" cy="24" r="3" fill="currentColor" opacity="0.65" />
      </svg>
    ),
    layers: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <path d="M6 12l10-6 10 6-10 6-10-6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M6 20l10 6 10-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity="0.7" />
      </svg>
    ),
    woo: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <rect x="4" y="8" width="24" height="16" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M9 16c0-2 3-2 3 0s3 2 3 0 3-2 3 0 3 2 3 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    plug: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <path d="M12 6v6M20 6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 12h16v6a8 8 0 11-16 0z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    lightning: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <path d="M18 3L8 17h7l-1 12 10-14h-7z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    checklist: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <path d="M8 7h16M8 15h10M8 23h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    devices: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <rect x="4" y="7" width="20" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="10" y="17" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
        <path d="M14 25h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    payment: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <rect x="4" y="8" width="24" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="4" y="13" width="24" height="3" fill="currentColor" opacity="0.4" />
        <circle cx="22" cy="21" r="2" fill="currentColor" />
      </svg>
    ),
    shipping: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <path d="M4 10h18v12H4z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M22 14h4l2 4v4h-6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="10" cy="24" r="2.5" fill="currentColor" />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" opacity="0.8" />
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <path d="M16 4c4 1 8 5 9 9l-7 7-7-7c1-4 5-8 9-9z" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="19" cy="11" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M9 18l-2 6 6-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    pulse: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <path d="M4 16h6l2-6 4 12 2-6h10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    repeat: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <path d="M8 10h14l-3-3 3-3M24 22H10l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    steps: (
      <svg viewBox="0 0 32 32" className="ecommerce-icon-svg">
        <path d="M8 22h8v-6h8v-6h8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  };

  const renderIcon = (icon, tone = 'teal', wrapperClass = 'ecommerce-icon-wrapper') => (
    <span className={wrapperClass} style={{ background: iconPalette[tone] || iconPalette.teal }}>
      {iconLibrary[icon] || null}
    </span>
  );

  const hero = locale === 'es'
    ? {
        title: 'Ecommerce',
        subtitle: 'Tiendas online pensadas para vender y escalar',
        lead: 'Diseñamos y desarrollamos tiendas online funcionales, claras y orientadas a conversión, pensadas para vender de forma consistente y escalar sin fricción operativa.',
        highlight: 'Un ecommerce no es solo un catálogo online. Es un sistema de ventas completo que tiene que responder en producto, pago, logística y gestión.',
        cta: 'Hablar sobre tu proyecto',
        duration: 'Llamada online de 20 minutos'
      }
    : {
        title: 'Ecommerce',
        subtitle: 'Online stores built to sell and scale',
        lead: 'We design and build ecommerce experiences that stay clear, high-performing and operationally sound, so you can sell consistently and scale without friction.',
        highlight: 'An ecommerce site is not “just a catalog”. It is a complete sales system that must excel in product, payment, logistics and operations.',
        cta: 'Talk about your project',
        duration: 'Online 20-minute call'
      };

  const problemIntro = locale === 'es'
    ? 'Muchos negocios lanzan su tienda online y se encuentran con:'
    : 'Many businesses launch an online store and quickly face:';

  const problemPoints = locale === 'es'
    ? [
        {
          icon: 'funnel',
          tone: 'rose',
          title: 'La tienda no convierte',
          description: 'El tráfico llega pero el recorrido no empuja a la compra ni comunica valor inmediato.'
        },
        {
          icon: 'devices',
          tone: 'slate',
          title: 'Experiencia confusa',
          description: 'Catálogo y checkout carecen de jerarquía; el usuario abandona antes de completar la compra.'
        },
        {
          icon: 'logistics',
          tone: 'emerald',
          title: 'Gestión manual',
          description: 'Inventario, estados y entregas dependen de planillas y personas clave sin trazabilidad.'
        },
        {
          icon: 'plug',
          tone: 'violet',
          title: 'Integraciones limitadas',
          description: 'La plataforma no conversa con ERP, pagos o logística y obliga a duplicar datos.'
        },
        {
          icon: 'repeat',
          tone: 'amber',
          title: 'Sin estrategia de adquisición',
          description: 'No existe un sistema para atraer, nutrir y recuperar clientes de forma constante.'
        },
        {
          icon: 'pulse',
          tone: 'teal',
          title: 'Datos sin visibilidad',
          description: 'Dirección y operación no cuentan con métricas confiables para decidir a tiempo.'
        }
      ]
    : [
        {
          icon: 'funnel',
          tone: 'rose',
          title: 'The store does not convert',
          description: 'Traffic lands but the journey never communicates value or pushes the sale forward.'
        },
        {
          icon: 'devices',
          tone: 'slate',
          title: 'Confusing experience',
          description: 'Catalog and checkout lack hierarchy, so people drop before completing the purchase.'
        },
        {
          icon: 'logistics',
          tone: 'emerald',
          title: 'Manual operations',
          description: 'Inventory, statuses and deliveries rely on spreadsheets without traceability.'
        },
        {
          icon: 'plug',
          tone: 'violet',
          title: 'Limited integrations',
          description: 'The platform does not talk to ERP, payments or logistics, forcing duplicate work.'
        },
        {
          icon: 'repeat',
          tone: 'amber',
          title: 'No acquisition engine',
          description: 'There is no repeatable system to attract, nurture and recover customers.'
        },
        {
          icon: 'pulse',
          tone: 'teal',
          title: 'Zero visibility',
          description: 'Leadership and ops lack reliable metrics to make timely decisions.'
        }
      ];

  const solutionLead = locale === 'es'
    ? 'En Alora desarrollamos ecommerce como un sistema: negocio, operación y escalabilidad trabajan juntos.'
    : 'At Alora we build ecommerce as a system: business, operations and scalability act in sync.';

  const solutionPillars = locale === 'es'
    ? [
        {
          icon: 'layers',
          tone: 'violet',
          title: 'Modelo de negocio primero',
          description: 'Definimos qué vende tu tienda, cómo se cobra y qué márgenes deben sostenerse antes de hablar de plantillas.'
        },
        {
          icon: 'devices',
          tone: 'teal',
          title: 'Operación diaria mapeada',
          description: 'Roles, inventario, logística y servicio post venta quedan claros para que la herramienta acompañe a tu equipo.'
        },
        {
          icon: 'plug',
          tone: 'emerald',
          title: 'Tecnología a medida',
          description: 'Elegimos plataforma, plugins e integraciones según la complejidad real, no al revés.'
        },
        {
          icon: 'rocket',
          tone: 'amber',
          title: 'Escalabilidad futura',
          description: 'La arquitectura contempla catálogos más grandes, campañas de tráfico y expansiones sin rehacer todo.'
        }
      ]
    : [
        {
          icon: 'layers',
          tone: 'violet',
          title: 'Business model first',
          description: 'We define what you sell, how you charge and which margins must hold before mentioning templates.'
        },
        {
          icon: 'devices',
          tone: 'teal',
          title: 'Operations mapped',
          description: 'Roles, inventory, logistics and after-sales support become explicit so the tool supports the team.'
        },
        {
          icon: 'plug',
          tone: 'emerald',
          title: 'Tech chosen by need',
          description: 'Platform, plugins and integrations are selected according to actual complexity, not the other way around.'
        },
        {
          icon: 'rocket',
          tone: 'amber',
          title: 'Ready to scale',
          description: 'Architecture already contemplates larger catalogs, paid traffic bursts and future expansions.'
        }
      ];

  const wooHeading = locale === 'es'
    ? 'WooCommerce como base, otras plataformas cuando tiene sentido'
    : 'WooCommerce first, other platforms when they make sense';

  const wooLead = locale === 'es'
    ? 'Priorizamos WooCommerce por su flexibilidad estratégica, pero evaluamos plataformas cerradas o sin código cuando aceleran el lanzamiento.'
    : 'We rely on WooCommerce for its flexibility, yet consider closed or no-code platforms whenever they accelerate execution.';

  const wooIntro = locale === 'es'
    ? 'WooCommerce es nuestra herramienta principal por su flexibilidad estratégica.'
    : 'WooCommerce is our primary platform thanks to its strategic flexibility.';

  const wooBenefits = locale === 'es'
    ? [
        {
          title: 'Checkout a medida',
          description: 'Personalizamos reglas, upsells y medios de pago para cada tipo de producto.'
        },
        {
          title: 'Integraciones nativas',
          description: 'Conectamos WooCommerce con pasarelas locales, ERP y herramientas propias.'
        },
        {
          title: 'Escala sin migraciones',
          description: 'Multi-catálogo, multi tienda y manejo de stock centralizados sin rehacer la base.'
        },
        {
          title: 'Control total',
          description: 'Diseño, SEO y performance quedan bajo tu control para optimizar cada campaña.'
        }
      ]
    : [
        {
          title: 'Custom checkout',
          description: 'We tailor rules, upsells and payment methods for every product mix.'
        },
        {
          title: 'Native integrations',
          description: 'WooCommerce connects with local gateways, ERPs and proprietary tools.'
        },
        {
          title: 'Scale without migrations',
          description: 'Multi-catalog, multi-store and centralized stock without rebuilding everything.'
        },
        {
          title: 'Full control',
          description: 'Design, SEO and performance stay in your hands to optimize every campaign.'
        }
      ];

  const otherPlatforms = locale === 'es'
    ? [
        {
          title: 'Tienda Nube',
          tag: 'Lanzamiento rápido',
          description: 'Implementación simple para operar en Latinoamérica con costos controlados.'
        },
        {
          title: 'Webflow',
          tag: 'No-code premium',
          description: 'Experiencias ecommerce con animaciones, CMS robusto y foco en branding.'
        },
        {
          title: 'Shopify',
          tag: 'Ecosistema global',
          description: 'Solución cerrada, estable y con foco en time-to-market.'
        }
      ]
    : [
        {
          title: 'Tienda Nube',
          tag: 'Fast launch',
          description: 'Simple setup tailored to the Latin American market with predictable costs.'
        },
        {
          title: 'Webflow',
          tag: 'No-code premium',
          description: 'Ecommerce experiences with advanced interactions and a robust CMS for brand storytelling.'
        },
        {
          title: 'Shopify',
          tag: 'Global ecosystem',
          description: 'Closed, stable platform when speed and reliability come first.'
        }
      ];

  const includesSteps = locale === 'es'
    ? [
        'Definición de estructura y flujo de compra.',
        'Diseño visual alineado a la marca y al mix de productos.',
        'Experiencia optimizada para dispositivos móviles.',
        'Desarrollo y configuración completa de la tienda.',
        'Organización y carga asistida de productos.',
        'Configuración de medios de pago locales e internacionales.',
        'Reglas de envío, retiros y pricing dinámico.',
        'Integraciones con ERP, CRM, marketplaces o logística.',
        'Optimización inicial de rendimiento y tracking.'
      ]
    : [
        'Structure definition and buying flow architecture.',
        'Visual design aligned with your brand and product mix.',
        'Mobile-first experience optimization.',
        'Full development and configuration of the store.',
        'Product organization and assisted catalog upload.',
        'Payment gateways setup for local and global methods.',
        'Shipping, pickup and pricing rules configuration.',
        'Integrations with ERP, CRM, marketplaces or logistics.',
        'Initial performance and tracking optimization.'
      ];

  const projectHighlights = locale === 'es'
    ? [
        {
          icon: 'payment',
          tone: 'teal',
          copy: 'Ecommerce con WooCommerce integrado a medios de pago locales y globales.'
        },
        {
          icon: 'funnel',
          tone: 'violet',
          copy: 'Checkout optimizado y journeys listos para capturar remarketing y upsells.'
        },
        {
          icon: 'rocket',
          tone: 'rose',
          copy: 'Implementaciones preparadas para escalar campañas de tráfico pago sin caídas.'
        },
        {
          icon: 'logistics',
          tone: 'amber',
          copy: 'Catálogos complejos con múltiples categorías y variantes bajo un mismo panel.'
        }
      ]
    : [
        {
          icon: 'payment',
          tone: 'teal',
          copy: 'WooCommerce stores connected to local and global payment providers.'
        },
        {
          icon: 'funnel',
          tone: 'violet',
          copy: 'Optimized checkout and journeys ready for remarketing and upsells.'
        },
        {
          icon: 'rocket',
          tone: 'rose',
          copy: 'Implementations prepared to sustain high-scale paid traffic without friction.'
        },
        {
          icon: 'logistics',
          tone: 'amber',
          copy: 'Complex catalogs with multiple categories and variants managed centrally.'
        }
      ];

  const relatedServices = locale === 'es'
    ? [
        {
          icon: 'pulse',
          tone: 'rose',
          title: 'Google Ads',
          highlight: 'Intención directa',
          description: 'Capta usuarios listos para comprar, mide ROAS y escala según resultados reales.'
        },
        {
          icon: 'repeat',
          tone: 'violet',
          title: 'Meta Ads',
          highlight: 'Demanda y remarketing',
          description: 'Genera visibilidad, muestra catálogo y recupera carritos con audiencias dinámicas.'
        },
        {
          icon: 'steps',
          tone: 'teal',
          title: 'Email Marketing',
          highlight: 'Recurrencia automatizada',
          description: 'Secuencias para carritos, post venta y fidelización que mantienen la relación.'
        }
      ]
    : [
        {
          icon: 'pulse',
          tone: 'rose',
          title: 'Google Ads',
          highlight: 'Direct intent',
          description: 'Capture ready-to-buy users, track ROAS and scale based on tangible results.'
        },
        {
          icon: 'repeat',
          tone: 'violet',
          title: 'Meta Ads',
          highlight: 'Demand & remarketing',
          description: 'Generate visibility, showcase catalog and recover carts with dynamic audiences.'
        },
        {
          icon: 'steps',
          tone: 'teal',
          title: 'Email Marketing',
          highlight: 'Automated recurrence',
          description: 'Sequences for carts, post-purchase and loyalty that sustain relationships.'
        }
      ];

  const processSteps = locale === 'es'
    ? [
        {
          title: 'Análisis y objetivos',
          description: 'Relevamos negocio, métricas actuales y definimos qué señales mostrarán éxito.'
        },
        {
          title: 'Plataforma y alcance',
          description: 'Seleccionamos tecnología, módulos y priorizamos un roadmap viable.'
        },
        {
          title: 'Experiencia y contenido',
          description: 'Diseñamos journeys, estructuras de catálogo y mensajes que guían la compra.'
        },
        {
          title: 'Desarrollo e integraciones',
          description: 'Construimos la tienda, configuramos pagos, envíos e integramos tus sistemas.'
        },
        {
          title: 'Pruebas y traspaso',
          description: 'Validamos datos, entrenamos al equipo y dejamos procesos listos para operar.'
        }
      ]
    : [
        {
          title: 'Analysis & goals',
          description: 'We map the business, current metrics and define the signals that prove success.'
        },
        {
          title: 'Platform & scope',
          description: 'Technology, modules and roadmap are chosen around what delivers value first.'
        },
        {
          title: 'Experience & content',
          description: 'We design journeys, catalog structure and messaging that guide the purchase.'
        },
        {
          title: 'Build & integrations',
          description: 'Store development, payments, shipping and system integrations working together.'
        },
        {
          title: 'Testing & handover',
          description: 'We validate data, train your team and leave processes ready to operate.'
        }
      ];

  const idealClients = locale === 'es'
    ? [
        {
          icon: 'cart',
          tone: 'amber',
          title: 'Querés vender profesionalmente',
          description: 'Necesitás que la tienda represente al negocio y genere ventas consistentes.'
        },
        {
          icon: 'funnel',
          tone: 'teal',
          title: 'Tu tienda actual no convierte',
          description: 'La experiencia es confusa o difícil de gestionar y querés orden real.'
        },
        {
          icon: 'plug',
          tone: 'violet',
          title: 'Buscás escalar sin migrar',
          description: 'Preferís evolucionar módulos y procesos antes que cambiar de plataforma cada año.'
        },
        {
          icon: 'logistics',
          tone: 'rose',
          title: 'Necesitás operación integrada',
          description: 'Ventas, pagos y logística tienen que trabajar como un solo sistema.'
        }
      ]
    : [
        {
          icon: 'cart',
          tone: 'amber',
          title: 'You want professional-grade sales',
          description: 'Your store must represent the business and deliver consistent revenue.'
        },
        {
          icon: 'funnel',
          tone: 'teal',
          title: 'Your current store underperforms',
          description: 'Experience is confusing or hard to operate and you need real order.'
        },
        {
          icon: 'plug',
          tone: 'violet',
          title: 'You want to scale without migrating',
          description: 'You prefer evolving modules and processes over switching platforms every year.'
        },
        {
          icon: 'logistics',
          tone: 'rose',
          title: 'You need integrated operations',
          description: 'Sales, payments and logistics must perform as one system.'
        }
      ];

  const processClosing = locale === 'es'
    ? 'Proceso claro, sin improvisaciones y orientado a resultados reales.'
    : 'A clear, no-surprises process focused on measurable outcomes.';

  const idealClosing = locale === 'es'
    ? 'Si todavía estás probando si existe la venta, este no es el servicio indicado.'
    : 'If you are still validating whether demand exists, this service is not the best fit yet.';

  const finalCTA = locale === 'es'
    ? {
        title: '¿Hablamos de tu ecommerce?',
        description: 'Si estás evaluando desarrollar o mejorar tu tienda online, coordinamos una llamada breve y analizamos tu caso.',
        button: 'Agendar una llamada de 20 minutos',
        note: 'Evaluamos tu proyecto y te decimos si podemos ayudarte.'
      }
    : {
        title: 'Shall we talk about your ecommerce?',
        description: 'If you are evaluating how to build or upgrade your online store, let’s schedule a short call and review your case.',
        button: 'Schedule a 20-minute call',
        note: 'We review your project and tell you if we are the right partner.'
      };

  return (
    <div className="ecommerce-page">
      <section className="ecommerce-hero">
        <motion.div
          className="ecommerce-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="ecommerce-hero-text">
            <h1>{hero.subtitle}</h1>
            <p className="hero-lead">{hero.lead}</p>
            <p className="hero-highlight">{hero.highlight}</p>
            <motion.button
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(locale === 'es' ? 'https://tidycal.com/alora/20-minutos-reunion' : 'https://tidycal.com/alora/20-minutes', '_blank')}
            >
              {hero.cta}
              <span className="duration">{hero.duration}</span>
            </motion.button>
          </div>
          <motion.div
            className="ecommerce-hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="stats-panel">
              <div>
                <strong>+42%</strong>
                <span>{locale === 'es' ? 'Tasa de conversión media tras el relanzamiento' : 'Average conversion lift after relaunch'}</span>
              </div>
              <div>
                <strong>99.9%</strong>
                <span>{locale === 'es' ? 'Tiempo online medido en los últimos 12 meses' : 'Uptime measured in the last 12 months'}</span>
              </div>
            </div>
            <div className="hero-tagline">
              {locale === 'es'
                ? 'Ventas consistentes nacen de sistemas consistentes.'
                : 'Consistent sales come from consistent systems.'}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="problem-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'El problema habitual' : 'The usual problem'}</h2>
          <p className="problem-intro">{problemIntro}</p>
          <div className="problem-grid">
            {problemPoints.map((point, index) => (
              <div className="problem-card" key={index}>
                {renderIcon(point.icon, point.tone, 'problem-icon')}
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
          <div className="problem-result">
            {locale === 'es'
              ? 'El resultado: ventas inestables y dificultad para escalar.'
              : 'The outcome: unstable sales and constant friction to scale.'}
          </div>
        </motion.div>
      </section>

      <section className="solution-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="solution-header">
            <h2>{locale === 'es' ? 'Nuestra solución' : 'Our solution'}</h2>
            <p>{solutionLead}</p>
          </div>
          <div className="solution-grid">
            {solutionPillars.map((pillar, index) => (
              <div className="solution-block" key={index}>
                {renderIcon(pillar.icon, pillar.tone)}
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
          <p className="solution-note">
            {locale === 'es'
              ? 'La plataforma se elige según el negocio, no al revés.'
              : 'Technology follows the business, never the other way around.'}
          </p>
        </motion.div>
      </section>

      <section className="woocommerce-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{wooHeading}</h2>
          <p className="woocommerce-lead">{wooLead}</p>
          <div className="woocommerce-grid">
            <div className="woo-summary">
              <h3>WooCommerce</h3>
              <p>{wooIntro}</p>
              <div className="woo-benefits">
                {wooBenefits.map((benefit, index) => (
                  <div className="woo-benefit" key={index}>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="alternate-platforms">
              <h3>{locale === 'es' ? 'También trabajamos con:' : 'We also work with:'}</h3>
              <div className="platform-grid">
                {otherPlatforms.map(platform => (
                  <div className="platform-card" key={platform.title}>
                    <div className="platform-card-header">
                      <span>{platform.title}</span>
                      <small>{platform.tag}</small>
                    </div>
                    <p>{platform.description}</p>
                  </div>
                ))}
              </div>
              <p className="platform-note">
                {locale === 'es'
                  ? 'Durante el análisis inicial definimos qué plataforma se adapta mejor a tu negocio.'
                  : 'During discovery we define which platform truly fits your business.'}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="includes-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Qué incluye el desarrollo de ecommerce' : 'What ecommerce development includes'}</h2>
          <div className="includes-flow">
            {includesSteps.map((step, index) => (
              <div className="include-item" key={index}>
                <span className="step-index">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="includes-note">
            {locale === 'es'
              ? 'Todo preparado para vender y gestionar sin fricción.'
              : 'Everything ready to sell and operate without friction.'}
          </p>
        </motion.div>
      </section>

      <section className="projects-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Proyectos de ecommerce desarrollados' : 'Ecommerce projects delivered'}</h2>
          <p className="projects-lead">
            {locale === 'es'
              ? 'Desarrollamos tiendas online para distintos tipos de negocios, siempre con foco en conversión, claridad y operación eficiente.'
              : 'We build online stores for different industries with the same focus: conversion, clarity and operational efficiency.'}
          </p>
          <div className="projects-grid">
            {projectHighlights.map((highlight, index) => (
              <div className="project-card" key={index}>
                {renderIcon(highlight.icon, highlight.tone)}
                <p>{highlight.copy}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="related-services-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Servicios relacionados para escalar' : 'Related services to scale'}</h2>
          <div className="related-grid">
            {relatedServices.map(service => (
              <div className="related-card" key={service.title}>
                {renderIcon(service.icon, service.tone)}
                <h3>{service.title}</h3>
                <span className="related-highlight">{service.highlight}</span>
                <p className="related-copy">{service.description}</p>
              </div>
            ))}
          </div>
          <p className="related-note">
            {locale === 'es'
              ? 'La combinación correcta depende del negocio, no de la herramienta.'
              : 'The right mix depends on your business, not on the tool.'}
          </p>
        </motion.div>
      </section>

      <section className="process-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Cómo trabajamos' : 'How we work'}</h2>
          <div className="process-flow">
            <div className="process-line" aria-hidden="true"></div>
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <span className="process-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="process-card">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="process-note">{processClosing}</p>
        </motion.div>
      </section>

      <section className="ideal-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Este servicio es ideal si' : 'This service is ideal if'}</h2>
          <div className="ideal-grid">
            {idealClients.map((item, index) => (
              <div className="ideal-item" key={index}>
                {renderIcon(item.icon, item.tone, 'ideal-icon')}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <p className="ideal-note">{idealClosing}</p>
        </motion.div>
      </section>

      <section className="final-cta-section">
        <motion.div 
          className="cta-content-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2>{finalCTA.title}</h2>
            <p>{finalCTA.description}</p>
            <motion.button 
              className="cta-button primary large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(locale === 'es' ? 'https://tidycal.com/alora/20-minutos-reunion' : 'https://tidycal.com/alora/20-minutes', '_blank')}
            >
              {finalCTA.button}
            </motion.button>
            <p className="cta-note">{finalCTA.note}</p>
          </div>
          <div className="cta-image" style={{
            background: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80") center/cover'
          }}></div>
        </motion.div>
      </section>

      <Chatbot />
    </div>
  );
};

export default Ecommerce;
