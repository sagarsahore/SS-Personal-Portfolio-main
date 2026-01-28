import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Sparkles, ChevronRight, Clock, Building2, Zap } from 'lucide-react';
import { Education as EducationType } from '../types';

const educationData: EducationType[] = [
    {
        id: '1',
        degree: 'PhD Candidate in Computer Science',
        institution: 'University of Auckland',
        year: '2026 — Present',
        description: 'Research focus on Computational Ophthalmology and Medical AI. Developing explainable deep learning models for early disease detection using multimodal data fusion. Collaborating with Auckland Eye to validate clinical AI diagnostic systems.',
        honors: ['Full Scholarship', 'Research Fellowship', 'Faculty of Science']
    },
    {
        id: '2',
        degree: 'Master of Software Engineering',
        institution: 'Yoobee College',
        year: '2025 — 2026',
        description: 'Building scalable applications with object-oriented programming, data structures, and algorithms. Delivering real-world software in Agile teams. Capstone project: Deep learning system for automated glaucoma detection from fundus images.',
        honors: ['Distinction Average', 'Best Capstone Project', 'Industry Partnership']
    },
    {
        id: '3',
        degree: 'Bachelor of Digital Technologies',
        institution: 'Manukau Institute of Technology',
        year: '2019 — 2021',
        description: 'Full-stack web development with modern JavaScript frameworks. Hands-on experience with databases, RESTful APIs, and cloud platforms. Graduated job-ready with strong UX/UI design sense and version control expertise.',
        honors: ['First Class Honours', 'Dean\'s List', 'Top Graduate Award']
    }
];

export const Education: React.FC = () => {
  const [activeTab, setActiveTab] = useState(educationData[0].id);
  const activeEdu = educationData.find(e => e.id === activeTab) || educationData[0];

  const isPhD = activeEdu.id === '1';
  const isCurrent = activeEdu.year.includes('Present') || activeEdu.id === '2';

  return (
    <section className="py-20 relative">
       {/* Section Header */}
       <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12"
       >
           <div className="flex items-center gap-3 mb-4">
               <div className="p-2.5 rounded-xl bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/20">
                   <GraduationCap size={20} />
               </div>
               <div>
                   <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Academic Background</h2>
                   <p className="text-white/40 mt-1">From undergrad to PhD candidacy</p>
               </div>
           </div>
       </motion.div>

       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Timeline Navigation */}
          <div className="lg:col-span-4 space-y-2">
             <div className="space-y-3 relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-[18px] top-6 bottom-6 w-px bg-gradient-to-b from-[#A855F7]/50 via-[#0066FF]/30 to-transparent z-0 hidden lg:block" />

                {educationData.map((item, index) => {
                   const isActive = activeTab === item.id;
                   const isPhdItem = item.id === '1';
                   const accentColor = isPhdItem ? '#A855F7' : '#0066FF';
                   
                   return (
                     <motion.button
                       key={item.id}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: index * 0.1 }}
                       onClick={() => setActiveTab(item.id)}
                       className={`relative z-10 w-full text-left pl-12 pr-6 py-5 rounded-2xl border transition-all duration-300 group ${
                          isActive
                          ? 'bg-white/[0.03] border-white/[0.08]'
                          : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                       }`}
                     >
                        {/* Timeline Dot */}
                        <div 
                          className={`absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 z-20 ${
                            isActive 
                              ? 'border-transparent scale-110' 
                              : 'bg-[#0A0A0A] border-white/20 group-hover:border-white/40'
                          }`}
                          style={isActive ? { 
                            backgroundColor: accentColor,
                            boxShadow: `0 0 15px ${accentColor}60`
                          } : {}}
                        />

                        <div className="flex flex-col gap-1">
                           {/* Year Badge */}
                           <span 
                             className={`text-xs font-mono transition-colors ${
                               isActive ? '' : 'text-white/40 group-hover:text-white/60'
                             }`}
                             style={isActive ? { color: accentColor } : {}}
                           >
                             {item.year}
                           </span>
                           
                           {/* Degree */}
                           <span className={`font-semibold text-base leading-tight transition-colors ${
                              isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                           }`}>
                              {item.degree.replace('PhD Candidate in ', '').replace(' of ', ' ')}
                           </span>
                           
                           {/* Institution */}
                           <span className="text-sm text-white/40 flex items-center gap-1.5 mt-1">
                              <Building2 size={12} />
                              {item.institution}
                           </span>
                        </div>

                        {/* Active Indicator */}
                        <ChevronRight 
                          size={16} 
                          className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                            isActive 
                              ? 'opacity-100 translate-x-0' 
                              : 'opacity-0 -translate-x-2'
                          }`}
                          style={isActive ? { color: accentColor } : {}}
                        />
                     </motion.button>
                   );
                })}
             </div>
             
             {/* Quick Stats Panel */}
             <motion.div 
                className="mt-6 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
             >
                <div className="grid grid-cols-3 gap-4 text-center">
                   <div>
                      <div className="text-xl font-bold text-[#A855F7]">3</div>
                      <div className="text-[9px] text-white/40 uppercase tracking-wider">Degrees</div>
                   </div>
                   <div>
                      <div className="text-xl font-bold text-[#0066FF]">7+</div>
                      <div className="text-[9px] text-white/40 uppercase tracking-wider">Years Study</div>
                   </div>
                   <div>
                      <div className="text-xl font-bold text-[#10B981]">1st</div>
                      <div className="text-[9px] text-white/40 uppercase tracking-wider">Honours</div>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Right Column: Active Card Display */}
          <div className="lg:col-span-8">
             <AnimatePresence mode="wait">
                <motion.div
                    key={activeEdu.id}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className={`rounded-3xl overflow-hidden border bg-white/[0.02] ${
                      isPhD 
                        ? 'border-[#A855F7]/20' 
                        : 'border-white/[0.06]'
                    }`}>
                        {/* Header Banner */}
                        <div className={`relative p-8 pb-10 ${
                          isPhD 
                            ? 'bg-gradient-to-br from-[#A855F7]/15 via-transparent to-transparent'
                            : 'bg-gradient-to-br from-[#0066FF]/10 via-transparent to-transparent'
                        }`}>
                            {/* Status Badge */}
                            <div className="absolute top-6 right-6">
                               {isCurrent ? (
                                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30">
                                     <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                                     <span className="text-[10px] font-semibold text-[#10B981] uppercase tracking-wider">Active</span>
                                  </span>
                               ) : (
                                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10">
                                     <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Completed</span>
                                  </span>
                               )}
                            </div>

                            {/* Degree Label */}
                            <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-3 ${
                              isPhD ? 'text-[#A855F7]' : 'text-[#0066FF]'
                            }`}>
                                <GraduationCap size={14} /> 
                                {isPhD ? 'Doctoral Research' : activeEdu.id === '2' ? 'Postgraduate' : 'Undergraduate'}
                            </div>
                            
                            {/* Degree Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                                {activeEdu.degree}
                            </h3>
                            
                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
                               <span className="flex items-center gap-1.5">
                                  <Building2 size={14} />
                                  {activeEdu.institution}
                               </span>
                               <span className="flex items-center gap-1.5">
                                  <Calendar size={14} />
                                  {activeEdu.year}
                               </span>
                               <span className="flex items-center gap-1.5">
                                  <MapPin size={14} />
                                  Auckland, NZ
                               </span>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-8 space-y-6">
                            {/* Description */}
                            <div>
                               <h4 className={`flex items-center gap-2 text-sm font-semibold mb-3 ${
                                 isPhD ? 'text-[#A855F7]' : 'text-[#0066FF]'
                               }`}>
                                   <BookOpen size={16} /> 
                                   {isPhD ? 'Research Focus' : 'Program Overview'}
                               </h4>
                               <p className="text-white/60 leading-relaxed">
                                   {activeEdu.description}
                               </p>
                            </div>

                            {/* Honors Tags */}
                            {activeEdu.honors && activeEdu.honors.length > 0 && (
                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-semibold text-[#F59E0B] mb-4">
                                        <Award size={16} /> Distinctions & Awards
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeEdu.honors.map((honor, idx) => (
                                            <motion.span 
                                                key={idx} 
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] text-sm"
                                            >
                                                <Sparkles size={12} />
                                                {honor}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
             </AnimatePresence>
          </div>
       </div>
    </section>
  );
};