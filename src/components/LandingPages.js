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

  const problemCards = locale === 'es'
    ? [
        {
          icon: '🚫',
          title: 'Páginas que no convierten',
          highlight: 'Reciben tráfico pero no generan acción inmediata.',
          description: 'Se invierte en campañas, pero el usuario aterriza en un hero genérico, sin jerarquía ni un CTA insistente que le diga qué hacer.'
        },
        {
          icon: '🔄',
          title: 'Demasiada información',
          highlight: 'Todo compite por atención al mismo tiempo.',
          description: 'Servicios, historia y enlaces secundarios aparecen mezclados, el foco de conversión desaparece antes del primer scroll.'
        },
        {
          icon: '❓',
          title: 'Mensaje confuso',
          highlight: 'No se entiende la propuesta ni el siguiente paso.',
          description: 'El copy habla de la empresa y no de la promesa. Falta contexto, beneficio y una razón clara para dejar sus datos.'
        },
        {
          icon: '💸',
          title: 'Pérdida de oportunidades',
          highlight: 'Los leads se diluyen en formularios sin seguimiento.',
          description: 'No se explica qué ocurre después del envío ni se refuerza la confianza, por lo que se abandonan contactos valiosos.'
        }
      ]
    : [
        {
          icon: '🚫',
          title: 'Pages that don’t convert',
          highlight: 'Traffic arrives but never triggers action.',
          description: 'You pay for campaigns yet visitors land on a generic hero with no hierarchy or persistent CTA telling them what to do.'
        },
        {
          icon: '🔄',
          title: 'Too much information',
          highlight: 'Everything competes for attention at once.',
          description: 'Services, brand story and secondary links mix together, so the conversion focus vanishes before the first scroll.'
        },
        {
          icon: '❓',
          title: 'Confusing message',
          highlight: 'People can’t understand the offer or next step.',
          description: 'Copy talks about the company instead of the promise. There’s no context, benefit or reason to leave their data.'
        },
        {
          icon: '💸',
          title: 'Lost opportunities',
          highlight: 'Leads leak out through unsupported forms.',
          description: 'You never clarify what happens after submission, so trust drops and potential contacts abandon the journey.'
        }
      ];

  const landingUseCases = locale === 'es'
    ? [
        {
          title: 'Captación de leads',
          highlight: 'Convertimos visitas en contactos calificados.',
          description: 'Ideal para campañas en Google Ads, Meta Ads o newsletters donde cada lead tiene un costo definido.'
        },
        {
          title: 'Venta de servicios consultivos',
          highlight: 'Explicamos la propuesta y guiamos hacia la decisión.',
          description: 'Se utiliza cuando el objetivo es vender un servicio concreto o agendar una llamada comercial.'
        },
        {
          title: 'Lanzamientos y campañas puntuales',
          highlight: 'Concentramos el mensaje de una campaña específica.',
          description: 'Perfecta para nuevos productos, promociones temporales o acciones de performance marketing.'
        },
        {
          title: 'Reserva de demos o reuniones',
          highlight: 'Reducimos pasos para agendar una conversación.',
          description: 'Integramos la landing con calendarios o formularios para acelerar el paso a una reunión real.'
        }
      ]
    : [
        {
          title: 'Lead capture',
          highlight: 'We turn visits into qualified contacts.',
          description: 'Ideal for Google Ads, Meta Ads or newsletter campaigns where every lead has a defined cost.'
        },
        {
          title: 'Service sales and consultative offers',
          highlight: 'We explain the value proposition and drive a decision.',
          description: 'Used when the goal is to sell a specific service or book a commercial call.'
        },
        {
          title: 'Launches and time-bound campaigns',
          highlight: 'We condense the message of a specific campaign.',
          description: 'Perfect for new products, limited promos or performance marketing pushes.'
        },
        {
          title: 'Demo or meeting booking',
          highlight: 'We remove steps to schedule a conversation.',
          description: 'The landing integrates with calendars or forms to accelerate the path to a real meeting.'
        }
      ];

  const typesIntro = locale === 'es'
    ? 'Los casos más frecuentes muestran cómo adaptamos la landing a cada objetivo concreto.'
    : 'These common use cases show how we adapt the landing to each specific goal.';

  const typesConclusion = locale === 'es'
    ? 'Cuando el objetivo es claro, diseñamos la landing exacta para alcanzarlo.'
    : 'When the objective is clear, we design the exact landing needed to achieve it.';

  const extensionSummary = locale === 'es'
    ? 'Una landing alcanza su mejor rendimiento cuando forma parte de un sistema y se complementa con las piezas correctas.'
    : 'A landing performs best when it is part of a system and is complemented by the right pieces.';

  const extensionServices = locale === 'es'
    ? [
        {
          title: 'Campañas de adquisición (Google Ads, Meta Ads)',
          highlight: 'Atraemos tráfico con intención real.',
          description: 'Se activa cuando necesitamos volumen de visitas calificadas para validar rápidamente la propuesta.'
        },
        {
          title: 'Automatización y CRM',
          highlight: 'Conectamos la landing con tus procesos internos.',
          description: 'Integraciones con formularios, agendas y CRM para que cada lead llegue al seguimiento correcto.'
        },
        {
          title: 'Mantenimiento y optimización continua',
          highlight: 'Iteramos con datos reales.',
          description: 'Analizamos métricas, probamos variantes y ajustamos el contenido para mejorar la conversión.'
        },
        {
          title: 'Contenido y nurturing',
          highlight: 'Preparamos el contexto antes y después del clic.',
          description: 'Emails, secuencias o piezas de apoyo que sostienen el mensaje y elevan la confianza.'
        }
      ]
    : [
        {
          title: 'Acquisition campaigns (Google Ads, Meta Ads)',
          highlight: 'We bring in traffic with real intent.',
          description: 'Used when we need qualified visits to quickly validate the offer.'
        },
        {
          title: 'Automation and CRM',
          highlight: 'We connect the landing to your internal processes.',
          description: 'Forms, schedulers and CRMs integrate so every lead is routed to the right follow-up.'
        },
        {
          title: 'Ongoing maintenance and optimization',
          highlight: 'We iterate using real data.',
          description: 'Metrics, experiments and copy updates keep conversion improving.'
        },
        {
          title: 'Content and nurturing',
          highlight: 'We prepare the context before and after the click.',
          description: 'Emails, sequences or supporting assets reinforce the message and trust.'
        }
      ];

  const extensionClosing = locale === 'es'
    ? 'No recomendamos extensiones por defecto: sólo sumamos lo que aporta valor real al objetivo del proyecto.'
    : 'We never add extensions by default—only what brings real value to the project objective.';

  const landingLead = locale === 'es'
    ? 'Una landing page es ideal cuando hay un único objetivo claro y urgente.'
    : 'A landing page is ideal when there is a single, urgent objective.';

  const websiteLead = locale === 'es'
    ? 'Un sitio web completo sostiene múltiples historias y recorridos.'
    : 'A full website supports multiple stories and journeys.';

  const landingConclusion = locale === 'es'
    ? 'La landing elimina distracciones y concentra al usuario en un movimiento medible.'
    : 'The landing removes distractions and concentrates the user on one measurable movement.';

  const websiteConclusion = locale === 'es'
    ? 'El sitio web funciona como la base institucional donde convergen todos los canales.'
    : 'The website operates as the institutional base where every channel converges.';

  const recommendationSummary = locale === 'es'
    ? 'No recomendamos formatos por defecto: elegimos la herramienta que mejor sirve al objetivo del negocio.'
    : 'We never recommend formats by default—we choose the tool that best serves the business objective.';

  const recommendationDescription = locale === 'es'
    ? 'Analizamos meta comercial, madurez digital y recursos antes de sugerir si desarrollar una landing, un sitio o ambos.'
    : 'We examine business goals, digital maturity and resources before suggesting whether to ship a landing, a full site or both.';

  const recommendationDetails = locale === 'es'
    ? [
        {
          label: 'Landing page',
          text: 'Se utiliza para convertir tráfico con intención específica, medir resultados y ajustar rápido.'
        },
        {
          label: 'Sitio web',
          text: 'Sostiene la marca, explica el portfolio completo y consolida la relación a largo plazo.'
        }
      ]
    : [
        {
          label: 'Landing page',
          text: 'Used to convert intent-driven traffic, measure outcomes and iterate quickly.'
        },
        {
          label: 'Website',
          text: 'Supports the brand, explains the full offering and nurtures long-term relationships.'
        }
      ];

  const recommendationClosing = locale === 'es'
    ? 'Cada recomendación es a medida: si tu estrategia sólo necesita una pieza, construiremos sólo esa.'
    : 'Every recommendation is bespoke—if your strategy only needs one piece, we will only build that piece.';

  const solutionIntro = locale === 'es'
    ? 'Nuestro método combina análisis comercial, UX y analítica para diseñar landing pages que conducen a la acción con intención.'
    : 'Our method combines business analysis, UX and analytics to design landing pages that move users to act deliberately.';

  const solutionPrinciples = locale === 'es'
    ? [
        {
          title: 'Objetivo del negocio',
          highlight: 'Definimos qué acción debe realizar el usuario.',
          description: 'Cada landing responde a un objetivo medible: captar leads, vender un servicio o agendar una llamada.'
        },
        {
          title: 'Nivel de conciencia del usuario',
          highlight: 'Adaptamos el mensaje al punto en el que se encuentra.',
          description: 'No comunicamos igual a quien ya reconoce el problema que a quien recién lo descubre; ajustamos tono, pruebas y objeciones.'
        },
        {
          title: 'Fuente de tráfico',
          highlight: 'Diseñamos según desde dónde llega el usuario.',
          description: 'El ritmo, la jerarquía y los llamados varían si el tráfico es pago, orgánico o referido.'
        }
      ]
    : [
        {
          title: 'Business objective',
          highlight: 'We define the exact action the user must take.',
          description: 'Each landing answers a measurable goal: capture leads, sell a service or book a call.'
        },
        {
          title: 'User awareness level',
          highlight: 'We adapt the message to where the user stands.',
          description: 'We do not speak the same way to someone who knows the problem as to someone discovering it; tone, proof and objections shift.'
        },
        {
          title: 'Traffic source',
          highlight: 'We design based on the entry point.',
          description: 'Rhythm, hierarchy and CTAs change if visitors arrive via paid, organic or referral channels.'
        }
      ];

  const solutionClosing = locale === 'es'
    ? 'Nada se deja al azar: cada decisión responde a un objetivo, un usuario y un contexto concreto.'
    : 'Nothing is left to chance: every decision answers to a goal, a user and a concrete context.';

  const landingCriteria = locale === 'es'
    ? [
        {
          icon: '🎯',
          title: 'Un único objetivo medible',
          detail: 'Necesitas que cada visita termine en un lead, agenda o compra sin distracciones intermedias.'
        },
        {
          icon: '📈',
          title: 'Tráfico controlado',
          detail: 'Invertís en Ads, email o alianzas y querés atribuir cada conversión a su fuente.'
        },
        {
          icon: '⚡',
          title: 'Oferta puntual o experimento',
          detail: 'Validás un servicio, promo o evento con ventanas cortas y mensajes muy específicos.'
        },
        {
          icon: '🔁',
          title: 'Necesidad de iterar rápido',
          detail: 'Buscás lanzar en semanas, medir y ajustar el copy o la propuesta sobre la marcha.'
        }
      ]
    : [
        {
          icon: '🎯',
          title: 'One measurable objective',
          detail: 'Every visit must end in a lead, booking or purchase with zero side quests.'
        },
        {
          icon: '📈',
          title: 'Controlled traffic',
          detail: 'You invest in Ads, email or partnerships and need clear attribution per conversion.'
        },
        {
          icon: '⚡',
          title: 'Specific offer or experiment',
          detail: 'You validate a service, promo or launch with tight timelines and precise messaging.'
        },
        {
          icon: '🔁',
          title: 'Need for rapid iteration',
          detail: 'You plan to ship in weeks, measure and tweak copy or offer continuously.'
        }
      ];

  const websiteCriteria = locale === 'es'
    ? [
        {
          icon: '🏢',
          title: 'Varios recorridos en paralelo',
          detail: 'Tu negocio requiere contar servicios, casos, equipo, blog y recursos en un mismo eje.'
        },
        {
          icon: '📣',
          title: 'Construcción profunda de marca',
          detail: 'Buscás autoridad, SEO y presencia institucional para sostener campañas y referidos.'
        },
        {
          icon: '🧩',
          title: 'Ecosistema con múltiples piezas',
          detail: 'Necesitás alojar landings, contenidos, integraciones o productos en evolución.'
        },
        {
          icon: '🤝',
          title: 'Relaciones de largo plazo',
          detail: 'El usuario decide en varias etapas y querés nutrirlo con contexto, confianza y seguimiento.'
        }
      ]
    : [
        {
          icon: '🏢',
          title: 'Parallel customer journeys',
          detail: 'You must explain services, use cases, team, blog and resources within one home base.'
        },
        {
          icon: '📣',
          title: 'Deep brand building',
          detail: 'You need authority, SEO and institutional presence to support campaigns and referrals.'
        },
        {
          icon: '🧩',
          title: 'Multi-piece ecosystem',
          detail: 'You have to host landings, content, integrations or evolving products together.'
        },
        {
          icon: '🤝',
          title: 'Long-term relationships',
          detail: 'Decisions happen in stages and you want to nurture with context, trust and follow-up.'
        }
      ];

  const services = locale === 'es'
    ? [
        {
          title: 'Definición del objetivo principal de conversión',
          highlight: 'Clarificamos qué acción debe realizar el usuario.',
          description: 'Cada landing se diseña con un único objetivo medible, alineado al negocio y al embudo.'
        },
        {
          title: 'Estructura estratégica orientada a resultados',
          highlight: 'Convertimos el objetivo en un recorrido lógico.',
          description: 'Ordenamos secciones, evidencias y llamados para eliminar fricción y guiar a la conversión.'
        },
        {
          title: 'Copy claro, directo y enfocado en beneficios',
          highlight: 'Traducimos los beneficios en mensajes accionables.',
          description: 'Cada bloque de texto responde a objeciones, refuerza valor y conduce al clic esperado.'
        },
        {
          title: 'Diseño visual alineado a la marca',
          highlight: 'La estética refuerza confianza y coherencia.',
          description: 'Construimos una interfaz limpia que refleja tu identidad y prioriza la lectura escaneable.'
        },
        {
          title: 'Experiencia optimizada para dispositivos móviles',
          highlight: 'El flujo funciona igual de bien en pantallas pequeñas.',
          description: 'Ajustamos layout, espaciados y CTAs para maximizar la conversión desde móviles.'
        },
        {
          title: 'Desarrollo técnico rápido y eficiente',
          highlight: 'Implementamos tecnología moderna con performance real.',
          description: 'Codificamos siguiendo mejores prácticas para asegurar velocidad, estabilidad e iteración ágil.'
        },
        {
          title: 'Integraciones y automatización',
          highlight: 'Conectamos la landing con tus procesos existentes.',
          description: 'Formularios, agendas y herramientas quedan integrados para que cada lead llegue a tu stack.'
        },
        {
          title: 'Optimización de velocidad y medición',
          highlight: 'Medimos antes de lanzar y dejamos tracking configurado.',
          description: 'Optimización de carga, etiquetado y analytics para tomar decisiones post-lanzamiento.'
        }
      ]
    : [
        {
          title: 'Definition of the main conversion objective',
          highlight: 'We clarify the exact action the user must take.',
          description: 'Each landing is built around one measurable goal aligned with the business and funnel.'
        },
        {
          title: 'Strategic structure oriented to results',
          highlight: 'We turn the goal into a logical journey.',
          description: 'Sections, proof and CTAs are organized to remove friction and guide every step.'
        },
        {
          title: 'Clear, benefit-driven copywriting',
          highlight: 'We translate benefits into actionable language.',
          description: 'Every paragraph addresses objections, reinforces value and nudges the desired click.'
        },
        {
          title: 'Visual design aligned with the brand',
          highlight: 'The interface reinforces trust and coherence.',
          description: 'We craft a clean layout that reflects your identity and keeps reading effortless.'
        },
        {
          title: 'Experience optimized for mobile devices',
          highlight: 'The flow performs equally well on smaller screens.',
          description: 'Layout, spacing and CTAs are tuned to maximize conversions from mobile traffic.'
        },
        {
          title: 'Fast and efficient technical development',
          highlight: 'We implement modern technology with real performance.',
          description: 'Code follows best practices to ensure speed, stability and agile iteration.'
        },
        {
          title: 'Integrations and automation',
          highlight: 'We connect the landing to your existing processes.',
          description: 'Forms, schedulers and tools are integrated so every lead lands in your stack.'
        },
        {
          title: 'Speed optimization and measurement',
          highlight: 'We measure before launch and leave tracking ready.',
          description: 'Loading, tagging and analytics are optimized to inform post-launch decisions.'
        }
      ];

  const processSteps = [
    {
      number: '01',
      title: locale === 'es' ? 'Análisis del objetivo y la oferta' : 'Objective and offer analysis',
      highlight: locale === 'es'
        ? 'Definimos qué se quiere vender y a quién.'
        : 'We define what is being sold and to whom.',
      description: locale === 'es'
        ? 'Revisamos objetivo, propuesta de valor y público para construir una estrategia clara desde el inicio.'
        : 'We review the goal, value proposition and audience to build a clear strategy from the start.'
    },
    {
      number: '02',
      title: locale === 'es' ? 'Arquitectura y guion' : 'Architecture and narrative',
      highlight: locale === 'es'
        ? 'Traducimos la estrategia en un recorrido lógico.'
        : 'We turn the strategy into a logical journey.',
      description: locale === 'es'
        ? 'Definimos secciones, jerarquías y mensajes clave que eliminan fricción.'
        : 'We define sections, hierarchy and key messages that remove friction.'
    },
    {
      number: '03',
      title: locale === 'es' ? 'Contenido y diseño de experiencia' : 'Content and experience design',
      highlight: locale === 'es'
        ? 'Creamos copy y visuales orientados a conversión.'
        : 'We craft conversion-focused copy and visuals.',
      description: locale === 'es'
        ? 'Cada bloque combina storytelling, evidencia y llamados claros para motivar la acción.'
        : 'Each block blends storytelling, proof and clear calls-to-action to motivate movement.'
    },
    {
      number: '04',
      title: locale === 'es' ? 'Desarrollo e integraciones' : 'Development and integrations',
      highlight: locale === 'es'
        ? 'Implementamos tecnología moderna y conectada.'
        : 'We implement modern, connected technology.',
      description: locale === 'es'
        ? 'Construimos la landing con performance real e integramos formularios, agendas y analítica.'
        : 'We build with real performance and connect forms, schedulers and analytics.'
    },
    {
      number: '05',
      title: locale === 'es' ? 'Lanzamiento y optimización inicial' : 'Launch and initial optimization',
      highlight: locale === 'es'
        ? 'Medimos, ajustamos y transferimos el control.'
        : 'We measure, adjust and hand over control.',
      description: locale === 'es'
        ? 'Activamos tracking, revisamos métricas tempranas y dejamos un plan claro de próximos pasos.'
        : 'We activate tracking, review early metrics and leave a clear plan for next steps.'
    }
  ];

  const idealIntro = locale === 'es'
    ? 'No todos los proyectos necesitan una landing page. Estos son los escenarios en los que realmente aporta valor.'
    : 'Not every project needs a landing page. These are the scenarios where it truly adds value.';

  const idealCriteria = locale === 'es'
    ? [
        {
          title: 'Cuando ya existe tráfico, pero se diluye',
          highlight: 'La landing concentra el mensaje y elimina distracciones.',
          description: 'Ideal cuando se invierte en campañas o hay visitas constantes que no se transforman en leads.'
        },
        {
          title: 'Cuando se quiere validar una oferta nueva',
          highlight: 'Permite testear narrativa, propuesta y acción sin construir un sitio completo.',
          description: 'Se usa para lanzar MVPs, servicios piloto o bundles que necesitan feedback rápido.'
        },
        {
          title: 'Cuando el proceso comercial requiere foco',
          highlight: 'Cada paso guía al usuario hacia una sola decisión.',
          description: 'Funciona para servicios consultivos o productos con ticket medio/alto que necesitan contexto claro.'
        },
        {
          title: 'Cuando el equipo necesita medir y optimizar',
          highlight: 'Una landing facilita iterar, comparar variantes y escalar lo que funciona.',
          description: 'Permite correr experimentos de copy, estructura o integraciones sin tocar todo el sitio.'
        }
      ]
    : [
        {
          title: 'When traffic already exists but leaks out',
          highlight: 'The landing focuses the message and removes distractions.',
          description: 'Ideal when you invest in campaigns or have steady visits that never turn into leads.'
        },
        {
          title: 'When you need to validate a new offer',
          highlight: 'It lets you test narrative, proposition and CTA without building a full site.',
          description: 'Used to launch MVPs, pilot services or bundles that demand fast feedback.'
        },
        {
          title: 'When the sales process requires focus',
          highlight: 'Every step guides the user toward a single decision.',
          description: 'Works for consultative services or mid/high-ticket products that need clear context.'
        },
        {
          title: 'When the team must measure and optimize',
          highlight: 'A landing makes it easy to iterate, compare variants and scale what works.',
          description: 'You can run copy, structure or integration experiments without touching the entire site.'
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
          <p className="problem-intro">
            {locale === 'es'
              ? 'Muchos negocios invierten en tráfico o contenidos, pero la experiencia que espera al usuario no tiene la misma disciplina.'
              : 'Many companies invest in traffic or content, yet the landing experience that greets visitors lacks the same discipline.'}
          </p>
          <div className="problems-grid">
            {problemCards.map((card, index) => (
              <div className="problem-card" key={index}>
                <div className="problem-icon" aria-hidden="true">{card.icon}</div>
                <h3>{card.title}</h3>
                <p className="problem-highlight"><strong>{card.highlight}</strong></p>
                <p className="problem-description">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="problem-result">
            <strong>
              {locale === 'es'
                ? 'El resultado se repite: tráfico que llega, pero no se transforma en oportunidades reales.'
                : 'The outcome is always the same: traffic arrives, but it never turns into real opportunities.'}
            </strong>
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
          <p className="comparison-text">
            {locale === 'es'
              ? 'No todos los objetivos requieren un sitio web completo. En muchos casos, una landing page es la solución más efectiva.'
              : 'Not all objectives require a complete website. In many cases, a landing page is the most effective solution.'}
          </p>
          
          <div className="comparison-grid">
            <div className="comparison-card landing-card">
              <h3>
                {locale === 'es' ? 'Cuándo conviene una landing page' : 'When a landing page is advisable'}
              </h3>
              <p className="comparison-lead">
                <strong>{landingLead}</strong>
              </p>
              <div className="comparison-list">
                {landingCriteria.map((criterion, index) => (
                  <div className="comparison-item" key={index}>
                    <span className="item-icon" aria-hidden="true">{criterion.icon}</span>
                    <div className="comparison-copy">
                      <strong>{criterion.title}</strong>
                      <span>{criterion.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="comparison-conclusion">
                {landingConclusion}
              </p>
            </div>

            <div className="comparison-card website-card">
              <h3>
                {locale === 'es' ? 'Cuándo conviene un sitio web' : 'When a website is advisable'}
              </h3>
              <p className="comparison-lead">
                <strong>{websiteLead}</strong>
              </p>
              <div className="comparison-list">
                {websiteCriteria.map((criterion, index) => (
                  <div className="comparison-item" key={index}>
                    <span className="item-icon" aria-hidden="true">{criterion.icon}</span>
                    <div className="comparison-copy">
                      <strong>{criterion.title}</strong>
                      <span>{criterion.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="comparison-conclusion">
                {websiteConclusion}
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
          <div className="recommendation-panel">
            <p className="recommendation-statement">
              <strong>{recommendationSummary}</strong>
            </p>
            <p className="recommendation-description">{recommendationDescription}</p>
            <div className="recommendation-points">
              {recommendationDetails.map((item, index) => (
                <div className="recommendation-point" key={index}>
                  <span className="recommendation-label">{item.label}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <p className="recommendation-closing">{recommendationClosing}</p>
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
          <p className="solution-description">{solutionIntro}</p>
          <div className="solution-method">
            {solutionPrinciples.map((principle, index) => (
              <div className="solution-block" key={index}>
                <h3>{principle.title}</h3>
                <p>
                  <strong>{principle.highlight}</strong>{' '}
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
          <p className="solution-conclusion">{solutionClosing}</p>
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
          <p className="services-intro">
            {locale === 'es'
              ? 'Cada entrega cubre estrategia, contenido, diseño, desarrollo e integración para que la landing quede lista para convertir.'
              : 'Every engagement covers strategy, content, design, development and integration so the landing is ready to convert.'}
          </p>
          <div className="services-list">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <h3>{service.title}</h3>
                <p>
                  <strong>{service.highlight}</strong>{' '}
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="services-conclusion">
            {locale === 'es'
              ? 'Todo está pensado para que el usuario entienda la propuesta, confíe en ella y realice una acción concreta.'
              : 'Everything is designed so the user understands the offer, trusts it and takes a concrete action.'}
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
          <p className="types-description">{typesIntro}</p>
          <div className="types-list">
            {landingUseCases.map((useCase, index) => (
              <motion.div 
                className="type-case"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h3>{useCase.title}</h3>
                <p>
                  <strong>{useCase.highlight}</strong>{' '}
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="types-conclusion">{typesConclusion}</p>
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
          <p className="project-text"> 
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
              ? (
                  <>
                    Cada landing page responde a un objetivo específico, pero todas comparten el mismo principio: {' '}
                    <strong>eliminar fricción y maximizar la conversión.</strong>
                  </>
                )
              : (
                  <>
                    Each landing page responds to a specific objective, yet they all share one principle: {' '}
                    <strong>eliminate friction and maximize conversion.</strong>
                  </>
                )}
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
          <p className="complementary-summary">{extensionSummary}</p>
          <div className="complementary-list">
            {extensionServices.map((service, index) => (
              <motion.div 
                className="complementary-block"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h4>{service.title}</h4>
                <p>
                  <strong>{service.highlight}</strong>{' '}
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="complementary-closing">{extensionClosing}</p>
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
          <p className="process-lead">
            {locale === 'es'
              ? 'Un flujo continuo que va desde la estrategia hasta el lanzamiento medido.'
              : 'A continuous flow that runs from strategy to a measured launch.'}
          </p>
          <div className="process-flow">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="process-node">
                  <span>{step.number}</span>
                </div>
                <div className="process-copy">
                  <h3>{step.title}</h3>
                  <p>
                    <strong>{step.highlight}</strong>{' '}
                    {step.description}
                  </p>
                </div>
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
            {locale === 'es' ? 'Cuándo una landing page es la mejor opción' : 'When a landing page is the best option'}
          </h2>
          <p className="ideal-summary">{idealIntro}</p>
          <div className="ideal-criteria">
            {idealCriteria.map((criterion, index) => (
              <div className="ideal-criterion" key={index}>
                <h3>{criterion.title}</h3>
                <p>
                  <strong>{criterion.highlight}</strong>{' '}
                  {criterion.description}
                </p>
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
