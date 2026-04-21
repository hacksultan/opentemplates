import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Reach global,{' '}
            <span className="gradient-text">speak local</span>
          </h1>
          
          {/* Hero Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The complete localisation management platform used by 8,000+ companies to 
            translate their software and reach customers worldwide
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Start free trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200">
              Book a demo
            </button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 mb-16">
            <div className="flex items-center">
              <span className="mr-2">No credit card required</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>4.8/5 on G2</span>
            </div>
            <div>
              <span>SOC 2 Type II Certified</span>
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">8,000+</div>
            <div className="text-gray-600 text-sm md:text-base">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">450M+</div>
            <div className="text-gray-600 text-sm md:text-base">Translations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">180+</div>
            <div className="text-gray-600 text-sm md:text-base">Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-gray-600 text-sm md:text-base">Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
