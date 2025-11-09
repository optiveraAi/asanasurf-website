import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { initEmailJS } from './utils/emailService';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PackagesPage from './pages/PackagesPage';
import GalleryPage from './pages/GalleryPage';
import BookPage from './pages/BookPage';
import FAQPage from './pages/FAQPage';

/**
 * ScrollToTop Component
 * Scrolls to top of page on route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

/**
 * Main App Component
 *
 * Multi-page application structure with:
 * - React Router for navigation
 * - Fixed header navigation across all pages
 * - Page-specific content
 * - Footer on all pages
 *
 * Built with React, TypeScript, Tailwind CSS, Framer Motion, and React Router
 */
function App() {
  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  return (
    <Router>
      <div className="App">
        <ScrollToTop />

        {/* Fixed Navigation Header */}
        <Header />

        {/* Main Content - Route-based Pages */}
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
