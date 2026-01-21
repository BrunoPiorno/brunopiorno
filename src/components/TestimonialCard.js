import React, { memo } from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = memo(({ testimonial, index }) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="testimonial-content">
        <div className="testimonial-quote">{testimonial.quote}</div>
        <div className="testimonial-metrics">
          {testimonial.metrics.map((metric, i) => (
            <div key={i} className="metric">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
              >
                {metric}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonial-author">
        <div className="author-info">
          <strong>{testimonial.author}</strong>
          <span>{testimonial.company}</span>
        </div>
        {testimonial.image && (
          <div className="company-logo">
            <img src={testimonial.image} alt={`${testimonial.company} logo`} />
          </div>
        )}
      </div>
    </motion.div>
  );
});

export default TestimonialCard;
