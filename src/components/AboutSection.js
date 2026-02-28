import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const aboutContent = {
  es: {
    title: 'Quiénes Somos',
    paragraphs: [
      'No somos solo desarrolladores. Somos un equipo multidisciplinario enfocado en construir soluciones digitales que funcionan en el mundo real.',
      'Trabajamos en la intersección entre negocio y tecnología: entendemos los objetivos comerciales antes de escribir una sola línea de código. Cada proyecto combina estrategia, diseño, desarrollo y control de calidad para asegurar que lo que se entrega no solo se vea bien, sino que cumpla su propósito.'
    ],
    highlightTitle: 'No vendemos sitios web.',
    highlightDetail: 'Diseñamos herramientas digitales que aportan estructura, eficiencia y crecimiento.',
    teamIntro: 'Nuestro equipo integra:',
    roles: [
      {
        title: 'Desarrolladores',
        description: 'Especialistas en arquitectura, programación y rendimiento, enfocados en soluciones estables y escalables.',
        icon: 'fas fa-code',
      },
      {
        title: 'Diseñadores UX/UI',
        description: 'Responsables de transformar procesos y objetivos en experiencias claras y funcionales.',
        icon: 'fas fa-paint-brush',
      },
      {
        title: 'Project Managers',
        description: 'Organizan, coordinan y aseguran el cumplimiento de tiempos, alcance y prioridades.',
        icon: 'fas fa-tasks',
      },
      {
        title: 'QA Testers',
        description: 'Validan cada funcionalidad para garantizar estabilidad, seguridad y correcto funcionamiento.',
        icon: 'fas fa-vial',
      },
      {
        title: 'Equipo comercial y estratégico',
        description: 'Alinea cada proyecto con objetivos reales de negocio.',
        icon: 'fas fa-chart-line',
      },
    ],
  },
  en: {
    title: 'Who we are',
    paragraphs: [
      'We are not just developers. We are a multidisciplinary team focused on building digital solutions that work in the real world.',
      'We operate at the intersection of business and technology: we understand commercial goals before writing a single line of code. Every project blends strategy, design, development and quality assurance to make sure what we deliver not only looks good but fulfills its purpose.'
    ],
    highlightTitle: 'We don’t sell websites.',
    highlightDetail: 'We design digital tools that bring structure, efficiency and growth.',
    teamIntro: 'Our team includes:',
    roles: [
      {
        title: 'Developers',
        description: 'Architecture and performance specialists focused on stable, scalable solutions.',
        icon: 'fas fa-code',
      },
      {
        title: 'UX/UI Designers',
        description: 'They transform processes and goals into clear, functional experiences.',
        icon: 'fas fa-paint-brush',
      },
      {
        title: 'Project Managers',
        description: 'Organize, coordinate and ensure timing, scope and priorities stay on track.',
        icon: 'fas fa-tasks',
      },
      {
        title: 'QA Testers',
        description: 'Validate every feature to guarantee stability, security and proper performance.',
        icon: 'fas fa-vial',
      },
      {
        title: 'Commercial & Strategy Team',
        description: 'Keeps every project aligned with real business objectives.',
        icon: 'fas fa-chart-line',
      },
    ],
  },
};

const AboutSection = () => {
  const { locale } = useLanguage();
  const content = aboutContent[locale] || aboutContent.es;

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <div className="section-title">
            <h2>{content.title}</h2>
          </div>
          <div className="about-content">
            {content.paragraphs.map((paragraph, index) => (
              <p key={`about-paragraph-${index}`}>{paragraph}</p>
            ))}
            <div className="about-highlight">
              <p className="about-highlight-title">{content.highlightTitle}</p>
              <p>{content.highlightDetail}</p>
            </div>
            <p className="about-team-intro">{content.teamIntro}</p>
          </div>
        </div>
        <div className="roles-grid">
          {content.roles.map((role, index) => (
            <div key={`role-${role.title}-${index}`} className="role-card">
              <i className={role.icon}></i>
              <div>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
