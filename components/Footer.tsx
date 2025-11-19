import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-600 py-12 border-t border-stone-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="font-serif text-stone-400 text-xl mb-2">Studio Object.</p>
          <p className="text-xs text-stone-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-bronze-500 transition-colors"><Instagram size={20} /></a>
          <a href="#" className="hover:text-bronze-500 transition-colors"><Facebook size={20} /></a>
          <a href="#" className="hover:text-bronze-500 transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
    </footer>
  );
};