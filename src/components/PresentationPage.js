import React from 'react';
import { Helmet } from 'react-helmet-async';
import './PresentationPage.css';

const stats = [
  { label: 'Años lanzando productos digitales', value: '+12' },
  { label: 'Proyectos liderados', value: '120+' },
  { label: 'Mercados activos', value: '7 países' },
];

const founders = [
  {
    name: 'Bruno Piorno Polucci',
    role: 'Founder & Director de Alora',
    initials: 'BP',
    photo: '/bruno.jpeg',
    summary:
      'Estratega digital y líder de producto con formación en UX/UI y desarrollo full-stack. Fundó Alora para combinar diseño, tecnología y negocio en una misma mesa.',
    biography: [
      'Hace más de una década que lidero equipos interdisciplinarios diseñando y construyendo experiencias digitales para pymes y corporativos. Trabajé como consultor independiente, lideré estudios boutique y dirigí producto en agencias regionales antes de fundar Alora.',
      'Mi foco está en traducir objetivos comerciales en roadmaps accionables: research, definición funcional, diseño, desarrollo y growth. Soy obsesivo con los procesos medibles y las integraciones entre marketing, data y operaciones.',
      'Dirigí sitios y experiencias digitales para artistas y marcas como Lali Espósito, Duki, Bizarrap, Alejandro Sanz, José José y Nahuel Pennisi, además de empresas como Nutricia Bagó y Sony Music, asegurando entregas de alto impacto y estándares globales.',
      'Desde Alora acompaño a cada cliente como socio: diagnósticos inmersivos, workshops tácticos y seguimiento cercano post implementación. ',
    ],
    highlights: [
      'Más de 12 años liderando proyectos end-to-end',
      'Especialista en estrategias de adquisición y optimización de funnels',
      'Mentor en ecosistemas de innovación y programas de aceleración',
    ],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/brunopiorno/' },
      { label: 'Email', url: 'mailto:bruno@globalalora.com' },
    ],
  },
  {
    name: 'Walo Jalil',
    role: 'Co-founder & Director de Proyectos',
    initials: 'WJ',
    photo: 'https://res.cloudinary.com/dj61vu8jg/image/upload/v1768936605/WaloJalil_zshmkb.png',
    summary:
      'Consultor estratégico especializado en ecommerce, growth y automatización. Durante los últimos años lideró proyectos de transformación digital en retail, construcción y salud.',
    biography: [
      'Walo combina una fuerte mirada comercial con metodologías de producto. Viene construyendo equipos ágiles que integran marketing, ventas y tecnología, siempre con foco en impacto medible en revenue.',
      'Trabajó con compañías regionales diseñando funnels omnicanal, estructuró departamentos de marketing de performance desde cero y aceleró lanzamientos de ecommerce B2B/B2C con foco en rentabilidad.',
      'Fue consultor para ExxonMobil, Banco Galicia y Olapic, colaborando con marcas globales como Four Seasons, H&M, Dior y Porcelanosa, entre otras. Lideró equipos remotos y on-site asegurando consistencia en múltiples mercados.',
      'Además de dirigir proyectos en Alora, comparte contenido y mentorías sobre liderazgo creativo y construcción de propuestas de valor, apalancando su experiencia como emprendedor y consultor independiente.',
    ],
    highlights: [
      'Más de 300 workshops facilitados con equipos directivos',
      'Experto en growth para negocios B2B y canales mayoristas',
      'Speaker invitado en eventos de innovación y profesionalización comercial',
    ],
    links: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/walojalil/' },
      { label: 'Email', url: 'mailto:walo@globalalora.com' },
    ],
  },
];

const processSteps = [
  {
    title: 'Diagnóstico inmersivo',
    description:
      'Entrevistas con los decisores, relevamiento de stack actual y comprensión profunda del modelo de negocio antes de presupuestar.',
  },
  {
    title: 'Mapa de oportunidades',
    description:
      'Definimos quick wins, riesgos y dependencias. Construimos el alcance ideal y alternativas escalables por etapa.',
  },
  {
    title: 'Roadmap & KPIs',
    description:
      'Estructuramos entregables, responsables y métricas que guiarán la implementación. Cada hito tiene un objetivo claro.',
  },
  {
    title: 'Coordinación ejecutiva',
    description:
      'Alineamos agendas, definimos canales de comunicación y dejamos listo el kick-off del proyecto antes del presupuesto formal.',
  },
];

const values = [
  {
    title: 'Visión de negocio + tech',
    description:
      'Integramos estrategia comercial, UX y desarrollo. Cada decisión creativa responde a objetivos de ventas y operación.',
  },
  {
    title: 'Seniority hands-on',
    description:
      'Somos los mismos que diseñamos, facilitamos y ejecutamos. No hay pases intermedios que diluyan la propuesta.',
  },
  {
    title: 'Procesos medibles',
    description:
      'Documentamos cada etapa, priorizamos tableros de control y aseguramos transferencia de conocimiento al equipo interno.',
  },
];

const PresentationPage = () => {
  return (
    <div className="presentation-page">
      <Helmet>
        <title>Presentación · Alora</title>
        <meta
          name="description"
          content="Presentación institucional de Alora: quiénes somos, metodología y biografías de los directores."
        />
      </Helmet>

      <section className="presentation-hero">
        <div className="presentation-container hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Presentación</p>
            <h1>Somos Bruno y Walo, fundadores de Alora</h1>
            <p className="hero-lead">
              Somos los dueños, hablamos en primera persona y armamos el equipo ideal para cada desafío. Entramos al negocio,
              mapeamos el contexto real y proponemos una hoja de ruta accionable con talento senior en estrategia, diseño y tecnología.
            </p>
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span>{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card accent-card">
            <p className="eyebrow">Qué podés esperar</p>
            <ul>
              <li>Trabajo directo con Bruno y Walo durante todo el proceso</li>
              <li>Diagnósticos claros antes de hablar de presupuesto</li>
              <li>Metodología iterativa con entregables medibles</li>
              <li>Equipo interno y red especializada para producción y escalado</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="presentation-section">
        <div className="presentation-container story-grid">
          <div className="story-text">
            <p className="eyebrow">Quiénes somos</p>
            <h2>Dos fundadores al frente, un equipo capacitado detrás</h2>
            <p>
              Alora nació para reducir la distancia entre la consultoría estratégica y la ejecución técnica. Nosotros lideramos
              cada conversación y coordinamos un equipo multidisciplinario de diseñadores, developers, analistas y productores
              que se suman según la complejidad del proyecto.
            </p>
            <p>
              Cada proyecto arranca con workshops inmersivos: entendemos procesos comerciales, stack actual y objetivos reales.
              Recién después proponemos un alcance y presupuesto que haga sentido al negocio y definimos el squad ideal para
              ejecutarlo.
            </p>
          </div>
          <div className="story-card accent-card">
            <h3>Antes de cotizar hacemos</h3>
            <ul>
              <li>
                <strong>Workshop con stakeholders clave.</strong> Reunimos a dirección, operaciones y comercial para
                alinear objetivos, restricciones y expectativas de éxito.
              </li>
              <li>
                <strong>Mapa de experiencia actual + fricciones.</strong> Documentamos el journey completo, las brechas del
                proceso y los puntos de dolor de clientes y del equipo interno.
              </li>
              <li>
                <strong>Priorización de quick wins y riesgos.</strong> Evaluamos impacto vs. esfuerzo para decidir qué se
                aborda primero y qué necesita validaciones técnicas o legales adicionales.
              </li>
              <li>
                <strong>Definición preliminar de stack y dependencias.</strong> Proponemos arquitectura técnica, roles
                necesarios y plan de integración con los sistemas existentes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="presentation-section founders-section">
        <div className="presentation-container">
          <div className="section-heading">
            <p className="eyebrow">Directores</p>
            <h2>Equipo que te acompaña desde el día uno</h2>
            <p>Trabajás directamente con los dueños y con el equipo senior que armamos especialmente para tu proyecto.</p>
          </div>
          <div className="founders-grid">
            {founders.map((founder) => (
              <article key={founder.name} className="founder-card">
                <div className="founder-header">
                  {founder.photo ? (
                    <img src={founder.photo} alt={founder.name} />
                  ) : (
                    <div className="founder-initials">{founder.initials}</div>
                  )}
                  <div>
                    <p className="founder-role">{founder.role}</p>
                    <h3>{founder.name}</h3>
                  </div>
                </div>
                <p className="founder-summary">{founder.summary}</p>
                <div className="founder-bio">
                  {founder.biography.map((paragraph, index) => (
                    <p key={`${founder.name}-bio-${index}`}>{paragraph}</p>
                  ))}
                </div>
                <div className="founder-highlights">
                  {founder.highlights.map((item) => (
                    <span key={`${founder.name}-${item}`}>{item}</span>
                  ))}
                </div>
                <div className="founder-links">
                  {founder.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="presentation-section">
        <div className="presentation-container">
          <div className="section-heading">
            <p className="eyebrow">Metodología previa al presupuesto</p>
            <h2>Claridad antes de cotizar</h2>
            <p>Pasos que transitamos juntos antes de enviar la propuesta económica.</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={step.title} className="process-card">
                <span className="process-number">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="presentation-section presentation-values">
        <div className="presentation-container">
          <div className="section-heading">
            <p className="eyebrow">Diferenciales</p>
            <h2>Lo que siempre vas a encontrar en el equipo</h2>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.title} className="value-card accent-card">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="presentation-cta">
        <div className="presentation-container">
          <div className="cta-card">
            <p className="eyebrow">Próximo paso</p>
            <h2>Coordinemos la reunión previa al presupuesto</h2>
            <p>
              Reservamos 45 minutos para profundizar en el contexto, alinear expectativas y definir próximos hitos. Después
              de esa instancia, enviamos el presupuesto completo.
            </p>
            <div className="cta-actions">
              <a
                href="https://www.globalalora.com/es/llamada-de-relevamiento"
                className="cta-button primary"
              >
                Solicitar reunión
              </a>
              <a
                href="https://wa.me/5491112345678?text=Hola%20Alora,%20quiero%20coordinar%20la%20presentaci%C3%B3n%20previa%20al%20presupuesto."
                className="cta-button secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PresentationPage;
