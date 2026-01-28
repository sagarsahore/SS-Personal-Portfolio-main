import React, { useEffect, useState, memo, useRef } from 'react';
import { 
  Mail, Eye, Layers, Microscope, Target, Brain, 
  BookOpen, FileText, ExternalLink, Github, Award, TrendingUp,
  Clock, CheckCircle2, Circle, ChevronRight, Sparkles,
  Database, GitBranch, Activity, Server, BarChart3,
  Scan, Cpu, Code, Terminal, Beaker, GraduationCap,
  Copy, Check, ArrowUpRight, Zap, Users, Globe
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { NeuralBackground } from './NeuralBackground';
import { Navigation } from './Navigation';

// ========================================
// RESEARCH DATA
// ========================================

const researchDomains = [
  {
    id: 'glaucoma',
    title: 'Early Glaucoma Detection',
    subtitle: 'Deep Learning for Sight-Saving Diagnostics',
    icon: Eye,
    color: '#0066FF',
    description: 'Developing ensemble CNN architectures for detecting glaucoma from fundus images with clinical-grade sensitivity and explainable AI overlays.',
    metrics: [
      { label: 'Sensitivity', value: '96%' },
      { label: 'Specificity', value: '94%' },
      { label: 'Datasets', value: '4+' },
      { label: 'Inference', value: '<100ms' }
    ],
    tags: ['PyTorch', 'Medical AI', 'CNN Ensembles', 'Grad-CAM'],
    status: 'Active',
  },
  {
    id: 'multimodal',
    title: 'Multimodal Medical AI',
    subtitle: 'Image + Clinical Data Fusion',
    icon: Layers,
    color: '#14B8A6',
    description: 'Fusing fundus images with clinical metadata (age, IOP, family history) for enhanced diagnostic accuracy using cross-modal attention mechanisms.',
    metrics: [
      { label: 'Modalities', value: '3+' },
      { label: 'Improvement', value: '+8%' },
      { label: 'Attention', value: 'Cross-Modal' },
      { label: 'Validation', value: '5-Fold' }
    ],
    tags: ['Transformers', 'Attention', 'Data Fusion', 'BERT'],
    status: 'Active',
  },
  {
    id: 'retinal',
    title: 'Retinal Image Analysis',
    subtitle: 'Optic Disc Segmentation & CDR',
    icon: Microscope,
    color: '#A855F7',
    description: 'Automated segmentation of optic disc and cup regions for cup-to-disc ratio calculation, a key biomarker for glaucoma severity.',
    metrics: [
      { label: 'Dice Score', value: '0.94' },
      { label: 'Speed', value: '<2s' },
      { label: 'CDR Error', value: '±0.02' },
      { label: 'Resolution', value: '512×512' }
    ],
    tags: ['U-Net', 'Segmentation', 'OpenCV', 'Morphology'],
    status: 'In Progress',
  }
];

const publications = [
  {
    id: '1',
    title: 'Deep Learning Approaches for Early Glaucoma Detection: A Comparative Study of CNN Architectures',
    venue: 'IEEE ICHI 2025',
    year: 2025,
    authors: ['S. Sahore', 'Supervisor TBD'],
    status: 'Published',
    type: 'Conference',
    color: '#0066FF',
    abstract: 'Comprehensive evaluation of CNN architectures for glaucoma detection, achieving 96% sensitivity.',
  },
  {
    id: '2',
    title: 'Multimodal Fusion of Fundus Images and Clinical Data for Diabetic Retinopathy Staging',
    venue: 'Medical Image Analysis',
    year: 2025,
    authors: ['S. Sahore', 'Supervisor TBD'],
    status: 'Under Review',
    type: 'Journal',
    color: '#10B981',
    abstract: 'Novel cross-attention mechanism for fusing visual and clinical features.',
  },
  {
    id: '3',
    title: 'AI-Powered Early Detection of Ophthalmic Diseases: Deep Learning for Fundus Analysis',
    venue: 'PhD Thesis - University of Auckland',
    year: 2026,
    authors: ['Sagar Sahore'],
    status: 'In Progress',
    type: 'Thesis',
    color: '#A855F7',
    abstract: 'Comprehensive investigation into deep learning methods for ophthalmic disease detection.',
  }
];

const techStack = [
  { name: 'PyTorch', category: 'Framework', color: '#EE4C2C' },
  { name: 'TensorFlow', category: 'Framework', color: '#FF6F00' },
  { name: 'MONAI', category: 'Medical AI', color: '#00A3E0' },
  { name: 'OpenCV', category: 'Vision', color: '#5C3EE8' },
  { name: 'Hugging Face', category: 'NLP', color: '#FFD21E' },
  { name: 'Scikit-learn', category: 'ML', color: '#F89939' },
  { name: 'Weights & Biases', category: 'MLOps', color: '#FFBE00' },
  { name: 'Docker', category: 'DevOps', color: '#2496ED' },
];

const phdMilestones = [
  { name: 'Literature Review', progress: 100, status: 'completed', date: 'Mar 2025' },
  { name: 'Dataset Curation', progress: 100, status: 'completed', date: 'May 2025' },
  { name: 'Baseline Models', progress: 100, status: 'completed', date: 'Jul 2025' },
  { name: 'Novel Architecture', progress: 60, status: 'in-progress', date: 'Dec 2025' },
  { name: 'Clinical Validation', progress: 0, status: 'upcoming', date: 'Jun 2026' },
  { name: 'Thesis Defense', progress: 0, status: 'upcoming', date: 'Dec 2026' },
];

const researchMetrics = {
  publications: { value: '3', label: 'Publications', description: 'Conference + Journal' },
  datasets: { value: '4+', label: 'Datasets', description: 'Multi-source validation' },
  sensitivity: { value: '96%', label: 'Best Sensitivity', description: 'Glaucoma detection' },
  partners: { value: '2', label: 'Clinical Partners', description: 'Hospital collaborations' }
};

// ========================================
// SCROLL ANIMATED SECTION WRAPPER
// ========================================

const ScrollSection = ({ children, className = '', delay = 0 }: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// ========================================
// ANIMATED COMPONENTS
// ========================================

const NeuralPipeline = memo(() => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Data', 'Preprocess', 'Encode', 'Classify', 'Explain'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between py-6 px-4">
      {steps.map((step, idx) => (
        <React.Fragment key={step}>
          <motion.div 
            className="flex flex-col items-center gap-2"
            animate={{ 
              scale: activeStep === idx ? 1.1 : 1,
              opacity: activeStep >= idx ? 1 : 0.3
            }}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
              activeStep === idx ? 'bg-[#0066FF] border-[#0066FF] text-white' :
              activeStep > idx ? 'bg-[#10B981]/20 border-[#10B981]/40 text-[#10B981]' :
              'bg-white/5 border-white/10 text-white/40'
            }`}>
              {activeStep > idx ? <CheckCircle2 size={20} /> : <span className="text-sm font-bold">{idx + 1}</span>}
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-white/60">{step}</span>
          </motion.div>
          {idx < steps.length - 1 && (
            <motion.div className="flex-1 h-0.5 mx-2 rounded-full overflow-hidden bg-white/10">
              <motion.div 
                className="h-full bg-[#0066FF]"
                animate={{ width: activeStep > idx ? '100%' : '0%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
});

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/40 hover:text-white">
      {copied ? <Check size={14} className="text-[#10B981]" /> : <Copy size={14} />}
    </button>
  );
};

// ========================================
// MAIN COMPONENT
// ========================================

export const ResearchPage: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  // Parallax transforms for hero
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, -100]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0.3]);
  const heroScale = useTransform(smoothProgress, [0, 0.3], [1, 0.95]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#050505]">
      {/* 3D Neural Background - Same as Home Page */}
      <NeuralBackground />

      {/* Main Navigation */}
      <Navigation />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#0066FF] origin-left z-[101]"
        style={{ scaleX: smoothProgress }}
      />

      {/* HUD Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 p-8 opacity-30">
        <div className="absolute top-20 left-8 font-mono text-[9px] text-white/40 tracking-widest uppercase">
          Protocol: RESEARCH_LAB<br/>
          Ref: SS-PHD-2026
        </div>
        <div className="absolute bottom-8 right-8 font-mono text-[9px] text-white/40 tracking-widest uppercase text-right">
          University of Auckland<br/>
          Computational Ophthalmology
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">

        {/* ===== ENHANCED HERO SECTION ===== */}
        <motion.section 
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="mb-32 relative"
        >
          {/* Floating elements */}
          <motion.div
            className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-[#0066FF]/10 blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 -left-20 w-40 h-40 rounded-full bg-[#14B8A6]/10 blur-[80px]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          />
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div 
              className="p-3 rounded-2xl bg-gradient-to-br from-[#0066FF]/20 to-[#0066FF]/5 border border-[#0066FF]/30"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Brain size={28} className="text-[#0066FF]" />
            </motion.div>
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono uppercase tracking-widest text-[#0066FF]">Research Lab</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs font-mono text-[#10B981]">Active</span>
              </div>
              <span className="text-xs text-white/40">PhD Candidate • University of Auckland</span>
            </div>
          </motion.div>
          
          {/* Main Title - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white leading-[0.85] mb-6">
              <span className="block text-white/30">AI for</span>
              <span className="block relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00D4FF] to-[#14B8A6] animate-gradient">
                  Vision
                </span>
                {/* Animated underline */}
                <motion.div 
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#0066FF] to-[#14B8A6] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#0066FF] to-[#A855F7]">
                Science
              </span>
            </h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/50 leading-relaxed font-light max-w-3xl mb-10"
          >
            Building <span className="text-white font-medium">deep learning systems</span> that detect 
            <span className="text-[#0066FF] font-medium"> sight-threatening diseases</span> before 
            symptoms appear — making AI trustworthy for clinical deployment.
          </motion.p>
          
          {/* Tags with stagger animation */}
          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {['Computational Ophthalmology', 'Deep Learning', 'Medical Imaging', 'Explainable AI'].map((tag, idx) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#0066FF]/30 text-[#0066FF] bg-[#0066FF]/10 backdrop-blur-sm cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* ===== METRICS GRID ===== */}
        <ScrollSection className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Activity size={16} className="text-[#0066FF]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Research Metrics</span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(researchMetrics).map(([key, data], idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#0066FF]/30 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-3xl font-bold text-[#0066FF] mb-2">{data.value}</div>
                  <div className="text-sm font-medium text-white mb-1">{data.label}</div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-wider">{data.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollSection>

        {/* ===== PHD PROGRESS ===== */}
        <ScrollSection className="mb-24" delay={0.1}>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={16} className="text-[#F59E0B]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">PhD Progress • Year 1</span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {phdMilestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className={`p-4 rounded-xl border transition-all cursor-default ${
                    milestone.status === 'completed' ? 'bg-[#10B981]/10 border-[#10B981]/30' :
                    milestone.status === 'in-progress' ? 'bg-[#F59E0B]/10 border-[#F59E0B]/30' :
                    'bg-white/[0.02] border-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    {milestone.status === 'completed' ? (
                      <CheckCircle2 size={16} className="text-[#10B981]" />
                    ) : milestone.status === 'in-progress' ? (
                      <Clock size={16} className="text-[#F59E0B]" />
                    ) : (
                      <Circle size={16} className="text-white/30" />
                    )}
                    <span className="text-[10px] font-mono text-white/50">{milestone.date}</span>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-2">{milestone.name}</h4>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${
                        milestone.status === 'completed' ? 'bg-[#10B981]' :
                        milestone.status === 'in-progress' ? 'bg-[#F59E0B]' : 'bg-white/20'
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${milestone.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* ===== RESEARCH DOMAINS ===== */}
        <ScrollSection className="mb-24" delay={0.1}>
          <div className="flex items-center gap-3 mb-8">
            <Target size={16} className="text-[#0066FF]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Core Research Domains</span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {researchDomains.map((domain, idx) => (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 opacity-50" style={{
                  background: `linear-gradient(135deg, ${domain.color}15, transparent)`
                }} />
                
                <div className="relative p-8 border border-white/[0.06] rounded-3xl hover:border-white/10 transition-all h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="p-3 rounded-xl border"
                        style={{ backgroundColor: `${domain.color}15`, borderColor: `${domain.color}30`, color: domain.color }}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <domain.icon size={24} />
                      </motion.div>
                    </div>
                    <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full ${
                      domain.status === 'Active' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#F59E0B]/10 text-[#F59E0B]'
                    }`}>
                      {domain.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0066FF] transition-colors">{domain.title}</h3>
                  <p className="text-sm text-white/40 mb-4">{domain.subtitle}</p>
                  <p className="text-sm text-white/60 leading-relaxed mb-6 flex-grow">{domain.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {domain.metrics.slice(0, 4).map((metric, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="text-lg font-bold" style={{ color: domain.color }}>{metric.value}</div>
                        <div className="text-[9px] text-white/40 uppercase tracking-wider">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {domain.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.05] text-white/60 border border-white/[0.08]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollSection>

        {/* ===== NEURAL PIPELINE ===== */}
        <ScrollSection className="mb-24" delay={0.1}>
          <div className="flex items-center gap-3 mb-8">
            <Zap size={16} className="text-[#14B8A6]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">AI Pipeline</span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]">
            <h3 className="text-xl font-bold text-white mb-2">Deep Learning Inference Pipeline</h3>
            <p className="text-sm text-white/40 mb-6">From raw fundus image to clinical decision support</p>
            <NeuralPipeline />
          </div>
        </ScrollSection>

        {/* ===== TECH STACK ===== */}
        <ScrollSection className="mb-24" delay={0.1}>
          <div className="flex items-center gap-3 mb-8">
            <Cpu size={16} className="text-[#A855F7]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Research Stack</span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="group p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
                  <span className="text-sm font-medium text-white group-hover:text-[#0066FF] transition-colors">{tech.name}</span>
                </div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </ScrollSection>

        {/* ===== PUBLICATIONS ===== */}
        <ScrollSection className="mb-24" delay={0.1}>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={16} className="text-[#F59E0B]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Publications</span>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          
          <div className="space-y-4">
            {publications.map((pub, idx) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ x: 5 }}
                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: pub.color }}>
                        {pub.venue}
                      </span>
                      <span className="text-[10px] text-white/30">•</span>
                      <span className="text-[10px] font-mono text-white/40">{pub.year}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider ${
                        pub.status === 'Published' ? 'bg-[#10B981]/10 text-[#10B981]' :
                        pub.status === 'Under Review' ? 'bg-[#F59E0B]/10 text-[#F59E0B]' :
                        'bg-[#A855F7]/10 text-[#A855F7]'
                      }`}>
                        {pub.status}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors mb-2 leading-snug">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-white/40 mb-2">{pub.authors.join(', ')}</p>
                    <p className="text-sm text-white/50">{pub.abstract}</p>
                  </div>
                  <div className="flex items-center gap-2 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                    <CopyButton text={`@article{sahore${pub.year}}`} />
                    <button className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollSection>

        {/* ===== COLLABORATION CTA ===== */}
        <ScrollSection delay={0.1}>
          <div className="relative p-12 rounded-3xl overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/10 via-[#14B8A6]/10 to-[#0066FF]/10"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <div className="absolute inset-0 border border-white/[0.08] rounded-3xl" />
            
            <div className="relative text-center">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] mb-6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Users size={14} className="text-[#0066FF]" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">Open to Collaboration</span>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Interested in Vision AI Research?
              </h2>
              <p className="text-lg text-white/50 mb-8 max-w-2xl mx-auto">
                I'm looking to collaborate with researchers, clinicians, and industry partners 
                on medical imaging and AI for healthcare.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.a 
                  href="mailto:sagarsahore.work@gmail.com"
                  className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={18} />
                  Get in Touch
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.a>
                <motion.a 
                  href="https://github.com/sagarsahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/70 hover:text-white hover:border-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                  View GitHub
                </motion.a>
              </div>
            </div>
          </div>
        </ScrollSection>
      </div>

      {/* Bottom Padding */}
      <div className="h-20" />

      {/* CSS for gradient animation */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
};
