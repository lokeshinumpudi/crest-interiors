
import React, { useState, useRef, useLayoutEffect } from 'react';
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
import { WhatsAppButton } from './components/WhatsAppButton';
import { FAQ } from './components/FAQ';
import { Preloader } from './components/Preloader';
import { ArtSettings } from './components/ArtSettings';
import { PROJECTS } from './constants';
import { AnimatePresence } from 'framer-motion';
import { ArtProvider } from './context/ArtContext';

const App: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const scrollPosition = useRef(0);
  const isNavigatingToContact = useRef(false);

  const handleProjectSelect = (id: string) => {
    scrollPosition.current = window.scrollY;
    setActiveProjectId(id);
  };

  const handleClose = () => {
    setActiveProjectId(null);
  };

  const handleContact = () => {
    isNavigatingToContact.current = true;
    setActiveProjectId(null);
    
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        isNavigatingToContact.current = false;
      }, 1000);
    }, 100);
  };

  useLayoutEffect(() => {
    if (!activeProjectId && scrollPosition.current > 0 && !isNavigatingToContact.current) {
      window.scrollTo({ top: scrollPosition.current, behavior: 'instant' });
    }
  }, [activeProjectId]);

  const activeProject = activeProjectId ? PROJECTS.find(p => p.id === activeProjectId) : null;

  return (
    <ArtProvider>
        <main className="w-full min-h-screen bg-stone-50 antialiased text-stone-900 selection:bg-bronze-500 selection:text-white relative">
          <Preloader />
          
          <div className="grain" />
          
          <WhatsAppButton />
          <ArtSettings />

          <AnimatePresence mode="wait">
            {activeProject ? (
              <ProjectDetail 
                key="project-detail" 
                project={activeProject} 
                onClose={handleClose} 
                onContact={handleContact}
              />
            ) : (
              <div key="home-view">
                <Navbar />
                <Hero />
                <Projects onProjectSelect={handleProjectSelect} />
                <CraftDetails />
                <Services />
                <Process />
                <About />
                <FAQ />
                <Contact />
                <Footer />
              </div>
            )}
          </AnimatePresence>
        </main>
    </ArtProvider>
  );
};

export default App;
