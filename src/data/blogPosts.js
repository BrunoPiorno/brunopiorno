// Ejemplo de posts para el blog. Agrega más objetos para más artículos.
const posts = [
  {
    slug: 'por-que-aprender-javascript-en-2025',
    translationSlug: 'why-learn-javascript-in-2025',
    title: '¿Por qué aprender JavaScript en 2025?',
    description: 'Descubre las razones por las que JavaScript sigue siendo el lenguaje más demandado y cómo puede impulsar tu carrera.',
    date: '2025-06-17',
    cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'text', value: 'JavaScript sigue liderando el desarrollo web y móvil. Su ecosistema crece y las oportunidades laborales también.' },
      { type: 'subtitle', value: 'Ventajas de JavaScript' },
      { type: 'text', value: '1. Comunidad gigante y recursos.\n2. Versatilidad: frontend, backend, mobile, IoT.\n3. Herramientas modernas y frameworks top.' },
      { type: 'code', value: 'console.log("¡JavaScript es el futuro!");' },
      { type: 'text', value: '¿Listo para aprender JS? Explora nuestros tutoriales y recursos.' }
    ]
  },
  {
    slug: 'tendencias-seo-para-desarrolladores',
    translationSlug: 'seo-trends-for-developers',
    title: 'Tendencias SEO para desarrolladores',
    description: 'Las claves de SEO técnico que todo dev debe conocer para destacar en Google en 2025.',
    date: '2025-06-17',
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'text', value: 'El SEO técnico es fundamental en proyectos modernos. Google prioriza la velocidad, accesibilidad y estructura semántica.' },
      { type: 'subtitle', value: 'Tips clave' },
      { type: 'text', value: '1. Usa etiquetas HTML5 semánticas.\n2. Optimiza imágenes y recursos.\n3. Implementa OpenGraph y meta tags.' },
      { type: 'code', value: '<meta name="description" content="Tu descripción aquí" />' },
      { type: 'text', value: 'El futuro del SEO es para quienes dominan la tecnología.' }
    ]
  },
  // --- NUEVOS POSTS SOBRE WORDPRESS Y PHP 8.2 ---
  {
    slug: 'mejorar-seguridad-wordpress-2025',
    translationSlug: 'improve-wordpress-security-2025',
    title: 'Cómo mejorar la seguridad de tu WordPress en 2025',
    description: 'Guía avanzada y actualizada para proteger tu sitio WordPress frente a amenazas modernas, plugins y ciberataques.',
    date: '2025-06-17',
    cover: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'text', value: '¿Sabías que más del 40% de los sitios web del mundo usan WordPress? Esta popularidad lo convierte en un blanco frecuente de hackers y bots. Si tienes o gestionas un sitio WordPress, protegerlo no es opcional: es esencial para tu reputación, SEO y la confianza de tus visitantes.' },
      { type: 'subtitle', value: '¿Por qué es tan importante la seguridad en WordPress?' },
      { type: 'text', value: 'Un sitio comprometido puede perder posicionamiento en Google, ser penalizado, enviar spam o incluso quedar inaccesible. Además, los ataques evolucionan cada año: en 2025, el phishing, los exploits de plugins y los ataques de fuerza bruta son más sofisticados que nunca.' },
      { type: 'subtitle', value: 'Checklist de seguridad WordPress 2025' },
      { type: 'text', value: '1. Mantén WordPress, plugins y temas siempre actualizados para evitar vulnerabilidades conocidas.\n2. Usa contraseñas robustas y activa la autenticación en dos pasos (2FA) para todos los usuarios.\n3. Instala solo plugins y temas de fuentes confiables; elimina los que no utilices.\n4. Limita los intentos de login y cambia la URL de acceso si es posible.' },
      { type: 'subtitle', value: 'Forzar HTTPS y proteger el panel de administración' },
      { type: 'code', value: "define('FORCE_SSL_ADMIN', true);" },
      { type: 'text', value: 'Este fragmento en tu wp-config.php obliga a que todo el acceso al admin sea por HTTPS, protegiendo tus credenciales y datos.' },
      { type: 'subtitle', value: 'Plugins recomendados para seguridad' },
      { type: 'text', value: '- Wordfence Security: firewall y escaneo de malware.\n- iThemes Security: endurece configuraciones y bloquea ataques comunes.\n- UpdraftPlus: backups automáticos y restauración fácil.' },
      { type: 'subtitle', value: 'Consejos SEO: la seguridad también posiciona' },
      { type: 'text', value: 'Google prioriza sitios seguros (HTTPS, sin malware, sin spam). Un sitio hackeado puede ser eliminado del índice. Mantener tu WordPress seguro es clave para tu posicionamiento y reputación online.' },
      { type: 'subtitle', value: '¿Tienes dudas o quieres más tips?' },
      { type: 'text', value: 'Déjame tu comentario abajo o comparte este artículo en redes si te resultó útil. ¡Protege tu WordPress y ayuda a otros a hacerlo también!' }
    ]
  },
  {
    slug: 'php-8-2-en-wordpress',
    translationSlug: 'php-8-2-in-wordpress',
    title: '¿Qué aporta PHP 8.2 a WordPress? Novedades y compatibilidad',
    description: 'Descubre todas las ventajas de usar PHP 8.2 en WordPress, cómo actualizar sin riesgos y qué tener en cuenta para SEO y plugins.',
    date: '2025-06-17',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'text', value: '¿Conviene actualizar WordPress a PHP 8.2? ¡Definitivamente sí! PHP 8.2 es la versión más moderna y segura, y trae mejoras que pueden acelerar y proteger tu web. Pero hay detalles clave para evitar errores y aprovechar todo su potencial.' },
      { type: 'subtitle', value: '¿Por qué actualizar a PHP 8.2 en WordPress?' },
      { type: 'text', value: 'PHP 8.2 ofrece un rendimiento superior: tu web carga más rápido, consume menos recursos y es más segura frente a ataques. Además, muchas funciones antiguas y vulnerables han sido eliminadas, lo que reduce riesgos.' },
      { type: 'subtitle', value: 'Principales novedades de PHP 8.2 para desarrolladores WordPress' },
      { type: 'text', value: '- Tipos readonly: ideales para datos de configuración inmutables.\n- Mejoras en enums, nuevas funciones y sintaxis más clara.\n- Deprecación de funciones inseguras y mayor control de errores.' },
      { type: 'subtitle', value: 'Ejemplo práctico: propiedades readonly en PHP 8.2' },
      { type: 'code', value: 'class Config {\n    public readonly string $site_url;\n    public function __construct($url) {\n        $this->site_url = $url;\n    }\n}' },
      { type: 'text', value: 'Esto ayuda a evitar cambios accidentales en la configuración de tu web.' },
      { type: 'subtitle', value: '¿Cómo actualizar WordPress a PHP 8.2 sin romper nada?' },
      { type: 'text', value: '1. Haz un backup completo de tu web y base de datos.\n2. Prueba la actualización en un entorno de staging antes de aplicarla en producción.\n3. Actualiza todos los plugins y temas a sus últimas versiones.\n4. Usa plugins como PHP Compatibility Checker para detectar posibles incompatibilidades.' },
      { type: 'subtitle', value: 'SEO: ¿PHP 8.2 mejora el posicionamiento?' },
      { type: 'text', value: '¡Sí! Google valora la velocidad y la seguridad. Un WordPress rápido y seguro ayuda a mejorar Core Web Vitals y reduce el riesgo de penalizaciones.' },
      { type: 'subtitle', value: '¿Tienes dudas sobre PHP 8.2 en WordPress?' },
      { type: 'text', value: 'Déjame tu comentario o comparte tu experiencia. ¡Ayudemos a la comunidad a avanzar con tecnología moderna!' }
    ]
  },
  {
    slug: 'mejores-plugins-wordpress-2025',
    title: 'Los mejores plugins para WordPress en 2025',
    description: 'Descubre la lista definitiva de plugins imprescindibles para WordPress este año, con consejos de uso, SEO y seguridad.',
    date: '2025-06-17',
    cover: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'text', value: '¿Buscas potenciar tu web WordPress y no sabes qué plugins elegir? En 2025, la oferta es enorme, pero solo algunos realmente marcan la diferencia en SEO, velocidad y seguridad. Aquí tienes una selección probada y consejos para sacarles el máximo partido.' },
      { type: 'subtitle', value: 'Plugins imprescindibles para WordPress en 2025' },
      { type: 'text', value: '1. Yoast SEO: el favorito para optimizar títulos, meta descripciones y mapas de sitio.\n2. WP Rocket: acelera la carga, mejora el caché y ayuda a pasar los Core Web Vitals de Google.\n3. Wordfence Security: protege tu web de ataques y malware con firewall y escaneo automático.\n4. Elementor: el constructor visual más flexible para crear páginas atractivas sin código.' },
      { type: 'subtitle', value: '¿Cómo elegir plugins sin afectar el rendimiento?' },
      { type: 'text', value: 'Elige solo los plugins que realmente necesitas. Revisa valoraciones, actualizaciones y compatibilidad con tu versión de WordPress y PHP. Desinstala los que no uses y evita duplicar funcionalidades.' },
      { type: 'subtitle', value: 'SEO y plugins: aliados para posicionar' },
      { type: 'text', value: 'Un plugin mal configurado puede afectar tu SEO. Configura bien Yoast SEO, optimiza imágenes y usa plugins de caché para mejorar la velocidad, un factor clave para Google.' },
      { type: 'subtitle', value: '¿Tienes dudas o quieres recomendar tu plugin favorito?' },
      { type: 'text', value: '¡Déjalo en los comentarios o comparte este artículo! Así ayudamos a más usuarios a crear webs de calidad.' }
    ]
  }
];

export default posts;

