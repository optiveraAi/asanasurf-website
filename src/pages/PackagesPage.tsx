import React from 'react';
import Packages from '../components/sections/Packages';

/**
 * PACKAGES PAGE
 *
 * Dedicated page for showcasing retreat experiences:
 * - Surf Focused Experience (immersive section)
 * - Yoga & Surf Retreat (immersive section)
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
