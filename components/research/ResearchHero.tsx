import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Brain, Eye, Share2, Activity } from 'lucide-react';

const NetworkGraph = () => {
    // Simulated nodes for the concept graph - using main page color scheme
    const nodes = [
        { id: 1, x: 20, y: 30, color: '#0066FF' }, // Primary Blue
        { id: 2, x: 80, y: 20, color: '#00A3FF' }, // Light Blue
        { id: 3, x: 50, y: 80, color: '#0066FF' }, // Primary Blue
        { id: 4, x: 50, y: 50, color: '#ffffff' }, // White (Core AI)
    ];

    const links = [
        { from: 1, to: 4 },
        { from: 2, to: 4 },
        { from: 3, to: 4 },
        { from: 1, to: 2 },
    ];

    return (
        <div className="absolute right-0 top-0 w-full h-full opacity-20 md:opacity-40 pointer-events-none overflow-hidden">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {links.map((link, i) => {
                    const nodeA = nodes.find(n => n.id === link.from)!;
                    const nodeB = nodes.find(n => n.id === link.to)!;
                    return (
                        <motion.line
                            key={i}
                            x1={`${nodeA.x}%`}
                            y1={`${nodeA.y}%`}
                            x2={`${nodeB.x}%`}
                            y2={`${nodeB.y}%`}
                            stroke="url(#gradient)"
                            strokeWidth="0.3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.5 }}
                            transition={{ duration: 2, delay: i * 0.5 }}
                        />
                    );
                })}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0066FF" stopOpacity="0" />
                        <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                        <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {nodes.map((node, i) => (
                    <motion.circle
                        key={i}
                        cx={`${node.x}%`}
                        cy={`${node.y}%`}
                        r="1.5"
                        fill={node.color}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: i * 0.2 + 1 }}
                    />
                ))}
             </svg>
        </div>
    );
};

export const ResearchHero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-20 border-b border-white/[0.08] bg-[#050505]">
      <NetworkGraph />

      <div className="max-w-6xl z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
        <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 mb-6 text-[10px] md:text-xs font-semibold tracking-wider uppercase border border-[#0066FF]/20 text-[#0066FF] bg-[#0066FF]/10 rounded-full">
                Research Identity
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8"
            >
              Engineering <br />
              <span className="text-[#0066FF]">
                Trustworthy Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[#9CA3AF] max-w-xl leading-relaxed font-light border-l-2 border-[#0066FF]/30 pl-6"
            >
              My research bridges the gap between 
              <span className="text-white font-medium"> theoretical deep learning </span> 
              and 
              <span className="text-white font-medium"> clinical deployment</span>. 
              I build multimodal, explainable systems that operate reliably in high-stakes healthcare environments.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-3"
            >
                {['Multimodal Learning', 'Causal Inference', 'Large-Scale Systems', 'Ophthalmology'].map((tag) => (
                    <span key={tag} className="text-xs text-[#9CA3AF] px-3 py-1.5 bg-white/[0.03] rounded-lg border border-white/[0.08] hover:border-[#0066FF]/30 hover:bg-[#0066FF]/5 transition-colors cursor-default">
                        {tag}
                    </span>
                ))}
            </motion.div>
        </div>
        
        {/* Right side - Abstract Representation via Code/Stats */}
        <div className="hidden lg:block relative h-[400px] w-full bg-[#0A0A0A] rounded-2xl border border-white/[0.08] overflow-hidden">
            <div className="absolute top-0 left-0 w-full px-4 py-3 bg-[#121212] border-b border-white/[0.08] flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
                <span className="ml-3 text-xs text-[#6B7280] font-mono">research_pipeline.py</span>
            </div>
            <div className="p-6 pt-14 font-mono text-xs md:text-sm text-[#9CA3AF] leading-relaxed">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                >
                    <span className="text-[#C084FC]">class</span> <span className="text-[#FDE68A]">TrustworthyAI</span>(nn.Module):<br/>
                    &nbsp;&nbsp;<span className="text-[#C084FC]">def</span> <span className="text-[#0066FF]">__init__</span>(self):<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;self.vision = <span className="text-[#4ADE80]">ResNet50</span>(pretrained=True)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;self.causal = <span className="text-[#4ADE80]">CausalGraph</span>()<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;self.explain = <span className="text-[#4ADE80]">GradCAM</span>()<br/><br/>
                    &nbsp;&nbsp;<span className="text-[#C084FC]">def</span> <span className="text-[#0066FF]">forward</span>(self, x_img, x_clinical):<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#6B7280]"># Multimodal Fusion</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;features = self.fusion(x_img, x_clinical)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C084FC]">return</span> self.uncertainty(features)<br/>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
};
