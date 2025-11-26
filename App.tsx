
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Hero } from './components/Hero';
import { PainSection, FrictionSection, CostSection, DreamSection, OutcomesSection, AudienceSection, AuditSection, HowItWorksSection, TrustBar, FAQSection, UrgencySection, SectionTransition } from './components/Sections';
import { Button } from './components/UI';
import { AuditForm } from './components/AuditForm';

const Navbar: React.FC<{ onBookAudit: () => void }> = ({ onBookAudit }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-thraiv-navy tracking-tight flex items-center gap-2">
            <div className="w-6 h-6 bg-thraiv-blue rounded-md"></div>
            Thraiv.
        </div>

        {/* SUPER OBVIOUS AUDIT BUTTON */}
        <motion.button
          onClick={onBookAudit}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-thraiv-blue to-blue-600 text-white font-bold text-base md:text-lg rounded-xl md:rounded-2xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 flex items-center gap-2 group"
        >
          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-thraiv-blue to-blue-600 rounded-xl md:rounded-2xl blur-xl opacity-50"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <span className="relative z-10">Book Free Audit</span>
          <ArrowRight
            size={20}
            className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
          />
        </motion.button>
      </div>
    </motion.nav>
  );
};

const Footer: React.FC = () => (
    <footer className="bg-thraiv-navy text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold flex items-center gap-2">
                 <div className="w-6 h-6 bg-thraiv-blue rounded-md"></div>
                 Thraiv.
            </div>
            <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Thraiv Systems. All rights reserved.
            </div>
        </div>
    </footer>
);

export default function App() {
  const [showAuditForm, setShowAuditForm] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="antialiased text-thraiv-navy bg-white selection:bg-thraiv-blue selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-thraiv-blue origin-left z-50"
        style={{ scaleX }}
      />

      <Navbar onBookAudit={() => setShowAuditForm(true)} />
      
      <main>
        <Hero onBookAudit={() => setShowAuditForm(true)} />
        <TrustBar />
        <PainSection />
        <SectionTransition text="" theme="light" />
        <FrictionSection />
        <SectionTransition text="So how do we fix it?" theme="light" />
        <CostSection />
        <SectionTransition text="Imagine your business like this..." theme="dark" />
        <DreamSection />
        <SectionTransition text="Here's how it actually works." theme="light" />
        <HowItWorksSection />
        <SectionTransition text="What you actually get." theme="dark" />
        <OutcomesSection />
        <SectionTransition text="Is this for you?" theme="light" />
        <AudienceSection />
        <FAQSection />
        <SectionTransition text="One more thing..." theme="light" />
        <UrgencySection />
        <AuditSection onBookAudit={() => setShowAuditForm(true)} />
      </main>

      <Footer />

      {/* Audit Form Modal */}
      <AnimatePresence>
        {showAuditForm && (
          <AuditForm onClose={() => setShowAuditForm(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
