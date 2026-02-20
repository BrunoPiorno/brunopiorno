import React, { useMemo, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import proposals from './proposalsData';
import './ProposalLanding.css';

const InfoList = ({ items }) => (
  <ul className="proposal-list">
    {items.map((item, index) => (
      <li key={`${item}-${index}`}>{item}</li>
    ))}
  </ul>
);

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
    stages,
    includes,
    excludes,
    timeline,
    workflow,
    considerations,
    investment,
    cta,
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
          <p className="hero-client">{client.name} &mdash; {client.description}</p>
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

      <section className="proposal-includes">
        <div className="section-heading">
          <p className="eyebrow">Alcance</p>
          <h2>¿Qué incluye?</h2>
        </div>
        <div className="includes-grid">
          <div className="card includes-card">
            <h3>✓ Incluye</h3>
            <InfoList items={includes} />
          </div>
          <div className="card excludes-card">
            <h3>✗ No incluye</h3>
            <InfoList items={excludes} />
          </div>
        </div>
      </section>

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

      <section className="proposal-considerations">
        <div className="section-heading">
          <p className="eyebrow">Importante</p>
          <h2>Consideraciones</h2>
        </div>
        <div className="considerations-card">
          <InfoList items={considerations} />
        </div>
      </section>

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
