import React from 'react';
import { 
    Briefcase, Building2, Clock, CheckCircle2, Code, Database, Brain,
    Cloud, Users, Microscope, BarChart3
} from 'lucide-react';
import { motion } from 'framer-motion';

// ========================================
// EXPERIENCE DATA
// ========================================

const experiences = [
    {
        role: 'Computer Vision Researcher',
        company: 'University of Auckland',
        location: 'Auckland, NZ',
        period: 'Nov 2025 — Apr 2026',
        duration: '6 months',
        current: true,
        description: [
            'Developing deep learning models for early glaucoma detection achieving 96% sensitivity',
            'Implementing explainable AI techniques (Grad-CAM, SHAP) for clinical interpretability',
            'Validating models across 4+ public datasets for robust generalization'
        ],
        skills: ['PyTorch', 'Medical AI', 'Computer Vision']
    },
    {
        role: 'CS Analyst',
        company: 'DHL',
        location: 'Auckland, NZ',
        period: 'Apr 2025 — Present',
        duration: '9+ months',
        current: true,
        description: [
            'Analyzing logistics data systems and identifying optimization opportunities',
            'Developing automated reporting dashboards for operational insights',
            'Supporting IT infrastructure and business process improvements'
        ],
        skills: ['SQL', 'Data Analysis', 'Reporting']
    },
    {
        role: 'Sales Development Representative',
        company: 'Generate KiwiSaver',
        location: 'Auckland, NZ',
        period: 'Jun 2023 — Apr 2025',
        duration: '1 year 10 months',
        current: false,
        description: [
            'Led Salesforce training for 30+ team members, reducing onboarding time by 40%',
            'Drove 60% increase in CRM adoption among non-technical staff',
            'Conducted end-user testing during platform updates, improving team efficiency by 20%'
        ],
        skills: ['Salesforce', 'Training', 'CRM']
    },
    {
        role: 'Full Stack Developer Intern',
        company: 'Manukau Institute of Technology',
        location: 'Auckland, NZ',
        period: 'Jul 2021 — Jan 2022',
        duration: '7 months',
        current: false,
        description: [
            'Built React.js e-commerce platform with Firebase authentication',
            'Implemented dynamic product dashboards with filtering/sorting',
            'Collaborated directly with small business owner on requirements'
        ],
        skills: ['React.js', 'Firebase', 'Node.js']
    }
];

const coreSkills = [
    { name: 'Python / PyTorch', category: 'AI/ML', icon: Brain },
    { name: 'React / TypeScript', category: 'Frontend', icon: Code },
    { name: 'SQL / Data Analysis', category: 'Data', icon: Database },
    { name: 'Salesforce', category: 'Enterprise', icon: Cloud },
    { name: 'Computer Vision', category: 'Research', icon: Microscope },
    { name: 'Team Leadership', category: 'Soft Skills', icon: Users },
];

// ========================================
// MAIN COMPONENT
// ========================================

export const Experience: React.FC = () => {
    return (
        <div className="py-20">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20">
                        <Briefcase size={20} />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Professional Experience</h2>
                        <p className="text-white/40 mt-1">4+ years across research, engineering & enterprise</p>
                    </div>
                </div>
            </motion.div>

            {/* Skills Summary Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
            >
                <div className="flex items-center gap-2 mb-4">
                    <BarChart3 size={14} className="text-[#0066FF]" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Core Competencies</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {coreSkills.map((skill, idx) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#0066FF]/30 transition-colors"
                        >
                            <skill.icon size={16} className="text-[#0066FF] flex-shrink-0" />
                            <div className="min-w-0">
                                <div className="text-sm font-medium text-white truncate">{skill.name}</div>
                                <div className="text-[10px] text-white/40">{skill.category}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Experience Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#0066FF]/30 hover:bg-white/[0.03] transition-all duration-300"
                    >
                        {/* Header Row */}
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
                                <div className="flex flex-wrap items-center gap-2 text-sm text-white/50 mt-1">
                                    <span className="flex items-center gap-1">
                                        <Building2 size={13} />
                                        {exp.company}
                                    </span>
                                    <span className="text-white/20">•</span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={13} />
                                        {exp.duration}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Status */}
                            {exp.current && (
                                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                                    <span className="text-[10px] font-semibold text-[#10B981] uppercase">Current</span>
                                </span>
                            )}
                        </div>
                        
                        {/* Date Range */}
                        <div className="text-xs text-white/30 font-mono mb-4">{exp.period}</div>
                        
                        {/* Description Bullets */}
                        <ul className="space-y-2 mb-4">
                            {exp.description.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                                    <CheckCircle2 size={14} className="text-[#0066FF] mt-0.5 flex-shrink-0" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                                <span 
                                    key={skill}
                                    className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Summary Stats */}
            <motion.div 
                className="mt-10 grid grid-cols-3 md:grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                {[
                    { value: '4+', label: 'Years Experience', color: '#0066FF' },
                    { value: '2', label: 'Current Roles', color: '#10B981' },
                    { value: '6+', label: 'Tech Skills', color: '#A855F7' }
                ].map((stat) => (
                    <div 
                        key={stat.label}
                        className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center"
                    >
                        <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};