import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, Waves } from 'lucide-react';
import { FOOTER, SITE_NAME, CONTACT } from '../../constants/content';

/**
 * Footer component with:
 * - Social media links
 * - Contact information
 * - Copyright notice
 * - Clean, minimal design matching brand aesthetic
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-sand-200 border-t border-sand-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <Waves className="w-6 h-6 text-ocean-500" />
              <span className="text-xl font-serif font-bold text-gray-800">
                {SITE_NAME}
              </span>
            </div>
            <p className="text-gray-600 italic">{FOOTER.tagline}</p>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="font-serif font-semibold text-gray-800 mb-3">Contact</h3>
            <div className="space-y-2 text-gray-600">
              <a
                href={`mailto:${CONTACT.info.email}`}
                className="flex items-center gap-2 justify-center hover:text-ocean-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {CONTACT.info.email}
              </a>
              <a
                href={`tel:${CONTACT.info.phone}`}
                className="flex items-center gap-2 justify-center hover:text-ocean-500 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {CONTACT.info.phone}
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className="text-center md:text-right">
            <h3 className="font-serif font-semibold text-gray-800 mb-3">Follow Us</h3>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="https://instagram.com/asanandsurf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-ocean-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/asanandsurf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-ocean-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Made by OptiveraAi */}
        <div className="pt-8 border-t border-sand-200 flex justify-center mb-6">
          <a
            href="https://optiveraai.se"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <img
              src="/optivera-ai-logo-new.png"
              alt="OptiveraAi"
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
              Made by OptiveraAi
            </span>
          </a>
        </div>

        {/* Copyright & Legal Links */}
        <div className="text-center text-gray-600 text-sm space-y-2">
          <p>{FOOTER.legal.copyright}</p>
          <div className="flex items-center justify-center gap-4">
            {FOOTER.legal.links.map((link, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-gray-400">•</span>}
                <Link
                  to={link.href}
                  className="hover:text-ocean-500 transition-colors underline"
                >
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
