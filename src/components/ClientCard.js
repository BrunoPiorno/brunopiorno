import React, { memo } from 'react';
import { motion } from 'framer-motion';

const ClientCard = memo(({ client, index }) => {
  const hasUrl = client.url && client.url !== '#';
  const MotionComponent = hasUrl ? motion.a : motion.div;

  const componentProps = {
    className: "client-card",
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: index * 0.1 },
    ...(hasUrl && {
      href: client.url,
      target: "_blank",
      rel: "noopener noreferrer"
    })
  };

  return (
    <MotionComponent {...componentProps}>
      <div className="client-logo">
        <img 
          src={client.logo} 
          alt={`${client.name} logo`}
          className={client.filter ? 'filter' : ''}
          loading="lazy"
        />
      </div>
    </MotionComponent>
  );
});

export default ClientCard;
