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
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-xl">
                <span className="text-xs uppercase tracking-widest text-bronze-500 mb-2 block">Portfolio</span>
                <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Selected Works</h2>
                <p className="text-stone-600 text-lg">A collection of crafted spaces, focusing on material honesty and light.</p>
            </div>
            <div className="hidden md:block">
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="text-sm uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1 hover:text-bronze-500 hover:border-bronze-500 transition-colors cursor-pointer"
                >
                  Request Full Portfolio
                </a>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] md:auto-rows-[350px] gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              onClick={() => onProjectSelect(project.id)}
              className={`group relative overflow-hidden bg-stone-200 cursor-pointer ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                project.size === 'medium' ? 'md:col-span-2 md:row-span-1' : 
                'md:col-span-1 md:row-span-1'
              }`}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Info Layer */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex justify-between text-white/80 text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      <span>{project.year}</span>
                      <span>{project.area}</span>
                  </div>
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      <span className="text-bronze-400 text-xs uppercase tracking-widest mb-2 block">{project.type}</span>
                      <h3 className="text-white font-serif text-3xl">{project.title}</h3>
                      <p className="text-white/80 text-sm mt-2 font-light">{project.highlight}</p>
                  </div>
              </div>

              {/* Default visible title (mobile only or when not hovered) */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:hidden bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white font-serif text-xl">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};