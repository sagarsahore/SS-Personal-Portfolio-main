import React from 'react';
import { GlassCard } from './GlassCard';
import { MagneticButton } from './MagneticButton';
import { Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Newsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription initiated");
  };

  return (
    <section className="relative py-24 flex justify-center px-4">
      {/* Background Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <GlassCard className="relative overflow-hidden !p-0 max-w-5xl w-full mx-auto border-white/[0.05] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]">
        <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Left: Content Side */}
            <div className="p-10 md:p-16 flex flex-col justify-center relative z-10 bg-gradient-to-br from-white/[0.01] to-transparent">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAB308]/10 border border-[#EAB308]/20 text-[#EAB308] text-[10px] font-mono tracking-widest uppercase w-fit mb-8">
                    <Sparkles size={10} />
                    Weekly Insight
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
                    The Latent Space.
                </h2>
                <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light">
                    Join <span className="text-white font-medium">5,000+ researchers</span> receiving my weekly breakdown of papers, mechanistic interpretability, and the philosophy of AI.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
                    <div className="relative flex-1 group">
                        <input 
                            type="email" 
                            placeholder="researcher@lab.edu" 
                            required
                            className="w-full bg-[#0F0F0F] border border-white/10 rounded-full px-7 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:bg-[#141414] transition-all text-sm"
                        />
                    </div>
                    <MagneticButton className="!px-8 !py-4 whitespace-nowrap !bg-white !text-black hover:!bg-zinc-200 !border-none !shadow-xl">
                        Join Waitlist
                    </MagneticButton>
                </form>
                
                <div className="flex items-center gap-4 text-xs text-zinc-500 font-light">
                    <div className="flex -space-x-2.5">
                        {[1, 2, 3].map(i => (
                            <div 
                                key={i} 
                                className="w-8 h-8 rounded-full bg-zinc-900 border-[3px] border-[#1c1c1e] overflow-hidden"
                            >
                                <img 
                                    src={`https://i.pravatar.cc/100?u=user${i + 10}`} 
                                    alt="User" 
                                    className="w-full h-full object-cover grayscale opacity-80" 
                                />
                            </div>
                        ))}
                    </div>
                    <p>Read by folks from DeepMind, OpenAI, and Anthropic.</p>
                </div>
            </div>

            {/* Right: Visual Side */}
            <div className="relative min-h-[400px] md:min-h-full flex items-center justify-center overflow-hidden bg-[#0A0A0A]/50 border-l border-white/[0.03]">
                <div className="absolute inset-0 bg-noise opacity-[0.05] mix-blend-overlay"></div>
                
                {/* Central Focus Circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>

                {/* Floating UI Elements */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                    
                    {/* Dark Card with Zap */}
                    <motion.div 
                        animate={{ y: [0, -15, 0], rotate: [0, 1, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-20 p-6 rounded-2xl bg-[#111111] border border-white/10 w-[240px] shadow-2xl"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                                <Zap size={20} className="text-white fill-white" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-20 bg-white/20 rounded-full"></div>
                                <div className="h-1.5 w-12 bg-white/10 rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-2.5 opacity-40">
                            <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                            <div className="h-1.5 w-2/3 bg-white/10 rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Translucent Overlay Card */}
                    <motion.div 
                        animate={{ y: [0, 20, 0], x: [0, 10, 0], rotate: [0, -1, 0] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-1/4 right-8 z-10 p-5 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 w-[200px] hidden md:block"
                    >
                        <div className="flex gap-1.5 mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500/40"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/40"></div>
                        </div>
                        <div className="space-y-2.5">
                             <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                             <div className="h-1.5 w-3/4 bg-white/10 rounded-full"></div>
                             <div className="h-1.5 w-1/2 bg-white/10 rounded-full opacity-40"></div>
                        </div>
                    </motion.div>

                    {/* Grid Pattern Behind */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                         style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                </div>
            </div>
        </div>
      </GlassCard>
    </section>
  );
};