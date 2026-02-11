import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Chatbot from './Chatbot';
import './AplicacionesWeb.css';

const AplicacionesWeb = () => {
  const { t, locale } = useLanguage();

  useEffect(() => {
    // Agregar clase al body para esta página
    document.body.classList.add('aplicaciones-web-page');
    
    return () => {
      // Limpiar clase al desmontar
      document.body.classList.remove('aplicaciones-web-page');
    };
  }, []);

  const iconPalette = {
    teal: 'linear-gradient(135deg, #0ea5e9, #34d399)',
    violet: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    amber: 'linear-gradient(135deg, #f97316, #facc15)',
    emerald: 'linear-gradient(135deg, #10b981, #22d3ee)',
    slate: 'linear-gradient(135deg, #334155, #64748b)',
    rose: 'linear-gradient(135deg, #f43f5e, #fb7185)'
  };

  const iconLibrary = {
    nodes: (
      <svg viewBox="0 0 32 32" className="webapp-icon-svg">
        <circle cx="8" cy="8" r="3" fill="currentColor" />
        <circle cx="24" cy="10" r="3" fill="currentColor" opacity="0.7" />
        <circle cx="10" cy="24" r="3" fill="currentColor" opacity="0.7" />
        <circle cx="22" cy="24" r="3" fill="currentColor" />
        <path d="M10 20l-2-8 14-4 2 12-12 4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    cycle: (
      <svg viewBox="0 0 32 32" className="webapp-icon-svg">
        <path d="M10 8h12v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 24H10v-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 14l-3-3 3-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 18l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    portal: (
      <svg viewBox="0 0 32 32" className="webapp-icon-svg">
        <rect x="7" y="7" width="18" height="18" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M7 16h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 7v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.8" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 32 32" className="webapp-icon-svg">
        <path d="M6 22l6-8 6 4 8-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 26h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <circle cx="12" cy="14" r="2" fill="currentColor" />
        <circle cx="18" cy="18" r="2" fill="currentColor" opacity="0.7" />
        <circle cx="26" cy="8" r="2" fill="currentColor" opacity="0.7" />
      </svg>
    ),
    grid: (
      <svg viewBox="0 0 32 32" className="webapp-icon-svg">
        <rect x="6" y="6" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="6" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="6" y="18" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="18" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    signal: (
      <svg viewBox="0 0 32 32" className="webapp-icon-svg">
        <rect x="7" y="19" width="3" height="7" rx="1.5" fill="currentColor" />
        <rect x="13.5" y="15" width="3" height="11" rx="1.5" fill="currentColor" opacity="0.7" />
        <rect x="20" y="10" width="3" height="16" rx="1.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    document: (
      <svg viewBox="0 0 32 32" className="webapp-icon-svg">
        <path d="M10 5h12l4 5v17H10z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M22 5v5h5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M14 17h8M14 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    link: (
      <svg viewBox="0 0 32 32" className="webapp-icon-svg">
        <path d="M12 20l-2 2a5 5 0 007 7l2-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 12l2-2a5 5 0 00-7-7l-2 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 20l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    bottleneck: (
      <svg viewBox="0 0 32 32" className="webapp-icon-svg">
        <path d="M6 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 20h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="14" y="12" width="4" height="8" rx="2" fill="currentColor" opacity="0.8" />
        <circle cx="8" cy="12" r="2" fill="currentColor" opacity="0.4" />
        <circle cx="24" cy="12" r="2" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    spreadsheet: (
      <svg viewBox="0 0 32 32" className="webapp-icon-svg">
        <rect x="6" y="6" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M6 14h20M6 22h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 6v20M20 6v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
    puzzle: (
      <svg viewBox="0 0 32 32" className="webapp-icon-svg">
        <path d="M12 6h4a2 2 0 012 2v2a2 2 0 104 0V8a2 2 0 012-2h4v8h-2a2 2 0 000 4h2v8h-4a2 2 0 01-2-2v-2a2 2 0 10-4 0v2a2 2 0 01-2 2h-4v-8H8a2 2 0 110-4h4z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    scatter: (
      <svg viewBox="0 0 32 32" className="webapp-icon-svg">
        <circle cx="8" cy="10" r="2" fill="currentColor" />
        <circle cx="20" cy="8" r="2.5" fill="currentColor" opacity="0.8" />
        <circle cx="26" cy="20" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="12" cy="22" r="3" fill="currentColor" opacity="0.9" />
        <path d="M10 12l2 8m6-14l4 14m-4-2l8-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      </svg>
    )
  };

  const renderIcon = (iconName, tone = 'teal', wrapperClass = 'webapp-icon-wrapper') => {
    if (!iconName || !iconLibrary[iconName]) return null;
    return (
      <span className={wrapperClass} style={{ background: iconPalette[tone] || iconPalette.teal }}>
        {iconLibrary[iconName]}
      </span>
    );
  };

  const problemLead = locale === 'es'
    ? 'Muchas empresas siguen operando con correos, planillas y personas clave sosteniendo todo “a mano”.'
    : 'Many companies still run on emails, spreadsheets and key people holding everything together “by hand”.';

  const problemScenarios = locale === 'es'
    ? [
        {
          icon: 'bottleneck',
          tone: 'amber',
          title: 'Procesos manuales encadenados',
          highlight: 'El trabajo depende de personas, no de sistemas.',
          description: 'Seguimientos por WhatsApp o correo hacen que cada entrega requiera empujar a mano y deja cero trazabilidad compartida.'
        },
        {
          icon: 'spreadsheet',
          tone: 'slate',
          title: 'Hojas de cálculo que explotaron su límite',
          highlight: 'Excel deja de ser solución cuando el negocio crece.',
          description: 'Versiones duplicadas, datos inconsistentes y nadie sabe cuál es el archivo válido el lunes a primera hora.'
        },
        {
          icon: 'puzzle',
          tone: 'violet',
          title: 'Herramientas genéricas forzadas',
          highlight: 'El software estándar prioriza su lógica, no la tuya.',
          description: 'Se multiplican los workarounds, se duplica la carga de datos y los permisos quedan en manos de un solo perfil.'
        },
        {
          icon: 'scatter',
          tone: 'emerald',
          title: 'Información repartida en demasiados lugares',
          highlight: 'Sin una capa central no existe una foto real del negocio.',
          description: 'CRM, correos y chats guardan fragmentos distintos, por lo que se pierden compromisos y nadie sabe el estado actual.'
        }
      ]
    : [
        {
          icon: 'bottleneck',
          tone: 'amber',
          title: 'Manual processes chained together',
          highlight: 'Work depends on people, not systems.',
          description: 'WhatsApp threads and emails mean every delivery needs a human push and leaves zero shared traceability.'
        },
        {
          icon: 'spreadsheet',
          tone: 'slate',
          title: 'Spreadsheets that hit a ceiling',
          highlight: 'Excel stops working once the business scales.',
          description: 'Duplicated versions, inconsistent data and no one knows which file is “right” on Monday morning.'
        },
        {
          icon: 'puzzle',
          tone: 'violet',
          title: 'Generic tools forced to fit',
          highlight: 'Off-the-shelf software enforces its logic, not yours.',
          description: 'Workarounds appear everywhere, data entry is duplicated and permissions sit in one person’s hands.'
        },
        {
          icon: 'scatter',
          tone: 'emerald',
          title: 'Information scattered across too many places',
          highlight: 'Without a central layer there’s no real picture of the business.',
          description: 'CRMs, emails and chats store different fragments, so commitments get lost and no one knows the current status.'
        }
      ];

  const problemImpactText = locale === 'es'
    ? 'El resultado no es solo desorden: es tiempo perdido, errores constantes y cero control sobre lo que realmente pasa.'
    : 'The outcome isn’t just chaos: it’s lost time, constant errors and zero control over what’s truly happening.';

  const problemImpactPills = locale === 'es'
    ? ['Retrasos en operaciones clave', 'Costos escondidos por retrabajo', 'Dependencia de personas puntuales']
    : ['Delays across critical ops', 'Hidden costs from rework', 'Dependency on specific people'];

  const webAppLead = locale === 'es'
    ? 'Una aplicación web es una herramienta operativa a la que accedés desde el navegador para ejecutar procesos reales del negocio.'
    : 'A web application is an operational tool accessed from the browser to run real business processes.';

  const webAppDefinition = locale === 'es'
    ? [
        'No comunica información como un sitio: coordina trabajo, usuarios y datos en un mismo flujo.',
        'Se integra con las operaciones diarias para que cada área tenga visibilidad y control en tiempo real.'
      ]
    : [
        'It doesn’t just publish information like a website: it orchestrates work, users and data in one flow.',
        'It hooks into day-to-day operations so every team has real-time visibility and control.'
      ];

  const usageIntro = locale === 'es'
    ? 'Casos reales donde una aplicación web sostiene la operación: decisiones, datos y equipos en el mismo lugar.'
    : 'Real scenarios where a web application runs the operation: decisions, data and teams in one place.';

  const usageCases = locale === 'es'
    ? [
        {
          icon: 'nodes',
          tone: 'teal',
          title: 'Backoffice operativo',
          highlight: 'Coordina pedidos, clientes y estados en una sola vista.',
          description: 'Evita planillas paralelas: cada equipo trabaja con los mismos datos en tiempo real.'
        },
        {
          icon: 'portal',
          tone: 'violet',
          title: 'Portales para clientes o partners',
          highlight: 'Da acceso controlado a información y acciones.',
          description: 'Los externos consultan avances, suben documentación y solicitan cambios sin correos interminables.'
        },
        {
          icon: 'chart',
          tone: 'emerald',
          title: 'Tableros para dirección',
          highlight: 'Visibilidad en tiempo real para decidir con datos.',
          description: 'Métricas operativas y comerciales consolidadas para detectar cuellos de botella.'
        },
        {
          icon: 'cycle',
          tone: 'amber',
          title: 'Seguimiento automatizado',
          highlight: 'Recordatorios y aprobaciones sin dependencia humana.',
          description: 'Alertas, SLA y asignaciones se ejecutan solos con reglas claras.'
        },
        {
          icon: 'link',
          tone: 'slate',
          title: 'Integración de herramientas',
          highlight: 'CRM, ERP y logística conectados en un flujo propio.',
          description: 'Sincroniza datos críticos para que no existan duplicados ni versiones contradictorias.'
        },
        {
          icon: 'grid',
          tone: 'rose',
          title: 'Productos digitales',
          highlight: 'Monetizá servicios como plataforma propia.',
          description: 'Onboarding, planes y pagos recurrentes dentro de tu aplicación web.'
        }
      ]
    : [
        {
          icon: 'nodes',
          tone: 'teal',
          title: 'Operational backoffice',
          highlight: 'Coordinate orders, clients and statuses in one view.',
          description: 'No more parallel spreadsheets: every team works with the same live data.'
        },
        {
          icon: 'portal',
          tone: 'violet',
          title: 'Client or partner portals',
          highlight: 'Provide controlled access to information and actions.',
          description: 'External users check progress, upload documents and request changes without endless emails.'
        },
        {
          icon: 'chart',
          tone: 'emerald',
          title: 'Leadership dashboards',
          highlight: 'Real-time visibility to decide with data.',
          description: 'Operational and commercial metrics consolidated to spot bottlenecks fast.'
        },
        {
          icon: 'cycle',
          tone: 'amber',
          title: 'Automated follow-ups',
          highlight: 'Reminders and approvals without human juggling.',
          description: 'Alerts, SLAs and assignments execute automatically under clear rules.'
        },
        {
          icon: 'link',
          tone: 'slate',
          title: 'Tool integration layer',
          highlight: 'Connect CRM, ERP and logistics into your own flow.',
          description: 'Keeps critical data in sync so there are no duplicates or conflicting versions.'
        },
        {
          icon: 'grid',
          tone: 'rose',
          title: 'Digital products',
          highlight: 'Monetize services as your own platform.',
          description: 'Onboarding, plans and recurring payments running inside your web application.'
        }
      ];

  const webAppUseCases = locale === 'es'
    ? [
        {
          icon: 'nodes',
          tone: 'teal',
          title: 'Operación interna',
          highlight: 'Centraliza información y procesos clave.',
          description: 'Clientes, pedidos, estados y documentación conviven en un solo panel accesible para el equipo.'
        },
        {
          icon: 'cycle',
          tone: 'amber',
          title: 'Automatización operativa',
          highlight: 'Reduce tareas manuales y errores repetitivos.',
          description: 'Flujos que antes dependían de planillas o correos pasan a ejecutarse con reglas claras.'
        },
        {
          icon: 'portal',
          tone: 'violet',
          title: 'Portales colaborativos',
          highlight: 'Conectan a clientes, proveedores o partners en el mismo sistema.',
          description: 'Permite dar acceso por rol, compartir avances y mantener toda la comunicación en contexto.'
        },
        {
          icon: 'chart',
          tone: 'emerald',
          title: 'Inteligencia y reporting',
          highlight: 'Convierte datos dispersos en decisiones.',
          description: 'Dashboards personalizados con métricas en tiempo real para dirección y equipos.'
        }
      ]
    : [
        {
          icon: 'nodes',
          tone: 'teal',
          title: 'Internal operations',
          highlight: 'Centralizes critical information and processes.',
          description: 'Clients, orders, statuses and documents live in one panel the team can trust.'
        },
        {
          icon: 'cycle',
          tone: 'amber',
          title: 'Operational automation',
          highlight: 'Cuts manual tasks and repetitive errors.',
          description: 'Flows that relied on spreadsheets or email now run with clear logic.'
        },
        {
          icon: 'portal',
          tone: 'violet',
          title: 'Collaborative portals',
          highlight: 'Put clients, suppliers or partners inside the same system.',
          description: 'Role-based access, shared progress and conversations in the right context.'
        },
        {
          icon: 'chart',
          tone: 'emerald',
          title: 'Intelligence & reporting',
          highlight: 'Turns scattered data into decisions.',
          description: 'Custom dashboards with real-time metrics for leadership and teams.'
        }
      ];

  const webAppClosing = locale === 'es'
    ? 'Todo funciona online, sin instalaciones, y evoluciona al ritmo del negocio.'
    : 'Everything runs online, no installs needed, and evolves at the speed of the business.';

  const differenceIntro = locale === 'es'
    ? 'Cuando dejás de necesitar “mostrar” y empezás a necesitar “operar”, el tipo de solución cambia por completo.'
    : 'Once the challenge stops being "showing" and becomes "operating", the type of solution changes entirely.';

  const differenceBlocks = locale === 'es'
    ? [
        {
          label: 'Sitio web',
          mood: 'site',
          heading: 'Para mostrar y sostener la comunicación',
          highlight: 'Sirve para explicar quién sos y generar interés inicial.',
          description: 'Está orientado al marketing: jerarquía de contenidos, storytelling, confianza y llamados a la acción tempranos.',
          examples: [
            'Presentar la propuesta, el equipo y los casos que respaldan la marca.',
            'Concentrar servicios, recursos y contenidos que apoyan campañas.',
            'Convertir visitas en leads preliminares que luego siguen otro proceso.'
          ]
        },
        {
          label: 'Aplicación web',
          mood: 'app',
          heading: 'Para operar y gestionar en tiempo real',
          highlight: 'Sirve para ejecutar procesos críticos del día a día.',
          description: 'Resuelve operación: usuarios con roles, datos vivos, automatización y trazabilidad para tomar decisiones al momento.',
          examples: [
            'Coordinar pedidos, inventario o servicios con estados y responsables.',
            'Centralizar datos, permisos y comunicaciones entre equipos y clientes.',
            'Automatizar flujos que antes dependían de planillas o correos.'
          ]
        }
      ]
    : [
        {
          label: 'Website',
          mood: 'site',
          heading: 'For showing and driving communication',
          highlight: 'It explains who you are and builds initial interest.',
          description: 'Marketing focus: content hierarchy, storytelling, trust signals and early-stage CTAs.',
          examples: [
            'Present the value proposition, team and proof that supports the brand.',
            'Host services, resources and content that fuel campaigns.',
            'Turn visits into preliminary leads that later enter another workflow.'
          ]
        },
        {
          label: 'Web application',
          mood: 'app',
          heading: 'For operating and managing in real time',
          highlight: 'It runs the critical processes of the day-to-day.',
          description: 'It solves operations: role-based users, live data, automation and traceability for immediate decisions.',
          examples: [
            'Coordinate orders, inventory or services with statuses and owners.',
            'Centralize data, permissions and communications across teams and clients.',
            'Automate flows that previously depended on spreadsheets or emails.'
          ]
        }
      ];

  const differenceConclusion = locale === 'es'
    ? 'Cuando el problema ya no es “mostrar”, sino hacer, necesitas una aplicación web.'
    : 'When the problem is no longer “showing” but doing, you need a web application.';

  const whenIntro = locale === 'es'
    ? 'No todos los negocios necesitan una aplicación web. Se vuelve necesaria cuando operar depende de algo más que planillas o software genérico.'
    : 'Not every business needs a web application. It becomes necessary when running operations depends on more than spreadsheets or generic software.';

  const whenSignals = locale === 'es'
    ? [
        {
          title: 'Procesos propios que no encajan',
          highlight: 'Cuando forzás herramientas estándar para que sigan tu forma de trabajar.',
          description: 'Los flujos reales viven en excepciones, parches y notas internas porque ninguna plataforma respeta el recorrido completo.'
        },
        {
          title: 'Crecimiento operativo real',
          highlight: 'Cuando más personas necesitan trabajar sobre la misma información.',
          description: 'La data se duplica, se pisa o se desactualiza y nadie sabe qué versión es la oficial para tomar decisiones.'
        },
        {
          title: 'Dependencia de tareas manuales',
          highlight: 'Cuando repetir pasos a mano ya cuesta tiempo y dinero.',
          description: 'Seguimientos por correo, reportes en Excel y aprobaciones informales dejan huecos y retrasos en cada entrega.'
        },
        {
          title: 'Necesidad de visibilidad en tiempo real',
          highlight: 'Cuando la dirección no puede ver qué pasa sin pedir actualizaciones.',
          description: 'Los datos se reparten en varios sistemas y nadie tiene una lectura única del estado del negocio.'
        }
      ]
    : [
        {
          title: 'Custom processes don’t fit',
          highlight: 'When you keep bending standard tools to follow your way of working.',
          description: 'Real workflows live inside exceptions, patches and internal notes because no platform respects the full journey.'
        },
        {
          title: 'Operational growth is real',
          highlight: 'When more people must work over the same information.',
          description: 'Data gets duplicated, overwritten or outdated and no one knows which version is official to make decisions.'
        },
        {
          title: 'Manual tasks drive the day',
          highlight: 'When repeating steps by hand already costs time and money.',
          description: 'Follow-ups via email, Excel reports and informal approvals leave gaps and delays in every delivery.'
        },
        {
          title: 'Need for real-time visibility',
          highlight: 'When leadership can’t see what’s happening without asking for updates.',
          description: 'Data lives across too many systems and there’s no single view of the business status.'
        }
      ];

  const whenClosing = locale === 'es'
    ? 'Cuando la operación crece más rápido que las herramientas, una aplicación web deja de ser un nice-to-have y se vuelve infraestructura.'
    : 'When operations outgrow the tools, a web application stops being a nice-to-have and becomes infrastructure.';

  const solutionTitle = locale === 'es'
    ? 'Nuestra solución'
    : 'Our solution';

  const solutionLead = locale === 'es'
    ? 'La tecnología acompaña al negocio: primero entendemos qué debe suceder, luego decidimos cómo construirlo.'
    : 'Technology follows the business: we understand what must happen before deciding how to build it.';

  const solutionStatements = locale === 'es'
    ? [
        {
          label: 'Problema real',
          highlight: 'Nombramos la tensión del negocio, no el pedido inicial.',
          description: 'Separar síntoma de causa evita soluciones que sólo replican el caos existente.'
        },
        {
          label: 'Usuarios con nombre y rol',
          highlight: 'Diseñamos para quienes cargan datos o toman decisiones a diario.',
          description: 'La herramienta responde a responsabilidades reales, permisos y necesidades de cada equipo.'
        },
        {
          label: 'Flujos vigentes',
          highlight: 'Partimos de lo que ya funciona para no frenar la operación.',
          description: 'Mapeamos procesos actuales, identificamos pasos críticos y sólo cambiamos lo que aporta valor.'
        },
        {
          label: 'Escala y continuidad',
          highlight: 'Cada módulo se prepara para crecer sin rehacer todo.',
          description: 'Decisiones de datos, permisos y arquitectura contemplan el escenario de los próximos 12 a 24 meses.'
        }
      ]
    : [
        {
          label: 'Real problem',
          highlight: 'We name the business tension, not the initial request.',
          description: 'Separating symptom from cause prevents shipping tools that just mirror existing chaos.'
        },
        {
          label: 'Users with roles',
          highlight: 'We design for the people entering data or deciding every day.',
          description: 'The tool responds to actual responsibilities, permissions and needs across teams.'
        },
        {
          label: 'Existing flows',
          highlight: 'We start from what already works so operations don’t stop.',
          description: 'We map current processes, identify critical steps and touch only what adds value.'
        },
        {
          label: 'Scale and continuity',
          highlight: 'Each module is ready to grow without rebuilding everything.',
          description: 'Data, permissions and architecture decisions consider the next 12–24 months scenario.'
        }
      ];

  const solutionAuthority = locale === 'es'
    ? 'Si la lógica del negocio no está clara, no escribimos una línea de código.'
    : 'If the business logic isn’t clear, we don’t write a single line of code.';

  const includesTitle = locale === 'es'
    ? 'Lo que implica construir un sistema web operativo'
    : 'What building an operational web system really entails';

  const includesIntro = locale === 'es'
    ? 'No entregamos páginas: diseñamos infraestructura digital que soporta decisiones, datos y equipos con el rigor que requiere un sistema crítico.'
    : 'We don’t hand over pages: we design digital infrastructure that supports decisions, data and teams with the rigor a critical system demands.';

  const includesSteps = locale === 'es'
    ? [
        {
          title: 'Diagnóstico operativo y alcance controlado',
          description: 'Relevamos procesos reales, actores y restricciones para definir qué problema se resuelve, qué queda fuera y cómo se medirá el impacto.'
        },
        {
          title: 'Diseño UX/UI orientado a equipos',
          description: 'Convertimos flujos complejos en interacciones claras considerando roles, permisos y dependencias para que cada área sepa qué hacer.'
        },
        {
          title: 'Arquitectura y desarrollo evolutivo',
          description: 'Modelamos datos y servicios pensando en el crecimiento, construyendo módulos que soporten nuevos casos sin rehacer la base.'
        },
        {
          title: 'Gobernanza y seguridad aplicadas al negocio',
          description: 'Definimos roles, auditoría y políticas de acceso alineadas con la estructura y las obligaciones regulatorias de tu organización.'
        },
        {
          title: 'Orquestación de integraciones',
          description: 'Conectamos CRM, ERP, logística y sistemas satélite para evitar duplicación y garantizar una única fuente de verdad.'
        },
        {
          title: 'Puesta en marcha y transferencia operativa',
          description: 'Preparamos datos, capacitamos equipos y documentamos decisiones para que la herramienta funcione sin depender del equipo de desarrollo.'
        }
      ]
    : [
        {
          title: 'Operational diagnosis and managed scope',
          description: 'We map real processes, actors and constraints to define what problem we solve, what stays out and how impact will be measured.'
        },
        {
          title: 'Team-focused UX/UI design',
          description: 'We turn complex flows into clear interactions, considering roles, permissions and dependencies so each area knows what to do.'
        },
        {
          title: 'Evolutive architecture and development',
          description: 'We model data and services for growth, building modules that support new scenarios without rebuilding the foundation.'
        },
        {
          title: 'Business-grade governance and security',
          description: 'We define roles, audit trails and access policies aligned with your structure and regulatory obligations.'
        },
        {
          title: 'Integration orchestration',
          description: 'We connect CRM, ERP, logistics and satellite systems to avoid duplication and ensure a single source of truth.'
        },
        {
          title: 'Rollout and operational handover',
          description: 'We prepare data, train teams and document decisions so the tool runs without depending on the dev team.'
        }
      ];

  const includesClosing = locale === 'es'
    ? 'El alcance se diseña según la complejidad real del proyecto, no al revés.'
    : 'Scope is designed according to the project’s real complexity, not the other way around.';

  const processTitle = locale === 'es'
    ? 'Cómo ordenamos un proyecto a medida'
    : 'How we keep a custom project under control';

  const processIntro = locale === 'es'
    ? 'Cada etapa tiene responsables, artefactos y criterios de validación. Así evitamos sorpresas y mantenemos el sistema bajo control.'
    : 'Each stage has owners, artifacts and validation criteria, so nothing is left to chance and the system stays under control.';

  const processSteps = locale === 'es'
    ? [
        {
          title: 'Análisis y criterios de éxito',
          description: 'Entrevistamos equipos, revisamos datos y definimos qué KPI o señales muestran que la aplicación resuelve el problema.'
        },
        {
          title: 'Definición funcional y alcance negociado',
          description: 'Convertimos la necesidad en módulos, reglas y prioridades, dejando explícito qué queda afuera para evitar sorpresas.'
        },
        {
          title: 'Diseño de flujos y experiencia operativa',
          description: 'Documentamos recorridos, estados y permisos para que cada rol tenga una interfaz que acompañe su tarea real.'
        },
        {
          title: 'Desarrollo iterativo con entregas controladas',
          description: 'Construimos por etapas medibles, habilitando revisiones y pruebas parciales para asegurarnos de que el sistema acompañe la operación.'
        },
        {
          title: 'Pruebas, endurecimiento y despliegue',
          description: 'Validamos datos, automatizaciones y seguridad junto a tu equipo antes de liberar el entorno definitivo.'
        },
        {
          title: 'Monitoreo y acompañamiento inicial',
          description: 'Medimos el comportamiento real, resolvemos ajustes rápidos y dejamos protocolos claros para el equipo interno.'
        }
      ]
    : [
        {
          title: 'Analysis and success criteria',
          description: 'We interview teams, review data and define which KPIs or signals prove the application solves the problem.'
        },
        {
          title: 'Functional definition and negotiated scope',
          description: 'We translate the need into modules, rules and priorities, making explicit what stays out to avoid surprises.'
        },
        {
          title: 'Flow design and operational experience',
          description: 'We document journeys, states and permissions so every role gets an interface that supports their real task.'
        },
        {
          title: 'Iterative development with controlled releases',
          description: 'We build in measurable stages, enabling reviews and partial tests to ensure the system keeps up with operations.'
        },
        {
          title: 'Testing, hardening and rollout',
          description: 'We validate data, automations and security with your team before releasing the final environment.'
        },
        {
          title: 'Early monitoring and support',
          description: 'We track real-world usage, resolve quick adjustments and leave clear protocols for the internal team.'
        }
      ];

  const processClosing = locale === 'es'
    ? 'Cada etapa se valida antes de avanzar; nadie se entera de los problemas al final.'
    : 'Every stage is validated before moving on; no one hears about issues at the end.';

  const idealIntro = locale === 'es'
    ? 'Si ya operás con clientes reales, tu infraestructura digital tiene que acompañar ese ritmo y dejar de depender de héroes internos.'
    : 'If you already operate with real clients, your digital infrastructure must keep that pace instead of relying on internal heroes.';

  const idealFor = locale === 'es'
    ? [
        {
          icon: 'nodes',
          tone: 'teal',
          title: 'Ya operás y necesitás orden real',
          description: 'Tu empresa tiene procesos vivos, equipos que coordinan trabajo diario y no podés detener la operación para “probar”.'
        },
        {
          icon: 'grid',
          tone: 'slate',
          title: 'Las herramientas genéricas dejan huecos',
          description: 'Forzás planillas o software estándar y aun así quedan excepciones, duplicado de datos y permisos sin control.'
        },
        {
          icon: 'link',
          tone: 'violet',
          title: 'Necesitás una capa central de información',
          description: 'Cada área maneja su propia versión de la verdad y necesitás que clientes, operaciones y dirección vean lo mismo.'
        },
        {
          icon: 'signal',
          tone: 'amber',
          title: 'El crecimiento empezó a generar fricción',
          description: 'Más volumen implicó errores, tareas manuales y dependencia de personas clave para sostener cada entrega.'
        }
      ]
    : [
        {
          icon: 'nodes',
          tone: 'teal',
          title: 'You already operate and need real order',
          description: 'Your company runs live processes, teams coordinate daily work and you can’t pause operations “to try things out”.'
        },
        {
          icon: 'grid',
          tone: 'slate',
          title: 'Generic tools keep leaving gaps',
          description: 'You push spreadsheets or off-the-shelf software and still face exceptions, duplicate data and uncontrolled permissions.'
        },
        {
          icon: 'link',
          tone: 'violet',
          title: 'You need a central information layer',
          description: 'Each area runs its own version of the truth and you need clients, ops and leadership to see the same data.'
        },
        {
          icon: 'signal',
          tone: 'amber',
          title: 'Growth already created friction',
          description: 'Higher volume brought errors, manual work and reliance on key people to keep every delivery on track.'
        }
      ];

  const idealClosing = locale === 'es'
    ? 'Si todavía estás validando si existe el problema, este no es el servicio indicado.'
    : 'If you are still validating whether the problem exists, this is not the right service.';

  return (
    <div className="aplicaciones-web-page">
      {/* Hero Section - Igual que otras páginas */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-text">
            <h1>
              {locale === 'es' ? 'Aplicaciones web a medida' : 'Custom web applications to solve real business problems'}
            </h1>
            <p className="hero-subtitle">
              {locale === 'es' ? (
                <>
                  Diseñamos y desarrollamos <strong>aplicaciones web personalizadas</strong> para equipos que necesitan algo más que un sitio corporativo.
                </>
              ) : (
                <>
                  We design and build <strong>custom web applications</strong> for teams that need more than a marketing site.
                </>
              )}
            </p>
            <p className="hero-description">
              {locale === 'es' ? (
                <>
                  Trabajamos sobre procesos reales para <strong>optimizar operaciones</strong>, centralizar datos críticos y crear <strong>herramientas digitales propias</strong> que sostengan el crecimiento.
                </>
              ) : (
                <>
                  We work on real processes to <strong>optimize operations</strong>, centralize critical data and deliver <strong>proprietary digital tools</strong> that sustain scale.
                </>
              )}
            </p>
            <p className="hero-highlight">
              {locale === 'es'
                ? 'Una aplicación web no es una web “más grande”. Es una herramienta de trabajo.'
                : 'A web application is not a “bigger” website. It’s a work tool.'}
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
              background: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80") center/cover'
            }}
          ></motion.div>
        </motion.div>
      </section>

      {/* What is a Web App Section */}
      <section className="what-is-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? '¿Qué es una aplicación web?' : 'What is a web application?'}
          </h2>
          <p className="webapp-lead">{webAppLead}</p>
          <div className="webapp-definition">
            {webAppDefinition.map((sentence, index) => (
              <p key={index}>{sentence}</p>
            ))}
          </div>
          <div className="webapp-usecases">
            {webAppUseCases.map((useCase, index) => (
              <div className="webapp-case" key={index}>
                {renderIcon(useCase.icon, useCase.tone)}
                <h3>{useCase.title}</h3>
                <p>
                  <strong>{useCase.highlight}</strong>{' '}
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
          <p className="webapp-closing">{webAppClosing}</p>
        </motion.div>
      </section>

      {/* Difference Section */}
      <section className="difference-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? '¿En qué se diferencia de un sitio web?' : 'How does it differ from a website?'}
          </h2>
          <p className="difference-intro">{differenceIntro}</p>
          <div className="difference-editorial">
            {differenceBlocks.map((block, index) => (
              <div className={`difference-block ${block.mood === 'site' ? 'is-site' : 'is-app'}`} key={index}>
                <span className="difference-label">{block.label}</span>
                <h3>{block.heading}</h3>
                <p className="difference-text">
                  <strong>{block.highlight}</strong>{' '}
                  {block.description}
                </p>
                <ul>
                  {block.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="difference-conclusion">{differenceConclusion}</p>
        </motion.div>
      </section>

      {/* Problem Section - Editorial */}
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
          <p className="problem-lead">{problemLead}</p>
          <div className="problem-editorial">
            {problemScenarios.map((problem, index) => (
              <motion.div
                key={index}
                className="problem-narrative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                {renderIcon(problem.icon, problem.tone, 'problem-icon-wrapper')}
                <h3>{problem.title}</h3>
                <p className="problem-text">
                  <strong>{problem.highlight}</strong>{' '}
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="problem-impact">
            <p>{problemImpactText}</p>
            <ul>
              {problemImpactPills.map((pill, index) => (
                <li key={index}>{pill}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* When Makes Sense Section */}
      <section className="when-makes-sense-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? '¿Cuándo tiene sentido una aplicación web?' : 'When does a web application make sense?'}
          </h2>
          <p className="when-intro">{whenIntro}</p>
          <div className="when-signals">
            {whenSignals.map((signal, index) => (
              <div className="when-signal" key={index}>
                <h3>{signal.title}</h3>
                <p>
                  <strong>{signal.highlight}</strong>{' '}
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
          <p className="when-note when-note-strong">{whenClosing}</p>
        </motion.div>
      </section>

      {/* Examples Section */}
      <section className="examples-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'Qué se puede hacer con una aplicación web' : 'What can be done with a web application'}
          </h2>
          <p className="examples-intro">{usageIntro}</p>
          <div className="usage-list">
            {usageCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="usage-case"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                {renderIcon(useCase.icon, useCase.tone, 'usage-icon-wrapper')}
                <h3>{useCase.title}</h3>
                <p>
                  <strong>{useCase.highlight}</strong>{' '}
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="examples-conclusion examples-conclusion-strong">
            {locale === 'es'
              ? 'Cada aplicación nace de un proceso real y se diseña para operar el negocio con precisión.'
              : 'Every application starts from a real process and is built to run the business with precision.'}
          </p>
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
          <div className="solution-header">
            <h2>{solutionTitle}</h2>
            <p className="solution-lead">{solutionLead}</p>
          </div>
          <div className="solution-grid">
            {solutionStatements.map((statement, index) => (
              <div className="solution-card" key={statement.label}>
                <span className="solution-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{statement.label}</h3>
                <p>
                  <strong>{statement.highlight}</strong>{' '}
                  {statement.description}
                </p>
              </div>
            ))}
          </div>
          <p className="solution-authority">{solutionAuthority}</p>
        </motion.div>
      </section>

      {/* What Includes Section */}
      <section className="what-includes-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="includes-header">
            <h2>{includesTitle}</h2>
            <p>{includesIntro}</p>
          </div>
          <div className="includes-process">
            {includesSteps.map((step, index) => (
              <div className="include-step" key={step.title}>
                <div className="include-step-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="include-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="includes-closing">{includesClosing}</p>
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
          <div className="process-header">
            <h2>{processTitle}</h2>
            <p>{processIntro}</p>
          </div>
          <div className="process-flow">
            {processSteps.map((step, index) => (
              <div className="process-stage" key={step.title}>
                <div className="process-stage-index">{String(index + 1).padStart(2, '0')}</div>
                <div className="process-stage-body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="process-closing">{processClosing}</p>
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
          <div className="ideal-header">
            <h2>{locale === 'es' ? 'Este servicio es ideal si' : 'This service is ideal if'}</h2>
            <p>{idealIntro}</p>
          </div>
          <div className="ideal-grid">
            {idealFor.map((item, index) => (
              <div className="ideal-block" key={index}>
                {renderIcon(item.icon, item.tone, 'ideal-icon-wrapper')}
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="ideal-closing">{idealClosing}</p>
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
                ? '¿Hablamos de tu aplicación web?' 
                : 'Shall we talk about your web application?'}
            </h2>
            <p>
              {locale === 'es'
                ? 'Si estás evaluando desarrollar una aplicación web a medida para tu negocio, coordinamos una llamada breve y analizamos tu caso.'
                : 'If you\'re considering developing a custom web application for your business, we schedule a brief call and analyze your case.'}
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

export default AplicacionesWeb;
