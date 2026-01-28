import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, FileText, Layers, Code2, FlaskConical, Rocket,
  ArrowRight, CheckCircle2, Wrench
} from 'lucide-react';
import { methodologySteps } from '../../data/projects';

const stepIcons = [Target, FileText, Layers, Code2, FlaskConical, Rocket];

export const EngineeringMethodology: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 border-t border-white/[0.05] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0066FF]/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#0066FF] text-xs font-mono tracking-widest uppercase mb-2 block">Signature Differentiator</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            My Engineering & Research Methodology
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            A systematic approach to building production-ready systems, from problem framing to deployment.
          </p>
        </motion.div>

        {/* Pipeline Flow */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {methodologySteps.map((step, idx) => {
              const IconComponent = stepIcons[idx];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="relative p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-[#0066FF]/40 transition-all h-full">
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#0066FF] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#0066FF]/30">
                      {step.step}
                    </div>

                    {/* Arrow connector (visible on lg) */}
                    {idx < 5 && (
                      <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                        <ArrowRight size={14} className="text-[#0066FF]" />
                      </div>
                    )}

                    {/* Icon */}
                    <div className="p-3 rounded-xl bg-[#0066FF]/10 text-[#0066FF] w-fit mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent size={20} />
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-bold mb-2 group-hover:text-[#0066FF] transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Tools */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-[9px] text-[#6B7280] uppercase tracking-wider">
                        <Wrench size={10} />
                        Tools
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {step.tools.map((tool) => (
                          <span key={tool} className="text-[8px] px-1.5 py-0.5 rounded bg-white/[0.03] text-[#9CA3AF] border border-white/[0.05]">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Output */}
                    <div className="mt-4 pt-4 border-t border-white/[0.05]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={10} className="text-[#10B981]" />
                        <span className="text-[9px] text-[#10B981] font-medium">{step.output}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.05]">
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-sm text-[#9CA3AF]">
              This is <span className="text-white font-medium">senior-level thinking</span> in action.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
