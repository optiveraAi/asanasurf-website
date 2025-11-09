import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Waves, Flower2, ArrowRight } from 'lucide-react';
import { PACKAGES } from '../../constants/content';

/**
 * PACKAGE PREVIEW CARDS
 *
 * Interactive preview cards for home page with:
 * - Beautiful background images
 * - Hover reveal animations
 * - Smooth transitions and overlays
 * - CTA buttons linking to packages page
 * - Mobile-friendly tap-to-reveal on mobile
 */

interface PackageCardProps {
  pkg: typeof PACKAGES.packages[0];
  isFirst: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, isFirst }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Short description for each package
  const shortDescription = isFirst
    ? "Dive into an all-inclusive surf adventure with complimentary yoga sessions. Perfect for aspiring surfers who want to ride Morocco's best waves while staying balanced and energized."
    : "Immerse yourself in twice-daily yoga practice by the ocean. Deepen your practice with experienced teachers, optional surf sessions, and transformative wellness experiences.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: isFirst ? 0 : 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
      className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer min-h-[500px] h-auto lg:h-[600px]"
      whileHover={{ y: -8 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={pkg.heroImage}
          alt={pkg.name}
          className="w-full h-full object-cover"
        />
        {/* Base gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-sand-900/80 via-sand-900/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
        {/* Top Section - Icon & Badge */}
        <div className="flex items-start justify-between">
          {/* Floating Icon */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
          >
            {isFirst ? (
              <Waves className="w-10 h-10 text-white" strokeWidth={1.5} />
            ) : (
              <Flower2 className="w-10 h-10 text-white" strokeWidth={1.5} />
            )}
          </motion.div>

          {/* Badge - Only for Yoga package */}
          {!isFirst && pkg.featured && (
            <div className="px-4 py-2 bg-ocean-500 text-white rounded-full font-semibold text-sm shadow-lg">
              Most Popular
            </div>
          )}
        </div>

        {/* Bottom Section - Package Info */}
        <div>
          {/* Default Content - Always Visible */}
          <div className="mb-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 drop-shadow-lg">
              {pkg.name}
            </h3>
            <p className="text-xl text-white/95 mb-4 drop-shadow">
              {pkg.tagline}
            </p>

            {/* Price Badge */}
            <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-2xl font-bold text-white">
                {pkg.price}
              </span>
              <span className="text-white/90 ml-2">/ {pkg.duration.split(' / ')[0]}</span>
            </div>
          </div>

          {/* Hover Overlay - Description & CTA (Hidden on mobile unless clicked) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3 }}
            className={`space-y-4 ${isHovered ? 'block' : 'hidden lg:block'}`}
          >
            {/* Dark overlay background for description */}
            <div className="p-6 bg-sand-900/90 backdrop-blur-sm rounded-2xl">
              <p className="text-white/95 leading-relaxed">
                {shortDescription}
              </p>
            </div>

            {/* View Full Details Button (shown on hover/click) */}
            <Link to={`/packages#${pkg.id}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-ocean-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-cream-50 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                View Full Details
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Always-Visible CTA on Mobile - Shows when not hovered on desktop */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className={isHovered ? 'hidden' : 'block'}
          >
            <Link to={`/packages#${pkg.id}`}>
              <button className="w-full bg-white/90 text-ocean-600 px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-bold text-base lg:text-lg shadow-xl hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 mt-4">
                View Full Details
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Main PackagePreview Section Component
 */
const PackagePreview: React.FC = () => {
  return (
    <section id="packages" className="bg-gradient-to-br from-cream-50 via-cream-100 to-sand-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-sand-900 mb-6">
            Choose Your Retreat
          </h2>
          <p className="text-xl lg:text-2xl text-sand-700">
            Two unique experiences, one unforgettable destination
          </p>
        </motion.div>

        {/* Package Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {PACKAGES.packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagePreview;
