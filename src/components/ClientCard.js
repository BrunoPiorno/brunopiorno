import React, { memo } from 'react';
import { motion } from 'framer-motion';

const ClientCard = memo(({ client, index }) => (
  <motion.a
    key={client.name}
    href={client.url}
    target="_blank"
    rel="noopener noreferrer"
    className="client-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -10, scale: 1.02 }}
  >
    <div className="client-logo">
      {typeof client.logo === 'string' ? (
        <img 
          src={client.logo} 
          alt={client.name}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = require('../images/default-logo.png');
          }}
        />
      ) : (
        client.logo
      )}
    </div>
    <h3>{client.name}</h3>
    <p>{client.description}</p>
    <span className="visit-site">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
      Visitar sitio
    </span>
  </motion.a>
));

export default ClientCard;
