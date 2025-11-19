
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ArtMode = 'gold' | 'paint' | 'noir' | 'concrete' | 'iridescent';

export interface ArtConfig {
  // Dynamics
  flowSpeed: number;
  turbulence: number;
  viscosity: number;
  displacementScale: number;
  
  // Surface Physics
  metalness: number;
  roughness: number;
  clearcoat: number;
  iridescence: number;
  
  // Colors
  colorPrimary: string;
  colorSecondary: string;
}

interface ArtContextType {
  mode: ArtMode;
  setMode: (m: ArtMode) => void;
  config: ArtConfig;
  updateConfig: (key: keyof ArtConfig, value: number | string) => void;
  resetToPreset: () => void;
}

const PRESETS: Record<ArtMode, ArtConfig> = {
    gold: {
        flowSpeed: 1.0, turbulence: 1.0, viscosity: 1.0, displacementScale: 1.0,
        metalness: 1.0, roughness: 0.15, clearcoat: 1.0, iridescence: 0.0,
        colorPrimary: '#B59457', colorSecondary: '#AA8853'
    },
    paint: {
        flowSpeed: 2.0, turbulence: 1.2, viscosity: 0.8, displacementScale: 1.2,
        metalness: 0.1, roughness: 0.2, clearcoat: 1.0, iridescence: 0.0,
        colorPrimary: '#E74C3C', colorSecondary: '#3498DB'
    },
    noir: {
        flowSpeed: 0.5, turbulence: 0.5, viscosity: 1.5, displacementScale: 0.8,
        metalness: 0.8, roughness: 0.1, clearcoat: 1.0, iridescence: 0.0,
        colorPrimary: '#111111', colorSecondary: '#000000'
    },
    concrete: {
        flowSpeed: 0.0, turbulence: 2.0, viscosity: 2.0, displacementScale: 0.3,
        metalness: 0.0, roughness: 0.9, clearcoat: 0.0, iridescence: 0.0,
        colorPrimary: '#888888', colorSecondary: '#666666'
    },
    iridescent: {
        flowSpeed: 0.8, turbulence: 1.5, viscosity: 1.0, displacementScale: 1.0,
        metalness: 0.9, roughness: 0.1, clearcoat: 1.0, iridescence: 1.0,
        colorPrimary: '#ffffff', colorSecondary: '#ffffff'
    }
};

const ArtContext = createContext<ArtContextType | undefined>(undefined);

export const ArtProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setModeState] = useState<ArtMode>('gold');
  const [config, setConfig] = useState<ArtConfig>(PRESETS.gold);

  const setMode = (m: ArtMode) => {
      setModeState(m);
      setConfig(PRESETS[m]);
  };

  const updateConfig = (key: keyof ArtConfig, value: number | string) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };
  
  const resetToPreset = () => {
      setConfig(PRESETS[mode]);
  };

  return (
    <ArtContext.Provider value={{ mode, setMode, config, updateConfig, resetToPreset }}>
      {children}
    </ArtContext.Provider>
  );
};

export const useArt = () => {
  const context = useContext(ArtContext);
  if (!context) throw new Error("useArt must be used within ArtProvider");
  return context;
};
