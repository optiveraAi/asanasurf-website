import React from 'react';
import Packages from '../components/sections/Packages';

/**
 * PACKAGES PAGE
 *
 * Dedicated page for showcasing retreat experiences:
 * - Surf Adventure & Yoga (immersive section)
 * - Yoga Retreat Experience (immersive section)
 * - Book Your Retreat CTA
 */
const PackagesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Packages Section with immersive full-width layouts */}
      <Packages />
    </div>
  );
};

export default PackagesPage;
