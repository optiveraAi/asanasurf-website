import React from 'react';
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
    </div>
  );
};

export default FAQPage;
