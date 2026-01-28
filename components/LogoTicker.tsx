import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  Terminal, 
  Cpu, 
  Container, 
  Flame, 
  Coffee, 
  Music, 
  BrainCircuit, 
  Palette, 
  GitBranch,
  Database
} from 'lucide-react';
import { isMobileDevice, prefersReducedMotion } from '../hooks/useMobileOptimization';

const stack = [
  { name: 'PyTorch', icon: <Flame size={24} />, color: 'text-orange-500' },
  { name: 'React', icon: <Atom size={24} />, color: 'text-cyan-400' },
  { name: 'Python', icon: <Terminal size={24} />, color: 'text-blue-400' },
  { name: 'H100 Cluster', icon: <Cpu size={24} />, color: 'text-emerald-400' },
  { name: 'Obsidian', icon: <BrainCircuit size={24} />, color: 'text-purple-400' },
  { name: 'Dark Roast', icon: <Coffee size={24} />, color: 'text-amber-600' },
  { name: 'Figma', icon: <Palette size={24} />, color: 'text-pink-400' },
  { name: 'Docker', icon: <Container size={24} />, color: 'text-blue-500' },
  { name: 'Lo-Fi Beats', icon: <Music size={24} />, color: 'text-green-400' },
  { name: 'Git', icon: <GitBranch size={24} />, color: 'text-red-400' },
  { name: 'Postgres', icon: <Database size={24} />, color: 'text-blue-300' },
];

export const LogoTicker: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
    setReducedMotion(prefersReducedMotion());
  }, []);

  // Fewer duplicates on mobile for better performance
  const stackItems = reducedMotion 
    ? [...stack] 
    : isMobile 
    ? [...stack, ...stack] 
    : [...stack, ...stack, ...stack, ...stack];

  // Animation settings based on device
  const animationConfig = reducedMotion
    ? {} // No animation for reduced motion
    : {
        animate: { x: [0, isMobile ? -1000 : -2000] },
        transition: { 
          duration: isMobile ? 30 : 50, // Slower on mobile for smoother feel
          ease: "linear", 
          repeat: Infinity,
        }
      };

  return (
    <section className="w-full relative py-20 overflow-visible">
        {/* Background Visuals */}
        <div className={`absolute inset-0 bg-white/[0.02] ${!isMobile ? 'backdrop-blur-xl' : ''} border-y border-white/[0.05] z-0`}></div>
        
        {/* Label - Fixed positioning and z-index to ensure visibility */}
        <div className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] px-6 py-2 rounded-full border border-white/15 z-30 shadow-[0_0_30px_rgba(0,0,0,0.8)] ${!isMobile ? 'backdrop-blur-xl' : ''}`}>
            <span className="text-[12px] font-mono font-bold uppercase tracking-[0.25em] text-white/80">
                Daily Drivers & Essentials
            </span>
        </div>

        {/* Outer container with hidden overflow for the loop */}
        <div className="relative overflow-hidden w-full py-4">
            {/* Fade Masks for seamless loop illusion */}
            <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            <div className="flex relative z-0">
                <motion.div 
                className="flex gap-8 md:gap-16 lg:gap-32 items-center pr-8 md:pr-16 lg:pr-32 whitespace-nowrap"
                {...animationConfig}
                >
                {stackItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 md:gap-4 group cursor-default transition-all duration-300 hover:scale-105">
                        <div className={`transition-all duration-300 text-zinc-500 group-hover:${item.color} group-hover:scale-110`}>
                            {item.icon}
                        </div>
                        <span className="text-base md:text-xl font-medium tracking-tight text-zinc-400 group-hover:text-white transition-colors">
                            {item.name}
                        </span>
                    </div>
                ))}
                </motion.div>
            </div>
        </div>
    </section>
  );
};