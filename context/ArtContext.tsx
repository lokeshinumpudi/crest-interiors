
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ArtMode = 'gold' | 'paint';

interface ArtConfig {
  flowSpeed: number;
  turbulence: number;
  viscosity: number;
}

interface ArtContextType {
  mode: ArtMode;
  setMode: (m: ArtMode) => void;
  config: ArtConfig;
  updateConfig: (key: keyof ArtConfig, value: number) => void;
}

const ArtContext = createContext<ArtContextType | undefined>(undefined);

export const ArtProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ArtMode>('gold');
  const [config, setConfig] = useState<ArtConfig>({
    flowSpeed: 1.0,
    turbulence: 1.0,
    viscosity: 1.0
  });

  const updateConfig = (key: keyof ArtConfig, value: number) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <ArtContext.Provider value={{ mode, setMode, config, updateConfig }}>
      {children}
    </ArtContext.Provider>
  );
};

export const useArt = () => {
  const context = useContext(ArtContext);
  if (!context) throw new Error("useArt must be used within ArtProvider");
  return context;
};
