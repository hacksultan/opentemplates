import React from 'react';
import { 
  Code, 
  FileText, 
  Image, 
  Layers, 
  Download, 
  Sparkles,
  Star,
  Users
} from 'lucide-react';

const PluginsSection: React.FC = () => {
  const superstarPlugins = [
    {
      name: 'html.to.design',
      description: 'Convert any website or HTML code into fully editable Figma designs.',
      users: '1.3 million users',
      icon: <Code className="h-6 w-6" />,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      name: 'figma.to.website',
      description: 'Make websites directly from Figma.',
      users: '38,400 users',
      icon: <Layers className="h-6 w-6" />,
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      name: 'story.to.design',
      description: 'Generate Figma components from Storybook or Histoire.',
      users: '15,800 users',
      icon: <FileText className="h-6 w-6" />,
      gradient: 'from-green-500 to-green-600',
    },
    {
      name: 'data.to.design',
      description: 'Connect your data to Figma to design with real content.',
      users: '20,400 users',
      icon: <Download className="h-6 w-6" />,
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      name: 'lorem.ipsum',
      description: 'Fill your designs with placeholders in a click: text, images or fake data.',
      users: '1 million users',
      icon: <FileText className="h-6 w-6" />,
      gradient: 'from-pink-500 to-pink-600',
    },
  ];

  const importPlugins = [
    { name: 'pdf.to.design', description: 'Convert any PDF document into Figma designs.' },
    { name: 'eps.to.design', description: 'Import your PostScript files (.eps, .ps) into Figma.' },
    { name: 'illustrator.to.design', description: 'Import Adobe Illustrator files (.ai) into Figma.' },
    { name: 'office.to.design', description: 'Import any office files (.pptx, .docx, .key, .page...) into Figma.' },
    { name: 'psd.to.design', description: 'Import PSD files directly into Figma as editable layers' },
    { name: 'image.to.design', description: 'Import any image format into Figma.' },
  ];

  const aiPlugins = [
    { name: 'Remove Background', description: 'Remove background from images 100% privately.' },
    { name: 'Remove Objects', description: 'Remove objects in images directly in Figma.' },
    { name: 'Upscale', description: 'Instantly improve the quality of low-resolution images.' },
    { name: 'Vectorize', description: 'Instantly convert any bitmap image into vectors.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-4">Trusted by great companies</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">20+</div>
              <div className="text-gray-600">plugins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">2.5M</div>
              <div className="text-gray-600">users</div>
            </div>
          </div>
        </div>

        {/* Superstar Plugins */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <Star className="inline h-8 w-8 text-yellow-400 mr-2" />
            Superstar plugins
            <span className="text-yellow-400 ml-2">Loved by millions</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {superstarPlugins.map((plugin, index) => (
              <div key={index} className="plugin-card bg-white rounded-xl p-6 border border-gray-200 hover:border-primary-200">
                <div className={`w-12 h-12 bg-gradient-to-r ${plugin.gradient} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {plugin.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plugin.name}</h3>
                <p className="text-gray-600 mb-4">{plugin.description}</p>
                <div className="flex items-center text-primary-600 text-sm font-medium">
                  <Users className="h-4 w-4 mr-1" />
                  {plugin.users}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Import Plugins */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Import anything into Figma
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Don't recreate, import what you have
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importPlugins.map((plugin, index) => (
              <div key={index} className="plugin-card bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center text-white mb-4">
                  <Download className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{plugin.name}</h3>
                <p className="text-gray-600 text-sm">{plugin.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-block gradient-border">
              <div className="gradient-border-inner px-8 py-4">
                <h3 className="font-semibold text-gray-900 mb-2">Import Bundle</h3>
                <p className="text-gray-600 text-sm mb-3">Unlimited access to all import plugins. 40+ file types</p>
                <div className="text-2xl font-bold gradient-text">$149/year</div>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Powered Image Editing */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <Sparkles className="inline h-8 w-8 text-purple-500 mr-2" />
            AI-powered image editing
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Stay in Figma to quickly edit your images
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiPlugins.map((plugin, index) => (
              <div key={index} className="plugin-card bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:from-purple-100 hover:to-pink-100 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-4">
                  <Image className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{plugin.name}</h3>
                <p className="text-gray-600 text-sm">{plugin.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-block gradient-border">
              <div className="gradient-border-inner px-8 py-4">
                <h3 className="font-semibold text-gray-900 mb-2">‹div›RIOTS Credits</h3>
                <p className="text-gray-600 text-sm">Get credits once and use them across all our image plugins.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerboost</span> your Figma canvas with our plugins!
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8 opacity-60">
            {['remove.objects', 'html.to.design', 'vectorize', 'story.to.design', 'remove background', 'lorem.ipsum'].map((name, index) => (
              <div key={index} className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PluginsSection;
