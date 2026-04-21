import React from 'react';
import { Github, Twitter, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Getting_Started: [
      { name: 'Installation', href: '#installation' },
      { name: 'Editor Setup', href: '#editor-setup' },
      { name: 'Using with Preprocessors', href: '#preprocessors' },
      { name: 'Optimizing for Production', href: '#optimization' },
    ],
    Core_Concepts: [
      { name: 'Utility-First', href: '#utility-first' },
      { name: 'Responsive Design', href: '#responsive' },
      { name: 'Hover, Focus, & Other States', href: '#states' },
      { name: 'Dark Mode', href: '#dark-mode' },
    ],
    Customization: [
      { name: 'Configuration', href: '#configuration' },
      { name: 'Theme', href: '#theme' },
      { name: 'Screens', href: '#screens' },
      { name: 'Colors', href: '#colors' },
    ],
    Community: [
      { name: 'GitHub Discussions', href: '#discussions' },
      { name: 'Discord Server', href: '#discord' },
      { name: 'Stack Overflow', href: '#stackoverflow' },
      { name: 'YouTube', href: '#youtube' },
    ],
  };

  return (
    <footer className="bg-accent-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="h-8 w-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">Tailwind CSS</span>
            </div>
            <p className="text-accent-400 leading-relaxed mb-6 max-w-md">
              A utility-first CSS framework for rapidly building custom user interfaces. 
              Created with love by the team at Tailwind Labs.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-accent-400 hover:text-white p-2 rounded-lg hover:bg-accent-800 transition-colors duration-200"
                title="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-accent-400 hover:text-white p-2 rounded-lg hover:bg-accent-800 transition-colors duration-200"
                title="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-accent-400 hover:text-white p-2 rounded-lg hover:bg-accent-800 transition-colors duration-200"
                title="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">
                {category.replace('_', ' ')}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-accent-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-accent-800 pt-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-xl text-white mb-4">
              Stay up to date
            </h3>
            <p className="text-accent-400 mb-6">
              Get notified when we ship new features, examples, and guides.
            </p>
            <div className="flex rounded-lg bg-accent-800 p-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-white placeholder-accent-500"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center text-accent-400 text-sm mb-4 md:mb-0">
            <span>© 2024 Tailwind Labs Inc. All rights reserved.</span>
          </div>
          
          <div className="flex items-center text-accent-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-2 text-red-500 fill-current" />
            <span>by the Tailwind team</span>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <div className="bg-accent-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-accent-400 hover:text-white font-medium text-sm transition-colors duration-200"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
