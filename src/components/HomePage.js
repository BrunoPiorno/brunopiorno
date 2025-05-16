import React, { useState, useMemo, useCallback } from 'react'; 
import { motion, useInView, animate, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

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
import { Helmet } from 'react-helmet';
import '../App.css';
import '../devicons/devicon.min.css';
import Modal from './Modal';
import ServiceCard from './ServiceCard';
import ProjectCard from './ProjectCard';
import ClientCard from './ClientCard';
// Import images
import entradafanLogo from '../images/entradafan.svg';
import clarikaLogo from '../images/clarika-logo.svg'; 

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      name: 'ConsultoraOn',
      logo: require('../images/consultoraon.png'),
      url: 'https://consultoraon.net'
    },
    {
      name: 'Reino Ceramicos',
      logo: require('../images/reinoceramicos.png'),
      url: 'https://reinoceramicos.com'
    },
    {
      name: 'Clarika',
      logo: clarikaLogo,
      url: 'https://clarika.com.ar'
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
      title: 'Desarrollo WordPress',
      description: 'Sitios web profesionales y personalizados con el CMS más popular del mundo',
      icon: 'devicon-wordpress-plain'
    },
    {
      title: 'E-commerce',
      description: 'Tiendas online potentes y escalables con WooCommerce',
      icon: 'devicon-woocommerce-plain'
    },
    {
      title: 'Desarrollo Web',
      description: 'Soluciones web a medida con las últimas tecnologías',
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

  const projects = [
    {
      title: 'Grupo Terra Lauquen',
      description: 'Sitio web corporativo desarrollado con WordPress para empresa de servicios agrícolas.',
      image: require('../images/grupoterralauquen.com.ar_.png'),
      url: 'https://grupoterralauquen.com.ar'
    },
    {
      title: 'Mega Mayorista',
      description: 'E-commerce desarrollado con WooCommerce para venta mayorista de productos.',
      image: require('../images/megamayorista.png'),
      url: 'https://megamayorista.com.ar'
    },
    {
      title: 'Mimi Kids',
      description: 'Tienda online de ropa infantil implementada con WooCommerce y diseño personalizado.',
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
        <title>Bruno Piorno | Desarrollador Web especializado en WordPress y WooCommerce</title>
        <meta name="description" content="Soy Bruno Piorno, desarrollador web experto en WordPress, WooCommerce y tecnologías como PHP, MySQL, y más. Contáctame para mejorar tu presencia digital." />
        <meta name="keywords" content="desarrollador web, WordPress, WooCommerce, PHP, MySQL, HTML, SCSS, jQuery, GitHub, VS Code" />
        <meta name="author" content="Bruno Piorno" />
        <meta property="og:title" content="Bruno Piorno | Desarrollador Web especializado en WordPress y WooCommerce" />
        <meta property="og:description" content="Transformo ideas en sitios web funcionales, atractivos y efectivos. Especializado en WordPress y WooCommerce." />
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

            <button 
              className="mobile-menu-button" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <motion.div 
              className="nav-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a href="#servicios" onClick={(e) => scrollToSection(e, 'servicios')}>Servicios</a>
              <a href="#proyectos" onClick={(e) => scrollToSection(e, 'proyectos')}>Proyectos</a>
              <a href="#clientes" onClick={(e) => scrollToSection(e, 'clientes')}>Clientes</a>
              <a href="#metodologia" onClick={(e) => scrollToSection(e, 'metodologia')}>Metodología</a>
              <a href="#tecnologias" onClick={(e) => scrollToSection(e, 'tecnologias')}>Tecnologías</a>
              <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="contact-btn">Contacto</a>
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
            Desarrollo de Sistemas & Web
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformo ideas en sitios web exitosos. Especializado en crear experiencias digitales únicas con WordPress y tiendas online con WooCommerce.
          </motion.p>
          <motion.button
            className="cta-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('proyectos').scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Proyectos
          </motion.button>
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
            Resultados que Hablan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Números que respaldan mi compromiso con la excelencia y la satisfacción del cliente
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
            <p>Desafíos técnicos superados</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <AnimatedCounter value={6} suffix="+" />
            <p>Años de experiencia</p>
          </motion.div>
          <motion.div 
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <AnimatedCounter value={100} suffix="%" />
            <p>Clientes Satisfechos</p>
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
          <h2>Servicios</h2>
          <p>Soluciones digitales adaptadas a tus necesidades</p>
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
          <h2>Proyectos Destacados</h2>
          <p>Algunos de mis trabajos más recientes</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
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
          <h2>Clientes</h2>
          <p>Empresas que confían en nuestras soluciones de desarrollo</p>
        </motion.div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <ClientCard key={client.name} client={client} index={index} />
          ))}
        </div>
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
          <h2>Metodología de Trabajo</h2>
          <p>Organización y transparencia en cada proyecto</p>
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
            <h3>Gestión Profesional con Asana</h3>
            <ul>
              <li>
                <span className="icon">✓</span>
                <div>
                  <strong>Planificación Detallada</strong>
                  <p>Cada proyecto se divide en tareas específicas con plazos claros</p>
                </div>
              </li>
              <li>
                <span className="icon">✓</span>
                <div>
                  <strong>Seguimiento en Tiempo Real</strong>
                  <p>Acceso al progreso del proyecto y horas dedicadas a cada tarea</p>
                </div>
              </li>
              <li>
                <span className="icon">✓</span>
                <div>
                  <strong>Comunicación Efectiva</strong>
                  <p>Feedback y actualizaciones constantes sobre el avance del proyecto</p>
                </div>
              </li>
              <li>
                <span className="icon">✓</span>
                <div>
                  <strong>Transparencia Total</strong>
                  <p>Visualización clara de objetivos, tiempos y costos del proyecto</p>
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
          <h2>Tecnologías</h2>
          <p>Herramientas que uso para crear soluciones increíbles</p>
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
          <h2>¿Listo para empezar?</h2>
          <p>Conversemos sobre tu próximo proyecto</p>
          
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