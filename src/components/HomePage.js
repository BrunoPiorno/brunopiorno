import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

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

  const animationConfig = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
  };

  return (
    <div className="homepage">
      <div className="background">
        <div className="overlay"></div>

        <motion.h1
          className="headline"
          {...animationConfig}
        >
          ¿Estás listo para llevar tu sitio web a otro nivel?
        </motion.h1>

        <motion.section
          className="tools"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                aria-label={`Herramienta: ${tool.name}`}
              >
                <i className={tool.icon}></i>{tool.name}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          className="contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h3>Contáctame</h3>
          <motion.a
            href="https://wa.me/+542392460230"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            aria-label="Contáctame por WhatsApp"
            {...animationConfig}
          >
            WhatsApp
          </motion.a>
          <motion.a
            href="mailto:brunopiornop@gmail.com"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            aria-label="Envía un email a Brunopiornop"
            {...animationConfig}
          >
            Email
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};

export default HomePage;
