import React, { memo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';

const ServiceCard = memo(({ service, index }) => {
  const { t } = useLanguage();
  const cardClassName = `service-card${service.highlight ? " featured-service" : ""}`;

  return (
    <motion.div
      key={index}
      className={cardClassName}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
    >
      <i className={service.icon}></i>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {service.url && (
        <Link to={service.url} className="service-detail-btn">
          {t('services.viewDetail')}
        </Link>
      )}
    </motion.div>
  );
});

export default ServiceCard;
