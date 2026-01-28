import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  id, 
  className = "", 
  delay = 0 
}) => {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-32 ${className}`}
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.section>
  );
};