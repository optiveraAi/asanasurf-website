import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Waves, Flower2 } from 'lucide-react';
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

  const scrollToPackage = (packageId: string) => {
    const element = document.getElementById(packageId);
    if (element) {
      const headerOffset = 80 + 60; // Main header + sub-nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Package Sub-Navigation - Sticky */}
      <div className="sticky top-20 z-40 bg-white border-b border-sand-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Surf Package Link */}
            <button
              onClick={() => scrollToPackage('surf-yoga-experience')}
              className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-ocean-50 hover:bg-ocean-100 text-ocean-600 hover:text-ocean-700 transition-all duration-200 font-semibold text-sm md:text-base group"
            >
              <Waves className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Surf Adventure &amp; Yoga</span>
              <span className="sm:hidden">Surf &amp; Yoga</span>
            </button>

            {/* Divider */}
            <div className="h-8 w-px bg-sand-200"></div>

            {/* Yoga Package Link */}
            <button
              onClick={() => scrollToPackage('yoga-surf-retreat')}
              className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-lavender-50 hover:bg-lavender-100 text-lavender-600 hover:text-lavender-700 transition-all duration-200 font-semibold text-sm md:text-base group"
            >
              <Flower2 className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Yoga Retreat Experience</span>
              <span className="sm:hidden">Yoga Retreat</span>
            </button>
          </div>
        </div>
      </div>

      {/* Packages Section with immersive full-width layouts */}
      <Packages targetPackageId={targetPackageId} />
    </div>
  );
};

export default PackagesPage;
