
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            <div className="md:col-span-4">
                <span className="text-xs uppercase tracking-widest text-bronze-500 mb-2 block">Common Questions</span>
                <h2 className="font-serif text-4xl text-stone-900 mb-6">
                    Things you might<br/>be wondering.
                </h2>
                <p className="text-stone-600 text-lg">Transparency is key to our process. Here are answers to the most frequent queries we receive from homeowners in Hyderabad.</p>
            </div>

            <div className="md:col-span-8 max-w-3xl">
                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="bg-white rounded-sm border border-stone-200 overflow-hidden">
                            <button 
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-stone-50 transition-colors"
                            >
                                <span className="font-serif text-lg text-stone-900 pr-8">{faq.question}</span>
                                <span className="text-bronze-500 shrink-0">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-stone-600 leading-relaxed border-t border-stone-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
