/**
 * Content Constants for AsanaSurf Website
 *
 * Centralized content management for all text across the site.
 * Organized by section for easy updates and maintenance.
 */

export const SITE_NAME = "AsanaSurf";

// Next Trip Banner - Upcoming retreat information
export const NEXT_TRIP = {
  available: true, // Set to false to hide the banner
  destination: 'Taghazout, Morocco',
  dates: 'March 20-27, 2026',
} as const;

// Available Trips - For booking form date selection
export const AVAILABLE_TRIPS = [
  {
    id: 'march-2026-taghazout',
    dateRange: 'March 20-27, 2026',
    location: 'Taghazout, Morocco',
    duration: '7 Days / 6 Nights',
  },
] as const;

// Navigation Links - Multi-page structure
export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'about', label: 'About', href: '/about' },
  { id: 'packages', label: 'Packages', href: '/packages' },
  { id: 'gallery', label: 'Gallery', href: '/gallery' },
  { id: 'book', label: 'Book Now', href: '/book' },
  { id: 'faq', label: 'FAQ', href: '/faq' },
];

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
    description: 'At AsanaSurf, we\'ve crafted an experience that honors both the thrill of adventure and the peace of restoration. Each day is thoughtfully designed to energize and restore you.',
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
      id: 'surf-yoga-experience',
      name: 'Surf Adventure & Yoga',
      headline: 'Find Your Flow',
      tagline: 'All-Inclusive Surf Adventure with Yoga',
      duration: '7 Days / 6 Nights',
      price: '€1000',
      priceNote: 'per person',
      accommodationNote: 'Based on double occupancy (2 people sharing)',
      featured: false,
      badge: undefined,

      // Hero imagery
      heroImage: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1920&q=80',
      lifestyleImages: [
        '/surf-in-morocco.webp',
        '/morocco-food.jpg',
        '/surf-begginer.webp',
      ],

      story: 'All-inclusive surf experience with complimentary yoga sessions to enhance your performance and recovery. Perfect for those who want to master the waves while staying balanced. Our team is on hand 24/7 taking care of your every need, so you can focus on catching the perfect wave.',

      highlights: [
        {
          title: '5 Surf Coaching Sessions',
          description: 'Expert instruction from qualified surf coaches who know Taghazout\'s breaks intimately and will get you riding the best waves for your ability',
        },
        {
          title: 'Professional Guiding',
          description: 'Knowledgeable guides taking you to the best beaches and surf spots with daily transport included',
        },
        {
          title: 'Complimentary Yoga',
          description: 'Mix of Vinyasa, Hatha, and Yin yoga sessions designed specifically for surf preparation and recovery',
        },
        {
          title: 'All-Inclusive Care',
          description: 'Team available 24/7 with accommodation, all meals, equipment, and transfers completely taken care of',
        },
      ],

      included: [
        'Team on hand 24/7 taking care of your every need',
        '7 nights accommodation at our Taghazout surf camp',
        'Healthy breakfast, packed lunch, and evening meals daily',
        '5 surf coaching sessions with qualified instructors',
        '5 days standard surfboards and wetsuits included',
        'Daily transport to the best beaches and surf spots',
        'Professional guide getting you to the best waves for your ability',
        'Complimentary yoga sessions (Vinyasa, Hatha, Yin) for surf prep and recovery',
        'Airport transfers available (€30 per person)',
      ],

      experiences: [
        {
          title: 'Agadir Souk',
          description: 'Explore the vibrant local market with authentic Moroccan culture',
        },
        {
          title: 'Paradise Valley',
          description: 'Day trip to stunning natural rock pools in the Atlas Mountains',
        },
        {
          title: 'Traditional Hammam',
          description: 'Experience authentic Moroccan steam bath and spa rituals',
        },
      ],

      transformation: undefined,
      cta: 'Book Surf Adventure & Yoga',
    },
    {
      id: 'yoga-surf-retreat',
      name: 'Yoga Retreat Experience',
      headline: 'Find Your Balance',
      tagline: 'Comprehensive Yoga Retreat by the Ocean',
      duration: '7 Days / 6 Nights',
      price: '€850',
      priceNote: 'per person',
      accommodationNote: 'Based on double occupancy (2 people sharing)',
      featured: false,
      badge: undefined,

      // Hero imagery
      heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80',
      lifestyleImages: [
        '/beach-yoga.avif',
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      ],

      story: 'A transformative 7-day retreat focusing on comprehensive yoga practice with the option to add surf sessions. Perfect for yogis who want to try surfing or deepen their practice by the ocean. With experienced yoga teachers and our team on hand 24/7, you\'ll experience a complete mind-body transformation in Morocco\'s most beautiful setting.',

      highlights: [
        {
          title: 'Twice-Daily Yoga Sessions',
          description: '5 x 1-hour sunrise yoga sessions every morning, plus 5 x 1-hour PM yoga classes in various styles including Hatha, Vinyasa, and Yin yoga',
        },
        {
          title: 'Surf Sessions Available',
          description: 'Add surf coaching sessions to your retreat for the perfect balance of yoga and ocean adventure',
        },
        {
          title: 'Full Support & Care',
          description: 'Team available 24/7 with all meals, accommodation, and daily transport to the beaches completely taken care of',
        },
        {
          title: 'Optional Add-Ons',
          description: 'Enhance your retreat with therapeutic massage sessions and other wellness experiences',
        },
      ],

      included: [
        'Team on hand 24/7 taking care of your every need',
        '7 nights accommodation at our Taghazout retreat',
        'Healthy breakfast, packed lunch, and evening meals daily',
        '5 x 1 hour sunrise yoga every day',
        '5 x 1 hour PM yoga class (Hatha, Vinyasa, Yin) with local yoga teacher',
        'Daily transport to the beaches',
        'Surf coaching sessions available (can be added)',
        'Therapeutic massage sessions available (can be added)',
        'Airport transfers available (€30 per person)',
      ],

      experiences: [
        {
          title: 'Agadir Souk',
          description: 'Explore the vibrant local market with authentic Moroccan culture',
        },
        {
          title: 'Paradise Valley',
          description: 'Day trip to stunning natural rock pools in the Atlas Mountains',
        },
        {
          title: 'Traditional Hammam',
          description: 'Experience authentic Moroccan steam bath and spa rituals',
        },
      ],

      transformation: {
        title: 'Your 7-Day Yoga Journey',
        description: 'This retreat is designed for complete beginners through experienced yoga practitioners. Whether you\'ve never been to a yoga class or have years of practice, our experienced teachers and team meet you exactly where you are and guide your transformation.',
        dayInLife: [
          'Sunrise yoga as the sun rises over the Atlantic',
          'Nourishing breakfast with ocean views',
          'Free time to explore, relax, or add surf sessions',
          'Healthy packed lunch',
          'Afternoon yoga class (Hatha, Vinyasa, or Yin)',
          'Evening meals at local Moroccan restaurants',
          'Sunset walks and connection with fellow yogis',
        ],
      },

      cta: 'Book Yoga Retreat Experience',
    },
  ],

  finalCta: {
    title: 'Ready to Transform Your Life?',
    subtitle: 'Join us in Taghazout for the experience of a lifetime',
    buttonText: 'Book Your Retreat',
    linkTo: '/book',
  },
};

// Experiences/What's Included Section
export const EXPERIENCES = {
  sectionTitle: 'Optional Add-Ons & Experiences',
  sectionSubtitle: 'Enhance your retreat with authentic Moroccan culture and wellness experiences',

  experiences: [
    {
      id: 'massage',
      title: 'Therapeutic Massage (Add-On)',
      description: 'Professional massage sessions designed specifically for surfers and yogis. Perfect for sore muscles, deep relaxation, and recovery after your active days on the waves. Book additional sessions to enhance your retreat experience.',
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
      'Airport transfers available (€30 per person)',
      'Surfboards and wetsuits for all surf sessions',
      'Yoga mats and props',
      'Qualified surf instructors and yoga teachers',
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
      description: 'Whether you\'ve never stood on a surfboard or you\'re chasing barrels, yoga meets you where you are. Our experienced teachers adapt every practice to support beginners and challenge advanced practitioners.',
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
  sectionSubtitle: 'Experience the wonders of africa',

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
          'Surf Adventure & Yoga - €1000 (7 Days / 6 Nights)',
          'Yoga Retreat Experience - €850 (7 Days / 6 Nights)',
        ],
      },
      dates: {
        label: 'Available Trip',
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
      message: 'Thank you for your interest in AsanaSurf. We\'ll review your request and get back to you within 24 hours to confirm availability and next steps.',
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
        answer: 'Not at all! Our programs are designed for all levels, from complete beginners to experienced practitioners. Our surf instructors and yoga teachers will meet you where you are and help you progress.',
      },
      {
        question: 'What\'s included in the price?',
        answer: 'All packages include accommodation, meals, surf and yoga instruction, equipment (boards and wetsuits), and select cultural experiences. Airport transfers are available for €30 per person. Specific inclusions vary by package.',
      },
      {
        question: 'How do I get to Taghazout?',
        answer: 'The nearest airport is Agadir Al Massira International Airport (AGA), located approximately 45 minutes from Taghazout. Airport transfers are available for €30 per person. There are two ATMs available in Taghazout village and at the airport for your convenience.',
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
    email: 'solhsurf@gmail.com',
    phone: '+46 73-993 45 42',
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
    email: 'solhsurf@gmail.com',
    phone: '+46 73-993 45 42',
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
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
} as const;

// Terms & Conditions
export const TERMS_CONDITIONS = {
  title: 'Terms & Conditions',
  lastUpdated: 'January 2025',

  sections: [
    {
      title: 'Booking & Deposits',
      content: [
        'When booking a course or holiday, a deposit of 20% is taken by Asana Surf.',
        'A disclaimer form must be filled in and completed before a person can take part in any course. This must be done at the surf camp office in Taghazout. Asana Surf does not accept any liability for loss caused by failure to complete the disclaimer form.',
        'Asana Surf requires 20% of the total course or holiday cost when booking. Asana Surf has the right to cancel a person\'s place on the course if full deposit payment is not received. Course reminders will not be sent.',
      ],
    },
    {
      title: 'Cancellations & Changes',
      content: [
        'Any cancellations or changes to your booking must be made in writing and will only be accepted from the date they are received by Asana Surf. Asana Surf only takes a 20% deposit at the time of booking. Upon your arrival in Morocco, Asana Surf is the responsible party for ensuring your safe delivery of your paid for Moroccan holiday or course.',
        'The course or holiday deposit payment is non-refundable.',
        'Refunds for cancellations are as follows:',
        '• 4 weeks or more from course start date = full refund minus 20% deposit',
        '• 2-3 weeks before course start date = 50% refund minus 20% deposit',
        '• Less than 2 weeks to course start date = no refund',
        'If the booking is changed more than 21 days prior to the course, Asana Surf will make every effort to change the requested booking. Less than 21 days prior to the start, Asana Surf reserves the right that no changes can be made.',
      ],
    },
    {
      title: 'Liability & Insurance',
      content: [
        'Asana Surf assumes no liability in respect of personal injury, loss, damage or third party claims which occur through no fault of its own or its instructors.',
        'Asana Surf cannot accept responsibility for any of the reasons cited above that a person may incur whilst participating in any of the activities unless Asana Surf can be proven negligent.',
        'All participants accept that they participate at their own risk and confirm that they have their own private health insurance to cover any such injury, loss or damage or have chosen not to take out such insurance even though they understand that this is their responsibility and specifically recommended by Asana Surf.',
        'All participants must have declared any medical conditions that may affect their own or others safety whilst participating and accept that Asana Surf does not accept any responsibility for any conditions not disclosed.',
      ],
    },
    {
      title: 'Equipment & Safety',
      content: [
        'Asana Surf equipment will be used for the activity, unless previously agreed. If a participant should damage or lose any Asana Surf equipment, they agree to inform a member of Asana Surf staff and understand that they will have to pay for any repairs or replacements.',
        'Participants agree to abide by all decisions and adhere to all instructions that Asana Surf staff and instructors make whilst under their supervision. This includes sea-related conditions beyond Asana Surf control (flat days, fog, dangerous sea conditions etc.). In this case, should a course/lesson be cancelled, a credit note will be issued which is valid for one year from the date of cancellation. No refunds will be issued.',
      ],
    },
    {
      title: 'Accommodation',
      content: [
        'The accommodation providers listed on the website act as a guide only to assist in booking accommodation. No responsibility is taken by Asana Surf for booking any accommodation and cannot be held responsible for any aspect of or problems arising from accommodation arrangements.',
      ],
    },
    {
      title: 'Pricing & Changes',
      content: [
        'The prices printed on this website are valid at the time of publication. Asana Surf reserves the right to increase or reduce any of the prices any time after publication. Any changes will be made clear at the time of booking. Asana Surf reserves the right to cancel or change course dates subject to notification of those persons booked on to course.',
      ],
    },
    {
      title: 'Data Protection',
      content: [
        'Permission is given for participant\'s contact details to be entered into the Asana Surf database and held in accordance with the UK Data Protection Act 1998. This information will not be forwarded to third parties.',
      ],
    },
    {
      title: 'Credit Notes & Refunds',
      content: [
        'The credit note issued for a cancellation is valid for one year from the date of issue, and only applies to a surf session. It may not be exchanged or used to purchase items in the shop to the value of the voucher.',
        'Asana Surf will offer a refund only if the purchased item is faulty. In all other cases an exchange will be offered or a credit note will be issued. In both cases the original receipt must be shown.',
      ],
    },
  ],
} as const;

// SEO/Meta Information
export const SEO = {
  title: 'AsanaSurf - Yoga & Surf Retreats in Taghazout, Morocco',
  description: 'Find your perfect balance between wave and om. Join us for transformative yoga and surf retreats in Taghazout, Morocco. All levels welcome.',
  keywords: 'yoga retreat, surf camp, Morocco, Taghazout, yoga and surf, wellness retreat, surf vacation, yoga vacation',
  ogImage: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1200&q=80',
} as const;

// Day Timelines - What to Expect Section
export const DAY_TIMELINES = {
  surfYogaExperience: {
    title: 'A Day in Your Surf Adventure & Yoga Retreat',
    packageName: 'Surf Adventure & Yoga',
    backgroundImage: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1920&q=80',
    activities: [
      {
        time: '7:00 AM',
        title: 'Sunrise Yoga',
        description: 'Gentle yoga session to prepare your body for surfing',
        iconType: 'sun' as const,
        iconColor: 'lavender' as const,
      },
      {
        time: '9:00 AM',
        title: 'Breakfast',
        description: 'Healthy Moroccan & continental breakfast',
        iconType: 'coffee' as const,
        iconColor: 'jungle' as const,
      },
      {
        time: '10:30 AM',
        title: 'Surf Session',
        description: "Professional coaching at Morocco's best surf spots with your guide",
        iconType: 'waves' as const,
        iconColor: 'ocean' as const,
      },
      {
        time: '1:00 PM',
        title: 'Lunch & Free Time',
        description: 'Packed lunch and time to relax, explore Taghazout, or enjoy the beach',
        iconType: 'apple' as const,
        iconColor: 'jungle' as const,
      },
      {
        time: '4:00 PM',
        title: 'Recovery Yoga',
        description: 'Restorative yoga (Vinyasa, Hatha, or Yin) for muscle recovery',
        iconType: 'flower' as const,
        iconColor: 'lavender' as const,
      },
      {
        time: '7:00 PM',
        title: 'Dinner & Community',
        description: 'Evening meal with fellow surfers and retreat guests',
        iconType: 'utensils' as const,
        iconColor: 'jungle' as const,
      },
    ],
  },

  yogaRetreat: {
    title: 'A Day in Your Yoga Retreat Experience',
    packageName: 'Yoga Retreat Experience',
    backgroundImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80',
    activities: [
      {
        time: '6:30 AM',
        title: 'Sunrise Yoga',
        description: '1 hour comprehensive morning practice to start your day',
        iconType: 'sunrise' as const,
        iconColor: 'lavender' as const,
      },
      {
        time: '9:00 AM',
        title: 'Breakfast',
        description: 'Healthy nourishing breakfast',
        iconType: 'coffee' as const,
        iconColor: 'jungle' as const,
      },
      {
        time: '10:30 AM',
        title: 'Free Time or Beach',
        description: 'Relax, explore, optional surf sessions, or personal practice',
        iconType: 'palmtree' as const,
        iconColor: 'sand' as const,
      },
      {
        time: '1:00 PM',
        title: 'Lunch',
        description: 'Packed lunch with fresh local ingredients',
        iconType: 'apple' as const,
        iconColor: 'jungle' as const,
      },
      {
        time: '3:00 PM',
        title: 'Afternoon Yoga',
        description: '1 hour session: Hatha, Vinyasa, or Yin yoga with local teacher',
        iconType: 'flower' as const,
        iconColor: 'lavender' as const,
      },
      {
        time: '6:00 PM',
        title: 'Sunset & Meditation',
        description: 'Evening wind-down practice',
        iconType: 'sunset' as const,
        iconColor: 'lavender' as const,
      },
      {
        time: '7:30 PM',
        title: 'Dinner & Reflection',
        description: 'Community meal and sharing circle',
        iconType: 'utensils' as const,
        iconColor: 'jungle' as const,
      },
    ],
  },
} as const;
