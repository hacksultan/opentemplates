import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary-500 to-purple-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <Mail className="h-12 w-12 text-primary-500 mx-auto mb-6" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Subscribe to our monthly newsletter
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest Figma plugins, design tips, and exclusive updates from ‹div›RIOTS.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
