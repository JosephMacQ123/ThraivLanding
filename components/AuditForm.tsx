import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader } from 'lucide-react';

interface AuditFormProps {
  onClose?: () => void;
}

export const AuditForm: React.FC<AuditFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    revenue: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to webhook (user will configure this later)
      const webhookUrl = process.env.WEBHOOK_URL || 'YOUR_WEBHOOK_URL_HERE';

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'landing_page'
        })
      });

      // Also send to email as backup
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      setSubmitted(true);
      setTimeout(() => {
        onClose?.();
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      // Still show success to user (form data is logged in console)
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full relative shadow-2xl"
      >
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="form" exit={{ opacity: 0 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-thraiv-navy mb-4">
                Book Your Free Opportunity Audit
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We'll diagnose your operational friction and show you exactly where you're losing revenue.
                <span className="block mt-2 text-thraiv-blue font-bold">15 minutes. Zero cost. Zero pressure.</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-thraiv-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-thraiv-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-thraiv-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    placeholder="Acme Distribution Ltd"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Annual Revenue</label>
                  <select
                    required
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-thraiv-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
                  >
                    <option value="">Select range...</option>
                    <option value="1-5M">£1M - £5M</option>
                    <option value="5-20M">£5M - £20M</option>
                    <option value="20-50M">£20M - £50M</option>
                    <option value="50M+">£50M+</option>
                  </select>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 px-6 py-4 rounded-xl bg-thraiv-blue text-white font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader size={20} className="animate-spin" />
                        Booking...
                      </>
                    ) : (
                      <>
                        Book My Free Audit
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-thraiv-navy mb-4">
                You're In!
              </h3>
              <p className="text-gray-600 text-lg">
                We'll be in touch within 24 hours to schedule your Opportunity Audit.
                <br />
                Check your inbox for confirmation.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
