import React, { Suspense, useMemo } from 'react';
import { Hero } from './Hero';
import { NeuralBackground } from './NeuralBackground';
import { Navigation } from './Navigation';
import { SectionWrapper } from './SectionWrapper';
import { LogoTicker } from './LogoTicker';

// Lazy loading heavy segments
const About = React.lazy(() => import('./About').then(module => ({ default: module.About })));
const Projects = React.lazy(() => import('./Projects').then(module => ({ default: module.Projects })));
const Experience = React.lazy(() => import('./Experience').then(module => ({ default: module.Experience })));
const Education = React.lazy(() => import('./Education').then(module => ({ default: module.Education })));
const Certifications = React.lazy(() => import('./Certifications').then(module => ({ default: module.Certifications })));
const BentoGrid = React.lazy(() => import('./BentoGrid').then(module => ({ default: module.BentoGrid })));
const Testimonials = React.lazy(() => import('./Testimonials').then(module => ({ default: module.Testimonials })));
const Newsletter = React.lazy(() => import('./Newsletter').then(module => ({ default: module.Newsletter })));
const Contact = React.lazy(() => import('./Contact').then(module => ({ default: module.Contact })));

const SectionLoader = ({ label }: { label: string }) => (
  <div className="w-full h-[300px] flex items-center justify-center">
    <div className="w-full h-full rounded-[2.5rem] bg-white/[0.01] animate-pulse border border-white/5 flex flex-col items-center justify-center gap-3">
        <div className="w-6 h-6 rounded-full border-2 border-red-500/20 border-t-red-500 animate-spin"></div>
        <div className="text-white/10 font-mono text-[10px] uppercase tracking-widest italic">Syncing {label}...</div>
    </div>
  </div>
);

export const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-red-500/30 selection:text-white overflow-x-hidden bg-[#050505]">
      {/* Background is Memoized/Optimized internally */}
      <NeuralBackground />
      
      <Navigation />
      
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <main className="flex flex-col pb-20">
          <Hero />
        </main>
      </div>

      <div className="relative z-20 w-full mb-32">
        <SectionWrapper delay={0.2} className="w-full">
            <LogoTicker />
        </SectionWrapper>
      </div>
      
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <main className="flex flex-col gap-32 pb-40">
          
          <Suspense fallback={<SectionLoader label="Narrative" />}>
            <SectionWrapper id="about">
                <About />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader label="Portfolio" />}>
            <SectionWrapper id="projects">
                <Projects />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader label="Career" />}>
            <SectionWrapper id="experience">
                <Experience />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader label="Academic" />}>
            <SectionWrapper id="education">
                <Education />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader label="Credentials" />}>
            <SectionWrapper id="certifications">
                <Certifications />
            </SectionWrapper>
          </Suspense>
          
          <Suspense fallback={<SectionLoader label="Research" />}>
            <SectionWrapper id="research">
                 <BentoGrid />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader label="Literature" />}>
            <SectionWrapper>
                <Testimonials />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader label="Signal" />}>
            <SectionWrapper>
                 <Newsletter />
            </SectionWrapper>
          </Suspense>

          <Suspense fallback={<SectionLoader label="Protocol" />}>
            <SectionWrapper id="contact">
                <Contact />
            </SectionWrapper>
          </Suspense>
          
          <footer className="text-center text-white/20 text-[10px] font-mono uppercase tracking-[0.4em] py-20 border-t border-white/5">
            <p>© 2025 Lab of Neural Dynamics. Ref: SS-PORT-v4.5</p>
          </footer>
        </main>
      </div>
    </div>
  );
};