import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import { heroCodeExample } from '../data/mockData';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-accent-50 to-white py-20 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-secondary-100 to-primary-100 opacity-50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-8">
            <Star className="h-4 w-4 mr-2 fill-current" />
            The most popular CSS framework
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-accent-900 mb-8 leading-tight">
            Rapidly build{' '}
            <span className="gradient-text">modern websites</span>
            <br />
            without ever leaving your HTML.
          </h1>

          {/* Description */}
          <p className="text-xl text-accent-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            A utility-first CSS framework packed with classes like <code className="bg-accent-100 text-accent-800 px-2 py-1 rounded font-mono text-lg">flex</code>, <code className="bg-accent-100 text-accent-800 px-2 py-1 rounded font-mono text-lg">pt-4</code>, <code className="bg-accent-100 text-accent-800 px-2 py-1 rounded font-mono text-lg">text-center</code> and <code className="bg-accent-100 text-accent-800 px-2 py-1 rounded font-mono text-lg">rotate-90</code> that can be composed to build any design, directly in your markup.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="btn-primary text-lg px-8 py-4">
              Get started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button className="btn-secondary text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Watch video
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-900 mb-1">75.7k</div>
              <div className="text-accent-600 text-sm">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-900 mb-1">3.2M</div>
              <div className="text-accent-600 text-sm">Weekly Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-900 mb-1">500+</div>
              <div className="text-accent-600 text-sm">Utility Classes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-900 mb-1">1M+</div>
              <div className="text-accent-600 text-sm">Developers</div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-1 shadow-2xl">
            <div className="bg-accent-900 rounded-xl overflow-hidden">
              {/* Code editor header */}
              <div className="flex items-center justify-between px-6 py-4 bg-accent-800 border-b border-accent-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-accent-400 text-sm font-mono">index.html</div>
                <div></div>
              </div>

              {/* Code content */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-accent-100 font-mono text-sm leading-relaxed">
                  <code dangerouslySetInnerHTML={{
                    __html: heroCodeExample
                      .replace(/class="/g, '<span class="text-green-400">class="</span>')
                      .replace(/"/g, '<span class="text-green-400">"</span>')
                      .replace(/</g, '<span class="text-blue-400">&lt;</span>')
                      .replace(/>/g, '<span class="text-blue-400">&gt;</span>')
                      .replace(/(div|h2|p|a)/g, '<span class="text-purple-400">$1</span>')
                      .replace(/(bg-white|max-w-7xl|mx-auto|text-center|font-bold|text-gray-900)/g, '<span class="text-yellow-300">$1</span>')
                  }}></code>
                </pre>
              </div>
            </div>
          </div>

          {/* Code explanation */}
          <div className="mt-8 text-center">
            <p className="text-accent-600">
              With Tailwind, you style elements by applying pre-existing classes directly in your HTML.
            </p>
          </div>
        </div>

        {/* Trusted by section */}
        <div className="mt-20 text-center">
          <p className="text-accent-500 text-sm font-medium mb-8 uppercase tracking-wider">
            Trusted by teams at
          </p>
          <div className="flex items-center justify-center space-x-8 md:space-x-12 opacity-60">
            {/* Placeholder company logos */}
            <div className="text-2xl font-bold text-accent-400">Netflix</div>
            <div className="text-2xl font-bold text-accent-400">Shopify</div>
            <div className="text-2xl font-bold text-accent-400">GitHub</div>
            <div className="text-2xl font-bold text-accent-400">Discord</div>
            <div className="text-2xl font-bold text-accent-400">Laravel</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
