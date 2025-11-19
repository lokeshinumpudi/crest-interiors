
import React, { useEffect } from 'react';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { BeforeAfter } from './BeforeAfter';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
  onContact: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose, onContact }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-stone-50 z-[100] relative w-full"
    >
      {/* --- NAVIGATION --- */}
      <div className="fixed top-6 left-6 z-50">
        <motion.button 
            onClick={onClose}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest bg-white/80 backdrop-blur-md text-stone-900 px-6 py-3 rounded-full shadow-sm hover:bg-stone-900 hover:text-white transition-all duration-300 group"
        >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Portfolio
        </motion.button>
      </div>

      {/* --- 1. CINEMATIC HERO --- */}
      <div className="w-full h-screen relative bg-stone-900 overflow-hidden">
        <motion.img 
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-90"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 text-white">
             <div className="container mx-auto max-w-7xl border-l border-white/20 pl-8 md:pl-12">
                <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 text-sm uppercase tracking-widest text-stone-300">
                        <span>{project.location}</span>
                        <span className="hidden md:inline">•</span>
                        <span>{project.year}</span>
                    </div>
                    <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] tracking-tight mb-6 text-white">
                        {project.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl leading-relaxed">
                        {project.highlight}
                    </p>
                </motion.div>
             </div>
        </div>
      </div>
      
      {/* Molten Separator */}
      <div className="w-full h-[2px] molten-horizontal opacity-60" />

      {/* --- 2. SPEC GRID OVERVIEW --- */}
      <div className="bg-white border-b border-stone-100">
          <div className="container mx-auto px-6 max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-3 relative">
                  
                  {/* Vertical Molten Dividers for Grid */}
                  <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-[1px] bg-stone-100" />
                  <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-[1px] bg-stone-100" />

                  {/* Column 1: Facts */}
                  <div className="py-12 md:pr-12 border-b md:border-b-0 border-stone-100">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">Project Data</h4>
                      <div className="space-y-4">
                          <div className="flex justify-between items-baseline">
                              <span className="text-stone-500 text-sm">Type</span>
                              <span className="font-serif text-lg text-stone-900">{project.type}</span>
                          </div>
                          <div className="flex justify-between items-baseline">
                              <span className="text-stone-500 text-sm">Area</span>
                              <span className="font-serif text-lg text-stone-900">{project.area}</span>
                          </div>
                          <div className="flex justify-between items-baseline">
                              <span className="text-stone-500 text-sm">Status</span>
                              <span className="font-serif text-lg text-stone-900">Completed {project.year}</span>
                          </div>
                      </div>
                  </div>

                  {/* Column 2: Services */}
                  <div className="py-12 md:px-12 border-b md:border-b-0 border-stone-100">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">Scope of Work</h4>
                      <ul className="space-y-2">
                          {project.services?.map((s, i) => (
                              <li key={i} className="text-stone-800 font-medium text-lg">{s}</li>
                          ))}
                      </ul>
                  </div>

                  {/* Column 3: Tags/Materials */}
                  <div className="py-12 md:pl-12">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">Key Elements</h4>
                      <div className="flex flex-wrap gap-2">
                          {project.tags?.map((tag, i) => (
                              <span key={i} className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs uppercase tracking-wider rounded-sm">
                                  {tag}
                              </span>
                          ))}
                      </div>
                  </div>

              </div>
          </div>
      </div>

      {/* --- 3. NARRATIVE & CHALLENGES --- */}
      <div className="container mx-auto px-6 max-w-7xl py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              
              {/* Left: The Story */}
              <div className="md:col-span-7 md:pr-12">
                  <span className="text-bronze-500 font-bold text-xs uppercase tracking-widest mb-6 block">The Narrative</span>
                  <h2 className="font-serif text-3xl md:text-4xl leading-tight text-stone-900 mb-8">
                      {project.description}
                  </h2>
                  <div className="prose prose-lg prose-stone font-serif text-stone-600 leading-loose whitespace-pre-line">
                      {project.narrative}
                  </div>
              </div>

              {/* Right: Challenges & Solutions (The differentiator) */}
              <div className="md:col-span-5 bg-stone-100 p-10 rounded-sm h-fit">
                  <h3 className="font-serif text-2xl text-stone-900 mb-8">Architectural Insight</h3>
                  
                  <div className="mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">The Challenge</h4>
                      <p className="text-stone-700 leading-relaxed">
                          {project.challenges || "Balancing functional density with spatial fluidity in a constrained footprint."}
                      </p>
                  </div>
                  
                  <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">The Solution</h4>
                      <p className="text-stone-700 leading-relaxed">
                          {project.solutions || "A reductive approach to materiality and distinct zoning through joinery rather than masonry walls."}
                      </p>
                  </div>
              </div>
          </div>
      </div>

      {/* --- 3.5. INTERACTIVE TRANSFORMATION (NEW) --- */}
      {project.beforeAfter && (
          <div className="container mx-auto px-6 max-w-7xl mb-32">
              <BeforeAfter 
                  beforeImage={project.beforeAfter.beforeImage} 
                  afterImage={project.beforeAfter.afterImage} 
                  label={project.beforeAfter.label}
              />
          </div>
      )}

      {/* --- 4. SEQUENCED GALLERY --- */}
      <div className="space-y-6 md:space-y-12 mb-32">
          {/* Image 1: Wide Hero 2 */}
          {project.gallery?.[0] && (
            <motion.div 
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                className="w-full h-[70vh] overflow-hidden"
            >
                <img src={project.gallery[0]} className="w-full h-full object-cover" alt="View 1" />
            </motion.div>
          )}

          {/* Image 2 & 3: Medium Grid */}
          <div className="container mx-auto px-6 max-w-7xl">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                {project.gallery?.[1] && (
                    <motion.img 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
                        src={project.gallery[1]} className="w-full h-[600px] object-cover" alt="View 2" 
                    />
                )}
                {project.gallery?.[2] && (
                    <motion.img 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
                        src={project.gallery[2]} className="w-full h-[600px] object-cover" alt="View 3" 
                    />
                )}
             </div>
          </div>

          {/* Image 4: Full Bleed Detail */}
          {project.gallery?.[3] && (
              <div className="container mx-auto px-6 max-w-4xl py-12">
                  <motion.img 
                      initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                      src={project.gallery[3]} className="w-full h-auto shadow-2xl" alt="View 4" 
                  />
                  <p className="text-center text-stone-500 text-sm mt-4 italic">Detail view showing material transition.</p>
              </div>
          )}
      </div>

      {/* --- 5. CRAFT DETAILS STRIP --- */}
      {project.craftDetails && project.craftDetails.length > 0 && (
          <section className="bg-stone-900 py-24 text-stone-50">
              <div className="container mx-auto px-6 max-w-7xl">
                  <div className="flex justify-between items-end mb-12 border-b border-stone-800 pb-6">
                      <h3 className="font-serif text-3xl">Craftsmanship Details</h3>
                      <span className="text-stone-500 text-sm uppercase tracking-widest">Macro View</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {project.craftDetails.map((detail, idx) => (
                          <motion.div 
                              key={idx} 
                              initial={{ opacity: 0, y: 20 }} 
                              whileInView={{ opacity: 1, y: 0 }} 
                              transition={{ delay: idx * 0.1 }}
                              viewport={{ once: true }}
                              className="group"
                          >
                              <div className="aspect-square overflow-hidden bg-stone-800 mb-4">
                                  <img src={detail.image} alt={detail.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                              </div>
                              <p className="text-xs text-stone-400 uppercase tracking-wide leading-relaxed border-l border-bronze-500 pl-3">
                                  {detail.caption}
                              </p>
                          </motion.div>
                      ))}
                  </div>
              </div>
          </section>
      )}

      {/* --- 6. FOOTER NAVIGATION --- */}
      <div className="bg-gradient-to-b from-stone-900 to-black py-32 text-center text-white">
            <div className="container mx-auto px-6">
                <p className="text-stone-500 text-xs uppercase tracking-widest mb-6">End of Case Study</p>
                <h2 className="font-serif text-4xl md:text-6xl mb-12">Inspired?</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <motion.button 
                        onClick={onClose}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-4 border border-stone-700 hover:border-white text-white uppercase tracking-widest text-xs font-bold transition-colors min-w-[200px]"
                    >
                        Return to Portfolio
                    </motion.button>
                    <motion.button 
                        onClick={onContact}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-4 bg-bronze-500 hover:bg-bronze-600 text-white uppercase tracking-widest text-xs font-bold transition-colors min-w-[200px] flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-bronze-900/20"
                    >
                        Start Your Project <ArrowRight size={14} />
                    </motion.button>
                </div>
            </div>
      </div>

    </motion.div>
  );
};
