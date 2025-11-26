import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { STORY_CARDS, COLORS } from '../constants';

export const StoryScroller: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-thraiv-navy">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Particles/Lines */}
        <div className="absolute inset-0 opacity-20">
             <svg className="w-full h-full">
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
               </pattern>
               <rect width="100%" height="100%" fill="url(#grid)" />
             </svg>
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6">
          {STORY_CARDS.map((card, index) => {
             // Calculate range for each card to appear and disappear
             const start = index / STORY_CARDS.length;
             const end = (index + 1) / STORY_CARDS.length;
             const mid = (start + end) / 2;
             
             // eslint-disable-next-line react-hooks/rules-of-hooks
             const opacity = useTransform(scrollYProgress, 
               [start, start + 0.05, end - 0.05, end], 
               [0, 1, 1, 0]
             );
             
             // eslint-disable-next-line react-hooks/rules-of-hooks
             const scale = useTransform(scrollYProgress,
               [start, mid, end],
               [0.8, 1, 0.8]
             );

             // eslint-disable-next-line react-hooks/rules-of-hooks
             const y = useTransform(scrollYProgress,
               [start, end],
               [50, -50]
             );

             return (
               <motion.div
                 key={card.id}
                 style={{ opacity, scale, y }}
                 className={`absolute inset-0 flex items-center justify-center text-center pointer-events-none`}
               >
                 <h2 className={`text-4xl md:text-6xl font-bold leading-tight ${card.highlight ? 'text-thraiv-blue' : 'text-white'}`}>
                   {card.text}
                 </h2>
               </motion.div>
             );
          })}
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm flex flex-col items-center gap-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
          <span>Keep Scrolling</span>
        </motion.div>
      </div>
    </section>
  );
};
