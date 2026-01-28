import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, ExternalLink, ArrowUpRight, X, 
  Database, BrainCircuit, Server, Code2, Target, CheckCircle2,
  Layers, Cpu, Activity
} from 'lucide-react';
import { flagshipProjects, ProjectData, projectCategories, ProjectCategory } from '../../data/projects';

// Architecture layer visualization
const ArchitecturePreview: React.FC<{ project: ProjectData; isHovered: boolean }> = ({ project, isHovered }) => {
  const layers = project.architectureLayers;
  if (!layers) return null;

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 space-y-2 w-full">
        {/* Data Flow */}
        <div className="flex items-center gap-2">
          <Database size={10} className="text-[#0066FF]" />
          <div className="flex gap-1 flex-wrap">
            {layers.dataFlow.slice(0, 3).map((item, idx) => (
              <span key={idx} className="text-[8px] px-1.5 py-0.5 rounded bg-[#0066FF]/20 text-[#0066FF]">
                {item}
              </span>
            ))}
          </div>
        </div>
        {/* ML Flow */}
        <div className="flex items-center gap-2">
          <BrainCircuit size={10} className="text-[#EF4444]" />
          <div className="flex gap-1 flex-wrap">
            {layers.mlFlow.slice(0, 3).map((item, idx) => (
              <span key={idx} className="text-[8px] px-1.5 py-0.5 rounded bg-[#EF4444]/20 text-[#EF4444]">
                {item}
              </span>
            ))}
          </div>
        </div>
        {/* Cloud Infra */}
        <div className="flex items-center gap-2">
          <Server size={10} className="text-[#A855F7]" />
          <div className="flex gap-1 flex-wrap">
            {layers.cloudInfra.slice(0, 3).map((item, idx) => (
              <span key={idx} className="text-[8px] px-1.5 py-0.5 rounded bg-[#A855F7]/20 text-[#A855F7]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Project Card Component
const ProjectCard: React.FC<{ project: ProjectData; onClick: () => void }> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = project.icon;

  const statusColors: Record<string, string> = {
    'Production-Ready': 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30',
    'Research Prototype': 'bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30',
    'Deployed': 'bg-[#0066FF]/20 text-[#0066FF] border-[#0066FF]/30',
    'In Development': 'bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30',
    'Academic Capstone': 'bg-[#EF4444]/20 text-[#EF4444] border-[#EF4444]/30'
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative h-full rounded-3xl bg-[#0A0A0A] border border-white/[0.08] overflow-hidden hover:border-[#0066FF]/40 transition-all duration-500">
        
        {/* Gradient Header */}
        <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay" />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-full text-[9px] font-semibold uppercase tracking-wider border ${statusColors[project.status]}`}>
              {project.status}
            </span>
          </div>

          {/* Domain Badge */}
          <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/30 backdrop-blur-xl border border-white/10">
            <IconComponent size={18} className="text-white" />
          </div>

          {/* Architecture Preview on Hover */}
          <ArchitecturePreview project={project} isHovered={isHovered} />

          {/* Featured indicator */}
          {project.featured && (
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0066FF]/20 backdrop-blur-xl border border-[#0066FF]/30">
              <Activity size={10} className="text-[#0066FF]" />
              <span className="text-[9px] text-[#0066FF] font-semibold uppercase">Flagship</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Domain & Role */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0066FF]">
              {project.domain}
            </span>
            <span className="text-[10px] text-[#6B7280] font-mono">
              {project.role}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0066FF] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-[#6B7280] mb-4">{project.subtitle}</p>

          {/* Problem Statement */}
          <div className="mb-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <div className="flex items-center gap-2 mb-2">
              <Target size={12} className="text-[#F59E0B]" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#F59E0B]">Problem</span>
            </div>
            <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-2">
              {project.problem}
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {project.results.slice(0, 4).map((result, idx) => (
              <div key={idx} className="text-center p-2 rounded-lg bg-white/[0.02]">
                <div className="text-sm font-bold text-white">{result.value}</div>
                <div className="text-[8px] text-[#6B7280] uppercase tracking-wider">{result.label}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.slice(0, 5).map((tech) => (
              <span key={tech} className="text-[9px] px-2 py-1 rounded-md bg-white/[0.03] text-[#9CA3AF] border border-white/[0.05]">
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
            {project.links.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] text-[#9CA3AF] hover:text-white hover:bg-white/[0.08] transition-all text-xs"
              >
                <Github size={12} />
                Code
              </a>
            )}
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052CC] transition-all group/btn">
              View Case Study
              <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Project Detail Modal
const ProjectDetailModal: React.FC<{ project: ProjectData | null; onClose: () => void }> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'data' | 'modeling' | 'engineering' | 'cloud'>('data');

  if (!project) return null;

  const IconComponent = project.icon;
  const methodology = project.methodology;

  const tabs = [
    { id: 'data', label: 'Data Engineering', icon: Database },
    { id: 'modeling', label: 'Modeling', icon: BrainCircuit },
    { id: 'engineering', label: 'Software', icon: Code2 },
    { id: 'cloud', label: 'Cloud', icon: Server }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0A0A0A] border border-white/[0.08]"
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] transition-colors z-10"
        >
          <X size={20} className="text-white" />
        </button>

        {/* Header */}
        <div className={`p-8 bg-gradient-to-br ${project.gradient}`}>
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-2xl bg-black/30 backdrop-blur-xl">
              <IconComponent size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-white/80">{project.domain}</span>
                <span className="text-xs text-white/50">•</span>
                <span className="text-xs text-white/60">{project.status}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-white/70">{project.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Executive Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <h3 className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                <Target size={16} className="text-[#F59E0B]" />
                The Problem
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <h3 className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                <CheckCircle2 size={16} className="text-[#10B981]" />
                The Solution
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-4 gap-4">
            {project.results.map((result, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center">
                <div className="text-2xl font-bold text-[#0066FF]">{result.value}</div>
                <div className="text-xs text-[#6B7280] uppercase tracking-wider">{result.label}</div>
              </div>
            ))}
          </div>

          {/* Technical Breakdown Tabs */}
          {methodology && (
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Technical Breakdown</h3>
              <div className="flex gap-2 mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-[#0066FF] text-white'
                        : 'bg-white/[0.03] text-[#9CA3AF] hover:bg-white/[0.08]'
                    }`}
                  >
                    <tab.icon size={14} />
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <ul className="space-y-2">
                  {(activeTab === 'data' ? methodology.dataEngineering :
                    activeTab === 'modeling' ? methodology.modeling :
                    activeTab === 'engineering' ? methodology.softwareEngineering :
                    methodology.cloudScalability
                  ).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#9CA3AF]">
                      <CheckCircle2 size={14} className="text-[#0066FF] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-xl bg-[#0066FF]/10 text-[#0066FF] text-sm font-medium border border-[#0066FF]/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.links.github && (
              <a 
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] text-white hover:bg-white/[0.1] transition-all"
              >
                <Github size={18} />
                View on GitHub
              </a>
            )}
            {project.links.demo && (
              <a 
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] text-white hover:bg-[#0052CC] transition-all"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Grid Component
export const FlagshipProjectsGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? flagshipProjects
    : flagshipProjects.filter(p => {
        if (activeCategory === 'AI / ML') return p.domain === 'Healthcare AI' || p.domain === 'Computer Vision';
        if (activeCategory === 'Computer Vision') return p.domain === 'Computer Vision';
        if (activeCategory === 'Cloud & DevOps') return p.domain === 'Cloud Infrastructure';
        if (activeCategory === 'Salesforce & Enterprise') return p.domain === 'Enterprise CRM';
        if (activeCategory === 'Full Stack') return p.domain === 'Full Stack';
        if (activeCategory === 'Academic Capstone') return p.status === 'Academic Capstone';
        return true;
      });

  return (
    <section className="py-24 px-6 lg:px-20 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <span className="text-[#0066FF] text-xs font-mono tracking-widest uppercase mb-2 block">Flagship Projects</span>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-2">Research-Grade Systems</h2>
            <p className="text-[#6B7280] max-w-xl">Each project is a complete system—architected, implemented, validated, and documented to production standards.</p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0066FF] text-white'
                    : 'bg-white/[0.03] text-[#9CA3AF] border border-white/[0.05] hover:border-[#0066FF]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};
