import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = memo(({ project, index }) => {
  const { t } = useLanguage();
  
  return (
  <motion.div
    key={index}
    className="project-card"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
  >
    <div className="project-image-container">
      <div className="monitor-frame">
        <div className="monitor-header">
          <span className="monitor-dot red"></span>
          <span className="monitor-dot yellow"></span>
          <span className="monitor-dot green"></span>
        </div>
        <div className="monitor-screen">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            width="600"
            height="400"
          />
        </div>
      </div>
    </div>
    <div className="project-info">
      {project.contribution && (
        <span className={`project-contribution-badge ${project.contribution.split('.')[1]}`}>
          {t(project.contribution)}
        </span>
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {t('projects.viewSite')}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </motion.a>
    </div>
  </motion.div>
  );
});

export default ProjectCard;
