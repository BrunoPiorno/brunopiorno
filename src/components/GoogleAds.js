import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import Chatbot from './Chatbot';
import './GoogleAds.css';
import googleAdsHeroImage from '../images/google-ads-hero.jpeg';

const GoogleAds = () => {
  const { t, locale } = useLanguage();

  useEffect(() => {
    document.body.classList.add('googleads-page');
    return () => document.body.classList.remove('googleads-page');
  }, []);

  const iconPalette = {
    teal: 'linear-gradient(135deg, #0ea5e9, #34d399)',
    violet: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    amber: 'linear-gradient(135deg, #f59e0b, #f97316)',
    slate: 'linear-gradient(135deg, #334155, #64748b)',
    rose: 'linear-gradient(135deg, #fb7185, #f472b6)',
    emerald: 'linear-gradient(135deg, #10b981, #22d3ee)'
  };

  const cardAccents = {
    teal: 'linear-gradient(135deg, rgba(14, 165, 233, 0.14), rgba(52, 211, 153, 0.08))',
    violet: 'linear-gradient(135deg, rgba(99, 102, 241, 0.16), rgba(139, 92, 246, 0.08))',
    amber: 'linear-gradient(135deg, rgba(245, 158, 11, 0.16), rgba(249, 115, 22, 0.08))',
    slate: 'linear-gradient(135deg, rgba(51, 65, 85, 0.14), rgba(15, 23, 42, 0.08))',
    rose: 'linear-gradient(135deg, rgba(251, 113, 133, 0.16), rgba(244, 114, 182, 0.08))',
    emerald: 'linear-gradient(135deg, rgba(16, 185, 129, 0.16), rgba(34, 211, 238, 0.08))'
  };

  const iconLibrary = {
    target: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.4" />
        <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
    structure: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <rect x="6" y="6" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="6" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="6" y="18" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="18" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    optimize: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <path d="M6 22l6-8 6 4 8-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="14" r="2" fill="currentColor" />
        <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.7" />
        <circle cx="26" cy="8" r="2" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    measure: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <rect x="7" y="19" width="3" height="7" rx="1.5" fill="currentColor" />
        <rect x="13.5" y="14" width="3" height="12" rx="1.5" fill="currentColor" opacity="0.7" />
        <rect x="20" y="9" width="3" height="17" rx="1.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    spark: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <path d="M16 6v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 16h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M9 9l14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M23 9L9 23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      </svg>
    ),
    document: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <path d="M10 5h12l4 5v17H10z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M22 5v5h5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M14 17h8M14 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    pulse: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <path d="M6 18h5l2-6 4 12 3-9h6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    plug: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <path d="M12 6v6M20 6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 12h14v6a7 7 0 01-7 7h0a7 7 0 01-7-7v-6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 25v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    cycle: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <path d="M10 8h12v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 24H10v-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 14l-3-3 3-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 18l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <path d="M16 4l10 4v8c0 6-4 11-10 12-6-1-10-6-10-12V8l10-4z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M16 10v10" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    briefcase: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <rect x="6" y="11" width="20" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 9V7h8v2" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M6 19h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    cart: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <path d="M6 8h3l3 15h12l3-11H10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="13" cy="27" r="2" fill="currentColor" />
        <circle cx="24" cy="27" r="2" fill="currentColor" />
      </svg>
    ),
    academy: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <path d="M4 12l12-6 12 6-12 6-12-6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 16v6l6 3 6-3v-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    health: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <path d="M8 11a7 7 0 0114 0c0 5-7 11-7 11s-7-6-7-11z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M16 8v6M13 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    skyline: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <rect x="6" y="12" width="6" height="14" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="8" width="6" height="18" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="22" y="16" width="4" height="10" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    factory: (
      <svg viewBox="0 0 32 32" className="googleads-icon-svg">
        <path d="M4 14h4l6 4v-4l6 4v-4l6 4v8H4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 22v4M13 22v4M21 22v4" stroke="currentColor" strokeWidth="2" />
        <path d="M20 8h4v6" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  };

  const renderIcon = (iconName, tone = 'teal', wrapperClass = 'googleads-icon-wrapper') => {
    if (!iconLibrary[iconName]) return null;
    return (
      <span className={wrapperClass} style={{ background: iconPalette[tone] || iconPalette.teal }}>
        {iconLibrary[iconName]}
      </span>
    );
  };

  const heroCopy = locale === 'es'
    ? {
        title: 'Gestión de Google Ads para generar clientes a partir de búsquedas con intención',
        lead: 'Diseñamos, gestionamos y optimizamos campañas de Google Ads para negocios que quieren convertir demanda existente en leads o ventas reales.',
        support: 'Google Ads funciona cuando hay personas buscando activamente lo que ofreces. Nuestro trabajo es estructurar campañas, anuncios y páginas de destino para aparecer en ese momento y convertir esa intención en resultados medibles.',
        cta: 'Reservar una llamada de 20 minutos',
      }
    : {
        title: 'Google Ads management to turn intent into customers',
        lead: 'We design, manage and optimize Google Ads campaigns for businesses that need to turn existing demand into qualified leads or real sales.',
        support: 'Google Ads works when people are actively searching for what you offer. We structure campaigns, ads and landing pages to show up at that very moment and convert intent into measurable results.',
        cta: 'Book a 20-minute call'
      };

  const processIntro = locale === 'es'
    ? 'Gestionar Google Ads para SaaS/B2B no es encender anuncios y esperar resultados. Empezamos antes, operamos con rigor y medimos con métricas de revenue.'
    : 'Running Google Ads for SaaS/B2B is not about turning ads on and waiting. We start earlier, operate with rigor and measure with revenue metrics.';

  const processBlocks = locale === 'es'
    ? [
        {
          icon: 'target',
          tone: 'teal',
          title: 'Estrategia antes de invertir',
          description: 'Analizamos negocio, oferta y contexto real de búsqueda para alinear objetivos, audiencias y momentos del journey. No todas las búsquedas valen lo mismo.'
        },
        {
          icon: 'structure',
          tone: 'violet',
          title: 'Estructura orientada a conversión',
          description: 'Cuentas organizadas por intención, grupos de anuncios con foco y landing pages específicas. La estructura permite escalar sin perder rentabilidad.'
        },
        {
          icon: 'optimize',
          tone: 'amber',
          title: 'Optimización continua',
          description: 'No “configuramos y listo”. Ajustamos términos, anuncios, pujas y presupuestos según datos reales, no intuiciones.'
        },
        {
          icon: 'measure',
          tone: 'slate',
          title: 'Medición y control',
          description: 'Atribuimos acciones reales para saber qué campaña genera resultados, cuánto cuesta cada conversión y dónde mejorar.'
        }
      ]
    : [
        {
          icon: 'target',
          tone: 'teal',
          title: 'Strategy before investing',
          description: 'We analyze business, offer and search context to align goals, audiences and buying moments. Not every search has the same value.'
        },
        {
          icon: 'structure',
          tone: 'violet',
          title: 'Conversion-first structure',
          description: 'Accounts organized by intent, tight ad groups and tailored landing pages. Structure is what lets you scale without burning margin.'
        },
        {
          icon: 'optimize',
          tone: 'amber',
          title: 'Continuous optimization',
          description: 'We never “set and forget”. Search terms, ads, bids and budgets are tuned based on live data, not gut feeling.'
        },
        {
          icon: 'measure',
          tone: 'slate',
          title: 'Measurement & control',
          description: 'We track real actions to know which campaign produces results, how much each conversion costs and where efficiency is gained.'
        }
      ];

  const campaignTypes = locale === 'es'
    ? [
        {
          icon: '🔎',
          title: 'Campañas de Búsqueda',
          description: 'Captan demanda activa en el momento exacto de la decisión. Ideales para servicios profesionales, B2B, locales o ecommerce con intención.'
        },
        {
          icon: '🖼️',
          title: 'Campañas de Display',
          description: 'Apoyan visibilidad y remarketing. No buscan la conversión directa inmediata, acompañan estrategias más amplias.'
        },
        {
          icon: '⚡',
          title: 'Performance Max',
          description: 'Automatizan distribución en todo Google. Útiles cuando hay datos sólidos y control de medición.'
        },
        {
          icon: '↩️',
          title: 'Remarketing',
          description: 'Recuperan usuarios que ya mostraron interés y necesitan más contacto para decidir.'
        },
        {
          icon: '🛍️',
          title: 'Shopping',
          description: 'Muestran productos con precio e imagen directamente en la búsqueda. Requieren catálogo y logística sólidos.'
        },
        {
          icon: '🧮',
          title: 'Lead Forms y extensiones',
          description: 'Capturan registros desde el anuncio y alimentan tu CRM con datos validados.'
        }
      ]
    : [
        {
          icon: '🔎',
          title: 'Search campaigns',
          description: 'Capture active demand right at the decision moment. Ideal for pro services, B2B, local businesses or intent-driven ecommerce.'
        },
        {
          icon: '🖼️',
          title: 'Display campaigns',
          description: 'Boost awareness and remarketing. They support broader strategies rather than direct instant conversions.'
        },
        {
          icon: '⚡',
          title: 'Performance Max',
          description: 'Automates delivery across Google surfaces. Works when there is enough data and proper tracking.'
        },
        {
          icon: '↩️',
          title: 'Remarketing',
          description: 'Re-engages users who already showed intent and need additional touchpoints.'
        },
        {
          icon: '🛍️',
          title: 'Shopping',
          description: 'Displays products with price and visuals directly on the SERP. Needs catalog and logistics in place.'
        },
        {
          icon: '🧮',
          title: 'Lead forms & extensions',
          description: 'Capture submissions directly from the ad and sync them into your CRM with validation.'
        }
      ];

  const operatingPillars = locale === 'es'
    ? [
        {
          tag: 'Framework',
          title: 'Modelo orientado a revenue',
          description: 'Mapeamos todo el journey y definimos métricas que importan: pipeline, CAC, payback y LTV.'
        },
        {
          tag: 'RevOps',
          title: 'Integración con tu stack',
          description: 'Trabajamos con HubSpot, Salesforce o el CRM que uses para cerrar el circuito entre marketing y ventas.'
        },
        {
          tag: 'Reporting',
          title: 'Transparencia semanal',
          description: 'Tableros vivos, sprints y updates donde se ven hipótesis, experimentos y próximos pasos.'
        }
      ]
    : [
        {
          tag: 'Framework',
          title: 'Revenue-first model',
          description: 'We map the full journey and track what matters: pipeline, CAC, payback and LTV.'
        },
        {
          tag: 'RevOps',
          title: 'Stack integration',
          description: 'We plug into HubSpot, Salesforce or your CRM to close the loop between marketing and sales.'
        },
        {
          tag: 'Reporting',
          title: 'Weekly transparency',
          description: 'Live dashboards, sprints and updates that surface hypotheses, experiments and next moves.'
        }
      ];

  const fitLists = locale === 'es'
    ? {
        yes: [
          'Tienes una oferta clara y bien definida.',
          'Ofreces productos o servicios con demanda activa.',
          'Puedes atender y cerrar los leads que llegan.',
          'Tu ecommerce tiene margen y estructura para escalar.'
        ],
        no: [
          'Todavía no definiste propuesta o modelo.',
          'No existe capacidad comercial para atender leads.',
          'Buscas resultados con presupuestos mínimos sin margen.',
          'Quieres "probar con 50 €" sin datos ni estructura.'
        ],
        stance: 'Preferimos decir que no antes que gestionar campañas que no pueden funcionar.'
      }
    : {
        yes: [
          'You have a clear offer and defined value prop.',
          'There is active demand for what you sell.',
          'You can handle and close the leads that arrive.',
          'Your ecommerce has margins and operations to scale.'
        ],
        no: [
          'You still have no defined offer or model.',
          'There is no sales capacity to follow up leads.',
          'You expect results with tiny budgets and no margin.',
          'You want to “test with $50” without data or structure.'
        ],
        stance: 'We would rather decline a project than run campaigns that have no chance to succeed.'
      };

  const comparison = locale === 'es'
    ? [
        {
          channel: 'Google Ads',
          focus: 'Intención activa',
          description: 'Las personas ya están buscando lo que ofreces. Apareces justo en el momento que te necesitan.',
          icon: 'target',
          tone: 'teal',
          bullets: [
            'Capturas clientes que ya están listos para comprar',
            'Sabes exactamente cuánto te cuesta cada cliente',
            'Más conversiones porque la gente ya te busca',
            'Resultados rápidos que puedes medir fácilmente',
            'Perfecto cuando necesitas ventas ahora'
          ]
        },
        {
          channel: 'Meta Ads',
          focus: 'Descubrimiento',
          description: 'Llegas a nuevas personas que todavía no te conocen pero podrían interesarse en tus productos.',
          icon: 'spark',
          tone: 'rose',
          bullets: [
            'Creas interés donde antes no existía',
            'Conectas con gente a través de historias creativas',
            'Llegas a miles de personas nuevas cada día',
            'Ideal para que te conozcan más gente',
            'Construyes tu marca poco a poco'
          ]
        }
      ]
    : [
        {
          channel: 'Google Ads',
          focus: 'Active intent',
          description: 'People are already searching for what you offer. You show up right when they need you.',
          icon: 'target',
          tone: 'teal',
          bullets: [
            'Capture customers who are ready to buy',
            'Know exactly how much each customer costs',
            'More conversions because people already look for you',
            'Fast results you can easily measure',
            'Perfect when you need sales now'
          ]
        },
        {
          channel: 'Meta Ads',
          focus: 'Discovery',
          description: 'You reach new people who don\'t know you yet but might be interested in your products.',
          icon: 'spark',
          tone: 'rose',
          bullets: [
            'Create interest where it didn\'t exist before',
            'Connect with people through creative stories',
            'Reach thousands of new people every day',
            'Ideal for more people to get to know you',
            'Build your brand little by little'
          ]
        }
      ];

  const complementary = locale === 'es'
    ? [
        {
          icon: 'document',
          tone: 'teal',
          tag: 'Landing',
          title: 'Landing pages orientadas a conversión',
          description: 'El anuncio atrae; la landing convierte. Diseñamos páginas específicas para cada intención.'
        },
        {
          icon: 'pulse',
          tone: 'amber',
          tag: 'CRO',
          title: 'Optimización de conversión (CRO)',
          description: 'Mejorar tasas sin subir inversión a partir del análisis de comportamiento.'
        },
        {
          icon: 'measure',
          tone: 'violet',
          tag: 'Tracking',
          title: 'Tracking y medición',
          description: 'Configuramos seguimiento real para tomar decisiones con datos y no con clics vacíos.'
        },
        {
          icon: 'plug',
          tone: 'rose',
          tag: 'RevOps',
          title: 'Automatizaciones y CRM',
          description: 'Integramos leads con flujos, CRM y seguimiento comercial.'
        },
        {
          icon: 'cycle',
          tone: 'emerald',
          tag: 'Growth',
          title: 'Mantenimiento y mejora continua',
          description: 'Iteraciones sobre campañas, landings y procesos para sostener resultados.'
        },
        {
          icon: 'shield',
          tone: 'slate',
          tag: 'Reporting',
          title: 'Gobierno y reporting ejecutivo',
          description: 'Tableros unificados, QA de medición y rituales de revisión para sostener decisiones.'
        }
      ]
    : [
        {
          icon: 'document',
          tone: 'teal',
          tag: 'Landing',
          title: 'Conversion-focused landing pages',
          description: 'Ads bring traffic; landings convert. We design pages aligned with each intent.'
        },
        {
          icon: 'pulse',
          tone: 'amber',
          tag: 'CRO',
          title: 'Conversion rate optimization',
          description: 'Improve results without raising spend by analyzing behavior.'
        },
        {
          icon: 'measure',
          tone: 'violet',
          tag: 'Tracking',
          title: 'Tracking & measurement',
          description: 'Set up real tracking so decisions rely on data, not vanity clicks.'
        },
        {
          icon: 'plug',
          tone: 'rose',
          tag: 'RevOps',
          title: 'Automation & CRM',
          description: 'Connect leads with flows, CRMs and sales follow-up.'
        },
        {
          icon: 'cycle',
          tone: 'emerald',
          tag: 'Growth',
          title: 'Ongoing maintenance',
          description: 'Iterate on campaigns, landings and ops to sustain outcomes.'
        },
        {
          icon: 'shield',
          tone: 'slate',
          tag: 'Reporting',
          title: 'Executive governance & reporting',
          description: 'Unified dashboards, tracking QA and cadence reviews to keep decisions sharp.'
        }
      ];

  const industries = locale === 'es'
    ? [
        { icon: 'briefcase', tone: 'teal', copy: 'Servicios profesionales que resuelven necesidades concretas.' },
        { icon: 'cart', tone: 'amber', copy: 'Ecommerce con catálogo, margen y logística.' },
        { icon: 'academy', tone: 'violet', copy: 'Educación y formación con decisión activa.' },
        { icon: 'health', tone: 'rose', copy: 'Salud y clínicas con búsquedas sensibles.' },
        { icon: 'skyline', tone: 'slate', copy: 'Inmobiliaria con ciclos largos pero alta intención.' },
        { icon: 'factory', tone: 'emerald', copy: 'B2B con necesidades claras y tickets altos.' }
      ]
    : [
        { icon: 'briefcase', tone: 'teal', copy: 'Professional services solving specific needs.' },
        { icon: 'cart', tone: 'amber', copy: 'Ecommerce with catalog, margin and logistics.' },
        { icon: 'academy', tone: 'violet', copy: 'Education and training with active decision phases.' },
        { icon: 'health', tone: 'rose', copy: 'Healthcare and clinics with sensitive searches.' },
        { icon: 'skyline', tone: 'slate', copy: 'Real estate with long cycles but high intent.' },
        { icon: 'factory', tone: 'emerald', copy: 'B2B verticals with clear needs and high ACV.' }
      ];

  const finalCTA = locale === 'es'
    ? {
        title: '¿Hablamos de Google Ads?',
        description: 'Si estás evaluando Google Ads para tu negocio, coordinemos una llamada breve para revisar si tiene sentido avanzar.',
        button: 'Reservar una llamada de 20 minutos',
        note: 'No es una demo. Analizamos tu caso y te decimos si Google Ads aplica.'
      }
    : {
        title: 'Shall we talk about Google Ads?',
        description: 'If you are considering Google Ads, let’s schedule a short call to see if it makes sense for your business.',
        button: 'Book a 20-minute call',
        note: 'This is not a demo. We review your case and tell you if Google Ads fits.'
      };

  return (
    <div className="googleads-page">
      <Helmet>
        <title>{t('meta.googleAdsTitle')}</title>
      </Helmet>
      <section className="googleads-hero">
        <motion.div
          className="googleads-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="googleads-hero-text">
            <h1>{heroCopy.title}</h1>
            <p className="hero-lead">{heroCopy.lead}</p>
            <p className="hero-support">{heroCopy.support}</p>
            <div className="hero-buttons">
              <motion.a
                href={locale === 'es' ? 'https://www.globalalora.com/es/llamada-de-relevamiento' : 'https://www.globalalora.com/en/discovery-call'}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {locale === 'es'
                  ? 'Hablamos sobre tu proyecto'
                  : 'Let\'s talk about your project'}
                <span className="duration">
                  {locale === 'es'
                    ? 'Llamada online de 20 minutos'
                    : 'Online 20-minute call'}
                </span>
              </motion.a>
            </div>
          </div>
          <motion.div
            className="googleads-hero-panel"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={googleAdsHeroImage} 
              alt="Google Ads Hero" 
              style={{
                width: '100%',
                borderRadius: '16px',
                marginBottom: '1.5rem'
              }}
            />
            <div className="hero-highlight-card">
              <strong>84%</strong>
              <span>{locale === 'es' ? 'de las conversiones gestionadas provienen de búsquedas con intención clara' : 'of managed conversions come from high-intent searches'}</span>
            </div>
            <div className="hero-highlight-card">
              <strong>+320</strong>
              <span>{locale === 'es' ? 'palabras clave auditadas por proyecto' : 'keywords audited per project'}</span>
            </div>
            <div className="hero-highlight-card">
              <strong>{locale === 'es' ? 'Medición real > clics' : 'Real measurement > clicks'}</strong>
              <span>{locale === 'es' ? 'Seguimos acciones, no métricas vanidosas' : 'We track actions, not vanity metrics'}</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="googleads-process">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Cómo trabajamos Google Ads' : 'How we run Google Ads'}</h2>
          <p className="section-lead">{processIntro}</p>
          <div className="process-grid">
            {processBlocks.map(block => (
              <div className="process-card" key={block.title}>
                {renderIcon(block.icon, block.tone)}
                <h3>{block.title}</h3>
                <p>{block.description}</p>
              </div>
            ))}
          </div>
          <p className="section-summary">
            {locale === 'es'
              ? 'Gestionamos Google Ads como un canal de adquisición completo: estrategia, estructura, optimización y medición.'
              : 'We treat Google Ads as a full acquisition channel: strategy, structure, optimization and measurement.'}
          </p>
        </motion.div>
      </section>

      <section className="googleads-campaigns">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Tipos de campañas que trabajamos' : 'Campaign types we work with'}</h2>
          <p className="section-lead">
            {locale === 'es'
              ? 'Google Ads no es una sola cosa. Seleccionamos y combinamos campañas según el objetivo y el momento.'
              : 'Google Ads is not a single format. We select and combine campaigns based on objective and timing.'}
          </p>
          <div className="campaign-grid">
            {campaignTypes.map(type => (
              <div className="campaign-card" key={type.title} data-icon={type.icon}>
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="googleads-fit">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Para quién es este servicio' : 'Who this service is for'}</h2>
          <p className="section-lead">
            {locale === 'es'
              ? 'Google Ads funciona cuando hay una base real detrás y estructura para convertir la demanda.'
              : 'Google Ads works when there is a real base behind it and a structure to convert demand.'}
          </p>
          <div className="fit-grid">
            <div className="fit-card positive">
              <h3>{locale === 'es' ? 'Es para vos si' : 'It is for you if'}</h3>
              <ul>
                {fitLists.yes.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="fit-card negative">
              <h3>{locale === 'es' ? 'No es para vos si' : 'Not for you if'}</h3>
              <ul>
                {fitLists.no.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="section-summary">{fitLists.stance}</p>
        </motion.div>
      </section>

      <section className="googleads-compare">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Google Ads vs Meta Ads' : 'Google Ads vs Meta Ads'}</h2>
          <p className="section-lead">
            {locale === 'es'
              ? 'No compiten: captan momentos distintos del usuario y se complementan dentro del funnel.'
              : 'They are not competitors: they capture different user moments and complement each other.'}
          </p>
          <div className="compare-grid">
            {comparison.map(item => (
              <div className="compare-card" key={item.channel}>
                <div className="compare-card-top">
                  {renderIcon(item.icon, item.tone, 'compare-icon-wrapper')}
                  <div>
                    <span className="compare-channel">{item.channel}</span>
                    <span className="compare-focus">{item.focus}</span>
                  </div>
                </div>
                <p>{item.description}</p>
                <ul>
                  {item.bullets.map(bullet => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="googleads-complementary">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Servicios complementarios' : 'Complementary services'}</h2>
          <p className="section-lead">
            {locale === 'es'
              ? 'Google Ads funciona mejor como parte de un sistema completo para captar, convertir y operar.'
              : 'Google Ads performs better as part of a full system to capture, convert and operate.'}
          </p>
          <div className="complementary-grid">
            {complementary.map(service => (
              <div
                className="complementary-card"
                key={service.title}
                style={{ background: cardAccents[service.tone] || cardAccents.teal }}
              >
                <div className="complementary-card-head">
                  {renderIcon(service.icon, service.tone, 'complementary-icon-wrapper')}
                  <span className="complementary-tag">{service.tag}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="googleads-industries">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{locale === 'es' ? 'Industrias donde funciona bien' : 'Industries where it works well'}</h2>
          <p className="section-lead">
            {locale === 'es'
              ? 'No depende tanto de la industria como de la existencia de demanda activa, pero hay sectores con ventaja.'
              : 'It depends less on industry and more on active demand, though some sectors benefit faster.'}
          </p>
          <ul className="industries-list">
            {industries.map(item => (
              <li key={item.copy}>
                {renderIcon(item.icon, item.tone, 'industry-icon-wrapper')}
                <p>{item.copy}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="googleads-final-cta">
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
                ? '¿Hablamos de Google Ads?'
                : 'Shall we talk about Google Ads?'}
            </h2>
            <p>
              {locale === 'es'
                ? 'Si estás evaluando Google Ads para tu negocio, coordinemos una llamada breve para revisar si tiene sentido avanzar.'
                : 'If you are considering Google Ads for your business, let\'s schedule a brief call to review if it makes sense to move forward.'}
            </p>
            <motion.a
              href={locale === 'es' ? 'https://www.globalalora.com/es/llamada-de-relevamiento' : 'https://www.globalalora.com/en/discovery-call'}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {locale === 'es'
                ? 'Agendar una llamada de 20 minutos'
                : 'Schedule a 20-minute call'}
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
                  ? 'No puedes esperar a la reunión para hablar con nosotros? Escríbenos por Whatsapp haciendo click en el siguiente botón'
                  : 'And if you can\'t wait and want to talk to us right now, contact us on whatsapp'}
              </h3>
              <motion.a
                href="https://wa.me/+541124629452"
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
          <div
            className="cta-image"
            style={{
              background:
                'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80") center/cover',
            }}
          ></div>
        </motion.div>
      </section>

      <Chatbot />
    </div>
  );
};

export default GoogleAds;
