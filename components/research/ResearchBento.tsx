import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { researchDomains } from '../../data/research';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

export const ResearchDomains: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 lg:px-20 bg-[#050505] relative z-10 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 md:flex justify-between items-end"
        >
          <div>
              <span className="text-[#0066FF] font-semibold text-xs tracking-[0.2em] uppercase mb-3 block">Core Pillars</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white">Research Focus</h2>
          </div>
          <p className="text-[#9CA3AF] mt-4 md:mt-0 max-w-sm text-sm leading-relaxed">
            Deep technical expertise across four interconnected domains, driving innovation from theory to application.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchDomains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setActiveDomain(domain.id)}
              onHoverEnd={() => setActiveDomain(null)}
              className={`
                group relative p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] 
                hover:border-[#0066FF]/30 hover:bg-[#0A0A0A]/80 transition-all duration-500
                flex flex-col h-full
              `}
            >
               {/* Header Icon + Title */}
               <div className="flex items-start justify-between mb-8">
                  <div className={`p-3 rounded-xl bg-white/[0.03] text-[#9CA3AF] group-hover:bg-[#0066FF]/10 group-hover:text-[#0066FF] transition-colors border border-white/[0.05]`}>
                      <domain.icon size={24} />
                  </div>
                  <ArrowUpRight size={18} className="text-[#374151] group-hover:text-[#0066FF] transition-colors" />
               </div>

               <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#0066FF] transition-colors">
                   {domain.title}
               </h3>
               <p className="text-[#9CA3AF] text-sm leading-relaxed mb-8 flex-grow">
                   {domain.description}
               </p>

               {/* Metrics Grid */}
               <div className="grid grid-cols-2 gap-4 mb-8">
                   {domain.metrics.map((m, i) => (
                       <div key={i} className="bg-[#050505] p-4 rounded-xl border border-white/[0.05]">
                           <div className="text-[10px] text-[#6B7280] uppercase tracking-wider mb-1 font-medium">{m.label}</div>
                           <div className="text-white font-semibold">{m.value}</div>
                       </div>
                   ))}
               </div>

               {/* Hover Reveal Details */}
               <div className="border-t border-white/[0.08] pt-6">
                   <div className="grid grid-cols-2 gap-8 text-sm">
                       <div>
                           <span className="block text-[#6B7280] mb-3 text-xs font-medium uppercase tracking-wider">Key Problems</span>
                           <ul className="space-y-2">
                               {domain.focus.map(f => (
                                   <li key={f} className="text-[#D1D5DB] flex items-center gap-2">
                                       <span className="w-1.5 h-1.5 bg-[#0066FF] rounded-full" /> {f}
                                   </li>
                               ))}
                           </ul>
                       </div>
                       <div>
                           <span className="block text-[#6B7280] mb-3 text-xs font-medium uppercase tracking-wider">Methods</span>
                           <ul className="space-y-2">
                               {domain.approaches.map(a => (
                                   <li key={a} className="text-[#D1D5DB] flex items-center gap-2">
                                       <span className="w-1.5 h-1.5 bg-[#00A3FF] rounded-full" /> {a}
                                   </li>
                               ))}
                           </ul>
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
