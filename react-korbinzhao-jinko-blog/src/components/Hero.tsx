import React from 'react';
import { Twitter, Facebook, Instagram, Video } from 'lucide-react';
import { socialLinks } from '../data/mockData';

const Hero: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Twitter': return <Twitter className="h-5 w-5" />;
      case 'Facebook': return <Facebook className="h-5 w-5" />;
      case 'Instagram': return <Instagram className="h-5 w-5" />;
      case 'Video': return <Video className="h-5 w-5" />;
      default: return <Twitter className="h-5 w-5" />;
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></span>
                <span className="text-sm text-gray-600">Currently writing about life & creativity</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold font-heading text-gray-900 leading-tight">
                  Hey, I'm{' '}
                  <span className="text-gradient">Jinko</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed">
                  A creative soul sharing thoughts on lifestyle, beauty, and everything 
                  in between. Welcome to my corner of the internet where words come alive.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700">Share the love:</span>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="flex items-center justify-center w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-sm border border-gray-200 text-gray-600 hover:text-primary-600 transition-all duration-200 transform hover:scale-110"
                      title={social.name}
                    >
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Featured Content Cards */}
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <blockquote className="text-center lg:text-left">
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      "Blunt pencils are really pointless"
                    </p>
                    <p className="text-sm text-gray-600">
                      — Daily dose of Jinko wisdom
                    </p>
                  </blockquote>
                </div>
                
                <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl p-6 text-white">
                  <div className="text-center lg:text-left">
                    <h3 className="text-lg font-semibold mb-2">Latest Article</h3>
                    <p className="text-primary-100 text-sm mb-3">
                      "Style begin mr heard by in music tried do"
                    </p>
                    <button className="inline-flex items-center text-sm font-medium text-white hover:text-primary-100 transition-colors">
                      Read more →
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">127</div>
                  <div className="text-sm text-gray-600">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">12.5K</div>
                  <div className="text-sm text-gray-600">Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">89</div>
                  <div className="text-sm text-gray-600">Comments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">4.8★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar/Profile Area */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              {/* Profile Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl font-bold">J</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-gray-900 mb-3">
                  Follow me
                </h3>
                <p className="text-gray-600 mb-6">
                  Follow me on my socials
                </p>
                <div className="flex justify-center space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-primary-100 rounded-xl text-gray-600 hover:text-primary-600 transition-all duration-200 transform hover:scale-110"
                    >
                      {getSocialIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Card */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Never trust atoms; they make up everything
                  </h3>
                  <p className="text-gray-300">
                    Join 12.5K+ readers getting weekly insights about creativity, life, and everything in between.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                  <button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Subscribe
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    No spam, unsubscribe anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
