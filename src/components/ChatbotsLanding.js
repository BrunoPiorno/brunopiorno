import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet-async';
import { useLanguage } from "../context/LanguageContext";
import Chatbot from "./Chatbot";
import heroImage from "../images/alorawha.png";
import "./ChatbotsLandingStyles.css";

// Imágenes
const ctaImage = "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=600&q=80";

const ChatbotsLanding = () => {
  const { t, locale } = useLanguage();

  useEffect(() => {
    document.body.classList.add("chatbots-landing-page");
    return () => document.body.classList.remove("chatbots-landing-page");
  }, []);

  const iconPalette = {
    teal: "linear-gradient(135deg, #06b6d4, #14b8a6)",
    violet: "linear-gradient(135deg, #8b5cf6, #6366f1)",
    amber: "linear-gradient(135deg, #f97316, #facc15)",
    rose: "linear-gradient(135deg, #f43f5e, #fb7185)",
    emerald: "linear-gradient(135deg, #10b981, #34d399)",
    indigo: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  };

  const iconLibrary = {
    bot: (
      <svg viewBox="0 0 32 32" className="chatbots-icon-svg">
        <rect x="6" y="8" width="20" height="16" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="16" r="2" fill="currentColor" />
        <circle cx="20" cy="16" r="2" fill="currentColor" />
        <path d="M16 20v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    chat: (
      <svg viewBox="0 0 32 32" className="chatbots-icon-svg">
        <path d="M6 10h20v10H12l-4 4v-4H6z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
        <circle cx="16" cy="15" r="1" fill="currentColor" />
        <circle cx="20" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
    calendar: (
      <svg viewBox="0 0 32 32" className="chatbots-icon-svg">
        <rect x="4" y="6" width="24" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M4 12h24" stroke="currentColor" strokeWidth="2" />
        <circle cx="10" cy="18" r="1.5" fill="currentColor" />
        <circle cx="16" cy="18" r="1.5" fill="currentColor" />
        <circle cx="22" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
    lead: (
      <svg viewBox="0 0 32 32" className="chatbots-icon-svg">
        <circle cx="16" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M6 28c0-6 5-10 10-10s10 4 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    whatsapp: (
      <svg viewBox="0 0 32 32" className="chatbots-icon-svg">
        <path d="M16 4c-6.6 0-12 5.4-12 12 0 2.1.5 4.1 1.5 5.9L3 28l6.5-1.7A11.9 11.9 0 0 0 16 28c6.6 0 12-5.4 12-12S22.6 4 16 4z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 14c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" fill="currentColor" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 32 32" className="chatbots-icon-svg">
        <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M16 10v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 32 32" className="chatbots-icon-svg">
        <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };

  const content = {
    es: {
      metaTitle: "Chatbots Inteligentes para Responder Consultas 24/7 | Alora",
      metaDescription: "Chatbots con IA para responder consultas, agendar citas y captar leads automáticamente. Caso de éxito: LIDIA - gestión de turnos por WhatsApp.",
      heroTitle: "Chatbots que responden, agendan y convierten",
      heroSubtitle: "Automatizá la atención al cliente las 24hs. Tu chatbot responde consultas, agenda citas y captura leads mientras vos te enfocás en lo importante.",
      ctaPrimary: "Hablar con un experto (gratis)",
      ctaSecondary: "Ver casos de éxito",
      problemTitle: "¿Cuántas oportunidades perdés por no responder a tiempo?",
      problemItems: [
        { icon: "clock", text: "Consultas que llegan fuera de horario y no tienen respuesta" },
        { icon: "chat", text: "Clientes que esperan horas (o días) por una respuesta simple" },
        { icon: "lead", text: "Leads que se enfrían mientras contestás otros mensajes" },
      ],
      solutionTitle: "3 formas de que tu chatbot trabaje para vos",
      modalities: [
        {
          icon: "chat",
          title: "Responder Consultas",
          description: "El chatbot responde preguntas frecuentes instantáneamente: precios, horarios, disponibilidad, ubicación. Sin esperas, sin personal dedicado.",
          features: ["Respuestas 24/7", "Base de conocimiento personalizable", "Derivación inteligente a humanos"],
          gradient: iconPalette.teal,
        },
        {
          icon: "calendar",
          title: "Agendar Citas",
          description: "El cliente agenda turnos directamente por WhatsApp o web. El chatbot verifica disponibilidad, confirma la cita y envía recordatorios automáticos.",
          features: ["Integración con calendarios", "Recordatorios automáticos", "Cancelaciones y reprogramación"],
          gradient: iconPalette.violet,
        },
        {
          icon: "lead",
          title: "Captar Leads",
          description: "Calificá leads automáticamente: el chatbot pregunta datos clave, guarda la información y la envía a tu CRM o email en tiempo real.",
          features: ["Formularios conversacionales", "Calificación automática", "Integración con Email/CRM"],
          gradient: iconPalette.rose,
        },
      ],
      caseStudyTitle: "Caso de éxito: LIDIA",
      caseStudySubtitle: "Sistema de gestión de turnos por WhatsApp para clínicas de salud y estética",
      caseStudyProblem: "Las clínicas perdían turnos porque nadie respondía los mensajes de WhatsApp fuera del horario de atención. Pacientes que escribían a la noche o fin de semana se iban a la competencia sin avisar.",
      caseStudySolution: "Desarrollamos LIDIA: un chatbot inteligente que agenda turnos automáticamente por WhatsApp, 24/7. Responde consultas, verifica disponibilidad, confirma citas y envía recordatorios — todo sin intervención humana.",
      caseStudyResults: [
        { number: "20+", label: "clínicas usando LIDIA" },
        { number: "8-10", label: "turnos recuperados por semana" },
        { number: "24/7", label: "disponibilidad" },
        { number: "ROI", label: "inmediato" },
      ],
      testimonials: [
        {
          quote: "Antes perdíamos 8-10 turnos por semana. En el primer mes con LIDIA recuperamos $1.200.000 que antes se iban. Es como tener una recepcionista que nunca duerme.",
          author: "Dr. Martín Aguirre",
          role: "Odontólogo · Clínica Dental Sur, CABA",
        },
        {
          quote: "El 40% de mis turnos se agenda fuera del horario de atención. Antes esos turnos se perdían. Ahora LIDIA los captura y yo los veo el lunes ya confirmados con seña pagada.",
          author: "Lic. Camila Romero",
          role: "Directora · Centro Estética Pura Vida, Rosario",
        },
        {
          quote: "En la primera semana LIDIA agendó 15 turnos que antes hubiera perdido. En 7 días ya había pagado el costo de 3 meses de suscripción. El ROI es inmediato.",
          author: "Dr. Federico López",
          role: "Odontólogo · Consultorio López & Asoc., Córdoba",
        },
      ],
      benefitsTitle: "¿Por qué tu negocio necesita un chatbot?",
      benefits: [
        { icon: "clock", title: "Disponibilidad 24/7", description: "Nunca más perdás una consulta por no responder a tiempo" },
        { icon: "whatsapp", title: "WhatsApp integrado", description: "Tus clientes usan el canal que ya conocen, sin apps nuevas" },
        { icon: "bot", title: "Respuestas instantáneas", description: "Consultas resueltas en segundos, no en horas" },
        { icon: "lead", title: "Más leads calificados", description: "Captura y clasifica automáticamente los contactos potenciales" },
      ],
      techTitle: "IA de última generación a tu servicio",
      techSubtitle: "Tecnología que diferencia a los líderes de los seguidores",
      techItems: [
        { icon: "🧠", title: "GPT-4, Claude & Gemini", desc: "OpenAI, Anthropic y Google - los mejores modelos de IA para respuestas humanas" },
        { icon: "💬", title: "WhatsApp Business API", desc: "Integración oficial de Meta con verificación de número de empresa" },
        { icon: "🔌", title: "100+ Integraciones", desc: "HubSpot, Salesforce, Pipedrive, Google Calendar, Slack y más" },
        { icon: "⚡", title: "Respuesta < 1 segundo", desc: "Infraestructura global con latencia mínima garantizada" },
        { icon: "🔒", title: "Seguridad Enterprise", desc: "Encriptación end-to-end, GDPR compliant, SOC 2 Type II" },
        { icon: "📊", title: "Analytics en tiempo real", desc: "Dashboard con métricas de conversión, engagement y ROI" },
      ],
      finalCtaTitle: "¿Listo para automatizar tu atención al cliente?",
      finalCtaSubtitle: "Agendá una llamada gratuita y descubrí cómo un chatbot puede transformar tu negocio.",
      finalCtaButton: "Quiero mi chatbot →",
      faqTitle: "Preguntas frecuentes sobre chatbots con IA",
      faqs: [
        {
          question: "¿Cuánto cuesta implementar un chatbot con IA?",
          answer: "El costo varía según la complejidad del sistema, el volumen de consultas y las integraciones necesarias. Trabajamos con planes adaptados a pymes y profesionales. La inversión se recupera típicamente en el primer mes con los turnos o leads que antes se perdían fuera del horario de atención. Podés pedirte una cotización personalizada en la llamada gratuita.",
        },
        {
          question: "¿En cuánto tiempo está activo el chatbot?",
          answer: "Un sistema de chatbot personalizado puede estar operativo entre 2 y 4 semanas desde el inicio del proyecto, dependiendo de la complejidad del flujo conversacional y las integraciones requeridas (CRM, calendario, WhatsApp Business API, etc.).",
        },
        {
          question: "¿El chatbot funciona con WhatsApp?",
          answer: "Sí. Utilizamos la WhatsApp Business API oficial de Meta, que permite automatizar conversaciones en el número de WhatsApp de tu empresa. Tus clientes escriben como siempre y el chatbot responde automáticamente, sin que ellos noten diferencia.",
        },
        {
          question: "¿Qué diferencia hay entre un chatbot y un agente de IA?",
          answer: "Un chatbot clásico sigue flujos de conversación fijos con opciones predefinidas. Un agente de IA usa modelos de lenguaje avanzados (como GPT-4 o Claude) entrenados con la información real de tu negocio, capaz de entender preguntas abiertas y responder con coherencia contextual, como lo haría un empleado que conoce la empresa.",
        },
        {
          question: "¿El chatbot reemplaza a mi equipo de atención?",
          answer: "No. El chatbot gestiona las consultas repetitivas, responde fuera de horario y filtra los leads. Tu equipo humano se enfoca en conversaciones que realmente requieren intervención: cierres de venta, casos complejos o clientes VIP. La IA organiza el trabajo, no lo reemplaza.",
        },
        {
          question: "¿Puedo controlar qué responde el chatbot?",
          answer: "Completamente. El sistema se entrena exclusivamente con la información de tu negocio: servicios, precios, procesos, preguntas frecuentes y tono de comunicación. También podés definir cuándo derivar la conversación a una persona real y cómo manejar casos que el bot no puede resolver.",
        },
      ],
    },
    en: {
      metaTitle: "AI Chatbots for Customer Support 24/7 | Alora",
      metaDescription: "AI-powered chatbots to answer questions, schedule appointments and capture leads automatically. Success case: LIDIA - appointment management via WhatsApp.",
      heroTitle: "Chatbots that answer, schedule and convert",
      heroSubtitle: "Automate customer support 24/7. Your chatbot answers questions, books appointments and captures leads while you focus on what matters.",
      ctaPrimary: "Talk to an expert (free)",
      ctaSecondary: "See success stories",
      problemTitle: "How many opportunities do you lose by not responding on time?",
      problemItems: [
        { icon: "clock", text: "Inquiries that arrive after hours and get no response" },
        { icon: "chat", text: "Clients waiting hours (or days) for a simple answer" },
        { icon: "lead", text: "Leads that go cold while you answer other messages" },
      ],
      solutionTitle: "3 ways your chatbot works for you",
      modalities: [
        {
          icon: "chat",
          title: "Answer Questions",
          description: "The chatbot answers FAQs instantly: pricing, hours, availability, location. No waiting, no dedicated staff needed.",
          features: ["24/7 responses", "Customizable knowledge base", "Smart human handoff"],
          gradient: iconPalette.teal,
        },
        {
          icon: "calendar",
          title: "Schedule Appointments",
          description: "Clients book appointments directly via WhatsApp or web. The chatbot checks availability, confirms the booking and sends automatic reminders.",
          features: ["Calendar integration", "Automatic reminders", "Cancellations & rescheduling"],
          gradient: iconPalette.violet,
        },
        {
          icon: "lead",
          title: "Capture Leads",
          description: "Qualify leads automatically: the chatbot asks key questions, saves the information and sends it to your CRM or email in real-time.",
          features: ["Conversational forms", "Automatic qualification", "Email/CRM integration"],
          gradient: iconPalette.rose,
        },
      ],
      caseStudyTitle: "Success Story: LIDIA",
      caseStudySubtitle: "WhatsApp appointment management system for health & beauty clinics",
      caseStudyProblem: "Clinics were losing appointments because no one answered WhatsApp messages outside business hours. Patients messaging at night or on weekends went to competitors without notice.",
      caseStudySolution: "We developed LIDIA: an intelligent chatbot that schedules appointments automatically via WhatsApp, 24/7. It answers questions, checks availability, confirms bookings and sends reminders — all without human intervention.",
      caseStudyResults: [
        { number: "20+", label: "clinics using LIDIA" },
        { number: "8-10", label: "appointments recovered per week" },
        { number: "24/7", label: "availability" },
        { number: "ROI", label: "immediate" },
      ],
      testimonials: [
        {
          quote: "We used to lose 8-10 appointments per week. In the first month with LIDIA we recovered $1,200,000 that was going elsewhere. It's like having a receptionist that never sleeps.",
          author: "Dr. Martín Aguirre",
          role: "Dentist · Clínica Dental Sur, Buenos Aires",
        },
        {
          quote: "40% of my appointments are booked outside business hours. Before those were lost. Now LIDIA captures them and I see them confirmed with deposit paid on Monday morning.",
          author: "Lic. Camila Romero",
          role: "Director · Centro Estética Pura Vida, Rosario",
        },
        {
          quote: "In the first week LIDIA booked 15 appointments I would have lost. In 7 days it had already paid for 3 months of subscription. The ROI is immediate.",
          author: "Dr. Federico López",
          role: "Dentist · Consultorio López & Asoc., Córdoba",
        },
      ],
      benefitsTitle: "Why does your business need a chatbot?",
      benefits: [
        { icon: "clock", title: "24/7 Availability", description: "Never lose an inquiry for not responding on time" },
        { icon: "whatsapp", title: "WhatsApp Integrated", description: "Your clients use the channel they already know, no new apps" },
        { icon: "bot", title: "Instant Responses", description: "Queries resolved in seconds, not hours" },
        { icon: "lead", title: "More Qualified Leads", description: "Automatically capture and classify potential customers" },
      ],
      techTitle: "Cutting-edge AI at your service",
      techSubtitle: "Technology that separates leaders from followers",
      techItems: [
        { icon: "🧠", title: "GPT-4, Claude & Gemini", desc: "OpenAI, Anthropic and Google - the best AI models for human-like responses" },
        { icon: "💬", title: "WhatsApp Business API", desc: "Official Meta integration with business number verification" },
        { icon: "🔌", title: "100+ Integrations", desc: "HubSpot, Salesforce, Pipedrive, Google Calendar, Slack and more" },
        { icon: "⚡", title: "< 1 second response", desc: "Global infrastructure with guaranteed minimal latency" },
        { icon: "🔒", title: "Enterprise Security", desc: "End-to-end encryption, GDPR compliant, SOC 2 Type II" },
        { icon: "📊", title: "Real-time Analytics", desc: "Dashboard with conversion, engagement and ROI metrics" },
      ],
      finalCtaTitle: "Ready to automate your customer support?",
      finalCtaSubtitle: "Schedule a free call and find out how a chatbot can transform your business.",
      finalCtaButton: "I want my chatbot →",
      faqTitle: "Frequently asked questions about AI chatbots",
      faqs: [
        {
          question: "How much does it cost to implement an AI chatbot?",
          answer: "The cost varies depending on the complexity of the system, query volume, and required integrations. We work with plans adapted to SMBs and professionals. The investment is typically recovered in the first month with the appointments or leads that were previously lost outside business hours.",
        },
        {
          question: "How long until the chatbot is live?",
          answer: "A custom chatbot system can be operational within 2 to 4 weeks from project start, depending on the complexity of the conversational flow and required integrations (CRM, calendar, WhatsApp Business API, etc.).",
        },
        {
          question: "Does the chatbot work with WhatsApp?",
          answer: "Yes. We use Meta's official WhatsApp Business API, which allows automating conversations on your company's WhatsApp number. Your customers write as usual and the chatbot responds automatically, without them noticing any difference.",
        },
        {
          question: "What's the difference between a chatbot and an AI agent?",
          answer: "A classic chatbot follows fixed conversation flows with predefined options. An AI agent uses advanced language models (like GPT-4 or Claude) trained with your real business information, capable of understanding open-ended questions and responding with contextual coherence.",
        },
        {
          question: "Does the chatbot replace my customer service team?",
          answer: "No. The chatbot handles repetitive queries, responds outside business hours, and filters leads. Your human team focuses on conversations that truly require intervention: sales closings, complex cases, or VIP clients. AI organizes the work, it doesn't replace it.",
        },
        {
          question: "Can I control what the chatbot responds?",
          answer: "Completely. The system is trained exclusively with your business information: services, prices, processes, FAQs, and communication tone. You can also define when to escalate the conversation to a real person and how to handle cases the bot cannot resolve.",
        },
      ],
    },
  };

  const c = content[locale];
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Helmet>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDescription} />
        <meta name="keywords" content={locale === 'es' ? 'chatbot IA, chatbot WhatsApp, automatización atención al cliente, chatbot para clínicas, agenda de turnos automática, chatbot Argentina, LIDIA chatbot' : 'AI chatbot, WhatsApp chatbot, customer service automation, clinic chatbot, appointment booking bot, chatbot Argentina'} />
        <link rel="canonical" href={`https://www.globalalora.com/${locale}/soluciones/chatbots`} />
        <link rel="alternate" hreflang="es" href="https://www.globalalora.com/es/soluciones/chatbots" />
        <link rel="alternate" hreflang="en" href="https://www.globalalora.com/en/soluciones/chatbots" />
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.metaDescription} />
        <meta property="og:image" content="https://www.globalalora.com/aloralogo.png" />
        <meta property="og:url" content={`https://www.globalalora.com/${locale}/soluciones/chatbots`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={c.metaTitle} />
        <meta name="twitter:description" content={c.metaDescription} />
        <meta name="twitter:image" content="https://www.globalalora.com/aloralogo.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": c.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": locale === 'es' ? "Chatbots con IA para empresas — Alora" : "AI Chatbots for businesses — Alora",
          "provider": { "@type": "Organization", "name": "Alora", "url": "https://www.globalalora.com" },
          "description": c.metaDescription,
          "serviceType": "AI Chatbot Development",
          "areaServed": ["Argentina", "España", "México", "Chile", "Colombia"],
          "url": `https://www.globalalora.com/${locale}/soluciones/chatbots`,
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="chatbots-hero">
        <div className="chatbots-container">
          <div className="chatbots-hero-content">
            <motion.div
              className="chatbots-hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="chatbots-badge">
                <span className="chatbots-badge-icon">🤖</span>
                {locale === 'es' ? 'Chatbots con IA' : 'AI-Powered Chatbots'}
              </div>
              <h1 className="chatbots-hero-title">{c.heroTitle}</h1>
              <p className="chatbots-hero-subtitle">{c.heroSubtitle}</p>
              <div className="chatbots-hero-cta">
                <Link to={locale === 'es' ? "/es/llamada-de-relevamiento" : "/en/discovery-call"} className="chatbots-btn-primary">
                  {c.ctaPrimary}
                </Link>
                <a href="#caso-exito" className="chatbots-btn-secondary">
                  {c.ctaSecondary}
                </a>
              </div>
            </motion.div>
            <motion.div
              className="chatbots-hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="chatbots-hero-image-wrapper">
                <img 
                  src={heroImage} 
                  alt="Chatbot AI Interface" 
                  className="chatbots-hero-image"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="chatbots-problem">
        <div className="chatbots-container">
          <motion.h2
            className="chatbots-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {c.problemTitle}
          </motion.h2>
          <div className="chatbots-problem-grid">
            {c.problemItems.map((item, index) => (
              <motion.div
                key={index}
                className="chatbots-problem-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="chatbots-problem-icon" style={{ background: iconPalette.rose }}>
                  {iconLibrary[item.icon]}
                </div>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Modalities */}
      <section className="chatbots-solution">
        <div className="chatbots-container">
          <motion.h2
            className="chatbots-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {c.solutionTitle}
          </motion.h2>
          <div className="chatbots-modalities-grid">
            {c.modalities.map((mod, index) => (
              <motion.div
                key={index}
                className="chatbots-modality-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="chatbots-modality-icon" style={{ background: mod.gradient }}>
                  {iconLibrary[mod.icon]}
                </div>
                <h3 className="chatbots-modality-title">{mod.title}</h3>
                <p className="chatbots-modality-desc">{mod.description}</p>
                <ul className="chatbots-modality-features">
                  {mod.features.map((feature, fIndex) => (
                    <li key={fIndex}>
                      <span className="chatbots-check">{iconLibrary.check}</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - LIDIA */}
      <section id="caso-exito" className="chatbots-case-study">
        <div className="chatbots-container">
          <div className="chatbots-case-header">
            <span className="chatbots-case-badge">{locale === 'es' ? 'Caso de Éxito' : 'Success Case'}</span>
            <h2 className="chatbots-case-title">{c.caseStudyTitle}</h2>
            <p className="chatbots-case-subtitle">{c.caseStudySubtitle}</p>
          </div>

          <div className="chatbots-case-content">
            <div className="chatbots-case-text">
              <div className="chatbots-case-block">
                <h4>{locale === 'es' ? 'El Problema' : 'The Problem'}</h4>
                <p>{c.caseStudyProblem}</p>
              </div>
              <div className="chatbots-case-block">
                <h4>{locale === 'es' ? 'La Solución' : 'The Solution'}</h4>
                <p>{c.caseStudySolution}</p>
              </div>
            </div>

            <div className="chatbots-case-stats">
              {c.caseStudyResults.map((stat, index) => (
                <motion.div
                  key={index}
                  className="chatbots-stat-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="chatbots-stat-number">{stat.number}</span>
                  <span className="chatbots-stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="chatbots-testimonials">
            {c.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="chatbots-testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="chatbots-testimonial-quote">"{testimonial.quote}"</div>
                <div className="chatbots-testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="chatbots-benefits">
        <div className="chatbots-container">
          <motion.h2
            className="chatbots-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {c.benefitsTitle}
          </motion.h2>
          <div className="chatbots-benefits-grid">
            {c.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="chatbots-benefit-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="chatbots-benefit-icon" style={{ background: iconPalette.emerald }}>
                  {iconLibrary[benefit.icon]}
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="chatbots-tech">
        <div className="chatbots-container">
          <div className="chatbots-tech-header">
            <motion.span
              className="chatbots-tech-badge"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              🚀 {locale === 'es' ? 'Stack Tecnológico' : 'Tech Stack'}
            </motion.span>
            <motion.h2
              className="chatbots-section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {c.techTitle}
            </motion.h2>
            <motion.p
              className="chatbots-tech-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {c.techSubtitle}
            </motion.p>
          </div>
          <div className="chatbots-tech-grid">
            {c.techItems.map((item, index) => (
              <motion.div
                key={index}
                className="chatbots-tech-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="chatbots-tech-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="chatbots-related">
        <div className="chatbots-container">
          <motion.p
            className="chatbots-related-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {locale === 'es' ? '¿Buscás algo más amplio?' : 'Looking for something broader?'}
          </motion.p>
          <motion.div
            className="chatbots-related-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="chatbots-related-icon" style={{ background: "linear-gradient(135deg, #06b6d4, #14b8a6)" }}>
              {iconLibrary.bot}
            </div>
            <div className="chatbots-related-text">
              <strong>{locale === 'es' ? 'Atención al cliente con IA' : 'AI Customer Service'}</strong>
              <span>{locale === 'es' ? 'Sistema completo de atención automatizada: varios canales, clasificación de leads y mejora continua.' : 'Complete automated service system: multiple channels, lead classification and continuous improvement.'}</span>
            </div>
            <Link to={`/${locale}/soluciones/atencion-cliente-ia`} className="chatbots-related-link">
              {locale === 'es' ? 'Ver servicio →' : 'See service →'}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="chatbots-faq">
        <div className="chatbots-container">
          <motion.h2
            className="chatbots-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {c.faqTitle}
          </motion.h2>
          <div className="chatbots-faq-list">
            {c.faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`chatbots-faq-item ${openFaq === index ? 'chatbots-faq-item--open' : ''}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  className="chatbots-faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <span className="chatbots-faq-icon">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="chatbots-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="chatbots-final-cta">
        <div className="chatbots-container">
          <motion.div
            className="chatbots-cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="chatbots-cta-content">
              <div className="chatbots-cta-text">
                <h2>{c.finalCtaTitle}</h2>
                <p>{c.finalCtaSubtitle}</p>
                <div className="chatbots-cta-buttons">
                  <Link to={locale === 'es' ? "/es/llamada-de-relevamiento" : "/en/discovery-call"} className="chatbots-btn-primary chatbots-btn-large">
                    {c.finalCtaButton}
                  </Link>
                </div>
              </div>
              <div className="chatbots-cta-image">
                <img 
                  src={ctaImage} 
                  alt="AI Technology" 
                  className="chatbots-cta-img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Chatbot />
    </>
  );
};

export default ChatbotsLanding;
