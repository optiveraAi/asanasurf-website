import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * GALLERY PAGE
 *
 * Beautiful photo gallery with:
 * - Grid layout of retreat photos
 * - Category filtering
 * - Lightbox functionality (click to enlarge)
 * - Mobile responsive
 */

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    url: '/ASANA-taghazout-boats.jpg',
    alt: 'Taghazout boats',
    category: 'location',
  },
  {
    id: 2,
    url: '/ASANA-taghazout-street.jpg',
    alt: 'Taghazout street',
    category: 'location',
  },
  {
    id: 3,
    url: '/ASANA-blue-street.jpg',
    alt: 'Blue street Morocco',
    category: 'location',
  },
  {
    id: 4,
    url: '/ASANA-maroc-architecture.jpg',
    alt: 'Morocco architecture',
    category: 'location',
  },
  {
    id: 5,
    url: '/ASANA-street-grill.jpg',
    alt: 'Street grill',
    category: 'activities',
  },
  {
    id: 6,
    url: '/ASANA-street-food.jpg',
    alt: 'Street food',
    category: 'activities',
  },
  {
    id: 7,
    url: '/ASANA-street-boards.jpg',
    alt: 'Street boards',
    category: 'location',
  },
  {
    id: 8,
    url: '/ASANA-souk-spices.jpg',
    alt: 'Souk spices',
    category: 'activities',
  },
  {
    id: 9,
    url: '/ASANA-surfer-picture.jpg',
    alt: 'Surfer',
    category: 'surfing',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Photos' },
  { id: 'surfing', label: 'Surfing' },
  { id: 'yoga', label: 'Yoga' },
  { id: 'location', label: 'Location' },
  { id: 'activities', label: 'Activities' },
  { id: 'accommodations', label: 'Accommodations' },
];

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-cream-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-ocean-500 to-ocean-600 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Gallery
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Experience the wonders of africa
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-20 z-10 bg-white shadow-md py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-ocean-500 text-white shadow-lg'
                    : 'bg-cream-100 text-sand-800 hover:bg-ocean-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                onClick={() => setLightboxImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.url}
                alt={lightboxImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <p className="text-white text-lg mt-4">{lightboxImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
