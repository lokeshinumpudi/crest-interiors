
import React, { useState, useRef, useLayoutEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetail';
import { CraftDetails } from './components/CraftDetails';
import { WhatsAppButton } from './components/WhatsAppButton';
import { FAQ } from './components/FAQ';
import { ArtSettings } from './components/ArtSettings';
import { PROJECTS } from './constants';
import { AnimatePresence } from 'framer-motion';
import { ArtProvider } from './context/ArtContext';

const App: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const scrollPosition = useRef(0);
  const isNavigatingToContact = useRef(false);

  const handleProjectSelect = (id: string) => {
    scrollPosition.current = window.scrollY;
    setActiveProjectId(id);
  };

  const handleClose = () => {
    setActiveProjectId(null);
  };

  const handleContact = () => {
    isNavigatingToContact.current