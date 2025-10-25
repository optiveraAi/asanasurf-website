import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Check, Star, Sparkles, Coffee } from 'lucide-react';
import { PACKAGES } from '../../constants/content';
import Button from '../ui/Button';

/**
 * IMMERSIVE PACKAGES REDESIGN
 *
 * Full-width, magazine-style experience sections for each package.
 * Each package gets hero-style treatment with:
 * - Full-bleed imagery with parallax effects
 * - Compelling storytelling and lifestyle content
 * - Visual presentation of highlights and inclusions
 * - Aspirational, transformative messaging
 *
 * Think luxury travel magazine, not subscription pricing cards.
 */

interface PackageSectionProps {
  pkg: typeof PACKAGES.packages[0];
  index: number;
}

/**
 * Individual Package Section - Full-Width Immersive Experience
 */
const PackageSection: React.FC<PackageSectionProps> = ({ pkg, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="relative min-h-screen overflow-hidden bg-cream-50">
      {/* Hero Image with Parallax */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
        className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${pkg.heroImage})` }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-sand-900/40 via-transparent to-cream-50" />
        </motion.div>

        {/* Hero Content Overlay */}
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-3xl"
            >
              {/* Badge */}
              {'badge' in pkg && pkg.badge && (
                <div className="inline-flex items-center gap-2 bg-ocean-500 text-white px-4 py-2 rounded-full mb-4 shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-semibold">{pkg.badge}</span>
                </div>
              )}

              {/* Headline */}
              <h2 className="text-5xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                {pkg.headline}
              </h2>

              {/* Tagline */}
              <p className="text-2xl lg:text-3xl text-white/95 mb-6 drop-shadow">
                {pkg.tagline}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                  {pkg.price}
                </span>
                <span className="text-lg text-white/90 drop-shadow">
                  {pkg.priceNote} · {pkg.duration}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <p className="text-xl lg:text-2xl text-sand-800 leading-relaxed">
            {pkg.story}
          </p>
        </motion.div>

        {/* Split Layout: Highlights & Lifestyle Images */}
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className={isEven ? 'lg:col-start-1' : 'lg:col-start-2'}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-sand-900 mb-8">
              Experience Highlights
            </h3>
            <div className="space-y-8">
              {pkg.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="border-l-4 border-ocean-500 pl-6"
                >
                  <h4 className="text-xl font-bold text-sand-900 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sand-700 leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lifestyle Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className={isEven ? 'lg:col-start-2' : 'lg:col-start-1'}
          >
            <div className="grid grid-cols-2 gap-4">
              {pkg.lifestyleImages.map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={idx === 0 ? 'col-span-2' : ''}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                    <img
                      src={image}
                      alt={`${pkg.name} lifestyle ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* What's Included - Visual Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-sand-900 mb-12 text-center">
            What's Included
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pkg.included.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-ocean-500 flex-shrink-0 mt-1" />
                  <span className="text-sand-800 leading-relaxed">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Experiences (if available) */}
        {'experiences' in pkg && pkg.experiences && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-sand-900 mb-4 text-center">
              Add-On Experiences
            </h3>
            <p className="text-center text-sand-700 text-lg mb-12 max-w-3xl mx-auto">
              Enhance your retreat with authentic Moroccan adventures
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pkg.experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-ocean-50 to-cream-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-ocean-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-sand-900 mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-sand-700 text-sm">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Transformation Journey (for Yoga & Surf package) */}
        {'transformation' in pkg && pkg.transformation && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="mb-20 bg-gradient-to-br from-ocean-50 via-cream-100 to-sand-100 rounded-3xl p-8 lg:p-16"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold text-sand-900 mb-6 text-center">
                {pkg.transformation.title}
              </h3>
              <p className="text-xl text-sand-800 mb-10 text-center leading-relaxed">
                {pkg.transformation.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {pkg.transformation.dayInLife.map((moment, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-3 bg-white/60 rounded-lg p-4"
                  >
                    <Coffee className="w-5 h-5 text-ocean-500 flex-shrink-0 mt-1" />
                    <span className="text-sand-800">{moment}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Link to="booking" smooth={true} duration={800} offset={-80}>
            <Button variant="primary" className="text-lg px-12 py-4">
              {pkg.cta}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/**
 * Main Packages Component
 */
const Packages: React.FC = () => {
  return (
    <section id="packages" className="bg-cream-50">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-sand-900 mb-6">
            {PACKAGES.sectionTitle}
          </h2>
          <p className="text-xl lg:text-2xl text-sand-700">
            {PACKAGES.sectionSubtitle}
          </p>
        </motion.div>
      </div>

      {/* Package Sections */}
      {PACKAGES.packages.map((pkg, index) => (
        <PackageSection key={pkg.id} pkg={pkg} index={index} />
      ))}

      {/* Final CTA - Single "Book Your Retreat" Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-3xl p-12 lg:p-20 shadow-2xl"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {PACKAGES.finalCta.title}
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 mb-8">
            {PACKAGES.finalCta.subtitle}
          </p>
          <Link to={PACKAGES.finalCta.scrollTo} smooth={true} duration={800} offset={-80}>
            <Button
              variant="secondary"
              className="text-lg px-12 py-4 bg-white text-ocean-600 hover:bg-cream-50"
            >
              {PACKAGES.finalCta.buttonText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
