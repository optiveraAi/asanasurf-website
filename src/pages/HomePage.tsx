import React from 'react';
import Hero from '../components/sections/Hero';
import Introduction from '../components/sections/Introduction';
import LogoLoop from '../components/sections/LogoLoop';
import PackagePreview from '../components/sections/PackagePreview';
import WaveDivider from '../components/ui/WaveDivider';

/**
 * HOME PAGE
 *
 * Combines storytelling and introduction content:
 * - Hero section
 * - Introduction about AsanaSurf
 * - Why Yoga + Surf works
 * - Discover Taghazout
 * - Surf brand partner logos carousel
 * - Interactive package preview cards
 */
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Wave Divider - Hero to Introduction */}
      <WaveDivider
        variant="gentle"
        fillColor="#faf8f5"
        backgroundColor="transparent"
      />

      {/* Introduction Section */}
      <Introduction />

      {/* Wave Divider - Introduction to Logo Loop */}
      <WaveDivider
        variant="dramatic"
        fillColor="#fdfcfa"
        backgroundColor="#faf8f5"
        flip={true}
      />

      {/* Logo Carousel - Surf Brand Partners */}
      <LogoLoop />

      {/* Wave Divider - Logo Loop to Packages */}
      <WaveDivider
        variant="layered"
        fillColor="#fdfcfa"
        backgroundColor="#fdfcfa"
      />

      {/* Package Preview Cards */}
      <PackagePreview />
    </div>
  );
};

export default HomePage;
