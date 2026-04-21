import React, { useState } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Twitter, 
  Facebook, 
  Instagram, 
  Video,
  Heart,
  ChevronDown
} from 'lucide-react';
import { navigationItems, socialLinks } from '../data/mockData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Twitter': return <Twitter className="h-4 w-4" />;
      case 'Facebook': return <Facebook className="h-4 w-4" />;
      case 'Instagram': return <Instagram className="h-4 w-4" />;
      case 'Video': return <Video className="h-4 w-4" />;
      default: return <Twitter className="h-4 w-4" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold font-heading text-gradient hover:scale-105 transition-transform duration-200 cursor-pointer">
              jinkojinkojinko
            </h1>
          </div>

          {/* Desktop Navigation - Simplified */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
              Blog
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
              Lifestyle
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
              Beauty
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
              Travel
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary-600 px-3 py-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
              About
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Social Links - Compact */}
            <div className="hidden lg:flex items-center space-x-1">
              {socialLinks.slice(0, 3).map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  title={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Become a Patron Button - Responsive */}
            <button className="hidden md:inline-flex items-center px-3 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-200 shadow-sm">
              <Heart className="h-4 w-4 mr-1" />
              <span className="hidden lg:inline">Become a Patron</span>
              <span className="lg:hidden">Support</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-100 animate-slide-up">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white outline-none transition-all duration-200"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-slide-up">
            <div className="space-y-2">
              <a href="#" className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-xl font-medium transition-colors duration-200">
                Blog
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-xl font-medium transition-colors duration-200">
                Lifestyle
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-xl font-medium transition-colors duration-200">
                Beauty
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-xl font-medium transition-colors duration-200">
                Travel
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-xl font-medium transition-colors duration-200">
                About
              </a>
              
              {/* Mobile Social Links */}
              <div className="border-t border-gray-100 pt-4 mt-4">
                <p className="text-sm text-gray-600 mb-3 px-4">Follow me</p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="flex items-center justify-center w-12 h-12 text-gray-600 hover:text-primary-600 bg-gray-50 hover:bg-primary-50 rounded-xl transition-colors duration-200"
                      title={social.name}
                    >
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Patron Button */}
              <div className="pt-4">
                <button className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all duration-200 shadow-sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Become a Patron
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
