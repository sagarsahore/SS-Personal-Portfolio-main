import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { researchPipeline } from '../../data/research';
import { ChevronRight } from 'lucide-react';

export const ResearchPipeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 lg:px-20 bg-[#050505] relative z-10 border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#0066FF] font-semibold text-xs tracking-[0.2em] uppercase mb-3 block">Methodology</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Research Pipeline</h2>
          <p className="text-[#9CA3AF] mt-4 max-w-xl text-sm leading-relaxed">
            A systematic, reproducible approach from problem formulation to clinical deployment.
          </p>
        </motion.div>

        {/* Pipeline Flow - Horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative z-10">
            {researchPipeline.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setActiveStep(step.id)}
                onHoverEnd={() => setActiveStep(null)}
                className={`
                  group relative p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.08]
                  hover:border-[#0066FF]/30 hover:bg-[#0A0A0A]/80 transition-all duration-500
                  cursor-pointer
                `}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#050505] border border-white/[0.08] flex items-center justify-center text-xs font-mono text-[#6B7280] group-hover:text-[#0066FF] group-hover:border-[#0066FF]/50 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="p-3 rounded-xl bg-white/[0.03] text-[#9CA3AF] group-hover:text-[#0066FF] group-hover:bg-[#0066FF]/10 transition-colors w-fit mb-4 border border-white/[0.05]">
                  <step.icon size={20} />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#0066FF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Tools on hover */}
                <div className="flex flex-wrap gap-2">
                  {step.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] px-2 py-1 rounded-md bg-white/[0.03] text-[#6B7280] font-medium border border-white/[0.05]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Arrow connector (desktop only) */}
                {index < researchPipeline.length - 1 && (
                  <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20">
                    <ChevronRight size={16} className="text-[#374151] group-hover:text-[#0066FF] transition-colors" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
