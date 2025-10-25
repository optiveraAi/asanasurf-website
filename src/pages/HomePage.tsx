import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Introduction from '../components/sections/Introduction';
import Button from '../components/ui/Button';

/**
 * HOME PAGE
 *
 * Combines storytelling and introduction content:
 * - Hero section
 * - Introduction about Asana n Surf
 * - Why Yoga + Surf works
 * - Discover Taghazout
 * - CTA to explore packages
 */
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      <Introduction />

      {/* Call to Action - Explore Packages */}
      <section className="bg-gradient-to-br from-ocean-500 to-ocean-600 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Experience Taghazout?
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Explore our immersive retreat experiences designed to transform your body, calm your mind, and awaken your spirit.
            </p>
            <Link to="/packages">
              <Button
                variant="secondary"
                className="text-lg px-12 py-4 bg-white text-ocean-600 hover:bg-cream-50"
              >
                Explore Our Retreats
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
