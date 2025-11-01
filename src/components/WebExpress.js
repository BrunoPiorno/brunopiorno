import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaRocket, FaWhatsapp, FaChartLine, FaTools, FaMobileAlt, FaLightbulb } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import FloatingIcons from './FloatingIcons';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import './WebExpress.css';

// Importar logos de clientes
import entradafanLogo from '../images/entradafan.svg';
import gangafanlogo from '../images/gangafan-logo.svg';
import nutriacLogo from '../images/nutriac-logo.svg';
import zerxio from '../images/zerxio-logo.svg';

const benefits = [
  { icon: <FaRocket />, title: 'Más Velocidad, Más Ventas', description: 'Una web ultra-rápida que mantiene a tus visitantes enganchados y mejora tu ranking en Google.' },
  { icon: <FaWhatsapp />, title: 'Conectada para Vender', description: 'Integraciones con WhatsApp, Mercado Pago y redes para que no pierdas ninguna oportunidad de negocio.' },
  { icon: <FaChartLine />, title: 'Visible para Tus Clientes', description: 'Optimización SEO para que te encuentren justo cuando te necesitan.' },
  { icon: <FaMobileAlt />, title: 'Perfecta en Cualquier Dispositivo', description: 'Diseño responsive que ofrece una experiencia impecable en móviles, tablets y computadoras.' },
  { icon: <FaLightbulb />, title: 'Estrategia que Funciona', description: 'No solo diseñamos; te asesoramos para que tu web sea una herramienta de crecimiento real.' },
  { icon: <FaTools />, title: 'Soporte Continuo', description: 'Nos encargamos del mantenimiento para que vos te enfoques en hacer crecer tu negocio.' },
];

const testimonials = [
  {
    quote: '"Desde que lanzamos la nueva web, nuestras consultas aumentaron un 300%. El equipo no solo diseñó una página atractiva, sino una verdadera herramienta de ventas."',
    author: 'Martín Gómez',
    company: 'CEO de Soluciones Creativas'
  },
  {
    quote: '"El proceso fue increíblemente claro y profesional. Entendieron nuestra visión a la perfección y la ejecutaron sin fallos. ¡100% recomendados!"',
    author: 'Laura Fernández',
    company: 'Fundadora de DecoHogar'
  },
  {
    quote: '"Estaba perdido con mi presencia online. Me dieron un plan claro y una web que finalmente me trae clientes de forma constante. La inversión se pagó sola en dos meses."',
    author: 'Javier Torres',
    company: 'Consultor Independiente'
  }
];

const clients = [
  { name: 'GangaFan', logo: gangafanlogo },
  { name: 'EntradaFan', logo: entradafanLogo },
  { name: 'Nutriac', logo: nutriacLogo },
  { name: 'Zerxio', logo: zerxio },
  { name: 'Yampop', logo: require('../images/yampop.png') },
  { name: 'Boutique de luz', logo: require('../images/logo-boutique.png') },
];

const WebExpress = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const onSubmit = (data) => {
    setIsSubmitting(true);

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_USER_ID')
      .then((result) => {
        setFormMessage('¡Gracias! Tu mensaje ha sido enviado. Te contactaré en breve.');
        reset();
      }, (error) => {
        setFormMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <>
      <Helmet>
        <title>Diseño Web que Vende | Transformamos tu Presencia Online</title>
        <meta name="description" content="¿Tu web no genera clientes? Creamos páginas web rápidas, profesionales y optimizadas para convertir visitantes en ventas. ¡Pedí tu plan de acción gratis!" />
      </Helmet>
      <div className="web-express-page-express">
      <FloatingIcons />
      {/* 1. Hero de impacto */}
      <motion.section 
        className="hero-section-express"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Tu web actual no te trae clientes? La creamos por vos.
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Transformamos tu presencia online en una máquina de generar ventas. Páginas web que no solo se ven bien, sino que convierten visitantes en clientes.
        </motion.p>
        <motion.a 
          href="#contact-form" 
          className="hero-cta-button-express"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Transformar mi negocio ahora
        </motion.a>
      </motion.section>

      {/* 2. Sección de beneficios */}
      <section className="benefits-section-express">
        <h2>Beneficios que marcan la diferencia</h2>
        <div className="benefits-grid-express">
          {benefits.map((benefit, index) => (
            <motion.div 
              className="benefit-card-express"
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="benefit-card-icon-express">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Free Consultancy Section */}
      <section className="consultancy-section-express">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          ¿Querés una web que venda? Hablemos.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Agendá una consultoría gratuita de 30 minutos y te daré un plan de acción claro para potenciar tu presencia online. Sin compromiso.
        </motion.p>
        <motion.a 
          href="#contact-form" 
          className="consultancy-button-express"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          Agendar mi consultoría GRATIS
        </motion.a>
        <motion.p 
          className="urgency-text-express"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Cupos limitados para este mes.
        </motion.p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section-express">
        <h2>No lo decimos nosotros, lo dicen nuestros clientes</h2>
        <div className="testimonials-grid-express">
          {testimonials.map((testimonial, index) => (
            <motion.div
              className="testimonial-card-express"
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p>"{testimonial.quote}"</p>
              <p className="testimonial-author-express">
                {testimonial.author}
                <span>{testimonial.company}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section-express">
        <h2>Confían en nosotros</h2>
        <div className="clients-slider-container-express">
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
                <div className="client-card-express">
                  <img src={client.logo} alt={client.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 4. Llamada a la acción media */}
      <section className="cta-section-express">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          ¿Listo para dar el siguiente paso?
        </motion.h2>
        <motion.a 
          href="#contact-form" 
          className="cta-button-express"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sí, quiero mi presupuesto
        </motion.a>
      </section>

      {/* 5. Formulario rápido */}
      <section id="contact-form" className="contact-form-section-express">
        <h2>Contame sobre tu proyecto</h2>
        <form className="express-form-express" onSubmit={handleSubmit(onSubmit)}>
          
          <div className="form-group-express">
            <label htmlFor="name">Nombre</label>
            <input id="name" {...register('name', { required: true })} />
            {errors.name && <span className="error-message">Este campo es requerido</span>}
          </div>

          <div className="form-group-express">
            <label htmlFor="contactInfo">Email / WhatsApp</label>
            <input id="contactInfo" {...register('contactInfo', { required: true })} />
            {errors.contactInfo && <span className="error-message">Este campo es requerido</span>}
          </div>


          <div className="form-group-express">
            <label htmlFor="needs">Contame brevemente qué necesitás</label>
            <textarea id="needs" {...register('needs', { required: true })}></textarea>
            {errors.needs && <span className="error-message">Este campo es requerido</span>}
          </div>

          <button type="submit" className="submit-button-express" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Quiero mi plan de acción'}
          </button>

          {formMessage && <p className="form-message-express">{formMessage}</p>}

        </form>
      </section>

      {/* 6. Cierre emocional */}
      <section className="closing-section-express">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Creá una web que trabaje por vos las 24hs.
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Global Alora — desarrollo web profesional para negocios que quieren crecer.
        </motion.p>
      </section>

    </div>
    </>
  );
};

export default WebExpress;
