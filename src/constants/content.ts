/**
 * Content Constants for Asana n Surf Website
 *
 * Centralized content management for all text across the site.
 * Organized by section for easy updates and maintenance.
 */

export const SITE_NAME = "Asana n Surf";

// Navigation Links
export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'packages', label: 'Packages', href: '#packages' },
  { id: 'experiences', label: 'Experiences', href: '#experiences' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'booking', label: 'Book Now', href: '#booking' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

// Hero Section
export const HERO = {
  headline: 'Find Your Balance Between Wave and Om',
  subheadline: 'The perfect balance between active adventure and mindful restoration',
  cta: 'Explore Retreats',
  ctaScrollTo: 'packages',
} as const;

// Introduction/About Section
export const INTRODUCTION = {
  sectionTitle: 'Where Surf Meets Serenity',
  tagline: 'Taghazout, Morocco',

  location: {
    title: 'Discover Taghazout',
    description: 'Nestled on Morocco\'s stunning Atlantic coast, Taghazout is a vibrant fishing village that has become a sanctuary for surfers and wellness seekers from around the world. With year-round swells, world-class surf breaks, and colorful streets steeped in African culture, it\'s the perfect backdrop for your transformative retreat.',
    highlights: [
      'World-class surf breaks with consistent year-round swells',
      'Authentic Moroccan culture and colorful village streets',
      'Breathtaking sunsets over the Atlantic Ocean',
      'Warm, welcoming local community',
    ],
  },

  philosophy: {
    title: 'Why Yoga and Surfing Work Perfectly Together',
    description: 'Surfing and yoga may seem like opposites - one wild and exhilarating, the other calm and centered. But together, they create a powerful synergy that transforms both body and mind.',
    points: [
      {
        title: 'Physical Harmony',
        description: 'Surfing engages both small and large muscle groups in unique ways, intensively working your back, neck, shoulders, and arms. Yoga builds the strength, flexibility, and balance that make you a more effective surfer while aiding in post-session recovery.',
      },
      {
        title: 'Mental Balance',
        description: 'The adrenaline rush of catching waves pairs beautifully with the mindful calm of yoga practice. Together, they teach you to find focus in chaos and peace in stillness.',
      },
      {
        title: 'For All Levels',
        description: 'Whether you\'re a complete beginner or an experienced practitioner, our twice-daily yoga sessions are adapted to meet you where you are and help you grow.',
      },
    ],
  },

  retreatOverview: {
    title: 'Your Retreat Experience',
    description: 'At Asana n Surf, we\'ve crafted an experience that honors both the thrill of adventure and the peace of restoration. Each day is thoughtfully designed to energize and restore you.',
    dailyStructure: [
      'Morning yoga practice to awaken body and mind',
      'Surf sessions with qualified instructors suited to your level',
      'Nourishing meals at local Moroccan restaurants',
      'Evening yoga to restore and reflect',
      'Time to explore Taghazout and connect with fellow retreaters',
    ],
  },
} as const;

// Packages Section - Immersive Experience-Focused Design
export const PACKAGES = {
  sectionTitle: 'Your Taghazout Experience Awaits',
  sectionSubtitle: 'Two transformative journeys. One unforgettable destination.',

  packages: [
    {
      id: 'surf-focused',
      name: 'Surf Focused Experience',
      headline: 'Master the Waves',
      tagline: 'All-Inclusive Surf Adventure',
      duration: '7 Days',
      price: 'From €1,400',
      priceNote: 'per person',
      featured: false,
      badge: undefined,

      // Hero imagery
      heroImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1920&q=80',
      lifestyleImages: [
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1502933691298-84fc14542831?auto=format&fit=crop&w=800&q=80',
      ],

      story: 'Immerse yourself in the ultimate surf adventure on Morocco\'s stunning Atlantic coast. From your first paddle out to riding your best wave, every moment is designed to accelerate your surf journey. This is more than lessons—it\'s a complete transformation into the surf lifestyle.',

      highlights: [
        {
          title: 'Master the Fundamentals',
          description: 'From choosing the right board to reading wave patterns, learn everything you need to become a confident surfer',
        },
        {
          title: 'Daily Surf Sessions',
          description: 'Multiple sessions each day with professional instructors who know Taghazout\'s breaks intimately',
        },
        {
          title: 'Video Analysis',
          description: 'See yourself surf and get personalized feedback to accelerate your progression',
        },
        {
          title: 'Surf Fitness & Yoga',
          description: 'Build strength, flexibility, and endurance specifically for surfing performance',
        },
      ],

      included: [
        'All surf equipment (boards, wetsuits, rash guards)',
        'Professional surf coaching and video analysis',
        'Accommodation at our Taghazout surf camp',
        'All meals at local restaurants',
        'Airport transfers from Agadir',
        'Daily surf fitness and yoga sessions',
      ],

      experiences: [
        {
          title: 'Therapeutic Massage',
          description: 'Soothe sore muscles after intense surf sessions',
        },
        {
          title: 'Traditional Hammam',
          description: 'Experience authentic Moroccan steam bath rituals',
        },
        {
          title: 'Souk El Had Market',
          description: 'Explore one of Africa\'s largest and most vibrant markets',
        },
        {
          title: 'Paradise Valley',
          description: 'Day trip to stunning natural rock pools in the Atlas Mountains',
        },
      ],

      transformation: undefined,
      cta: 'Book Surf Experience',
    },
    {
      id: 'yoga-surf-retreat',
      name: 'Yoga & Surf Retreat',
      headline: 'Find Your Balance',
      tagline: 'The Complete 7-Day Transformation',
      duration: '7 Days',
      price: 'From €1,200',
      priceNote: 'per person',
      featured: true,
      badge: 'Most Popular',

      // Hero imagery
      heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80',
      lifestyleImages: [
        'https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      ],

      story: 'Experience the transformative power of combining active adventure with mindful restoration. This 7-day journey weaves together the exhilaration of surfing with the centering practice of yoga, creating a holistic experience that energizes your body while calming your mind.',

      highlights: [
        {
          title: 'Twice-Daily Yoga',
          description: 'Morning energizing flows and evening restorative practices, all adapted to your level',
        },
        {
          title: 'Comprehensive Yoga Styles',
          description: 'Creative Vinyasa, pranayama breathwork, restorative poses, yin yoga, yoga nidra, and meditation',
        },
        {
          title: 'Progressive Surf Program',
          description: 'Daily surf lessons that build your skills while the ocean becomes your meditation',
        },
        {
          title: 'Mind-Body Integration',
          description: 'Learn how yoga enhances your surfing and vice versa, creating a powerful synergy',
        },
      ],

      included: [
        '7-day progressive yoga retreat (twice daily sessions)',
        'Creative Vinyasa, pranayama, restorative, yin, yoga nidra, meditation',
        'Daily surf lessons with qualified instructors',
        'All surf equipment (boards, wetsuits)',
        'Accommodation at our surf camp',
        'All meals at local restaurants',
        'Airport transfers from Agadir',
      ],

      experiences: undefined,

      transformation: {
        title: 'Your 7-Day Journey',
        description: 'This retreat is designed for complete beginners through experienced practitioners. Whether you\'ve never stood on a surfboard or held a yoga pose, our instructors meet you exactly where you are and guide your growth.',
        dayInLife: [
          'Morning yoga as the sun rises over the Atlantic',
          'Nourishing breakfast with ocean views',
          'Surf session on Taghazout\'s perfect breaks',
          'Afternoon to explore, rest, or add experiences',
          'Evening restorative yoga and meditation',
          'Dinner at local Moroccan restaurants',
          'Sunset walks and connection with fellow retreaters',
        ],
      },

      cta: 'Book Yoga & Surf Retreat',
    },
  ],

  finalCta: {
    title: 'Ready to Transform Your Life?',
    subtitle: 'Join us in Taghazout for the experience of a lifetime',
    buttonText: 'Book Your Retreat',
    scrollTo: 'booking',
  },
};

// Experiences/What's Included Section
export const EXPERIENCES = {
  sectionTitle: 'Beyond Yoga and Surf',
  sectionSubtitle: 'Immerse yourself in authentic Moroccan culture and unforgettable experiences',

  experiences: [
    {
      id: 'massage',
      title: 'Therapeutic Massage',
      description: 'Professional massage sessions designed specifically for surfers and yogis. Perfect for sore muscles, deep relaxation, and recovery after your active days on the waves.',
      benefits: ['Deep muscle recovery', 'Improved flexibility', 'Stress relief', 'Enhanced circulation'],
    },
    {
      id: 'hammam',
      title: 'Traditional Moroccan Hammam',
      description: 'Experience an authentic North African steam bath complete with traditional exfoliation rituals. This centuries-old wellness practice leaves your skin glowing and your body deeply relaxed.',
      benefits: ['Full body exfoliation', 'Skin rejuvenation', 'Cultural immersion', 'Deep cleansing'],
    },
    {
      id: 'souk',
      title: 'Souk El Had Market',
      description: 'Join us for a guided trip to Souk El Had in Agadir - one of Africa\'s largest markets. Wander through vibrant stalls filled with spices, textiles, ceramics, and local treasures. A feast for all the senses.',
      benefits: ['Authentic cultural experience', 'Unique souvenirs', 'Local cuisine tasting', 'Photography opportunities'],
    },
    {
      id: 'paradise-valley',
      title: 'Paradise Valley Excursion',
      description: 'Venture into the Atlas Mountains to discover Paradise Valley - a hidden oasis with natural rock pools, palm trees, and crystal-clear water. Swim, hike, and immerse yourself in untouched natural beauty.',
      benefits: ['Stunning natural pools', 'Mountain hiking', 'Photography paradise', 'Swimming in natural springs'],
    },
  ],

  included: {
    title: 'Included in All Packages',
    items: [
      'Accommodation at our Taghazout surf camp',
      'All meals at carefully selected local restaurants',
      'Airport transfers (Agadir Al Massira Airport)',
      'Surfboards and wetsuits for all surf sessions',
      'Yoga mats and props',
      'Qualified surf and yoga instructors',
      'Travel insurance assistance',
    ],
  },
} as const;

// Yoga for Surfers Educational Section
export const YOGA_FOR_SURFERS = {
  sectionTitle: 'Why Yoga Makes You a Better Surfer',
  introduction: 'Surfing demands strength, flexibility, balance, and mental focus. Yoga cultivates all of these - and so much more.',

  benefits: [
    {
      title: 'Builds Surf-Specific Strength',
      description: 'Surfing intensively engages your back, neck, shoulders, and arms in ways few other activities do. Yoga strengthens these exact muscle groups while creating balanced development throughout your entire body.',
      icon: 'Dumbbell',
    },
    {
      title: 'Enhances Flexibility and Mobility',
      description: 'From popping up on your board to executing turns, surfing requires dynamic flexibility. Yoga systematically opens tight areas and increases your range of motion, making every movement on your board more fluid.',
      icon: 'Move',
    },
    {
      title: 'Accelerates Recovery',
      description: 'Multiple surf sessions per day can take a toll on your body. Restorative yoga, yin, and yoga nidra practices promote faster recovery, reduce muscle soreness, and prevent injury.',
      icon: 'Heart',
    },
    {
      title: 'Improves Balance and Body Awareness',
      description: 'Standing on a constantly moving surfboard requires exceptional proprioception. Yoga trains your balance, coordination, and awareness of your body in space - essential skills for wave riding.',
      icon: 'Scale',
    },
    {
      title: 'Cultivates Mental Focus',
      description: 'Reading waves, timing your takeoff, and maintaining composure in challenging conditions all require mental clarity. Pranayama (breathwork) and meditation develop the focus and calm needed to perform under pressure.',
      icon: 'Target',
    },
    {
      title: 'Works for All Levels',
      description: 'Whether you\'ve never stood on a surfboard or you\'re chasing barrels, yoga meets you where you are. Our experienced instructors adapt every practice to support beginners and challenge advanced practitioners.',
      icon: 'Users',
    },
  ],

  testimonialPreview: {
    quote: 'I never realized how much yoga would improve my surfing. After just one week, I felt stronger, more flexible, and way more confident in the water.',
    author: 'Sarah M.',
    location: 'United Kingdom',
  },
} as const;

// Gallery Images (placeholders - to be replaced with real photos)
export const GALLERY = {
  sectionTitle: 'Moments from Our Retreats',
  sectionSubtitle: 'Experience the magic of Asana n Surf through the eyes of our guests',

  images: [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=800&q=80',
      alt: 'Surfer riding a perfect wave in Taghazout',
      category: 'surf',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      alt: 'Sunrise yoga session on the beach',
      category: 'yoga',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=800&q=80',
      alt: 'Colorful streets of Taghazout village',
      category: 'location',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=800&q=80',
      alt: 'Group surf lesson in the ocean',
      category: 'surf',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
      alt: 'Peaceful yoga meditation at sunset',
      category: 'yoga',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80',
      alt: 'Traditional Moroccan architecture and ocean view',
      category: 'location',
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?auto=format&fit=crop&w=800&q=80',
      alt: 'Surfboards lined up on Taghazout beach',
      category: 'surf',
    },
    {
      id: 8,
      url: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=800&q=80',
      alt: 'Group yoga session with ocean backdrop',
      category: 'yoga',
    },
    {
      id: 9,
      url: 'https://images.unsplash.com/photo-1451772741724-d20990422508?auto=format&fit=crop&w=800&q=80',
      alt: 'Stunning sunset over the Atlantic Ocean',
      category: 'location',
    },
  ],

  categories: [
    { id: 'all', label: 'All Photos' },
    { id: 'surf', label: 'Surfing' },
    { id: 'yoga', label: 'Yoga' },
    { id: 'location', label: 'Taghazout' },
  ],
} as const;

// Booking Section
export const BOOKING = {
  sectionTitle: 'Begin Your Journey',
  sectionSubtitle: 'Reserve your spot and get ready for the experience of a lifetime',

  form: {
    title: 'Book Your Retreat',
    description: 'Fill out the form below and we\'ll get back to you within 24 hours to confirm availability and finalize your booking.',

    fields: {
      name: {
        label: 'Full Name',
        placeholder: 'Your full name',
        required: true,
      },
      email: {
        label: 'Email Address',
        placeholder: 'your.email@example.com',
        required: true,
      },
      phone: {
        label: 'Phone Number',
        placeholder: '+1 (555) 123-4567',
        required: false,
      },
      package: {
        label: 'Select Package',
        placeholder: 'Choose your retreat package',
        required: true,
        options: [
          'Yoga & Surf Retreat (7 Days)',
          'Surf Focused Experience (7 Days)',
        ],
      },
      dates: {
        label: 'Preferred Dates',
        placeholder: 'e.g., March 15-22, 2025',
        required: true,
      },
      guests: {
        label: 'Number of Guests',
        placeholder: '1',
        required: true,
      },
      message: {
        label: 'Special Requests or Questions',
        placeholder: 'Tell us about your experience level, dietary requirements, or any questions you have...',
        required: false,
      },
    },

    submitButton: 'Submit Booking Request',
    submittingButton: 'Sending...',

    successMessage: {
      title: 'Booking Request Received!',
      message: 'Thank you for your interest in Asana n Surf. We\'ll review your request and get back to you within 24 hours to confirm availability and next steps.',
    },

    errorMessage: {
      title: 'Something Went Wrong',
      message: 'We couldn\'t send your booking request. Please try again or contact us directly via email.',
    },
  },

  faq: {
    title: 'Common Questions',
    questions: [
      {
        question: 'Do I need surf or yoga experience?',
        answer: 'Not at all! Our programs are designed for all levels, from complete beginners to experienced practitioners. Our instructors will meet you where you are and help you progress.',
      },
      {
        question: 'What\'s included in the price?',
        answer: 'All packages include accommodation, meals, surf and yoga instruction, equipment (boards and wetsuits), airport transfers, and select cultural experiences. Specific inclusions vary by package.',
      },
      {
        question: 'How do I get to Taghazout?',
        answer: 'Fly into Agadir Al Massira International Airport (AGA). We provide airport transfers to and from the surf camp, approximately 45 minutes away.',
      },
      {
        question: 'What should I bring?',
        answer: 'We provide surfboards, wetsuits, and yoga equipment. Bring comfortable clothes, swimwear, sunscreen, personal items, and an open mind! We\'ll send a detailed packing list upon booking confirmation.',
      },
      {
        question: 'Can I come alone?',
        answer: 'Absolutely! Many of our guests travel solo and find it\'s a wonderful way to meet like-minded people in a safe, welcoming environment.',
      },
      {
        question: 'What about dietary requirements?',
        answer: 'We can accommodate most dietary requirements and restrictions. Please let us know in your booking request so we can arrange appropriate meals.',
      },
    ],
  },
} as const;

// Contact Section
export const CONTACT = {
  sectionTitle: 'Get in Touch',
  sectionSubtitle: 'Have questions? We\'d love to hear from you',

  info: {
    email: 'hello@asanandsurf.com',
    phone: '+212 123-456-789',
    location: 'Taghazout, Morocco',
    socialMedia: {
      instagram: '@asanandsurf',
      facebook: 'AsanaNSurf',
    },
  },

  form: {
    title: 'Send Us a Message',

    fields: {
      name: {
        label: 'Name',
        placeholder: 'Your name',
        required: true,
      },
      email: {
        label: 'Email',
        placeholder: 'your.email@example.com',
        required: true,
      },
      message: {
        label: 'Message',
        placeholder: 'Tell us how we can help...',
        required: true,
      },
    },

    submitButton: 'Send Message',
    submittingButton: 'Sending...',

    successMessage: 'Thank you for your message! We\'ll get back to you soon.',
    errorMessage: 'Failed to send message. Please try emailing us directly.',
  },

  mapNote: 'We\'re located in the heart of Taghazout, steps from the beach and surrounded by the best surf breaks Morocco has to offer.',
} as const;

// Footer
export const FOOTER = {
  tagline: 'Find your balance between wave and om',

  sections: [
    {
      title: 'Quick Links',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Packages', href: '#packages' },
        { label: 'Experiences', href: '#experiences' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Book Now', href: '#booking' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Retreat Info',
      links: [
        { label: 'What to Bring', href: '#faq' },
        { label: 'Surf Conditions', href: '#destination' },
        { label: 'Accommodation', href: '#destination' },
        { label: 'Travel Tips', href: '#destination' },
      ],
    },
  ],

  contact: {
    title: 'Contact',
    email: 'hello@asanandsurf.com',
    phone: '+212 123-456-789',
    location: 'Taghazout, Morocco',
  },

  social: [
    { platform: 'Instagram', handle: '@asanandsurf', url: '#' },
    { platform: 'Facebook', handle: 'AsanaNSurf', url: '#' },
  ],

  legal: {
    copyright: `© ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.`,
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
    ],
  },
} as const;

// SEO/Meta Information
export const SEO = {
  title: 'Asana n Surf - Yoga & Surf Retreats in Taghazout, Morocco',
  description: 'Find your perfect balance between wave and om. Join us for transformative yoga and surf retreats in Taghazout, Morocco. All levels welcome.',
  keywords: 'yoga retreat, surf camp, Morocco, Taghazout, yoga and surf, wellness retreat, surf vacation, yoga vacation',
  ogImage: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1200&q=80',
} as const;
