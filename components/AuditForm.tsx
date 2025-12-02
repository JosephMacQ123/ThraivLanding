import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader, X, Clock, Sparkles, AlertTriangle, ChevronRight, Mail, User, Building2, MessageSquare, HelpCircle } from 'lucide-react';
import { REVENUE_LEAK_AUDIT, COPY } from '../constants';

// Tooltip component
const Tooltip: React.FC<{ text: string }> = ({ text }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
        className="ml-1.5 text-gray-400 hover:text-thraiv-blue transition-colors"
      >
        <HelpCircle size={14} />
      </button>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-6 z-50 bg-thraiv-navy text-white text-xs px-3 py-2 rounded-lg shadow-xl whitespace-nowrap pointer-events-none"
          >
            {text}
            <div className="absolute -top-1 left-4 w-2 h-2 bg-thraiv-navy transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AuditFormProps {
  onClose?: () => void;
}

interface FormData {
  // Contact info
  name: string;
  email: string;
  company: string;

  // Step 1: Quote & Enquiry Speed
  rfqs_per_day: string;
  quote_turnaround: string;
  response_speed: string;

  // Step 2: Workload & Pressure Points
  email_volume: string;
  chasing_frequency: string;
  staff_count: string;

  // Step 3: Operational Reality Check
  visibility_level: string;
  main_bottleneck: string;
  process_consistency: string;
  error_frequency: string;
  average_order_value: string;
}

interface LeadFormData {
  name: string;
  email: string;
  company: string;
  comments: string;
}

export const AuditForm: React.FC<AuditFormProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0); // 0 = contact, 1-3 = audit steps, 4 = confirmation
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    rfqs_per_day: '',
    quote_turnaround: '',
    response_speed: '',
    email_volume: '',
    chasing_frequency: '',
    staff_count: '',
    visibility_level: '',
    main_bottleneck: '',
    process_consistency: '',
    error_frequency: '',
    average_order_value: ''
  });

  const [leadFormData, setLeadFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    company: '',
    comments: ''
  });

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showBuilding, setShowBuilding] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadFormSubmitted, setLeadFormSubmitted] = useState(false);
  const [showResumeNotification, setShowResumeNotification] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  // Load saved progress
  useEffect(() => {
    const saved = localStorage.getItem('thraiv_revenue_audit_draft');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.currentStep > 0) {
          setShowResumeNotification(true);
          setTimeout(() => setShowResumeNotification(false), 5000);
        }
        setFormData(parsed.formData || formData);
        setCurrentStep(parsed.currentStep || 0);
      } catch (e) {
        console.error('Failed to load draft:', e);
      }
    }
  }, []);

  // Auto-save progress
  useEffect(() => {
    if (currentStep > 0 && currentStep < 4) {
      localStorage.setItem('thraiv_revenue_audit_draft', JSON.stringify({
        formData,
        currentStep
      }));
    }
  }, [formData, currentStep]);

  // Email validation with typo suggestions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('');
      return false;
    }
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }

    // Check for common typos
    const commonDomains = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com'];
    const domain = email.split('@')[1];
    const suggestions = commonDomains.filter(d =>
      d.substring(0, 3) === domain?.substring(0, 3) && d !== domain
    );

    if (suggestions.length > 0) {
      setEmailError(`Did you mean ${email.split('@')[0]}@${suggestions[0]}?`);
      return true; // Still valid, just suggesting
    }

    setEmailError('');
    return true;
  };

  // Update form data
  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'email') {
      validateEmail(value);
    }
  };

  // Check if contact step is complete
  const isContactStepComplete = () => {
    return formData.name && formData.email && formData.company && !emailError;
  };

  // Check if current audit step is complete
  const isCurrentAuditStepComplete = () => {
    if (currentStep === 0) return isContactStepComplete();
    if (currentStep < 1 || currentStep > 3) return false;

    const step = REVENUE_LEAK_AUDIT.STEPS[currentStep - 1];
    return step.fields
      .filter(f => f.required)
      .every(f => formData[f.id as keyof FormData]);
  };

  // Handle next step
  const handleNext = () => {
    if (isCurrentAuditStepComplete()) {
      if (currentStep === 3) {
        // Submit the form
        handleSubmit();
      } else {
        setCurrentStep(currentStep + 1);
        modalContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Handle back
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      modalContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Submit main audit
  const handleSubmit = async () => {
    setLoading(true);
    setShowBuilding(true);

    try {
      const webhookUrl = 'https://thraiv.app.n8n.cloud/webhook/6d6d47fd-4dd0-4b21-97fb-ccfda1bc2592';

      const payload = {
        ...formData,
        report_email: 'joseph@thraiv.co.uk', // Always send report to Joseph
        timestamp: new Date().toISOString(),
        source: 'revenue_leak_audit',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      // Show building animation for 2.5 seconds
      setTimeout(() => {
        setShowBuilding(false);
        setCurrentStep(4);
        localStorage.removeItem('thraiv_revenue_audit_draft');
        modalContentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      }, 2500);

    } catch (error) {
      console.error('Submission error:', error);
      // Still show success to user
      setTimeout(() => {
        setShowBuilding(false);
        setCurrentStep(4);
        localStorage.removeItem('thraiv_revenue_audit_draft');
      }, 2500);
    } finally {
      setLoading(false);
    }
  };

  // Submit lead form
  const handleLeadFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const webhookUrl = 'https://thraiv.app.n8n.cloud/webhook/6d6d47fd-4dd0-4b21-97fb-ccfda1bc2592';

      const payload = {
        ...leadFormData,
        report_email: 'joseph@thraiv.co.uk', // Always notify Joseph
        timestamp: new Date().toISOString(),
        source: 'revenue_audit_callback',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      setLeadFormSubmitted(true);
    } catch (error) {
      console.error('Lead form error:', error);
      setLeadFormSubmitted(true); // Still show success
    }
  };

  // Confetti animation
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

  // Get time estimate for current step
  const getTimeEstimate = () => {
    if (currentStep === 0) return 30;
    if (currentStep >= 1 && currentStep <= 3) {
      return REVENUE_LEAK_AUDIT.STEPS[currentStep - 1].estimatedTime;
    }
    return 0;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-sm overflow-y-auto py-8" onClick={onClose}>
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        ref={modalContentRef}
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 md:p-10 max-w-2xl w-full relative shadow-2xl border border-white/20 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors group z-50"
        >
          <X size={24} className="text-gray-400 group-hover:text-gray-600" />
        </button>

        {/* Resume Notification */}
        <AnimatePresence>
          {showResumeNotification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-6 left-6 right-20 bg-blue-50 border-2 border-blue-200 rounded-xl p-3 z-40 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-thraiv-blue flex-shrink-0" />
                <p className="text-sm font-bold text-thraiv-navy">
                  Welcome back! Picking up where you left off.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {/* BUILDING ANIMATION */}
          {showBuilding && (
            <motion.div
              key="building"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <Confetti />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mx-auto mb-6"
              >
                <Sparkles size={80} className="text-thraiv-blue" />
              </motion.div>

              <h3 className="text-3xl font-bold text-thraiv-navy mb-4">
                {REVENUE_LEAK_AUDIT.CONFIRMATION.HEADLINE}
              </h3>

              <p className="text-gray-600 mb-8">
                {REVENUE_LEAK_AUDIT.CONFIRMATION.BUILDING_MESSAGE}
              </p>

              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-thraiv-blue to-purple-600"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          )}

          {/* CONTACT STEP (Step 0) */}
          {!showBuilding && currentStep === 0 && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ duration: 0.6 }}
                  className="h-1 bg-gradient-to-r from-transparent via-thraiv-blue to-transparent rounded-full mx-auto mb-6"
                />

                <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-thraiv-navy via-thraiv-blue to-purple-600 mb-3">
                  {REVENUE_LEAK_AUDIT.INTRO_HEADLINE}
                </h2>

                <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-blue-50 px-4 py-2 rounded-full mb-6">
                  <Clock size={16} className="text-thraiv-blue" />
                  <span>Est. {getTimeEstimate()} seconds</span>
                </div>
              </div>

              {/* Intro Content */}
              <div className="mb-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-100">
                <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                  {REVENUE_LEAK_AUDIT.INTRO_PARAGRAPH}
                </p>
                <p className="text-sm text-gray-600 italic">
                  {REVENUE_LEAK_AUDIT.INTRO_REASSURANCE}
                </p>
              </div>

              {/* Contact Form */}
              <div className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <User size={16} className="text-thraiv-blue" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                    placeholder="John Smith"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <Mail size={16} className="text-thraiv-blue" />
                    Work Email
                    <Tooltip text="We'll send your report here" />
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    onBlur={(e) => validateEmail(e.target.value)}
                    className={`w-full px-4 py-3.5 text-base rounded-xl border-2 ${emailError && !emailError.includes('Did you mean') ? 'border-red-300' : 'border-gray-200'} focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all`}
                    placeholder="john@company.com"
                    style={{ fontSize: '16px' }}
                  />
                  {emailError && (
                    <p className={`text-sm mt-2 ${emailError.includes('Did you mean') ? 'text-orange-600' : 'text-red-600'}`}>
                      {emailError}
                    </p>
                  )}
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <Building2 size={16} className="text-thraiv-blue" />
                    Company
                    <Tooltip text="Helps us personalise your report" />
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => updateFormData('company', e.target.value)}
                    className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                    placeholder="Acme Distribution Ltd"
                    style={{ fontSize: '16px' }}
                  />
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  {REVENUE_LEAK_AUDIT.TRUST_LINE}
                </p>
              </div>

              {/* Next Button */}
              <motion.button
                onClick={handleNext}
                disabled={!isContactStepComplete()}
                whileHover={isContactStepComplete() ? { scale: 1.02 } : {}}
                whileTap={isContactStepComplete() ? { scale: 0.98 } : {}}
                className="w-full mt-8 px-6 py-5 rounded-xl bg-gradient-to-r from-thraiv-blue via-purple-600 to-blue-600 text-white font-black text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Start Audit</span>
                <ChevronRight size={20} />
              </motion.button>
            </motion.div>
          )}

          {/* AUDIT STEPS (Steps 1-3) */}
          {!showBuilding && currentStep >= 1 && currentStep <= 3 && (
            <motion.div
              key={`step-${currentStep}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {(() => {
                const step = REVENUE_LEAK_AUDIT.STEPS[currentStep - 1];

                return (
                  <>
                    {/* Progress Indicator */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-bold text-gray-600">
                          Step {currentStep} of 3
                        </span>
                        <div className="flex items-center gap-2 text-sm text-gray-600 bg-blue-50 px-3 py-1.5 rounded-full">
                          <Clock size={14} className="text-thraiv-blue" />
                          <span>~{step.estimatedTime}s</span>
                        </div>
                      </div>

                      {/* Progress Dots */}
                      <div className="flex gap-2">
                        {[1, 2, 3].map((num) => (
                          <div
                            key={num}
                            className={`h-2 flex-1 rounded-full transition-all ${
                              num <= currentStep
                                ? 'bg-gradient-to-r from-thraiv-blue to-purple-600'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Step Header */}
                    <div className="mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-thraiv-navy mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        {step.intro}
                      </p>
                    </div>

                    {/* Fields */}
                    <div className="space-y-5">
                      {step.fields.map((field) => (
                        <div key={field.id}>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            {field.label}
                            {!field.required && (
                              <span className="text-gray-400 font-normal ml-2">(optional)</span>
                            )}
                          </label>

                          {field.helperText && (
                            <p className="text-sm text-gray-500 mb-2">{field.helperText}</p>
                          )}

                          <select
                            required={field.required}
                            value={formData[field.id as keyof FormData]}
                            onChange={(e) => updateFormData(field.id as keyof FormData, e.target.value)}
                            className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all bg-white appearance-none cursor-pointer"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%232676FF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'right 1rem center',
                              backgroundSize: '1.25rem'
                            }}
                          >
                            {field.options?.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 mt-8">
                      <button
                        onClick={handleBack}
                        className="px-6 py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-all"
                      >
                        Back
                      </button>

                      <motion.button
                        onClick={handleNext}
                        disabled={!isCurrentAuditStepComplete() || loading}
                        whileHover={isCurrentAuditStepComplete() ? { scale: 1.02 } : {}}
                        whileTap={isCurrentAuditStepComplete() ? { scale: 0.98 } : {}}
                        className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-thraiv-blue via-purple-600 to-blue-600 text-white font-black text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <Loader size={20} className="animate-spin" />
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>{currentStep === 3 ? REVENUE_LEAK_AUDIT.SUBMIT_BUTTON : 'Next'}</span>
                            {currentStep === 3 ? <Sparkles size={20} /> : <ChevronRight size={20} />}
                          </>
                        )}
                      </motion.button>
                    </div>

                    {currentStep === 3 && (
                      <p className="text-center text-sm text-gray-500 mt-4">
                        {REVENUE_LEAK_AUDIT.SUBMIT_REASSURANCE}
                      </p>
                    )}
                  </>
                );
              })()}
            </motion.div>
          )}

          {/* CONFIRMATION PAGE (Step 4) */}
          {!showBuilding && currentStep === 4 && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6"
            >
              <Confetti />

              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative w-24 h-24 mx-auto mb-6"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50"
                >
                  <CheckCircle size={48} className="text-white" strokeWidth={3} />
                </motion.div>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-black text-thraiv-navy mb-4 text-center">
                Report Building Complete!
              </h3>

              {/* YouTube Section */}
              <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-100 rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Sparkles size={18} className="text-red-600" />
                  <h4 className="text-lg font-bold text-gray-800">
                    {REVENUE_LEAK_AUDIT.CONFIRMATION.YOUTUBE_SECTION.HEADLINE}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  {REVENUE_LEAK_AUDIT.CONFIRMATION.YOUTUBE_SECTION.SUBHEADLINE}
                </p>
                <a
                  href={COPY.FRICTION.YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all hover:scale-105 active:scale-95 w-full justify-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  {REVENUE_LEAK_AUDIT.CONFIRMATION.YOUTUBE_SECTION.BUTTON_TEXT}
                </a>
              </div>

              {/* Lead Form Section */}
              {!showLeadForm && !leadFormSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <button
                    onClick={() => {
                      setShowLeadForm(true);
                      setLeadFormData({
                        name: formData.name,
                        email: formData.email,
                        company: formData.company,
                        comments: ''
                      });
                    }}
                    className="w-full bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-6 hover:border-blue-300 transition-all group"
                  >
                    <h4 className="text-xl font-bold text-thraiv-navy mb-2 group-hover:text-thraiv-blue transition-colors">
                      {REVENUE_LEAK_AUDIT.CONFIRMATION.LEAD_FORM.HEADLINE}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {REVENUE_LEAK_AUDIT.CONFIRMATION.LEAD_FORM.SUBHEADLINE}
                    </p>
                    <div className="inline-flex items-center gap-2 text-thraiv-blue font-bold">
                      <span>Click to book</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                </motion.div>
              )}

              {showLeadForm && !leadFormSubmitted && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-6"
                >
                  <h4 className="text-xl font-bold text-thraiv-navy mb-4">
                    {REVENUE_LEAK_AUDIT.CONFIRMATION.LEAD_FORM.HEADLINE}
                  </h4>

                  <form onSubmit={handleLeadFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={leadFormData.name}
                        onChange={(e) => setLeadFormData({...leadFormData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={leadFormData.email}
                        onChange={(e) => setLeadFormData({...leadFormData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        required
                        value={leadFormData.company}
                        onChange={(e) => setLeadFormData({...leadFormData, company: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        What would help most right now?
                      </label>
                      <textarea
                        rows={3}
                        value={leadFormData.comments}
                        onChange={(e) => setLeadFormData({...leadFormData, comments: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none"
                        placeholder="Optional - helps us prepare for the call"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-thraiv-blue to-purple-600 text-white font-bold hover:shadow-xl transition-all"
                    >
                      {REVENUE_LEAK_AUDIT.CONFIRMATION.LEAD_FORM.BUTTON_TEXT}
                    </button>
                  </form>
                </motion.div>
              )}

              {leadFormSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center"
                >
                  <CheckCircle size={40} className="text-green-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-green-900 mb-2">
                    Call Request Received!
                  </h4>
                  <p className="text-sm text-green-700">
                    We'll be in touch shortly to schedule your call.
                  </p>
                </motion.div>
              )}

              {/* Next Steps */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  {REVENUE_LEAK_AUDIT.CONFIRMATION.NEXT_STEPS.HEADLINE}
                </h4>

                <div className="space-y-4">
                  {REVENUE_LEAK_AUDIT.CONFIRMATION.NEXT_STEPS.STEPS.map((step, i) => (
                    <div key={i} className="flex items-start gap-4 bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-center justify-center w-8 h-8 bg-thraiv-blue rounded-full flex-shrink-0">
                        <span className="text-white text-sm font-black">{step.number}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-thraiv-navy text-sm mb-1">{step.title}</div>
                        <div className="text-xs text-gray-600">{step.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spam Warning */}
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 justify-center text-sm font-bold text-yellow-800">
                  <AlertTriangle size={16} />
                  <span>Check your spam folder!</span>
                </div>
                <p className="text-xs text-yellow-700 mt-1 text-center">
                  Our report might land there - don't miss it
                </p>
              </div>

              {/* Trust Line */}
              <p className="text-center text-sm text-gray-500">
                {REVENUE_LEAK_AUDIT.CONFIRMATION.TRUST_LINE}
              </p>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-full mt-6 text-gray-500 hover:text-thraiv-navy font-medium text-sm transition-colors"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
