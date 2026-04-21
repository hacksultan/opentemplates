import React from 'react';
import { Code, Zap, Shield } from 'lucide-react';

const SetupSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Set Up in Minutes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No complex setup or configuration needed. Add one line of code and start getting insights immediately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Steps */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Create Your Account</h3>
                <p className="text-gray-400">
                  Sign up in seconds. No credit card required for the free tier.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Add the Script</h3>
                <p className="text-gray-400">
                  Copy and paste one line of code into your website's HTML.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">Start Analyzing</h3>
                <p className="text-gray-400">
                  Watch your analytics come to life with real-time data and insights.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Code example */}
          <div className="bg-gray-900 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm">index.html</span>
            </div>
            <pre className="text-green-400 text-sm overflow-x-auto">
              <code>{`<script 
  defer 
  src="https://api.pirsch.io/pirsch.js"
  id="pirschjs"
  data-code="your-code-here">
</script>`}</code>
            </pre>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Simple Integration</h3>
            <p className="text-gray-400">
              Works with any website, framework, or CMS. No complex setup required.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Lightning Fast</h3>
            <p className="text-gray-400">
              Minimal impact on your site's performance. Data updates in real-time.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Privacy First</h3>
            <p className="text-gray-400">
              No cookies, no tracking, no personal data collection. GDPR compliant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupSection;
