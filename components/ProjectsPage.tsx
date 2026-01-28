import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { NeuralBackground } from './NeuralBackground';
import { ProjectsHero } from './projects/ProjectsHero';
import { FlagshipProjectsGrid } from './projects/FlagshipProjectsGrid';
import { EngineeringMethodology } from './projects/EngineeringMethodology';
import { CompetencyMatrix } from './projects/CompetencyMatrix';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden">
      {/* Neural Background */}
      <NeuralBackground />

      {/* Floating back button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link 
          to="/"
          className="group flex items-center gap-3 px-5 py-3 rounded-full bg-[#121212]/80 backdrop-blur-xl border border-white/[0.08] hover:border-[#0066FF]/40 transition-all shadow-2xl"
        >
          <ArrowLeft size={16} className="text-[#9CA3AF] group-hover:text-[#0066FF] group-hover:-translate-x-1 transition-all" />
          <span className="text-sm text-[#9CA3AF] group-hover:text-white transition-colors">Back to Home</span>
        </Link>
      </motion.div>

      {/* HUD Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-30">
        <div className="absolute top-10 right-10 font-mono text-[9px] text-white/40 tracking-[0.5em] uppercase text-right">
          Protocol: ENGINEERING_PORTFOLIO<br/>
          Status: PRODUCTION_READY
        </div>
        <div className="absolute bottom-10 left-10 font-mono text-[9px] text-white/40 tracking-[0.5em] uppercase">
          Systems: ACTIVE<br/>
          Mode: PUBLIC_VIEW
        </div>
        {/* Vertical accent */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2 flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#0066FF]/50 to-transparent" />
          <div className="font-mono text-[8px] text-[#0066FF]/50 [writing-mode:vertical-rl] tracking-[0.8em] uppercase">
            ENGINEERING_LAB
          </div>
          <div className="w-px h-20 bg-gradient-to-t from-transparent via-[#0066FF]/50 to-transparent" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <ProjectsHero />

        {/* Flagship Projects Grid */}
        <FlagshipProjectsGrid />

        {/* Engineering Methodology */}
        <EngineeringMethodology />

        {/* Competency Matrix */}
        <CompetencyMatrix />

        {/* Footer CTA */}
        <section className="py-24 px-6 lg:px-20 border-t border-white/[0.05]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="mx-auto text-[#0066FF] mb-6" size={40} />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to build something<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#A855F7]">
                  production-ready?
                </span>
              </h2>
              <p className="text-[#6B7280] text-lg mb-10 max-w-xl mx-auto">
                Whether you need an AI system, cloud architecture, or full-stack application—I design and deliver systems that scale.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:sagarsahore.work@gmail.com">
                  <button className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#0066FF] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#0052CC] hover:shadow-2xl hover:shadow-[#0066FF]/25 hover:-translate-y-1 transition-all">
                    <Mail size={18} />
                    Get in Touch
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </a>
                <Link to="/research">
                  <button className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.08] text-white font-bold text-sm uppercase tracking-widest hover:bg-white/[0.08] hover:border-[#0066FF]/30 transition-all">
                    View Research
                    <ArrowUpRight size={16} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom Accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent" />
      </div>
    </div>
  );
};
