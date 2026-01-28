import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Copy, Check, Download, ExternalLink, ChevronDown } from 'lucide-react';
import { publications, Publication } from '../../data/research';

export const PublicationShowcase: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCopyCitation = (pub: Publication) => {
    // Generate BibTeX style citation
    const citation = `@${pub.type}{${pub.id},
  title={${pub.title}},
  author={${pub.authors.join(' and ')}},
  journal={${pub.venue}},
  year={${pub.year}}
}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <section className="py-24 px-6 lg:px-20 bg-[#050505]" id="publications">
      <div className="max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="text-[#0066FF] font-semibold text-xs tracking-[0.2em] uppercase mb-3 block">Publications</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Selected Works</h2>
            <p className="text-[#9CA3AF] text-sm">A detailed log of academic contributions.</p>
          </div>
          <div className="hidden md:block text-right">
             <span className="text-5xl font-bold text-white/10">{publications.length}</span>
             <span className="block text-[10px] uppercase tracking-[0.2em] text-[#6B7280] mt-1">Total Papers</span>
          </div>
        </motion.div>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-[#0A0A0A] hover:bg-[#0A0A0A]/80 border border-white/[0.08] hover:border-[#0066FF]/30 rounded-2xl overflow-hidden transition-all"
            >
              {/* Main Card Content */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Year - Sidebar style */}
                <div className="md:w-24 shrink-0 flex flex-col items-start border-b md:border-b-0 md:border-r border-white/[0.08] pb-4 md:pb-0 md:pr-8">
                  <span className={`text-2xl font-bold ${pub.year >= currentYear ? 'text-[#0066FF]' : 'text-[#6B7280]'}`}>
                    {pub.year}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#6B7280] mt-1 font-medium">{pub.type}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 group-hover:text-[#0066FF] transition-colors">
                    {pub.title}
                  </h3>
                  <div className="text-[#9CA3AF] mb-4 text-sm">
                    {pub.authors.map((author, i) => (
                      <span key={i} className={author.includes('Sagar') ? 'text-white font-medium' : ''}>
                        {author}{i < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B7280] mb-6">
                    <span className="font-medium text-[#9CA3AF]">{pub.venue}</span>
                    <span className="hidden md:inline w-1 h-1 rounded-full bg-[#374151]" />
                    {pub.stats?.citations && (
                      <span className="flex items-center gap-1">
                        {pub.stats.citations} Citations
                      </span>
                    )}
                    {pub.stats?.impactFactor && (
                       <>
                        <span className="hidden md:inline w-1 h-1 rounded-full bg-[#374151]" />
                        <span className="flex items-center gap-1 text-[#0066FF]">
                            IF: {pub.stats.impactFactor}
                        </span>
                       </>
                    )}
                  </div>

                  {/* Actions & Abstract Toggle */}
                  <div className="flex flex-wrap items-center gap-3">
                     {pub.links.pdf && (
                      <a 
                        href={pub.links.pdf}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-[#0066FF]/10 border border-white/[0.08] hover:border-[#0066FF]/30 text-white text-sm font-medium transition-all"
                      >
                        <FileText size={14} /> PDF
                      </a>
                     )}
                     {pub.links.code && (
                      <a 
                        href={pub.links.code}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-[#0066FF]/10 border border-white/[0.08] hover:border-[#0066FF]/30 text-white text-sm font-medium transition-all"
                      >
                        <ExternalLink size={14} /> Code
                      </a>
                     )}
                     
                     <button
                        onClick={() => handleCopyCitation(pub)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-white/[0.08] hover:border-[#0066FF]/30 text-[#9CA3AF] hover:text-white text-sm font-medium transition-all"
                     >
                        {copiedId === pub.id ? <Check size={14} className="text-[#4ADE80]" /> : <Copy size={14} />}
                        {copiedId === pub.id ? 'Copied!' : 'Cite'}
                     </button>
                     
                     <div className="grow" />

                     <button
                       onClick={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
                       className="flex items-center gap-2 text-sm text-[#6B7280] hover:text-white transition-colors"
                     >
                       Abstract <ChevronDown size={14} className={`transform transition-transform ${expandedId === pub.id ? 'rotate-180' : ''}`} />
                     </button>
                  </div>
                </div>
              </div>

              {/* Expansion - Abstract */}
              <AnimatePresence>
                {expandedId === pub.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-[#050505]"
                  >
                    <div className="p-8 md:pl-40 pt-0 text-[#9CA3AF] leading-relaxed text-sm md:text-base border-t border-white/[0.08] ml-6 md:ml-0 mt-2">
                       <p>{pub.abstract}</p>
                       <div className="flex gap-2 mt-4">
                          {pub.tags.map(tag => (
                            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/[0.03] text-[#6B7280] border border-white/[0.05]">
                              #{tag}
                            </span>
                          ))}
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
