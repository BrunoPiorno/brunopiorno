import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import Chatbot from './Chatbot';
import mantenimientoImage from '../images/mantenimiento-web.png';
import './MatenimientoWeb.css';

const MatenimientoWeb = () => {
  const { t, locale } = useLanguage();

  useEffect(() => {
    document.body.classList.add('mantenimiento-web-page');
    return () => document.body.classList.remove('mantenimiento-web-page');
  }, []);

  const hero = locale === 'es'
    ? {
        title: 'Mantenimiento Web para que tu sitio funcione siempre',
        lead: 'Supervisión técnica, actualizaciones, seguridad y mejoras continuas para que tu web no se vuelva lenta, vulnerable o desactualizada.',
        highlight: 'Un sitio web no es un proyecto terminado. Es una herramienta activa del negocio.',
        highlight2: 'Nos encargamos de que siga funcionando correctamente, sin errores ni riesgos innecesarios.',
        cta: 'Reservar una llamada de 20 minutos'
      }
    : {
        title: 'Web Maintenance',
        subtitle: 'So your site works always, not just on launch day',
        lead: 'Technical supervision, updates, security and continuous improvements so your website doesn\'t become slow, vulnerable or outdated.',
        highlight: 'A website is not a finished project. It\'s an active business tool.',
        highlight2: 'We ensure it keeps working correctly, without errors or unnecessary risks.',
        cta: 'Book a 20-minute call'
      };

  const maintenanceIncludes = locale === 'es'
    ? [
        {
          icon: '🔄',
          title: 'Actualizaciones técnicas',
          description: 'Actualizamos CMS, plugins, dependencias y componentes críticos para evitar vulnerabilidades y errores de compatibilidad.'
        },
        {
          icon: '🔒',
          title: 'Seguridad y prevención',
          description: 'Monitoreo de amenazas, configuración básica de protección y revisión periódica de posibles vulnerabilidades.'
        },
        {
          icon: '💾',
          title: 'Backups y recuperación',
          description: 'Copias de seguridad programadas para asegurar que el sitio pueda restaurarse ante cualquier incidencia.'
        },
        {
          icon: '🛠️',
          title: 'Corrección de errores',
          description: 'Resolución de fallos técnicos, errores de visualización o conflictos entre plugins y componentes.'
        },
        {
          icon: '⚡',
          title: 'Optimización básica de rendimiento',
          description: 'Revisión de carga, limpieza de elementos innecesarios y mejoras que eviten que el sitio se vuelva lento con el tiempo.'
        },
        {
          icon: '🎧',
          title: 'Soporte técnico',
          description: 'Atención ante incidencias técnicas relacionadas con el funcionamiento del sitio.'
        }
      ]
    : [
        {
          icon: '🔄',
          title: 'Technical Updates',
          description: 'We update CMS, plugins, dependencies and critical components to avoid vulnerabilities and compatibility errors.'
        },
        {
          icon: '🔒',
          title: 'Security and Prevention',
          description: 'Threat monitoring, basic protection configuration and periodic review of potential vulnerabilities.'
        },
        {
          icon: '💾',
          title: 'Backups and Recovery',
          description: 'Scheduled backups to ensure the site can be restored in case of any incident.'
        },
        {
          icon: '🛠️',
          title: 'Error Correction',
          description: 'Resolution of technical failures, display errors or conflicts between plugins and components.'
        },
        {
          icon: '⚡',
          title: 'Basic Performance Optimization',
          description: 'Load review, cleanup of unnecessary elements and improvements that prevent the site from becoming slow over time.'
        },
        {
          icon: '🎧',
          title: 'Technical Support',
          description: 'Attention to technical incidents related to site functionality.'
        }
      ];

  const idealFor = locale === 'es'
    ? {
        title: 'Para quién es este servicio',
        subtitle: 'Ideal si:',
        items: [
          'Tu sitio web es parte activa de tu captación o ventas',
          'No tenés equipo técnico interno',
          'Querés evitar caídas, errores o vulnerabilidades',
          'Preferís prevenir antes que reaccionar'
        ],
        notFor: 'No es necesario si:',
        notForItems: [
          'Tu web es estática y no cumple ningún rol comercial',
          'Tenés un equipo técnico interno que ya lo gestiona'
        ]
      }
    : {
        title: 'Who this service is for',
        subtitle: 'Ideal if:',
        items: [
          'Your website is an active part of your lead generation or sales',
          'You don\'t have an internal technical team',
          'You want to avoid downtime, errors or vulnerabilities',
          'You prefer to prevent rather than react'
        ],
        notFor: 'Not necessary if:',
        notForItems: [
          'Your website is static and has no commercial role',
          'You have an internal technical team that already manages it'
        ]
      };

  const problemsAvoided = locale === 'es'
    ? [
        {
          title: 'Fallos tras actualizaciones automáticas',
          description: 'Cuando el CMS o los plugins se actualizan sin control, pueden generarse conflictos de compatibilidad.',
          consequence: 'El resultado: secciones que dejan de funcionar, errores visuales o incluso el sitio inaccesible.'
        },
        {
          title: 'Vulnerabilidades de seguridad',
          description: 'Los sitios desactualizados son el primer objetivo de ataques automatizados.',
          consequence: 'Una brecha de seguridad puede implicar: inyección de malware, bloqueo del hosting, pérdida de datos, daño reputacional.'
        },
        {
          title: 'Caídas inesperadas',
          description: 'Errores de servidor, conflictos técnicos o picos de tráfico pueden dejar la web fuera de línea en el momento menos oportuno.',
          consequence: 'El resultado: interrupciones del servicio que afectan la experiencia del usuario y pueden impactar directamente en las ventas.'
        },
        {
          title: 'Lentitud progresiva',
          description: 'Con el tiempo se acumulan archivos, scripts innecesarios y conflictos que ralentizan la carga.',
          consequence: 'Una web lenta no solo afecta la experiencia del usuario, también reduce conversiones y posicionamiento.'
        },
        {
          title: 'Formularios que dejan de funcionar',
          description: 'Uno de los fallos más comunes: formularios que no envían datos correctamente.',
          consequence: 'El problema no se detecta hasta que ya se perdieron oportunidades.'
        },
        {
          title: 'Pérdida de oportunidades comerciales',
          description: 'Cada error técnico, cada caída y cada fallo invisible puede traducirse en: leads no recibidos, ventas perdidas, confianza dañada.',
          consequence: 'El resultado: potenciales clientes que abandonan el sitio sin contactar y oportunidades comerciales que se pierden.'
        }
      ]
    : [
        {
          title: 'Failures after automatic updates',
          description: 'When CMS or plugins update without control, compatibility conflicts can arise.',
          consequence: 'The result: sections that stop working, visual errors or even the site becoming inaccessible.'
        },
        {
          title: 'Security vulnerabilities',
          description: 'Outdated sites are the first target of automated attacks.',
          consequence: 'A security breach can mean: malware injection, hosting blocking, data loss, reputational damage.'
        },
        {
          title: 'Unexpected downtime',
          description: 'Server errors, technical conflicts or traffic spikes can take the site offline at the worst possible moment.',
          consequence: 'The result: service interruptions that affect user experience and can directly impact sales.'
        },
        {
          title: 'Progressive slowness',
          description: 'Over time, unnecessary files, scripts and conflicts accumulate that slow down loading.',
          consequence: 'A slow website not only affects user experience, it also reduces conversions and rankings.'
        },
        {
          title: 'Forms that stop working',
          description: 'One of the most common failures: forms that don\'t send data correctly.',
          consequence: 'The problem isn\'t detected until opportunities have already been lost.'
        },
        {
          title: 'Loss of business opportunities',
          description: 'Every technical error, every downtime and every invisible failure can translate to: leads not received, lost sales, damaged trust.',
          consequence: 'The result: potential customers who abandon the site without contacting and lost business opportunities.'
        }
      ];

  const processSteps = locale === 'es'
    ? [
        {
          title: 'Auditoría inicial del sitio',
          description: 'Revisamos el estado técnico actual: versiones, seguridad, rendimiento, dependencias y posibles vulnerabilidades.',
          detail: 'No intervenimos sin entender primero el contexto completo.'
        },
        {
          title: 'Definición del plan de mantenimiento',
          description: 'No todos los sitios requieren el mismo nivel de intervención.',
          detail: 'Definimos qué revisar, con qué frecuencia y qué medidas implementar según la complejidad del proyecto.'
        },
        {
          title: 'Implementación de monitoreo y backups',
          description: 'Configuramos copias de seguridad programadas y sistemas de monitoreo que permiten detectar incidencias antes de que escalen.'
        },
        {
          title: 'Revisión técnica periódica',
          description: 'Actualizaciones controladas, verificación de funcionamiento, revisión de seguridad y pruebas básicas de estabilidad.'
        },
        {
          title: 'Reporte claro de estado',
          description: 'Entregamos un resumen simple y entendible sobre: estado del sitio, acciones realizadas, incidencias detectadas, recomendaciones si aplica.',
          conclusion: 'Sin intervenciones innecesarias. Sin cambios sin autorización. Sin modificaciones que afecten el negocio sin previo acuerdo.'
        }
      ]
    : [
        {
          title: 'Initial site audit',
          description: 'We review the current technical state: versions, security, performance, dependencies and potential vulnerabilities.',
          detail: 'We don\'t intervene without first understanding the complete context.'
        },
        {
          title: 'Maintenance plan definition',
          description: 'Not all sites require the same level of intervention.',
          detail: 'We define what to review, how often and what measures to implement according to the project complexity.'
        },
        {
          title: 'Implementation of monitoring and backups',
          description: 'We configure scheduled backups and monitoring systems that allow us to detect incidents before they escalate.'
        },
        {
          title: 'Periodic technical review',
          description: 'Controlled updates, functionality verification, security review and basic stability tests.'
        },
        {
          title: 'Clear status report',
          description: 'We deliver a simple and understandable summary of: site status, actions performed, incidents detected, recommendations if applicable.',
          conclusion: 'No unnecessary interventions. No changes without authorization. No modifications that affect the business without prior agreement.'
        }
      ];

  const complementaryServices = locale === 'es'
    ? [
        {
          title: 'Optimización de conversión',
          description: 'Mejoras en formularios, estructura, tiempos de carga y elementos clave que impactan directamente en resultados.'
        },
        {
          title: 'Google Ads y campañas activas',
          description: 'Una campaña solo funciona si la web responde correctamente. Mantenimiento y publicidad deben trabajar alineados.'
        },
        {
          title: 'Actualización y mejora de contenidos',
          description: 'Cambios en textos, secciones, imágenes o estructura para mantener la web actualizada y relevante.'
        },
        {
          title: 'Nuevas funcionalidades',
          description: 'Incorporación de herramientas, módulos o integraciones según evoluciona el negocio.'
        },
        {
          title: 'Integraciones con CRM o sistemas externos',
          description: 'Conectar la web con herramientas de gestión, automatización o seguimiento comercial.'
        },
        {
          title: 'Una web mantenida es estable. Una web estable permite crecer con seguridad.',
          description: 'El mantenimiento web no es un servicio aislado. Es la base técnica sobre la que se construye cualquier estrategia digital.'
        }
      ]
    : [
        {
          title: 'Conversion optimization',
          description: 'Improvements in forms, structure, loading times and key elements that directly impact results.'
        },
        {
          title: 'Google Ads and active campaigns',
          description: 'A campaign only works if the website responds correctly. Maintenance and advertising must work aligned.'
        },
        {
          title: 'Content updates and improvements',
          description: 'Changes in texts, sections, images or structure to keep the website updated and relevant.'
        },
        {
          title: 'New functionalities',
          description: 'Incorporation of tools, modules or integrations as the business evolves.'
        },
        {
          title: 'Integrations with CRM or external systems',
          description: 'Connecting the website with management, automation or commercial tracking tools.'
        },
        {
          title: 'A maintained website is stable. A stable website allows secure growth.',
          description: 'Web maintenance is not an isolated service. It\'s the technical foundation on which any digital strategy is built.'
        }
      ];

  const finalCTA = locale === 'es'
    ? {
        title: 'Si tu web cumple un rol en la captación, ventas o posicionamiento de tu negocio, debería estar bien gestionada.',
        points: [
          'Llamada breve para evaluar: el estado actual de tu sitio, los riesgos existentes, si tiene sentido implementar un mantenimiento profesional'
        ],
        conclusion: 'Si tu web es una herramienta activa del negocio, debería tratarse como tal.',
        button: 'Reservar una llamada de 20 minutos',
        whatsapp: 'O, si preferís un contacto más directo, puedes escribirnos por WhatsApp haciendo clic en el siguiente botón.',
        whatsappButton: 'Contactar por WhatsApp'
      }
    : {
        title: 'If your website plays a role in your business\'s lead generation, sales or positioning, it should be properly managed.',
        points: [
          'It\'s a brief conversation to evaluate: the current state of your site, existing risks, whether it makes sense to implement professional maintenance'
        ],
        conclusion: 'If your website is an active business tool, it should be treated as such.',
        button: 'Book a 20-minute call',
        whatsapp: 'Or, if you prefer more direct contact, you can write to us on WhatsApp by clicking the following button.',
        whatsappButton: 'Contact via WhatsApp'
      };

  return (
    <div className="mantenimiento-web-page">
      <Helmet>
        <title>{t('meta.mantenimientoWebTitle')}</title>
      </Helmet>
      {/* Hero Section */}
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
              {hero.title}
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {hero.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {hero.lead}
            </motion.p>
            <motion.p
              className="hero-highlight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {hero.highlight} {hero.highlight2}
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a 
                href={locale === 'es' ? 'https://www.globalalora.com/es/llamada-de-relevamiento' : 'https://www.globalalora.com/en/discovery-call'}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button primary large"
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
            </motion.div>
          </div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              backgroundImage: `url(${mantenimientoImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></motion.div>
        </motion.div>
      </section>

      {/* What Includes Section */}
      <section className="maintenance-includes-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'Qué incluye el mantenimiento web' : 'What web maintenance includes'}
          </h2>
          <p className="section-subtitle">
            {locale === 'es' 
              ? 'El mantenimiento no es "mirar si todo está bien". Es un trabajo técnico continuo para garantizar estabilidad, rendimiento y seguridad.'
              : 'Maintenance is not "checking if everything is fine". It\'s continuous technical work to ensure stability, performance and security.'
            }
          </p>
          <div className="maintenance-grid">
            {maintenanceIncludes.map((item, index) => (
              <motion.div 
                key={index}
                className="maintenance-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="maintenance-icon">
                  <span>{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
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
          <h2>{idealFor.title}</h2>
          <div className="ideal-container">
            <div className="ideal-card">
              <h3>{idealFor.subtitle}</h3>
              <ul className="ideal-list">
                {idealFor.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="ideal-card not-for-card">
              <h3>{idealFor.notFor}</h3>
              <ul className="ideal-list not-for">
                {idealFor.notForItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Problems Avoided Section */}
      <section className="problems-avoided-section">
        <motion.div 
          className="section-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            {locale === 'es' ? 'Qué problemas evitamos' : 'What problems we avoid'}
          </h2>
          <p className="section-subtitle">
            {locale === 'es'
              ? 'Un sitio web sin mantenimiento no suele "romperse" de golpe. Empieza a deteriorarse de forma silenciosa… hasta que el problema impacta en el negocio.'
              : 'A website without maintenance doesn\'t usually "break" suddenly. It starts to deteriorate silently... until the problem impacts the business.'
            }
          </p>
          <div className="problems-avoided-grid">
            {problemsAvoided.map((problem, index) => (
              <motion.div 
                key={index}
                className="problem-avoided-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="problem-icon">{problem.icon}</div>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
                {problem.consequence && <p className="consequence">{problem.consequence}</p>}
                {problem.conclusion && <p className="conclusion">{problem.conclusion}</p>}
              </motion.div>
            ))}
          </div>
          <div className="problems-conclusion">
            <p>
              {locale === 'es' 
                ? 'El mantenimiento no es un gasto preventivo menor. Es una forma de proteger una herramienta activa del negocio.'
                : 'Maintenance is not a minor preventive expense. It\'s a way to protect an active business tool.'
              }
            </p>
          </div>
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
          <p className="section-subtitle">
            {locale === 'es'
              ? 'El mantenimiento no es reactivo. Es un proceso organizado y continuo.'
              : 'Maintenance is not reactive. It\'s an organized and continuous process.'
            }
          </p>
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="process-number">{index + 1}</div>
                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <p className="process-detail">{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="process-conclusions-container">
            {processSteps.filter(step => step.conclusion).map((step, index) => (
              <motion.div 
                key={`conclusion-${index}`}
                className="process-conclusion"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {step.conclusion}
              </motion.div>
            ))}
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
            {locale === 'es' ? 'Servicios complementarios' : 'Complementary services'}
          </h2>
          <p className="section-subtitle">
            {locale === 'es'
              ? 'El mantenimiento web no es un servicio aislado. Es la base técnica sobre la que se construye cualquier estrategia digital.'
              : 'Web maintenance is not an isolated service. It\'s the technical foundation on which any digital strategy is built.'
            }
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
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="complementary-conclusion">
            <p>{complementaryServices[complementaryServices.length - 1].description}</p>
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <div className="cta-content-wrapper">
          <div className="cta-content">
            <h2>{finalCTA.title}</h2>
            <div className="cta-points">
              {finalCTA.points.map((point, index) => (
                <p key={index}>{point}</p>
              ))}
            </div>
            <p className="cta-conclusion">{finalCTA.conclusion}</p>
            <motion.a 
              href={locale === 'es' ? 'https://www.globalalora.com/es/llamada-de-relevamiento' : 'https://www.globalalora.com/en/discovery-call'}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {finalCTA.button}
            </motion.a>
            <div className="whatsapp-section">
              <div className="whatsapp-divider"></div>
              <p className="whatsapp-title">{finalCTA.whatsapp}</p>
              <motion.a 
                href="https://wa.me/+541124629452"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button whatsapp"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {finalCTA.whatsappButton}
              </motion.a>
            </div>
          </div>
          <div className="cta-image" style={{
            background: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80") center/cover'
          }}>
            <div className="cta-image-overlay"></div>
          </div>
        </div>
      </section>

      <Chatbot />
    </div>
  );
};

export default MatenimientoWeb;
