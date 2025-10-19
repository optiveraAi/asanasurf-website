import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Check, Star } from 'lucide-react';
import { PACKAGES } from '../../constants/content';
import Button from '../ui/Button';

/**
 * Redesigned Packages Section with:
 * - Full-width images at top of each card
 * - Experience description below title
 * - "What's Included" section with features
 * - ALL cards same height (equal visual weight)
 * - Single "Book Now" button below all packages
 * - Warm, inviting retreat aesthetic
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
    <section id="packages" className="section-container bg-cream-200">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-sand-900 mb-4">
            {PACKAGES.heading}
          </h2>
          <p className="text-xl text-sand-700">
            {PACKAGES.tagline}
          </p>
        </motion.div>

        {/* Packages Grid - All Equal Height */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {PACKAGES.packages.map((pkg) => (
            <motion.div key={pkg.id} variants={itemVariants} className="flex">
              <div
                className={`flex flex-col bg-cream-50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl w-full ${
                  pkg.highlighted
                    ? 'ring-2 ring-ocean-500 relative'
                    : ''
                }`}
              >
                {/* Popular Badge - Outside Card */}
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-ocean-500 text-white px-6 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-semibold">{pkg.badge}</span>
                    </div>
                  </div>
                )}

                {/* Package Image - Full Width */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                  {/* Price Overlay on Image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sand-900/80 to-transparent p-4">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-sand-200 text-sm font-medium">{pkg.duration}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-bold text-white">
                          {pkg.price}
                        </span>
                        {pkg.price.includes('$') && (
                          <span className="text-white/90 text-sm ml-1">/ person</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Package Name */}
                  <h3 className="text-2xl font-bold text-sand-900 mb-3">
                    {pkg.name}
                  </h3>

                  {/* Experience Description */}
                  <p className="text-sand-700 leading-relaxed mb-6 text-base">
                    {pkg.experienceDescription}
                  </p>

                  {/* What's Included Section */}
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-sand-800 uppercase tracking-wide mb-3">
                      What's Included
                    </h4>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                          <Check className="w-5 h-5 text-earth-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sand-700 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Single Book Now Button - Centered Below All Packages */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <Link to="book" smooth={true} duration={800} offset={-80}>
            <Button variant="primary" className="text-lg px-12 py-4">
              Book Your Retreat
            </Button>
          </Link>
          <p className="mt-6 text-sand-600 text-sm">
            All packages include equipment, expert instruction, and unforgettable memories
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Packages;
