import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'API', href: '#api' },
      { name: 'Security', href: '#security' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Partners', href: '#partners' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Help Center', href: '#help' },
      { name: 'Webinars', href: '#webinars' },
      { name: 'Blog', href: '#blog' },
      { name: 'Community', href: '#community' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' },
      { name: 'Compliance', href: '#compliance' },
    ],
  };

  return (
    <footer className="bg-accent-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="border-b border-accent-700 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay ahead with AI insights
            </h3>
            <p className="text-accent-400 mb-8 text-lg">
              Get the latest updates on AI in accounting, feature releases, and expert tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-accent-800 border border-accent-600 rounded-lg text-white placeholder-accent-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <p className="text-accent-500 text-sm mt-3">
              Join 15,000+ accounting professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">AI Meets</span>
                  <span className="text-sm font-semibold gradient-text">Accounting</span>
                </div>
              </div>
              
              <p className="text-accent-400 leading-relaxed mb-6 max-w-md">
                Revolutionizing financial processes with intelligent automation. 
                Trusted by 10,000+ accounting professionals worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-accent-400">
                  <Mail className="h-5 w-5 mr-3 text-primary-400" />
                  <span>hello@aimetsaccounting.com</span>
                </div>
                <div className="flex items-center text-accent-400">
                  <Phone className="h-5 w-5 mr-3 text-primary-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-accent-400">
                  <MapPin className="h-5 w-5 mr-3 text-primary-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-accent-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-accent-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-accent-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-accent-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-accent-400 text-sm mb-4 md:mb-0">
              © 2024 AI Meets Accounting. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-accent-400 hover:text-primary-400 p-2 rounded-lg hover:bg-accent-800 transition-all duration-200"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-accent-400 hover:text-primary-400 p-2 rounded-lg hover:bg-accent-800 transition-all duration-200"
                  title="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-accent-400 hover:text-primary-400 p-2 rounded-lg hover:bg-accent-800 transition-all duration-200"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-accent-400 hover:text-primary-400 p-2 rounded-lg hover:bg-accent-800 transition-all duration-200"
                  title="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>

              {/* Back to Top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-accent-400 hover:text-primary-400 text-sm font-medium transition-colors duration-200"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-accent-700 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-accent-500">
            <div className="flex items-center text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              SOC 2 Certified
            </div>
            <div className="flex items-center text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              GDPR Compliant
            </div>
            <div className="flex items-center text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              ISO 27001
            </div>
            <div className="flex items-center text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              256-bit SSL
            </div>
            <div className="flex items-center text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              99.9% Uptime
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
