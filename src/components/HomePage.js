import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet'; // Importa Helmet
import '../App.css';
import LiveVisitorCount from './LiveVisitorCount';
import '../devicons/devicon.min.css';

const HomePage = () => {
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
  ];

  return (
    <div className="homepage">
      <Helmet>
        {/* SEO Meta Tags */}
        <title>Bruno Piorno | Desarrollador Web especializado en WordPress y WooCommerce</title>
        <meta name="description" content="Soy Bruno Piorno, desarrollador web experto en WordPress, WooCommerce y tecnologías como PHP, MySQL, y más. Contáctame para mejorar tu presencia digital." />
        <meta name="keywords" content="desarrollador web, WordPress, WooCommerce, PHP, MySQL, HTML, SCSS, jQuery, GitHub, VS Code" />
        <meta name="author" content="Bruno Piorno" />
        <meta property="og:title" content="Bruno Piorno | Desarrollador Web especializado en WordPress y WooCommerce" />
        <meta property="og:description" content="Transformo ideas en sitios web funcionales, atractivos y efectivos. Especializado en WordPress y WooCommerce." />
        <meta property="og:image" content="/logo-white.svg" />
        <meta property="og:url" content="https://brunopiorno.com.ar" />
      </Helmet>

      <div className="background">
        <div className="overlay"></div>

        <header className="header">
          <motion.img
            src="/logo-white.svg" 
            alt="Logo"
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </header>

        <div className="content-container" style={{ marginTop: '100px', zIndex: 2}}>
        {/* Headline */}
        <motion.h1
          className="headline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}
        >
          ¿Estás listo para llevar tu sitio web a otro nivel?
        </motion.h1>

        {/* Tools Section */}
        <motion.section
          className="tools"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }} 
        >
          <h2>Herramientas Utilizadas</h2>
          <ul>
            {tools.map((tool, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                aria-label={`Herramienta: ${tool.name}`}
              >
                <i className={tool.icon}></i>{tool.name}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          className="identity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3>Sobre mí</h3>
          <p>
            Soy Bruno Piorno Polucci, desarrollador web especializado en WordPress y WooCommerce.
            Me apasiona transformar ideas en sitios web funcionales, atractivos y efectivos.
          </p>
          <p>
            Mi misión es ayudarte a destacar en el mundo digital con soluciones a medida que
            se adapten a tus necesidades y objetivos.
          </p>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }} 
        >
          <h3>Contáctame</h3>
          <motion.a
            href="https://wa.me/+542392460230"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            aria-label="Contáctame por WhatsApp" >
            WhatsApp
          </motion.a>
          
          <motion.a
            href="mailto:brunopiornop@gmail.com"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            aria-label="Envía un email a Brunopiornop">
            Email
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/bruno-piorno-polucci"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            aria-label="LinkedIn"
            style={{ marginLeft: '10px' }}>
            LinkedIn
          </motion.a>

        </motion.section>

        
        </div>
      </div>
    </div>
  );
};

export default HomePage;