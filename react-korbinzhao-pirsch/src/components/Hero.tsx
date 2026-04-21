import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 pt-16 pb-20 sm:pt-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            See Beyond Clicks
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed">
            Privacy-friendly analytics with no cookie banners or complex setups. 
            Get insights that matter without compromising your visitors' privacy.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105">
              Popular First
            </button>
            <button className="text-gray-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg border border-gray-700 hover:border-gray-600 transition-all duration-200">
              View Demo
            </button>
          </div>
          <div className="mt-8 flex justify-center items-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No cookies
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              GDPR compliant
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Open source
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
