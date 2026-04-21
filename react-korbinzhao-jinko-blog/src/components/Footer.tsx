import React from 'react';
import { ChevronUp, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    demos: [
      { name: "Personal blog", href: "#" },
      { name: "You're unique", href: "#" },
      { name: "Bold & Vibrant", href: "#" }
    ],
    more: [
      { name: "Make it yours", href: "#" },
      { name: "Individual", href: "#" },
      { name: "Full of character", href: "#" }
    ],
    categories: [
      { name: "Lifestyle", href: "#lifestyle" },
      { name: "Beauty", href: "#beauty" },
      { name: "Travel", href: "#travel" }
    ],
    help: [
      { name: "Home", href: "#" },
      { name: "Subscribe", href: "#subscribe" },
      { name: "Privacy Policy", href: "#privacy" }
    ]
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Demos */}
            <div>
              <h3 className="font-heading text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Demos
              </h3>
              <ul className="space-y-3">
                {footerLinks.demos.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* More */}
            <div>
              <h3 className="font-heading text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                More
              </h3>
              <ul className="space-y-3">
                {footerLinks.more.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-heading text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Categories
              </h3>
              <ul className="space-y-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help & Info */}
            <div>
              <h3 className="font-heading text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Help & Info
              </h3>
              <ul className="space-y-3">
                {footerLinks.help.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Brand & Copyright */}
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold font-heading text-gradient">
                Jinko
              </div>
              <span className="text-gray-400">-</span>
              <span className="text-sm text-gray-600">
                Your personal blog theme
              </span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-primary-600 transition-colors duration-200 group"
            >
              <span>back to top</span>
              <ChevronUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Jinko Blog. Made with{' '}
              <Heart className="inline h-3 w-3 text-red-500 mx-1" />
              using React & TailwindCSS
            </p>
          </div>
        </div>
      </div>

      {/* Hidden honeypot for spam protection */}
      <div style={{ position: 'absolute', left: '-5000px' }}>
        <input type="text" name="honeypot" tabIndex={-1} aria-hidden="true" />
        <label htmlFor="honeypot">Leave this field empty if you're human:</label>
      </div>
    </footer>
  );
};

export default Footer;
