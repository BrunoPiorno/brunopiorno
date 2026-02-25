import React, { memo } from 'react';
import { motion } from 'framer-motion';

const ServiceCard = memo(({ service, index }) => {
  const cardClassName = `service-card${service.highlight ? ' featured-service' : ''}`;

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
    </motion.div>
  );
});

export default ServiceCard;
