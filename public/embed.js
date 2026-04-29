(function() {
  'use strict';

  // Configuration
  const API_BASE = 'http://localhost:3000';
  let config = {};

  // Get script attributes
  const currentScript = document.currentScript || (function() {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();

  config.formId = currentScript.getAttribute('data-form-id') || 'default';
  config.mode = currentScript.getAttribute('data-mode') || 'inline';
  config.color = currentScript.getAttribute('data-color') || '#2d6167';
  config.position = currentScript.getAttribute('data-position') || 'bottom-right';

  // Styles
  const styles = `
    .alora-embed-form {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      max-width: 480px;
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.1);
      padding: 32px;
      box-sizing: border-box;
    }
    .alora-embed-form .form-header {
      text-align: center;
      margin-bottom: 28px;
    }
    .alora-embed-form .form-header h2 {
      margin: 0 0 12px 0;
      font-size: 24px;
      color: #1a202c;
      font-weight: 700;
      line-height: 1.3;
    }
    .alora-embed-form .form-header p {
      margin: 0;
      font-size: 15px;
      color: #64748b;
      line-height: 1.5;
    }
    .alora-embed-form .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    @media (max-width: 480px) {
      .alora-embed-form .form-row {
        grid-template-columns: 1fr;
      }
    }
    .alora-embed-form .form-group {
      margin-bottom: 20px;
    }
    .alora-embed-form .form-row .form-group {
      margin-bottom: 0;
    }
    .alora-embed-form label {
      display: block;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 500;
      color: #475569;
    }
    .alora-embed-form label .required {
      color: #ef4444;
      margin-left: 2px;
    }
    .alora-embed-form input,
    .alora-embed-form textarea {
      width: 100%;
      padding: 14px 16px;
      border: 1.5px solid #e2e8f0;
      border-radius: 10px;
      font-size: 15px;
      transition: border-color 0.2s, box-shadow 0.2s;
      box-sizing: border-box;
      font-family: inherit;
      background: #f8fafc;
    }
    .alora-embed-form input::placeholder,
    .alora-embed-form textarea::placeholder {
      color: #94a3b8;
    }
    .alora-embed-form input:focus,
    .alora-embed-form textarea:focus {
      outline: none;
      border-color: ${config.color};
      box-shadow: 0 0 0 3px ${config.color}20;
      background: #fff;
    }
    .alora-embed-form textarea {
      min-height: 100px;
      resize: vertical;
    }
    .alora-embed-form .checkbox-group {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 24px;
    }
    .alora-embed-form .checkbox-group input[type="checkbox"] {
      width: 20px;
      height: 20px;
      min-width: 20px;
      margin-top: 2px;
      accent-color: ${config.color};
      cursor: pointer;
    }
    .alora-embed-form .checkbox-group label {
      margin: 0;
      font-size: 14px;
      color: #64748b;
      line-height: 1.5;
      cursor: pointer;
    }
    .alora-embed-form .checkbox-group label a {
      color: ${config.color};
      text-decoration: underline;
    }
    .alora-embed-form button[type="submit"] {
      width: 100%;
      padding: 16px 24px;
      background: ${config.color};
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
    }
    .alora-embed-form button[type="submit"]:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 20px ${config.color}40;
    }
    .alora-embed-form button[type="submit"]:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
    .alora-embed-form .form-footer {
      text-align: center;
      margin-top: 20px;
      font-size: 13px;
      color: #94a3b8;
    }
    .alora-embed-form .error {
      color: #e53e3e;
      font-size: 13px;
      margin-top: 6px;
    }
    .alora-embed-form .success {
      text-align: center;
      padding: 40px 20px;
    }
    .alora-embed-form .success h4 {
      color: ${config.color};
      margin: 0 0 12px 0;
      font-size: 22px;
      font-weight: 600;
    }
    .alora-embed-form .success p {
      color: #64748b;
      margin: 0;
      font-size: 15px;
      line-height: 1.6;
    }
    
    /* Widget styles */
    .alora-widget-button {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: ${config.color};
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0,0,0,0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s, box-shadow 0.2s;
      z-index: 9999;
    }
    .alora-widget-button:hover {
      transform: scale(1.05);
      box-shadow: 0 6px 24px rgba(0,0,0,0.3);
    }
    .alora-widget-container {
      position: fixed;
      bottom: 90px;
      right: 24px;
      width: 400px;
      max-width: calc(100vw - 48px);
      z-index: 9998;
      display: none;
    }
    .alora-widget-container.active {
      display: block;
      animation: slideIn 0.3s ease;
    }
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .alora-widget-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.3);
      z-index: 9997;
      display: none;
    }
    .alora-widget-overlay.active {
      display: block;
    }
  `;

  // Inject styles
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  // Form HTML
  function getFormHTML() {
    return `
      <form class="alora-embed-form" id="alora-form-${config.formId}">
        <div class="form-header">
          <h2>¿Listo para dar el siguiente paso?</h2>
          <p>Dejanos tus datos y te contactamos en menos de 24 horas con una propuesta personalizada.</p>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="alora-nombre">Nombre <span class="required">*</span></label>
            <input type="text" id="alora-nombre" name="nombre" required placeholder="Juan Pérez">
          </div>
          <div class="form-group">
            <label for="alora-email">Email <span class="required">*</span></label>
            <input type="email" id="alora-email" name="email" required placeholder="juan@empresa.com">
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="alora-website">Sitio Web</label>
            <input type="url" id="alora-website" name="website" placeholder="">
          </div>
          <div class="form-group">
            <label for="alora-pais">País <span class="required">*</span></label>
            <input type="text" id="alora-pais" name="pais" required placeholder="">
          </div>
        </div>
        
        <div class="form-group">
          <label for="alora-telefono">Teléfono o Whatsapp <span class="required">*</span></label>
          <input type="tel" id="alora-telefono" name="telefono" required placeholder="+54 11 0000-0000">
        </div>
        
        <div class="form-group">
          <label for="alora-mensaje">Mensaje</label>
          <textarea id="alora-mensaje" name="mensaje" placeholder="Contanos en qué podemos ayudarte..."></textarea>
        </div>
        
        <div class="checkbox-group">
          <input type="checkbox" id="alora-privacidad" name="privacidad" required>
          <label for="alora-privacidad">Acepto recibir información comercial y notificaciones, y he leído la <a href="https://globalalora.com/privacidad" target="_blank">Política de Privacidad</a> <span class="required">*</span></label>
        </div>
        
        <button type="submit">Enviar consulta</button>
        
        <div class="form-footer">Powered by Alora CRM</div>
      </form>
    `;
  }

  // Success HTML
  function getSuccessHTML() {
    return `
      <div class="alora-embed-form success">
        <h4>¡Gracias!</h4>
        <p>Tu consulta ha sido enviada. Te contactaremos pronto.</p>
      </div>
    `;
  }

  // Submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    const formData = {
      nombre: form.nombre.value,
      email: form.email.value,
      website: form.website?.value || '',
      pais: form.pais.value,
      telefono: form.telefono.value,
      mensaje: form.mensaje?.value || '',
      privacidad: form.privacidad.checked,
      formId: config.formId,
      timestamp: new Date().toISOString(),
      source: window.location.href
    };

    try {
      const response = await fetch(`${API_BASE}/api/webhooks/lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        form.innerHTML = getSuccessHTML();
        setTimeout(() => {
          if (config.mode === 'widget') {
            closeWidget();
          }
        }, 3000);
      } else {
        throw new Error('Error en el servidor');
      }
    } catch (error) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      alert('Error al enviar. Por favor, intenta nuevamente.');
    }
  }

  // Widget functions
  let widgetContainer = null;
  let widgetOverlay = null;

  function openWidget() {
    if (widgetContainer) {
      widgetContainer.classList.add('active');
      widgetOverlay.classList.add('active');
    }
  }

  function closeWidget() {
    if (widgetContainer) {
      widgetContainer.classList.remove('active');
      widgetOverlay.classList.remove('active');
    }
  }

  function toggleWidget() {
    if (widgetContainer) {
      if (widgetContainer.classList.contains('active')) {
        closeWidget();
      } else {
        openWidget();
      }
    }
  }

  // Initialize
  function init() {
    if (config.mode === 'inline') {
      // Inline mode - replace script with form
      const container = document.createElement('div');
      container.innerHTML = getFormHTML();
      currentScript.parentNode.replaceChild(container.firstElementChild, currentScript);
      
      const form = document.getElementById(`alora-form-${config.formId}`);
      form.addEventListener('submit', handleSubmit);
    } else if (config.mode === 'widget') {
      // Widget mode - floating button + popup
      widgetOverlay = document.createElement('div');
      widgetOverlay.className = 'alora-widget-overlay';
      widgetOverlay.addEventListener('click', closeWidget);
      document.body.appendChild(widgetOverlay);

      const button = document.createElement('button');
      button.className = 'alora-widget-button';
      button.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      `;
      button.addEventListener('click', toggleWidget);
      document.body.appendChild(button);

      widgetContainer = document.createElement('div');
      widgetContainer.className = 'alora-widget-container';
      widgetContainer.innerHTML = getFormHTML();
      document.body.appendChild(widgetContainer);

      const form = document.getElementById(`alora-form-${config.formId}`);
      form.addEventListener('submit', handleSubmit);

      // Expose API
      window.AloraLeadForm = {
        open: openWidget,
        close: closeWidget,
        toggle: toggleWidget
      };
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
