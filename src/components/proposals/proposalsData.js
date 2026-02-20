const proposals = {
  distrisal: {
    slug: 'distrisal',
    client: {
      name: 'Distri-Sal',
      description: 'Distribuidor Mayorista de Ferretería y Electricidad',
      logo: '/media/clients/distrisal-logo.png',
    },
    project: {
      title: 'Desarrollo Integral de Ecommerce + Integración con Sistema de Gestión (Centum)',
      subtitle: 'Propuesta Comercial',
      date: '13/02/2026',
      owner: 'Walo – Alora',
      validity: '30 días',
      summary: [
        'Gracias por considerar a Alora para acompañar a Distri-Sal en la evolución integral de su canal digital de ventas.',
        'Actualmente, Distri-Sal exhibe catálogo y precios para usuarios logueados, pero el proceso de venta opera de manera desacoplada de Centum, generando carga operativa y brechas de información.',
        'Propusimos dividir el proyecto completo en dos etapas: Integración con Centum (prioridad máxima) y Rediseño integral del ecommerce, manteniendo el alcance global originalmente definido.',
      ],
      generalObjective:
        'Desarrollar e implementar un ecosistema de ecommerce integral que permita a Distri-Sal vender online de forma eficiente, segura y escalable, unificando el canal digital con Centum como fuente central de información.',
    },
    highlight: {
      text: 'Cada cliente autorizado operará con listas de precios y descuentos personalizados sincronizados automáticamente desde Centum.',
    },
    stages: [
      {
        title: 'Etapa 1 – Integración con Centum',
        priority: 'Prioridad máxima',
        objective:
          'Integrar WooCommerce con Centum como sistema central, garantizando sincronización automática y aplicación correcta de reglas comerciales por cliente.',
        scope: [
          'Integración técnica WooCommerce + Centum (APIs oficiales)',
          'Sincronización bidireccional de productos, precios, stock y pedidos',
          'Automatización de flujos operativos clave entre ecommerce y sistema interno',
          'Gestión de listas de precios y descuentos individuales por cliente en todo el journey',
          'Definición de reglas de fallback ante fallas de sincronización para proteger márgenes',
          'Testing técnico con múltiples perfiles y validación de reglas comerciales reales',
        ],
        duration: '30 a 45 días',
      },
      {
        title: 'Etapa 2 – Rediseño integral y evolución UX/UI',
        objective:
          'Modernizar completamente la experiencia digital del ecommerce, mejorando usabilidad, conversión y percepción de marca.',
        scope: [
          'Rediseño UX/UI completo alineado a la identidad de Distri-Sal',
          'Jerarquización de categorías y optimización de fichas con precio dinámico',
          'Diseño responsive y preparación para carga masiva de productos',
          'Configuración de roles, permisos y flujos de aprobación personalizados',
          'Optimización de performance, seguridad base y arquitectura escalable',
          'QA integral (checkout, login, reglas con Centum, pagos y envíos) + go-live',
        ],
        duration: '30 a 45 días',
      },
    ],
    includes: [
      'Implementación WooCommerce y arquitectura headless-ready',
      'Integración técnica completa con Centum (productos, stock, pedidos, precios)',
      'Listas de precios individuales y reglas comerciales personalizadas',
      'Rediseño integral del ecommerce y fichas de producto',
      'Configuraciones de roles, permisos y aprobaciones',
      'Optimización de performance, seguridad base y monitoreo inicial',
      'Quality Assurance completo y puesta en producción supervisada',
    ],
    excludes: [
      'Producción de contenido (fotografía, video, textos comerciales)',
      'Gestión de campañas publicitarias o medios pagos',
      'Integraciones adicionales no especificadas explícitamente',
      'Desarrollo de nuevas funcionalidades fuera del alcance',
      'Mantenimiento mensual posterior (servicio opcional)',
      'Cambios de alcance posteriores a la aprobación',
    ],
    timeline: {
      total: '60 a 90 días (según modalidad de ejecución)',
      conditions: [
        'La etapa 1 no excederá los 45 días siempre que el ambiente de prueba de Centum esté estable.',
        'El plazo comienza tras aceptación formal, pago inicial y entrega de accesos/documentación.',
        'Las etapas pueden ejecutarse en paralelo o secuencialmente según estabilidad de Centum y disponibilidad interna.',
      ],
    },
    workflow: [
      'Kick-off y planificación técnica',
      'Definición funcional y blueprint de integración',
      'Integración Centum + validaciones',
      'Entrega de integración y ajustes',
      'Diseño UX/UI + aprobación',
      'Desarrollo e implementación',
      'Quality Assurance integral',
      'Go-live y acompañamiento inicial',
    ],
    considerations: [
      'El cliente deberá entregar información y accesos en tiempo y forma. Demoras impactan la agenda sin extender plazos.',
      'Cambios fuera del alcance se presupuestarán por separado. No se realizan reembolsos una vez iniciado el proyecto.',
      'La propiedad intelectual se transfiere con el 100% del pago. Garantía limitada a defectos técnicos post go-live.',
    ],
    investment: {
      amount: 'AR$ 4.500.000',
      currency: 'ARS',
      paymentTerms: [
        'AR$ 1.500.000 antes de comenzar',
        'AR$ 1.500.000 a los 30 días',
        'AR$ 1.500.000 a los 60 días',
      ],
    },
    cta: {
      accept: { label: 'Acepto la propuesta', url: '#aceptar' },
      download: { label: 'Descargar PDF', url: '#descargar' },
      questions: { label: 'Tengo dudas', url: 'mailto:hola@globalalora.com?subject=Consulta%20Propuesta%20Distri-Sal' },
      meeting: { label: 'Coordinar reunión', url: 'https://tidycal.com/alora/reunion' },
      whatsapp: { label: 'Consulta por WhatsApp', url: 'https://wa.me/5491112345678' },
    },
  },
};

export default proposals;
