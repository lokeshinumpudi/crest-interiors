
import React, { useState } from 'react';
import { Settings2, X, RefreshCw, Palette, Sliders, Layers, Zap } from 'lucide-react';
import { useArt, ArtMode } from '../context/ArtContext';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'style' | 'surface' | 'dynamics' | 'color';

export const ArtSettings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('style');
  const { mode, setMode, config, updateConfig, resetToPreset } = useArt();

  const modes: { id: ArtMode; label: string }[] = [
      { id: 'gold', label: 'Liquid Gold' },
      { id: 'paint', label: 'Drip Paint' },
      { id: 'noir', label: 'Noir Gloss' },
      { id: 'concrete', label: 'Concrete' },
      { id: 'iridescent', label: 'Holo' },
  ];

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
            className="fixed bottom-20 left-6 z-[50] w-80 bg-white/95 backdrop-blur-xl p-0 rounded-xl shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[600px]"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-stone-100">
                <h3 className="font-serif text-lg text-stone-900 flex items-center gap-2">
                    Designer Pad <span className="text-[10px] bg-stone-100 px-2 py-1 rounded-full uppercase tracking-widest text-stone-500">Beta</span>
                </h3>
                <div className="flex gap-2">
                    <button onClick={resetToPreset} className="text-stone-400 hover:text-bronze-500" title="Reset to Preset"><RefreshCw size={16}/></button>
                    <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-stone-900"><X size={18}/></button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-stone-100 bg-stone-50">
                <button onClick={() => setActiveTab('style')} className={`flex-1 py-3 text-xs uppercase font-bold transition-colors flex items-center justify-center gap-1 ${activeTab === 'style' ? 'bg-white text-bronze-500 border-b-2 border-bronze-500' : 'text-stone-400'}`}><Layers size={14}/> Style</button>
                <button onClick={() => setActiveTab('surface')} className={`flex-1 py-3 text-xs uppercase font-bold transition-colors flex items-center justify-center gap-1 ${activeTab === 'surface' ? 'bg-white text-bronze-500 border-b-2 border-bronze-500' : 'text-stone-400'}`}><Sliders size={14}/> Surface</button>
                <button onClick={() => setActiveTab('dynamics')} className={`flex-1 py-3 text-xs uppercase font-bold transition-colors flex items-center justify-center gap-1 ${activeTab === 'dynamics' ? 'bg-white text-bronze-500 border-b-2 border-bronze-500' : 'text-stone-400'}`}><Zap size={14}/> Flow</button>
                <button onClick={() => setActiveTab('color')} className={`flex-1 py-3 text-xs uppercase font-bold transition-colors flex items-center justify-center gap-1 ${activeTab === 'color' ? 'bg-white text-bronze-500 border-b-2 border-bronze-500' : 'text-stone-400'}`}><Palette size={14}/> Color</button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto">
                
                {/* TAB: STYLE */}
                {activeTab === 'style' && (
                    <div className="grid grid-cols-2 gap-2">
                        {modes.map(m => (
                            <button 
                                key={m.id}
                                onClick={() => setMode(m.id)}
                                className={`py-3 px-4 text-xs uppercase font-bold rounded-lg transition-all text-left ${mode === m.id ? 'bg-stone-900 text-white shadow-md' : 'bg-stone-100 text-stone-500 hover:bg-stone-200'}`}
                            >
                                {m.label}
                            </button>
                        ))}
                    </div>
                )}

                {/* TAB: SURFACE */}
                {activeTab === 'surface' && (
                    <div className="space-y-4">
                         <Slider label="Metalness" value={config.metalness} min={0} max={1} step={0.01} onChange={(v) => updateConfig('metalness', v)} />
                         <Slider label="Roughness" value={config.roughness} min={0} max={1} step={0.01} onChange={(v) => updateConfig('roughness', v)} />
                         <Slider label="Clearcoat" value={config.clearcoat} min={0} max={1} step={0.01} onChange={(v) => updateConfig('clearcoat', v)} />
                         <Slider label="Iridescence" value={config.iridescence} min={0} max={1} step={0.01} onChange={(v) => updateConfig('iridescence', v)} />
                    </div>
                )}

                {/* TAB: DYNAMICS */}
                {activeTab === 'dynamics' && (
                     <div className="space-y-4">
                        <Slider label="Flow Speed" value={config.flowSpeed} min={0} max={5} step={0.1} onChange={(v) => updateConfig('flowSpeed', v)} />
                        <Slider label="Turbulence" value={config.turbulence} min={0} max={3} step={0.1} onChange={(v) => updateConfig('turbulence', v)} />
                        <Slider label="Viscosity (Scale)" value={config.viscosity} min={0.1} max={5} step={0.1} onChange={(v) => updateConfig('viscosity', v)} />
                        <Slider label="Depth" value={config.displacementScale} min={0} max={3} step={0.1} onChange={(v) => updateConfig('displacementScale', v)} />
                    </div>
                )}

                 {/* TAB: COLOR */}
                 {activeTab === 'color' && (
                    <div className="space-y-6">
                        <div>
                            <label className="text-xs uppercase text-stone-500 mb-2 block">Primary Color</label>
                            <div className="flex gap-3 items-center">
                                <input 
                                    type="color" 
                                    value={config.colorPrimary}
                                    onChange={(e) => updateConfig('colorPrimary', e.target.value)}
                                    className="w-10 h-10 rounded-full overflow-hidden border-0 p-0 cursor-pointer shadow-sm"
                                />
                                <span className="text-xs font-mono bg-stone-100 px-2 py-1 rounded">{config.colorPrimary}</span>
                            </div>
                        </div>
                         <div>
                            <label className="text-xs uppercase text-stone-500 mb-2 block">Secondary Color</label>
                             <div className="flex gap-3 items-center">
                                <input 
                                    type="color" 
                                    value={config.colorSecondary}
                                    onChange={(e) => updateConfig('colorSecondary', e.target.value)}
                                    className="w-10 h-10 rounded-full overflow-hidden border-0 p-0 cursor-pointer shadow-sm"
                                />
                                <span className="text-xs font-mono bg-stone-100 px-2 py-1 rounded">{config.colorSecondary}</span>
                            </div>
                        </div>
                         <div className="text-[10px] text-stone-400 mt-4 leading-relaxed">
                             Note: 'Drip Paint' mode uses these colors to generate a random palette lane pattern. Other modes use Primary Color as base.
                         </div>
                    </div>
                 )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Slider = ({ label, value, min, max, step, onChange }: { label: string, value: number, min: number, max: number, step: number, onChange: (v: number) => void }) => (
    <div>
        <div className="flex justify-between text-xs uppercase text-stone-500 mb-1">
            <span>{label}</span>
            <span>{value.toFixed(2)}</span>
        </div>
        <input 
            type="range" min={min} max={max} step={step}
            value={value}
            onChange={(e) => onChange(parseFloat(e.target.value))}
            className="w-full accent-stone-900 h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer"
        />
    </div>
);
