import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-50/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      {/* Molten Bottom Border */}
      <div className={`absolute bottom-0 left-0 w-full h-[2px] molten-horizontal transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

      <div className="container mx-auto px-6 flex justify-between items-center relative">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-2xl font-serif font-semibold tracking-tight text-stone-900"
        >
          Crest Interiors<span className="text-bronze-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm uppercase tracking-widest text-stone-800 hover:text-bronze-500 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="bg-stone-900 text-stone-50 px-5 py-2 text-sm uppercase tracking-wider hover:bg-bronze-500 transition-colors duration-300 cursor-pointer"
          >
            Book Consult
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-stone-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-50 border-t border-stone-200 absolute w-full shadow-lg overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-serif text-stone-900"
                >
                  {link.name}
                </a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                whileTap={{ scale: 0.98 }}
                className="inline-block text-center w-full bg-stone-900 text-stone-50 px-5 py-3 uppercase tracking-wider"
              >
                Book Consult
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};