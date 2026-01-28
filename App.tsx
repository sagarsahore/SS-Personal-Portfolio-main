import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

// Lazy load pages for better initial load performance
const Home = lazy(() => import('./components/Home').then(m => ({ default: m.Home })));
const AboutPage = lazy(() => import('./components/AboutPage').then(m => ({ default: m.AboutPage })));
const ResearchPage = lazy(() => import('./components/ResearchPage').then(m => ({ default: m.ResearchPage })));
const ProjectsPage = lazy(() => import('./components/ProjectsPage').then(m => ({ default: m.ProjectsPage })));

// Optimized loading screen
const LoadingScreen = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[#050505] text-white z-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 rounded-full border-2 border-[#0066FF] border-t-transparent animate-spin"></div>
      <div className="text-xs font-mono uppercase tracking-widest text-white/40">Loading...</div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;