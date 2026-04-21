import React from 'react';
import { Zap, FileText, Clock, Users, TrendingUp, Shield, Rocket } from 'lucide-react';
import { performanceStats } from '../data/mockData';

const PerformanceSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-900 mb-6">
            Built for{' '}
            <span className="gradient-text">performance</span>
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
            Tailwind CSS is designed to be fast, lightweight, and scalable. 
            Here's how it delivers exceptional performance for your projects.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {performanceStats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-4 group-hover:shadow-lg transition-all duration-300 border border-accent-100 hover:border-accent-200">
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-accent-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-accent-600 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Features */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-100 text-green-600 rounded-lg shrink-0">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-accent-900 mb-3">Lightning Fast Compilation</h3>
                <p className="text-accent-600 leading-relaxed">
                  Tailwind's JIT compiler generates only the CSS you actually use, 
                  resulting in incredibly fast build times and tiny file sizes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-accent-900 mb-3">Automatic Purging</h3>
                <p className="text-accent-600 leading-relaxed">
                  Unused CSS is automatically removed in production, keeping your 
                  stylesheets lean and your pages loading fast.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-accent-900 mb-3">Instant Builds</h3>
                <p className="text-accent-600 leading-relaxed">
                  Hot reloading and incremental builds mean you see your changes 
                  instantly, keeping you in the flow state.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-lg shrink-0">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-accent-900 mb-3">Production Ready</h3>
                <p className="text-accent-600 leading-relaxed">
                  Built-in optimization and minification ensure your CSS is 
                  production-ready out of the box.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Performance Visualization */}
          <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="font-bold text-2xl text-accent-900 mb-2">Bundle Size Comparison</h3>
              <p className="text-accent-600">Typical CSS bundle sizes across different approaches</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="font-medium text-accent-900">Traditional CSS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-red-200 rounded-full h-6 flex items-center px-4 min-w-[120px]">
                    <div className="w-full bg-red-500 h-2 rounded-full"></div>
                  </div>
                  <span className="font-bold text-accent-900 w-12 text-right">250KB</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="font-medium text-accent-900">Bootstrap</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-200 rounded-full h-6 flex items-center px-4 min-w-[120px]">
                    <div className="w-3/4 bg-yellow-500 h-2 rounded-full"></div>
                  </div>
                  <span className="font-bold text-accent-900 w-12 text-right">180KB</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="font-medium text-accent-900">Tailwind CSS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-green-200 rounded-full h-6 flex items-center px-4 min-w-[120px]">
                    <div className="w-1/6 bg-green-500 h-2 rounded-full"></div>
                  </div>
                  <span className="font-bold text-primary-600 w-12 text-right">8KB</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border border-accent-200">
              <div className="flex items-center justify-center text-accent-600 text-sm">
                <Rocket className="h-4 w-4 mr-2" />
                96% smaller than traditional approaches
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Real-world performance metrics</h3>
            <p className="text-primary-100 max-w-2xl mx-auto">
              See how Tailwind CSS performs in production environments with actual usage data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-primary-100" />
              </div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-primary-100 text-sm">Faster build times</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-primary-100" />
              </div>
              <div className="text-3xl font-bold mb-2">90%</div>
              <div className="text-primary-100 text-sm">Smaller CSS files</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-primary-100" />
              </div>
              <div className="text-3xl font-bold mb-2">50%</div>
              <div className="text-primary-100 text-sm">Faster development</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary-100" />
              </div>
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-primary-100 text-sm">Happy developers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
