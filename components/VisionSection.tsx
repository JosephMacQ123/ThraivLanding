import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Search, AlertTriangle, Clock, Zap, BarChart3, CheckCircle, Target } from 'lucide-react';

export const VisionSection: React.FC = () => {
  const comparisons = [
    {
      before: { icon: Mail, text: "Buried in emails", subtext: "Customers sitting unnoticed" },
      after: { icon: Zap, text: "RFQs & Leads engaged instantly", subtext: "Automatic capture & response", stat: "< 5 min avg" }
    },
    {
      before: { icon: Search, text: "Chasing info constantly", subtext: "Hours hunting data" },
      after: { icon: BarChart3, text: "Data tracked 24/7", subtext: "Informed the moment the things that matter change", stat: "Real-time" }
    },
    {
      before: { icon: AlertTriangle, text: "Firefighting through inbox", subtext: "Reactive & overwhelmed" },
      after: { icon: CheckCircle, text: "No repetitive questions", subtext: "Everyone knows their role", stat: "85% reduction" }
    },
    {
      before: { icon: Clock, text: "Hours lost to manual tasks", subtext: "Typing, checking, switching" },
      after: { icon: Target, text: "No time lost", subtext: "Systems handle the admin", stat: "15hrs/week saved" }
    }
  ];

  return (
    <section className="relative py-10 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-5xl font-black text-thraiv-navy mb-3 md:mb-4">
            Imagine a Business Where...
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            This isn't a dream. It's what intelligent operations look like.
          </p>
        </motion.div>

        {/* Desktop: Side-by-side split | Mobile: Stacked pairs */}
        <div className="max-w-7xl mx-auto">
          {/* Desktop Headers */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-block px-6 py-3 bg-red-50 border-2 border-red-200 rounded-full mb-4">
                <span className="text-sm font-black text-red-700 uppercase tracking-wider">Your Business Today</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-block px-6 py-3 bg-green-50 border-2 border-green-200 rounded-full mb-4">
                <span className="text-sm font-black text-green-700 uppercase tracking-wider">With Intelligent Operations</span>
              </div>
            </motion.div>
          </div>

          {/* Comparison Pairs - Desktop: All 4, Mobile: First 2 only */}
          <div className="space-y-4 md:space-y-8">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${index >= 2 ? 'hidden md:block' : ''}`}
              >
                {/* Desktop: Side by side */}
                <div className="hidden md:grid md:grid-cols-2 gap-8">
                  {/* BEFORE (Left) */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200/60 rounded-2xl p-6 relative overflow-hidden group"
                    style={{ willChange: 'transform' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-100/0 to-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="p-3 bg-red-100 rounded-xl text-red-600 flex-shrink-0">
                        <comparison.before.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-black text-gray-800 mb-1">{comparison.before.text}</h3>
                        <p className="text-sm text-gray-600">{comparison.before.subtext}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* AFTER (Right) */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200/60 rounded-2xl p-6 relative overflow-hidden group"
                    style={{ willChange: 'transform' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100/0 to-green-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-start gap-4 mb-3">
                      <div className="p-3 bg-green-100 rounded-xl text-green-600 flex-shrink-0">
                        <comparison.after.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-black text-gray-800 mb-1">{comparison.after.text}</h3>
                        <p className="text-sm text-gray-600">{comparison.after.subtext}</p>
                      </div>
                    </div>
                    {/* Micro-stat */}
                    <div className="relative z-10 pl-16">
                      <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                        {comparison.after.stat}
                      </div>
                    </div>
                    {/* Checkmark badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                      className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <CheckCircle size={18} className="text-white" strokeWidth={3} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Mobile: Stacked with transform arrow - Tighter spacing for faster scroll */}
                <div className="md:hidden space-y-3">
                  {/* Mobile Header for this pair */}
                  <div className="text-center">
                    <span className="inline-block px-4 py-1.5 bg-red-50 border border-red-200 rounded-full text-xs font-bold text-red-700">
                      Your Business Today
                    </span>
                  </div>

                  {/* BEFORE */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200/60 rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 bg-red-100 rounded-xl text-red-600 flex-shrink-0">
                        <comparison.before.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-black text-gray-800 mb-1">{comparison.before.text}</h3>
                        <p className="text-xs text-gray-600">{comparison.before.subtext}</p>
                      </div>
                    </div>
                  </div>

                  {/* Transform Arrow - Smaller and tighter */}
                  <div className="flex justify-center -my-1">
                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </motion.div>
                  </div>

                  <div className="text-center">
                    <span className="inline-block px-4 py-1.5 bg-green-50 border border-green-200 rounded-full text-xs font-bold text-green-700">
                      With Intelligent Operations
                    </span>
                  </div>

                  {/* AFTER */}
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200/60 rounded-2xl p-4 relative">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2.5 bg-green-100 rounded-xl text-green-600 flex-shrink-0">
                        <comparison.after.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-black text-gray-800 mb-1">{comparison.after.text}</h3>
                        <p className="text-xs text-gray-600">{comparison.after.subtext}</p>
                      </div>
                    </div>
                    {/* Micro-stat */}
                    <div className="pl-12">
                      <div className="inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] font-bold">
                        {comparison.after.stat}
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle size={16} className="text-white" strokeWidth={3} />
                    </div>
                  </div>
                </div>

                {/* Animated gradient divider on desktop */}
                {index < comparisons.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 w-px h-8 bg-gradient-to-b from-blue-300 via-purple-300 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 md:mt-16"
        >
          <p className="text-lg md:text-2xl font-bold text-gray-700 mb-2">
            This isn't magic. It's systems.
          </p>
          <motion.p
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-sm md:text-base text-gray-500 flex items-center justify-center gap-2"
          >
            Keep scrolling to see how
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
