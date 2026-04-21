import React from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Localise</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Product
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Pricing
            </a>
            
            <div className="relative group">
              <button className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Blog
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Log in
            </button>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Start free trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 bg-white">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                Product
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                Solutions
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                Resources
              </a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                Blog
              </a>
              <div className="pt-4 pb-2 border-t border-gray-200">
                <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900">
                  Log in
                </a>
                <a href="#" className="block px-3 py-2 text-base font-medium bg-primary-500 text-white rounded-lg mt-2">
                  Start free trial
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
