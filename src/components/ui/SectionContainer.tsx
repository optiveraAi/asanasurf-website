import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  id?: string;
  background?: 'cream-100' | 'cream-200' | 'white' | 'transparent';
  className?: string;
}

/**
 * Section Container component for consistent spacing and layout
 *
 * Provides:
 * - Consistent max-width container (1280px)
 * - Responsive padding (mobile to desktop)
 * - Generous vertical spacing between sections
 * - Optional background colors from theme
 *
 * Usage:
 * <SectionContainer id="packages" background="cream-100">
 *   <content here>
 * </SectionContainer>
 */
const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  background = 'transparent',
  className = '',
}) => {
  // Background color mapping to Tailwind classes
  const backgroundClasses = {
    'cream-100': 'bg-cream-100',
    'cream-200': 'bg-cream-200',
    'white': 'bg-white',
    'transparent': 'bg-transparent',
  };

  return (
    <section
      id={id}
      className={`${backgroundClasses[background]} py-16 sm:py-20 md:py-24 lg:py-28 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
