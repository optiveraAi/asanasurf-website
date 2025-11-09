import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Heart, Compass, Users, MapPin, Sunrise } from 'lucide-react';
import WaveDivider from '../components/ui/WaveDivider';

/**
 * ABOUT US PAGE
 *
 * Modern, engaging layout showcasing the team's experience,
 * dedication, and passion for surf and yoga retreats in Morocco.
 */

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-sand-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
            </motion.div>

            <h1 className="text-4xl lg:text-6xl font-bold text-sand-900 mb-6">
              About AsanaSurf
            </h1>
            <p className="text-xl lg:text-2xl text-sand-700 leading-relaxed">
              Dedicated travelers, passionate surfers, and experienced yogis sharing
              the magic of Morocco's Atlantic coast with adventurous souls since the early 90s.
            </p>
          </motion.div>
        </div>

        {/* Decorative Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor"
              className="text-ocean-200"
            />
          </svg>
        </div>
      </section>

      {/* Wave Divider - Hero to Story */}
      <WaveDivider
        variant="gentle"
        fillColor="#ffffff"
        backgroundColor="transparent"
      />

      {/* Our Story Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Compass className="w-8 h-8 text-ocean-500" strokeWidth={1.5} />
                <h2 className="text-3xl lg:text-4xl font-bold text-sand-900">
                  Our Journey
                </h2>
              </div>

              <div className="space-y-6 text-lg text-sand-800 leading-relaxed">
                <p>
                  The team at AsanaSurf are dedicated travelers and surfers who have
                  extensive experience from all our travels to various destinations, both for
                  employment and for adventure.
                </p>
                <p>
                  We have been surfing in Morocco since the early 1990s and have traveled
                  all over the country, discovering hidden gems and perfect breaks along
                  the stunning Atlantic coastline.
                </p>
                <p>
                  Our pleasure is sharing these experiences with you and making sure that
                  you are touched by the sense of adventure{' '}
                  <span className="font-semibold text-ocean-600">
                    without the hardships
                  </span>
                  . We organize it all so that you can dedicate your time to enjoying
                  yourselves and milking every moment, creating memories to last a lifetime.
                </p>
              </div>
            </motion.div>

            {/* Image/Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="/dad-barell.jpg"
                  alt="Surfing in Morocco"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/40 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <MapPin className="w-8 h-8 text-ocean-500" />
                  <div>
                    <p className="font-bold text-sand-900 text-lg">Since 1990s</p>
                    <p className="text-sand-600 text-sm">Surfing Morocco</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave Divider - Story to Expertise */}
      <WaveDivider
        variant="dramatic"
        fillColor="#ffffff"
        backgroundColor="#ffffff"
        flip={true}
      />

      {/* Expertise Section - Surf & Yoga */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-sand-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-sand-700 max-w-3xl mx-auto">
              Together we have decades of experience in both the surf and yoga industries,
              bringing authenticity and passion to every retreat.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Surf Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-ocean-50 to-cream-100 rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-ocean-500 rounded-full flex items-center justify-center">
                  <Waves className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-sand-900">
                  Surf Mastery
                </h3>
              </div>

              <p className="text-lg text-sand-800 leading-relaxed mb-6">
                With decades of professional experience in the surf industry as both surfers
                and instructors, we know the waves of Morocco intimately. From the powerful
                breaks of Anchor Point to the gentle rollers perfect for beginners, we'll
                guide you to the right spots for your skill level.
              </p>

              <div className="flex items-center gap-2 text-ocean-600 font-semibold">
                <span>30+ years of surfing in Morocco</span>
              </div>
            </motion.div>

            {/* Yoga Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-gradient-to-br from-lavender-50 to-cream-100 rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-lavender-500 rounded-full flex items-center justify-center">
                  <Sunrise className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-sand-900">
                  Yoga Philosophy
                </h3>
              </div>

              <p className="text-lg text-sand-800 leading-relaxed mb-6">
                Our yoga experiences have taken us to India, the cradle of yoga, where we
                were immersed in all aspects of the eight limbs of yoga and its philosophy.
                We bring this authentic understanding to every practice, honoring the
                ancient traditions while making them accessible to modern practitioners.
              </p>

              <div className="flex items-center gap-2 text-lavender-600 font-semibold">
                <span>Trained in India, practiced worldwide</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave Divider - Expertise to Promise */}
      <WaveDivider
        variant="gentle"
        fillColor="#faf8f5"
        backgroundColor="#ffffff"
      />

      {/* Our Promise Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-sand-100 via-cream-100 to-ocean-50 rounded-3xl p-12 lg:p-16 text-center shadow-xl"
          >
            <Users className="w-16 h-16 text-ocean-500 mx-auto mb-6" strokeWidth={1.5} />

            <h2 className="text-3xl lg:text-4xl font-bold text-sand-900 mb-6">
              Our Promise to You
            </h2>

            <p className="text-xl lg:text-2xl text-sand-800 leading-relaxed max-w-4xl mx-auto mb-8">
              We handle every detail of your retreat, from accommodation and meals to
              transportation and activities. Your only job is to show up, breathe, surf,
              and embrace the adventure.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              {[
                {
                  title: 'Authentic',
                  description: 'Real experiences, no tourism traps',
                },
                {
                  title: 'Seamless',
                  description: 'We handle all the logistics',
                },
                {
                  title: 'Memorable',
                  description: 'Create stories that last forever',
                },
              ].map((promise, index) => (
                <motion.div
                  key={promise.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-bold text-sand-900 mb-2">
                    {promise.title}
                  </h3>
                  <p className="text-sand-700">{promise.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wave Divider - Promise to CTA */}
      <WaveDivider
        variant="dramatic"
        fillColor="#4a8fa3"
        backgroundColor="transparent"
        flip={true}
      />

      {/* Call to Action */}
      <section className="py-20 lg:py-28 bg-gradient-to-r from-ocean-500 to-ocean-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join us in Morocco for an unforgettable surf and yoga experience.
            </p>
            <motion.a
              href="/packages"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-ocean-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              View Our Retreats
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
