import React, { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { 
  Users, 
  Linkedin, Github, Mail, 
  Sparkles, Eye, Target, Microscope, GraduationCap, 
  Code2, Layers, BrainCircuit, MapPin, Calendar, Heart, Coffee, Dumbbell, Gamepad2,
  Building2, Award, TrendingUp, Network, Cloud, Database, CircuitBoard, Activity,
  Camera, Image, ChevronLeft, ChevronRight, Presentation, Users2, PartyPopper, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Navigation } from './Navigation';
import { NeuralBackground } from './NeuralBackground';

const AVATAR_AVIF = "/images/erasebg-transformed.avif";
const AVATAR_WEBP = "/images/erasebg-transformed.webp";
const AVATAR_PNG = "/images/erasebg-transformed.png";

// Role identity tags (same as About.tsx for consistency)
const roleIdentities = [
  { label: 'Researcher', color: '#0066FF' },
  { label: 'AI Engineer', color: '#A855F7' },
  { label: 'Cloud Architect', color: '#F97316' },
  { label: 'Consultant', color: '#10B981' }
];

// Signal tiles data (same as About.tsx for consistency)
const signalTiles = [
  { icon: Building2, label: 'Systems Built', value: '12+', color: '#0066FF', progress: 85 },
  { icon: Award, label: 'Platforms Mastered', value: '18+', color: '#F97316', progress: 95 },
  { icon: GraduationCap, label: 'Validated Expertise', value: '7+', color: '#F59E0B', progress: 70 },
  { icon: TrendingUp, label: 'Business Impact', value: '60%', color: '#10B981', progress: 60 }
];

// Research pillars for Sagar's profile
const researchVectors = [
    { name: 'Computational Ophthalmology', sub: 'Primary Focus', icon: <Eye size={18} />, color: 'text-blue-400', border: 'border-blue-500/20', desc: 'AI-powered early detection of glaucoma and retinal diseases.' },
    { name: 'Explainable AI', sub: 'Core Method', icon: <BrainCircuit size={18} />, color: 'text-purple-400', border: 'border-purple-500/20', desc: 'Making deep learning interpretable for clinical adoption.' },
    { name: 'Multimodal Learning', sub: 'Research Area', icon: <Layers size={18} />, color: 'text-emerald-400', border: 'border-emerald-500/20', desc: 'Fusing imaging and clinical data for robust diagnostics.' },
    { name: 'Enterprise AI', sub: 'Applied ML', icon: <Target size={18} />, color: 'text-amber-400', border: 'border-amber-500/20', desc: 'GenAI integration for Salesforce and CRM systems.' }
];

// Timeline milestones for Sagar
const evolutionPath = [
    { 
        era: '2026 — PRESENT', 
        title: 'The Researcher', 
        inst: 'University of Auckland • Ph.D.', 
        focus: 'Doctoral candidate in Computational Ophthalmology. Developing explainable AI systems for early disease detection.', 
        icon: <Microscope size={20} /> 
    },
    { 
        era: '2025 — 2026', 
        title: 'The Engineer', 
        inst: 'Yoobee College • M.S.E.', 
        focus: 'Master of Software Engineering with capstone on deep learning for glaucoma detection from fundus images.', 
        icon: <GraduationCap size={20} /> 
    },
    { 
        era: '2023 — 2025', 
        title: 'The Strategist', 
        inst: 'Generate KiwiSaver', 
        focus: 'Sales Development Representative. Led Salesforce training, improved team efficiency by 40%, drove CRM adoption.', 
        icon: <Layers size={20} /> 
    },
    { 
        era: '2019 — 2021', 
        title: 'The Builder', 
        inst: 'MIT NZ • B.Tech', 
        focus: 'First Class Honours in Digital Technologies. Full-stack development, databases, and cloud platforms.', 
        icon: <Code2 size={20} /> 
    }
];

// Arsenal data with grouped skills (same as About.tsx)
const arsenalData = [
  {
    domain: 'CRM & Automation',
    title: 'Salesforce Ecosystem',
    role: 'Solution Architect',
    icon: Cloud,
    color: '#0EA5E9',
    skills: {
      core: ['Sales Cloud', 'Service Cloud'],
      tools: ['Apex', 'LWC', 'Flow Builder'],
      methods: ['SOQL/SOSL', 'Einstein AI']
    }
  },
  {
    domain: 'Cloud Infrastructure',
    title: 'AWS Architecture',
    role: 'Cloud Engineer',
    icon: Database,
    color: '#F97316',
    skills: {
      core: ['EC2', 'S3', 'Lambda'],
      tools: ['CloudFormation', 'IAM', 'VPC'],
      methods: ['Serverless', 'IaC']
    }
  },
  {
    domain: 'Machine Learning',
    title: 'AI & Intelligence',
    role: 'ML Engineer',
    icon: Layers,
    color: '#A855F7',
    skills: {
      core: ['PyTorch', 'TensorFlow'],
      tools: ['scikit-learn', 'Pandas', 'NumPy'],
      methods: ['Deep Learning', 'Computer Vision']
    }
  },
  {
    domain: 'Web Development',
    title: 'Full Stack Eng.',
    role: 'Software Engineer',
    icon: Code2,
    color: '#14B8A6',
    skills: {
      core: ['React.js', 'Node.js'],
      tools: ['MongoDB', 'Express', 'TypeScript'],
      methods: ['REST APIs', 'GraphQL']
    }
  }
];

// Gallery data for slideshows
const galleryCategories = [
  { id: 'all', label: 'All', icon: Image },
  { id: 'events', label: 'Events', icon: PartyPopper },
  { id: 'associations', label: 'Associations', icon: Users2 },
  { id: 'presentations', label: 'Presentations', icon: Presentation }
];

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/event_conference.png',
    title: 'Innovation Summit 2024',
    category: 'events',
    description: 'Keynote session at the annual tech innovation summit.',
    date: 'March 2024',
    location: 'Auckland, NZ'
  },
  {
    id: 2,
    src: '/images/gallery/presentation_stage.png',
    title: 'AI in Healthcare Talk',
    category: 'presentations',
    description: 'Presenting research on deep learning for medical diagnostics.',
    date: 'February 2024',
    location: 'University of Auckland'
  },
  {
    id: 3,
    src: '/images/gallery/team_association.png',
    title: 'Research Lab Team',
    category: 'associations',
    description: 'With my colleagues at the Computer Vision Research Lab.',
    date: 'January 2024',
    location: 'Auckland, NZ'
  },
  {
    id: 4,
    src: '/images/gallery/workshop_session.png',
    title: 'Salesforce Training Workshop',
    category: 'presentations',
    description: 'Leading a hands-on Salesforce development workshop.',
    date: 'December 2023',
    location: 'Generate KiwiSaver'
  },
  {
    id: 5,
    src: '/images/gallery/networking_event.png',
    title: 'TechInnovate Networking',
    category: 'events',
    description: 'Industry networking event connecting tech professionals.',
    date: 'November 2023',
    location: 'Auckland CBD'
  },
  {
    id: 6,
    src: '/images/gallery/award_ceremony.png',
    title: 'Excellence Award Recognition',
    category: 'events',
    description: 'Receiving recognition for outstanding project contributions.',
    date: 'October 2023',
    location: 'Wellington, NZ'
  }
];

const StatBlock = ({ icon: Icon, label, value, color, description }: { icon: any, label: string, value: string, color: string, description: string }) => (
    <div className="flex flex-col gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] group hover:border-[#0066FF]/30 hover:bg-white/[0.04] transition-all relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
            <Icon size={40} />
        </div>
        <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20 group-hover:scale-110 transition-transform`}>
                <Icon size={20} />
            </div>
            <div>
                <div className="text-2xl font-bold text-white tracking-tight">{value}</div>
                <div className="text-[10px] font-mono text-[#6B7280] uppercase tracking-widest">{label}</div>
            </div>
        </div>
        <p className="text-[11px] text-[#6B7280] leading-relaxed font-mono uppercase tracking-wider">{description}</p>
    </div>
);

export const AboutPage: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeGalleryCategory, setActiveGalleryCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Filter images based on active category
  const filteredImages = activeGalleryCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeGalleryCategory);

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlaying || filteredImages.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % filteredImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, filteredImages.length, activeGalleryCategory]);

  // Reset slide when category changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeGalleryCategory]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const } 
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#0066FF]/30 selection:text-white pb-20 bg-[#050505]">
      {/* 3D Neural Background */}
      <NeuralBackground />
      
      {/* Main Navigation */}
      <Navigation />
      
      {/* Cinematic HUD Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 p-6 md:p-10 border-[1px] border-white/[0.05] opacity-40">
        <div className="absolute top-20 left-10 font-mono text-[9px] text-white/40 tracking-[0.5em] uppercase">
            Protocol: ABOUT_PROFILE<br/>
            Ref: SS-PHD-2026-V1
        </div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 flex flex-col gap-4 items-end">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#0066FF]/50 to-transparent" />
            <div className="font-mono text-[8px] text-[#0066FF]/50 [writing-mode:vertical-rl] tracking-[0.8em] uppercase">
                PERSONAL_ARCHIVE
            </div>
            <div className="w-px h-24 bg-gradient-to-t from-transparent via-[#0066FF]/50 to-transparent" />
        </div>
        <div className="absolute bottom-10 right-10 font-mono text-[9px] text-white/40 tracking-[0.5em] uppercase text-right">
            Registry: AUCKLAND_NZ<br/>
            Coordinates: 36.8509° S, 174.7645° E
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-24"
        >
            {/* --- PROFILE CONSOLE HEADER (EXTENDED FROM HOME) --- */}
            <motion.div variants={itemVariants}>
                {/* Console Label */}
                <div className="flex items-center gap-2 mb-6">
                    <CircuitBoard size={14} className="text-[#0066FF]" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0066FF]">
                        Profile Console • Extended View
                    </span>
                </div>
                
                {/* Hero Title */}
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
                    Building AI that <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00A3FF] to-[#0066FF]">saves sight.</span>
                </h1>
                
                {/* Role Chip Bar */}
                <div className="flex flex-wrap items-center gap-2 mb-8">
                    {roleIdentities.map((role, idx) => (
                        <motion.span
                            key={role.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border"
                            style={{ 
                                color: role.color,
                                borderColor: `${role.color}40`,
                                backgroundColor: `${role.color}10`
                            }}
                        >
                            {role.label}
                        </motion.span>
                    ))}
                </div>
                
                <p className="text-xl md:text-2xl text-[#9CA3AF] leading-relaxed font-light max-w-3xl border-l-2 border-[#0066FF]/30 pl-8">
                    PhD Candidate at the <span className="text-white font-medium">University of Auckland</span>, researching 
                    <span className="text-[#0066FF] font-medium"> explainable AI</span> for early detection of eye diseases.
                </p>
            </motion.div>

            {/* --- SIGNAL TILES (EXTENDED) --- */}
            <motion.div variants={itemVariants}>
                <div className="flex items-center gap-3 mb-6">
                    <Activity size={16} className="text-[#0066FF]" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6B7280]">
                        Profile Signals
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {signalTiles.map((tile, idx) => (
                        <motion.div
                            key={tile.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="relative p-5 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 overflow-hidden">
                                <div 
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: `radial-gradient(circle at center, ${tile.color}10, transparent 70%)` }}
                                />
                                
                                <div className="relative z-10">
                                    <div 
                                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                                        style={{ backgroundColor: `${tile.color}15`, border: `1px solid ${tile.color}30` }}
                                    >
                                        <tile.icon size={18} style={{ color: tile.color }} />
                                    </div>
                                    
                                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280] mb-1">
                                        {tile.label}
                                    </div>
                                    
                                    <div className="text-2xl font-bold mb-3" style={{ color: tile.color }}>
                                        {tile.value}
                                    </div>
                                    
                                    <div className="h-1 rounded-full bg-white/[0.05] overflow-hidden">
                                        <motion.div 
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: tile.color }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${tile.progress}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* --- CORE CONTENT: The Profile Grid --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <motion.div variants={itemVariants} className="lg:col-span-4">
                    <GlassCard className="!p-0 overflow-hidden relative group aspect-[3/4] shadow-2xl border-white/[0.08] rounded-[2.5rem] bg-[#0a0a0a]">
                        <AnimatePresence>
                            {!imageLoaded && (
                                <motion.div 
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center z-20 bg-[#0a0a0a]"
                                >
                                    <div className="w-8 h-8 rounded-full border-2 border-[#0066FF]/20 border-t-[#0066FF] animate-spin" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <motion.picture
                            initial={{ opacity: 0 }}
                            animate={{ opacity: imageLoaded ? 1 : 0 }}
                            className="block h-full w-full"
                        >
                            <source srcSet={AVATAR_AVIF} type="image/avif" />
                            <source srcSet={AVATAR_WEBP} type="image/webp" />
                            <img
                                src={AVATAR_PNG}
                                alt="Sagar Sahore"
                                onLoad={() => setImageLoaded(true)}
                                className="h-full w-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                            />
                        </motion.picture>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90 z-10" />
                        <div className="absolute bottom-0 left-0 p-8 w-full z-20">
                            <h2 className="text-2xl font-bold text-white mb-1 tracking-tight">Sagar Sahore</h2>
                            <p className="text-[#0066FF] text-xs font-mono tracking-widest uppercase mb-2">Ph.D. Candidate</p>
                            <div className="flex items-center gap-2 text-[#6B7280] text-xs mb-6">
                                <MapPin size={12} /> Auckland, New Zealand
                            </div>
                            <div className="flex gap-3">
                                <a href="https://linkedin.com/in/sagarsahore" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/[0.03] hover:bg-[#0066FF] transition-all border border-white/[0.08] group/icon">
                                    <Linkedin size={16} className="text-white/60 group-hover/icon:text-white" />
                                </a>
                                <a href="https://github.com/sagarsahore" target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-white/[0.03] hover:bg-[#0066FF] transition-all border border-white/[0.08] group/icon">
                                    <Github size={16} className="text-white/60 group-hover/icon:text-white" />
                                </a>
                                <a href="mailto:sagarsahore.work@gmail.com" className="p-3 rounded-xl bg-white/[0.03] hover:bg-[#0066FF] transition-all border border-white/[0.08] group/icon">
                                    <Mail size={16} className="text-white/60 group-hover/icon:text-white" />
                                </a>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>

                <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8 flex flex-col">
                    <GlassCard className="!p-10 flex-1 border-white/[0.08] bg-[#0a0a0a]/60 rounded-[2.5rem]">
                        <div className="prose prose-invert prose-lg text-[#9CA3AF] font-light leading-relaxed max-w-none">
                            <p className="mb-6 first-letter:text-7xl first-letter:font-bold first-letter:text-[#0066FF] first-letter:mr-4 first-letter:float-left first-letter:mt-2">
                                I'm a <span className="text-white font-medium">PhD candidate at the University of Auckland</span>, focused on using artificial intelligence to detect eye diseases before they cause irreversible vision loss. My research combines deep learning, computer vision, and clinical collaboration.
                            </p>
                            <p className="mb-6">
                                My journey started with a Bachelor's in Digital Technologies, where I fell in love with <span className="text-[#0066FF]">building things that work</span>. From there, I moved into enterprise software—spending years at Generate KiwiSaver improving Salesforce adoption and training teams of 30+ people.
                            </p>
                            <p>
                                But my true passion is <span className="text-white font-medium">research that matters</span>. That's why I pivoted to a Master's in Software Engineering, where my capstone on <span className="text-[#0066FF]">glaucoma detection using deep learning</span> opened the door to doctoral studies. Now, I'm building explainable AI systems that clinicians can actually trust.
                            </p>
                        </div>
                    </GlassCard>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <StatBlock 
                            icon={Users} 
                            label="Team Training" 
                            value="30+" 
                            color="blue" 
                            description="Designed and delivered Salesforce training programs, reducing onboarding time by 40%."
                         />
                         <StatBlock 
                            icon={Eye} 
                            label="Research Focus" 
                            value="96%" 
                            color="blue" 
                            description="Achieved 96% sensitivity in early glaucoma detection using ensemble CNN models."
                         />
                    </div>
                </motion.div>
            </div>

            {/* --- METHOD & SYSTEMS STACK (FROM HOME ABOUT) --- */}
            <motion.div variants={itemVariants}>
                {/* Section divider with scanline */}
                <div className="relative flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative overflow-hidden">
                        <motion.div 
                            className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent"
                            animate={{ x: ['-100%', '500%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 px-4">
                        Technical Arsenal
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative overflow-hidden">
                        <motion.div 
                            className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent"
                            animate={{ x: ['500%', '-100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2.5 bg-[#0066FF]/10 rounded-xl text-[#0066FF] border border-[#0066FF]/20">
                        <Network size={20} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">Method & Systems Stack</h3>
                        <p className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280]">Core competencies & technical arsenal</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {arsenalData.map((card, idx) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div 
                                className="relative h-full rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.08] overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                                style={{ borderTopWidth: '2px', borderTopColor: 'transparent' }}
                                onMouseEnter={(e) => e.currentTarget.style.borderTopColor = card.color}
                                onMouseLeave={(e) => e.currentTarget.style.borderTopColor = 'transparent'}
                            >
                                {/* Hover gradient */}
                                <div 
                                    className="absolute inset-0 bg-gradient-to-b to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: `linear-gradient(to bottom, ${card.color}10, transparent)` }}
                                />
                                
                                <div className="relative z-10 p-6">
                                    {/* Domain strip */}
                                    <div className="mb-4">
                                        <span 
                                            className="text-[9px] font-mono uppercase tracking-[0.15em] px-2 py-1 rounded"
                                            style={{ color: card.color, backgroundColor: `${card.color}15` }}
                                        >
                                            {card.domain}
                                        </span>
                                    </div>
                                    
                                    {/* Icon + Title */}
                                    <div className="flex items-center gap-3 mb-2">
                                        <div 
                                            className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110"
                                            style={{ 
                                                backgroundColor: `${card.color}15`, 
                                                border: `1px solid ${card.color}30`,
                                                boxShadow: `0 0 15px ${card.color}20`
                                            }}
                                        >
                                            <card.icon size={20} style={{ color: card.color }} />
                                        </div>
                                        <h4 className="font-bold text-lg text-white tracking-tight">{card.title}</h4>
                                    </div>
                                    
                                    {/* Core Role */}
                                    <div className="text-[10px] font-mono text-[#6B7280] mb-4">{card.role}</div>
                                    
                                    {/* Grouped Skills */}
                                    <div className="space-y-3">
                                        <div>
                                            <div className="text-[8px] font-mono uppercase tracking-wider text-white/30 mb-1.5">Core</div>
                                            <div className="flex flex-wrap gap-1.5">
                                                {card.skills.core.map(skill => (
                                                    <span 
                                                        key={skill} 
                                                        className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] transition-all"
                                                        style={{ color: `${card.color}CC` }}
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <div className="text-[8px] font-mono uppercase tracking-wider text-white/30 mb-1.5">Tools</div>
                                            <div className="flex flex-wrap gap-1.5">
                                                {card.skills.tools.map(skill => (
                                                    <span 
                                                        key={skill} 
                                                        className="text-[10px] font-mono px-2 py-1 rounded-md bg-black/40 border border-white/[0.05] text-white/50"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <div className="text-[8px] font-mono uppercase tracking-wider text-white/30 mb-1.5">Methods</div>
                                            <div className="flex flex-wrap gap-1.5">
                                                {card.skills.methods.map(skill => (
                                                    <span 
                                                        key={skill} 
                                                        className="text-[10px] font-mono px-2 py-1 rounded-md bg-black/40 border border-white/[0.05] text-white/40"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* --- RESEARCH FOCUS --- */}
            <motion.div variants={itemVariants}>
                <div className="flex items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="text-[#0066FF] text-xs font-mono tracking-widest uppercase mb-3">Research Domains</div>
                        <h2 className="text-4xl font-bold text-white tracking-tight">Areas of Focus</h2>
                    </div>
                    <div className="h-px flex-1 bg-white/[0.05] mx-12 hidden md:block" />
                    <BrainCircuit className="text-[#0066FF]/20" size={40} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {researchVectors.map((r, idx) => (
                        <GlassCard key={idx} className="!p-6 group hover:border-[#0066FF]/30 transition-all border-white/[0.08] rounded-[1.5rem]">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl bg-white/[0.03] ${r.color} group-hover:scale-110 transition-all border border-white/[0.05]`}>
                                    {r.icon}
                                </div>
                                <span className="text-[9px] font-mono text-[#6B7280] uppercase tracking-widest">{r.sub}</span>
                            </div>
                            <h3 className="text-white font-semibold text-base mb-2 group-hover:text-[#0066FF] transition-colors">{r.name}</h3>
                            <p className="text-sm text-[#9CA3AF] font-light leading-relaxed">{r.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </motion.div>

            {/* --- PERSONAL: Interests & Hobbies --- */}
            <motion.div variants={itemVariants}>
                <div className="flex items-center justify-between mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <Heart size={24} className="text-[#0066FF]" />
                            <h2 className="text-4xl font-bold text-white tracking-tight">Beyond the Code</h2>
                        </div>
                        <p className="text-[#6B7280] text-lg font-light">When I'm not training models, you'll find me...</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Dumbbell, tag: 'FITNESS', title: 'Gym & Health', desc: 'Staying active keeps my mind sharp. Early morning workouts are non-negotiable.' },
                        { icon: Gamepad2, tag: 'GAMING', title: 'Esports', desc: 'Competitive gaming taught me strategy, quick thinking, and teamwork under pressure.' },
                        { icon: Coffee, tag: 'LEARNING', title: 'Continuous Growth', desc: 'Always reading papers, taking courses, and exploring new technologies.' },
                        { icon: Users, tag: 'COMMUNITY', title: 'Mentoring', desc: 'Helping others learn Salesforce and coding brings me genuine fulfillment.' }
                    ].map((item, i) => (
                        <motion.div 
                            key={i} 
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative p-8 rounded-[2rem] overflow-hidden border border-white/[0.08] group bg-[#0a0a0a] hover:border-[#0066FF]/30"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                <item.icon size={80} />
                            </div>
                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] text-[9px] font-mono tracking-widest uppercase mb-4">
                                    {item.tag}
                                </span>
                                <div className="p-3 rounded-xl bg-white/[0.03] text-[#0066FF] w-fit mb-4 border border-white/[0.05]">
                                    <item.icon size={20} />
                                </div>
                                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#0066FF] transition-colors">{item.title}</h3>
                                <p className="text-[#9CA3AF] text-sm font-light leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* --- PHOTO GALLERY & SLIDESHOW --- */}
            <motion.div variants={itemVariants}>
                {/* Section divider */}
                <div className="relative flex items-center gap-4 mb-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative overflow-hidden">
                        <motion.div 
                            className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-[#A855F7]/50 to-transparent"
                            animate={{ x: ['-100%', '500%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 px-4">
                        Visual Journey
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative overflow-hidden">
                        <motion.div 
                            className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-[#A855F7]/50 to-transparent"
                            animate={{ x: ['500%', '-100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>
                </div>

                {/* Section Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-[#A855F7]/10 rounded-xl text-[#A855F7] border border-[#A855F7]/20">
                            <Camera size={20} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white tracking-tight">Events & Highlights</h2>
                            <p className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280]">Conferences • Associations • Presentations</p>
                        </div>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {galleryCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveGalleryCategory(cat.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                                activeGalleryCategory === cat.id
                                    ? 'bg-[#A855F7] text-white'
                                    : 'bg-white/[0.03] text-[#9CA3AF] hover:bg-white/[0.08] border border-white/[0.08]'
                            }`}
                        >
                            <cat.icon size={14} />
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Main Slideshow */}
                <div className="relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/[0.08] mb-6">
                    {/* Slideshow Image */}
                    <div 
                        className="relative aspect-[16/9] overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(filteredImages[currentSlide])}
                        onMouseEnter={() => setIsAutoPlaying(false)}
                        onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                        <AnimatePresence mode="wait">
                            {filteredImages[currentSlide] && (
                                <motion.img
                                    key={filteredImages[currentSlide].id}
                                    src={filteredImages[currentSlide].src}
                                    alt={filteredImages[currentSlide].title}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                />
                            )}
                        </AnimatePresence>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Image info */}
                        {filteredImages[currentSlide] && (
                            <motion.div 
                                className="absolute bottom-0 left-0 right-0 p-8"
                                key={`info-${filteredImages[currentSlide].id}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="inline-block px-3 py-1 rounded-full bg-[#A855F7]/20 border border-[#A855F7]/30 text-[#A855F7] text-[9px] font-mono tracking-widest uppercase mb-3">
                                    {filteredImages[currentSlide].category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2">{filteredImages[currentSlide].title}</h3>
                                <p className="text-sm text-[#9CA3AF] mb-2">{filteredImages[currentSlide].description}</p>
                                <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        {filteredImages[currentSlide].date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin size={12} />
                                        {filteredImages[currentSlide].location}
                                    </span>
                                </div>
                            </motion.div>
                        )}

                        {/* Navigation Arrows */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentSlide(prev => prev === 0 ? filteredImages.length - 1 : prev - 1);
                            }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-[#A855F7] transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentSlide(prev => (prev + 1) % filteredImages.length);
                            }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-[#A855F7] transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Click to expand hint */}
                        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white/60 text-[10px] font-mono uppercase tracking-wider flex items-center gap-2">
                            <Image size={12} />
                            Click to expand
                        </div>
                    </div>

                    {/* Slide indicators */}
                    <div className="flex justify-center gap-2 p-4 bg-black/30">
                        {filteredImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`h-1.5 rounded-full transition-all ${
                                    idx === currentSlide 
                                        ? 'w-8 bg-[#A855F7]' 
                                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    {filteredImages.map((img, idx) => (
                        <motion.div
                            key={img.id}
                            onClick={() => setCurrentSlide(idx)}
                            className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer group ${
                                idx === currentSlide ? 'ring-2 ring-[#A855F7]' : ''
                            }`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img 
                                src={img.src} 
                                alt={img.title}
                                className="w-full h-full object-cover transition-all group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Image size={20} className="text-white" />
                            </div>
                            {idx === currentSlide && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#A855F7]" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/[0.08]"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all"
                            >
                                <X size={20} />
                            </button>

                            {/* Full image */}
                            <div className="relative">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="w-full max-h-[70vh] object-contain bg-black"
                                />
                            </div>

                            {/* Image details */}
                            <div className="p-6 border-t border-white/[0.08]">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <span className="inline-block px-3 py-1 rounded-full bg-[#A855F7]/20 border border-[#A855F7]/30 text-[#A855F7] text-[9px] font-mono tracking-widest uppercase mb-3">
                                            {selectedImage.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
                                        <p className="text-sm text-[#9CA3AF]">{selectedImage.description}</p>
                                    </div>
                                    <div className="text-right text-xs text-[#6B7280]">
                                        <div className="flex items-center gap-1 justify-end mb-1">
                                            <Calendar size={12} />
                                            {selectedImage.date}
                                        </div>
                                        <div className="flex items-center gap-1 justify-end">
                                            <MapPin size={12} />
                                            {selectedImage.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- CLOSING CTA --- */}
            <motion.div variants={itemVariants} className="pt-20 text-center relative">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-[#0066FF]/5 blur-[150px] rounded-full pointer-events-none" />
                
                <div className="relative z-10">
                    <Sparkles className="text-[#0066FF] mx-auto mb-10 animate-pulse" size={48} />
                    <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
                        Let's build something <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00A3FF]">meaningful together.</span>
                    </h2>
                    <p className="text-[#6B7280] text-lg mb-12 max-w-xl mx-auto">
                        Whether it's research collaboration, consulting, or just a chat about AI and healthcare—I'd love to hear from you.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="mailto:sagarsahore.work@gmail.com">
                            <button className="group px-10 py-5 rounded-full bg-[#0066FF] text-white font-bold text-sm tracking-[0.2em] uppercase transition-all hover:bg-[#0052CC] hover:shadow-2xl hover:shadow-[#0066FF]/25 hover:-translate-y-1">
                                <span className="flex items-center gap-3">
                                    <Mail size={18} />
                                    Get in Touch
                                </span>
                            </button>
                        </a>
                        <Link to="/">
                            <button className="px-10 py-5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white font-bold text-sm tracking-[0.2em] uppercase transition-all hover:bg-white/[0.08] hover:border-[#0066FF]/30">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.div>

        </motion.div>
      </div>
    </div>
  );
};
