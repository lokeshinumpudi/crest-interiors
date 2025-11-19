import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';
import { CraftDetails } from './components/CraftDetails';
import { PROJECTS } from './constants';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const activeProject = activeProjectId ? PROJECTS.find(p => p.id === activeProjectId) : null;

  return (
    <main className="w-full min-h-screen bg-stone-50 antialiased text-stone-900 selection:bg-bronze-500 selection:text-white relative">
      {/* Global Grain Overlay */}
      <div className="grain" />

      <AnimatePresence mode="wait">
        {activeProject ? (
          <ProjectDetail 
            key="project-detail" 
            project={activeProject} 
            onClose={() => setActiveProjectId(null)} 
          />
        ) : (
          <div key="home-view">
            <Navbar />
            <Hero />
            <Projects onProjectSelect={setActiveProjectId} />
            <CraftDetails />
            <Services />
            <Process />
            <About />
            <Contact />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;