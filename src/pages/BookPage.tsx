import React from 'react';
import Booking from '../components/sections/Booking';
import Contact from '../components/sections/Contact';

/**
 * BOOK PAGE
 *
 * Booking and contact information:
 * - Booking form with package selection
 * - Contact details
 */
const BookPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Booking Section */}
      <Booking />

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default BookPage;
