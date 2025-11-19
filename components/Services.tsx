import React from 'react';
import { SERVICES } from '../constants';
import { PencilRuler, Hammer, Lightbulb, Palette, Layout, CheckCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const iconMap: Record<string, any> = {
  PencilRuler, Hammer, Lightbulb, Palette, Layout, CheckCircle
};

export const Services: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Header */}
          <div className="md:col-span-4">
            <div className="sticky top-32">
                <span className="text-xs uppercase tracking-widest text-bronze-500 mb-2 block">Expertise</span>
                <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">
                  Scope of Work
                </h2>
                {/* Molten Decorative Line */}
                <div className="h-[2px] w-24 molten-horizontal mb-8 rounded-full opacity-80" />
            </div>
          </div>

          {/* List */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14"
          >
            {SERVICES.map((service) => {
              const Icon = iconMap[service.iconName];
              return (
                <motion.div variants={itemVariant} key={service.id} className="flex flex-col items-start group">
                  <div className="mb-6 p-3 bg-stone-50 rounded-full text-stone-400 group-hover:text-bronze-500 group-hover:bg-bronze-50 transition-colors duration-300">
                    {Icon && <Icon size={24} strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-serif text-xl text-stone-900 mb-3">{service.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};