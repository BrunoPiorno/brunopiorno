export const REVIEWS_STORAGE_KEY = 'alora-reviews';

export const getBaseReviews = (t) => ([
  {
    id: 'tenis',
    name: 'Alejandro',
    company: 'Comisión de Tenis de Mesa',
    role: 'Presidente',
    message: t('testimonials.tenis.quote'),
    rating: 5,
    projectType: 'Sistema de ranking profesional',
    experience: 'Implementación full-stack',
    metrics: [
      t('testimonials.tenis.metric1'),
      t('testimonials.tenis.metric2'),
      t('testimonials.tenis.metric3')
    ],
    link: {
      url: 'https://trenquetdmranking.com.ar/',
      label: 'Ver ranking en vivo'
    },
    date: '2024-01-15'
  },
  {
    id: 'fundacion',
    name: 'Verónica Figueroa',
    company: t('testimonials.fundacion.company'),
    role: 'Fundación por Nuestros Niños',
    message: t('testimonials.fundacion.quote'),
    rating: 5,
    projectType: 'Sitio institucional a medida',
    experience: 'Proceso colaborativo largo',
    metrics: [
      t('testimonials.fundacion.metric1'),
      t('testimonials.fundacion.metric2'),
      t('testimonials.fundacion.metric3')
    ],
    link: {
      url: 'http://fpnn.org.ar/',
      label: 'Visitar FPNN'
    },
    date: '2024-02-02'
  },
  {
    id: 'rulo',
    name: 'Rulo de Viaje',
    company: t('testimonials.rulo.company'),
    role: 'Fundador',
    message: t('testimonials.rulo.quote'),
    rating: 5,
    projectType: 'Comunidad y contenido premium',
    experience: 'Iteraciones ágiles',
    metrics: [
      t('testimonials.rulo.metric1'),
      t('testimonials.rulo.metric2'),
      t('testimonials.rulo.metric3')
    ],
    link: {
      url: 'https://club.rulodeviaje.com/',
      label: 'Ver comunidad'
    },
    date: '2024-03-10'
  },
  {
    id: 'starley',
    name: 'Fernando Celaya',
    company: t('testimonials.starley.company'),
    role: 'Manager',
    message: t('testimonials.starley.quote'),
    rating: 5,
    projectType: 'Sitio corporativo + ecommerce',
    experience: 'Soporte continuo',
    metrics: [
      t('testimonials.starley.metric1'),
      t('testimonials.starley.metric2'),
      t('testimonials.starley.metric3')
    ],
    date: '2024-04-05'
  }
]);
