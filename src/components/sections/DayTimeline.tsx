import React from 'react';
import { motion } from 'framer-motion';
import {
  Sun,
  Sunrise,
  Sunset,
  Coffee,
  UtensilsCrossed,
  Waves,
  Flower2,
  Apple,
  Palmtree
} from 'lucide-react';

/**
 * DAY TIMELINE COMPONENT
 *
 * Displays a typical day schedule for retreat packages:
 * - Vertical timeline with elegant connecting line
 * - Color-coded Lucide React icons (NO emojis)
 * - Time, activity name, and description
 * - Scroll-triggered animations
 * - Mobile responsive
 */

export interface TimelineActivity {
  time: string;
  title: string;
  description: string;
  iconType: 'sun' | 'sunrise' | 'sunset' | 'coffee' | 'utensils' | 'waves' | 'flower' | 'apple' | 'palmtree';
  iconColor: 'ocean' | 'lavender' | 'jungle' | 'sand';
}

interface DayTimelineProps {
  packageName: string;
  title: string;
  activities: readonly TimelineActivity[];
  backgroundImage?: string;
}

const getIcon = (iconType: TimelineActivity['iconType'], color: string) => {
  const iconClass = `w-6 h-6 ${color}`;

  switch (iconType) {
    case 'sun':
      return <Sun className={iconClass} strokeWidth={1.5} />;
    case 'sunrise':
      return <Sunrise className={iconClass} strokeWidth={1.5} />;
    case 'sunset':
      return <Sunset className={iconClass} strokeWidth={1.5} />;
    case 'coffee':
      return <Coffee className={iconClass} strokeWidth={1.5} />;
    case 'utensils':
      return <UtensilsCrossed className={iconClass} strokeWidth={1.5} />;
    case 'waves':
      return <Waves className={iconClass} strokeWidth={1.5} />;
    case 'flower':
      return <Flower2 className={iconClass} strokeWidth={1.5} />;
    case 'apple':
      return <Apple className={iconClass} strokeWidth={1.5} />;
    case 'palmtree':
      return <Palmtree className={iconClass} strokeWidth={1.5} />;
    default:
      return <Sun className={iconClass} strokeWidth={1.5} />;
  }
};

const getIconColorClass = (color: TimelineActivity['iconColor']) => {
  switch (color) {
    case 'ocean':
      return 'text-ocean-500';
    case 'lavender':
      return 'text-lavender-500';
    case 'jungle':
      return 'text-jungle-500';
    case 'sand':
      return 'text-sand-500';
    default:
      return 'text-sand-500';
  }
};

const getIconBgClass = (color: TimelineActivity['iconColor']) => {
  switch (color) {
    case 'ocean':
      return 'bg-ocean-50';
    case 'lavender':
      return 'bg-lavender-50';
    case 'jungle':
      return 'bg-jungle-50';
    case 'sand':
      return 'bg-sand-50';
    default:
      return 'bg-sand-50';
  }
};

const DayTimeline: React.FC<DayTimelineProps> = ({
  packageName,
  title,
  activities,
  backgroundImage
}) => {
  return (
    <div className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Retreat atmosphere"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cream-50/95 via-cream-100/90 to-sand-50/95"></div>
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-sand-900 mb-3">
            {title}
          </h3>
          <p className="text-lg text-sand-700">
            {packageName}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[52px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-sand-300 via-sand-200 to-sand-300 hidden md:block"></div>

          {/* Timeline Activities */}
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row md:items-start gap-4 md:gap-6"
              >
                {/* Time */}
                <div className="md:w-20 flex-shrink-0">
                  <span className="text-sm font-semibold text-sand-900 md:text-right md:block">
                    {activity.time}
                  </span>
                </div>

                {/* Icon Circle */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${getIconBgClass(activity.iconColor)} flex items-center justify-center shadow-md relative z-10`}>
                  {getIcon(activity.iconType, getIconColorClass(activity.iconColor))}
                </div>

                {/* Activity Content */}
                <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-sand-900 mb-2">
                    {activity.title}
                  </h4>
                  <p className="text-sand-700 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayTimeline;
