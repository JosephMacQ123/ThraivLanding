
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Activity, ArrowRight, Zap, Check, FileText, MessageSquare, ShieldCheck, Search, LayoutDashboard, Brain, Cpu, Layers, CheckCircle, Mail, AlertTriangle, FileWarning, Gauge, ChevronRight, BarChart, TrendingUp, TrendingDown, Smile, Coins, Shield, User, Monitor, ChevronDown, Database } from 'lucide-react';
import { SectionHeader, Button } from './UI';
import { COPY, INDUSTRIES, AUDIT_POINTS, STORY_SECTIONS, IMPACT_METRICS, TRUST_POINTS, FINAL_CTA, FAQ_ITEMS, URGENCY } from '../constants';

/* -------------------------------------------------------------------------- */
/*                    TRANSITION & SCROLL MOMENTUM COMPONENTS                 */
/* -------------------------------------------------------------------------- */

// Reusable Scroll Hint Component
interface ScrollHintProps {
  text?: string;
  delay?: number;
}

const ScrollHint: React.FC<ScrollHintProps> = ({ text = "Keep scrolling", delay = 0.5 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay }}
      className="text-center mt-12"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex flex-col items-center gap-2 text-gray-400 cursor-default hover:text-gray-600 transition-colors"
      >
        <span className="text-sm font-medium uppercase tracking-wider">{text}</span>
        <ChevronDown size={24} />
      </motion.div>
    </motion.div>
  );
};

interface SectionTransitionProps {
  text: string;
  theme?: 'light' | 'dark';
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({ text, theme = 'light' }) => {
  if (!text || text.trim() === '') {
    return (
      <div className={`py-16 ${theme === 'light' ? 'bg-white' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-6 max-w-4xl mx-auto"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
            <span className="text-sm text-gray-400 font-medium">↓</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300" />
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`py-16 md:py-20 ${theme === 'light' ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mb-6">
            {text}
          </h3>
          <div className="flex items-center gap-6 max-w-2xl mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300" />
            <span className="text-base md:text-lg text-gray-400 font-medium">↓</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                                TRUST SECTION                               */
/* -------------------------------------------------------------------------- */
export const TrustBar: React.FC = () => {
  return (
    <section className="bg-white border-y border-gray-100 py-8 md:py-12 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center justify-center max-w-7xl mx-auto">
            {TRUST_POINTS.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center gap-2 group cursor-default p-3 md:p-4 rounded-xl hover:bg-blue-50 transition-all duration-300"
                >
                    <div className="p-2 md:p-3 bg-blue-50 text-thraiv-blue rounded-full mb-1 md:mb-2 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                        <item.icon size={18} strokeWidth={2} className="md:w-5 md:h-5" />
                    </div>
                    <div>
                        <div className="font-bold text-thraiv-navy text-xs md:text-sm leading-tight group-hover:text-thraiv-blue transition-colors">{item.label}</div>
                        <div className="text-[10px] md:text-xs text-gray-500 font-medium mt-0.5 md:mt-1">{item.value}</div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                                PAIN SECTION                                */
/* -------------------------------------------------------------------------- */
export const PainSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Headline - As Extension of Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 mb-2 md:mb-3">
            {COPY.PAIN.HEADLINE}
          </h2>
        </motion.div>

        {/* Cards - Compact 3-column grid on mobile */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {COPY.PAIN.CARDS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px", amount: 0.2 }}
              transition={{
                delay: i * 0.02,
                duration: 0.3,
                type: "spring",
                stiffness: 120,
                damping: 15
              }}
              className={`
                bg-white p-2 md:p-3 rounded-lg md:rounded-xl shadow-md border-l-2 md:border-l-4
                flex flex-col items-center justify-center text-center gap-1 md:gap-2
                hover:shadow-lg transition-all duration-300 relative
                min-h-[80px] md:min-h-[100px]
              `}
              style={{
                borderLeftColor: item.color === 'red' ? '#EF4444' : '#F59E0B'
              }}
            >
              <div className={`p-1.5 md:p-2 rounded-lg flex-shrink-0 ${item.color === 'red' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'}`}>
                <item.icon size={16} className="md:w-5 md:h-5" />
              </div>
              <span className="font-bold text-gray-800 text-[10px] md:text-sm leading-tight">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Scroll Hint */}
        <ScrollHint text="See what's causing this" delay={1} />
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                         OPERATIONAL FRICTION SECTION                       */
/* -------------------------------------------------------------------------- */

// Animated Counter Component
const AnimatedCounter: React.FC<{ target: string; duration?: number }> = ({ target, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  const [isInView, setIsInView] = React.useState(false);

  // Parse target time (e.g., "4h 23m" -> total minutes)
  const parseTime = (timeStr: string) => {
    const hours = timeStr.match(/(\d+)h/);
    const minutes = timeStr.match(/(\d+)m/);
    return (hours ? parseInt(hours[1]) * 60 : 0) + (minutes ? parseInt(minutes[1]) : 0);
  };

  const targetMinutes = parseTime(target);

  React.useEffect(() => {
    if (!isInView) return;

    const increment = targetMinutes / (duration * 60); // 60 frames per second
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetMinutes) {
        setCount(targetMinutes);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, targetMinutes, duration]);

  const formatTime = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsInView(true)}
      className="text-3xl md:text-4xl font-black text-red-600 font-mono"
    >
      ⏱ {formatTime(count)}
    </motion.div>
  );
};

// Delay Bar Component
const DelayBar: React.FC<{ percentage: number; color: string; delay?: number }> = ({ percentage, color, delay = 0 }) => {
  return (
    <div className="relative w-full h-16 bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #000 0, #000 1px, transparent 1px, transparent 10px)' }} />
      </div>

      {/* Animated fill */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{
          delay,
          duration: 2,
          ease: [0.34, 1.56, 0.64, 1],
          type: "spring",
          stiffness: 50
        }}
        className="absolute inset-y-0 left-0 rounded-2xl shadow-lg"
        style={{
          background: `linear-gradient(90deg, ${color} 0%, ${color}dd 100%)`,
        }}
      >
        {/* Animated pulse effect */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-white/20 rounded-2xl"
        />

        {/* Percentage label */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white font-black text-2xl drop-shadow-lg">
          {percentage}%
        </div>
      </motion.div>
    </div>
  );
};

export const FrictionSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full">
          <pattern id="friction-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="currentColor"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#friction-dots)"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-thraiv-navy mb-6 leading-tight">
            {COPY.FRICTION.HEADLINE}
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed font-medium">
            {COPY.FRICTION.SUBHEAD}
          </p>
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700">
            {COPY.FRICTION.SECTION_TITLE}
          </h3>
        </motion.div>

        {/* DELAY #1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          {/* Delay Header */}
          <div className="mb-6">
            <h4 className="text-2xl md:text-3xl font-bold text-thraiv-navy mb-2">
              {COPY.FRICTION.DELAY_1.TITLE}
            </h4>
            <p className="text-base md:text-lg text-gray-500 font-medium italic">
              {COPY.FRICTION.DELAY_1.SUBTITLE}
            </p>
          </div>

          {/* Bar and Timer */}
          <div className="mb-6 space-y-4">
            <DelayBar
              percentage={COPY.FRICTION.DELAY_1.PERCENTAGE}
              color={COPY.FRICTION.DELAY_1.COLOR}
              delay={0.3}
            />
            <div className="flex justify-end">
              <AnimatedCounter target={COPY.FRICTION.DELAY_1.DURATION} />
            </div>
          </div>

          {/* Example Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {COPY.FRICTION.DELAY_1.EXAMPLES.map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.06, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.05, y: -4, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)" }}
                className="relative bg-gradient-to-br from-red-50 via-white to-red-50 p-5 md:p-6 rounded-2xl shadow-lg border-l-4 border-red-500 hover:border-red-600 transition-all group overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-100/0 via-red-100/50 to-red-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <p className="relative text-base md:text-lg font-black text-gray-900 leading-tight tracking-tight">
                  {example}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DELAY #2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          {/* Delay Header */}
          <div className="mb-6">
            <h4 className="text-2xl md:text-3xl font-bold text-thraiv-navy mb-2">
              {COPY.FRICTION.DELAY_2.TITLE}
            </h4>
            <p className="text-base md:text-lg text-gray-500 font-medium italic">
              {COPY.FRICTION.DELAY_2.SUBTITLE}
            </p>
          </div>

          {/* Bar and Timer */}
          <div className="mb-6 space-y-4">
            <DelayBar
              percentage={COPY.FRICTION.DELAY_2.PERCENTAGE}
              color={COPY.FRICTION.DELAY_2.COLOR}
              delay={0.3}
            />
            <div className="flex justify-end">
              <AnimatedCounter target={COPY.FRICTION.DELAY_2.DURATION} duration={2.5} />
            </div>
          </div>

          {/* Example Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {COPY.FRICTION.DELAY_2.EXAMPLES.map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.06, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.05, y: -4, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.25)" }}
                className="relative bg-gradient-to-br from-red-100 via-white to-orange-50 p-5 md:p-6 rounded-2xl shadow-lg border-l-4 border-red-600 hover:border-red-700 transition-all group overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-200/0 via-red-200/50 to-orange-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <p className="relative text-base md:text-lg font-black text-gray-900 leading-tight tracking-tight">
                  {example}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CLOSING STATEMENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 border-2 border-red-200 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-400/10 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-400/10 rounded-tr-full" />

            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-relaxed relative z-10 mb-8">
              {COPY.FRICTION.CLOSING}
            </p>

            {/* YouTube CTA */}
            <motion.a
              href={COPY.FRICTION.YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-thraiv-navy to-gray-800 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all group relative z-10"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>Want to see how we eliminate it?</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center gap-2 text-gray-400 cursor-default"
          >
            <span className="text-sm font-medium uppercase tracking-wider">See how we fix this</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                            STORY SECTION (NEW)                             */
/* -------------------------------------------------------------------------- */
export const StorySection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-thraiv-navy text-white overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
           <svg className="w-full h-full" fill="none">
               <pattern id="grid-story" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                   <path d="M40 0L0 0 0 40" stroke="currentColor" strokeWidth="1"/>
               </pattern>
               <rect width="100%" height="100%" fill="url(#grid-story)"/>
           </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Dashed Border Container "Blueprint" */}
        <div className="max-w-7xl mx-auto relative">
             
            <div className="border-2 border-dashed border-blue-500/30 rounded-3xl p-6 md:p-12 lg:p-16 bg-blue-900/10 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start relative">
                
                {/* Center Divider for Blueprint Look */}
                <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-px bg-blue-500/30 -translate-x-1/2"></div>

                {/* Left: Sources of Drain */}
                <div className="relative h-full pt-4">
                    {/* BIG HEADER */}
                    <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
                        <div className="p-3 bg-red-500/20 text-red-400 rounded-xl">
                            <AlertTriangle size={32} />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            Sources of <span className="text-red-400">Drain</span>
                        </h2>
                    </div>

                    <div className="space-y-8 pr-0 md:pr-6">
                        {STORY_SECTIONS.PROBLEM.map((item, i) => (
                            <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="group flex items-start gap-4"
                            >
                            <div className="p-3 bg-red-500/10 rounded-lg text-red-400 group-hover:bg-red-500/20 transition-colors shrink-0 mt-1">
                                <item.icon size={24} />
                            </div>
                            <div>
                                <div className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-red-100 transition-colors">{item.text}</div>
                                <div className="text-red-300/60 text-base font-medium leading-relaxed">{item.detail}</div>
                            </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right: The Power of Speed */}
                <div className="relative h-full pt-4">
                     {/* BIG HEADER */}
                     <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
                        <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                            <Zap size={32} />
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            Power of <span className="text-blue-400">Speed</span>
                        </h2>
                    </div>

                    <div className="space-y-8 pl-0 md:pl-6">
                        {STORY_SECTIONS.SOLUTION.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (i * 0.15) }}
                            className="group flex items-start gap-4"
                        >
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors shrink-0 mt-1">
                            <item.icon size={24} className="" />
                            </div>
                            <div>
                                <div className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">{item.text}</div>
                                <div className="text-blue-300/60 text-base font-medium leading-relaxed">{item.detail}</div>
                            </div>
                        </motion.div>
                        ))}
                    </div>
                </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/*                              HOW IT WORKS SECTION                          */
/* -------------------------------------------------------------------------- */
export const HowItWorksSection: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Pipeline Background Graphic */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block max-w-[1400px] mx-auto top-64 z-0">
               <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
                    <motion.path 
                        d="M150 150 H 1050 V 450 H 150" 
                        stroke="#2676FF" 
                        strokeWidth="8" 
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                 <div className="text-center mb-20 md:mb-28">
                    <span className="text-thraiv-blue font-bold tracking-wider uppercase text-sm mb-3 block">The Workflow</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-thraiv-navy mb-4">{COPY.AHA.HEADLINE}</h2>
                    <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto">
                        {COPY.AHA.SUBHEAD}
                    </p>
                 </div>

                 {/* Visual Grid for Desktop */}
                 <div className="relative max-w-7xl mx-auto">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-24">
                        {COPY.HOW_IT_WORKS.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="h-full relative group"
                            >
                                {/* Flow Connector Arrows - PROMINENT */}
                                {i < 5 && (
                                    <div className="hidden lg:block absolute right-[-60px] top-1/2 -translate-y-1/2 z-20">
                                        <motion.div
                                            animate={{ x: [0, 10, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                            className="bg-thraiv-blue rounded-full p-3 shadow-2xl shadow-blue-500/50"
                                        >
                                            <ArrowRight size={36} className="text-white" strokeWidth={3} />
                                        </motion.div>
                                    </div>
                                )}

                                {/* Mobile Arrow (Down) - PROMINENT */}
                                {i < 5 && (
                                    <div className="lg:hidden flex justify-center py-8">
                                        <motion.div
                                            animate={{ y: [0, 10, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                            className="bg-thraiv-blue rounded-full p-3 shadow-2xl shadow-blue-500/50"
                                        >
                                            <ChevronDown size={36} className="text-white" strokeWidth={3} />
                                        </motion.div>
                                    </div>
                                )}

                                <div className="h-full bg-white rounded-[2rem] p-10 border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center relative z-10">
                                    
                                    {/* Number Badge */}
                                    <div className="absolute top-8 right-8 text-gray-100 text-6xl font-black opacity-40 group-hover:opacity-100 group-hover:text-blue-50 transition-all select-none">
                                        0{i + 1}
                                    </div>

                                    <div className="w-24 h-24 bg-blue-50 text-thraiv-blue rounded-3xl flex items-center justify-center mb-8 group-hover:bg-thraiv-blue group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110 ring-4 ring-white">
                                        <step.icon size={40} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-3xl font-bold text-thraiv-navy mb-5 tracking-tight">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-10 text-lg md:text-xl flex-grow px-2 font-light">{step.desc}</p>
                                    
                                    <div className="w-full pt-8 border-t border-gray-50 mt-auto">
                                        <div className="inline-flex items-center gap-2 text-sm font-bold text-thraiv-blue uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-xl group-hover:bg-blue-100 transition-colors">
                                            {step.example}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                     </div>
                 </div>
            </div>
        </section>
    );
};

/* -------------------------------------------------------------------------- */
/*                                COST SECTION (REVAMPED)                     */
/* -------------------------------------------------------------------------- */
export const CostSection: React.FC = () => {
    // Helper to normalize graph data so it fits the area chart perfectly regardless of scale (e.g. 0-100 or 1-5)
    const normalizeGraph = (data: number[]) => {
        const min = Math.min(...data);
        const max = Math.max(...data);
        const padding = (max - min) * 0.2; // Add 20% breathing room
        const effectiveMin = Math.max(0, min - padding);
        const effectiveMax = max + padding;
        const range = effectiveMax - effectiveMin || 1;

        return data.map(v => 100 - (((v - effectiveMin) / range) * 100)); // Invert for SVG y-axis
    };

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-thraiv-navy to-slate-900 text-white relative overflow-hidden">
             {/* Background Effects */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    title={COPY.COST.HEADLINE}
                    subtitle={COPY.COST.SUBHEAD}
                    light={true}
                    className="text-center max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16"
                />

                <div className="max-w-7xl mx-auto">

                    {/* TOP SECTION: Workflows + Impact Metrics */}
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 md:mb-16">

                        {/* LEFT COLUMN: CLEAN WORKFLOW COMPARISON */}
                        <div className="lg:col-span-6 space-y-4 md:space-y-6 flex flex-col h-full">

                            {/* MANUAL WORKFLOW */}
                            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border-2 border-slate-700 flex-1">
                            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-slate-700">
                                <div className="p-2 md:p-3 bg-slate-700 rounded-lg text-slate-400">
                                    <User size={18} className="md:w-6 md:h-6" />
                                </div>
                                <h3 className="text-slate-300 font-bold text-lg md:text-2xl">Manual Workflow</h3>
                            </div>

                            <div className="space-y-3 md:space-y-4">
                                {COPY.COST.TIMELINE_OLD.map((point, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-2 md:gap-3 bg-slate-900/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-slate-700/50"
                                    >
                                        <div className="p-1.5 md:p-2 bg-slate-700 rounded-lg text-slate-400">
                                            <point.icon size={16} className="md:w-5 md:h-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="font-medium text-slate-200 text-xs md:text-sm truncate">{point.label}</div>
                                            <div className="text-[10px] md:text-xs text-slate-500 truncate">{point.sub}</div>
                                        </div>
                                        <div className="text-[10px] md:text-xs text-slate-400 font-mono whitespace-nowrap">{point.delay}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* THRAIV WORKFLOW */}
                        <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border-2 border-blue-500/30 relative overflow-hidden flex-1">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6 pb-3 md:pb-4 border-b border-blue-500/30">
                                    <div className="p-2 md:p-3 bg-blue-500 rounded-lg text-white">
                                        <Zap size={18} className="md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-white font-bold text-lg md:text-2xl">Thraiv Workflow</h3>
                                </div>

                                <div className="space-y-3 md:space-y-4">
                                    {COPY.COST.TIMELINE_NEW.map((point, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                            className="flex items-center gap-2 md:gap-3 bg-blue-900/40 p-3 md:p-4 rounded-lg md:rounded-xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-400/40 transition-colors"
                                        >
                                            <div className="p-1.5 md:p-2 bg-blue-500 rounded-lg text-white">
                                                <point.icon size={16} className="md:w-5 md:h-5" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="font-bold text-white text-xs md:text-sm truncate">{point.label}</div>
                                                <div className="text-[10px] md:text-xs text-blue-200 truncate">{point.sub}</div>
                                            </div>
                                            <div className="flex items-center gap-0.5 md:gap-1 text-[10px] md:text-xs font-bold text-green-400 whitespace-nowrap">
                                                <Zap size={12} className="md:w-3.5 md:h-3.5" />
                                                <span>Instant</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        </div>

                    {/* RIGHT COLUMN: IMPACT DASHBOARD */}
                    <div className="lg:col-span-6 h-full flex flex-col">
                        <div className="mb-8 flex items-center gap-3">
                            <div className="p-3 bg-white/10 rounded-lg"><BarChart size={24} className="text-white" /></div>
                            <h3 className="text-3xl font-bold text-white">System Impact</h3>
                        </div>

                        <div className="space-y-6 flex-grow">
                            {IMPACT_METRICS.map((metric, i) => {
                                const normalizedY = normalizeGraph(metric.trend);
                                
                                return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="bg-white/5 border-2 border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md relative overflow-hidden group h-auto min-h-[200px]"
                                >
                                    {/* Metric Header */}
                                    <div className="flex justify-between items-start mb-4 relative z-10">
                                        <div className={`p-3 rounded-xl ${
                                            metric.color === 'green' ? 'bg-green-500/20 text-green-400' :
                                            metric.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                                            metric.color === 'purple' ? 'bg-purple-500/20 text-purple-400' : 'bg-yellow-500/20 text-yellow-400'
                                        }`}>
                                            <metric.icon size={28} />
                                        </div>
                                        <div className={`px-3 py-2 rounded-lg text-sm font-bold ${
                                            metric.color === 'green' ? 'bg-green-500/20 text-green-400' :
                                            metric.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                                            metric.color === 'purple' ? 'bg-purple-500/20 text-purple-400' : 'bg-yellow-500/20 text-yellow-400'
                                        }`}>
                                            {metric.change}
                                        </div>
                                    </div>

                                    {/* Big Number Overlay */}
                                    <div className="relative z-10 mt-auto mb-4">
                                        <div className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-2">{metric.label}</div>
                                        <div className="flex flex-col">
                                            <div className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none mb-2">{metric.now}</div>
                                            <div className="text-base text-gray-400 font-medium">Was: <span className="line-through">{metric.was}</span></div>
                                        </div>
                                    </div>

                                    {/* Area Chart Visualization */}
                                    <div className="absolute bottom-0 left-0 right-0 h-[120px] w-full z-0 opacity-30 group-hover:opacity-50 transition-opacity">
                                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                                    <stop offset="0%" stopColor={
                                                        metric.color === 'green' ? '#10B981' : 
                                                        metric.color === 'blue' ? '#3B82F6' : 
                                                        metric.color === 'purple' ? '#A855F7' : '#EAB308'
                                                    } stopOpacity="0.8" />
                                                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                            
                                            {/* Filled Area */}
                                            <motion.path 
                                                d={`M 0,${normalizedY[0]} ` + 
                                                   normalizedY.map((y, idx) => `L ${(idx / (normalizedY.length-1)) * 100},${y}`).join(' ') + 
                                                   ` L 100,100 L 0,100 Z`}
                                                fill={`url(#grad-${i})`}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            />
                                            
                                            {/* Line Stroke */}
                                            <motion.path 
                                                d={`M 0,${normalizedY[0]} ` + 
                                                   normalizedY.map((y, idx) => `L ${(idx / (normalizedY.length-1)) * 100},${y}`).join(' ')}
                                                fill="none"
                                                stroke={
                                                    metric.color === 'green' ? '#10B981' : 
                                                    metric.color === 'blue' ? '#3B82F6' : 
                                                    metric.color === 'purple' ? '#A855F7' : '#EAB308'
                                                }
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                            />
                                        </svg>
                                    </div>
                                </motion.div>
                            )})}
                        </div>
                    </div>

                    </div>

                    {/* FULL WIDTH: SCALE IMPACT */}
                    <div className="mt-16 space-y-8">
                        <div className="text-center mb-10">
                            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">Now Scale That Across Every Workflow</h3>
                            <p className="text-blue-100/80 text-xl">When every response is instant, your entire business accelerates.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all"
                            >
                                <div className="text-green-400 text-6xl md:text-7xl font-black mb-4">3-5x</div>
                                <div className="text-white font-bold text-xl md:text-2xl mb-3">More Customers Won</div>
                                <div className="text-gray-300 text-base">Respond first, win more deals</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all"
                            >
                                <div className="text-blue-400 text-6xl md:text-7xl font-black mb-4">10x</div>
                                <div className="text-white font-bold text-xl md:text-2xl mb-3">Faster Decisions</div>
                                <div className="text-gray-300 text-base">See problems, act immediately</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all"
                            >
                                <div className="text-purple-400 text-6xl md:text-7xl font-black mb-4">80%</div>
                                <div className="text-white font-bold text-xl md:text-2xl mb-3">Problems Avoided</div>
                                <div className="text-gray-300 text-base">Catch issues before they escalate</div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

/* -------------------------------------------------------------------------- */
/*                                DREAM SECTION                               */
/* -------------------------------------------------------------------------- */
export const DreamSection: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-white border-b border-gray-100">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title={COPY.DREAM.HEADLINE}
                    subtitle={COPY.DREAM.SUBHEAD}
                    className="text-center max-w-4xl mx-auto mb-20"
                />
                
                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-stretch h-full">
                    {/* Before - Visual Chaos */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-red-50/30 rounded-3xl border border-red-100 relative overflow-hidden group h-[500px] flex flex-col"
                    >
                        <div className="absolute top-6 right-6 bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide z-10">Manual Chaos</div>
                        
                        {/* Animated Floating Elements simulating mess */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {[Mail, FileWarning, Clock, AlertTriangle, MessageSquare].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ x: Math.random() * 300, y: Math.random() * 400, rotate: 0 }}
                                    animate={{ 
                                        x: [Math.random() * 300, Math.random() * 400, Math.random() * 300], 
                                        y: [Math.random() * 400, Math.random() * 300, Math.random() * 400],
                                        rotate: [0, 10, -10, 0]
                                    }}
                                    transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute p-4 bg-white shadow-lg rounded-xl text-red-400 border border-red-100 opacity-60"
                                >
                                    <Icon size={32} />
                                </motion.div>
                            ))}
                        </div>

                        <div className="relative z-10 p-10 mt-auto bg-gradient-to-t from-red-50 via-red-50/90 to-transparent pt-20">
                            <h3 className="text-3xl font-bold text-red-900 mb-6">The Old Way</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {['Inbox Overload (100+)', 'Chasing Customers Manually', 'Information Silos', 'Constant Firefighting'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-red-900/80 font-medium bg-white/60 p-3 rounded-lg border border-red-100 shadow-sm backdrop-blur-sm">
                                        <span className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center text-red-600 text-sm font-bold shrink-0">✕</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* After - Visual Order */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-blue-50/30 rounded-3xl border border-blue-100 relative overflow-hidden h-[500px] flex flex-col"
                    >
                         <div className="absolute top-6 right-6 bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide z-10">Thraiv System</div>
                        
                        {/* Streamlined Flow Animation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-2 h-full bg-blue-100/50 absolute left-1/2 -translate-x-1/2"></div>
                            {/* Moving packets */}
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-64 h-24 bg-white shadow-xl rounded-xl border border-blue-100 flex items-center gap-4 px-6 z-0"
                                    initial={{ y: 300, opacity: 0, scale: 0.9 }}
                                    animate={{ y: -300, opacity: [0, 1, 1, 0], scale: 1 }}
                                    transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "linear" }}
                                    style={{ left: '50%', x: '-50%' }}
                                >
                                    <div className="p-3 bg-blue-50 rounded-full text-thraiv-blue">
                                        <Check size={24} />
                                    </div>
                                    <div>
                                        <div className="h-2 w-24 bg-blue-100 rounded mb-2"></div>
                                        <div className="h-2 w-16 bg-blue-50 rounded"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="relative z-10 p-10 mt-auto bg-gradient-to-t from-blue-50 via-blue-50/90 to-transparent pt-20">
                            <h3 className="text-3xl font-bold text-thraiv-navy mb-6">The Thraiv Way</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {['Zero Inbox Anxiety', 'Auto-Follow Ups', 'Centralized Truth', 'Proactive Improvements'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-thraiv-navy font-medium bg-white/80 p-3 rounded-lg border border-blue-100 shadow-sm backdrop-blur-sm">
                                        <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30"><Check size={16} /></span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

/* -------------------------------------------------------------------------- */
/*                               OUTCOMES SECTION                             */
/* -------------------------------------------------------------------------- */
export const OutcomesSection: React.FC = () => {
    return (
        <section className="py-32 bg-thraiv-navy relative overflow-hidden">
             {/* Background Glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[100px] rounded-full"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionHeader 
                    title="Your Business With Thraiv" 
                    subtitle="The tangible impact of installing intelligent operations."
                    className="text-center mb-20"
                    light={true} // Switches text to white
                />
                
                {/* UNIFORM GRID - SYMMETRICAL & CRISP */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {COPY.OUTCOMES.map((outcome, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className={`
                                relative p-8 rounded-3xl border border-white/5 backdrop-blur-sm overflow-hidden group flex flex-col h-full
                                bg-gradient-to-b from-white/5 to-white/0 hover:border-blue-500/30 transition-all duration-300
                            `}
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                <outcome.icon size={28} />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-3">{outcome.title}</h3>
                            <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                                {outcome.desc}
                            </p>
                            
                            <div className="mt-auto pt-6 border-t border-white/5">
                                <div className="text-sm font-bold uppercase tracking-wide flex items-center gap-2 text-blue-400 group-hover:text-white transition-colors">
                                    <CheckCircle size={16} /> {outcome.stat}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

/* -------------------------------------------------------------------------- */
/*                              AUDIENCE SECTION                              */
/* -------------------------------------------------------------------------- */
export const AudienceSection: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                 <SectionHeader
                    title="Who Thraiv Is For"
                    subtitle="Built for operations-heavy businesses where speed equals revenue."
                    className="text-center max-w-4xl mx-auto mb-16"
                />

                <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {INDUSTRIES.map((ind, i) => (
                         <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-12 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                        >
                            <div className="flex flex-col sm:flex-row items-start gap-8">
                                <div className="p-5 bg-blue-50 rounded-2xl text-thraiv-blue group-hover:bg-thraiv-blue group-hover:text-white transition-colors shrink-0 group-hover:scale-110 duration-300">
                                    <ind.icon size={40} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-thraiv-navy mb-4">{ind.label}</h3>
                                    <p className="text-gray-600 mb-8 text-xl leading-relaxed">{ind.desc}</p>
                                    <div className="text-lg font-medium text-blue-600 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                                        <span className="font-bold block text-sm uppercase tracking-wider text-blue-500 mb-2 flex items-center gap-2"><CheckCircle size={16} /> Benefits</span>
                                        {ind.outcome}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* -------------------------------------------------------------------------- */
/*                                  FAQ SECTION                               */
/* -------------------------------------------------------------------------- */
export const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Questions You're Probably Asking"
                    subtitle="The honest answers."
                    className="text-center max-w-3xl mx-auto mb-16"
                />

                <div className="max-w-4xl mx-auto space-y-4">
                    {FAQ_ITEMS.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                            >
                                <span className="text-xl font-bold text-thraiv-navy pr-4">{faq.question}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown size={24} className="text-thraiv-blue" />
                                </motion.div>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === i ? 'auto' : 0,
                                    opacity: openIndex === i ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-8 pb-8 text-lg text-gray-700 leading-relaxed space-y-4">
                                    {faq.answer.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx} className="leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* -------------------------------------------------------------------------- */
/*                              URGENCY SECTION                               */
/* -------------------------------------------------------------------------- */
export const UrgencySection: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 border-y-4 border-blue-200">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6"
                    >
                        <Zap size={16} />
                        The Race
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black text-thraiv-navy mb-6 tracking-tight">
                        {URGENCY.HEADLINE}
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-700 font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
                        {URGENCY.SUBHEAD}
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {URGENCY.POINTS.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-xl transition-all group"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                                    <Zap size={28} className="text-white" />
                                </div>
                                <p className="text-lg font-bold text-thraiv-navy leading-relaxed">{point}</p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-2xl md:text-3xl text-thraiv-navy font-black mb-2">
                        {URGENCY.CTA_TEXT}
                    </p>
                </div>
            </div>
        </section>
    );
};

/* -------------------------------------------------------------------------- */
/*                                AUDIT SECTION                               */
/* -------------------------------------------------------------------------- */
interface AuditSectionProps {
  onBookAudit?: () => void;
}

export const AuditSection: React.FC<AuditSectionProps> = ({ onBookAudit }) => {
    return (
        <section className="py-32 bg-black relative overflow-hidden text-center">
            {/* Singularity Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-gray-900 to-black"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     className="relative z-10"
                >
                     {/* Glowing Orb Behind Text */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        {FINAL_CTA.HEADLINE}
                    </h2>
                    <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                        {FINAL_CTA.SUBHEAD}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                        {AUDIT_POINTS.map((point, i) => (
                             <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-md">
                                 <div className="text-green-400 shrink-0">
                                     <CheckCircle size={18} fill="currentColor" className="text-green-400/20" />
                                 </div>
                                 <span className="text-gray-200 font-medium text-sm md:text-base">{point}</span>
                             </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <Button
                          className="w-full md:w-auto text-xl px-12 py-6 bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.6)] border border-blue-400/50 rounded-2xl transition-all hover:scale-105"
                          icon={<ArrowRight size={24} />}
                          onClick={onBookAudit}
                        >
                            Book Your Free Opportunity Audit
                        </Button>

                        <div className="flex items-center justify-center gap-8 text-sm text-gray-400 mt-4">
                            <span className="flex items-center gap-2">
                                <Shield size={16} /> No Credit Card
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={16} /> 15 Min Max
                            </span>
                            <span className="flex items-center gap-2">
                                <Check size={16} /> Zero Pressure
                            </span>
                        </div>

                        <p className="text-gray-500 text-sm mt-6 max-w-2xl mx-auto leading-relaxed">
                            {FINAL_CTA.GUARANTEE}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
