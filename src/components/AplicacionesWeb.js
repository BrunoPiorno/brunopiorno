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

  const problems = [
    {
      icon: '🔄',
      title: locale === 'es' ? 'Procesos manuales o poco claros' : 'Manual or unclear processes',
      description: locale === 'es'
        ? 'Operaciones que dependen de acciones manuales repetitivas.'
        : 'Operations that depend on repetitive manual actions.'
    },
    {
      icon: '📊',
      title: locale === 'es' ? 'Hojas de cálculo que ya no escalan' : 'Spreadsheets that no longer scale',
      description: locale === 'es'
        ? 'Sistemas basados en Excel que no pueden crecer con el negocio.'
        : 'Excel-based systems that cannot grow with the business.'
    },
    {
      icon: '🔧',
      title: locale === 'es' ? 'Herramientas genéricas que no se adaptan' : 'Generic tools that don\'t adapt',
      description: locale === 'es'
        ? 'Software estándar que no se ajusta a procesos específicos.'
        : 'Standard software that doesn\'t fit specific processes.'
    },
    {
      icon: '📱',
      title: locale === 'es' ? 'Información dispersa en múltiples sistemas' : 'Information scattered across multiple systems',
      description: locale === 'es'
        ? 'Datos distribuidos en diferentes plataformas sin centralización.'
        : 'Data distributed across different platforms without centralization.'
    }
  ];

  const whenMakesSense = [
    {
      icon: '🎯',
      text: locale === 'es' 
        ? 'Tu negocio tiene procesos propios que ninguna herramienta estándar cubre'
        : 'Your business has unique processes that no standard tool covers'
    },
    {
      icon: '🔄',
      text: locale === 'es'
        ? 'Necesitas centralizar operaciones y datos'
        : 'You need to centralize operations and data'
    },
    {
      icon: '⚡',
      text: locale === 'es'
        ? 'Quieres automatizar tareas repetitivas'
        : 'You want to automate repetitive tasks'
    },
    {
      icon: '📈',
      text: locale === 'es'
        ? 'Buscas eficiencia, control y escalabilidad'
        : 'You seek efficiency, control and scalability'
    },
    {
      icon: '👥',
      text: locale === 'es'
        ? 'Necesitas que varios usuarios trabajen sobre el mismo sistema'
        : 'You need multiple users to work on the same system'
    }
  ];

  const examples = [
    {
      icon: '🏢',
      title: locale === 'es' ? 'Sistemas internos de gestión' : 'Internal management systems',
      description: locale === 'es'
        ? 'Clientes, operaciones, estados y procesos internos.'
        : 'Clients, operations, status and internal processes.'
    },
    {
      icon: '👥',
      title: locale === 'es' ? 'Plataformas para clientes o proveedores' : 'Platforms for clients or suppliers',
      description: locale === 'es'
        ? 'Acceso personalizado y gestión de relaciones.'
        : 'Personalized access and relationship management.'
    },
    {
      icon: '📋',
      title: locale === 'es' ? 'Herramientas de seguimiento' : 'Tracking tools',
      description: locale === 'es'
        ? 'Proyectos, pedidos, estados y avances.'
        : 'Projects, orders, status and progress.'
    },
    {
      icon: '📊',
      title: locale === 'es' ? 'Paneles de control y dashboards' : 'Control panels and dashboards',
      description: locale === 'es'
        ? 'Métricas, KPIs y visualización de datos.'
        : 'Metrics, KPIs and data visualization.'
    },
    {
      icon: '🤖',
      title: locale === 'es' ? 'Automatización de procesos' : 'Process automation',
      description: locale === 'es'
        ? 'Tareas administrativas y flujos repetitivos.'
        : 'Administrative tasks and repetitive flows.'
    },
    {
      icon: '💳',
      title: locale === 'es' ? 'Productos digitales por suscripción' : 'Digital subscription products',
      description: locale === 'es'
        ? 'Servicios accesibles vía web con pagos recurrentes.'
        : 'Web-accessible services with recurring payments.'
    }
  ];

  const processSteps = [
    {
      number: '1',
      icon: '🔍',
      title: locale === 'es' ? 'Análisis del problema y los objetivos' : 'Problem and objectives analysis',
      description: locale === 'es'
        ? 'Entendemos tu necesidad actual y lo que quieres lograr.'
        : 'We understand your current need and what you want to achieve.'
    },
    {
      number: '2',
      icon: '📋',
      title: locale === 'es' ? 'Definición funcional y alcance' : 'Functional definition and scope',
      description: locale === 'es'
        ? 'Definimos qué hará la aplicación y cómo lo hará.'
        : 'We define what the application will do and how it will do it.'
    },
    {
      number: '3',
      icon: '🎨',
      title: locale === 'es' ? 'Diseño de flujos y experiencia' : 'Flow and experience design',
      description: locale === 'es'
        ? 'Diseñamos cómo interactuarán los usuarios con el sistema.'
        : 'We design how users will interact with the system.'
    },
    {
      number: '4',
      icon: '💻',
      title: locale === 'es' ? 'Desarrollo de la aplicación web' : 'Web application development',
      description: locale === 'es'
        ? 'Construimos la aplicación con tecnología adecuada.'
        : 'We build the application with appropriate technology.'
    },
    {
      number: '5',
      icon: '🧪',
      title: locale === 'es' ? 'Pruebas, ajustes y entrega final' : 'Testing, adjustments and final delivery',
      description: locale === 'es'
        ? 'Validamos, corregimos y entregamos la solución funcional.'
        : 'We validate, correct and deliver the functional solution.'
    }
  ];

  const idealFor = [
    {
      icon: '🏢',
      text: locale === 'es'
        ? 'Tu empresa ya opera y necesita optimizar procesos'
        : 'Your company already operates and needs to optimize processes'
    },
    {
      icon: '🔧',
      text: locale === 'es'
        ? 'Las herramientas genéricas no se adaptan a tu realidad'
        : 'Generic tools don\'t adapt to your reality'
    },
    {
      icon: '🔄',
      text: locale === 'es'
        ? 'Quieres centralizar información y operaciones'
        : 'You want to centralize information and operations'
    },
    {
      icon: '📈',
      text: locale === 'es'
        ? 'Buscas escalar sin perder control'
        : 'You seek to scale without losing control'
    }
  ];

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
              {locale === 'es'
                ? 'Diseñamos y desarrollamos aplicaciones web personalizadas para empresas que necesitan algo más que un sitio web: necesitan optimizar procesos, centralizar información o crear herramientas digitales propias.'
                : 'We design and develop custom web applications for companies that need more than a website: they need to optimize processes, centralize information or create their own digital tools.'}
            </p>
            <p className="hero-highlight">
              {locale === 'es'
                ? 'Una aplicación web no es una web "más grande". Es una herramienta de trabajo.'
                : 'A web application is not a "bigger" website. It\'s a work tool.'}
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
          <p>
            {locale === 'es'
              ? 'Una aplicación web es un sistema accesible desde el navegador que permite a una empresa operar, gestionar o automatizar procesos de forma digital. No es un sitio informativo. Es una herramienta que se usa todos los días.'
              : 'A web application is a system accessible from the browser that allows a company to operate, manage or automate processes digitally. It\'s not an informational site. It\'s a tool that\'s used every day.'}
          </p>
          <div className="examples-list">
            <h3>{locale === 'es' ? 'Ejemplos simples:' : 'Simple examples:'}</h3>
            <ul>
              <li>{locale === 'es' ? 'Un sistema interno para gestionar clientes' : 'An internal system to manage clients'}</li>
              <li>{locale === 'es' ? 'Una plataforma para que tus usuarios accedan a información' : 'A platform for your users to access information'}</li>
              <li>{locale === 'es' ? 'Un panel para controlar ventas, pedidos o métricas' : 'A panel to control sales, orders or metrics'}</li>
              <li>{locale === 'es' ? 'Una herramienta para automatizar tareas repetitivas' : 'A tool to automate repetitive tasks'}</li>
            </ul>
            <p className="examples-conclusion">
              {locale === 'es'
                ? 'Todo funciona online, sin instalar nada, y se adapta al negocio.'
                : 'Everything works online, without installing anything, and adapts to the business.'}
            </p>
          </div>
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
          <div className="comparison-grid">
            <div className="comparison-card">
              <h3>{locale === 'es' ? 'Un sitio web sirve para:' : 'A website serves to:'}</h3>
              <ul>
                <li>{locale === 'es' ? 'Presentar tu negocio' : 'Present your business'}</li>
                <li>{locale === 'es' ? 'Comunicar servicios' : 'Communicate services'}</li>
                <li>{locale === 'es' ? 'Generar contactos' : 'Generate contacts'}</li>
              </ul>
            </div>
            <div className="comparison-card">
              <h3>{locale === 'es' ? 'Una aplicación web sirve para:' : 'A web application serves to:'}</h3>
              <ul>
                <li>{locale === 'es' ? 'Operar el negocio' : 'Operate the business'}</li>
                <li>{locale === 'es' ? 'Gestionar información' : 'Manage information'}</li>
                <li>{locale === 'es' ? 'Automatizar procesos' : 'Automate processes'}</li>
                <li>{locale === 'es' ? 'Escalar sin sumar complejidad' : 'Scale without adding complexity'}</li>
              </ul>
            </div>
          </div>
          <p className="difference-conclusion">
            {locale === 'es'
              ? 'Cuando el problema ya no es "mostrar", sino hacer, necesitas una aplicación web.'
              : 'When the problem is no longer "showing", but doing, you need a web application.'}
          </p>
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
              ? 'Muchas empresas trabajan con:'
              : 'Many companies work with:'}
          </p>
          <div className="problems-grid">
            {problems.map((problem, index) => (
              <motion.div 
                key={index}
                className="problem-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="problem-icon">{problem.icon}</span>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="problem-result">
            <h3>{locale === 'es' ? 'El resultado:' : 'The result:'}</h3>
            <div className="result-items">
              <span>{locale === 'es' ? 'Pérdida de tiempo' : 'Time loss'}</span>
              <span>{locale === 'es' ? 'Errores operativos' : 'Operational errors'}</span>
              <span>{locale === 'es' ? 'Falta de control' : 'Lack of control'}</span>
              <span>{locale === 'es' ? 'Dificultad para crecer' : 'Difficulty growing'}</span>
            </div>
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
          <p>
            {locale === 'es'
              ? 'Una aplicación web es la solución adecuada si:'
              : 'A web application is the right solution if:'}
          </p>
          <div className="when-makes-sense-list">
            {whenMakesSense.map((item, index) => (
              <div className="when-item" key={index}>
                <span className="when-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <p className="when-note">
            {locale === 'es'
              ? 'No todas las empresas necesitan una aplicación web, pero cuando la necesitan, es un punto de inflexión.'
              : 'Not all companies need a web application, but when they do, it\'s a turning point.'}
          </p>
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
          <p>
            {locale === 'es'
              ? 'Algunos ejemplos concretos de aplicaciones web que desarrollamos:'
              : 'Some concrete examples of web applications we develop:'}
          </p>
          <div className="examples-grid">
            {examples.map((example, index) => (
              <motion.div 
                key={index}
                className="example-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <span className="example-icon">{example.icon}</span>
                <h3>{example.title}</h3>
                <p>{example.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="examples-conclusion">
            {locale === 'es'
              ? 'Cada aplicación se diseña según el proceso real del negocio.'
              : 'Each application is designed according to the real business process.'}
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
          <h2>
            {locale === 'es' ? 'Nuestra solución' : 'Our solution'}
          </h2>
          <p>
            {locale === 'es'
              ? 'En Alora desarrollamos aplicaciones web a medida, diseñadas desde el negocio hacia la tecnología, no al revés. Cada proyecto parte de:'
              : 'At Alora we develop custom web applications, designed from business to technology, not the other way around. Each project starts with:'}
          </p>
          <div className="solution-points">
            <div className="solution-point">
              <span className="solution-icon">🎯</span>
              <div>
                <h3>{locale === 'es' ? 'El problema real a resolver' : 'The real problem to solve'}</h3>
                <p>{locale === 'es' ? 'Entendemos la necesidad fundamental' : 'We understand the fundamental need'}</p>
              </div>
            </div>
            <div className="solution-point">
              <span className="solution-icon">👥</span>
              <div>
                <h3>{locale === 'es' ? 'Los usuarios que utilizarán la herramienta' : 'The users who will use the tool'}</h3>
                <p>{locale === 'es' ? 'Diseñamos para quienes realmente la usarán' : 'We design for those who will actually use it'}</p>
              </div>
            </div>
            <div className="solution-point">
              <span className="solution-icon">🔄</span>
              <div>
                <h3>{locale === 'es' ? 'Los flujos de trabajo existentes' : 'Existing workflows'}</h3>
                <p>{locale === 'es' ? 'Respetamos y mejoramos procesos actuales' : 'We respect and improve current processes'}</p>
              </div>
            </div>
            <div className="solution-point">
              <span className="solution-icon">📈</span>
              <div>
                <h3>{locale === 'es' ? 'La necesidad de crecimiento futuro' : 'The need for future growth'}</h3>
                <p>{locale === 'es' ? 'Construimos pensando en la escalabilidad' : 'We build thinking about scalability'}</p>
              </div>
            </div>
          </div>
          <p className="solution-conclusion">
            {locale === 'es'
              ? 'La tecnología se adapta a tu operación.'
              : 'Technology adapts to your operation.'}
          </p>
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
          <h2>
            {locale === 'es' ? 'Qué incluye el desarrollo de aplicaciones web' : 'What web application development includes'}
          </h2>
          <div className="includes-grid">
            <motion.div 
              className="include-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="include-icon">📋</span>
              <h3>{locale === 'es' ? 'Análisis' : 'Analysis'}</h3>
              <p>{locale === 'es' ? 'Funcional y alcance' : 'Functional and scope'}</p>
            </motion.div>
            <motion.div 
              className="include-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="include-icon">🎨</span>
              <h3>{locale === 'es' ? 'Diseño UX/UI' : 'UX/UI Design'}</h3>
              <p>{locale === 'es' ? 'Flujos e interfaz' : 'Flows and interface'}</p>
            </motion.div>
            <motion.div 
              className="include-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="include-icon">💻</span>
              <h3>{locale === 'es' ? 'Desarrollo' : 'Development'}</h3>
              <p>{locale === 'es' ? 'Frontend y backend' : 'Frontend and backend'}</p>
            </motion.div>
            <motion.div 
              className="include-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="include-icon">�</span>
              <h3>{locale === 'es' ? 'Seguridad' : 'Security'}</h3>
              <p>{locale === 'es' ? 'Usuarios y permisos' : 'Users and permissions'}</p>
            </motion.div>
            <motion.div 
              className="include-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="include-icon">🔗</span>
              <h3>{locale === 'es' ? 'Integraciones' : 'Integrations'}</h3>
              <p>{locale === 'es' ? 'Sistemas externos' : 'External systems'}</p>
            </motion.div>
            <motion.div 
              className="include-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="include-icon">📚</span>
              <h3>{locale === 'es' ? 'Entrega' : 'Delivery'}</h3>
              <p>{locale === 'es' ? 'Documentación y funcional' : 'Documentation and functional'}</p>
            </motion.div>
          </div>
          <p className="includes-note">
            {locale === 'es'
              ? 'El alcance se define según la complejidad del proyecto.'
              : 'The scope is defined according to the project complexity.'}
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
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="process-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="process-number">{step.number}</div>
                <span className="process-icon">{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="process-conclusion">
            {locale === 'es'
              ? 'Proceso claro, colaborativo y orientado a soluciones reales.'
              : 'Clear, collaborative process focused on real solutions.'}
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
          <div className="ideal-for-list">
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
