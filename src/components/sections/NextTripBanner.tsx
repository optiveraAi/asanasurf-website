import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Calendar } from 'lucide-react';
import { NEXT_TRIP } from '../../constants/content';

/**
 * Next Trip Banner Component
 *
 * Elegant glass-morphism banner displaying upcoming trip information
 * Positioned at the bottom of the hero section
 * Clickable - links to booking page
 */
const NextTripBanner: React.FC = () => {
  // Don't render if not available
  if (!NEXT_TRIP.available) {
    return null;
  }

  return (
    <Link to="/book" className="block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        whileHover={{ scale: 1.02, y: -4 }}
        className="
          relative
          bg-transparent
          border-2
          border-white/70
          hover:border-white
          rounded-2xl
          hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]
          transition-all
          duration-300
          cursor-pointer
          overflow-hidden
          mx-4
          sm:mx-8
          md:mx-auto
          max-w-2xl
          group
        "
      >

        {/* Content */}
        <div className="relative z-10 px-6 py-4 sm:px-8 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {/* Next Trip Label */}
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-1">
                Next Trip
              </p>
            </div>

            {/* Vertical Divider - Hidden on mobile */}
            <div className="hidden sm:block w-px h-12 bg-white/30" />

            {/* Location */}
            <div className="flex items-center gap-2 text-center sm:text-left">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
              <div>
                <p className="text-sm sm:text-base font-bold text-white">
                  {NEXT_TRIP.destination}
                </p>
              </div>
            </div>

            {/* Vertical Divider - Hidden on mobile */}
            <div className="hidden sm:block w-px h-12 bg-white/30" />

            {/* Dates */}
            <div className="flex items-center gap-2 text-center sm:text-left">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
              <div>
                <p className="text-sm sm:text-base font-bold text-white">
                  {NEXT_TRIP.dates}
                </p>
              </div>
            </div>

            {/* Arrow indicator on hover */}
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileHover={{ x: 4, opacity: 1 }}
              className="hidden lg:block"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default NextTripBanner;
