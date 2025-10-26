import React from 'react';
import Hero from '../components/sections/Hero';
import Introduction from '../components/sections/Introduction';
import PackagePreview from '../components/sections/PackagePreview';

/**
 * HOME PAGE
 *
 * Combines storytelling and introduction content:
 * - Hero section
 * - Introduction about Asana n Surf
 * - Why Yoga + Surf works
 * - Discover Taghazout
 * - Interactive package preview cards
 */
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Introduction Section */}
      <Introduction />

      {/* Package Preview Cards */}
      <PackagePreview />
    </div>
  );
};

export default HomePage;
