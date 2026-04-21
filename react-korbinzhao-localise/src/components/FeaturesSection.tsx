import React from 'react';
import { Settings, Users, FileText, Globe, Zap, Shield } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Translation management',
      description: 'Centralise all your translation projects in one platform with advanced workflow management.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Team collaboration',
      description: 'Work seamlessly with translators, reviewers, and project managers in real-time.',
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'File format support',
      description: 'Support for 60+ file formats including JSON, XML, CSV, and mobile app formats.',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global reach',
      description: 'Access to professional translators covering 180+ languages worldwide.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'AI-powered translation',
      description: 'Leverage machine translation with human review for faster, cost-effective results.',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Enterprise security',
      description: 'SOC 2 Type II certified with enterprise-grade security and compliance.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your localisation structure{' '}
            <span className="gradient-text">the way you want</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create continuous localisation workflows that scale with your business and 
            integrate seamlessly with your development process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-primary-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual representation */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Streamline your workflow
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Connect your repository or CMS</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Auto-sync content for translation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Collaborate with your team</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Publish translations automatically</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6">
                <div className="w-full h-48 bg-white rounded-lg flex items-center justify-center">
                  <div className="text-primary-500">
                    <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Globe className="h-12 w-12 text-primary-500" />
                    </div>
                    <p className="text-center text-gray-600 font-medium">
                      Workflow Visualization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
