import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle } from 'lucide-react';
import { TERMS_CONDITIONS } from '../constants/content';

/**
 * TERMS & CONDITIONS PAGE
 *
 * Full legal terms and conditions for Asana Surf retreats.
 * Accessible via footer link and FAQ section, but not in main navigation.
 *
 * Features:
 * - Clean, readable typography
 * - Organized into logical sections
 * - Professional legal presentation
 * - Mobile-friendly layout
 */
const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-cream-50">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="w-10 h-10 text-ocean-500" strokeWidth={1.5} />
            <h1 className="text-4xl lg:text-5xl font-bold text-sand-900">
              {TERMS_CONDITIONS.title}
            </h1>
          </div>
          <p className="text-sand-600 text-lg">
            Last updated: {TERMS_CONDITIONS.lastUpdated}
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-ocean-50 border-l-4 border-ocean-500 rounded-lg p-6 mb-12"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-ocean-600 flex-shrink-0 mt-1" strokeWidth={2} />
            <div>
              <h2 className="text-lg font-bold text-sand-900 mb-2">
                Important Information
              </h2>
              <p className="text-sand-700 leading-relaxed">
                Please read these terms and conditions carefully before booking your retreat.
                By making a booking with Asana Surf, you agree to be bound by these terms and conditions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-10">
          {TERMS_CONDITIONS.sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              {/* Section Title */}
              <h2 className="text-2xl font-bold text-sand-900 mb-4 pb-3 border-b border-sand-200">
                {section.title}
              </h2>

              {/* Section Content */}
              <div className="space-y-4">
                {section.content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={`text-sand-700 leading-relaxed ${
                      paragraph.startsWith('•') ? 'pl-4' : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Contact Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-br from-sand-50 to-cream-100 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-sand-900 mb-3">
            Questions About Our Terms?
          </h3>
          <p className="text-sand-700 mb-4">
            If you have any questions or concerns regarding these terms and conditions,
            please don't hesitate to contact us.
          </p>
          <a
            href="mailto:solhsurf@gmail.com"
            className="inline-block text-ocean-600 hover:text-ocean-700 font-semibold underline"
          >
            solhsurf@gmail.com
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage;
