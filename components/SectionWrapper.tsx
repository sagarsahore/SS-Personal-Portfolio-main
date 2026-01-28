import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { isMobileDevice, prefersReducedMotion } from '../hooks/useMobileOptimization';

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
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
    setReducedMotion(prefersReducedMotion());
  }, []);

  // Simplified animation for mobile devices
  const animationConfig = reducedMotion
    ? {
        initial: { opacity: 1 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.01 }
      }
    : isMobile
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { 
          duration: 0.4, 
          delay: delay * 0.5, // Reduced delay on mobile
          ease: [0.22, 1, 0.36, 1]
        }
      }
    : {
        initial: { opacity: 0, y: 40, filter: 'blur(10px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { 
          duration: 0.8, 
          delay, 
          ease: [0.22, 1, 0.36, 1]
        }
      };

  return (
    <motion.section
      id={id}
      className={`scroll-mt-32 ${className}`}
      {...animationConfig}
      viewport={{ once: true, margin: "-10%" }}
    >
      {children}
    </motion.section>
  );
};