import React, { useEffect } from 'react';
import { initEmailJS } from './utils/emailService';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import Introduction from './components/sections/Introduction';
import Packages from './components/sections/Packages';
import Gallery from './components/sections/Gallery';
import Booking from './components/sections/Booking';
import Contact from './components/sections/Contact';

/**
 * Main App Component
 *
 * Single-page application structure with:
 * - Fixed header navigation
 * - Smooth scrolling between sections
 * - All main content sections
 * - Footer
 *
 * Built with React, TypeScript, Tailwind CSS, and Framer Motion
 */
function App() {
  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  return (
    <div className="App">
      {/* Fixed Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Introduction />
        <Packages />
        <Gallery />
        <Booking />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
