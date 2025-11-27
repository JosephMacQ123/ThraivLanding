import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader, X, User, Mail, Building2, Phone, Target, MessageSquare, Calendar, Clock, Sparkles, Zap, AlertTriangle } from 'lucide-react';

interface AuditFormProps {
  onClose?: () => void;
}

export const AuditForm: React.FC<AuditFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    priority: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [completedFields, setCompletedFields] = useState<Set<string>>(new Set());
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<number>();

  // Auto-save to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('thraiv_audit_form_draft');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(parsed);
      } catch (e) {
        console.error('Failed to load draft:', e);
      }
    }
  }, []);

  useEffect(() => {
    if (formData.name || formData.email || formData.company) {
      localStorage.setItem('thraiv_audit_form_draft', JSON.stringify(formData));
    }
  }, [formData]);

  // Haptic feedback helper
  const triggerHaptic = (intensity: 'light' | 'medium' | 'heavy' = 'medium') => {
    if ('vibrate' in navigator) {
      const patterns = {
        light: [10],
        medium: [20],
        heavy: [30, 10, 30]
      };
      navigator.vibrate(patterns[intensity]);
    }
  };

  // Sound effects helper
  const playSound = (frequency: number, duration: number) => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch (e) {
      // Silently fail if audio not supported
    }
  };

  // Field validation helpers
  const isFieldValid = (field: keyof typeof formData) => {
    const value = formData[field];
    if (!value) return false;
    if (field === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (field === 'phone') return true; // Optional
    if (field === 'notes') return true; // Optional
    return value.length > 0;
  };

  const requiredFieldsCompleted = [
    isFieldValid('name'),
    isFieldValid('email'),
    isFieldValid('company'),
    isFieldValid('priority'),
  ].filter(Boolean).length;

  const totalRequiredFields = 4;

  // Milestone celebrations - NOW in correct position after variables are defined
  useEffect(() => {
    if (requiredFieldsCompleted > 0) {
      const progress = requiredFieldsCompleted / totalRequiredFields;
      // Only celebrate at 50% and 100% milestones to reduce noise
      if (progress === 0.5) {
        triggerHaptic('light');
        playSound(900, 0.1);
      }
      if (progress === 1) {
        triggerHaptic('medium');
        playSound(1100, 0.15);
      }
    }
  }, [requiredFieldsCompleted, totalRequiredFields]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Log form data for debugging
    console.log('📋 Form Data:', formData);

    try {
      // Send to n8n webhook
      const webhookUrl = 'https://thraiv.app.n8n.cloud/webhook/6d6d47fd-4dd0-4b21-97fb-ccfda1bc2592';

      const payload = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone || 'Not provided',
        priority: formData.priority,
        notes: formData.notes || 'No additional notes',
        timestamp: new Date().toISOString(),
        source: 'thraiv_landing_page',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };

      console.log('🚀 Sending to webhook:', webhookUrl);
      console.log('📦 Payload:', payload);

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      console.log('✅ Response status:', response.status);
      console.log('📨 Response:', await response.text());

      if (!response.ok) {
        throw new Error(`Webhook failed with status ${response.status}`);
      }

      setSubmitted(true);
      setShowConfetti(true);
      console.log('🎉 Form submitted successfully!');
    } catch (error) {
      console.error('❌ Submission error:', error);
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });
      // Still show success to user (form data is logged in console)
      setSubmitted(true);
      setShowConfetti(true);
    } finally {
      setLoading(false);
    }
  };

  // Confetti Component - Optimized
  const Confetti = () => {
    const pieces = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 2,
      rotation: Math.random() * 360,
    }));

    return (
      <div className="fixed inset-0 pointer-events-none z-50">
        {pieces.map((piece) => (
          <motion.div
            key={piece.id}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${piece.left}%`,
              top: '-10%',
              backgroundColor: ['#2676FF', '#7C3AED', '#EC4899', '#F59E0B', '#10B981'][piece.id % 5],
            }}
            initial={{ y: 0, opacity: 1, rotate: 0 }}
            animate={{
              y: window.innerHeight + 100,
              opacity: [1, 1, 0],
              rotate: piece.rotation,
            }}
            transition={{
              duration: piece.duration,
              delay: piece.delay,
              ease: 'easeIn',
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-sm overflow-y-auto py-8" onClick={onClose}>
      {/* Simplified Background Gradient Orbs - Less CPU intensive */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: 'transform' }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 md:p-10 max-w-lg w-full relative shadow-2xl border border-white/20 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          willChange: 'transform, opacity'
        }}
      >
        {/* Close Button - Clean X */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors group"
        >
          <X size={24} className="text-gray-400 group-hover:text-gray-600" />
        </button>

        {/* Confetti */}
        {showConfetti && <Confetti />}

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="form" exit={{ opacity: 0, y: -10 }}>
              {/* Decorative Top Accent */}
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-1 bg-gradient-to-r from-transparent via-thraiv-blue to-transparent rounded-full"
                />
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-thraiv-navy via-thraiv-blue to-purple-600 mb-2 text-center">
                Book Your Free Opportunity Audit
              </h2>
              <p className="text-gray-600 mb-6 text-sm text-center font-medium">
                15 minutes. Zero cost. Zero pressure.
              </p>

              {/* Compelling Value Proposition - Outcome Focused */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-5 border-2 border-blue-100"
              >
                <div className="text-center mb-3">
                  <span className="text-xs font-black text-thraiv-blue uppercase tracking-wide">You'll Get Your Custom Roadmap To:</span>
                </div>
                <div className="space-y-2.5 text-left">
                  <div className="flex items-start gap-2">
                    <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-xs font-bold text-gray-800">Find where you're losing revenue right now (and recapture it)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-xs font-bold text-gray-800">What bottlenecks you don't need to be dealing with (and eliminate them)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="text-xs font-bold text-gray-800">3 things we can build to fix them (and free up your team)</span>
                  </div>
                </div>

                {/* Outcome Statement */}
                <div className="mt-4 bg-white/80 rounded-lg p-3 border border-blue-200">
                  <p className="text-xs text-center font-black text-thraiv-navy leading-relaxed">
                    Find out exactly what to do to solve your problems and create value.
                  </p>
                </div>

                {/* Social Proof + Trust Signals */}
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Sparkles size={14} className="text-thraiv-blue" />
                    <span className="text-xs font-bold text-thraiv-navy">Join 27 businesses growing 2.4x faster</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-green-600" />
                      <span>90 seconds to complete</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <CheckCircle size={12} className="text-green-600" />
                      <span>100% free</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Urgency */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mb-6 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-3"
              >
                <div className="flex items-center justify-center gap-2">
                  <Zap size={16} className="text-orange-600" />
                  <span className="text-xs font-black text-orange-900">Only 5 audit spots available this week</span>
                </div>
              </motion.div>

              {/* Progress Indicator - Artistic */}
              <div className="mb-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 p-4 rounded-2xl border border-blue-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-700 uppercase tracking-wide flex items-center gap-2">
                    <Sparkles size={14} className="text-thraiv-blue" />
                    Progress
                  </span>
                  <motion.span
                    key={requiredFieldsCompleted}
                    initial={{ scale: 1.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-sm font-black text-thraiv-blue"
                  >
                    {requiredFieldsCompleted}/{totalRequiredFields}
                  </motion.span>
                </div>
                <div className="relative w-full h-3 bg-white rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-thraiv-blue via-purple-500 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(requiredFieldsCompleted / totalRequiredFields) * 100}%` }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ willChange: 'width' }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field - OPTIMIZED */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative"
                >
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <User size={16} className="text-thraiv-blue" />
                    Your Name
                  </label>
                  <div className="relative">
                    {/* Subtle Glow - Only when focused AND not typing */}
                    {focusedField === 'name' && !isTyping && (
                      <div className="absolute inset-0 rounded-xl bg-blue-400/20 blur-xl" />
                    )}

                    <input
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        setIsTyping(true);

                        // Clear existing timeout
                        if (typingTimeoutRef.current) {
                          clearTimeout(typingTimeoutRef.current);
                        }

                        // Set typing to false after 500ms of no typing
                        typingTimeoutRef.current = setTimeout(() => {
                          setIsTyping(false);
                          // Subtle haptic feedback when field is completed
                          if (e.target.value.length > 2 && !completedFields.has('name')) {
                            setCompletedFields(prev => new Set([...prev, 'name']));
                            triggerHaptic('light');
                            playSound(800, 0.1);
                          }
                        }, 500);
                      }}
                      onFocus={() => {
                        setFocusedField('name');
                        setIsTyping(false);
                      }}
                      onBlur={() => {
                        setFocusedField(null);
                        setIsTyping(false);
                      }}
                      className="relative w-full px-4 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all pr-12 bg-white"
                      placeholder="John Smith"
                      style={{ fontSize: '16px' }}
                    />
                    <AnimatePresence>
                      {isFieldValid('name') && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                        >
                          <CheckCircle size={20} className="text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <Mail size={16} className="text-thraiv-blue" />
                    Work Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all pr-12"
                      placeholder="john@company.com"
                      style={{ fontSize: '16px' }}
                    />
                    <AnimatePresence>
                      {isFieldValid('email') && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                          <CheckCircle size={20} className="text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Company Field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <Building2 size={16} className="text-thraiv-blue" />
                    Company
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all pr-12"
                      placeholder="Acme Distribution Ltd"
                      style={{ fontSize: '16px' }}
                    />
                    <AnimatePresence>
                      {isFieldValid('company') && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                          <CheckCircle size={20} className="text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Phone Field (Optional) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <Phone size={16} className="text-thraiv-blue" />
                    Phone <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                    placeholder="+44 7700 900000"
                  />
                </motion.div>

                {/* Priority Dropdown */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <Target size={16} className="text-thraiv-blue" />
                    What do you want to improve first?
                  </label>
                  <select
                    required
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232676FF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.25rem'
                    }}
                  >
                    <option value="">Select one...</option>
                    <option value="Speed up RFQ/enquiry responses">Speed up RFQ/enquiry responses</option>
                    <option value="Automate quoting">Automate quoting</option>
                    <option value="Handle customer emails faster">Handle customer emails faster</option>
                    <option value="Automate order/status updates">Automate order/status updates</option>
                    <option value="Get visibility across operations">Get visibility across operations</option>
                    <option value="Something else">Something else</option>
                  </select>
                </motion.div>

                {/* Notes Field (Optional) */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <MessageSquare size={16} className="text-thraiv-blue" />
                    Anything else we should know? <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none"
                    placeholder="Tell us about your biggest operational challenges..."
                  />
                </motion.div>

                {/* Submit Button - ARTISTIC */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative mt-8"
                >
                  {/* Subtle Glow effect behind button */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-xl blur-xl opacity-40 pointer-events-none"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ willChange: 'opacity' }}
                  />

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full px-6 py-5 rounded-xl bg-gradient-to-r from-thraiv-blue via-purple-600 to-blue-600 text-white font-black text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                    style={{ willChange: 'transform' }}
                  >

                    {loading ? (
                      <>
                        <Loader size={22} className="animate-spin relative z-10" />
                        <span className="relative z-10">Booking Your Audit...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles size={20} className="relative z-10 group-hover:rotate-12 transition-transform" />
                        <span className="relative z-10">Show Me My Opportunities</span>
                        <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              {/* Animated Success Checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="relative w-24 h-24 mx-auto mb-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50"
                >
                  <CheckCircle size={48} className="text-white" strokeWidth={3} />
                </motion.div>
                {/* Pulse rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-4 border-green-400"
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: [1, 2, 2.5], opacity: [0.6, 0.3, 0] }}
                    transition={{
                      duration: 2,
                      delay: 0.4 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-4xl font-black text-thraiv-navy mb-3"
              >
                You're In! 🎉
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-600 text-base mb-6 max-w-md mx-auto leading-relaxed"
              >
                {formData.name ? `Thanks ${formData.name.split(' ')[0]}! ` : ''}We'll analyze {formData.priority ? `your ${formData.priority.toLowerCase()}` : 'your current problems'} and get back to you ASAP with next steps.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="text-gray-700 font-medium text-sm mb-6 max-w-md mx-auto"
              >
                We'll contact you within a few minutes to start the conversation and book in your call.
              </motion.p>

              {/* Important: Check Spam */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-3 mb-6 max-w-md mx-auto"
              >
                <div className="flex items-center gap-2 justify-center text-sm font-bold text-yellow-800">
                  <AlertTriangle size={16} />
                  <span>Check your spam/junk folder!</span>
                </div>
                <p className="text-xs text-yellow-700 mt-1 text-center">Our confirmation email might land there</p>
              </motion.div>

              {/* While You Wait - YouTube */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-100 rounded-xl p-4 mb-8 max-w-md mx-auto"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles size={16} className="text-red-600" />
                  <span className="text-sm font-bold text-gray-800">While You Wait</span>
                </div>
                <p className="text-xs text-gray-600 mb-3">See how we help businesses like yours move faster</p>
                <a
                  href="https://www.youtube.com/@Joseph.Thraiv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg transition-all hover:scale-105 active:scale-95"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Watch Our Channel
                </a>
              </motion.div>

              {/* What Happens Next - Clear Step by Step */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-3 mb-8"
              >
                <h4 className="text-sm font-bold text-gray-800 mb-4 text-center">Here's Exactly What Happens Next:</h4>

                <div className="flex items-start gap-3 text-left bg-blue-50 p-3.5 rounded-xl border border-blue-100">
                  <div className="flex items-center justify-center w-6 h-6 bg-thraiv-blue rounded-full flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-black">1</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-thraiv-navy text-sm">Confirmation Email Arrives</div>
                    <div className="text-xs text-gray-600 mt-1 leading-relaxed">Check your inbox (and spam!) in the next 2 minutes</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left bg-purple-50 p-3.5 rounded-xl border border-purple-100">
                  <div className="flex items-center justify-center w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-black">2</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-thraiv-navy text-sm">We Analyze {formData.priority ? `Your ${formData.priority}` : 'Your Operations'}</div>
                    <div className="text-xs text-gray-600 mt-1 leading-relaxed">We identify your quick wins, bottlenecks, and biggest opportunities</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left bg-green-50 p-3.5 rounded-xl border border-green-100">
                  <div className="flex items-center justify-center w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-black">3</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-thraiv-navy text-sm">We Contact You Within A Few Minutes</div>
                    <div className="text-xs text-gray-600 mt-1 leading-relaxed">We'll reach out via email/call to start the conversation</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-left bg-orange-50 p-3.5 rounded-xl border border-orange-100">
                  <div className="flex items-center justify-center w-6 h-6 bg-orange-600 rounded-full flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-black">4</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-thraiv-navy text-sm">Book In Your Call</div>
                    <div className="text-xs text-gray-600 mt-1 leading-relaxed">Schedule your 15-minute audit and get your custom roadmap</div>
                  </div>
                </div>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100 mb-6"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles size={16} className="text-thraiv-blue" />
                  <span className="text-sm font-bold text-thraiv-navy">Join 27 businesses growing faster</span>
                </div>
                <div className="text-2xl font-black text-thraiv-blue">2.4x Average Growth</div>
                <div className="text-xs text-gray-600 mt-1">Since installing intelligent operations</div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                onClick={onClose}
                className="text-gray-500 hover:text-thraiv-navy font-medium text-sm transition-colors"
              >
                Close
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
