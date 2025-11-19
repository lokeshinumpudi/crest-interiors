import React from 'react';
import { CRAFT_DETAILS } from '../constants';
import { motion } from 'framer-motion';

export const CraftDetails: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100 border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-lg">
                <span className="text-xs uppercase tracking-widest text-bronze-500 mb-2 block">Craftsmanship</span>
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">God is in the details.</h2>
                <p className="text-stone-600">It is the invisible things—the shadow gaps, the hardware, the grain alignment—that create the feeling of luxury.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CRAFT_DETAILS.map((item, index) => (
                <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                    className="group flex flex-col h-full cursor-default bg-white p-4 shadow-sm hover:shadow-lg transition-all duration-500 rounded-sm relative"
                >
                    <div className="overflow-hidden aspect-square bg-stone-300 mb-6 shadow-inner transition-all duration-500">
                        <img 
                            src={item.image} 
                            alt={item.caption} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    
                    {/* Molten Hover Border Container */}
                    <div className="relative pl-4 transition-colors duration-300">
                        {/* Static Border */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-stone-200" />
                        {/* Molten Animated Border - Reveals on Hover */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] molten-vertical opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <p className="text-sm font-medium text-stone-800 group-hover:text-stone-900 transition-colors leading-relaxed">
                            {item.caption}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};