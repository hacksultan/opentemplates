import React, { useState } from 'react';
import { Zap, Smartphone, Package, Moon, Gauge, Settings, ChevronRight } from 'lucide-react';
import { features } from '../data/mockData';

const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  const getIcon = (iconName: string) => {
    const icons = {
      Zap, Smartphone, Package, Moon, Gauge, Settings
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Zap;
    return <IconComponent className="h-6 w-6" />;
  };

  const activeFeatureData = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-900 mb-6">
            Build anything with{' '}
            <span className="gradient-text">Tailwind CSS</span>
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to build modern websites, all in one utility-first CSS framework.
          </p>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Feature Tabs */}
          <div className="space-y-2">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border-2 ${
                  activeFeature === feature.id
                    ? 'border-primary-200 bg-primary-50 shadow-lg'
                    : 'border-transparent hover:border-accent-200 hover:bg-accent-50'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-lg ${
                    activeFeature === feature.id
                      ? 'bg-primary-100 text-primary-600'
                      : 'bg-accent-100 text-accent-600'
                  }`}>
                    {getIcon(feature.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-2 ${
                      activeFeature === feature.id ? 'text-primary-900' : 'text-accent-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      activeFeature === feature.id ? 'text-primary-700' : 'text-accent-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                    activeFeature === feature.id 
                      ? 'text-primary-600 rotate-90' 
                      : 'text-accent-400'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Code Preview */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-1 shadow-2xl">
            <div className="bg-accent-900 rounded-xl overflow-hidden">
              {/* Code editor header */}
              <div className="flex items-center justify-between px-6 py-4 bg-accent-800 border-b border-accent-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-accent-400 text-sm font-mono">{activeFeatureData.title.toLowerCase().replace(/\s+/g, '-')}.html</div>
                <div></div>
              </div>

              {/* Code content */}
              <div className="p-6 min-h-[300px] overflow-x-auto">
                <pre className="text-accent-100 font-mono text-sm leading-relaxed">
                  <code className="language-html">
                    {activeFeatureData.code}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card group cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 text-primary-600 rounded-lg mr-4 group-hover:bg-primary-200 transition-colors duration-300">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="font-semibold text-xl text-accent-900 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
              </div>
              <p className="text-accent-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Ready to try Tailwind CSS?
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Get Started
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
