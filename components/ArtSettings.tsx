
import React, { useState } from 'react';
import { Settings2, X } from 'lucide-react';
import { useArt } from '../context/ArtContext';
import { motion, AnimatePresence } from 'framer-motion';

export const ArtSettings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, setMode, config, updateConfig } = useArt();

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[50] bg-white/80 backdrop-blur text-stone-900 p-3 rounded-full shadow-lg hover:bg-stone-900 hover:text-white transition-colors"
      >
        <Settings2 size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed bottom-20 left-6 z-[50] w-72 bg-white/90 backdrop-blur-xl p-6 rounded-xl shadow-2xl border border-white/20"
          >
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-serif text-lg text-stone-900">Art Director</h3>
                <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-stone-900"><X size={18}/></button>
            </div>

            {/* Mode Toggle */}
            <div className="flex bg-stone-200 p-1 rounded-lg mb-6">
                <button 
                    onClick={() => setMode('gold')}
                    className={`flex-1 py-2 text-xs uppercase font-bold rounded-md transition-all ${mode === 'gold' ? 'bg-white shadow-sm text-bronze-500' : 'text-stone-500 hover:text-stone-900'}`}
                >
                    Liquid Gold
                </button>
                <button 
                    onClick={() => setMode('paint')}
                    className={`flex-1 py-2 text-xs uppercase font-bold rounded-md transition-all ${mode === 'paint' ? 'bg-white shadow-sm text-pink-500' : 'text-stone-500 hover:text-stone-900'}`}
                >
                    Drip Paint
                </button>
            </div>

            {/* Sliders */}
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-xs uppercase text-stone-500 mb-1">
                        <span>Flow Speed</span>
                        <span>{config.flowSpeed.toFixed(1)}x</span>
                    </div>
                    <input 
                        type="range" min="0.1" max="5.0" step="0.1"
                        value={config.flowSpeed}
                        onChange={(e) => updateConfig('flowSpeed', parseFloat(e.target.value))}
                        className="w-full accent-stone-900 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
                <div>
                    <div className="flex justify-between text-xs uppercase text-stone-500 mb-1">
                        <span>Turbulence</span>
                        <span>{config.turbulence.toFixed(1)}x</span>
                    </div>
                    <input 
                        type="range" min="0" max="3.0" step="0.1"
                        value={config.turbulence}
                        onChange={(e) => updateConfig('turbulence', parseFloat(e.target.value))}
                        className="w-full accent-stone-900 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
                 <div>
                    <div className="flex justify-between text-xs uppercase text-stone-500 mb-1">
                        <span>Viscosity (Scale)</span>
                        <span>{config.viscosity.toFixed(1)}x</span>
                    </div>
                    <input 
                        type="range" min="0.5" max="3.0" step="0.1"
                        value={config.viscosity}
                        onChange={(e) => updateConfig('viscosity', parseFloat(e.target.value))}
                        className="w-full accent-stone-900 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 text-[10px] text-stone-400 text-center">
                Adjust the physics of the hero wall.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
