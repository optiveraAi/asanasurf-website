import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Check, Star } from 'lucide-react';
import { PACKAGES } from '../../constants/content';
import Card from '../ui/Card';
import Button from '../ui/Button';

/**
 * Packages Section with:
 * - Three pricing tiers
 * - Highlighted "Most Popular" package
 * - Feature lists with checkmarks
 * - Call-to-action buttons
 * - Staggered animations
 */
const Packages: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="packages" className="section-container bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {PACKAGES.heading}
          </h2>
          <p className="text-xl text-gray-600">
            {PACKAGES.tagline}
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PACKAGES.packages.map((pkg) => (
            <motion.div key={pkg.id} variants={itemVariants}>
              <Card
                className={`h-full flex flex-col relative ${
                  pkg.highlighted
                    ? 'border-2 border-ocean-500 shadow-2xl scale-105'
                    : ''
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-ocean-500 to-ocean-600 text-white px-6 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-semibold">{pkg.badge}</span>
                    </div>
                  </div>
                )}

                <div className="flex-1">
                  {/* Package Header */}
                  <div className="text-center mb-6 pt-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-ocean-500 font-medium mb-4">
                      {pkg.duration}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-800">
                        {pkg.price}
                      </span>
                      {pkg.price.includes('$') && (
                        <span className="text-gray-600 ml-1">/ person</span>
                      )}
                    </div>
                    <p className="text-gray-600 italic">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-jungle-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link to="book" smooth={true} duration={800} offset={-80}>
                  <Button
                    variant={pkg.highlighted ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {pkg.id === 'custom' ? 'Contact Us' : 'Book Now'}
                  </Button>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center text-gray-600"
        >
          <p className="mb-2">All packages include equipment, instruction, and unforgettable memories.</p>
          <p>Need something different? We're happy to create a custom package just for you.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Packages;
