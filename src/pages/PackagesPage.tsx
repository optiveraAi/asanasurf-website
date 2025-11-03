import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Packages from '../components/sections/Packages';

/**
 * PACKAGES PAGE
 *
 * Dedicated page for showcasing retreat experiences:
 * - Surf Adventure & Yoga (immersive section)
 * - Yoga Retreat Experience (immersive section)
 * - Book Your Retreat CTA
 *
 * Features hash-based scroll navigation to specific packages
 * WITH immediate animation triggering for the target section
 */
const PackagesPage: React.FC = () => {
  const location = useLocation();
  const [targetPackageId, setTargetPackageId] = useState<string | null>(null);

  useEffect(() => {
    // Check if there's a hash in the URL (e.g., #surf-yoga-experience)
    const hash = location.hash;

    if (hash) {
      // Extract package ID from hash (remove the #)
      const packageId = hash.substring(1);
      setTargetPackageId(packageId);

      // Small delay to ensure DOM is fully rendered
      setTimeout(() => {
        const element = document.querySelector(hash);

        if (element) {
          // Get the fixed header height (80px = pt-20 in tailwind)
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Reset target when navigating without hash
      setTargetPackageId(null);
    }
  }, [location]);

  return (
    <div className="min-h-screen pt-20">
      {/* Packages Section with immersive full-width layouts */}
      <Packages targetPackageId={targetPackageId} />
    </div>
  );
};

export default PackagesPage;
