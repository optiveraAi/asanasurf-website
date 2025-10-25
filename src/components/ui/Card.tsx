import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  background?: 'cream' | 'sand' | 'white';
  padding?: 'sm' | 'md' | 'lg';
}

/**
 * Reusable Card component with optional hover effect
 * Used for packages, benefits, and other content sections
 *
 * Provides warm cream/sand backgrounds with subtle shadows
 * Uses Framer Motion for smooth hover elevation
 */
const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  background = 'cream',
  padding = 'md',
}) => {
  const baseClasses = 'rounded-2xl shadow-md transition-all duration-300';

  // Background color options from tailwind.config.js
  const backgroundClasses = {
    cream: 'bg-cream-100',
    sand: 'bg-cream-200',
    white: 'bg-white',
  };

  // Padding variations
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClasses = hover ? 'hover:shadow-xl' : '';

  if (hover) {
    return (
      <motion.div
        className={`${baseClasses} ${backgroundClasses[background]} ${paddingClasses[padding]} ${hoverClasses} ${className}`}
        whileHover={{ y: -4, transition: { duration: 0.3, ease: 'easeOut' } }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseClasses} ${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
