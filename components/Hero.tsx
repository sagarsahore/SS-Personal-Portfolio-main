import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, FileText, Github, Linkedin, Mail, 
  Cloud, Cpu, BarChart3, Eye, Sparkles, GraduationCap
} from 'lucide-react';
import { useMobileOptimization } from '../hooks/useMobileOptimization';

// --- ROLE SPECTRUM DATA ---
const roleGroups = [
  {
    category: 'Research',
    color: '#0066FF',
    roles: [
      'Computational Vision Researcher',
      'Multimodal Machine Learning',
      'Explainable & Causal AI'
    ]
  },
  {
    category: 'Engineering',
    color: '#14B8A6',
    roles: [
      'Cloud & MLOps Architect',
      'Scalable AI Systems Engineer',
      'Enterprise Data Pipelines'
    ]
  },
  {
    category: 'Consulting',
    color: '#F59E0B',
    roles: [
      'CRM & Decision Intelligence',
      'AI-Driven Transformation',
      'Systems Strategist'
    ]
  }
];

// --- ANIMATED COUNTER ---
const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2, ease: [0.25, 1, 0.5, 1] });
    }
  }, [count, inView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// --- ROLE LOOP TYPOGRAPHY ---
const RoleLoopDisplay = ({ activeGroup, activeRoleIndex }: { activeGroup: number; activeRoleIndex: number }) => {
  const group = roleGroups[activeGroup];
  const role = group.roles[activeRoleIndex];
  
  return (
    <div className="h-12 md:h-14 flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={`${activeGroup}-${activeRoleIndex}`}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight block"
          style={{ color: group.color }}
        >
          {role}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

// --- MAIN HERO COMPONENT ---
export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeGroup, setActiveGroup] = useState(0);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isMobile, reducedMotion, animationDuration, enableComplexAnimations } = useMobileOptimization();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Role loop effect - slower interval on mobile for better performance
  useEffect(() => {
    const intervalDuration = isMobile ? 3500 : 2500;
    const interval = setInterval(() => {
      setActiveRoleIndex(prev => {
        const currentGroup = roleGroups[activeGroup];
        if (prev >= currentGroup.roles.length - 1) {
          setActiveGroup(g => (g + 1) % roleGroups.length);
          return 0;
        }
        return prev + 1;
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [activeGroup, isMobile]);

  // Optimized animation config for mobile
  const getAnimationProps = (delay: number = 0) => ({
    initial: reducedMotion ? { opacity: 1 } : { opacity: 0, y: isMobile ? 10 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reducedMotion ? 0.01 : animationDuration, delay: reducedMotion ? 0 : delay }
  });

  const currentGroup = roleGroups[activeGroup];

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* No background - completely transparent to show NeuralBackground from Home.tsx */}
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center py-20">
        <div className="w-full">
          
          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Identity Stack */}
            <div className="order-2 lg:order-1">
              
              {/* Enhanced PhD Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                {/* Name with accent */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-12 h-[2px] bg-gradient-to-r from-[#0066FF] to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                  <span className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-white/80">
                    Sagar Sahore
                  </span>
                </div>
                
                {/* PhD Badge - Enhanced */}
                <motion.div 
                  className="relative inline-flex group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0066FF]/20 via-[#14B8A6]/20 to-[#0066FF]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] rounded-full border border-white/10 backdrop-blur-sm overflow-hidden">
                    {/* Shimmer effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
                    />
                    
                    {/* Pulsing dot */}
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
                    </span>
                    
                    <span className="relative text-xs font-bold tracking-wider uppercase text-[#0066FF]">
                      PhD Candidate
                    </span>
                    
                    <span className="relative w-px h-4 bg-white/10" />
                    
                    <span className="relative flex items-center gap-1.5 text-[10px] font-medium tracking-wide text-white/50">
                      <GraduationCap size={12} className="text-[#0066FF]/70" />
                      University of Auckland
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-white/60 leading-[1.1] mb-1">
                  Designing
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                    Intelligent Systems
                  </span>
                </h1>
              </motion.div>

              {/* Role Spectrum Capsule */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-4"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06]">
                  {roleGroups.map((group, idx) => (
                    <React.Fragment key={group.category}>
                      <motion.span 
                        className={`text-[10px] font-semibold uppercase tracking-wider transition-all duration-500 ${
                          idx === activeGroup ? 'opacity-100 scale-110' : 'opacity-30 scale-100'
                        }`}
                        style={{ color: group.color }}
                        animate={{ 
                          textShadow: idx === activeGroup ? `0 0 20px ${group.color}40` : 'none'
                        }}
                      >
                        {group.category}
                      </motion.span>
                      {idx < roleGroups.length - 1 && (
                        <span className="text-white/15 text-[10px]">↔</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>

              {/* Role Loop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <RoleLoopDisplay activeGroup={activeGroup} activeRoleIndex={activeRoleIndex} />
              </motion.div>

              {/* Bridge Line */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-sm md:text-base text-white/40 max-w-md mb-10 leading-relaxed font-light border-l-2 border-white/10 pl-5"
              >
                From academic research to production systems — bridging theory and real-world impact.
              </motion.p>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                {[
                  { value: 12, label: 'Projects', sublabel: 'Completed' },
                  { value: 7, label: 'Certifications', sublabel: 'Professional' },
                  { value: 18, label: 'Superbadges', sublabel: 'Salesforce' },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                    className="group flex items-center gap-3 px-5 py-3 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/[0.06] hover:border-[#0066FF]/30 hover:bg-white/[0.04] transition-all"
                  >
                    <span className="text-2xl md:text-3xl font-bold text-white">
                      <Counter value={stat.value} />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-white/30 uppercase tracking-wider leading-tight">
                        {stat.sublabel}
                      </span>
                      <span className="text-xs text-white/60 font-medium leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex flex-wrap items-center gap-4"
              >
                {/* Primary CTA */}
                <a href="#research" className="group">
                  <motion.div 
                    className="relative px-8 py-4 rounded-full bg-[#0066FF] overflow-hidden shadow-lg shadow-[#0066FF]/20 hover:shadow-[#0066FF]/40 transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: '-200%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 flex items-center gap-2 text-sm font-semibold text-white">
                      Explore Research
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.div>
                </a>

                {/* Secondary CTA */}
                <a href="#projects" className="group">
                  <motion.div 
                    className="px-6 py-4 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.05] transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors">View Projects</span>
                  </motion.div>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="flex items-center gap-3 mt-10"
              >
                {[
                  { icon: Github, href: 'https://github.com/sagarsahore', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/sagarsahore', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:sagarsahore.work@gmail.com', label: 'Email' },
                ].map((social, idx) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.icon !== Mail ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-white hover:border-[#0066FF]/40 hover:bg-[#0066FF]/10 transition-all"
                    title={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={16} />
                  </motion.a>
                ))}
                
                <div className="w-px h-6 bg-white/10 mx-2" />
                
                <a 
                  href="https://github.com/sagarsahore/Resume/raw/main/Sagar_Sahore_-_Salesforce_Administrator.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-white/30 hover:text-white/60 transition-colors group"
                >
                  <FileText size={14} className="group-hover:text-[#0066FF] transition-colors" />
                  <span className="uppercase tracking-wider">Resume</span>
                </a>
              </motion.div>
            </div>

            {/* Right Side - Large Prominent Avatar */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
                transition={{ duration: reducedMotion ? 0.01 : (isMobile ? 0.6 : 1.2), delay: reducedMotion ? 0 : 0.2, ease: [0.25, 1, 0.5, 1] }}
                className="relative"
              >
                {/* Main Image Container - Large and Prominent */}
                <div className="relative w-72 h-[380px] md:w-[380px] md:h-[480px] lg:w-[440px] lg:h-[540px]">
                  
                  {/* Animated glow ring - disabled on mobile for performance */}
                  {enableComplexAnimations ? (
                    <motion.div
                      className="absolute -inset-4 rounded-[50px]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,102,255,0.15), transparent, rgba(20,184,166,0.15))',
                      }}
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <div
                      className="absolute -inset-4 rounded-[50px]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,102,255,0.15), transparent, rgba(20,184,166,0.15))',
                      }}
                    />
                  )}
                  
                  {/* Outer frame */}
                  <div className="absolute inset-0 rounded-[44px] p-[1px] bg-gradient-to-br from-white/10 via-transparent to-white/5">
                    <div className={`w-full h-full rounded-[43px] bg-[#0A0A0A]/50 ${!isMobile ? 'backdrop-blur-sm' : ''}`} />
                  </div>

                  {/* The Image */}
                  <motion.div 
                    className="absolute inset-2 rounded-[40px] overflow-hidden"
                    initial={{ opacity: reducedMotion ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: reducedMotion ? 0.01 : (isMobile ? 0.5 : 1), delay: reducedMotion ? 0 : 0.5 }}
                  >
                    <img 
                      src="/images/erasebg-transformed.webp" 
                      alt="Sagar Sahore"
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                      onLoad={() => setImageLoaded(true)}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                    
                    {/* Name overlay at bottom */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 20 }}
                      transition={{ delay: 1 }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-white/40 mb-1">AI Systems Engineer</div>
                          <div className="text-lg font-bold text-white">Sagar Sahore</div>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/30">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]" />
                          </span>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-[#10B981]">Active</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Floating badges around avatar - hidden on mobile for performance */}
                  {enableComplexAnimations && (
                    <>
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-3 right-8 p-3 rounded-2xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#0066FF]/30 shadow-lg shadow-[#0066FF]/10 hidden md:block"
                      >
                        <Eye size={20} className="text-[#0066FF]" />
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-1/4 -left-4 p-3 rounded-2xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#14B8A6]/30 shadow-lg shadow-[#14B8A6]/10 hidden md:block"
                      >
                        <Cloud size={18} className="text-[#14B8A6]" />
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-1/3 -right-4 p-3 rounded-2xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#F59E0B]/30 shadow-lg shadow-[#F59E0B]/10 hidden md:block"
                      >
                        <BarChart3 size={18} className="text-[#F59E0B]" />
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-1/2 -left-6 p-2.5 rounded-xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#A855F7]/30 shadow-lg shadow-[#A855F7]/10 hidden lg:block"
                      >
                        <Sparkles size={14} className="text-[#A855F7]" />
                      </motion.div>
                      
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        className="absolute -bottom-2 left-1/4 p-2.5 rounded-xl bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/10 hidden lg:block"
                      >
                        <Cpu size={14} className="text-white/60" />
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
