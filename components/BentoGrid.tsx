import React, { useEffect, useState, memo } from 'react';
import { GlassCard } from './GlassCard';
import { Hero3D } from './Hero3D';
import { 
  Brain, Eye, Layers, Copy, ExternalLink, Check, ArrowUpRight, Cpu, BookOpen, 
  Microscope, Target, Sparkles, Activity, BarChart3, FileText, Github,
  ChevronRight, Zap, Database, GitBranch, Clock, CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- RESEARCH DATA ---
const researchAreas = [
  {
    id: 'glaucoma',
    title: 'Early Glaucoma Detection',
    subtitle: 'Deep Learning for Sight-Saving Diagnostics',
    icon: Eye,
    color: '#0066FF',
    gradient: 'from-[#0066FF]/20 via-[#0066FF]/10 to-transparent',
    description: 'Developing ensemble CNN architectures for detecting glaucoma from fundus images with clinical-grade sensitivity.',
    metrics: [
      { label: 'Sensitivity', value: '96%' },
      { label: 'Datasets', value: '4+' }
    ],
    tags: ['PyTorch', 'Medical AI', 'CNNs'],
    status: 'Active'
  },
  {
    id: 'multimodal',
    title: 'Multimodal Fusion',
    subtitle: 'Image + Clinical Data Integration',
    icon: Layers,
    color: '#14B8A6',
    gradient: 'from-[#14B8A6]/20 via-[#14B8A6]/10 to-transparent',
    description: 'Fusing fundus images with clinical metadata for enhanced diagnostic accuracy using attention mechanisms.',
    metrics: [
      { label: 'Modalities', value: '3+' },
      { label: 'Improvement', value: '+8%' }
    ],
    tags: ['Transformers', 'Data Fusion', 'Attention'],
    status: 'Active'
  },
  {
    id: 'retinal',
    title: 'Retinal Image Analysis',
    subtitle: 'Optic Disc Segmentation & CDR',
    icon: Microscope,
    color: '#A855F7',
    gradient: 'from-[#A855F7]/20 via-[#A855F7]/10 to-transparent',
    description: 'Automated segmentation of optic disc and cup regions for cup-to-disc ratio calculation.',
    metrics: [
      { label: 'Accuracy', value: '94%' },
      { label: 'Speed', value: '<2s' }
    ],
    tags: ['U-Net', 'Segmentation', 'OpenCV'],
    status: 'In Progress'
  }
];

const publications = [
  {
    id: '1',
    title: 'Deep Learning Approaches for Early Glaucoma Detection: A Comparative Study of CNN Architectures',
    venue: 'IEEE ICHI 2025',
    year: 2025,
    status: 'Published',
    type: 'Conference',
    color: '#0066FF'
  },
  {
    id: '2',
    title: 'Multimodal Fusion of Fundus Images and Clinical Data for Diabetic Retinopathy Staging',
    venue: 'Medical Image Analysis',
    year: 2025,
    status: 'Under Review',
    type: 'Journal',
    color: '#10B981'
  },
  {
    id: '3',
    title: 'AI-Powered Early Detection of Ophthalmic Diseases: Deep Learning for Fundus Analysis',
    venue: 'PhD Thesis - University of Auckland',
    year: 2026,
    status: 'In Progress',
    type: 'Thesis',
    color: '#A855F7'
  }
];

const techStack = ['PyTorch', 'TensorFlow', 'OpenCV', 'MONAI', 'Scikit-learn', 'Hugging Face'];

const phdMilestones = [
  { name: 'Literature Review', progress: 100, status: 'completed' },
  { name: 'Dataset Curation', progress: 100, status: 'completed' },
  { name: 'Baseline Models', progress: 100, status: 'completed' },
  { name: 'Novel Architecture', progress: 60, status: 'in-progress' },
  { name: 'Clinical Validation', progress: 0, status: 'upcoming' },
];

// --- ANIMATED NEURAL VISUALIZATION ---
const NeuralVisualization = memo(() => {
  const [pulseIndex, setPulseIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex(prev => (prev + 1) % 5);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      {/* Neural pathway */}
      <svg className="w-full h-full" viewBox="0 0 300 60">
        {/* Connections */}
        {[0, 1, 2, 3].map((i) => (
          <motion.line
            key={i}
            x1={40 + i * 60}
            y1="30"
            x2={100 + i * 60}
            y2="30"
            stroke="#0066FF"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ 
              pathLength: 1, 
              opacity: pulseIndex === i ? 1 : 0.2,
              strokeWidth: pulseIndex === i ? 3 : 2
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
        
        {/* Nodes */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={i}
            cx={40 + i * 60}
            cy="30"
            r="8"
            fill={pulseIndex >= i ? '#0066FF' : '#1a1a1a'}
            stroke="#0066FF"
            strokeWidth="2"
            animate={{
              scale: pulseIndex === i ? 1.3 : 1,
              opacity: pulseIndex >= i ? 1 : 0.3
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
        
        {/* Labels */}
        <text x="40" y="55" fill="#6B7280" fontSize="8" textAnchor="middle">Input</text>
        <text x="100" y="55" fill="#6B7280" fontSize="8" textAnchor="middle">Encode</text>
        <text x="160" y="55" fill="#6B7280" fontSize="8" textAnchor="middle">Process</text>
        <text x="220" y="55" fill="#6B7280" fontSize="8" textAnchor="middle">Classify</text>
        <text x="280" y="55" fill="#6B7280" fontSize="8" textAnchor="middle">Output</text>
      </svg>
    </div>
  );
});

// --- PHD PROGRESS BAR ---
const PhDProgressTrack = () => {
  return (
    <div className="space-y-3">
      {phdMilestones.map((milestone, idx) => (
        <div key={milestone.name} className="flex items-center gap-3">
          <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
            milestone.status === 'completed' ? 'bg-[#10B981]' :
            milestone.status === 'in-progress' ? 'bg-[#F59E0B]' :
            'bg-white/10'
          }`}>
            {milestone.status === 'completed' ? (
              <CheckCircle2 size={12} className="text-white" />
            ) : milestone.status === 'in-progress' ? (
              <Clock size={10} className="text-white" />
            ) : (
              <div className="w-2 h-2 rounded-full bg-white/30" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-white/80">{milestone.name}</span>
              <span className="text-[10px] font-mono text-white/40">{milestone.progress}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${
                  milestone.status === 'completed' ? 'bg-[#10B981]' :
                  milestone.status === 'in-progress' ? 'bg-[#F59E0B]' :
                  'bg-white/20'
                }`}
                initial={{ width: 0 }}
                whileInView={{ width: `${milestone.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.1 }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- MAIN COMPONENT ---
export const BentoGrid: React.FC = () => {
  return (
    <div className="space-y-16 py-10">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20">
              <Brain size={20} />
            </div>
            <span className="text-[10px] font-mono font-bold text-[#0066FF] uppercase tracking-[0.3em]">
              Research Lab
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
            Vision AI Research
          </h2>
          <p className="text-lg text-zinc-400 font-light leading-relaxed">
            Building AI systems for early detection of sight-threatening eye diseases, 
            bridging deep learning research with clinical deployment.
          </p>
        </div>
        
        <Link to="/research" className="group">
          <motion.div 
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20 hover:bg-[#0066FF]/20 hover:border-[#0066FF]/40 transition-all"
            whileHover={{ x: 5 }}
          >
            <span className="text-sm font-medium text-[#0066FF]">View Full Research Profile</span>
            <ArrowUpRight size={16} className="text-[#0066FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.div>
        </Link>
      </div>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* PRIMARY: Main Research Focus */}
        <div className="md:col-span-8 group">
          <GlassCard className="h-full !p-0 overflow-hidden">
            <div className={`p-8 bg-gradient-to-br ${researchAreas[0].gradient}`}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#0066FF]/20 text-[#0066FF] border border-[#0066FF]/30">
                    <Eye size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-[#0066FF] uppercase tracking-[0.2em]">
                        Primary Focus
                      </span>
                      <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-1">{researchAreas[0].title}</h3>
                  </div>
                </div>
                <div className="flex gap-2">
                  {researchAreas[0].metrics.map((m, i) => (
                    <div key={i} className="text-center px-4 py-2 rounded-xl bg-black/20 backdrop-blur-sm">
                      <div className="text-xl font-bold text-white">{m.value}</div>
                      <div className="text-[9px] text-white/50 uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-white/70 leading-relaxed mb-6 max-w-xl">
                {researchAreas[0].description}
              </p>
              
              {/* Neural Visualization */}
              <NeuralVisualization />
              
              <div className="flex items-center gap-2 mt-6">
                {researchAreas[0].tags.map(tag => (
                  <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

        {/* SIDE: Secondary Research Areas */}
        <div className="md:col-span-4 flex flex-col gap-5">
          {researchAreas.slice(1).map((area, idx) => (
            <GlassCard key={area.id} className="!p-6 flex-1 group hover:border-white/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="p-2.5 rounded-xl border"
                  style={{ 
                    backgroundColor: `${area.color}15`,
                    borderColor: `${area.color}30`,
                    color: area.color
                  }}
                >
                  <area.icon size={18} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#0066FF] transition-colors">{area.title}</h4>
                  <p className="text-[10px] text-white/40">{area.subtitle}</p>
                </div>
              </div>
              <p className="text-xs text-white/50 leading-relaxed mb-4">
                {area.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  {area.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-sm font-bold" style={{ color: area.color }}>{m.value}</div>
                      <div className="text-[8px] text-white/30 uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>
                <span className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                  area.status === 'Active' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#F59E0B]/10 text-[#F59E0B]'
                }`}>
                  {area.status}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* HERO 3D SHOWCASE - Full Width Interactive Visualization */}
        <div className="md:col-span-12">
          <GlassCard className="!p-0 overflow-hidden">
            <div className="p-6 pb-4">
              <div className="flex items-center gap-2 mb-4">
                <Brain size={18} className="text-[#A855F7]" />
                <h3 className="text-sm font-bold text-white">Neural Vision System</h3>
                <span className="ml-auto text-[9px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full">Interactive</span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed mb-4">
                Interactive 3D visualization of the computational vision system architecture. 
                Drag to explore the neural processing pipeline.
              </p>
            </div>
            <Hero3D />
          </GlassCard>
        </div>

        {/* PHD PROGRESS */}
        <div className="md:col-span-4">
          <GlassCard className="h-full !p-6">
            <div className="flex items-center gap-2 mb-6">
              <Target size={18} className="text-[#F59E0B]" />
              <h3 className="text-sm font-bold text-white">PhD Progress</h3>
              <span className="ml-auto text-[9px] font-mono text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded-full">Year 1</span>
            </div>
            <PhDProgressTrack />
          </GlassCard>
        </div>

        {/* TECH STACK */}
        <div className="md:col-span-4">
          <GlassCard className="h-full !p-6">
            <div className="flex items-center gap-2 mb-6">
              <Cpu size={18} className="text-[#14B8A6]" />
              <h3 className="text-sm font-bold text-white">Research Stack</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {techStack.map((tech) => (
                <div key={tech} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:border-[#14B8A6]/30 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                  <span className="text-xs text-white/70">{tech}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* COMPUTE */}
        <div className="md:col-span-4">
          <GlassCard className="h-full !p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Activity size={18} className="text-[#A855F7]" />
                <h3 className="text-sm font-bold text-white">Compute</h3>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#10B981]">
                <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full animate-pulse" />
                Online
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">NVIDIA GPU</div>
            <div className="text-xs text-white/40 mb-4">Cloud Training Environment</div>
            <div className="flex items-end gap-1 h-12">
              {[65, 78, 45, 88, 72, 56, 82, 69].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-[#A855F7]/40 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Publications Section */}
      <div className="pt-12 border-t border-white/5">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <BookOpen size={20} className="text-[#F59E0B]" />
            <h3 className="text-xl font-bold text-white">Selected Publications</h3>
          </div>
          <Link to="/research" className="flex items-center gap-2 text-xs text-white/40 hover:text-[#0066FF] transition-colors">
            View all <ChevronRight size={14} />
          </Link>
        </div>
        
        <div className="space-y-3">
          {publications.map((pub, idx) => (
            <motion.div 
              key={pub.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all border border-white/[0.05] hover:border-white/10"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span 
                    className="text-[10px] font-mono font-bold uppercase tracking-widest"
                    style={{ color: pub.color }}
                  >
                    {pub.venue} • {pub.year}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider ${
                    pub.status === 'Published' ? 'bg-[#10B981]/10 text-[#10B981]' :
                    pub.status === 'Under Review' ? 'bg-[#F59E0B]/10 text-[#F59E0B]' :
                    'bg-[#A855F7]/10 text-[#A855F7]'
                  }`}>
                    {pub.status}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 text-[9px] text-white/40 uppercase tracking-wider">
                    {pub.type}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-white/90 group-hover:text-white transition-colors leading-snug">
                  {pub.title}
                </h4>
              </div>
              <div className="flex items-center gap-2 mt-4 md:mt-0 md:opacity-0 group-hover:opacity-100 transition-all">
                <button className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors">
                  <FileText size={16} />
                </button>
                <button className="p-2 rounded-lg hover:bg-white/10 text-white/40 hover:text-white transition-colors">
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};