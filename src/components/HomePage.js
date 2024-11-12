import React from 'react';
import '../App.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="background">
        <div className="overlay"></div>
        <h1 className="headline">¿Estás listo para llevar tu sitio web a otro nivel?</h1>

        <section className="tools">
          <h2>Herramientas Utilizadas</h2>
          <ul>
            <li><i className="devicon-php-plain"></i>PHP</li>
            <li><i className="devicon-mysql-plain"></i>MySQL</li>
            <li><i className="devicon-html5-plain"></i>HTML</li>
            <li><i className="devicon-sass-original"></i>SCSS</li>
            <li><i className="devicon-jquery-plain"></i>jQuery</li>
            <li><i className="devicon-wordpress-plain"></i>WordPress</li>
            <li><i className="devicon-woocommerce-plain"></i>WooCommerce</li>
            <li><i className="devicon-visualstudio-plain"></i>VS Code</li>
            <li><i className="devicon-github-original"></i>GitHub</li>
          </ul>
        </section>

        <section className="contact">
          <h3>Contáctame</h3>
            <a href="https://wa.me/+542392460230" target="_blank" rel="noopener noreferrer">Whatsapp</a>
             <a href="mailto:brunopiornop@gmail.com">Email</a>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
