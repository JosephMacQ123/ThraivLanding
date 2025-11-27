
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Zap, Mail, MousePointer2, FileText, Package, Layers, AlertTriangle, BarChart3, Search, MessageSquare, Shield, ChevronDown } from 'lucide-react';
import { Button } from './UI';
import { COPY } from '../constants';

const Tooltip: React.FC<{ text: string }> = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 10, scale: 0.9 }}
    className="absolute -top-16 left-1/2 -translate-x-1/2 bg-thraiv-navy text-white text-sm font-medium py-3 px-5 rounded-lg shadow-xl whitespace-nowrap z-50 pointer-events-none border border-blue-500/30"
  >
    {text}
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-thraiv-navy rotate-45 border-b border-r border-blue-500/30"></div>
  </motion.div>
);

const FlowItem: React.FC<{ icon: any, label: string, status: string, delay?: number }> = ({ icon: Icon, label, status, delay = 0 }) => (
  <motion.div 
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
    className="bg-white/80 backdrop-blur-sm border border-gray-100 p-3 rounded-xl flex items-center gap-3 shadow-sm mb-3"
  >
    <div className="p-2 bg-blue-50 rounded-lg text-thraiv-blue">
      <Icon size={18} />
    </div>
    <div className="flex-1">
      <div className="text-sm font-bold text-gray-800">{label}</div>
      <div className="text-xs text-gray-500">{status}</div>
    </div>
    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
  </motion.div>
);

interface HeroProps {
  onBookAudit?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookAudit }) => {
  const [phase, setPhase] = useState<0 | 1 | 2>(0); // 0: Capture, 1: Automate, 2: Insight
  const [isPaused, setIsPaused] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3 as 0 | 1 | 2);
    }, 5000); 
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePhaseClick = (newPhase: 0 | 1 | 2) => {
    setPhase(newPhase);
    setIsPaused(true); 
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-32 md:pb-20 overflow-hidden">
      {/* MAGICAL EFFECTS - Balanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small Fast Particles - Refined */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute rounded-full bg-blue-400/40"
            style={{
              width: `${3 + (i % 4)}px`,
              height: `${3 + (i % 4)}px`,
              left: `${(i * 3.3) % 100}%`,
              top: `${(i * 3.5) % 100}%`,
            }}
            animate={{
              x: [0, ((i % 2) - 0.5) * 180, ((i % 3) - 1) * 140, 0],
              y: [0, ((i % 3) - 1) * 160, ((i % 2) - 0.5) * 200, 0],
              scale: [1, 1.6, 1.4, 1],
              opacity: [0.3, 0.6, 0.4, 0.3],
            }}
            transition={{
              duration: 14 + (i % 6),
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Larger Slow Orbs - Refined */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-md"
            style={{
              width: `${20 + (i * 4)}px`,
              height: `${20 + (i * 4)}px`,
              left: `${(i * 8 + 5) % 100}%`,
              top: `${(i * 8.5 + 3) % 100}%`,
            }}
            animate={{
              x: [0, ((i % 2) - 0.5) * 220, ((i % 3) - 1) * 180, 0],
              y: [0, ((i % 3) - 1) * 200, ((i % 2) - 0.5) * 250, 0],
              scale: [1, 1.25, 1.1, 1],
              opacity: [0.2, 0.4, 0.3, 0.2],
            }}
            transition={{
              duration: 24 + (i * 2),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Sparkle Effects - Refined */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${(i * 5.5 + 2) % 100}%`,
              top: `${(i * 5.5 + 1.5) % 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: (i * 0.4) % 5,
              repeatDelay: 3.5 + ((i * 0.5) % 3),
            }}
          />
        ))}

        {/* Light Beams - Refined */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            className="absolute w-0.5 h-80 bg-gradient-to-b from-transparent via-blue-400/40 to-transparent"
            style={{
              left: `${15 + i * 20}%`,
              top: '-15%',
              transform: 'rotate(25deg)',
            }}
            animate={{
              opacity: [0, 0.5, 0],
              y: ['0%', '150%'],
            }}
            transition={{
              duration: 9 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Enhanced Gradient Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-50/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center relative z-10">

        {/* Left Content */}
        <div className="relative z-10 order-1 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Trust Badge - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 150 }}
              className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200/60 text-blue-700 text-xs md:text-sm font-bold mb-6 md:mb-8 shadow-lg shadow-blue-200/30 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Shield size={16} className="text-blue-600" />
              </motion.div>
              Built for $1M-$50M Businesses
            </motion.div>

            {/* Headline - MAXIMUM MAGICAL TREATMENT */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8 md:mb-12 relative"
            >
              {/* Refined Pulsing Ambient Glow */}
              <motion.div
                className="absolute -inset-12 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-blue-500/30 blur-3xl rounded-full"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -inset-6 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 blur-2xl rounded-full"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />

              {/* Animated Gradient Headline */}
              <span
                className="block text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 relative"
                style={{
                  background: 'linear-gradient(90deg, #0F1C3F 0%, #2676FF 25%, #7C3AED 50%, #2676FF 75%, #0F1C3F 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'gradientShift 8s ease infinite',
                  textShadow: `
                    0 1px 0 rgba(15, 28, 63, 0.1),
                    0 2px 0 rgba(15, 28, 63, 0.08),
                    0 3px 0 rgba(15, 28, 63, 0.06),
                    0 4px 0 rgba(15, 28, 63, 0.04),
                    0 5px 0 rgba(15, 28, 63, 0.02),
                    0 6px 12px rgba(38, 118, 255, 0.2)
                  `
                }}
              >
                Fast Operations Win.
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 leading-[1.4] max-w-3xl relative">
                The Delays You Think Are Normal Are Costing You the Most.
              </span>
            </motion.h1>

            <style>{`
              @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-4"
            >
              <Button
                icon={<ArrowRight size={20} />}
                onClick={onBookAudit}
                className="shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 text-lg px-8 py-6"
              >
                {COPY.HERO.CTA}
              </Button>
              <p className="text-gray-600 text-base md:text-lg font-medium">
                {COPY.HERO.CTA_SUBTEXT}
              </p>

              {/* Social Proof at CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-2 text-sm text-gray-500 pt-2"
              >
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">27</div>
                </div>
                <span className="font-medium">
                  businesses growing <span className="text-thraiv-navy font-bold">2.4x faster</span>
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Animation Canvas */}
        <div className="relative min-h-[400px] lg:min-h-[600px] w-full flex flex-col items-center justify-center order-2 lg:order-2">
          {/* Context Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-6"
          >
            <span className="text-xs md:text-sm uppercase tracking-widest text-blue-600 font-bold">
              Live System Preview
            </span>
            <p className="text-sm md:text-base text-gray-500 mt-1 font-medium">
              Click to explore each phase →
            </p>
          </motion.div>

          {/* Background Aura */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/40 to-transparent rounded-full blur-3xl" />
          
          <div 
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl shadow-blue-900/10 border border-white/50 backdrop-blur-sm p-6 overflow-hidden transition-all duration-300 hover:shadow-blue-900/20"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => { setIsPaused(false); setActiveTooltip(null); }}
          >
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest">
                {isPaused ? <span className="flex items-center gap-1 text-thraiv-blue"><MousePointer2 size={10} /> Interactive</span> : <span>Live System</span>}
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="relative h-[300px] lg:h-[380px]">
              <AnimatePresence mode="wait">
                
                {/* PHASE 1: CAPTURE (SPEED) */}
                {phase === 0 && (
                  <motion.div
                    key="capture"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-thraiv-navy mb-2">Watches Everything</h3>
                      <p className="text-sm md:text-base text-gray-500 font-medium">Every signal captured the moment it happens.</p>
                    </div>

                    <div className="relative flex-1">
                      {/* Central Hub */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <motion.div 
                          animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0 0px rgba(38, 118, 255, 0.2)", "0 0 0 20px rgba(38, 118, 255, 0)", "0 0 0 0px rgba(38, 118, 255, 0)"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-20 h-20 bg-thraiv-blue rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30"
                        >
                          <Layers size={32} />
                        </motion.div>
                      </div>

                      {/* Inputs flying in - SLOWED DOWN & LARGER */}
                      <motion.div 
                        className="absolute top-4 left-0" 
                        animate={{ x: [0, 100], y: [0, 80], opacity: [0, 1, 0], scale: [1.2, 0.8, 0] }} 
                        transition={{ duration: 4, repeat: Infinity, delay: 0, ease: "easeInOut" }}
                      >
                        <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 transform scale-110">
                           <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Mail size={24} /></div>
                           <span className="text-sm font-bold text-gray-800">New Lead</span>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="absolute top-1/2 left-[-20px]" 
                        animate={{ x: [0, 120], opacity: [0, 1, 0], scale: [1.2, 0.8, 0] }} 
                        transition={{ duration: 4.5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                      >
                         <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 transform scale-110">
                           <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><FileText size={24} /></div>
                           <span className="text-sm font-bold text-gray-800">RFQ #902</span>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="absolute bottom-4 left-0" 
                        animate={{ x: [0, 100], y: [0, -80], opacity: [0, 1, 0], scale: [1.2, 0.8, 0] }} 
                        transition={{ duration: 3.8, repeat: Infinity, delay: 2.2, ease: "easeInOut" }}
                      >
                         <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 transform scale-110">
                           <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Package size={24} /></div>
                           <span className="text-sm font-bold text-gray-800">New Order</span>
                        </div>
                      </motion.div>

                       {/* Processed Outputs fading out right */}
                       <motion.div className="absolute top-10 right-0" animate={{ x: [0, 50], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
                          <div className="text-xs text-green-600 font-bold flex items-center gap-1"><CheckCircle size={12} /> Captured</div>
                       </motion.div>
                    </div>

                    <div className="mt-auto bg-gray-50 rounded-xl p-3 flex justify-between items-center border border-gray-100">
                       <span className="text-xs font-medium text-gray-500">System Status</span>
                       <span className="text-sm font-bold text-thraiv-blue flex items-center gap-2">
                         <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"/> All Inputs Active
                       </span>
                    </div>
                  </motion.div>
                )}

                {/* PHASE 2: AUTOMATE (TRUST) */}
                {phase === 1 && (
                  <motion.div
                    key="automate"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col"
                  >
                     <div className="text-center mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-thraiv-navy mb-2">Works For You</h3>
                      <p className="text-sm md:text-base text-gray-500 font-medium">Quotes drafted, emails sent, questions answered, leads engaged, tasks complete.</p>
                    </div>

                    <div className="flex-1 overflow-y-auto px-1">
                      <FlowItem icon={FileText} label="Auto-Quote Generated" status="Sent to Customer (2s)" delay={0} />
                      <FlowItem icon={Mail} label="Order Confirmation" status="Emailed to John D." delay={0.2} />
                      <FlowItem icon={Search} label="Stock Check" status="Inventory Reserved" delay={0.4} />
                      <FlowItem icon={MessageSquare} label="Lead Response" status="Meeting Link Sent" delay={0.6} />
                    </div>

                    <motion.div 
                      className="mt-4 bg-thraiv-navy text-white p-4 rounded-xl flex items-center justify-between shadow-lg cursor-help"
                      onMouseEnter={() => setActiveTooltip("saved")}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                       {activeTooltip === "saved" && <Tooltip text="Hours returned to your team this week." />}
                       <div className="flex items-center gap-3">
                          <div className="p-2 bg-white/10 rounded-lg"><Clock size={20} className="text-blue-300" /></div>
                          <div>
                            <div className="text-xs text-gray-400 uppercase">Admin Time Saved</div>
                            <div className="font-bold text-lg">14.5 Hours</div>
                          </div>
                       </div>
                       <div className="text-green-400 text-sm font-bold">+12% vs last week</div>
                    </motion.div>
                  </motion.div>
                )}

                {/* PHASE 3: INSIGHT (VISIBILITY/DELAY) */}
                {phase === 2 && (
                  <motion.div
                    key="insight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-thraiv-navy mb-2">Surfaces Insights</h3>
                      <p className="text-sm md:text-base text-gray-500 font-medium">See problems instantly. Act before they cost you. One source of truth.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-center">
                           <div className="text-gray-400 text-xs uppercase mb-1">Avg Response</div>
                           <div className="text-2xl font-bold text-thraiv-navy">4.2m</div>
                           <div className="text-xs text-green-500 flex justify-center items-center gap-1">
                             <Zap size={10} /> Top 1%
                           </div>
                        </div>
                        <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm text-center">
                           <div className="text-gray-400 text-xs uppercase mb-1">Order Accuracy</div>
                           <div className="text-2xl font-bold text-thraiv-navy">99.8%</div>
                           <div className="text-xs text-blue-500">System Verified</div>
                        </div>
                    </div>

                    <motion.div 
                       initial={{ scale: 0.9, opacity: 0 }}
                       animate={{ scale: 1, opacity: 1 }}
                       transition={{ delay: 0.5 }}
                       className="bg-red-50 border border-red-100 p-4 rounded-xl flex items-center gap-4 mb-4"
                    >
                        <div className="p-2 bg-white rounded-full text-red-500 shadow-sm">
                           <AlertTriangle size={20} />
                        </div>
                        <div className="flex-1">
                           <div className="font-bold text-red-900 text-sm">Bottleneck Detected</div>
                           <div className="text-xs text-red-600">Quote #2291 pending approval &gt; 4 hours.</div>
                        </div>
                        <button className="text-xs bg-white border border-red-200 text-red-600 px-3 py-1.5 rounded-lg font-medium hover:bg-red-50">
                           Nudge
                        </button>
                    </motion.div>

                    <div className="mt-auto bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center justify-between text-xs text-gray-500">
                       <span className="flex items-center gap-2"><BarChart3 size={14} /> Live Analytics</span>
                       <span>Updated: Just now</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Interactive Control Panel */}
            <div className="mt-6 border-t border-gray-100 pt-4">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Watches", sub: "Speed", icon: <Layers size={14} />, color: "bg-blue-500" },
                  { label: "Works", sub: "Growth", icon: <Zap size={14} />, color: "bg-purple-500" },
                  { label: "Surfaces", sub: "Insights", icon: <BarChart3 size={14} />, color: "bg-green-500" },
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handlePhaseClick(i as 0 | 1 | 2)}
                    className={`relative p-2 rounded-xl text-left transition-all duration-300 group overflow-hidden
                      ${phase === i ? 'bg-gray-50 ring-1 ring-gray-200' : 'hover:bg-gray-50'}
                    `}
                  >
                    <div className="flex items-center gap-2 mb-1 relative z-10">
                       <span className={`${phase === i ? 'text-thraiv-blue' : 'text-gray-400'}`}>{item.icon}</span>
                       <span className={`text-xs font-bold uppercase tracking-wider ${phase === i ? 'text-gray-900' : 'text-gray-400'}`}>{item.label}</span>
                    </div>
                    <div className={`text-[10px] pl-6 ${phase === i ? 'text-gray-500' : 'text-gray-300'}`}>{item.sub}</div>
                    
                    {phase === i && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className={`absolute bottom-0 left-0 h-0.5 w-full ${item.color}`} 
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Hint - Bouncing Animation - Hidden on mobile, shows on tablet+ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden md:flex absolute bottom-16 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-400 cursor-default z-20"
      >
        <span className="text-sm md:text-base font-medium">Discover How</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg"
        >
          <ChevronDown size={20} className="text-thraiv-blue" />
        </motion.div>
      </motion.div>
    </section>
  );
};
