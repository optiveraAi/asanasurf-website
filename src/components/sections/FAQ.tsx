import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * FAQ ACCORDION COMPONENT
 *
 * Expandable FAQ section with:
 * - Smooth accordion animations
 * - Click to expand/collapse
 * - Clean, professional design
 * - Mobile-friendly
 */

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Do I need prior surf or yoga experience?',
    answer: 'Not at all! Our retreats welcome all levels. We have separate groups for beginners and experienced practitioners, so you\'ll always feel comfortable and challenged at your level.',
  },
  {
    question: 'What should I pack?',
    answer: 'Swimwear, sunscreen (reef-safe), comfortable clothes, light layers for evenings, and an open mind! We provide all surf equipment and yoga mats.',
  },
  {
    question: 'What\'s the weather like in Taghazout?',
    answer: 'Taghazout enjoys year-round sunshine with mild temperatures. Expect 20-25°C (68-77°F) most of the year. Best surf conditions are October-April.',
  },
  {
    question: 'Can I come solo?',
    answer: 'Absolutely! Many of our guests travel solo and love the community atmosphere. You\'ll make friends quickly through shared meals and activities.',
  },
  {
    question: 'Are meals included?',
    answer: 'Yes! All packages include healthy breakfast, packed lunch, and evening meals featuring local Moroccan cuisine and international options.',
  },
  {
    question: 'How do I get there?',
    answer: 'We include Agadir Airport transfers in all packages. Fly into Agadir (AGA), and we\'ll handle the rest - it\'s just 30 minutes to Taghazout.',
  },
  {
    question: 'What if I need to cancel?',
    answer: 'Contact us for our flexible cancellation policy. We understand that plans can change and work with you to find the best solution.',
  },
];

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-sand-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 px-6 flex items-center justify-between text-left hover:bg-sand-50 transition-colors duration-200 rounded-lg"
      >
        <span className="text-lg font-semibold text-sand-900 pr-4">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-6 h-6 text-ocean-500" strokeWidth={2} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-sand-700 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-cream-50 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-sand-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-sand-700">
            Everything you need to know about your retreat
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => toggleItem(index)}
            />
          ))}
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sand-700 text-lg">
            Still have questions?{' '}
            <a
              href="#contact"
              className="text-ocean-500 hover:text-ocean-600 font-semibold underline"
            >
              Contact us
            </a>{' '}
            - we're here to help!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
