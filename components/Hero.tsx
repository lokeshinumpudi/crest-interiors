import React, { Suspense, useState, useEffect } from 'react';
import { ThreeHero } from './ThreeHero';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(true); // Default to true (safer for SSR/Initial render)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check immediately
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-stone-50 flex items-center">
      
      {/* Background Layer: 3D Scene (Desktop) or Static Image (Mobile) */}
      <div className="absolute inset-0 w-full h-full">
        {!isMobile ? (
          <Suspense fallback={<div className="w-full h-full bg-stone-50" />}>
            <ThreeHero />
          </Suspense>
        ) : (
          <div className="w-full h-full relative">
             <img 
               src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80" 
               alt="Interior Architecture Detail" 
               className="w-full h-full object-cover opacity-90"
             />
             <div className="absolute inset-0 bg-stone-50/20" />
          </div>
        )}
      </div>

      {/* Top Scrim for Navbar Visibility */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone-50 via-stone-50/80 to-transparent z-[5] pointer-events-none" />

      {/* Stronger Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-stone-50 via-stone-50/90 to-transparent z-[5] md:max-w-[65%] max-w-full" />
      
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.05)_100%)] z-[6]" />

      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="max-w-xl pointer-events-auto pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl text-stone-900 leading-[1.1] mb-6 relative"
          >
            Interior architecture for premium homes.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-stone-700 mb-10 max-w-md leading-relaxed relative font-light"
          >
            Full-scope interiors, bespoke joinery, and architectural lighting for apartments and villas in Hyderabad.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
             className="flex flex-col md:flex-row gap-4"
          >
            {/* Primary CTA */}
            <motion.a 
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              initial={{ backgroundColor: "#1c1917" }}
              whileHover={{ 
                scale: 1.02, 
                y: -4, 
                backgroundColor: "#AA8853",
                boxShadow: "0 20px 30px -5px rgba(170, 136, 83, 0.3)" 
              }}
              whileTap={{ 
                scale: 0.98, 
                y: 0, 
                boxShadow: "0 5px 10px -5px rgba(170, 136, 83, 0.2)" 
              }}
              className="text-stone-50 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              Request Studio Visit <ArrowRight size={16} />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a 
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              whileHover={{ scale: 1.02, borderColor: "#1c1917" }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border border-stone-300 text-stone-900 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center cursor-pointer group"
            >
              <span className="relative">
                View Projects
                <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-stone-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 text-xs uppercase tracking-widest z-10"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
};