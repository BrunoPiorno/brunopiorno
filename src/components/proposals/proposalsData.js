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
  depay: {
    slug: 'depay',
    client: {
      name: 'DEPAY.US',
      description: 'En etapa estratégica de consolidación de marca, producto y narrativa.',
      logo: 'https://depay.us/wp-content/uploads/2024/10/logonuevo.svg',
    },
    project: {
      title: 'Desarrollo Web Estratégico Bilingüe',
      subtitle: 'Propuesta Comercial',
      date: '25/02/2026',
      owner: 'Walo – Alora',
      validity: '90 días',
      summary: [
        'El desafío actual no es únicamente renovar el sitio web, sino:',
        'Explicar claramente sus tres líneas de producto (Pagos, Cobros y Crypto).',
        'Comunicar robustez tecnológica sin perder cercanía.',
        'Humanizar la marca fintech.',
        'Generar confianza en clientes B2B.',
        'Mostrar tracción, clientes, inversores y métricas clave.',
        'Convertir interés en reuniones calificadas.',
        'Construir autoridad digital mediante contenido estratégico.',
        'El nuevo sitio web será el activo digital central de la compañía y deberá funcionar como plataforma de posicionamiento, comunicación y conversión.',
      ],
      generalObjective:
        'Diseñar y desarrollar un sitio web completamente nuevo, bilingüe (EN / ES), robusto, escalable y 100% autogestionable, que posicione a DEPAY como fintech sólida, moderna y confiable en el mercado.',
    },
    highlight: {
      text: 'El nuevo sitio web será el activo digital central de la compañía y deberá funcionar como plataforma de posicionamiento, comunicación y conversión.',
    },
    sectionGroups: [
      {
        heading: 'Estrategia y Contexto',
        cards: [
          {
            title: 'Enfoque Estratégico',
            description:
              'El proyecto no se abordará únicamente desde el diseño y desarrollo técnico, sino desde una arquitectura de comunicación clara que permita:',
            items: [
              'Simplificar conceptos técnicos complejos.',
              'Jerarquizar beneficios.',
              'Explicar visualmente los productos.',
              'Unificar narrativa comercial y experiencia digital.',
              'Preparar la plataforma para crecimiento futuro.',
            ],
          },
          {
            title: 'Arquitectura Estratégica del Sitio',
            layout: 'wide',
            description: 'La arquitectura combinará lo propuesto por DEPAY con una evolución estratégica de jerarquía y conversión.',
            items: [
              'HOME – Página estratégica principal',
              'PRODUCTOS (3 páginas individuales)',
              'ABOUT US',
              'BLOG / NEWSROOM (Bilingüe)',
              'CONTACT',
            ],
          },
        ],
      },
      {
        heading: 'Ecosistema DEPAY',
        cards: [
          {
            title: 'HOME – Página estratégica principal',
            layout: 'wide',
            description: 'Landing extensa de alto impacto que incluirá:',
            groups: [
              {
                label: 'Posicionamiento inmediato',
                items: [
                  'Hero principal con propuesta de valor clara.',
                  'Presentación del ecosistema DEPAY.',
                  'Bloque visual de los 3 productos.',
                ],
              },
              {
                label: 'Prueba social y beneficios',
                items: [
                  'Clientes que confían.',
                  'Testimonios.',
                  'Beneficios diferenciales.',
                  'Números de alto impacto (mapa LATAM / global).',
                ],
              },
              {
                label: 'Conversión y respaldo',
                items: [
                  'Sección de prensa.',
                  'Inversores.',
                  'Preguntas frecuentes.',
                  'CTA principal: Agendar reunión.',
                  'CTA secundaria: Contacto.',
                  'Inspiración visual: Calendly / Monday.com / Pomelo.',
                ],
              },
            ],
          },
          {
            title: 'PRODUCTOS (3 páginas individuales)',
            layout: 'wide',
            groups: [
              {
                label: 'Líneas de producto',
                items: ['Pagos', 'Cobros', 'Crypto'],
              },
              {
                label: 'Cada página incluirá:',
                items: [
                  'Banner de producto.',
                  'Explicación clara del servicio.',
                  'Desarrollo de hasta 20 mockups visuales en total (distribuidos entre las tres páginas) para:',
                ],
              },
              {
                label: 'Desarrollo de hasta 20 mockups visuales en total (distribuidos entre las tres páginas) para:',
                items: [
                  'Explicar flujos.',
                  'Mostrar interfaces.',
                  'Visualizar integraciones.',
                  'Características técnicas.',
                  'Beneficios.',
                ],
              },
              {
                label: 'Conversión y soporte',
                items: [
                  'Caso de éxito o testimonio.',
                  'FAQs técnicas.',
                  'CTA a reunión.',
                  'Bloque inversores.',
                  'Bloque contacto.',
                ],
              },
            ],
          },
          {
            title: 'ABOUT US',
            items: [
              'Historia de la startup.',
              'Equipo.',
              'Cultura.',
              'Notas de prensa.',
              'Visión de largo plazo.',
              'Humanización de marca.',
            ],
          },
          {
            title: 'BLOG / NEWSROOM (Bilingüe)',
            layout: 'wide',
            description: 'Sección institucional administrable orientada a:',
            groups: [
              {
                label: 'Contenidos',
                items: [
                  'Novedades de producto.',
                  'Comunicados.',
                  'Prensa.',
                  'Insights sobre Pagos, Cobros y Crypto.',
                  'Actualizaciones estratégicas.',
                ],
              },
              {
                label: 'Incluye:',
                items: [
                  'Estructura de categorías.',
                  'Plantilla optimizada para lectura y claridad.',
                  'Base SEO técnica.',
                  'Gestión 100% autogestionable por el equipo DEPAY.',
                ],
              },
            ],
          },
          {
            title: 'CONTACT',
            items: [
              'Formulario institucional.',
              'CTA a agendar reunión.',
              'Integración con sistema de agenda.',
              'Integración con Pipedrive (vía webhook/API).',
            ],
          },
        ],
      },
      {
        heading: 'Implementación y Operación',
        cards: [
          {
            title: 'Tecnología',
            layout: 'feature',
            items: [
              'WordPress custom (desarrollo a medida).',
              'Diseño 100% personalizado.',
              'Plataforma completamente autogestionable.',
              'SSL.',
              'Seguridad base.',
              'Optimización técnica.',
            ],
            groups: [
              {
                label: 'Arquitectura preparada para:',
                items: [
                  'Blog / Newsroom.',
                  'Centro de documentación futuro.',
                  'Nuevos productos.',
                  'Integraciones futuras.',
                ],
              },
            ],
            icons: ['HTML', 'PHP', 'SCSS', 'MySQL', 'jQuery'],
          },
          {
            title: 'Autogestión y Capacitación (Incluido)',
            description: 'El sitio será completamente autogestionable.',
            items: ['Al finalizar el proyecto, Alora realizará una capacitación para que el equipo DEPAY pueda:'],
            groups: [
              {
                label: 'Capacidades del equipo DEPAY',
                items: [
                  'Editar textos.',
                  'Actualizar páginas de producto.',
                  'Publicar artículos en el Blog.',
                  'Agregar entradas.',
                  'Modificar bloques estratégicos.',
                  'Subir imágenes.',
                ],
              },
              {
                label: 'Incluye:',
                items: ['1 sesión de capacitación online.', 'Guía básica de uso.', 'Buenas prácticas de actualización.'],
              },
            ],
          },
          {
            title: 'Modalidad de Trabajo',
            items: [
              'Presentaciones formales por hitos.',
              'Validaciones por etapa.',
              'Comunicación directa.',
              'Entregables claros.',
              'Cronograma definido.',
              'Metodología estructurada.',
            ],
          },
          {
            title: 'QA – Control de Calidad',
            groups: [
              {
                label: 'QA Pre-Launch',
                items: [
                  'Revisión responsive.',
                  'Validación de navegación.',
                  'Testeo de formularios.',
                  'Validación de idiomas.',
                  'Testeo de integración CRM.',
                  'Optimización performance.',
                  'Revisión de seguridad.',
                  'Validación de consistencia visual y mockups.',
                ],
              },
              {
                label: 'QA Post-Launch',
                items: [
                  'Testeo en entorno productivo.',
                  'Validación de tracking.',
                  'Monitoreo inicial.',
                  'Corrección de errores técnicos menores.',
                ],
              },
            ],
          },
          {
            title: 'Impacto Estratégico',
            items: [
              'Este proyecto permitirá a DEPAY:',
              'Comunicar claramente su ecosistema.',
              'Posicionarse como fintech robusta.',
              'Humanizar la marca.',
              'Convertir interés en reuniones.',
              'Mostrar solidez frente a clientes e inversores.',
              'Construir una base digital preparada para crecimiento.',
            ],
          },
        ],
      },
    ],
    stages: [
      {
        title: 'Etapa 1 – Diseño Estratégico & UX/UI',
        priority: 'Días 1–45',
        objective: 'Definir narrativa, arquitectura visual y experiencia.',
        scope: [
          'Workshop estratégico inicial.',
          'Definición de narrativa de producto.',
          'Wireframes.',
          'Diseño visual completo.',
          'Sistema visual consistente.',
          'Desarrollo de hasta 20 mockups.',
          'Presentaciones formales por etapa (estructura, diseño, validación).',
          'Entregable: Prototipo validado listo para desarrollo.',
        ],
      },
      {
        title: 'Etapa 2 – Desarrollo, Maquetación y QA',
        priority: 'Días 46–90',
        objective: 'Convertir diseño en plataforma funcional y robusta.',
        scope: [
          'Desarrollo WordPress personalizado (custom, no plantilla genérica).',
          'Implementación bilingüe.',
          'Integración con CRM.',
          'Implementación del Blog / Newsroom.',
          'Optimización de performance.',
          'SEO técnico base.',
          'Seguridad.',
          'Testeo funcional completo.',
        ],
      },
    ],
    includes: [
      'Arquitectura estratégica.',
      'Diseño UX/UI completo.',
      'Hasta 20 mockups.',
      'Desarrollo WordPress custom.',
      'Multilenguaje.',
      'Blog / Newsroom.',
      'Integración CRM.',
      'SEO técnico base.',
      'QA pre y post launch.',
      'Capacitación de autogestión.',
      'Puesta en producción.',
    ],
    excludes: [
      'Producción audiovisual.',
      'Estrategia de branding.',
      'Gestión continua de marketing.',
      'Desarrollo de producto.',
      'Redacción mensual de blog (servicio opcional).',
      'Mantenimiento mensual posterior (servicio opcional).',
      'Funcionalidades no especificadas.',
    ],
    timeline: {
      total: '90 días',
      conditions: [
        'Tiempos del Proyecto',
        'Duración total estimada: 90 días.',
        'El plazo comienza a partir de:',
        'Aceptación formal.',
        'Pago inicial.',
        'Entrega de manual de marca y contenidos base.',
        'Los plazos establecidos en esta propuesta no son acumulables ni extensibles en caso de demoras imputables al cliente.',
        'Cualquier retraso en la entrega de información, validaciones o aprobaciones por parte del cliente pausará el proyecto, reanudándose una vez regularizada la situación, sin obligación de mantener la fecha original de entrega.',
      ],
    },
    workflow: [],
    considerationsGroups: [
      {
        title: 'Consideraciones Importantes',
        items: [
          'El cliente deberá entregar información y definiciones técnicas en tiempo y forma.',
          'Las demoras del cliente no extienden los plazos del proyecto.',
          'Cambios fuera del alcance serán presupuestados aparte.',
          'No se realizan reembolsos una vez iniciado el proyecto.',
          'La propiedad del sitio se transfiere al cliente con el 100% del pago realizado.',
          'Garantía limitada a errores técnicos detectados post go-live.',
        ],
      },
      {
        title: 'Entrega de información y materiales',
        items: [
          'El cliente deberá entregar toda la información, contenidos y documentación requerida (textos, datos, accesos, referencias, materiales legales, etc.) en tiempo y forma, de manera obligatoria.',
          'La falta de entrega o demoras por parte del cliente podrán afectar el avance del proyecto.',
        ],
      },
      {
        title: 'Plazos del proyecto',
        items: [
          'Los plazos establecidos en esta propuesta no son acumulables ni extensibles en caso de demoras imputables al cliente.',
          'Cualquier retraso en la entrega de información, validaciones o aprobaciones por parte del cliente pausará el proyecto, reanudándose una vez regularizada la situación, sin obligación de mantener la fecha original de entrega.',
        ],
      },
      {
        title: 'Aprobaciones y revisiones',
        items: [
          'Las instancias de revisión incluidas en el proyecto están limitadas a lo detallado en el alcance.',
          'Cambios adicionales, redefiniciones de alcance o solicitudes no contempladas podrán ser presupuestadas aparte.',
        ],
      },
      {
        title: 'Cancelación del proyecto',
        items: [
          'En caso de cancelación del proyecto por parte del cliente, una vez realizado el pago o iniciado el trabajo, no se realizarán reembolsos, independientemente del estado de avance del proyecto.',
          'En caso de cancelación, Alora se reserva el derecho de no entregar avances parciales no finalizados.',
        ],
      },
      {
        title: 'Suspensión del proyecto',
        items: [
          'Si el proyecto permanece detenido por causas imputables al cliente durante un período prolongado (ej. falta de respuesta, materiales o validaciones), Alora podrá considerar el proyecto suspendido, reprogramando su continuidad según disponibilidad del equipo.',
        ],
      },
      {
        title: 'Propiedad intelectual',
        items: [
          'El sitio web y sus entregables finales serán propiedad del cliente únicamente una vez abonado el 100% del proyecto.',
          'Hasta tanto no se complete el pago total, todos los desarrollos, diseños y materiales serán propiedad de Alora.',
        ],
      },
    ],
    investment: {
      amount: 'USD 5.500',
      currency: 'USD',
      paymentTerms: [
        '40% al inicio.',
        '30% al finalizar etapa de diseño.',
        '30% contra entrega final.',
      ],
    },
    cta: {
      accept: { label: 'Acepto la propuesta', url: '#aceptar' },
      download: { label: 'Descargar PDF', url: '#descargar' },
      questions: { label: 'Tengo dudas', url: 'mailto:hola@globalalora.com?subject=Consulta%20Propuesta%20DEPAY' },
      meeting: { label: 'Coordinar reunión', url: 'https://tidycal.com/alora/reunion' },
      whatsapp: { label: 'Consulta por WhatsApp', url: 'https://wa.me/5491112345678' },
    },
  },
};

export default proposals;
