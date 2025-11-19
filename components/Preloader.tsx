import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2 second brand reveal before lifting the curtain
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] bg-stone-950 flex items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-center relative"
          >
             <h1 className="font-serif text-4xl md:text-6xl text-stone-50 mb-4">Crest Interiors<span className="text-bronze-500">.</span></h1>
             <div className="h-[1px] w-0 bg-bronze-500 mx-auto mb-4 animate-[molten-horizontal_2s_ease-out_forwards] w-full" />
             <p className="text-stone-500 text-xs uppercase tracking-[0.3em]">Premium Interiors Hyderabad</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};