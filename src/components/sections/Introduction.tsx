import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Waves, Sun, Check } from 'lucide-react';
import { INTRODUCTION } from '../../constants/content';
import Card from '../ui/Card';
import SectionContainer from '../ui/SectionContainer';

/**
 * Introduction Section with:
 * - Taghazout location information
 * - Philosophy on why yoga and surfing work together
 * - Retreat overview and daily structure
 * - Scroll-triggered animations
 */
const Introduction: React.FC = () => {
  // Animation variants for scroll reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionContainer id="about" background="cream-100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-sand-900 mb-4">
            {INTRODUCTION.sectionTitle}
          </h2>
          <p className="text-xl text-ocean-600 italic font-serif flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" />
            {INTRODUCTION.tagline}
          </p>
        </motion.div>

        {/* Location Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image */}
          <motion.div variants={itemVariants} className="relative">
            <img
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80"
              alt="Colorful streets of Taghazout, Morocco"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Location Info */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-6">
            <h3 className="text-3xl font-bold text-sand-900">{INTRODUCTION.location.title}</h3>
            <p className="text-sand-800 leading-relaxed text-lg">
              {INTRODUCTION.location.description}
            </p>
            <ul className="space-y-3">
              {INTRODUCTION.location.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3 text-sand-800">
                  <Check className="w-5 h-5 text-ocean-600 flex-shrink-0 mt-1" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <Card background="sand" padding="lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-sand-900 mb-4">
                {INTRODUCTION.philosophy.title}
              </h3>
              <p className="text-sand-800 text-lg leading-relaxed max-w-3xl mx-auto">
                {INTRODUCTION.philosophy.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {INTRODUCTION.philosophy.points.map((point, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <Waves className="w-8 h-8 text-ocean-600" />}
                    {index === 1 && <Sun className="w-8 h-8 text-ocean-600" />}
                    {index === 2 && <Check className="w-8 h-8 text-ocean-600" />}
                  </div>
                  <h4 className="text-xl font-bold text-sand-900 mb-2">{point.title}</h4>
                  <p className="text-sand-700">{point.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Retreat Overview */}
        <motion.div variants={itemVariants}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Daily Structure */}
            <div>
              <h3 className="text-3xl font-bold text-sand-900 mb-4">
                {INTRODUCTION.retreatOverview.title}
              </h3>
              <p className="text-sand-800 text-lg leading-relaxed mb-6">
                {INTRODUCTION.retreatOverview.description}
              </p>
              <ul className="space-y-3">
                {INTRODUCTION.retreatOverview.dailyStructure.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sand-800">
                    <Check className="w-5 h-5 text-ocean-600 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80"
                alt="Sunrise yoga session on the beach"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};

export default Introduction;
