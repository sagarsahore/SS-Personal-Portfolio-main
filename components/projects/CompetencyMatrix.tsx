import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillMatrix, flagshipProjects } from '../../data/projects';

const levelLabels = ['', 'Learning', 'Intermediate', 'Advanced', 'Research-Grade', 'Production-Scale'];
const levelColors = ['', '#374151', '#6B7280', '#0066FF', '#A855F7', '#10B981'];

export const CompetencyMatrix: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Get highlighted projects based on hovered skill
  const highlightedProjects = hoveredSkill 
    ? skillMatrix.find(s => s.skill === hoveredSkill)?.projects || []
    : [];

  return (
    <section className="py-24 px-6 lg:px-20 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-[#0066FF] text-xs font-mono tracking-widest uppercase mb-2 block">Skills Matrix</span>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Technical Competency</h2>
          <p className="text-[#6B7280] max-w-2xl">
            Interactive heatmap showing skill levels across domains. Hover to see which projects demonstrate each capability.
          </p>
        </motion.div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {skillMatrix.map((skill) => (
              <div 
                key={skill.skill}
                className={`p-4 rounded-xl transition-all cursor-pointer ${
                  hoveredSkill === skill.skill 
                    ? 'bg-[#0066FF]/10 border border-[#0066FF]/30' 
                    : 'bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1]'
                }`}
                onMouseEnter={() => setHoveredSkill(skill.skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-white">{skill.skill}</span>
                  <span 
                    className="text-xs font-mono uppercase tracking-wider"
                    style={{ color: levelColors[skill.level] }}
                  >
                    {levelLabels[skill.level]}
                  </span>
                </div>
                
                {/* Progress bar */}
                <div className="h-2 bg-white/[0.03] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ backgroundColor: levelColors[skill.level] }}
                  />
                </div>

                {/* Project badges */}
                {hoveredSkill === skill.skill && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3 pt-3 border-t border-white/[0.05]"
                  >
                    <div className="text-[9px] text-[#6B7280] uppercase tracking-wider mb-2">Demonstrated in:</div>
                    <div className="flex flex-wrap gap-1">
                      {skill.projects.map((projectId) => {
                        const project = flagshipProjects.find(p => p.id === projectId);
                        return project ? (
                          <span 
                            key={projectId}
                            className="text-[9px] px-2 py-1 rounded bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20"
                          >
                            {project.title}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Right: Level Legend + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Level Legend */}
            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.08]">
              <h3 className="text-lg font-bold text-white mb-4">Proficiency Levels</h3>
              <div className="space-y-3">
                {[
                  { level: 1, label: 'Learning', desc: 'Currently building foundational knowledge' },
                  { level: 2, label: 'Intermediate', desc: 'Can implement with guidance' },
                  { level: 3, label: 'Advanced', desc: 'Independent problem-solving capability' },
                  { level: 4, label: 'Research-Grade', desc: 'Can innovate and publish findings' },
                  { level: 5, label: 'Production-Scale', desc: 'Enterprise-ready implementation' }
                ].map((item) => (
                  <div key={item.level} className="flex items-center gap-4">
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: levelColors[item.level] }}
                    />
                    <div>
                      <span className="text-sm font-medium text-white">{item.label}</span>
                      <p className="text-xs text-[#6B7280]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center">
                <div className="text-3xl font-bold text-[#0066FF]">{flagshipProjects.length}</div>
                <div className="text-xs text-[#6B7280] uppercase tracking-wider">Total Projects</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center">
                <div className="text-3xl font-bold text-[#10B981]">{skillMatrix.length}</div>
                <div className="text-xs text-[#6B7280] uppercase tracking-wider">Skill Domains</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center">
                <div className="text-3xl font-bold text-[#A855F7]">
                  {skillMatrix.filter(s => s.level >= 4).length}
                </div>
                <div className="text-xs text-[#6B7280] uppercase tracking-wider">Research-Grade</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-center">
                <div className="text-3xl font-bold text-[#F59E0B]">
                  {flagshipProjects.filter(p => p.featured).length}
                </div>
                <div className="text-xs text-[#6B7280] uppercase tracking-wider">Flagship</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
