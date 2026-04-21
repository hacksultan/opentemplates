import React, { useState } from 'react';
import { Menu, X, Github, Twitter } from 'lucide-react';
import { navigationItems } from '../data/mockData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-accent-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-accent-900">Tailwind CSS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-accent-600 hover:text-accent-900 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent-50 rounded-lg"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-accent-600 hover:text-accent-900 p-2 rounded-lg hover:bg-accent-50 transition-colors duration-200"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-accent-600 hover:text-accent-900 p-2 rounded-lg hover:bg-accent-50 transition-colors duration-200"
              title="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-accent-600 hover:text-accent-900 p-2 rounded-lg hover:bg-accent-50 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-accent-200 py-4 animate-slide-up">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-accent-700 hover:text-accent-900 hover:bg-accent-50 rounded-lg font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-accent-200">
                <a
                  href="#"
                  className="text-accent-600 hover:text-accent-900 p-2 rounded-lg hover:bg-accent-50 transition-colors duration-200"
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-accent-600 hover:text-accent-900 p-2 rounded-lg hover:bg-accent-50 transition-colors duration-200"
                  title="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>

              {/* Mobile CTA */}
              <div className="px-4 pt-4">
                <button className="btn-primary w-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
