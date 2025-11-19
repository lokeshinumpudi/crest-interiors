import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32">
          <div className="relative aspect-[3/4] md:aspect-square bg-stone-200 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" 
              alt="Studio Workspace" 
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-8 -left-8 bg-stone-900 text-stone-50 p-8 hidden md:block shadow-2xl">
                <span className="block font-serif text-3xl mb-1">Gopi Krishna</span>
                <span className="text-xs uppercase tracking-widest opacity-70">Principal Architect</span>
            </div>
          </div>
          
          <div>
            <span className="text-xs uppercase tracking-widest text-bronze-500 mb-2 block">The Philosophy</span>
            <h2 className="font-serif text-4xl md:text-6xl text-stone-900 mb-8 leading-tight">
                We design with <br/><span className="italic text-bronze-500">light first.</span>
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light relative">
              {/* Subtle fade for text readability */}
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
              <p>
                Crest Interiors was founded on a simple premise: luxury is not about adding layers, but about stripping them back until only the essential remains.
              </p>
              <p>
                In a market saturated with "decorators", we operate as architects of the interior. We believe in honest materials—stone that feels like stone, wood that breathes. We don't cover structural elements; we celebrate them.
              </p>
              <p>
                Our process is rigorous, transparent, and obsessively detailed. We manage the entire execution end-to-end, because a beautiful design is worthless if the joinery is misaligned by a millimeter.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Testimonials */}
        <div className="border-t border-stone-200 pt-24">
            <h3 className="font-serif text-3xl text-stone-900 mb-20 text-center">Client Voices</h3>
            
            <div className="space-y-24 md:space-y-32">
                {TESTIMONIALS.map((t, index) => (
                    <motion.div 
                        key={t.id} 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >
                         {/* Large Magazine Style Image */}
                         <div className="w-full md:w-1/2 aspect-[4/5] bg-stone-200 relative group overflow-hidden shadow-lg">
                             <img 
                                src={t.image} 
                                alt={t.location} 
                                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 saturate-[0.15] group-hover:saturate-100" 
                             />
                         </div>

                         {/* Editorial Text Block */}
                         <div className="w-full md:w-1/2 relative px-4 md:px-0">
                             <Quote className="absolute -top-16 -left-6 text-bronze-500/10 w-32 h-32 -z-10 transform -scale-x-100" />
                             
                             <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-[1.15] mb-10 relative z-10">
                                 "{t.text}"
                             </p>
                             
                             <div className="flex flex-col border-l-2 border-bronze-500 pl-6">
                                 <span className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-2">{t.author}</span>
                                 <span className="text-sm text-stone-500 font-light tracking-wide">{t.location}</span>
                             </div>
                         </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};