import React from 'react';
import { Globe, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const productLinks = [
    { name: 'Translation Management', href: '#' },
    { name: 'Team Collaboration', href: '#' },
    { name: 'API & Integrations', href: '#' },
    { name: 'Quality Assurance', href: '#' },
    { name: 'Mobile App Localization', href: '#' },
    { name: 'Website Localization', href: '#' },
  ];

  const solutionLinks = [
    { name: 'For Startups', href: '#' },
    { name: 'For Enterprise', href: '#' },
    { name: 'For Agencies', href: '#' },
    { name: 'For E-commerce', href: '#' },
    { name: 'For Gaming', href: '#' },
    { name: 'For SaaS', href: '#' },
  ];

  const resourceLinks = [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Security', href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">Localise</span>
            </div>
            <p className="text-gray-400 mb-4">
              The complete localization management platform trusted by 8,000+ companies worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold mb-2">Stay updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest localization tips, industry insights, and product updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
              />
              <button className="bg-primary-500 hover:bg-primary-600 px-6 py-2 rounded-r-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span>© 2024 Localise. All rights reserved.</span>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <Globe className="h-4 w-4 mr-2 text-gray-400" />
            <select className="bg-transparent text-gray-400 text-sm focus:outline-none">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
              <option>Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
