import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { useLanguage } from "../context/LanguageContext";
import Chatbot from "./Chatbot";
import "./AtencionAlClienteConIA.css";
import aiCustomerServiceImage from "../images/atencionalclienteconia.jpg";

const AtencionAlClienteConIA = () => {
  const { t, locale } = useLanguage();

  useEffect(() => {
    document.body.classList.add("atencion-cliente-ia-page");
    return () => document.body.classList.remove("atencion-cliente-ia-page");
  }, []);

  const iconPalette = {
    teal: "linear-gradient(135deg, #06b6d4, #14b8a6)",
    violet: "linear-gradient(135deg, #8b5cf6, #6366f1)",
    amber: "linear-gradient(135deg, #f97316, #facc15)",
    rose: "linear-gradient(135deg, #f43f5e, #fb7185)",
    slate: "linear-gradient(135deg, #312e81, #475569)",
    emerald: "linear-gradient(135deg, #10b981, #34d399)",
  };

  const iconLibrary = {
    bot: (
      <svg viewBox="0 0 32 32" className="atencion-cliente-ia-icon-svg">
        <rect
          x="6"
          y="8"
          width="20"
          height="16"
          rx="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="16" r="2" fill="currentColor" />
        <circle cx="20" cy="16" r="2" fill="currentColor" />
        <path
          d="M16 20v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    chat: (
      <svg viewBox="0 0 32 32" className="atencion-cliente-ia-icon-svg">
        <path
          d="M6 10h20v10H12l-4 4v-4H6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
        <circle cx="16" cy="15" r="1" fill="currentColor" />
        <circle cx="20" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
    funnel: (
      <svg viewBox="0 0 32 32" className="atencion-cliente-ia-icon-svg">
        <path
          d="M6 8h20l-8 10v6l-4 3v-9z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 32 32" className="atencion-cliente-ia-icon-svg">
        <circle
          cx="16"
          cy="16"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 10v6l4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 32 32" className="atencion-cliente-ia-icon-svg">
        <circle
          cx="10"
          cy="10"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M6 22v-2a4 4 0 014-4h0"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="22"
          cy="10"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M26 22v-2a4 4 0 00-4-4h0"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
    filter: (
      <svg viewBox="0 0 32 32" className="atencion-cliente-ia-icon-svg">
        <path
          d="M4 6h24M8 12h16M12 18h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 32 32" className="atencion-cliente-ia-icon-svg">
        <rect
          x="6"
          y="8"
          width="20"
          height="16"
          rx="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 6V4M20 6V4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M6 14h20" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    target: (
      <svg viewBox="0 0 32 32" className="atencion-cliente-ia-icon-svg">
        <circle
          cx="16"
          cy="16"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.4"
        />
        <circle
          cx="16"
          cy="16"
          r="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 32 32" className="atencion-cliente-ia-icon-svg">
        <path
          d="M8 16l6 6 10-10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    settings: (
      <svg viewBox="0 0 32 32" className="atencion-cliente-ia-icon-svg">
        <circle
          cx="16"
          cy="16"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 8v2m0 12v2m8-8h-2m-12 0H8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21.5 10.5l-1.4 1.4m-8.2 8.2l-1.4 1.4m0-11l1.4 1.4m8.2 8.2l1.4 1.4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
    integration: (
      <svg viewBox="0 0 32 32" className="atencion-cliente-ia-icon-svg">
        <circle
          cx="8"
          cy="8"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="24"
          cy="8"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="16"
          cy="24"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M12 10l8 8m0-8l-8 8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 32 32" className="atencion-cliente-ia-icon-svg">
        <rect x="6" y="18" width="4" height="8" rx="2" fill="currentColor" />
        <rect
          x="14"
          y="12"
          width="4"
          height="14"
          rx="2"
          fill="currentColor"
          opacity="0.7"
        />
        <rect
          x="22"
          y="6"
          width="4"
          height="20"
          rx="2"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>
    ),
  };

  const renderIcon = (
    icon,
    tone = "teal",
    wrapperClass = "atencion-cliente-ia-icon-wrapper",
  ) => (
    <span
      className={wrapperClass}
      style={{ background: iconPalette[tone] || iconPalette.teal }}
    >
      {iconLibrary[icon] || null}
    </span>
  );

  const hero =
    locale === "es"
      ? {
          title:
            " Automatiza tu atención al cliente con agentes de IA que responden en minutos, no en horas",
          subtitle:
            "Diseñamos e implementamos sistemas de atención automatizada para responder leads, asistir clientes actuales y organizar conversaciones de forma eficiente, incluso fuera del horario comercial.",
          lead: "La atención al cliente ya no depende únicamente del horario ni del equipo disponible. Creamos agentes de IA que responden, clasifican y gestionan conversaciones de manera coherente con tu negocio.",
          support: "",
          cta: "Reservar una llamada de 20 minutos",
          duration: "Llamada online de 20 minutos",
        }
      : {
          title:
            "Automate your customer service with AI agents that respond in minutes, not hours",
          subtitle:
            "We design and implement automated service systems to respond to leads, assist current customers, and organize conversations efficiently, even outside business hours.",
          lead: "Customer service no longer depends solely on hours or available staff. We create AI agents that respond, classify, and manage conversations consistently with your business.",
          support: "",
          cta: "Book a 20-minute call",
          duration: "Online 20-minute call",
        };

  const whatIsIntro =
    locale === "es"
      ? "No se trata de un chatbot básico con respuestas genéricas. Se trata de diseñar un sistema automatizado de conversación, entrenado con la información real de tu negocio, capaz de:"
      : "This is not a basic chatbot with generic responses. It's about designing an automated conversation system, trained with your real business information, capable of:";

  const whatIsCapabilities =
    locale === "es"
      ? [
          "Responder preguntas frecuentes",
          "Calificar leads",
          "Derivar consultas complejas",
          "Registrar información relevante",
          "Mantener coherencia con tu tono y procesos",
          "Generar reportes y análisis de conversaciones",
        ]
      : [
          "Answering frequently asked questions",
          "Qualifying leads",
          "Escalating complex queries",
          "Recording relevant information",
          "Maintaining consistency with your tone and processes",
          "Generating reports and conversation analytics",
        ];

  const whatIsNote =
    locale === "es"
      ? "La IA no reemplaza a tu equipo. Organiza, filtra y agiliza el trabajo."
      : "AI doesn't replace your team. It organizes, filters, and accelerates work.";

  const problemIntro =
    locale === "es"
      ? "Muchas empresas enfrentan estos escenarios:"
      : "Many companies face these scenarios:";

  const problemPoints =
    locale === "es"
      ? [
          {
            icon: "clock",
            tone: "rose",
            title: "Mensajes que se acumulan fuera del horario laboral",
            description:
              "Los clientes escriben cuando tu equipo no está disponible y las respuestas se demoran.",
          },
          {
            icon: "funnel",
            tone: "slate",
            title: "Leads que se enfrían por falta de respuesta inmediata",
            description:
              "Cada minuto de espera reduce la probabilidad de conversión.",
          },
          {
            icon: "chat",
            tone: "emerald",
            title: "Información dispersa entre WhatsApp, formularios y redes",
            description:
              "Las conversaciones quedan aisladas en diferentes canales sin centralización.",
          },
          {
            icon: "users",
            tone: "violet",
            title: "Respuestas inconsistentes según quién atienda",
            description:
              "Diferentes miembros del equipo responden con información desigual.",
          },
          {
            icon: "filter",
            tone: "amber",
            title: "Pérdida de tiempo en consultas repetitivas",
            description:
              "El equipo dedica horas a responder las mismas preguntas una y otra vez.",
          },
        ]
      : [
          {
            icon: "clock",
            tone: "rose",
            title: "Messages accumulate outside business hours",
            description:
              "Customers write when your team isn't available and responses are delayed.",
          },
          {
            icon: "funnel",
            tone: "slate",
            title: "Leads go cold due to lack of immediate response",
            description:
              "Every minute of waiting reduces conversion probability.",
          },
          {
            icon: "chat",
            tone: "emerald",
            title:
              "Information scattered across WhatsApp, forms, and social media",
            description:
              "Conversations remain isolated in different channels without centralization.",
          },
          {
            icon: "users",
            tone: "violet",
            title: "Inconsistent responses depending on who responds",
            description:
              "Different team members respond with unequal information.",
          },
          {
            icon: "filter",
            tone: "amber",
            title: "Time wasted on repetitive queries",
            description:
              "The team spends hours answering the same questions over and over.",
          },
        ];

  const problemResult =
    locale === "es"
      ? "La automatización permite responder de forma inmediata y ordenada, incluso cuando el equipo no está conectado."
      : "Automation allows immediate and organized responses, even when the team is not connected.";

  const whatIncludes =
    locale === "es"
      ? [
          {
            step: "1",
            title: "Diseño del flujo de atención",
            description:
              "Definimos cómo debe responder el sistema según el tipo de consulta, el perfil del usuario y el objetivo del negocio.",
          },
          {
            step: "2",
            title: "Creación de agentes de IA personalizados",
            description:
              "Entrenamos el agente con la información real de tu empresa: servicios, procesos, condiciones y preguntas frecuentes.",
          },
          {
            step: "3",
            title: "Integración con canales",
            description:
              "WhatsApp, sitio web, formularios, CRM u otras herramientas donde recibas consultas.",
          },
          {
            step: "4",
            title: "Clasificación y orden de la información",
            description:
              "Organizamos las conversaciones para que el equipo humano reciba solo lo que requiere intervención.",
          },
          {
            step: "5",
            title: "Atención fuera de horario",
            description:
              "El sistema responde 24/7 con coherencia y continuidad.",
          },
        ]
      : [
          {
            step: "1",
            title: "Attention flow design",
            description:
              "We define how the system should respond based on query type, user profile, and business objective.",
          },
          {
            step: "2",
            title: "Custom AI agent creation",
            description:
              "We train the agent with your company's real information: services, processes, conditions, and FAQs.",
          },
          {
            step: "3",
            title: "Channel integration",
            description:
              "WhatsApp, website, forms, CRM, or other tools where you receive inquiries.",
          },
          {
            step: "4",
            title: "Information classification and organization",
            description:
              "We organize conversations so the human team receives only what requires intervention.",
          },
          {
            step: "5",
            title: "After-hours attention",
            description:
              "The system responds 24/7 with coherence and continuity.",
          },
        ];

  const idealIntro =
    locale === "es"
      ? 'La automatización con IA no es para "tener un bot moderno". Es para empresas donde la atención ya impacta directamente en ventas, tiempos y organización interna.'
      : 'AI automation is not for "having a modern bot". It\'s for companies where customer service already directly impacts sales, times, and internal organization.';

  const idealYes =
    locale === "es"
      ? [
          {
            icon: "chat",
            tone: "amber",
            title: "Recibes un volumen constante de consultas",
            description:
              "Ya sea por WhatsApp, formularios, redes o web, y el equipo dedica horas a responder preguntas similares una y otra vez. Cuando el volumen crece, el sistema manual empieza a fallar.",
          },
          {
            icon: "target",
            tone: "teal",
            title: "Pierdes oportunidades por falta de respuesta inmediata",
            description:
              "Hoy el tiempo de respuesta influye directamente en la conversión. Si un lead escribe y recibe respuesta horas después (o al día siguiente), la probabilidad de cierre disminuye. La IA permite responder en minutos, incluso fuera del horario comercial.",
          },
          {
            icon: "filter",
            tone: "violet",
            title: "Tu equipo dedica demasiado tiempo a preguntas básicas",
            description:
              "Horarios, precios, disponibilidad, condiciones, información repetitiva. El equipo humano termina actuando como filtro manual en vez de enfocarse en tareas estratégicas o ventas reales.",
          },
          {
            icon: "settings",
            tone: "rose",
            title: "Necesitas ordenar y centralizar información",
            description:
              "Consultas que llegan por distintos canales y quedan dispersas. Datos que no se registran correctamente. Leads que no se clasifican. Un sistema automatizado permite capturar datos estructurados, clasificar consultas y derivar lo que realmente requiere intervención humana.",
          },
        ]
      : [
          {
            icon: "chat",
            tone: "amber",
            title: "You receive a constant volume of inquiries",
            description:
              "Whether through WhatsApp, forms, social media, or web, and your team spends hours answering similar questions over and over. When volume grows, the manual system starts to fail.",
          },
          {
            icon: "target",
            tone: "teal",
            title: "You lose opportunities due to lack of immediate response",
            description:
              "Today, response time directly influences conversion. If a lead writes and receives a response hours later (or the next day), the probability of closing decreases. AI allows responding in minutes, even outside business hours.",
          },
          {
            icon: "filter",
            tone: "violet",
            title: "Your team spends too much time on basic questions",
            description:
              "Hours, prices, availability, conditions, repetitive information. The human team ends up acting as a manual filter instead of focusing on strategic tasks or real sales.",
          },
          {
            icon: "settings",
            tone: "rose",
            title: "You need to organize and centralize information",
            description:
              "Inquiries arriving through different channels remain scattered. Data not properly recorded. Leads not classified. An automated system allows capturing structured data, classifying inquiries, and escalating what truly requires human intervention.",
          },
        ];

  const idealNo =
    locale === "es"
      ? [
          {
            icon: "clock",
            tone: "slate",
            title: "Recibes muy pocas consultas al mes",
            description:
              "Si el volumen es mínimo, probablemente no justifique una automatización.",
          },
          {
            icon: "settings",
            tone: "amber",
            title: "No tienes procesos internos definidos",
            description:
              "La IA no reemplaza el orden. Si el negocio no tiene claridad sobre cómo atender, responder o vender, primero hay que estructurarlo.",
          },
          {
            icon: "chart",
            tone: "rose",
            title: "No estás dispuesto a organizar tu información",
            description:
              "Un agente de IA necesita reglas claras, mensajes definidos y estructura mínima. Si no existe disposición para ordenar la operación, la automatización no tendrá impacto real.",
          },
        ]
      : [
          {
            icon: "clock",
            tone: "slate",
            title: "You receive very few inquiries per month",
            description:
              "If volume is minimal, automation probably isn't justified.",
          },
          {
            icon: "settings",
            tone: "amber",
            title: "You don't have defined internal processes",
            description:
              "AI doesn't replace order. If the business doesn't have clarity on how to attend, respond, or sell, structure must come first.",
          },
          {
            icon: "chart",
            tone: "rose",
            title: "You're not willing to organize your information",
            description:
              "An AI agent needs clear rules, defined messages, and minimum structure. If there's no willingness to organize operations, automation won't have real impact.",
          },
        ];

  const useCases =
    locale === "es"
      ? [
          {
            icon: "target",
            tone: "teal",
            title: "Calificación automática de leads antes de una llamada",
            description:
              "El sistema puede hacer preguntas clave, filtrar según criterios definidos y agendar reuniones solo con perfiles adecuados. El equipo comercial recibe leads más cualificados y con información previa.",
          },
          {
            icon: "check",
            tone: "violet",
            title: "Atención inicial para ecommerce",
            description:
              "Responder automáticamente disponibilidad, tiempos de entrega, políticas de cambio y seguimiento de pedidos. Reduciendo carga operativa y mejorando experiencia del cliente.",
          },
          {
            icon: "users",
            tone: "amber",
            title: "Respuestas estructuradas en servicios profesionales",
            description:
              "En servicios consultivos o especializados, la IA puede explicar el proceso de trabajo, orientar al usuario, recoger datos iniciales y preparar el terreno antes de la intervención humana.",
          },
          {
            icon: "chat",
            tone: "rose",
            title: "Soporte básico para clientes activos",
            description:
              "Preguntas frecuentes, consultas administrativas o solicitudes repetitivas pueden resolverse sin intervención manual. El equipo se enfoca en incidencias reales o casos complejos.",
          },
          {
            icon: "calendar",
            tone: "emerald",
            title: "Gestión automática de reservas o solicitudes",
            description:
              "Integración con calendarios o sistemas para confirmar citas, enviar recordatorios, recolectar información previa y reducir fricción y errores administrativos.",
          },
        ]
      : [
          {
            icon: "target",
            tone: "teal",
            title: "Automatic lead qualification before a call",
            description:
              "The system can ask key questions, filter based on defined criteria, and schedule meetings only with suitable profiles. The sales team receives more qualified leads with prior information.",
          },
          {
            icon: "check",
            tone: "violet",
            title: "Initial attention for ecommerce",
            description:
              "Automatically respond about availability, delivery times, exchange policies, and order tracking. Reducing operational load and improving customer experience.",
          },
          {
            icon: "users",
            tone: "amber",
            title: "Structured responses in professional services",
            description:
              "In consulting or specialized services, AI can explain the work process, guide the user, collect initial data, and prepare the ground before human intervention.",
          },
          {
            icon: "chat",
            tone: "rose",
            title: "Basic support for active customers",
            description:
              "Frequently asked questions, administrative inquiries, or repetitive requests can be resolved without manual intervention. The team focuses on real incidents or complex cases.",
          },
          {
            icon: "calendar",
            tone: "emerald",
            title: "Automatic management of reservations or requests",
            description:
              "Integration with calendars or systems to confirm appointments, send reminders, collect prior information, and reduce friction and administrative errors.",
          },
        ];

  const useCasesNote =
    locale === "es"
      ? "La automatización no elimina la atención humana. La organiza, la prioriza y la hace más eficiente."
      : "Automation doesn't eliminate human attention. It organizes, prioritizes, and makes it more efficient.";

  const processSteps =
    locale === "es"
      ? [
          {
            title: "Auditoría del proceso actual de atención",
            description:
              "Analizamos canales activos, volumen de consultas, tiempos de respuesta, tipo de preguntas y puntos de fricción. Antes de automatizar, entendemos el flujo completo.",
          },
          {
            title: "Definición de objetivos claros",
            description:
              "No todos los negocios buscan lo mismo. La automatización puede enfocarse en captación de leads, soporte básico, clasificación y filtrado o reducción de carga operativa. Definimos qué debe resolver el sistema.",
          },
          {
            title: "Diseño de flujos conversacionales",
            description:
              "Estructuramos preguntas clave, respuestas coherentes, escenarios alternativos y derivaciones a equipo humano. Cada flujo se construye según tu operación, no con plantillas genéricas.",
          },
          {
            title: "Implementación técnica e integración",
            description:
              "Conectamos el agente con WhatsApp, sitio web, CRM y herramientas internas. La IA no debe vivir aislada. Debe integrarse al sistema existente.",
          },
          {
            title: "Pruebas, ajustes y mejora continua",
            description:
              "Una vez activo, el sistema se analiza y optimiza. Revisamos conversaciones reales, ajustamos respuestas y mejoramos el rendimiento.",
          },
        ]
      : [
          {
            title: "Current service process audit",
            description:
              "We analyze active channels, inquiry volume, response times, question types, and friction points. Before automating, we understand the complete flow.",
          },
          {
            title: "Clear objective definition",
            description:
              "Not all businesses seek the same thing. Automation can focus on lead capture, basic support, classification and filtering, or operational load reduction. We define what the system should solve.",
          },
          {
            title: "Conversational flow design",
            description:
              "We structure key questions, coherent responses, alternative scenarios, and human team escalations. Each flow is built according to your operation, not with generic templates.",
          },
          {
            title: "Technical implementation and integration",
            description:
              "We connect the agent with WhatsApp, website, CRM, and internal tools. AI shouldn't live in isolation. It must integrate with the existing system.",
          },
          {
            title: "Testing, adjustments, and continuous improvement",
            description:
              "Once active, the system is analyzed and optimized. We review real conversations, adjust responses, and improve performance.",
          },
        ];

  const processNote =
    locale === "es"
      ? "No implementamos bots decorativos. Diseñamos sistemas que impactan directamente en tiempos de respuesta, orden interno y eficiencia operativa."
      : "We don't implement decorative bots. We design systems that directly impact response times, internal order, and operational efficiency.";

  const finalCTA =
    locale === "es"
      ? {
          title: "¿Hablamos de atención al cliente con IA?",
          description:
            "Si tu negocio recibe consultas constantes y quieres responder con rapidez y orden, podemos evaluar si la automatización con IA tiene sentido para tu caso.",
          button: "Reservar una llamada de 20 minutos",
          whatsappText:
            "O, si prefieres un contacto más directo, puedes escribirnos por WhatsApp haciendo clic en el siguiente botón.",
          whatsappButton: "¡Contáctanos por Whatsapp ahora!",
          note: "No es una demo masiva. No es una promesa vacía. Es una llamada breve para analizar tu proceso actual y definir si un agente de IA puede optimizarlo.",
        }
      : {
          title: "Shall we talk about AI customer service?",
          description:
            "If your business receives constant inquiries and you want to respond quickly and orderly, we can evaluate if AI automation makes sense for your case.",
          button: "Book a 20-minute call",
          whatsappText:
            "Or, if you prefer more direct contact, you can write to us on WhatsApp by clicking the following button.",
          whatsappButton: "Contact us on WhatsApp now!",
          note: "This is not a massive demo. It's not an empty promise. It's a brief call to analyze your current process and define if an AI agent can optimize it.",
        };

  return (
    <div className="atencion-cliente-ia-page">
      <Helmet>
        <title>{t('meta.atencionClienteIATitle')}</title>
      </Helmet>
      <section className="atencion-cliente-ia-hero">
        <motion.div
          className="atencion-cliente-ia-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="atencion-cliente-ia-hero-text">
            <h1>{hero.title}</h1>
            <p className="hero-lead">{hero.subtitle}</p>
            <p className="hero-support">{hero.lead}</p>
            <motion.a
              href={locale === "es" ? "https://www.globalalora.com/es/llamada-de-relevamiento" : "https://www.globalalora.com/en/discovery-call"}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {hero.cta}
              <span className="duration">{hero.duration}</span>
            </motion.a>
          </div>
          <motion.div
            className="atencion-cliente-ia-hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={aiCustomerServiceImage}
              alt="AI Customer Service Solutions"
              className="atencion-cliente-ia-hero-image"
            />
            <div className="stats-panel">
              <div>
                <strong>24/7</strong>
                <span>
                  {locale === "es"
                    ? "Atención continua sin interrupciones"
                    : "Continuous attention without interruptions"}
                </span>
              </div>
              <div>
                <strong>-85%</strong>
                <span>
                  {locale === "es"
                    ? "Reducción en tiempo de respuesta"
                    : "Reduction in response time"}
                </span>
              </div>
            </div>
            <div className="hero-tagline">
              {locale === "es"
                ? "La IA organiza conversaciones para que tu equipo se enfoque en lo importante."
                : "AI organizes conversations so your team can focus on what matters."}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="what-is-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === "es"
              ? "Qué es la atención al cliente con IA"
              : "What is AI customer service"}
          </h2>
          <div className="what-is-header">
            <p className="what-is-intro">{whatIsIntro}</p>
            <div className="what-is-capabilities">
              {whatIsCapabilities.map((capability, index) => (
                <div key={index} className="capability-item">
                  {renderIcon("check", "emerald")}
                  <span className="capability-text">{capability}</span>
                </div>
              ))}
            </div>
            <p className="what-is-note">{whatIsNote}</p>
          </div>
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
          <h2>
            {locale === "es"
              ? "Qué problemas resuelve"
              : "What problems it solves"}
          </h2>
          <p className="problem-intro">{problemIntro}</p>
          <div className="problem-grid">
            {problemPoints.map((point, index) => (
              <div className="problem-card" key={index}>
                {renderIcon(point.icon, point.tone, "problem-icon")}
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
          <div className="problem-result">{problemResult}</div>
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
          <h2>
            {locale === "es"
              ? "Qué incluye el servicio"
              : "What the service includes"}
          </h2>
          <div className="includes-flow">
            {whatIncludes.map((item, index) => (
              <div className="include-item" key={index}>
                <div className="step-index">{item.step}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="ideal-section">
        <motion.div
          className="ideal-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="ideal-main-title">
            {locale === "es"
              ? "¿Para quién es este servicio?"
              : "Who is this service for?"}
          </h2>
          <p className="ideal-intro-text">{idealIntro}</p>
          <div className="ideal-comparison">
            <div className="ideal-side positive">
              <h3 className="ideal-side-title positive">
                {locale === "es" ? "Ideal si" : "Ideal if"}
              </h3>
              {idealYes.map((item, index) => (
                <div className="ideal-point" key={index}>
                  <div className="ideal-point-header">
                    <div className="ideal-point-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    <h3 className="ideal-point-title">{item.title}</h3>
                  </div>
                  <p className="ideal-point-description">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="ideal-side negative">
              <h3 className="ideal-side-title negative">
                {locale === "es" ? "No es necesario si" : "Not necessary if"}
              </h3>
              {idealNo.map((item, index) => (
                <div className="ideal-point" key={index}>
                  <div className="ideal-point-header">
                    <div className="ideal-point-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                      </svg>
                    </div>
                    <h3 className="ideal-point-title">{item.title}</h3>
                  </div>
                  <p className="ideal-point-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section className="use-cases-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === "es" ? "Casos de uso habituales" : "Common use cases"}
          </h2>
          <p className="section-lead">
            {locale === "es"
              ? "Cada implementación se diseña según el negocio, pero estos son escenarios reales donde la IA aporta valor inmediato:"
              : "Each implementation is designed according to the business, but these are real scenarios where AI provides immediate value:"}
          </p>
          <div className="use-cases-grid">
            {useCases.map((useCase, index) => (
              <div className="use-case-card" key={index}>
                {renderIcon(useCase.icon, useCase.tone)}
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </div>
            ))}
          </div>
          <p className="related-note">{useCasesNote}</p>
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
          <h2>{locale === "es" ? "Cómo trabajamos" : "How we work"}</h2>
          <p className="section-lead">
            {locale === "es"
              ? 'No instalamos un "bot estándar". Diseñamos un sistema alineado con la lógica real de tu negocio.'
              : "We don't install a \"standard bot\". We design a system aligned with your business's real logic."}
          </p>
          <div className="process-flow">
            <div className="process-line"></div>
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="process-index">{index + 1}</div>
                <div className="process-card">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="process-note">{processNote}</p>
        </motion.div>
      </section>

      <section className="final-cta-section">
        <div className="cta-content-wrapper">
          <div className="cta-content">
            <h2>{finalCTA.title}</h2>
            <p>{finalCTA.description}</p>
            <motion.a
              href={locale === "es" ? "https://www.globalalora.com/es/llamada-de-relevamiento" : "https://www.globalalora.com/en/discovery-call"}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {finalCTA.button}
            </motion.a>
            <p className="cta-note">{finalCTA.note}</p>

            <div className="whatsapp-section">
              <p className="whatsapp-text">{finalCTA.whatsappText}</p>
              <motion.a
                href="https://wa.me/+541124629452"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button whatsapp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {finalCTA.whatsappButton}
              </motion.a>
            </div>
          </div>
          <div className="cta-image"></div>
        </div>
      </section>
    </div>
  );
};

export default AtencionAlClienteConIA;
