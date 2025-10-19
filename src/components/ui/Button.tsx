import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

/**
 * Reusable Button component with two variants:
 * - primary: Filled ocean blue button
 * - secondary: Outlined ocean blue button
 */
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'px-8 py-3 rounded-full font-medium transition-all duration-300';

  const variantClasses = {
    primary: `bg-ocean-500 text-white hover:bg-ocean-600 hover:scale-105 hover:shadow-lg
              active:scale-95 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:scale-100`,
    secondary: `border-2 border-ocean-500 text-ocean-500 hover:bg-ocean-50 hover:scale-105
                active:scale-95 disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed
                disabled:hover:scale-100 disabled:hover:bg-transparent`,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
