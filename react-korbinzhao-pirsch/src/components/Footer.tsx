import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-white text-xl font-bold">Pirsch</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Privacy-friendly analytics for the modern web. No cookies, no tracking, just insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Demo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Integrations</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Status</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Pirsch Analytics. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
