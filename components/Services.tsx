import React from 'react';
import { SERVICES } from '../constants';
import { PencilRuler, Hammer, Lightbulb, Palette, Layout, CheckCircle } from 'lucide-react';

const iconMap: Record<string, any> = {
  PencilRuler, Hammer, Lightbulb, Palette, Layout, CheckCircle
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Header */}
          <div className="md:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 sticky top-32">
              Scope of Work
            </h2>
          </div>

          {/* List */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.iconName];
              return (
                <div key={service.id} className="flex flex-col items-start border-t border-stone-200 pt-6">
                  <div className="mb-4 p-3 bg-stone-50 rounded-full text-stone-900">
                    {Icon && <Icon size={24} strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-serif text-2xl text-stone-900 mb-2">{service.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};