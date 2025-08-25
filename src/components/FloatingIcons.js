import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaCloud, FaJs, FaPhp, FaGit } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';

const iconVariants = {
  float: {
    y: ["-10px", "10px"],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const FloatingIcons = () => {
  const icons = [
    { icon: <FaReact />, size: '3rem', top: '20%', left: '10%', delay: 0.5 },
    { icon: <FaNodeJs />, size: '3.5rem', top: '30%', left: '80%', delay: 1 },
    { icon: <FaHtml5 />, size: '3rem', top: '70%', left: '15%', delay: 1.5 },
    { icon: <FaCss3Alt />, size: '3rem', top: '80%', left: '70%', delay: 0.2 },
    { icon: <DiJavascript1 />, size: '3rem', top: '50%', left: '90%', delay: 0.8 },
    { icon: <FaCloud />, size: '3rem', top: '10%', left: '40%', delay: 1.2 },
    { icon: <FaJs />, size: '2rem', top: '60%', left: '10%', delay: 0.5 },
    { icon: <FaPhp />, size: '3rem', top: '90%', left: '80%', delay: 0.2 },
    { icon: <FaGit />, size: '2rem', top: '90%', left: '30%', delay: 0.5 }
  ];

  return (
    <div className="floating-icons-container">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="floating-icon"
          style={{
            fontSize: item.size,
            top: item.top,
            left: item.left,
            position: 'absolute'
          }}
          variants={iconVariants}
          animate="float"
          transition={{ ...iconVariants.float.transition, delay: item.delay }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
