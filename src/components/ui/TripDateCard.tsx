import React from 'react';
import { motion } from 'framer-motion';
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
}

/**
 * Trip Date Card Component
 *
 * Large clickable card for trip date selection
 * Features:
 * - Radio button (hidden but accessible)
 * - Visual card with date, location, duration
 * - Selected state styling
 * - Hover effects and animations
 * - Fully responsive
 */
const TripDateCard: React.FC<TripDateCardProps> = ({ trip, selected, onChange }) => {
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
        className={`
          relative
          p-6
          rounded-xl
          border-2
          transition-all
          duration-300
          ${
            selected
              ? 'border-ocean-500 bg-ocean-50 shadow-lg shadow-ocean-200/50'
              : 'border-gray-200 bg-white hover:border-ocean-300 hover:shadow-md'
          }
        `}
      >
        {/* Selected Checkmark */}
        {selected && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="absolute top-4 right-4"
          >
            <CheckCircle className="w-6 h-6 text-ocean-600 fill-ocean-100" />
          </motion.div>
        )}

        {/* Date Range - Prominent */}
        <div className="mb-4">
          <p
            className={`
              text-2xl
              sm:text-3xl
              font-bold
              ${selected ? 'text-ocean-700' : 'text-gray-800'}
            `}
          >
            {trip.dateRange}
          </p>
        </div>

        {/* Location and Duration */}
        <div className="space-y-2">
          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin
              className={`w-5 h-5 flex-shrink-0 ${
                selected ? 'text-ocean-600' : 'text-gray-500'
              }`}
            />
            <p
              className={`text-base sm:text-lg ${
                selected ? 'text-ocean-700 font-medium' : 'text-gray-700'
              }`}
            >
              {trip.location}
            </p>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-2">
            <Calendar
              className={`w-5 h-5 flex-shrink-0 ${
                selected ? 'text-ocean-600' : 'text-gray-500'
              }`}
            />
            <p
              className={`text-base sm:text-lg ${
                selected ? 'text-ocean-700 font-medium' : 'text-gray-700'
              }`}
            >
              {trip.duration}
            </p>
          </div>
        </div>

        {/* Selected indicator bar */}
        {selected && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-ocean-400 via-ocean-500 to-jungle-400 rounded-b-xl"
          />
        )}
      </motion.div>
    </motion.label>
  );
};

export default TripDateCard;
