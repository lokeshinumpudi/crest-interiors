import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32">
          <div className="relative aspect-[3/4] md:aspect-square bg-stone-200">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" 
              alt="Studio Workspace" 
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-stone-900 text-stone-50 p-8 hidden md:block">
                <span className="block font-serif text-3xl mb-1">Vikram Rao</span>
                <span className="text-xs uppercase tracking-widest opacity-70">Principal Architect</span>
            </div>
          </div>
          
          <div>
            <h2 className="font-serif text-4xl md:text-6xl text-stone-900 mb-8 leading-tight">
                We design with <br/><span className="italic text-bronze-500">light first.</span>
            </h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
              <p>
                Studio Object was founded on a simple premise: luxury is not about adding layers, but about stripping them back until only the essential remains.
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
            <h3 className="font-serif text-3xl text-stone-900 mb-12 text-center">Client Voices</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="group cursor-pointer">
                         <div className="aspect-video overflow-hidden bg-stone-200 mb-6 relative">
                             <img src={t.image} alt={t.location} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                         </div>
                         <div className="px-2">
                             <Quote className="text-bronze-500 mb-4 w-8 h-8 opacity-80" />
                             <p className="font-serif text-2xl text-stone-800 leading-snug mb-6">
                                 "{t.text}"
                             </p>
                             <div className="flex items-baseline justify-between border-t border-stone-200 pt-4">
                                 <span className="text-sm font-bold uppercase tracking-widest text-stone-900">{t.author}</span>
                                 <span className="text-xs text-stone-500">{t.location}</span>
                             </div>
                         </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};