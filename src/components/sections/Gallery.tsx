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
  // Morocco retreat images - surf, yoga, culture & cuisine
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80',
      alt: 'Surfing the Atlantic waves in Morocco',
    },
    {
      url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      alt: 'Sunrise yoga on Moroccan beach',
    },
    {
      url: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80',
      alt: 'Colorful streets of Morocco',
    },
    {
      url: 'https://images.unsplash.com/photo-1601372197210-00868f829a51?auto=format&fit=crop&w=800&q=80',
      alt: 'Traditional Moroccan tajine dish',
    },
    {
      url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=800&q=80',
      alt: 'Perfect surf break on Morocco coast',
    },
    {
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      alt: 'Vibrant Moroccan souk market',
    },
    {
      url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      alt: 'Peaceful yoga meditation in Morocco',
    },
    {
      url: 'https://images.unsplash.com/photo-1562059392-096320bccc7e?auto=format&fit=crop&w=800&q=80',
      alt: 'Traditional Moroccan mint tea',
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
    <section id="gallery" className="section-container bg-cream-100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-sand-900 mb-4">
            {GALLERY.sectionTitle}
          </h2>
          <p className="text-xl text-sand-700">
            {GALLERY.sectionSubtitle}
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
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-sand-700 mb-4">
            Follow us on Instagram for daily inspiration and retreat updates
          </p>
          <a
            href="https://instagram.com/asanansurf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-ocean-600 hover:text-ocean-700 font-semibold transition-colors"
          >
            @asanansurf
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Gallery;
