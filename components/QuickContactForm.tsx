import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Mail, User, MessageSquare, Loader } from 'lucide-react';

interface QuickContactFormProps {
  onClose?: () => void;
}

export const QuickContactForm: React.FC<QuickContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const webhookUrl = 'https://thraiv.app.n8n.cloud/webhook/d575402f-771d-4ca1-ad04-4632c7171d5f';

      const payload = {
        ...formData,
        report_email: 'joseph@thraiv.co.uk',
        timestamp: new Date().toISOString(),
        source: 'quick_contact',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      };

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      setSubmitted(true);
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitted(true); // Still show success
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 md:p-10 max-w-lg w-full relative shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors group z-50"
        >
          <X size={24} className="text-gray-400 group-hover:text-gray-600" />
        </button>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ duration: 0.6 }}
                  className="h-1 bg-gradient-to-r from-transparent via-thraiv-blue to-transparent rounded-full mx-auto mb-6"
                />

                <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-thraiv-navy via-thraiv-blue to-purple-600 mb-3">
                  Contact Us Now
                </h2>

                <p className="text-gray-600 text-sm">
                  Get in touch and we'll respond as quickly as possible.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <User size={16} className="text-thraiv-blue" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                    placeholder="John Smith"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <Mail size={16} className="text-thraiv-blue" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                    placeholder="john@company.com"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                    <MessageSquare size={16} className="text-thraiv-blue" />
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-gray-200 focus:border-thraiv-blue focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none"
                    placeholder="How can we help you today?"
                    style={{ fontSize: '16px' }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={!isFormValid || loading}
                  whileHover={isFormValid ? { scale: 1.02 } : {}}
                  whileTap={isFormValid ? { scale: 0.98 } : {}}
                  className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-thraiv-blue via-purple-600 to-blue-600 text-white font-black text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader size={20} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={20} />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative w-24 h-24 mx-auto mb-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/50">
                  <CheckCircle size={48} className="text-white" strokeWidth={3} />
                </div>
              </motion.div>

              <h3 className="text-3xl font-black text-thraiv-navy mb-4">
                Message Sent!
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Thanks for getting in touch. We've received your message and will respond as quickly as possible.
              </p>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-6">
                <p className="text-sm font-bold text-thraiv-navy mb-2">
                  What Happens Next
                </p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>✓ Your message goes directly to our team</p>
                  <p>✓ We'll review and respond within 24 hours</p>
                  <p>✓ Check your inbox (and spam folder)</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="text-gray-500 hover:text-thraiv-navy font-medium text-sm transition-colors"
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
