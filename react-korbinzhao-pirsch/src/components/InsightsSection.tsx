import React from 'react';
import { TrendingUp, Users, Globe, BarChart3 } from 'lucide-react';

const InsightsSection: React.FC = () => {
  const insightData = [
    { label: 'Unique Visitors', value: '12,543', change: '+5.2%', positive: true },
    { label: 'Page Views', value: '28,765', change: '+12.8%', positive: true },
    { label: 'Bounce Rate', value: '23.4%', change: '-3.1%', positive: true },
    { label: 'Avg. Session', value: '2:45', change: '+0:23', positive: true },
    { label: 'New Visitors', value: '8,234', change: '+8.9%', positive: true },
    { label: 'Returning', value: '4,309', change: '+2.1%', positive: true },
  ];

  const topPages = [
    { page: '/', views: '12,543', percentage: 45 },
    { page: '/blog', views: '8,234', percentage: 30 },
    { page: '/products', views: '5,678', percentage: 20 },
    { page: '/about', views: '2,890', percentage: 10 },
    { page: '/contact', views: '1,456', percentage: 5 },
  ];

  const countries = [
    { country: '🇺🇸 United States', visitors: '5,234', percentage: 42 },
    { country: '🇩🇪 Germany', visitors: '3,012', percentage: 24 },
    { country: '🇬🇧 United Kingdom', visitors: '2,456', percentage: 20 },
    { country: '🇫🇷 France', visitors: '1,789', percentage: 14 },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Unlock Key Insights
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get the data that matters most to your business. Track what's important and make informed decisions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {insightData.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-gray-400 text-sm mb-2">{item.label}</div>
              <div className={`text-sm ${item.positive ? 'text-primary-400' : 'text-red-400'}`}>
                {item.change}
              </div>
            </div>
          ))}
        </div>

        {/* Main Analytics Dashboard */}
        <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white text-xl font-semibold">Traffic Overview</h3>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-white px-3 py-1 rounded text-sm">7d</button>
              <button className="bg-primary-600 text-white px-3 py-1 rounded text-sm">30d</button>
              <button className="text-gray-400 hover:text-white px-3 py-1 rounded text-sm">90d</button>
            </div>
          </div>

          {/* Chart Area */}
          <div className="bg-gray-700/30 rounded-lg p-6 h-64 flex items-end justify-between mb-8">
            {[65, 45, 78, 34, 89, 56, 67, 45, 78, 89, 56, 78, 45, 67, 89, 34, 67, 89, 45, 78, 56, 89, 67, 45, 78, 34, 56, 89, 67, 45].map((height, index) => (
              <div
                key={index}
                className="bg-primary-500 rounded-t flex-1 mx-0.5 opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>

          {/* Bottom Analytics */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Top Pages */}
            <div>
              <h4 className="text-white font-medium mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-primary-500" />
                Top Pages
              </h4>
              <div className="space-y-3">
                {topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <span className="text-gray-300 text-sm">{page.page}</span>
                      <div className="ml-4 flex-1 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-primary-500 h-2 rounded-full" 
                          style={{ width: `${page.percentage}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-gray-400 text-sm ml-4">{page.views}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Countries */}
            <div>
              <h4 className="text-white font-medium mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-primary-500" />
                Top Countries
              </h4>
              <div className="space-y-3">
                {countries.map((country, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <span className="text-gray-300 text-sm">{country.country}</span>
                      <div className="ml-4 flex-1 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-primary-500 h-2 rounded-full" 
                          style={{ width: `${country.percentage}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-gray-400 text-sm ml-4">{country.visitors}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Real-time Data</h3>
            <p className="text-gray-400">
              See your website traffic as it happens. No delays, no waiting for reports.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Visitor Insights</h3>
            <p className="text-gray-400">
              Understand your audience better with detailed visitor analytics and behavior patterns.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">Custom Events</h3>
            <p className="text-gray-400">
              Track custom events and conversions to measure what matters most to your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
