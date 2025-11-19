
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  label?: string;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage, label }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (event: any, info: any) => {
    if (containerRef.current) {
      const { width } = containerRef.current.getBoundingClientRect();
      const x = info.point.x - containerRef.current.getBoundingClientRect().left;
      const percentage = Math.min(Math.max((x / width) * 100, 0), 100);
      setSliderPosition(percentage);
    }
  };

  // Handling click/touch to jump
  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
      if (containerRef.current) {
        const { left, width } = containerRef.current.getBoundingClientRect();
        let clientX;
        if ('touches' in e) {
             clientX = e.touches[0].clientX;
        } else {
             clientX = (e as React.MouseEvent).clientX;
        }
        const x = clientX - left;
        const percentage = Math.min(Math.max((x / width) * 100, 0), 100);
        setSliderPosition(percentage);
      }
  }

  return (
    <div className="w-full my-16 select-none">
      <div className="flex justify-between items-end mb-6">
          <h3 className="font-serif text-2xl md:text-3xl text-stone-900">The Transformation</h3>
          {label && <span className="text-stone-500 text-xs uppercase tracking-widest">{label}</span>}
      </div>

      <div 
        ref={containerRef}
        className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm cursor-ew-resize shadow-xl group"
        onMouseDown={handleClick}
        onTouchStart={handleClick}
      >
        {/* AFTER Image (Base Layer) */}
        <img 
            src={afterImage} 
            alt="After Renovation" 
            className="absolute inset-0 w-full h-full object-cover" 
            draggable={false}
        />
        <span className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">After</span>

        {/* BEFORE Image (Clipped Layer) */}
        <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
             <img 
                src={beforeImage} 
                alt="Before Renovation" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-90" 
                draggable={false}
            />
            <span className="absolute top-4 left-4 bg-stone-200/80 backdrop-blur-md text-stone-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full z-10">Before</span>
        </div>

        {/* Slider Handle */}
        <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%` }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-bronze-500">
                <ChevronsLeftRight size={18} />
            </div>
        </div>
        
        {/* Instructions */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
            Drag to compare
        </div>

      </div>
    </div>
  );
};
