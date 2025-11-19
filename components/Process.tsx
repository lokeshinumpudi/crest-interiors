import React from 'react';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            <div className="md:col-span-4">
                <span className="text-xs font-bold uppercase tracking-widest text-bronze-500 mb-4 block">The Methodology</span>
                <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 sticky top-32">
                    From concept to keys.
                </h2>
            </div>

            <div className="md:col-span-8">
                <div className="space-y-12 relative">
                    {/* Vertical line */}
                    <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-stone-300 -z-10 hidden md:block" />

                    {PROCESS_STEPS.map((step) => (
                        <div key={step.id} className="flex flex-col md:flex-row gap-6 group">
                             <div className="w-10 h-10 rounded-full border border-stone-300 bg-stone-50 flex items-center justify-center text-sm font-serif shrink-0 group-hover:border-bronze-500 group-hover:text-bronze-500 transition-colors z-10">
                                 0{step.id}
                             </div>
                             <div className="pt-1">
                                 <h3 className="font-serif text-2xl text-stone-900 mb-2 group-hover:text-bronze-600 transition-colors">{step.title}</h3>
                                 <p className="text-stone-600 leading-relaxed max-w-xl">{step.description}</p>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};