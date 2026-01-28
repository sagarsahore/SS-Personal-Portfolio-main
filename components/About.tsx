import React from 'react';
import { GlassCard } from './GlassCard';
import { Vision3D } from './Vision3D';
import { 
  Eye, Scan, Code, Layers, ArrowRight, Cloud, Database, Briefcase, 
  Microscope, Cpu, Building2, GraduationCap, TrendingUp, Award, Zap,
  Network, Binary, CircuitBoard, Activity
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Role identity tags
const roleIdentities = [
  { label: 'Researcher', color: '#0066FF' },
  { label: 'AI Engineer', color: '#A855F7' },
  { label: 'Cloud Architect', color: '#F97316' },
  { label: 'Consultant', color: '#10B981' }
];

// Signal tiles data with semantic labels
const signalTiles = [
  { 
    icon: Building2, 
    label: 'Systems Built', 
    value: '12+', 
    color: '#0066FF',
    progress: 85 
  },
  { 
    icon: Award, 
    label: 'Platforms Mastered', 
    value: '18+', 
    color: '#F97316',
    progress: 95 
  },
  { 
    icon: GraduationCap, 
    label: 'Validated Expertise', 
    value: '7+', 
    color: '#F59E0B',
    progress: 70 
  },
  { 
    icon: TrendingUp, 
    label: 'Business Impact', 
    value: '60%', 
    color: '#10B981',
    progress: 60 
  }
];

// Arsenal data with grouped skills
const arsenalData = [
  {
    domain: 'CRM & Automation',
    title: 'Salesforce Ecosystem',
    role: 'Solution Architect',
    icon: Cloud,
    color: '#0EA5E9',
    borderColor: 'border-sky-500',
    bgGradient: 'from-sky-500/10',
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
    borderColor: 'border-orange-500',
    bgGradient: 'from-orange-500/10',
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
    borderColor: 'border-purple-500',
    bgGradient: 'from-purple-500/10',
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
    icon: Code,
    color: '#14B8A6',
    borderColor: 'border-teal-500',
    bgGradient: 'from-teal-500/10',
    skills: {
      core: ['React.js', 'Node.js'],
      tools: ['MongoDB', 'Express', 'TypeScript'],
      methods: ['REST APIs', 'GraphQL']
    }
  }
];

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-10">
      
      {/* ===== PROFILE CONSOLE HEADER ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
        
        {/* LEFT: Identity Console Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-3xl bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.08] overflow-hidden">
            {/* Gradient accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0066FF] via-[#A855F7] to-[#0066FF]" />
            
            {/* Inner grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }} />
            
            <div className="relative p-8 pl-10">
              {/* Section Label */}
              <div className="flex items-center gap-2 mb-4">
                <CircuitBoard size={14} className="text-[#0066FF]" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0066FF]">
                  Profile Console
                </span>
              </div>
              
              {/* Refined Title */}
              <h2 className="text-2xl font-bold tracking-tight text-white mb-6">
                About The Architect
              </h2>
              
              {/* Narrative Blocks - 3 stacked short blocks */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    Pursuing a <span className="text-white font-medium">Master's in Software Engineering</span>, 
                    blending technical depth with innovation in <span className="text-[#0066FF]">Salesforce, Cloud Computing, and AI/ML</span>.
                  </p>
                </div>
                
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    Building intelligent CRM solutions that drive <span className="text-white font-medium">business transformation</span>. 
                    Experience in <span className="text-[#10B981]">sales and business development</span> informs technical decisions.
                  </p>
                </div>
                
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    Bridging the gap between <span className="text-white font-medium">technical solutions and business needs</span>, 
                    ensuring platforms are optimized for <span className="text-[#F59E0B]">growth and efficiency</span>.
                  </p>
                </div>
              </div>
              
              {/* Role Chip Bar */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {roleIdentities.map((role, idx) => (
                  <motion.span
                    key={role.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border"
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
              
              {/* CTA Button */}
              <button 
                onClick={() => navigate('/about')}
                className="flex items-center gap-2 text-sm text-[#0066FF] hover:text-white font-medium transition-colors group px-4 py-2 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 hover:bg-[#0066FF] w-fit"
              >
                <span className="uppercase tracking-widest text-xs font-mono">Explore Full Story</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* RIGHT: Cognitive Field Monitor */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-full"
        >
          <div className="relative rounded-3xl bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.06] overflow-hidden h-[400px] lg:h-full min-h-[400px]">
            {/* Scientific frame - axis ticks */}
            <div className="absolute left-0 top-0 bottom-0 w-4 flex flex-col justify-between py-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-2 h-px bg-white/20" />
                  <span className="text-[8px] font-mono text-white/20 ml-1">{(5 - i) * 20}</span>
                </div>
              ))}
            </div>
            <div className="absolute left-0 right-0 bottom-0 h-4 flex justify-between px-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="h-2 w-px bg-white/20" />
                  <span className="text-[8px] font-mono text-white/20 mt-1">{i * 25}</span>
                </div>
              ))}
            </div>
            
            {/* Visualization */}
            <Vision3D />
            
            {/* Internal title */}
            <div className="absolute top-4 left-6 pointer-events-none">
              <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-white/40">
                Multimodal System State
              </span>
            </div>
            
            {/* Status indicator */}
            <div className="absolute top-4 right-4 pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/70">System Active</span>
              </div>
            </div>
            
            {/* Semantic overlay labels */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between pointer-events-none">
              <span className="px-2 py-1 rounded bg-black/40 backdrop-blur text-[8px] font-mono uppercase tracking-wider text-[#0066FF]/70">
                Representation Space
              </span>
              <span className="px-2 py-1 rounded bg-black/40 backdrop-blur text-[8px] font-mono uppercase tracking-wider text-[#A855F7]/70">
                Signal Flow
              </span>
              <span className="px-2 py-1 rounded bg-black/40 backdrop-blur text-[8px] font-mono uppercase tracking-wider text-[#10B981]/70">
                Decision Surface
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ===== SIGNAL TILES (2×2 Diagnostic Grid) ===== */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {signalTiles.map((tile, idx) => (
          <motion.div
            key={tile.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="relative p-5 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 overflow-hidden">
              {/* Hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${tile.color}10, transparent 70%)` }}
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${tile.color}15`, border: `1px solid ${tile.color}30` }}
                >
                  <tile.icon size={18} style={{ color: tile.color }} />
                </div>
                
                {/* Label */}
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280] mb-1">
                  {tile.label}
                </div>
                
                {/* Value */}
                <div className="text-2xl font-bold text-white mb-3" style={{ color: tile.color }}>
                  {tile.value}
                </div>
                
                {/* Progress bar */}
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
      </motion.div>

      {/* ===== SECTION DIVIDER WITH SCANLINE ===== */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative flex items-center gap-4 mb-8"
      >
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative overflow-hidden">
          {/* Animated scanline */}
          <motion.div 
            className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent"
            animate={{ x: ['-100%', '500%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 px-4">
          Profile Signals
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative overflow-hidden">
          <motion.div 
            className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-[#0066FF]/50 to-transparent"
            animate={{ x: ['500%', '-100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>

      {/* ===== METHOD & SYSTEMS STACK ===== */}
      <div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-2.5 bg-[#0066FF]/10 rounded-xl text-[#0066FF] border border-[#0066FF]/20">
            <Network size={20} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">Method & Systems Stack</h3>
            <p className="text-[10px] font-mono uppercase tracking-wider text-[#6B7280]">Core competencies & technical arsenal</p>
          </div>
        </motion.div>

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
                className={`relative h-full rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.08] overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] ${card.borderColor}`}
                style={{ borderTopWidth: '2px', borderTopColor: 'transparent' }}
                onMouseEnter={(e) => e.currentTarget.style.borderTopColor = card.color}
                onMouseLeave={(e) => e.currentTarget.style.borderTopColor = 'transparent'}
              >
                {/* Hover gradient */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-b ${card.bgGradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                />
                
                {/* Architecture lines on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,20 L100,20" stroke={card.color} strokeWidth="0.2" fill="none" />
                    <path d="M0,50 L100,50" stroke={card.color} strokeWidth="0.2" fill="none" />
                    <path d="M0,80 L100,80" stroke={card.color} strokeWidth="0.2" fill="none" />
                    <path d="M20,0 L20,100" stroke={card.color} strokeWidth="0.2" fill="none" />
                    <path d="M80,0 L80,100" stroke={card.color} strokeWidth="0.2" fill="none" />
                  </svg>
                </div>
                
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
                    {/* Core */}
                    <div>
                      <div className="text-[8px] font-mono uppercase tracking-wider text-white/30 mb-1.5">Core</div>
                      <div className="flex flex-wrap gap-1.5">
                        {card.skills.core.map(skill => (
                          <span 
                            key={skill} 
                            className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] transition-all hover:border-opacity-30"
                            style={{ color: `${card.color}CC`, borderColor: `${card.color}20` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tools */}
                    <div>
                      <div className="text-[8px] font-mono uppercase tracking-wider text-white/30 mb-1.5">Tools</div>
                      <div className="flex flex-wrap gap-1.5">
                        {card.skills.tools.map(skill => (
                          <span 
                            key={skill} 
                            className="text-[10px] font-mono px-2 py-1 rounded-md bg-black/40 border border-white/[0.05] text-white/50 hover:text-white/70 transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Methods */}
                    <div>
                      <div className="text-[8px] font-mono uppercase tracking-wider text-white/30 mb-1.5">Methods</div>
                      <div className="flex flex-wrap gap-1.5">
                        {card.skills.methods.map(skill => (
                          <span 
                            key={skill} 
                            className="text-[10px] font-mono px-2 py-1 rounded-md bg-black/40 border border-white/[0.05] text-white/40 hover:text-white/60 transition-all"
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
      </div>
    </section>
  );
};