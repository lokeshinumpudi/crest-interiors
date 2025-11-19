import React, { Suspense } from 'react';
import { ThreeHero } from './ThreeHero';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {

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
      
      {/* 3D Scene Layer */}
      <Suspense fallback={<div className="w-full h-full bg-stone-50" />}>
        <ThreeHero />
      </Suspense>

      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="max-w-2xl pointer-events-auto pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl text-stone-900 leading-[1.1] mb-6"
          >
            Interior architecture for premium homes.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-stone-600 mb-10 max-w-md leading-relaxed"
          >
            Full-scope interiors, bespoke joinery, and architectural lighting for apartments and villas in Hyderabad.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
             className="flex flex-col md:flex-row gap-4"
          >
            <motion.a 
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              whileHover={{ scale: 1.02, y: -2, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-stone-900 text-stone-50 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Request Studio Visit <ArrowRight size={16} />
            </motion.a>
            <motion.a 
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(26, 26, 26, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border border-stone-300 text-stone-900 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300 hover:border-stone-900 flex items-center justify-center cursor-pointer"
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-stone-400 text-xs uppercase tracking-widest"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
};