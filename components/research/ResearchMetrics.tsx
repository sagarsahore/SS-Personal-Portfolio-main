import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

// Animated counter component
const Counter = ({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => prefix + Math.round(latest) + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2.5, ease: [0.25, 1, 0.5, 1] });
    }
  }, [count, inView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const metrics = [
  { icon: BookOpen, label: 'Publications', value: 3, suffix: '+', color: '#0066FF' },
  { icon: Users, label: 'Collaborators', value: 12, suffix: '', color: '#00A3FF' },
  { icon: Award, label: 'Citations', value: 47, suffix: '+', color: '#0066FF' },
  { icon: TrendingUp, label: 'H-Index', value: 2, suffix: '', color: '#00A3FF' },
];

export const ResearchMetrics: React.FC = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-[#050505] relative z-10 border-b border-white/[0.08]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] hover:border-[#0066FF]/30 transition-all text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#0066FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative z-10">
                <div className="mx-auto w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-4 group-hover:bg-[#0066FF]/10 transition-colors">
                  <metric.icon size={22} className="text-[#9CA3AF] group-hover:text-[#0066FF] transition-colors" />
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>
                
                <div className="text-xs text-[#6B7280] uppercase tracking-[0.15em] font-medium">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
