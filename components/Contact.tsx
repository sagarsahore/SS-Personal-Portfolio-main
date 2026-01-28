import React from 'react';
import { GlassCard } from './GlassCard';
import { MagneticButton } from './MagneticButton';
import { Send, Mail, Twitter, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section className="relative max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium tracking-tight text-white mb-4">
          Initiate Protocol
        </h2>
        <p className="text-white/50 text-lg font-light">
           Available for collaborations, speaking engagements, and research discussions.
        </p>
      </div>

      <GlassCard className="!p-8 md:!p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Form Section */}
            <div className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                            placeholder="Dr. Freeman"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all"
                            placeholder="g.freeman@blackmesa.org"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Transmission</label>
                        <textarea 
                            id="message"
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all resize-none"
                            placeholder="Regarding the anomalous materials..."
                        />
                    </div>
                </div>
                
                <div className="pt-2">
                    <MagneticButton className="w-full justify-center">
                        Send Message <Send size={14} />
                    </MagneticButton>
                </div>
            </div>

            {/* Connect Section */}
            <div className="flex flex-col justify-between space-y-8 md:pl-12 md:border-l border-white/10">
                <div>
                    <h3 className="text-lg font-medium text-white mb-2">Direct Channel</h3>
                    <a href="mailto:hello@aether.ai" className="text-white/60 hover:text-indigo-300 transition-colors flex items-center gap-2">
                        <Mail size={16} /> hello@aether.ai
                    </a>
                </div>

                <div>
                    <h3 className="text-lg font-medium text-white mb-4">Neural Network</h3>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-6 rounded-xl border border-indigo-500/10">
                    <p className="text-indigo-200 text-sm italic">
                        "The best way to predict the future is to invent it."
                    </p>
                    <p className="text-indigo-400/50 text-xs mt-2 uppercase tracking-widest">— Alan Kay</p>
                </div>
            </div>

        </div>
      </GlassCard>
    </section>
  );
};