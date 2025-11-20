import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import FAQ from '../components/sections/FAQ';

/**
 * FAQ PAGE
 *
 * Frequently Asked Questions:
 * - Accordion-style FAQ section
 * - Answers common retreat questions
 * - Reduces booking friction
 */
const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* FAQ Section */}
      <FAQ />

      {/* Terms & Conditions Reference */}
      <div className="bg-cream-50 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-ocean-50 to-sand-50 rounded-2xl p-8 lg:p-12 shadow-lg text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-ocean-600" strokeWidth={1.5} />
              <h2 className="text-2xl lg:text-3xl font-bold text-sand-900">
                Booking Policies & Terms
              </h2>
            </div>
            <p className="text-sand-700 text-lg mb-6 max-w-2xl mx-auto">
              Before booking your retreat, please review our complete terms and conditions,
              including cancellation policies, deposit requirements, and important legal information.
            </p>
            <Link
              to="/terms"
              className="inline-flex items-center gap-2 bg-ocean-500 hover:bg-ocean-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <FileText className="w-5 h-5" strokeWidth={2} />
              View Terms & Conditions
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
