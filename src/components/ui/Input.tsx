import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
  name?: string;
  maxLength?: number;
}

/**
 * Reusable Input component with consistent styling
 * Includes focus states and validation styling
 */
const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  className = '',
  name,
  maxLength,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      maxLength={maxLength}
      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg
                  focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-200
                  transition-all duration-200 ${className}`}
    />
  );
};

export default Input;
