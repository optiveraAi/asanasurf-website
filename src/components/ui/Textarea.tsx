import React from 'react';

interface TextareaProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  className?: string;
  name?: string;
}

/**
 * Reusable Textarea component for longer form inputs
 * Used in contact and booking forms
 */
const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
  className = '',
  name,
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      rows={rows}
      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg
                  focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-200
                  transition-all duration-200 resize-none ${className}`}
    />
  );
};

export default Textarea;
