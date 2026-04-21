import React from 'react';
import { Menu, X, BookOpen, Github } from 'lucide-react';

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
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">‹div›</span>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  <span className="gradient-text">RIOTS</span>
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              BLOG
            </a>
            
            <a 
              href="#" 
              className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              <Github className="h-4 w-4 mr-2" />
              OPEN SOURCE
            </a>
          </nav>

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
              <a 
                href="#" 
                className="flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                BLOG
              </a>
              <a 
                href="#" 
                className="flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900"
              >
                <Github className="h-4 w-4 mr-2" />
                OPEN SOURCE
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
