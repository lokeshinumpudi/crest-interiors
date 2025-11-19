
import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

interface ProjectsProps {
  onProjectSelect: (id: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-xl">
                <span className="text-xs uppercase tracking-widest text-bronze-500 mb-2 block">Portfolio</span>
                <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Selected Works</h2>
                <p className="text-stone-600 text-lg">A collection of crafted spaces, focusing on material honesty and light.</p>
            </div>
            <div className="hidden md:block">
                <motion.a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-sm uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1 hover:text-bronze-500 hover:border-bronze-500 transition-colors cursor-pointer inline-block"
                >
                  Request Full Portfolio
                </motion.a>
            </div>
        </div>

        {/* Denser Grid Layout: 3 cols, shorter rows (200px) */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-4">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              whileHover={{ scale: 0.99 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onProjectSelect(project.id)}
              className={`relative overflow-hidden bg-stone-200 cursor-pointer shadow-sm group ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                project.size === 'medium' ? 'md:col-span-1 md:row-span-2' : 
                'md:col-span-1 md:row-span-1'
              }`}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
              />
              
              {/* Permanent Info Layer - Always Visible - No Flashing */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100">
                  <div>
                      <span className="text-bronze-400 text-[10px] uppercase tracking-widest mb-1 block opacity-90">{project.type}</span>
                      <h3 className="text-white font-serif text-xl leading-tight">{project.title}</h3>
                      <p className="text-white/80 text-xs mt-1 font-light line-clamp-1">{project.highlight}</p>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
