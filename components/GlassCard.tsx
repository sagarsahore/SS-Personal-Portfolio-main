import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(({
  children,
  className = '',
  delay = 0,
  hoverEffect = true
}, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-[24px] bg-[#1c1c1e]/40 backdrop-blur-2xl border border-white/[0.08] shadow-2xl ${className}`}
    >
        {/* Specular Highlight (Top Edge) */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 h-full">
            {children}
        </div>
        
        {/* Interactive Hover Glow (Subtle) */}
        {hoverEffect && (
            <motion.div 
                className="absolute inset-0 bg-white/5 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />
        )}
    </motion.div>
  );
});

GlassCard.displayName = 'GlassCard';
