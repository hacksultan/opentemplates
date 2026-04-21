import React from 'react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      name: 'Smart transcription',
      description: 'Advanced AI models that understand context and convert speech to text with incredible accuracy.',
      icon: '🎤'
    },
    {
      name: 'Real-time processing',
      description: 'See your words appear instantly as you speak, with no delays or waiting times.',
      icon: '⚡'
    },
    {
      name: 'Multiple formats',
      description: 'Export your transcriptions in various formats including plain text, markdown, and more.',
      icon: '📝'
    },
    {
      name: 'Privacy focused',
      description: 'Your voice data is processed locally on your device for maximum privacy and security.',
      icon: '🔒'
    }
  ];

  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-yellow-600">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to transcribe perfectly
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our advanced AI technology makes voice-to-text transcription more accurate and efficient than ever before.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <span className="text-2xl">{feature.icon}</span>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* App Screenshots */}
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg bg-gray-50 p-8">
              <div className="h-48 w-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Recording Interface</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-50 p-8">
              <div className="h-48 w-full bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Live Transcription</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-50 p-8">
              <div className="h-48 w-full bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Export Options</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
