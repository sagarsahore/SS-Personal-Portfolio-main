import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../../data/research';

export const TechStack: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#050505] relative z-10 border-b border-white/[0.08]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[#0066FF] font-semibold text-xs tracking-[0.2em] uppercase mb-3 block">Infrastructure</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Technical Stack</h2>
          <p className="text-[#9CA3AF] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Enterprise-grade tools and frameworks for reproducible, scalable research.
          </p>
        </motion.div>

        {/* Stack Layers */}
        <div className="space-y-6">
          {techStack.map((layer, layerIndex) => (
            <motion.div
              key={layer.layer}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: layerIndex * 0.15 }}
              className="group"
            >
              {/* Layer Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                <span className="text-xs font-semibold text-[#0066FF] uppercase tracking-[0.2em]">
                  {layer.layer}
                </span>
                <div className="flex-1 h-[1px] bg-white/[0.05]" />
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-6">
                {layer.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: layerIndex * 0.1 + itemIndex * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#0A0A0A] border border-white/[0.08] hover:border-[#0066FF]/30 hover:bg-[#0A0A0A]/80 transition-all group/item"
                  >
                    {item.icon && (
                      <div className="p-2.5 rounded-lg bg-white/[0.03] text-[#9CA3AF] group-hover/item:text-[#0066FF] transition-colors border border-white/[0.05]">
                        <item.icon size={18} />
                      </div>
                    )}
                    <span className="text-white font-medium text-sm">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
