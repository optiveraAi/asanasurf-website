import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Heart, Users, Palmtree } from 'lucide-react';
import { INTRO } from '../../constants/content';
import Card from '../ui/Card';

/**
 * Introduction Section with:
 * - Brand philosophy and messaging
 * - Benefits grid with icons
 * - Scroll-triggered animations
 * - Two-column layout on desktop
 */
const Introduction: React.FC = () => {
  // Map benefit icons (using Lucide icons, NO emojis!)
  const icons = {
    Balance: Scale,
    Transformation: Heart,
    Community: Users,
    Nature: Palmtree,
  };

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
    <section id="about" className="section-container bg-gradient-to-b from-white to-sand-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {INTRO.heading}
          </h2>
          <p className="text-xl text-ocean-500 italic font-serif">
            {INTRO.tagline}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Image */}
          <motion.div variants={itemVariants} className="relative">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
              alt="Yoga on the beach at sunset"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-6">
            {INTRO.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {INTRO.benefits.map((benefit) => {
            const IconComponent = icons[benefit.title as keyof typeof icons];

            return (
              <motion.div key={benefit.title} variants={itemVariants}>
                <Card className="text-center h-full">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-ocean-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Introduction;
