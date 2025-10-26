import React from 'react';
import { motion } from 'framer-motion';

/**
 * LOGO LOOP COMPONENT
 *
 * Infinite scrolling carousel of surf brand partner logos:
 * - Seamless infinite horizontal scroll (right to left)
 * - Pauses when hovering over the carousel
 * - Individual logos magnify on hover (macOS Dock effect)
 * - Smooth fade-out at edges
 * - Responsive and smooth animation
 */

interface Logo {
  name: string;
  id: string;
  imageUrl: string;
}

const SURF_BRANDS: Logo[] = [
  {
    id: 'ripcurl',
    name: 'Rip Curl',
    imageUrl: 'https://logo.clearbit.com/ripcurl.com'
  },
  {
    id: 'billabong',
    name: 'Billabong',
    imageUrl: 'https://logo.clearbit.com/billabong.com'
  },
  {
    id: 'quiksilver',
    name: 'Quiksilver',
    imageUrl: 'https://logo.clearbit.com/quiksilver.com'
  },
  {
    id: 'hurley',
    name: 'Hurley',
    imageUrl: 'https://logo.clearbit.com/hurley.com'
  },
  {
    id: 'ci',
    name: 'Channel Islands',
    imageUrl: 'https://logo.clearbit.com/cisurfboards.com'
  },
  {
    id: 'fcs',
    name: 'FCS',
    imageUrl: 'https://logo.clearbit.com/surffcs.com'
  },
  {
    id: 'futures',
    name: 'Futures Fins',
    imageUrl: 'https://logo.clearbit.com/futuresfins.com'
  },
  {
    id: 'isa',
    name: 'ISA',
    imageUrl: 'https://logo.clearbit.com/isasurf.org'
  },
];

const LogoLoop: React.FC = () => {
  // Duplicate the logos array 3 times to create seamless infinite loop
  const duplicatedLogos = [...SURF_BRANDS, ...SURF_BRANDS, ...SURF_BRANDS];

  return (
    <section className="bg-cream-50 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-sand-900 mb-3">
            Trusted by the Surf Community
          </h2>
          <p className="text-lg text-sand-700">
            Partnering with world-class surf brands
          </p>
        </motion.div>

        {/* Logo Carousel Container */}
        <div className="relative">
          {/* Gradient Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cream-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cream-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Logo Track */}
          <div className="logo-carousel-wrapper">
            <div className="logo-carousel-track">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="logo-item"
                >
                  <img
                    src={logo.imageUrl}
                    alt={logo.name}
                    className="logo-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations for Logo Carousel */}
      <style>{`
        .logo-carousel-wrapper {
          width: 100%;
          overflow: hidden;
          padding: 2rem 0;
        }

        .logo-carousel-track {
          display: flex;
          gap: 3rem;
          animation: scroll 60s linear infinite;
          width: fit-content;
        }

        /* Pause animation on hover */
        .logo-carousel-wrapper:hover .logo-carousel-track {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%); /* Move by 1/3 since we have 3 copies */
          }
        }

        .logo-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 300ms ease;
          padding: 0 1rem;
        }

        /* Individual logo hover effect (macOS Dock magnification) */
        .logo-item:hover {
          transform: scale(1.2);
          z-index: 5;
        }

        .logo-image {
          height: 48px;
          width: auto;
          max-width: 180px;
          object-fit: contain;
          filter: grayscale(100%) brightness(1.1) contrast(0.9);
          opacity: 0.7;
          transition: opacity 300ms ease, filter 300ms ease;
          user-select: none;
        }

        /* Slightly reduce greyscale on hover for subtle color hint */
        .logo-item:hover .logo-image {
          filter: grayscale(80%) brightness(1.1) contrast(0.9);
          opacity: 0.85;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .logo-carousel-track {
            gap: 2rem;
          }

          .logo-image {
            height: 36px;
            max-width: 140px;
          }

          .logo-item {
            padding: 0 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoLoop;
