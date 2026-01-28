import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = '', 
  onClick,
  variant = 'primary'
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 backdrop-blur-md";
  const variants = {
    primary: "bg-white/10 text-white hover:bg-white/20 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    secondary: "bg-transparent text-white/60 hover:text-white border border-transparent hover:border-white/10"
  };

  return (
    <motion.button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-md" />
      )}
    </motion.button>
  );
};