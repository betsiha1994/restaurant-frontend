import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link
              to="/home"
              className="text-2xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors duration-300"
            >
              Foodosta
            </Link>
            <p className="text-gray-300 leading-relaxed">
              We serve the finest cuisine made with fresh, locally-sourced
              ingredients. Order online for quick delivery or pickup.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors duration-300"
              >
                <span className="font-semibold">f</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors duration-300"
              >
                <span className="font-semibold">in</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors duration-300"
              >
                <span className="font-semibold">ig</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors duration-300"
              >
                <span className="font-semibold">t</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pb-2 border-b-2 border-yellow-500 w-20">
              Order Online
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/restaurant"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Browse Restaurants
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link
                  to="/specials"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Special Offers
                </Link>
              </li>
              <li>
                <Link
                  to="/gift-cards"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link
                  to="/catering"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Catering
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pb-2 border-b-2 border-yellow-500 w-28">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-yellow-500 mt-1">📍</span>
                <p className="text-gray-300">
                  123 Main Street, Foodville, FK 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-yellow-500">📞</span>
                <a
                  href="tel:5551234567"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-yellow-500">✉️</span>
                <a
                  href="mailto:support@asru@gmail.com"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  support@asru@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-yellow-400 mb-2">
                Support Hours
              </h4>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Mon-Sun: 8:00 AM - 12:00 AM</p>
                <p className="text-gray-400 text-xs">
                  Orders can be placed 24/7
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold relative pb-2 border-b-2 border-yellow-500 w-32">
              Newsletter
            </h3>
            <p className="text-gray-300">
              Subscribe to get special offers and weekly menu updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 text-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-r-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/90 border-t border-yellow-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 Foodosta Restaurant. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/refund-policy"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                Refund Policy
              </Link>
              <Link
                to="/accessibility"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                Accessibility
              </Link>
            </div>

            <div className="flex space-x-3">
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded text-xs border border-yellow-500/30">
                Visa
              </span>
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded text-xs border border-yellow-500/30">
                Mastercard
              </span>
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded text-xs border border-yellow-500/30">
                PayPal
              </span>
              <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded text-xs border border-yellow-500/30">
                Apple Pay
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
