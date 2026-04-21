import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navigationItems } from '../data/mockData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-accent-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-accent-900">AI Meets</span>
                <span className="text-sm font-semibold gradient-text">Accounting</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Resources' ? (
                  <button
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                    className="flex items-center text-accent-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent-50 rounded-lg"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-accent-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent-50 rounded-lg"
                  >
                    {item.name}
                  </a>
                )}
                
                {/* Resources Dropdown */}
                {item.name === 'Resources' && isResourcesOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-48 bg-white border border-accent-200 rounded-lg shadow-lg py-2 z-50"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                  >
                    <a href="#" className="block px-4 py-2 text-sm text-accent-700 hover:bg-accent-50 hover:text-primary-600">
                      Documentation
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-accent-700 hover:bg-accent-50 hover:text-primary-600">
                      API Reference
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-accent-700 hover:bg-accent-50 hover:text-primary-600">
                      Help Center
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-accent-700 hover:bg-accent-50 hover:text-primary-600">
                      Webinars
                    </a>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-accent-600 hover:text-primary-600 px-4 py-2 text-sm font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="btn-primary">
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-accent-600 hover:text-primary-600 p-2 rounded-lg hover:bg-accent-50 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-accent-200 py-4 animate-slide-up">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-accent-700 hover:text-primary-600 hover:bg-accent-50 rounded-lg font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Actions */}
              <div className="border-t border-accent-200 pt-4 space-y-2">
                <button className="w-full text-left px-4 py-3 text-accent-700 hover:text-primary-600 hover:bg-accent-50 rounded-lg font-medium transition-colors duration-200">
                  Sign In
                </button>
                <button className="btn-primary w-full mx-4 max-w-[calc(100%-2rem)]">
                  Start Free Trial
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
