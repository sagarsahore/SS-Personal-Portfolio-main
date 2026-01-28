import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Activity, Zap, LineChart } from 'lucide-react';

// Simulated training curve data
const generateCurveData = (points: number, noise: number = 0.1): number[] => {
  const data: number[] = [];
  for (let i = 0; i < points; i++) {
    // Exponential decay for loss curve
    const base = Math.exp(-i / (points / 3)) * 0.8 + 0.1;
    const noiseValue = (Math.random() - 0.5) * noise;
    data.push(Math.max(0.05, Math.min(0.95, base + noiseValue)));
  }
  return data;
};

const generateAccuracyData = (points: number): number[] => {
  const data: number[] = [];
  for (let i = 0; i < points; i++) {
    // Sigmoid-like growth for accuracy
    const base = 1 / (1 + Math.exp(-(i - points / 2) / (points / 8)));
    const noise = (Math.random() - 0.5) * 0.05;
    data.push(Math.max(0.5, Math.min(0.98, base * 0.45 + 0.5 + noise)));
  }
  return data;
};

const TrainingCurve: React.FC<{ data: number[]; color: string; label: string; animate: boolean }> = ({ data, color, label, animate }) => {
  const width = 280;
  const height = 100;
  const padding = 10;
  
  const points = data.map((value, index) => {
    const x = padding + (index / (data.length - 1)) * (width - 2 * padding);
    const y = padding + (1 - value) * (height - 2 * padding);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-[#6B7280] font-medium uppercase tracking-wider">{label}</span>
        <span className="text-xs text-[#0066FF] font-mono">{(data[data.length - 1] * 100).toFixed(1)}%</span>
      </div>
      <svg width={width} height={height} className="overflow-visible">
        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map((y) => (
          <line
            key={y}
            x1={padding}
            y1={padding + y * (height - 2 * padding)}
            x2={width - padding}
            y2={padding + y * (height - 2 * padding)}
            stroke="rgba(255,255,255,0.05)"
            strokeDasharray="2,4"
          />
        ))}
        
        {/* Curve */}
        <motion.polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* Glow effect */}
        <motion.polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.2"
          filter="blur(4px)"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
};

export const LabNotebook: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const [lossData] = useState(() => generateCurveData(50, 0.08));
  const [accData] = useState(() => generateAccuracyData(50));
  const [epoch, setEpoch] = useState(0);
  
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setEpoch((prev) => (prev < 50 ? prev + 1 : prev));
      }, 40);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-24 px-6 lg:px-20 bg-[#050505] relative z-10 border-b border-white/[0.08]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[#0066FF] font-semibold text-xs tracking-[0.2em] uppercase mb-3 block">Live Preview</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Lab Notebook</h2>
          <p className="text-[#9CA3AF] mt-4 max-w-xl text-sm leading-relaxed">
            Real-time simulation of a typical model training session for glaucoma detection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Training Terminal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0A0A0A] rounded-2xl border border-white/[0.08] overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="px-4 py-3 bg-[#121212] border-b border-white/[0.08] flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27CA40]" />
              <span className="ml-3 text-xs text-[#6B7280] font-mono">training_monitor.py</span>
              <div className="ml-auto">
                <Activity size={14} className="text-[#4ADE80] animate-pulse" />
              </div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono text-xs leading-relaxed h-[280px] overflow-hidden">
              <div className="text-[#6B7280]">$ python train.py --model efficientnet_b0</div>
              <br />
              <div className="text-[#9CA3AF]">
                <span className="text-[#0066FF]">[INFO]</span> Loading ORIGA dataset...
              </div>
              <div className="text-[#9CA3AF]">
                <span className="text-[#0066FF]">[INFO]</span> Train: 650 | Val: 168 | Test: 82
              </div>
              <div className="text-[#9CA3AF]">
                <span className="text-[#0066FF]">[INFO]</span> Using CUDA: NVIDIA RTX 4090
              </div>
              <br />
              <div className="text-[#4ADE80]">
                Training started...
              </div>
              <br />
              {inView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-1"
                >
                  <div className="text-[#9CA3AF]">
                    Epoch {String(Math.min(epoch, 50)).padStart(2, '0')}/50 | 
                    Loss: {lossData[Math.min(epoch, 49)]?.toFixed(4)} | 
                    Acc: {(accData[Math.min(epoch, 49)] * 100)?.toFixed(1)}%
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-1.5 flex-1 bg-[#1A1A1A] rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-[#0066FF] to-[#00A3FF] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(epoch / 50) * 100}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                    <span className="text-[#6B7280] text-[10px]">{Math.round((epoch / 50) * 100)}%</span>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Training Curves */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#0A0A0A] rounded-2xl border border-white/[0.08] overflow-hidden"
          >
            <div className="px-4 py-3 bg-[#121212] border-b border-white/[0.08] flex items-center gap-2">
              <LineChart size={14} className="text-[#0066FF]" />
              <span className="ml-2 text-xs text-[#6B7280] font-mono">Training Metrics</span>
            </div>
            
            <div className="p-6 space-y-8">
              <TrainingCurve 
                data={lossData.slice(0, epoch + 1)} 
                color="#EF4444" 
                label="Cross-Entropy Loss" 
                animate={inView}
              />
              <TrainingCurve 
                data={accData.slice(0, epoch + 1)} 
                color="#0066FF" 
                label="Validation Accuracy" 
                animate={inView}
              />
              
              {/* Legend */}
              <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/[0.05]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <span className="text-[10px] text-[#6B7280] uppercase tracking-wider">Loss</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#0066FF]" />
                  <span className="text-[10px] text-[#6B7280] uppercase tracking-wider">Accuracy</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
