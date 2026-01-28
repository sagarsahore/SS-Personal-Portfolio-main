import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const BackgroundGradients: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Slower, smoother parallax
  const y1 = useTransform(scrollY, [0, 2000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -150]);
  
  const opacity = useTransform(scrollY, [0, 800], [0.8, 0.4]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050505]">
      {/* Primary Glow - Crimson Red (The Tie/Accent) */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#991B1B]/15 blur-[150px]" 
      />
      
      {/* Secondary Glow - Warm Stone/Grey (The Suit) */}
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute top-[-5%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#44403C]/10 blur-[120px]" 
      />
      
      {/* Bottom Anchor - Deep Charcoal (Grounding) */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-[-30%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-[#1C1917]/20 blur-[180px]" 
      />
      
      {/* Film Grain Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>
    </div>
  );
};