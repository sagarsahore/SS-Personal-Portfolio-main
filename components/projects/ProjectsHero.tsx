import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cloud, BrainCircuit, Server, Database, Layers } from 'lucide-react';

// Animated system diagram nodes
const diagramNodes = [
  { id: 'data', label: 'Data Sources', x: 10, y: 30, color: '#0066FF' },
  { id: 'pipeline', label: 'Pipeline', x: 35, y: 20, color: '#10B981' },
  { id: 'model', label: 'ML Model', x: 55, y: 40, color: '#EF4444' },
  { id: 'api', label: 'API Layer', x: 75, y: 25, color: '#F97316' },
  { id: 'ui', label: 'Dashboard', x: 90, y: 35, color: '#A855F7' }
];

const diagramConnections = [
  { from: 'data', to: 'pipeline' },
  { from: 'pipeline', to: 'model' },
  { from: 'model', to: 'api' },
  { from: 'api', to: 'ui' }
];

const SystemDiagram: React.FC = () => {
  return (
    <div className="relative w-full h-64 md:h-80">
      <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
        {/* Animated connections */}
        {diagramConnections.map((conn, idx) => {
          const from = diagramNodes.find(n => n.id === conn.from)!;
          const to = diagramNodes.find(n => n.id === conn.to)!;
          return (
            <motion.line
              key={idx}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#lineGradient)"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: idx * 0.3 }}
            />
          );
        })}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0066FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Nodes */}
        {diagramNodes.map((node, idx) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
          >
            {/* Node circle */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill={node.color}
              opacity="0.2"
              animate={{
                r: [4, 5, 4],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="2"
              fill={node.color}
            />
            {/* Label */}
            <text
              x={node.x}
              y={node.y + 8}
              textAnchor="middle"
              className="fill-white/60 text-[2.5px] font-mono uppercase tracking-wider"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Animated data pulse */}
        <motion.circle
          r="1"
          fill="#0066FF"
          animate={{
            cx: [10, 35, 55, 75, 90, 10],
            cy: [30, 20, 40, 25, 35, 30],
            opacity: [1, 1, 1, 1, 0, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
};

export const ProjectsHero: React.FC = () => {
  const categories = [
    'AI / ML',
    'Computer Vision',
    'Cloud & DevOps',
    'Salesforce',
    'Full Stack',
    'Research Prototypes'
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center border-b border-white/[0.05] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#A855F7]/10 rounded-full blur-[100px]" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/20">
              <div className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
              <span className="text-[#0066FF] text-xs font-mono tracking-widest uppercase">Engineering Portfolio</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Selected Systems &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00A3FF] to-[#A855F7]">
                Applied Research
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-[#9CA3AF] mb-8 leading-relaxed max-w-lg">
              From concept → architecture → implementation → validation → deployment.
            </p>

            {/* Pipeline visual */}
            <div className="flex items-center gap-3 mb-10 flex-wrap">
              {['Concept', 'Architecture', 'Implementation', 'Validation', 'Deploy'].map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-xs font-mono text-[#6B7280]">{idx + 1}</span>
                    <span className="text-xs text-white">{step}</span>
                  </div>
                  {idx < 4 && <ArrowRight size={14} className="text-[#374151]" />}
                </React.Fragment>
              ))}
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-2 rounded-full text-xs font-medium bg-white/[0.03] border border-white/[0.05] text-[#9CA3AF] hover:border-[#0066FF]/30 hover:text-white transition-all"
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: System Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF]/5 to-[#A855F7]/5 rounded-3xl blur-xl" />
            <div className="relative p-8 rounded-3xl bg-[#0A0A0A]/80 border border-white/[0.08] backdrop-blur-xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0066FF]/10 text-[#0066FF]">
                    <Layers size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#6B7280] uppercase tracking-wider">System Architecture</div>
                    <div className="text-sm text-white font-medium">Live Data Flow</div>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                </div>
              </div>

              {/* Diagram */}
              <SystemDiagram />

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-white/[0.05]">
                {[
                  { icon: Database, label: 'Data Layer', color: '#0066FF' },
                  { icon: BrainCircuit, label: 'ML Engine', color: '#EF4444' },
                  { icon: Server, label: 'API Gateway', color: '#F97316' },
                  { icon: Cloud, label: 'Cloud Infra', color: '#A855F7' }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <item.icon size={12} style={{ color: item.color }} />
                    <span className="text-[10px] text-[#6B7280] font-mono uppercase">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
