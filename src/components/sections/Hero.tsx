import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';
import { HERO } from '../../constants/content';
import Button from '../ui/Button';

/**
 * Hero Section with:
 * - Full viewport height
 * - Parallax scrolling effect on background
 * - Smooth fade-in animation
 * - Call-to-action button
 * - Beautiful ocean background image from Unsplash
 */
const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=2000&q=80"
          alt="Ocean waves at sunset"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/40 via-ocean-800/30 to-ocean-700/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight"
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl sm:text-2xl text-white/90 mb-10 font-light"
        >
          {HERO.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link to="packages" smooth={true} duration={1000} offset={-80}>
            <Button variant="primary" className="text-lg shadow-2xl">
              {HERO.cta}
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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
            className="cursor-pointer text-white/80 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
