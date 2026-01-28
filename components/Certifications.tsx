import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Certifications3D } from './Certifications3D';
import { Award, ShieldCheck, ChevronRight, ExternalLink, Library, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
    category: 'Salesforce' | 'AWS' | 'AI' | 'Google' | 'Stanford';
    status: 'Verified' | 'Planned';
    credentialId?: string;
    description: string;
    verifyLink?: string;
}

const certs: Certification[] = [
    {
        id: 'sf-1',
        title: 'Salesforce Platform Foundations',
        issuer: 'Salesforce',
        date: '2024',
        category: 'Salesforce',
        status: 'Verified',
        credentialId: 'SPF-2024',
        description: 'Fundamental knowledge of Salesforce ecosystem and best practices. Understanding of core platform capabilities and architecture.',
        verifyLink: 'https://www.salesforce.com/trailblazer/sagarsahore'
    },
    {
        id: 'sf-2',
        title: 'Salesforce Platform Administrator',
        issuer: 'Salesforce',
        date: '2024',
        category: 'Salesforce',
        status: 'Verified',
        credentialId: 'SPA-2024',
        description: 'Certified Salesforce Admin with expertise in CRM management, user setup, security, and data management.',
        verifyLink: 'https://www.salesforce.com/trailblazer/sagarsahore'
    },
    {
        id: 'sf-3',
        title: 'Salesforce Platform Developer',
        issuer: 'Salesforce',
        date: '2024',
        category: 'Salesforce',
        status: 'Verified',
        credentialId: 'SPD-2024',
        description: 'Skilled in Apex, Lightning Components (LWC), and Salesforce Development. Building custom solutions on the platform.',
        verifyLink: 'https://www.salesforce.com/trailblazer/sagarsahore'
    },
    {
        id: 'sf-4',
        title: 'Salesforce Agentforce Specialist',
        issuer: 'Salesforce',
        date: '2024',
        category: 'Salesforce',
        status: 'Verified',
        credentialId: 'SAF-2024',
        description: 'Expert in Agentforce AI agent development and automation. Building intelligent chatbots and AI-powered workflows.',
        verifyLink: 'https://www.salesforce.com/trailblazer/sagarsahore'
    },
    {
        id: 'aws-1',
        title: 'AWS Cloud Foundation',
        issuer: 'Amazon Web Services',
        date: '2024',
        category: 'AWS',
        status: 'Verified',
        credentialId: 'AWS-CF-2024',
        description: 'Foundational knowledge of AWS cloud services and architecture. Understanding of core AWS services like EC2, S3, and VPC.',
        verifyLink: '#'
    },
    {
        id: 'aws-2',
        title: 'AWS GenAI Foundation',
        issuer: 'Amazon Web Services',
        date: '2024',
        category: 'AWS',
        status: 'Verified',
        credentialId: 'AWS-GAI-2024',
        description: 'Understanding of generative AI and machine learning on AWS. Knowledge of Amazon Bedrock and AI/ML services.',
        verifyLink: '#'
    },
    {
        id: 'aws-3',
        title: 'AWS Machine Learning Foundation',
        issuer: 'Amazon Web Services',
        date: '2024',
        category: 'AWS',
        status: 'Verified',
        credentialId: 'AWS-ML-2024',
        description: 'Core ML concepts and AWS machine learning services expertise. Understanding of SageMaker and ML pipelines.',
        verifyLink: '#'
    }
];


const categoryStyles: Record<string, { bg: string, border: string, text: string, accent: string, glow: string, hoverBg: string }> = {
    Salesforce: { bg: 'bg-blue-600/5', border: 'border-blue-500/20', text: 'text-blue-400', accent: 'bg-blue-600', glow: 'shadow-blue-500/10', hoverBg: 'hover:bg-blue-600/15' },
    AWS: { bg: 'bg-orange-600/5', border: 'border-orange-500/20', text: 'text-orange-400', accent: 'bg-orange-600', glow: 'shadow-orange-500/10', hoverBg: 'hover:bg-orange-600/15' },
    AI: { bg: 'bg-red-600/5', border: 'border-red-500/20', text: 'text-red-400', accent: 'bg-red-600', glow: 'shadow-red-500/10', hoverBg: 'hover:bg-red-600/15' },
    Google: { bg: 'bg-sky-600/5', border: 'border-sky-500/20', text: 'text-sky-400', accent: 'bg-sky-600', glow: 'shadow-sky-500/10', hoverBg: 'hover:bg-sky-600/15' },
    Stanford: { bg: 'bg-rose-900/5', border: 'border-rose-800/20', text: 'text-rose-400', accent: 'bg-rose-800', glow: 'shadow-rose-900/10', hoverBg: 'hover:bg-rose-900/15' },
};

const CertCard: React.FC<{ cert: Certification, isActive: boolean, onClick: () => void }> = ({ cert, isActive, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const styles = categoryStyles[cert.category];
    const showDetails = isActive || isHovered;

    return (
        <motion.button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`w-full text-left p-6 rounded-[2rem] border transition-all duration-500 group relative overflow-hidden backdrop-blur-xl shadow-2xl ${
                isActive 
                ? `${styles.bg} ${styles.border} ${styles.glow} ring-1 ring-white/10` 
                : `bg-white/[0.02] border-white/5 ${styles.hoverBg} hover:border-white/10`
            }`}
        >
            {/* Glossy Reflection Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/40 to-transparent skew-x-[-20deg] -translate-x-full group-hover:translate-x-full" />
            
            {/* Active Side Indicator */}
            <AnimatePresence>
                {isActive && (
                    <motion.div 
                        layoutId="activeSideBar"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        className={`absolute left-0 top-0 bottom-0 w-1.5 ${styles.accent} shadow-[0_0_15px_rgba(255,255,255,0.2)]`}
                    />
                )}
            </AnimatePresence>

            <div className="relative z-10">
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <div className={`text-[10px] font-mono mb-3 flex items-center gap-2 tracking-[0.2em] transition-colors ${isActive ? styles.text : 'text-zinc-500'}`}>
                            <span className={`px-2 py-0.5 rounded-full ${isActive ? 'bg-white/10' : 'bg-white/5'}`}>{cert.category.toUpperCase()}</span>
                            <span>{cert.date}</span>
                        </div>
                        <h4 className={`text-[18px] font-bold tracking-tight leading-tight transition-colors ${isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                            {cert.title}
                        </h4>
                    </div>
                    <div className={`ml-4 p-2.5 rounded-2xl transition-all duration-300 ${isActive ? 'bg-white/10 text-white shadow-inner' : 'bg-white/5 text-zinc-600 group-hover:text-zinc-300'}`}>
                        <ChevronRight size={18} className={`${isActive ? 'rotate-90' : 'rotate-0'} transition-transform duration-500`} />
                    </div>
                </div>

                {/* Expandable Meta Info - Reveals on Hover OR Active */}
                <motion.div 
                    initial={false}
                    animate={{ height: showDetails ? 'auto' : 0, opacity: showDetails ? 1 : 0, marginTop: showDetails ? 16 : 0 }}
                    className="overflow-hidden border-t border-white/5"
                >
                    <div className="pt-4 flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">Credential ID</span>
                            <span className={`text-[12px] font-mono ${styles.text} filter brightness-110`}>{cert.credentialId || 'PENDING_REGISTRY'}</span>
                        </div>
                        {cert.verifyLink && (
                            <motion.a 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={cert.verifyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:border-white/20 ${styles.text}`}
                            >
                                Verify Link <ExternalLink size={12} />
                            </motion.a>
                        )}
                    </div>
                </motion.div>
            </div>
            
            {/* Accent Glow Circle */}
            <div className={`absolute -right-10 -top-10 w-32 h-32 ${styles.accent} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity blur-[60px] rounded-full pointer-events-none`} />
        </motion.button>
    );
};

export const Certifications: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeCert = certs[activeIndex];

    // Scroll active card into view on mobile when selection changes
    const scrollToViewer = () => {
        if (window.innerWidth < 1024) {
             const viewer = document.getElementById('cert-viewer');
             if (viewer) {
                 viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
             }
        }
    };

    const handleCertClick = (index: number) => {
        setActiveIndex(index);
        scrollToViewer();
    };

    return (
        <section className="py-24 relative">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-mono tracking-widest uppercase mb-6">
                        <Award size={10} />
                        Professional Credentials
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
                        Verified <span className="text-red-600">Mastery.</span>
                    </h2>
                    <p className="text-lg text-zinc-400 font-light leading-relaxed">
                        A curated archive of immutable achievements across cloud architecture, AI engineering, and enterprise systems.
                    </p>
                </div>
                <div className="hidden lg:flex items-center gap-4 px-8 py-5 rounded-3xl bg-white/[0.03] border border-white/5 shadow-2xl backdrop-blur-md">
                    <div className="text-right">
                        <div className="text-2xl font-bold text-white leading-none">{certs.length}</div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1.5 font-bold">Registry Entries</div>
                    </div>
                    <div className="w-px h-10 bg-white/10 mx-2" />
                    <Library className="text-red-600" size={24} />
                </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* RIGHT VIEWER (Mobile: Order 1, Desktop: Order 2) */}
                <div id="cert-viewer" className="order-1 lg:order-2 lg:col-span-7 h-[500px] lg:h-[780px] flex flex-col transition-all duration-500">
                    <GlassCard className="!p-0 flex-1 border-white/[0.05] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] rounded-[3rem] overflow-hidden">
                        <div className="flex flex-col h-full w-full">
                            <div className="flex-1 relative bg-black/50 min-h-[350px] lg:min-h-[400px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCert.id}
                                        initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
                                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute inset-0"
                                    >
                                        <Certifications3D activeCert={activeCert} />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Card Detail Section */}
                            <div className="p-8 lg:p-12 bg-[#080808] border-t border-white/5 relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeCert.id}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        className="space-y-8 relative z-10"
                                    >
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
                                            <div className="space-y-2">
                                                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Global ID</div>
                                                <div className={`text-sm font-mono tracking-tight font-bold ${categoryStyles[activeCert.category].text}`}>{activeCert.credentialId || 'UNREGISTERED'}</div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Dossier Status</div>
                                                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-emerald-500">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> 
                                                    Live & Verified
                                                </div>
                                            </div>
                                            <div className="col-span-2 md:col-span-1 flex items-end">
                                                {activeCert.verifyLink && (
                                                    <a href={activeCert.verifyLink} className="group flex items-center gap-2 text-[11px] font-bold text-zinc-500 hover:text-white transition-all uppercase tracking-[0.25em]">
                                                        Certificate Source <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="pt-8 border-t border-white/5">
                                            <h5 className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">Core Competency Analysis</h5>
                                            <p className="text-base lg:text-lg text-zinc-400 leading-relaxed font-light">
                                                {activeCert.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                                
                                {/* Background Ambient Glow */}
                                <div className={`absolute -right-32 -bottom-32 w-80 h-80 ${categoryStyles[activeCert.category].accent} opacity-[0.05] blur-[150px] rounded-full pointer-events-none`} />
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* LEFT INDEX (Mobile: Order 2, Desktop: Order 1) */}
                <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-6 h-[500px] lg:h-[780px]">
                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em] px-4 flex justify-between items-center">
                        <span>Directory Index // Academic </span>
                        <span className="flex items-center gap-1.5">
                            <div className="w-1 h-1 rounded-full bg-red-500 animate-ping" />
                            Secure Access
                        </span>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto pr-3 space-y-4 custom-scrollbar">
                        {certs.map((cert, i) => (
                            <CertCard 
                                key={cert.id} 
                                cert={cert} 
                                isActive={activeIndex === i} 
                                onClick={() => handleCertClick(i)} 
                            />
                        ))}
                    </div>

                    <div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 flex items-center gap-5 backdrop-blur-lg">
                        <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 shadow-inner">
                             <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h5 className="text-[12px] font-bold text-white uppercase tracking-wider mb-1">Encrypted Chain</h5>
                            <p className="text-[10px] text-zinc-500 leading-relaxed uppercase tracking-widest font-medium">
                                Cross-referenced via public key infrastructure for maximum trust.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 20px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(220, 38, 38, 0.2);
                }
            `}</style>
        </section>
    );
};