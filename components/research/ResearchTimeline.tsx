import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Briefcase, Award, Rocket, Target } from 'lucide-react';

const timelineEvents = [
  {
    year: '2019',
    title: 'Bachelor\'s in Digital Technologies',
    description: 'Graduated with First Class Honours from MIT NZ, focus on full-stack development.',
    icon: GraduationCap,
    type: 'education'
  },
  {
    year: '2022',
    title: 'Industry Experience',
    description: 'Full-stack development and Salesforce CRM expertise at scale.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2024',
    title: 'First Research Publication',
    description: 'Published work on GenAI integration in enterprise CRM systems.',
    icon: Award,
    type: 'milestone'
  },
  {
    year: '2025',
    title: 'Master\'s in Software Engineering',
    description: 'Specializing in AI/ML with capstone on glaucoma detection.',
    icon: GraduationCap,
    type: 'education'
  },
  {
    year: '2026',
    title: 'PhD Candidate — University of Auckland',
    description: 'Doctoral research in Computational Ophthalmology and Medical AI.',
    icon: Rocket,
    type: 'milestone'
  },
  {
    year: '2030+',
    title: 'Future Vision',
    description: 'Leading research at the intersection of AI and clinical diagnostics.',
    icon: Target,
    type: 'future'
  }
];

export const ResearchTimeline: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-[#050505] relative z-10 border-b border-white/[0.08] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[#0066FF] font-semibold text-xs tracking-[0.2em] uppercase mb-3 block">Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Research Timeline</h2>
          <p className="text-[#9CA3AF] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Key milestones in my academic and professional journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <div className="group p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-[#0066FF]/30 transition-all">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="text-[#0066FF] font-mono font-bold">{event.year}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-medium ${
                        event.type === 'education' ? 'bg-[#0066FF]/10 text-[#0066FF]' :
                        event.type === 'work' ? 'bg-[#4ADE80]/10 text-[#4ADE80]' :
                        event.type === 'milestone' ? 'bg-[#FBBF24]/10 text-[#FBBF24]' :
                        'bg-[#A855F7]/10 text-[#A855F7]'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0066FF] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                      event.type === 'future' 
                        ? 'bg-[#0A0A0A] border-[#A855F7] text-[#A855F7]' 
                        : 'bg-[#0066FF] border-[#0066FF] text-white'
                    }`}
                  >
                    <event.icon size={14} />
                  </motion.div>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
