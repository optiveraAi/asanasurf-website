import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Star, Sparkles, Coffee, Waves, Flower2, Users, Utensils, Bed, MapPin, ShoppingBag, Mountain, Droplets } from 'lucide-react';
import { PACKAGES, DAY_TIMELINES } from '../../constants/content';
import Button from '../ui/Button';
import DayTimeline from './DayTimeline';
import WaveDivider from '../ui/WaveDivider';

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
  isTarget?: boolean;
}

/**
 * Helper function to get the appropriate icon for an included item
 * Standard size: 32px (w-8 h-8)
 * Each icon gets a distinct, elegant color from the website palette
 */
const getIconForIncludedItem = (item: string, index: number) => {
  const itemLower = item.toLowerCase();

  // Elegant color palette - toned down, sophisticated colors
  const colors = [
    'text-ocean-500',      // Bright ocean blue
    'text-ocean-600',      // Deeper ocean blue
    'text-sky-500',        // Lighter sky blue
    'text-teal-500',       // Teal blue-green
    'text-lavender-500',   // Soft purple
    'text-purple-400',     // Light purple
    'text-sand-600',       // Warm beige
    'text-amber-600',      // Warm amber
    'text-cyan-600',       // Cyan blue
  ];

  // Get unique color based on index
  const colorClass = colors[index % colors.length];

  if (itemLower.includes('surf') || itemLower.includes('board')) {
    return <Waves className={`w-8 h-8 ${colorClass}`} strokeWidth={1.5} />;
  } else if (itemLower.includes('yoga') || itemLower.includes('massage') || itemLower.includes('treatment')) {
    return <Flower2 className={`w-8 h-8 ${colorClass}`} strokeWidth={1.5} />;
  } else if (itemLower.includes('meal') || itemLower.includes('breakfast') || itemLower.includes('lunch') || itemLower.includes('dinner')) {
    return <Utensils className={`w-8 h-8 ${colorClass}`} strokeWidth={1.5} />;
  } else if (itemLower.includes('accommodation') || itemLower.includes('night')) {
    return <Bed className={`w-8 h-8 ${colorClass}`} strokeWidth={1.5} />;
  } else if (itemLower.includes('transport') || itemLower.includes('transfer') || itemLower.includes('airport') || itemLower.includes('beach')) {
    return <MapPin className={`w-8 h-8 ${colorClass}`} strokeWidth={1.5} />;
  } else if (itemLower.includes('guide') || itemLower.includes('team') || itemLower.includes('24/7')) {
    return <Users className={`w-8 h-8 ${colorClass}`} strokeWidth={1.5} />;
  } else {
    return <Check className={`w-8 h-8 ${colorClass}`} strokeWidth={1.5} />;
  }
};

/**
 * Helper function to get the appropriate icon for an experience
 * Standard size: 32px (w-8 h-8)
 */
const getIconForExperience = (title: string) => {
  const titleLower = title.toLowerCase();

  if (titleLower.includes('souk') || titleLower.includes('market')) {
    return <ShoppingBag className="w-8 h-8 text-white" strokeWidth={1.5} />;
  } else if (titleLower.includes('valley') || titleLower.includes('mountain')) {
    return <Mountain className="w-8 h-8 text-white" strokeWidth={1.5} />;
  } else if (titleLower.includes('hammam') || titleLower.includes('spa')) {
    return <Droplets className="w-8 h-8 text-white" strokeWidth={1.5} />;
  } else {
    return <Sparkles className="w-8 h-8 text-white" strokeWidth={1.5} />;
  }
};

/**
 * Individual Package Section - Full-Width Immersive Experience
 */
const PackageSection: React.FC<PackageSectionProps> = ({ pkg, index, isTarget = false }) => {
  const isEven = index % 2 === 0;

  // Animation configuration: immediate animation if this is the target section
  const getAnimationProps = (defaultProps: any) => {
    if (isTarget) {
      // Skip initial state and animate immediately
      return {
        ...defaultProps,
        initial: false,
        animate: defaultProps.whileInView || { opacity: 1, y: 0 },
        viewport: undefined,
      };
    }
    return defaultProps;
  };

  return (
    <section id={pkg.id} className="relative min-h-screen overflow-hidden bg-cream-50">
      {/* Hero Image with Parallax */}
      <motion.div
        {...getAnimationProps({
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true, margin: '-100px' },
          transition: { duration: 1 },
        })}
        className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div
          {...getAnimationProps({
            initial: { scale: 1.2 },
            whileInView: { scale: 1 },
            viewport: { once: true },
            transition: { duration: 1.5, ease: 'easeOut' },
          })}
          className="absolute inset-0"
        >
          <div
            className={`absolute inset-0 bg-cover ${pkg.id === 'yoga-surf-retreat' ? 'bg-[center_20%]' : 'bg-center'}`}
            style={{ backgroundImage: `url(${pkg.heroImage})` }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-sand-900/40 via-transparent to-cream-50" />
        </motion.div>

        {/* Hero Content Overlay */}
        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full">
            <motion.div
              {...getAnimationProps({
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.8, delay: 0.3 },
              })}
              className="max-w-3xl"
            >
              {/* Badge */}
              {'badge' in pkg && pkg.badge && (
                <div className="inline-flex items-center gap-2 bg-ocean-500 text-white px-4 py-2 rounded-full mb-4 shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-semibold">{pkg.badge}</span>
                </div>
              )}

              {/* Floating Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mb-6"
              >
                {index === 0 ? (
                  <Waves className="w-16 h-16 text-white drop-shadow-lg" strokeWidth={1.5} />
                ) : (
                  <Flower2 className="w-16 h-16 text-white drop-shadow-lg" strokeWidth={1.5} />
                )}
              </motion.div>

              {/* Headline */}
              <h2 className="text-5xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                {pkg.headline}
              </h2>

              {/* Tagline */}
              <p className="text-2xl lg:text-3xl text-white/95 mb-6 drop-shadow">
                {pkg.tagline}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <motion.div
          {...getAnimationProps({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: '-100px' },
            transition: { duration: 0.7 },
          })}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <p className="text-xl lg:text-2xl text-sand-800 leading-relaxed">
            {pkg.story}
          </p>
        </motion.div>

        {/* Split Layout: Highlights & Lifestyle Images */}
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
          {/* Highlights */}
          <motion.div
            {...getAnimationProps({
              initial: { opacity: 0, x: isEven ? -50 : 50 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true, margin: '-100px' },
              transition: { duration: 0.7 },
            })}
            className={isEven ? 'lg:col-start-1' : 'lg:col-start-2'}
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-sand-900 mb-8">
              Experience Highlights
            </h3>
            <div className="space-y-8">
              {pkg.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  {...getAnimationProps({
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: idx * 0.1 },
                  })}
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
            {...getAnimationProps({
              initial: { opacity: 0, x: isEven ? 50 : -50 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true, margin: '-100px' },
              transition: { duration: 0.7 },
            })}
            className={isEven ? 'lg:col-start-2' : 'lg:col-start-1'}
          >
            <div className="grid grid-cols-2 gap-4">
              {pkg.lifestyleImages.map((image, idx) => (
                <motion.div
                  key={idx}
                  {...getAnimationProps({
                    initial: { opacity: 0, scale: 0.9 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: idx * 0.15 },
                  })}
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
          {...getAnimationProps({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: '-100px' },
            transition: { duration: 0.7 },
          })}
          className="mb-24"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-sand-900 mb-12 text-center">
            What's Included
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pkg.included.map((item, idx) => (
              <motion.div
                key={idx}
                {...getAnimationProps({
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: idx * 0.08 },
                })}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full"
              >
                {/* Icon centered at top */}
                <div className="flex-shrink-0 mb-4">
                  {getIconForIncludedItem(item, idx)}
                </div>
                {/* Text centered below icon */}
                <span className="text-sand-800 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Pricing Section */}
        <motion.div
          {...getAnimationProps({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: '-100px' },
            transition: { duration: 0.7 },
          })}
          className="mb-24"
        >
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-cream-50 via-sand-50 to-cream-100 rounded-3xl p-10 lg:p-16 shadow-xl border border-sand-200/50">
              <div className="text-center">
                {/* "Most Popular" badge for Yoga Retreat */}
                {pkg.id === 'yoga-surf-retreat' && (
                  <div className="inline-flex items-center gap-2 bg-ocean-500 text-white px-4 py-2 rounded-full mb-6 shadow-md">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                )}

                {/* Price Display */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-5xl lg:text-6xl font-bold text-ocean-600">
                      {pkg.price}
                    </span>
                    <span className="text-xl text-sand-700">{pkg.priceNote}</span>
                  </div>
                  <p className="text-lg text-sand-600">{pkg.duration}</p>
                </div>

                {/* Subtext */}
                <p className="text-sand-700 text-lg italic mb-6">
                  {pkg.id === 'surf-yoga-experience'
                    ? 'All-inclusive surf adventure with complimentary yoga sessions'
                    : 'Comprehensive yoga retreat with optional surf sessions'}
                </p>

                {/* Optional: Payment Info */}
                <div className="pt-6 border-t border-sand-200">
                  <p className="text-sm text-sand-600">
                    Early bird discount available for bookings 3+ months in advance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Experiences (if available) */}
        {'experiences' in pkg && pkg.experiences && (
          <motion.div
            {...getAnimationProps({
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: '-100px' },
              transition: { duration: 0.7 },
            })}
            className="mb-24"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-sand-900 mb-4 text-center">
              Add-On Experiences
            </h3>
            <p className="text-center text-sand-700 text-lg mb-12 max-w-3xl mx-auto">
              Enhance your retreat with authentic Moroccan adventures
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pkg.experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  {...getAnimationProps({
                    initial: { opacity: 0, scale: 0.95 },
                    whileInView: { opacity: 1, scale: 1 },
                    viewport: { once: true },
                    transition: { duration: 0.5, delay: idx * 0.1 },
                  })}
                  className="bg-gradient-to-br from-ocean-50 to-cream-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center h-full"
                >
                  {/* Icon - consistent size and centered */}
                  <div className="w-16 h-16 bg-ocean-500 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                    {getIconForExperience(exp.title)}
                  </div>
                  {/* Title */}
                  <h4 className="text-xl font-bold text-sand-900 mb-3">
                    {exp.title}
                  </h4>
                  {/* Description */}
                  <p className="text-sand-700 text-base leading-relaxed">
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
            {...getAnimationProps({
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: '-100px' },
              transition: { duration: 0.7 },
            })}
            className="mb-24 bg-gradient-to-br from-ocean-50 via-cream-100 to-sand-100 rounded-3xl p-8 lg:p-16"
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
                    {...getAnimationProps({
                      initial: { opacity: 0, x: idx % 2 === 0 ? -20 : 20 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.5, delay: idx * 0.1 },
                    })}
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
          {...getAnimationProps({
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.7 },
          })}
          className="text-center"
        >
          <Link to="/book">
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
interface PackagesProps {
  targetPackageId?: string | null;
}

const Packages: React.FC<PackagesProps> = ({ targetPackageId }) => {
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
        <React.Fragment key={pkg.id}>
          <PackageSection
            pkg={pkg}
            index={index}
            isTarget={targetPackageId === pkg.id}
          />
          {/* Wave divider between packages */}
          {index < PACKAGES.packages.length - 1 && (
            <WaveDivider
              variant="gentle"
              fillColor="#faf8f5"
              backgroundColor="#faf8f5"
              flip={index % 2 === 1}
            />
          )}
        </React.Fragment>
      ))}

      {/* Wave divider before timelines */}
      <WaveDivider
        variant="gentle"
        fillColor="#faf8f5"
        backgroundColor="#faf8f5"
      />

      {/* What to Expect - Day-by-Day Timelines */}
      <div className="bg-cream-50">
        {/* Surf Adventure & Yoga Timeline */}
        <DayTimeline
          packageName={DAY_TIMELINES.surfYogaExperience.packageName}
          title={DAY_TIMELINES.surfYogaExperience.title}
          activities={DAY_TIMELINES.surfYogaExperience.activities}
          backgroundImage={DAY_TIMELINES.surfYogaExperience.backgroundImage}
        />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-sand-300 to-transparent"></div>
        </div>

        {/* Yoga Retreat Experience Timeline */}
        <DayTimeline
          packageName={DAY_TIMELINES.yogaRetreat.packageName}
          title={DAY_TIMELINES.yogaRetreat.title}
          activities={DAY_TIMELINES.yogaRetreat.activities}
          backgroundImage={DAY_TIMELINES.yogaRetreat.backgroundImage}
        />
      </div>

      {/* Wave divider before final CTA */}
      <WaveDivider
        variant="gentle"
        fillColor="#faf8f5"
        backgroundColor="#faf8f5"
        flip={true}
      />

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
          <Link to={PACKAGES.finalCta.linkTo}>
            <Button
              variant="outline"
              className="text-lg px-12 py-4 bg-white text-ocean-600 hover:bg-ocean-50 border-white hover:border-ocean-100"
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
