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
  // Surfing
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Surfer riding wave in Taghazout',
    category: 'surfing',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Perfect wave breaking',
    category: 'surfing',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Group surf lesson',
    category: 'surfing',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?auto=format&fit=crop&w=1200&q=80',
    alt: 'Surfboards on beach',
    category: 'surfing',
  },

  // Yoga
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sunrise yoga on the beach',
    category: 'yoga',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Group yoga session',
    category: 'yoga',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Meditation at sunset',
    category: 'yoga',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Yoga pose by the ocean',
    category: 'yoga',
  },

  // Location
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Taghazout village streets',
    category: 'location',
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ocean view from Taghazout',
    category: 'location',
  },
  {
    id: 11,
    url: 'https://images.unsplash.com/photo-1451772741724-d20990422508?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sunset over Atlantic',
    category: 'location',
  },
  {
    id: 12,
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    alt: 'Beach landscape',
    category: 'location',
  },

  // Activities
  {
    id: 13,
    url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Exploring local markets',
    category: 'activities',
  },
  {
    id: 14,
    url: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    alt: 'Moroccan cuisine',
    category: 'activities',
  },
  {
    id: 15,
    url: 'https://images.unsplash.com/photo-1608632725512-3060e42dbdfe?auto=format&fit=crop&w=1200&q=80',
    alt: 'Beach bonfire gathering',
    category: 'activities',
  },
  {
    id: 16,
    url: 'https://images.unsplash.com/photo-1544551763-92ed23f86b33?auto=format&fit=crop&w=1200&q=80',
    alt: 'Souk market experience',
    category: 'activities',
  },

  // Accommodations
  {
    id: 17,
    url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Surf camp accommodation',
    category: 'accommodations',
  },
  {
    id: 18,
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cozy room interior',
    category: 'accommodations',
  },
  {
    id: 19,
    url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Outdoor terrace',
    category: 'accommodations',
  },
  {
    id: 20,
    url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Relaxation area',
    category: 'accommodations',
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
              Experience the magic of AsanaSurf through the eyes of our guests
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
                <div className="absolute inset-0 bg-gradient-to-t from-sand-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium text-sm">{image.alt}</p>
                </div>
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
