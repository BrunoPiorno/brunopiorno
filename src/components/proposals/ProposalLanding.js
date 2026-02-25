import React, { useMemo, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import proposals from './proposalsData';
import './ProposalLanding.css';

const InfoList = ({ items, variant }) => {
  const listClasses = ['proposal-list'];
  if (variant) {
    listClasses.push(`proposal-list-${variant}`);
  }
  if (items.length > 8) {
    listClasses.push('proposal-list-multi');
  }

  return (
    <ul className={listClasses.join(' ')}>
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  );
};

const StageCard = ({ stage }) => (
  <article className="proposal-stage-card">
    <div className="stage-card-header">
      <div>
        <p className="stage-label">{stage.priority || 'Etapa'}</p>
        <h3>{stage.title}</h3>
      </div>
      {stage.duration && <span className="stage-duration">{stage.duration}</span>}
    </div>
    {stage.objective && (
      <p className="stage-objective">
        <strong>Objetivo:</strong> {stage.objective}
      </p>
    )}
    {stage.scope && <InfoList items={stage.scope} />}
  </article>
);

const ContentGroup = ({ group }) => (
  <div className="rich-section-group">
    {group.label && <h4>{group.label}</h4>}
    {group.items && <InfoList items={group.items} variant="group" />}
  </div>
);

const TechIcons = ({ icons = [] }) => (
  <div className="tech-icons">
    {icons.map((icon) => (
      <span key={icon} className="tech-icon">
        {icon}
      </span>
    ))}
  </div>
);

const RichSection = ({ section }) => {
  const sectionClasses = ['rich-section'];
  if (section.layout) {
    sectionClasses.push(`rich-section-${section.layout}`);
  }

  const hasItems = Array.isArray(section.items) && section.items.length > 0;
  const hasGroups = Array.isArray(section.groups) && section.groups.length > 0;

  return (
    <article className={sectionClasses.join(' ')}>
      <div className="rich-section-header">
        <h3>{section.title}</h3>
        {section.description && <p>{section.description}</p>}
      </div>
      {section.icons && section.icons.length > 0 && <TechIcons icons={section.icons} />}
      {hasItems && <InfoList items={section.items} />}
      {hasGroups && (
        <div className="rich-section-groups">
          {section.groups.map((group, index) => (
            <ContentGroup key={`${group.label || 'group'}-${index}`} group={group} />
          ))}
        </div>
      )}
    </article>
  );
};

const SectionGroup = ({ group }) => (
  <section className="section-group">
    <div className="section-group-header">
      <p className="eyebrow">{group.eyebrow || 'Bloque estratégico'}</p>
      <h2>{group.heading}</h2>
      {group.description && <p>{group.description}</p>}
    </div>
    <div className="section-group-grid">
      {group.cards?.map((card) => (
        <RichSection key={card.title} section={card} />
      ))}
    </div>
  </section>
);

const ProposalLanding = ({ slug: slugProp }) => {
  const params = useParams();
  const slug = slugProp || params?.slug;

  const proposal = useMemo(() => proposals[slug], [slug]);

  useEffect(() => {
    document.body.classList.add('proposal-page-active');
    return () => {
      document.body.classList.remove('proposal-page-active');
    };
  }, []);

  if (!proposal) {
    return <Navigate to="/" replace />;
  }

  const {
    client,
    project,
    highlight,
    sections = [],
    sectionGroups = [],
    stages = [],
    includes = [],
    excludes = [],
    timeline = {},
    workflow = [],
    considerations = [],
    considerationsGroups = [],
    investment = {},
    cta = {},
  } = proposal;

  return (
    <div className="proposal-page">
      <Helmet>
        <title>{`${client.name} · Propuesta Comercial | Alora`}</title>
        <meta
          name="description"
          content={`Propuesta comercial personalizada para ${client.name}: ${project.title}`}
        />
      </Helmet>

      <section className="proposal-hero">
        <div className="hero-content">
          <p className="hero-badge">{project.subtitle}</p>
          <h1>{project.title}</h1>
          <p className="hero-client">
            {client.name}
            {client.description && (
              <>
                {' '}
                &mdash; {client.description}
              </>
            )}
          </p>
          <div className="hero-meta">
            <div>
              <span>Fecha</span>
              <strong>{project.date}</strong>
            </div>
            <div>
              <span>Responsable</span>
              <strong>{project.owner}</strong>
            </div>
            <div>
              <span>Validez de la propuesta</span>
              <strong>{project.validity || '30 días'}</strong>
            </div>
          </div>
        </div>
        <div className="hero-card">
          {client.logo && (
            <div className="client-logo">
              <img src={client.logo} alt={`Logo ${client.name}`} />
            </div>
          )}
          <p className="hero-summary-title">Contexto</p>
          {project.summary.map((paragraph, index) => (
            <p key={`summary-${index}`} className="hero-summary">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="proposal-objective">
        <div className="objective-card">
          <h2>Objetivo General</h2>
          <p>{project.generalObjective}</p>
        </div>
        {highlight?.text && (
          <div className="highlight-card">
            <p>{highlight.text}</p>
          </div>
        )}
      </section>

      {sectionGroups.length > 0 ? (
        <div className="proposal-section-groups">
          {sectionGroups.map((group) => (
            <SectionGroup key={group.heading} group={group} />
          ))}
        </div>
      ) : (
        sections.length > 0 && (
          <section className="proposal-sections">
            <div className="section-heading">
              <p className="eyebrow">Arquitectura Estratégica</p>
              <h2>Plan y Alcance Detallado</h2>
            </div>
            <div className="rich-sections-grid">
              {sections.map((section) => (
                <RichSection key={section.title} section={section} />
              ))}
            </div>
          </section>
        )
      )}

      {stages.length > 0 && (
        <section className="proposal-stages">
          <div className="section-heading">
            <p className="eyebrow">Roadmap</p>
            <h2>Etapas del Proyecto</h2>
          </div>
          <div className="stages-grid">
            {stages.map((stage) => (
              <StageCard key={stage.title} stage={stage} />
            ))}
          </div>
        </section>
      )}

      {(includes.length > 0 || excludes.length > 0) && (
        <section className="proposal-includes">
          <div className="section-heading">
            <p className="eyebrow">Alcance</p>
            <h2>¿Qué incluye?</h2>
          </div>
          <div className="includes-grid">
            {includes.length > 0 && (
              <div className="card includes-card">
                <h3>✓ Incluye</h3>
                <InfoList items={includes} />
              </div>
            )}
            {excludes.length > 0 && (
              <div className="card excludes-card">
                <h3>✗ No incluye</h3>
                <InfoList items={excludes} />
              </div>
            )}
          </div>
        </section>
      )}

      {timeline.total && (
        <section className="proposal-timeline">
          <div className="section-heading">
            <p className="eyebrow">Planificación</p>
            <h2>Timeline del Proyecto</h2>
          </div>
          <div className="timeline-card">
            <div className="timeline-total">
              <strong>Duración total estimada:</strong> {timeline.total}
            </div>
            {timeline.conditions && (
              <ul className="timeline-conditions">
                {timeline.conditions.map((condition, index) => (
                  <li key={`condition-${index}`}>{condition}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {workflow && workflow.length > 0 && (
        <section className="proposal-workflow">
          <div className="section-heading">
            <p className="eyebrow">Metodología</p>
            <h2>Flujo de Trabajo</h2>
          </div>
          <div className="workflow-steps">
            {workflow.map((step, index) => (
              <div key={`step-${index}`} className="workflow-step">
                <span className="step-number">{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {(considerationsGroups || considerations) && (
        <section className="proposal-considerations">
          <div className="section-heading">
            <p className="eyebrow">Importante</p>
            <h2>Consideraciones</h2>
          </div>
          {considerationsGroups ? (
            <div className="considerations-grid">
              {considerationsGroups.map((group) => (
                <article key={group.title} className="consideration-group">
                  <h3>{group.title}</h3>
                  <InfoList items={group.items} variant="group" />
                </article>
              ))}
            </div>
          ) : (
            <div className="considerations-card">
              <InfoList items={considerations} />
            </div>
          )}
        </section>
      )}

      <section className="proposal-investment">
        <div className="section-heading">
          <p className="eyebrow">Inversión</p>
          <h2>Propuesta Económica</h2>
        </div>
        <div className="investment-card">
          <div className="investment-amount">
            <span className="amount-label">Inversión total</span>
            <span className="amount-value">{investment.amount}</span>
            <span className="amount-currency">({investment.currency})</span>
          </div>
          <div className="payment-terms">
            <strong>Forma de pago:</strong>
            <ul>
              {investment.paymentTerms.map((term, index) => (
                <li key={`payment-${index}`}>{term}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className="pdf-download-btn" onClick={() => window.print()}>
          Descargar Propuesta en PDF
        </button>
      </section>

      <section className="proposal-cta">
        <div className="cta-content">
          <h2>¿Listo para avanzar?</h2>
          <p>Elegí la acción que mejor se adapte a tu situación actual</p>
        </div>
        <div className="cta-grid">
          <a 
            href={`https://wa.me/5491112345678?text=${encodeURIComponent(`¡Hola! Acepto la propuesta para ${client.name}. Me gustaría coordinar los próximos pasos.`)}`}
            className="cta-button cta-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acepto la propuesta
          </a>
          <a 
            href={`https://wa.me/5491112345678?text=${encodeURIComponent(`Hola, tengo una consulta sobre mi propuesta para ${client.name}.`)}`}
            className="cta-button cta-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tengo dudas
          </a>
        </div>
      </section>

      <footer className="proposal-footer">
        <p>Alora – Desarrollo & Innovación Digital</p>
        <p>Quedamos a disposición para avanzar o realizar los ajustes necesarios.</p>
      </footer>
    </div>
  );
};

export default ProposalLanding;
