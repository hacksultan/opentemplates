import React from 'react';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  MessageCircle,
  Rss,
  Mail,
  Heart
} from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <MessageCircle className="h-5 w-5" />, href: '#', label: 'Discord' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Github className="h-5 w-5" />, href: '#', label: 'GitHub' },
    { icon: <Rss className="h-5 w-5" />, href: '#', label: 'RSS' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">‹div›</span>
              </div>
              <span className="text-xl font-bold">
                <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                  RIOTS
                </span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              We craft revolutionary Figma plugins trusted by millions of designers worldwide. 
              Transform your design workflow with our innovative tools.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-white">CONNECT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  BlueSky
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">CONTACT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:hello@divriots.com" 
                  className="text-gray-400 hover:text-white transition-colors flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  hello@divriots.com
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Affiliate program
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>by ‹div›RIOTS</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <span>Made with</span>
                <a href="#" className="ml-1 text-primary-400 hover:text-primary-300">
                  figma.to.website
                </a>
              </div>
              <div className="flex items-center">
                <span>Optimized with</span>
                <a href="#" className="ml-1 text-primary-400 hover:text-primary-300">
                  jampack
                </a>
              </div>
              <div className="flex items-center">
                <span>🌱 Stripe Climate Program</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
