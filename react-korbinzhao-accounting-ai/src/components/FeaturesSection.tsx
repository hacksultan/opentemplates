import React, { useState } from 'react';
import { Brain, CheckCircle, BarChart3, Calculator, FileText, CreditCard, ArrowRight, Zap } from 'lucide-react';
import { features } from '../data/mockData';

const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  const getIcon = (iconName: string) => {
    const icons = {
      Brain, CheckCircle, BarChart3, Calculator, FileText, CreditCard
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Brain;
    return <IconComponent className="h-8 w-8" />;
  };

  const activeFeatureData = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-900 mb-6">
            Everything you need to
            <br />
            <span className="gradient-text">streamline your accounting</span>
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform handles the heavy lifting so you can focus on what matters most - 
            growing your business and serving your clients.
          </p>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border-2 group ${
                  activeFeature === feature.id
                    ? 'border-primary-200 bg-gradient-to-r from-primary-50 to-secondary-50 shadow-lg'
                    : 'border-transparent hover:border-accent-200 hover:bg-accent-50'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    activeFeature === feature.id
                      ? `bg-gradient-to-r ${feature.color} text-white shadow-lg`
                      : 'bg-accent-100 text-accent-600 group-hover:bg-primary-100 group-hover:text-primary-600'
                  } transition-all duration-300`}>
                    {getIcon(feature.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-xl mb-2 ${
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
                  <ArrowRight className={`h-5 w-5 transition-all duration-300 ${
                    activeFeature === feature.id 
                      ? 'text-primary-600 translate-x-1' 
                      : 'text-accent-400 group-hover:text-primary-500 group-hover:translate-x-1'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Feature Preview */}
          <div className="relative">
            <div className="dashboard-card">
              {/* Feature Demo Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg text-accent-900">
                  {activeFeatureData.title}
                </h3>
                <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${activeFeatureData.color} text-white`}>
                  Live Demo
                </div>
              </div>

              {/* Dynamic Content Based on Active Feature */}
              {activeFeature === 'ai-automation' && (
                <div className="space-y-4">
                  <div className="bg-accent-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-accent-600">Transaction Processing</span>
                      <span className="text-sm font-medium text-primary-600">98% Accuracy</span>
                    </div>
                    <div className="w-full bg-accent-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full w-[98%] transition-all duration-1000"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between py-2 border-b border-accent-100">
                      <span className="text-sm">Office Supplies - Staples</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded">Office Expenses</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-accent-100">
                      <span className="text-sm">Client Payment - Tech Corp</span>
                      <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">Revenue</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === 'smart-reconciliation' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="text-sm font-medium text-green-800 mb-1">Matched</div>
                      <div className="text-2xl font-bold text-green-600">847</div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <div className="text-sm font-medium text-yellow-800 mb-1">Flagged</div>
                      <div className="text-2xl font-bold text-yellow-600">3</div>
                    </div>
                  </div>
                  <div className="bg-accent-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-accent-700 mb-2">Recent Matches</div>
                    <div className="text-xs text-accent-600">Auto-matched 15 transactions in the last hour</div>
                  </div>
                </div>
              )}

              {activeFeature === 'real-time-reporting' && (
                <div className="space-y-4">
                  <div className="flex items-end space-x-1 h-32 bg-accent-50 rounded-lg p-4">
                    {[65, 80, 45, 90, 70, 95, 85].map((height, i) => (
                      <div
                        key={i}
                        className={`bg-gradient-to-t ${activeFeatureData.color} rounded-t flex-1 transition-all duration-1000`}
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-lg font-bold text-accent-900">$127K</div>
                      <div className="text-xs text-accent-600">Revenue</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent-900">$89K</div>
                      <div className="text-xs text-accent-600">Expenses</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary-600">$38K</div>
                      <div className="text-xs text-accent-600">Profit</div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === 'tax-optimization' && (
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-800">Potential Savings</span>
                      <span className="text-xl font-bold text-green-600">$12,450</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Business Meals</span>
                      <span className="text-green-600">+$3,200</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Equipment Depreciation</span>
                      <span className="text-green-600">+$4,800</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Home Office</span>
                      <span className="text-green-600">+$2,100</span>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === 'invoice-management' && (
                <div className="space-y-4">
                  <div className="bg-accent-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Invoice #INV-2024-0095</span>
                      <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded">Paid</span>
                    </div>
                    <div className="text-lg font-bold">$5,250.00</div>
                    <div className="text-sm text-accent-600">Due: Sep 15, 2024</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">12</div>
                      <div className="text-xs text-accent-600">Paid</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-600">3</div>
                      <div className="text-xs text-accent-600">Pending</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-600">1</div>
                      <div className="text-xs text-accent-600">Overdue</div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === 'expense-tracking' && (
                <div className="space-y-4">
                  <div className="bg-primary-50 rounded-lg p-4 border-2 border-dashed border-primary-200">
                    <div className="text-center">
                      <div className="text-sm text-primary-600 mb-2">📱 Receipt Captured</div>
                      <div className="font-medium">Starbucks Coffee</div>
                      <div className="text-lg font-bold text-primary-600">$12.45</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-center">
                      <div className="text-sm font-bold">Travel</div>
                      <div className="text-xs text-accent-600">$2,840</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold">Meals</div>
                      <div className="text-xs text-accent-600">$1,420</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to experience the future of accounting?
            </h3>
            <p className="text-primary-100 mb-6 text-lg">
              Join thousands of professionals who have already transformed their workflow with AI.
            </p>
            <button className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
