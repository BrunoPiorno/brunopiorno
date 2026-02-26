import React, { useState, useMemo, useCallback } from 'react'; 
import { motion, useInView, animate, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import '../App.css';
import '../devicons/devicon.min.css';
import Modal from './Modal';
import ServiceCard from './ServiceCard';
import AboutSection from './AboutSection';
import ProjectCard from './ProjectCard';
import ClientCard from './ClientCard';
import TestimonialCard from './TestimonialCard';
import LatestPosts from './LatestPosts';
import FloatingIcons from './FloatingIcons';
import ContactForm from './ContactForm';
import ContactSection from './ContactSection';
import Chatbot from './Chatbot';
import entradafanLogo from '../images/entradafan.svg';
import gangafanlogo from '../images/gangafan-logo.svg';
import fpnnLogo from '../images/fpnn.png';
import nutriacLogo from '../images/nutriac-logo.svg';
import yampop from '../images/yampop.png';
import boutique from '../images/logo-boutique.png';
import zerxio from '../images/zerxio-logo.svg';
import heroImage from '../images/team.png';
import alauxImage from '../images/alaux.png';
import gretaImage from '../images/greta.png';
import talleresImage from '../images/talleres.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest) + suffix;
          }
        }
      });

      return controls.stop;
    }
  }, [isInView, value, suffix]);

  return <motion.h3 ref={ref}>{0 + suffix}</motion.h3>;
};

const HomePage = () => {
  const { t, locale } = useLanguage();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = useMemo(() => {
    const featuredProjects = t('projects.featured');
    const projectImages = {
      EntradaFan: entradafanLogo,
      'Fundación Por Nuestros Niños': fpnnLogo,
      'Talleres Unidos': talleresImage,
    };

    return featuredProjects.map(project => ({
      ...project,
      image: projectImages[project.title] || project.image || gangafanlogo
    }));
  }, [t]);

  const clients = [
    {
      name: 'GangaFan',
      logo: gangafanlogo,
      url: 'https://www.gangafan.com'
    },
    {
      name: 'EntradaFan',
      logo: entradafanLogo,
      url: 'https://www.entradafan.com.ar'
    },
    {
      name: 'Yampop',
      logo: require('../images/yampop.png'),
      url: 'https://yampop.com'
    },
    {
      name: 'Alaux Neumáticos',
      logo: require('../images/alaux_logo.png'),
      url: 'http://www.alauxneumaticos.com.ar'
    },
    {
      name: 'Studio 510',
      logo: require('../images/logostudio.png'),
      url: 'https://studio510.com.ar',
      filter: true
    },
    {
      name: 'Nutriac',
      logo: nutriacLogo,
      url: 'https://nutriac.com.ar'
    },
    {
      name: 'Zerxio',
      logo: zerxio,
      url: 'https://zerxio.com'
    },
    {
      name: 'Boutique de luz',
      logo: boutique,
      url: 'https://boutiquedeluz.com'
    },
    {
      name: 'Brillonor',
      logo: require('../images/brillonor.png'),
      url: 'https://brillonor.com.ar'
    },
    {
      name: 'Starley',
      logo: require('../images/starley.png'),
      url: 'https://starley.com.ar',
      filter: true
    }, 
    {
      name: 'Infoecos',
      logo: require('../images/infoecos.png'),
      url: 'https://infoecos.com.ar'
    },
    {
      name: 'Megamayorista',
      logo: require('../images/logo-megamayorista-nobg.png'),
      url: 'https://megamayorista.com'
    },

    {
      name: 'Mimikids',
      logo: require('../images/mimikidslogo.png'),
      url: 'https://mimikids.com.ar'
    },
  ];

  const testimonials = useMemo(() => ([
    {
      quote: t('testimonials.tenis.quote'),
      author: 'Alejandro',
      company: 'Presidente de la Comisión de Tenis de Mesa',
      image: require('../images/tenisdemesa.png'),
      metrics: [
        t('testimonials.tenis.metric1'),
        t('testimonials.tenis.metric2'),
        t('testimonials.tenis.metric3')
      ],
      link: {
        url: 'https://trenquetdmranking.com.ar/',
        label: 'Ver ranking en vivo'
      }
    },
    {
      quote: t('testimonials.fundacion.quote'),
      author: 'Verónica Figueroa',
      company: t('testimonials.fundacion.company'),
      image: require('../images/fundacion.png'),
      metrics: [
        t('testimonials.fundacion.metric1'),
        t('testimonials.fundacion.metric2'),
        t('testimonials.fundacion.metric3')
      ],
      link: {
        url: 'http://fpnn.org.ar/',
        label: 'Visitar FPNN'
      }
    },
    {
      quote: t('testimonials.rulo.quote'),
      author: 'Rulo de Viaje',
      company: t('testimonials.rulo.company'),
      image: require('../images/rulo.png'),
      metrics: [
        t('testimonials.rulo.metric1'),
        t('testimonials.rulo.metric2'),
        t('testimonials.rulo.metric3')
      ],
      link: {
        url: 'https://club.rulodeviaje.com/',
        label: 'Ver comunidad'
      }
    },
    {
      quote: t('testimonials.starley.quote'),
      author: 'Fernando Celaya',
      company: t('testimonials.starley.company'),
      image: 'https://www.globalalora.com/static/media/starley.2f17ea4f84781e41e085.png',
      metrics: [
        t('testimonials.starley.metric1'),
        t('testimonials.starley.metric2'),
        t('testimonials.starley.metric3')
      ]
    }
  ]), [t]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Altura del header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      title: t('services.webdev.title'),
      description: t('services.webdev.desc'),
      icon: 'devicon-html5-plain'
    },
    {
      title: t('services.landing.title'),
      description: t('services.landing.desc'),
      icon: 'devicon-bootstrap-plain'
    },
    {
      title: t('services.webapp.title'),
      description: t('services.webapp.desc'),
      icon: 'devicon-nodejs-plain'
    },
    {
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.desc'),
      icon: 'fa-solid fa-cart-shopping'
    },
    {
      title: t('services.googleads.title'),
      description: t('services.googleads.desc'),
      icon: 'devicon-google-plain'
    },
    {
      title: t('services.maintenance.title'),
      description: t('services.maintenance.desc'),
      icon: 'devicon-github-original'
    },
    {
      title: t('services.aisupport.title'),
      description: t('services.aisupport.desc'),
      icon: 'fa-solid fa-robot',
      highlight: true
    }
  ];

  const tools = [
      { name: 'PHP', icon: 'devicon-php-plain' },
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'HTML', icon: 'devicon-html5-plain' },
      { name: 'SCSS', icon: 'devicon-sass-original' },
      { name: 'jQuery', icon: 'devicon-jquery-plain' },
      { name: 'WordPress', icon: 'devicon-wordpress-plain' },
      { name: 'WooCommerce', icon: 'devicon-woocommerce-plain' },
      { name: 'VS Code', icon: 'devicon-visualstudio-plain' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'Redis', icon: 'devicon-redis-plain' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'Composer', icon: 'devicon-composer-line' },
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'Figma', icon: 'devicon-figma-plain' },
      { name: 'ACF', icon: 'devicon-wordpress-plain' },
      { name: 'Vite', icon: 'devicon-vitejs-plain' }  
  ];

  const allProjects = [
        {
      title: t('projects.talleres.title'),
      description: t('projects.talleres.desc'),
      image: talleresImage,
      url: '#',
      contribution: 'contribution.full',
      category: 'sistema-web'
    },
    {
      title: t('projects.fpnn.title'),
      description: t('projects.fpnn.desc'),
      image: fpnnLogo,
      url: 'http://fpnn.org.ar/',
      contribution: 'contribution.full',
      category: 'web-informativa'
    },
    {
      title: t('projects.greta.title'),
      description: t('projects.greta.desc'),
      image: gretaImage,
      url: 'https://gretakidsatelier.com.ar',
      contribution: 'contribution.full',
      category: 'woocommerce'
    },
    {
      title: t('projects.alaux.title'),
      description: t('projects.alaux.desc'),
      image: alauxImage,
      url: 'https://tiendaalaux.com.ar',
      contribution: 'contribution.full',
      category: 'woocommerce'
    },
        {
      title: t('projects.yumkax.title'),
      description: t('projects.yumkax.desc'),
      image: require('../images/yumkax.png'),
      url: 'https://yumkax.com.ar/',
      contribution: 'contribution.improvements',
      category: 'mejoras-web'
    },
    {
      title: t('projects.starleyweb.title'),
      description: t('projects.starleyweb.desc'),
      image: require('../images/starleyweb.png'),
      url: 'https://starleyemotion.com.ar/',
      contribution: 'contribution.improvements',
      category: 'landing'
    },
    {
      title: t('projects.terracota.title'),
      description: t('projects.terracota.desc'),
      image: require('../images/terracota.png'),
      url: 'https://terracottavalladolid.com/carta/',
      contribution: 'contribution.custom_dev',
      location: '🇪🇸',
      category: 'mejoras-web'
    },
    {
      title: t('projects.gangafan.title'),
      description: t('projects.gangafan.desc'),
      image: require('../images/gangafan-page.png'),
      url: 'https://gangafan.com',
      contribution: 'contribution.full',
      category: 'woocommerce'
    },
    {
      title: t('projects.terralauquen.title'),
      description: t('projects.terralauquen.desc'),
      image: require('../images/grupoterralauquen.com.ar_.png'),
      url: 'https://grupoterralauquen.com.ar',
      contribution: 'contribution.full',
      category: 'web-informativa'
    },  
    {
      title: t('projects.josejose.title'),
      description: t('projects.josejose.desc'),
      image: require('../images/josejose.png'),
      url: 'https://www.josejoseoficial.com.mx/',
      contribution: 'contribution.full',
      category: 'landing'
    },
    {
      title: t('projects.protorneo.title'),
      description: t('projects.protorneo.desc'),
      image: require('../images/protorneo.png'),
      url: 'https://www.protorneos.com',
      contribution: 'contribution.full',
      category: 'landing'
    },
    {
      title: t('projects.megamayorista.title'),
      description: t('projects.megamayorista.desc'),
      image: require('../images/megamayorista.png'),
      url: 'https://megamayorista.com',
      contribution: 'contribution.full',
      category: 'woocommerce'
    },
    {
      title: t('projects.cichic.title'),
      description: t('projects.cichic.desc'),
      image: require('../images/chichicImage.png'),
      url: 'https://chichicwinerelax.com/',
      contribution: 'contribution.full',
      category: 'web-informativa'
    },
    {
      title: t('projects.fapcdms.title'),
      description: t('projects.fapcdms.desc'),
      image: require('../images/fapcdms-logo.png'),
      url: 'https://fapcdms.com/',
      contribution: 'contribution.improvements',
      category: 'sistema-web'
    },
    {
      title: t('projects.tenis.title'),
      description: t('projects.tenis.desc'),
      image: require('../images/tenisdemesatrenque.com.ar_.png'),
      url: 'https://tenisdemesatrenque.com.ar',
      contribution: 'contribution.full',
      category: 'landing'
    },
    {
      title: t('projects.ranking.title'),
      description: t('projects.ranking.desc'),
      image: require('../images/tenisDeMesaImageRank.png'),
      url: 'https://trenquetdmranking.com.ar/',
      contribution: 'contribution.full',
      category: 'sistema-web'
    }
  ];

  // Filtrar proyectos según la categoría seleccionada
  const filteredProjects = selectedFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedFilter);

  const categories = [
    { id: 'all', name: locale === 'es' ? 'Todos' : 'All' },
    { id: 'woocommerce', name: 'WooCommerce' },
    { id: 'landing', name: locale === 'es' ? 'Landing' : 'Landing' },
    { id: 'sistema-web', name: locale === 'es' ? 'Sistema Web' : 'Web System' },
    { id: 'web-informativa', name: locale === 'es' ? 'Web Informativa' : 'Informational Web' },
    { id: 'mejoras-web', name: locale === 'es' ? 'Mejoras Web' : 'Web Improvements' }
  ];

  return (
    <div className="homepage">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Alora - Desarrollo Web",
            "image": "https://globalalora.com/logo-web.png",
            "description": "Desarrollo de sitios web a medida para profesionales y empresas, con diseño moderno, rendimiento optimizado y enfoque en conversiones.",
            "url": "https://globalalora.com",
            "telephone": "+5491124629452",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Trenque Lauquen",
              "addressRegion": "Buenos Aires",
              "addressCountry": "AR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -37.3289152,
              "longitude": -59.1334421
            },
            "priceRange": "$$",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:00"
            }
          })}
        </script>
        <title>{t('meta.title')}</title>
        <meta
          name="description"
          content={t('meta.description')}
        />
        <meta name="keywords" content="Alora, desarrollo web, diseño web, WordPress, WooCommerce, eCommerce, PHP, MySQL, React, optimización web, soluciones digitales globales" />
        <meta name="author" content="Alora" />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="/aloralogo.png" />
        <meta property="og:url" content="https://globalalora.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('meta.title')} />
        <meta name="twitter:description" content={t('meta.description')} />
        <meta name="twitter:image" content="https://globalalora.com/aloralogo.png" />
      </Helmet>

      {/* Hero Section */}
            <section className="hero-section" id="hero">
        <FloatingIcons />
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href={locale === 'en' ? "https://wa.me/+541124629452" : "https://wa.me/+5491124629452"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button"
              >
                {t('hero.cta')}
              </a>
              <a 
                href="#proyectos" 
                onClick={(e) => scrollToSection(e, 'proyectos')}
                className="cta-button secondary"
              >
                {t('hero.cta2')}
              </a>
            </motion.div>
          </div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img src={heroImage} alt="Hero" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('stats.title')}</h2>
          <p>{t('stats.subtitle')}</p>
        </motion.div>
        <div className="stats-grid">
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <i className="fas fa-rocket"></i>
            <AnimatedCounter value={50} suffix="+" />
            <p>{t('stats.item1')}</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <i className="fas fa-lightbulb"></i>
            <AnimatedCounter value={200} suffix="+" />
            <p>{t('stats.item2')}</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <i className="fas fa-coffee"></i>
            <AnimatedCounter value={1500} suffix="+" />
            <p>{t('stats.item3')}</p>
          </motion.div>
        </div>
      </section>
      <AboutSection />
      <section id="proyectos" className="projects-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('projects.title')}</h2>
          <p>{t('projects.subtitle')}</p>
        </motion.div>

        {/* Filtros de proyectos */}
        <motion.div 
          className="projects-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedFilter === category.id ? 'active' : ''}`}
              onClick={() => setSelectedFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {/* Grid para desktop */}
          <div className="projects-grid-desktop">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* Carousel solo para mobile */}
          <div className="projects-carousel-mobile">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={false}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2.2,
                  spaceBetween: 25,
                }
              }}
              className="projects-swiper"
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="services-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('services.title')}</h2>
          <p>{t('services.subtitle')}</p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>



        <motion.div 
          className="gdpr-compliance-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>{t('services.gdprCompliance')}</p>
        </motion.div>
      </section>

      

      {/* Clients Section */}
      <section id="clientes" className="clients-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('clients.title')}</h2>
          <p>{t('clients.subtitle')}</p>
        </motion.div>

        <div className="clients-slider-container">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={4000}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              480: { slidesPerView: 3, spaceBetween: 30 },
              640: { slidesPerView: 4, spaceBetween: 40 },
              1024: { slidesPerView: 5, spaceBetween: 50 },
            }}
            className="clients-swiper"
          >
            {[...clients, ...clients].map((client, index) => (
              <SwiperSlide key={index}>
                <ClientCard client={client} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="testimonials-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('testimonials.title')}</h2>
          <p>{t('testimonials.subtitle')}</p>
        </motion.div>

        <div className="testimonials-panel">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`testimonial-${index}`} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>

      </section>

      {/* Recognition Section */}
      <section id="reconocimientos" className="recognition-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('recognition.title')}</h2>
          <p>{t('recognition.subtitle')}</p>
        </motion.div>

        <div className="recognition-content">
          <motion.div 
            className="recognition-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="recognition-icon">
              <i className="fas fa-award"></i>
            </div>
            <h3>{t('recognition.designrush.title')}</h3>
            <p>{t('recognition.designrush.desc')}</p>
            <a 
              href="https://www.designrush.com/agency/web-development-companies/trends/ai-debugging-tools"
              target="_blank"
              rel="noopener noreferrer"
              className="recognition-link"
            >
              {t('recognition.designrush.link')} <i className="fas fa-external-link-alt"></i>
            </a>
          </motion.div>
          
          <motion.div 
            className="recognition-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="recognition-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h3>{t('recognition.techbehemoths.title')}</h3>
            <p>{t('recognition.techbehemoths.desc')}</p>
            <p>{t('recognition.techbehemoths.desc2')}</p>
            <a 
              href="/certificate.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="recognition-link"
            >
              {t('recognition.techbehemoths.link')} <i className="fas fa-external-link-alt"></i>
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.subtitle')}</p>
          <div className="cta-buttons">
            <a 
              href={locale === 'en' ? "https://wa.me/+541124629452" : "https://wa.me/+5491124629452"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <i className="fab fa-whatsapp"></i> {t('cta.whatsapp')}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Workflow Section */}
      <section id="metodologia" className="workflow-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('methodology.title')}</h2>
          <p>{t('methodology.subtitle')}</p>
        </motion.div>

        <div className="workflow-content">
          <motion.div 
            className="workflow-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={require('../images/asana-screenshot.jpg')} alt="Asana Project Management" loading="lazy" />
          </motion.div>

          <motion.div 
            className="workflow-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ul>
              {[ 'planning', 'tracking', 'communication', 'transparency' ].map(item => (
                <li key={item}>
                  <span className="icon">✓</span>
                  <div>
                    <strong>{t(`methodology.${item}`)}</strong>
                    <p>{t(`methodology.${item}.desc`)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tecnologias" className="tools-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('tech.title')}</h2>
          <p>{t('tech.subtitle')}</p>
        </motion.div>

        <div className="tools-slider-container">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={5000}
            breakpoints={{
              320: { slidesPerView: 3, spaceBetween: 20 },
              480: { slidesPerView: 4, spaceBetween: 30 },
              640: { slidesPerView: 5, spaceBetween: 40 },
              1024: { slidesPerView: 7, spaceBetween: 50 },
            }}
            className="tools-swiper"
          >
            {[...tools, ...tools].map((tool, index) => (
              <SwiperSlide key={index}>
                <div className="tool-card">
                  <i className={tool.icon}></i>
                  <span>{tool.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Latest Posts Section */}
      <LatestPosts />

      {/* Contact Section */}
      <section id="contacto" className="contact-section">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.subtitle')}</p>

          <ContactForm />

          <div className="alternative-contact">
            <div className="separator">o</div>
            <p>{t('contact.alternatives')}</p>
          </div>
          
          <div className="contact-buttons">
            <motion.a
              href={locale === 'en' ? "https://wa.me/+541124629452" : "https://wa.me/+541124629452"}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button whatsapp"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-whatsapp"></i>
              WhatsApp
            </motion.a>
            
            <motion.a
              href="mailto:info@globalalora.com"
              className="contact-button email"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-envelope"></i>
              Email
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/company/aloraglobal"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button linkedin"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </motion.a>

            <motion.a
              href="https://www.instagram.com/globalalora/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button instagram"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-instagram"></i>
              Instagram
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Modal for project details */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      {/* Chatbot AI */}
      <Chatbot />
    </div>
  );
};

export default HomePage;
