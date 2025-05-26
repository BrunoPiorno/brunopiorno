import React, { useState, useMemo, useCallback } from 'react'; 
import { motion, useInView, animate, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import '../App.css';
import '../devicons/devicon.min.css';
import Modal from './Modal';
import ServiceCard from './ServiceCard';
import ProjectCard from './ProjectCard';
import ClientCard from './ClientCard';
// Import images
import entradafanLogo from '../images/entradafan.svg';
import clarikaLogo from '../images/clarika-logo.svg'; 

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

  const projects = useMemo(() => {
    const featuredProjects = t('projects.featured');
    return featuredProjects.map(project => ({
      ...project,
      image: project.title === 'EntradaFan' ? entradafanLogo : clarikaLogo
    }));
  }, [t]);

  const clients = [
    {
      name: 'EntradaFan',
      logo: entradafanLogo,
      url: 'https://www.entradafan.com.ar'
    },
    {
      name: 'Sony Music',
      logo: require('../images/sony.png'),
    },
    {
      name: 'Clarika',
      logo: clarikaLogo,
      url: 'https://clarika.com.ar'
    },
    {
      name: 'Paramedic',
      logo: require('../images/paramedic.jpg'),
      url: 'https://www.paramedic.com.ar'
    },
    {
      name: 'Brillonor',
      logo: require('../images/brillonor.png'),
      url: 'https://brillonor.com.ar'
    },
    {
      name: 'Reino Ceramicos',
      logo: require('../images/reinoceramicos.png'),
      url: 'https://reinoceramicos.com'
    },
    {
      name: 'ConsultoraOn',
      logo: require('../images/consultoraon.png'),
      url: 'https://consultoraon.net'
    }, 
    {
      name: 'InfoEcos',
      logo: require('../images/infoecos.png'),
      url: 'https://infoecos.com.ar'
    },
    {
      name: 'MegaMayorista',
      logo: require('../images/logo-megamayorista-nobg.png'),
      url: 'https://megamayorista.com.ar'
    },
  ];

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
      title: t('services.wordpress.title'),
      description: t('services.wordpress.desc'),
      icon: 'devicon-wordpress-plain'
    },
    {
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.desc'),
      icon: 'devicon-woocommerce-plain'
    },
    {
      title: t('services.webdev.title'),
      description: t('services.webdev.desc'),
      icon: 'devicon-html5-plain'
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
      { name: 'JavaScript', icon: 'devicon-javascript-plain' },
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'Composer', icon: 'devicon-composer-line' },
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'Figma', icon: 'devicon-figma-plain' },
      { name: 'ACF', icon: 'devicon-wordpress-plain' }  
  ];

  const allProjects = [
    {
      title: t('projects.terralauquen.title'),
      description: t('projects.terralauquen.desc'),
      image: require('../images/grupoterralauquen.com.ar_.png'),
      url: 'https://grupoterralauquen.com.ar'
    },
    {
      title: t('projects.megamayorista.title'),
      description: t('projects.megamayorista.desc'),
      image: require('../images/megamayorista.png'),
      url: 'https://megamayorista.com.ar'
    },
    {
      title: t('projects.mimikids.title'),
      description: t('projects.mimikids.desc'),
      image: require('../images/mimikids.png'),
      url: 'https://mimikids.com.ar'
    },
    {
      title: 'Tenis de Mesa Trenque',
      description: 'Portal deportivo con sistema de ranking y gestión de torneos desarrollado en WordPress.',
      image: require('../images/tenisdemesatrenque.com.ar_.png'),
      url: 'https://tenisdemesatrenque.com.ar'
    },
    {
      title: 'Chichic',
      description: 'Tienda online de productos personalizados con sistema de pedidos y catálogo digital.',
      image: require('../images/chichicImage.png'),
      url: 'https://chichic.com.ar'
    },
    {
      title: 'Ranking Tenis de Mesa',
      description: 'Sistema de ranking y estadísticas para torneos de tenis de mesa.',
      image: require('../images/tenisDeMesaImageRank.png'),
      url: 'https://ranking.tenisdemesatrenque.com.ar'
    }
  ];

  return (
    <div className="homepage">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Bruno Piorno - Desarrollo Web",
            "image": "https://brunopiorno.com.ar/logo-white.svg",
            "description": "Desarrollo de sitios web y sistemas. Especializado en WordPress y WooCommerce.",
            "url": "https://brunopiorno.com.ar",
            "telephone": "+5492392460230",
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
        <meta name="keywords" content="desarrollador web, WordPress, WooCommerce, PHP, MySQL, HTML, SCSS, jQuery, GitHub, VS Code" />
        <meta name="author" content="Bruno Piorno" />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="/logo-white.svg" />
        <meta property="og:url" content="https://brunopiorno.com.ar" />
      </Helmet>

      {/* Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
          <div className={`nav-content ${isMobileMenuOpen ? 'menu-open' : ''}`}>
            <motion.a 
              href="#"
              className="logo-container"
              onClick={(e) => scrollToSection(e, 'hero')}
            >
              <motion.img
                src="/logo-white.svg" 
                alt="Bruno Piorno"
                className="logo"
                transition={{ duration: 0.2 }}
              />
            </motion.a>

            <div className="mobile-controls">
              <LanguageToggle />
              <button 
                className="mobile-menu-button" 
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>

            <motion.div 
              className="nav-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>{t('header.services')}</a>
              <a href="#proyectos" onClick={(e) => scrollToSection(e, 'proyectos')}>{t('header.projects')}</a>
              <a href="#clientes" onClick={(e) => scrollToSection(e, 'clientes')}>{t('header.clients')}</a>
              <a href="#metodologia" onClick={(e) => scrollToSection(e, 'metodologia')}>{t('header.methodology')}</a>
              <a href="#tecnologias" onClick={(e) => scrollToSection(e, 'tecnologias')}>{t('header.technologies')}</a>
              <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="contact-btn">{t('header.contact')}</a>
            </motion.div>
          </div>
      </header>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#proyectos" className="cta-button" onClick={(e) => scrollToSection(e, 'proyectos')}>
              {t('hero.cta')}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('stats.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('stats.subtitle')}
          </motion.p>
        </div>
        <div className="hero-stats">
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AnimatedCounter value={80} suffix="+" />
            <p>{t('stats.item1')}</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <AnimatedCounter value={6} suffix="+" />
            <p>{t('stats.item2')}</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <AnimatedCounter value={100} suffix="%" />
            <p>{t('stats.item3')}</p>
          </motion.div>
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
      </section>

      {/* Projects Section */}
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

        <div className="projects-grid">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
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

        <div className="clients-grid">
          {clients.map((client, index) => (
            <ClientCard key={client.name} client={client} index={index} />
          ))}
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
              href="https://wa.me/+5492392460230" 
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
            <img src={require('../images/asana-screenshot.jpg')} alt="Asana Project Management" />
          </motion.div>

          <motion.div 
            className="workflow-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>{t('methodology.title')}</h3>
            <ul>
              <li>
                <span className="icon">✓</span>
                <div>
                  <strong>{t('methodology.planning')}</strong>
                  <p>{t('methodology.planning.desc')}</p>
                </div>
              </li>
              <li>
                <span className="icon">✓</span>
                <div>
                  <strong>{t('methodology.tracking')}</strong>
                  <p>{t('methodology.tracking.desc')}</p>
                </div>
              </li>
              <li>
                <span className="icon">✓</span>
                <div>
                  <strong>{t('methodology.communication')}</strong>
                  <p>{t('methodology.communication.desc')}</p>
                </div>
              </li>
              <li>
                <span className="icon">✓</span>
                <div>
                  <strong>{t('methodology.transparency')}</strong>
                  <p>{t('methodology.transparency.desc')}</p>
                </div>
              </li>
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

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="tool-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <i className={tool.icon}></i>
              <span>{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

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
          
          <div className="contact-buttons">
            <motion.a
              href="https://wa.me/+542392460230"
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
              href="mailto:brunopiornop@gmail.com"
              className="contact-button email"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-envelope"></i>
              Email
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/bruno-piorno-polucci"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button linkedin"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Modal for project details */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default HomePage;