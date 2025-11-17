import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

interface Trip {
  id: string;
  dateRange: string;
  location: string;
  duration: string;
}

interface TripDateCardProps {
  trip: Trip;
  selected: boolean;
  onChange: () => void;
  backgroundImage?: string;
}

/**
 * Trip Date Card Component
 *
 * Compact clickable card for trip date selection with background image
 * Features:
 * - Radio button (hidden but accessible)
 * - Background image based on selected package
 * - White text with backdrop for visibility
 * - White outline border
 * - Business card layout with image on right
 * - Selected state styling
 * - Hover effects and animations
 * - Fully responsive
 */
const TripDateCard: React.FC<TripDateCardProps> = ({ trip, selected, onChange, backgroundImage }) => {
  return (
    <motion.label
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="block cursor-pointer"
    >
      <input
        type="radio"
        name="trip-date"
        value={trip.id}
        checked={selected}
        onChange={onChange}
        className="sr-only"
      />

      <motion.div
        whileHover={{ scale: 1.01, y: -2 }}
        whileTap={{ scale: 0.99 }}
        className="relative overflow-hidden"
      >
        <div
          className={`
            relative
            h-32
            sm:h-36
            rounded-xl
            border-3
            transition-all
            duration-300
            overflow-hidden
            ${
              selected
                ? 'border-white shadow-lg shadow-ocean-400/50'
                : 'border-white hover:border-white hover:shadow-md'
            }
          `}
          style={{
            borderWidth: '3px',
          }}
        >
          {/* Background Image - Positioned right with gradient overlay */}
          {backgroundImage && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: '65% center',
              }}
            >
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>
          )}

          {/* Fallback background if no image */}
          {!backgroundImage && (
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-600 to-ocean-400">
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            </div>
          )}

          {/* Content Container */}
          <div className="relative z-10 h-full flex items-center p-4 sm:p-5">
            {/* Text Content - Left Side */}
            <div className="flex-1 space-y-2">
              {/* Date Range - Prominent */}
              <p
                className="text-lg sm:text-xl font-bold text-white"
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 1px 3px rgba(0,0,0,0.8)',
                }}
              >
                {trip.dateRange}
              </p>

              {/* Location and Duration */}
              <div className="space-y-1">
                {/* Location */}
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 text-white drop-shadow-lg" />
                  <p
                    className="text-sm sm:text-base text-white font-medium"
                    style={{
                      textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                    }}
                  >
                    {trip.location}
                  </p>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 flex-shrink-0 text-white drop-shadow-lg" />
                  <p
                    className="text-sm sm:text-base text-white font-medium"
                    style={{
                      textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                    }}
                  >
                    {trip.duration}
                  </p>
                </div>
              </div>
            </div>

            {/* Selected Checkmark - Top Right */}
            <AnimatePresence>
              {selected && (
                <motion.div
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0, rotate: 180, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="absolute top-3 right-3"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                    <CheckCircle className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Selected indicator bar */}
          <AnimatePresence>
            {selected && (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                exit={{ scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ocean-400 via-white to-jungle-400"
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.label>
  );
};

export default TripDateCard;
