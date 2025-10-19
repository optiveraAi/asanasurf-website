// All website content centralized in one place for easy editing

export const SITE_NAME = "Asana n Surf";

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "packages", label: "Packages" },
  { id: "gallery", label: "Gallery" },
  { id: "book", label: "Book Now" },
  { id: "contact", label: "Contact" },
];

export const HERO = {
  headline: "Find Your Balance Between Adventure and Tranquility",
  subheadline: "Where ocean meets inner peace. Ride the waves, calm the mind.",
  cta: "Explore Retreats",
};

export const INTRO = {
  heading: "The Perfect Union of Surf and Yoga",
  tagline: "More than a vacation — a transformation",
  paragraphs: [
    "At Asana n Surf, we believe true balance comes from experiencing life's full spectrum—the exhilarating rush of catching a wave and the peaceful stillness of a sunset yoga session.",
    "Our retreats are designed for everyone, from complete beginners to experienced practitioners. Whether you've never stood on a surfboard or never held a yoga pose, we'll meet you exactly where you are.",
    "This is your invitation to step away from daily stress and into a world where adventure and mindfulness dance together in perfect harmony.",
  ],
  benefits: [
    {
      title: "Balance",
      description: "Active adventure paired with mindful restoration",
    },
    {
      title: "Transformation",
      description: "Leave feeling renewed, energized, and centered",
    },
    {
      title: "Community",
      description: "Connect with like-minded souls on a shared journey",
    },
    {
      title: "Nature",
      description: "Immerse yourself in stunning coastal landscapes",
    },
  ],
};

export const PACKAGES = {
  heading: "Choose Your Retreat Experience",
  tagline: "Escape to paradise and discover your perfect balance",
  packages: [
    {
      id: "weekend",
      name: "Weekend Escape",
      duration: "2-3 Days",
      price: "$599",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=800&q=80",
      experienceDescription: "Perfect for those seeking a quick reset from the everyday. Immerse yourself in two days of sun, surf, and serenity. Leave feeling refreshed, energized, and reconnected to yourself.",
      features: [
        "2 surf sessions with certified instructor",
        "3 yoga classes (sunrise & sunset)",
        "Beachfront accommodation",
        "Healthy meals included",
        "All equipment provided",
        "Small group setting (max 8 people)",
      ],
      highlighted: false,
    },
    {
      id: "week",
      name: "Week of Wellness",
      duration: "7 Days",
      price: "$1,899",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
      experienceDescription: "A full week to truly transform. Build your surf skills, deepen your yoga practice, and create lasting memories. This is where real change happens—in the rhythm of the waves and the stillness of your breath.",
      features: [
        "5 surf sessions with progression tracking",
        "Daily yoga classes (2x per day)",
        "Premium beachfront accommodation",
        "All meals + smoothie bar",
        "Equipment + wetsuit included",
        "Meditation workshops",
        "Nature excursions",
        "Small group setting (max 8 people)",
      ],
      highlighted: true,
      badge: "Most Popular",
    },
    {
      id: "custom",
      name: "Custom Experience",
      duration: "Flexible",
      price: "Contact Us",
      image: "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80",
      experienceDescription: "Your retreat, your way. Whether it's a private couples escape, a group celebration, or a personalized wellness journey—we'll craft the perfect experience tailored exactly to your vision and needs.",
      features: [
        "Personalized itinerary",
        "Flexible duration",
        "Private or small group options",
        "Special dietary accommodations",
        "Additional activities available",
        "Perfect for groups or special occasions",
      ],
      highlighted: false,
    },
  ],
};

export const GALLERY = {
  heading: "Experience the Journey",
  tagline: "A glimpse into the Asana n Surf lifestyle",
  // Unsplash image URLs will be added directly in the component
};

export const BOOKING = {
  heading: "Book Your Retreat",
  tagline: "Start your journey to balance today",
  form: {
    namePlaceholder: "Full Name",
    emailPlaceholder: "Email Address",
    phonePlaceholder: "Phone Number (optional)",
    packageLabel: "Select Package",
    packageOptions: [
      { value: "", label: "Choose a package..." },
      { value: "weekend", label: "Weekend Escape (2-3 Days)" },
      { value: "week", label: "Week of Wellness (7 Days)" },
      { value: "custom", label: "Custom Experience" },
    ],
    datesPlaceholder: "Preferred Dates",
    guestsPlaceholder: "Number of Guests",
    requestsPlaceholder: "Special Requests or Questions",
    submitButton: "Submit Booking Request",
    submittingButton: "Sending...",
  },
  success: {
    title: "Booking Request Sent!",
    message: "Thank you for your interest. We'll be in touch within 24 hours to confirm your retreat details.",
  },
  error: {
    title: "Oops! Something went wrong",
    message: "Please try again or contact us directly at the email below.",
  },
};

export const CONTACT = {
  heading: "Get In Touch",
  tagline: "Questions? We're here to help",
  email: "hello@asanansurf.com",
  phone: "+1 (555) 123-4567",
  description: "Have questions about our retreats? Want to discuss a custom package? Reach out and we'll get back to you as soon as possible.",
  form: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    submitButton: "Send Message",
    submittingButton: "Sending...",
  },
  social: {
    instagram: "https://instagram.com/asanansurf",
    facebook: "https://facebook.com/asanansurf",
  },
};

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.`,
  tagline: "Where waves meet wellness",
};
