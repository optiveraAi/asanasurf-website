import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';
import { HERO } from '../../constants/content';
import Button from '../ui/Button';

/**
 * Hero Section with:
 * - Full viewport height
 * - Clean background
 * - Smooth fade-in animations
 * - Call-to-action button
 */
const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Anchor Point Scene Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/anchor-point-scene.jpg)',
        }}
      />

      {/* Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30 z-0" />

      {/* Content with Enhanced Styling */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Headline with Golden Glow Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          style={{
            textShadow: '0 0 20px rgba(218, 165, 32, 0.6), 0 0 40px rgba(255, 215, 0, 0.4), 0 2px 15px rgba(0, 0, 0, 0.8)',
          }}
        >
          {HERO.headline}
        </motion.h1>

        {/* Subheadline with Warm Glow */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl sm:text-2xl text-white mb-10 font-light"
          style={{
            textShadow: '0 0 15px rgba(218, 165, 32, 0.4), 0 2px 10px rgba(0, 0, 0, 0.7)',
          }}
        >
          {HERO.subheadline}
        </motion.p>

        {/* CTA Button with Golden Hover Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link to="packages" smooth={true} duration={1000} offset={-80}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                className="text-lg shadow-2xl hover:shadow-[0_0_30px_rgba(218,165,32,0.6)] transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #DAA520 100%)',
                  boxShadow: '0 10px 40px rgba(218, 165, 32, 0.4)',
                  color: '#1a1a1a',
                  fontWeight: 'bold',
                }}
              >
                {HERO.cta}
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator with Golden Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Link to="about" smooth={true} duration={800}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer text-white/90 hover:text-white transition-all duration-300"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(218, 165, 32, 0.6))',
            }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
