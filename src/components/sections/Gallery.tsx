import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY } from '../../constants/content';

/**
 * Gallery Section with:
 * - Responsive grid layout
 * - Unsplash placeholder images (ocean, surf, yoga themes)
 * - Lazy loading for performance
 * - Hover effects on images
 * - Scroll-triggered fade-in animation
 */
const Gallery: React.FC = () => {
  // Curated Unsplash images for the retreat theme
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
      alt: 'Surfer riding a wave',
    },
    {
      url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      alt: 'Yoga practice at sunrise on the beach',
    },
    {
      url: 'https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=800&q=80',
      alt: 'Beautiful ocean sunset with surfers',
    },
    {
      url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      alt: 'Yoga pose silhouette at sunset',
    },
    {
      url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      alt: 'Surfboards lined up on the beach',
    },
    {
      url: 'https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80',
      alt: 'Beach paradise with palm trees',
    },
    {
      url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      alt: 'Group yoga session on the beach',
    },
    {
      url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=800&q=80',
      alt: 'Perfect wave curling over blue water',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="gallery" className="section-container bg-gradient-to-b from-sand-50 to-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {GALLERY.heading}
          </h2>
          <p className="text-xl text-gray-600">
            {GALLERY.tagline}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-ocean-900/0 group-hover:bg-ocean-900/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Follow us on Instagram for daily inspiration and retreat updates
          </p>
          <a
            href="https://instagram.com/asanansurf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-ocean-500 hover:text-ocean-600 font-semibold transition-colors"
          >
            @asanansurf
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Gallery;
