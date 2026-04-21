import React from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold">Pirsch</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Product
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Pricing
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Docs
              </a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Blog
              </a>
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Sign in
              </a>
              <a
                href="#"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Start Free
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Product
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Pricing
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Docs
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Blog
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
              Sign in
            </a>
            <a
              href="#"
              className="bg-primary-600 hover:bg-primary-700 text-white block px-3 py-2 rounded-lg text-base font-medium"
            >
              Start Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
