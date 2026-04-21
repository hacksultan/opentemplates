import React from 'react';
import { Code, Webhook, Database, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const APISection: React.FC = () => {
  const integrations = [
    { name: 'GitHub', logo: '🐙' },
    { name: 'GitLab', logo: '🦊' },
    { name: 'Figma', logo: '🎨' },
    { name: 'Slack', logo: '💬' },
    { name: 'Jira', logo: '📋' },
    { name: 'Contentful', logo: '📝' },
  ];

  const features = [
    'RESTful API with comprehensive documentation',
    'Real-time webhooks for instant updates',
    'SDKs for popular programming languages',
    '99.9% uptime SLA with global CDN',
    'Rate limiting and authentication',
    'Comprehensive error handling',
  ];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Localise at scale with an{' '}
            <span className="text-primary-400">industry-leading API</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Integrate localisation into your development workflow with our powerful API. 
            Automate translations, sync content, and scale globally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left side - API features */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <Code className="h-8 w-8 text-primary-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Developer-first</h3>
                <p className="text-gray-300 text-sm">
                  Built by developers, for developers. Clean, intuitive API design.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <Webhook className="h-8 w-8 text-primary-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Real-time sync</h3>
                <p className="text-gray-300 text-sm">
                  Webhooks and real-time updates keep everything in sync.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <Database className="h-8 w-8 text-primary-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Scalable</h3>
                <p className="text-gray-300 text-sm">
                  Handle millions of translations with enterprise-grade infrastructure.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <Zap className="h-8 w-8 text-primary-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Lightning fast</h3>
                <p className="text-gray-300 text-sm">
                  Sub-100ms response times with global edge caching.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 mr-4">
                View API docs
              </button>
              <button className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Try it now
              </button>
            </div>
          </div>

          {/* Right side - Code example */}
          <div>
            <div className="bg-gray-800 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <div className="flex items-center mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-gray-400">api-example.js</span>
              </div>
              <div className="text-gray-300">
                <div className="text-blue-400">// Upload content for translation</div>
                <div className="text-gray-100">
                  <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> localise.
                  <span className="text-yellow-400">upload</span>({'{'}
                </div>
                <div className="ml-4">
                  <span className="text-green-400">"project_id"</span>: <span className="text-yellow-300">"my-app"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">"content"</span>: <span className="text-yellow-300">"Hello, World!"</span>,
                </div>
                <div className="ml-4">
                  <span className="text-green-400">"target_languages"</span>: [<span className="text-yellow-300">"es"</span>, <span className="text-yellow-300">"fr"</span>, <span className="text-yellow-300">"de"</span>]
                </div>
                <div>{'}'});</div>
                <br />
                <div className="text-blue-400">// Get translation status</div>
                <div className="text-gray-100">
                  <span className="text-purple-400">const</span> status = <span className="text-purple-400">await</span> localise.
                  <span className="text-yellow-400">getStatus</span>(response.id);
                </div>
                <br />
                <div className="text-blue-400">// Download completed translations</div>
                <div className="text-gray-100">
                  <span className="text-purple-400">const</span> translations = <span className="text-purple-400">await</span> localise.
                  <span className="text-yellow-400">download</span>(response.id);
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            Integrates with your favorite tools
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {integrations.map((integration, index) => (
              <div 
                key={index} 
                className="bg-gray-800 hover:bg-gray-700 rounded-lg p-4 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{integration.logo}</span>
                  <span className="font-medium text-gray-300">{integration.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <a href="#" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center">
              View all integrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APISection;
