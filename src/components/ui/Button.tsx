import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

/**
 * Reusable Button component with three variants and three sizes
 * - primary: Ocean blue filled button
 * - secondary: Sand beige filled button
 * - outline: Border only with ocean blue
 *
 * Uses Framer Motion for smooth hover animations
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-500';

  // Size variations
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Variant variations with custom colors from tailwind.config.js
  const variantClasses = {
    primary: `bg-ocean-600 text-white hover:bg-ocean-700 hover:shadow-lg shadow-md
              active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:scale-100`,
    secondary: `bg-sand-700 text-white hover:bg-sand-800 hover:shadow-lg shadow-md
                active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:scale-100`,
    outline: `border-2 border-ocean-600 text-ocean-600 bg-white hover:bg-ocean-50 hover:shadow-md shadow-sm
              active:scale-95 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed
              disabled:hover:scale-100 disabled:hover:bg-white`,
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
