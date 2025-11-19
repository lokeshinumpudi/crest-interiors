import React from 'react';
import { CRAFT_DETAILS } from '../constants';
import { motion } from 'framer-motion';

export const CraftDetails: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100 border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-lg">
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">God is in the details.</h2>
                <p className="text-stone-600">It is the invisible things—the shadow gaps, the hardware, the grain alignment—that create the feeling of luxury.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CRAFT_DETAILS.map((item, index) => (
                <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group"
                >
                    <div className="overflow-hidden aspect-square bg-stone-300 mb-4">
                        <img 
                            src={item.image} 
                            alt={item.caption} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-stone-500 border-l border-bronze-500 pl-3">
                        {item.caption}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};