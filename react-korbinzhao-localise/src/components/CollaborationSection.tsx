import React from 'react';
import { UserCheck, Clock, Zap } from 'lucide-react';

const CollaborationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Translate 10x faster with{' '}
              <span className="gradient-text">AI and no loss in quality</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Leverage the power of AI translation combined with human expertise 
              to deliver high-quality translations at unprecedented speed.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    AI-powered translation
                  </h3>
                  <p className="text-gray-600">
                    Get instant translations with our advanced AI, then refine with human reviewers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Quality assurance
                  </h3>
                  <p className="text-gray-600">
                    Built-in quality checks and review workflows ensure accuracy and consistency.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Real-time collaboration
                  </h3>
                  <p className="text-gray-600">
                    Work together with your team and translators in real-time with live updates.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Try AI translation
              </button>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
              {/* Mock collaboration interface */}
              <div className="bg-white rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">Translation Progress</h4>
                  <span className="text-sm text-primary-600 font-medium">92% complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">English → Spanish</span>
                    <span className="text-green-600 font-medium">Complete</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">English → French</span>
                    <span className="text-yellow-600 font-medium">In Review</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">English → German</span>
                    <span className="text-blue-600 font-medium">In Progress</span>
                  </div>
                </div>
              </div>

              {/* Team avatars */}
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-medium text-white">JD</span>
                  </div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-medium text-white">SM</span>
                  </div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-medium text-white">AL</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-medium text-white">+3</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  6 team members collaborating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
