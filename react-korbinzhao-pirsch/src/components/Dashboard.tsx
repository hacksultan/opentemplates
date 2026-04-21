import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Dashboard Mock */}
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-6 shadow-2xl">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">pirsch.io</h3>
                  <p className="text-gray-400 text-sm">example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-gray-400 hover:text-white p-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">42,187</div>
                <div className="text-gray-400 text-sm">Visitors</div>
                <div className="text-primary-400 text-sm mt-1">+12.5%</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">68,543</div>
                <div className="text-gray-400 text-sm">Page Views</div>
                <div className="text-primary-400 text-sm mt-1">+8.3%</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">2:34</div>
                <div className="text-gray-400 text-sm">Session Duration</div>
                <div className="text-red-400 text-sm mt-1">-2.1%</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-white">23.8%</div>
                <div className="text-gray-400 text-sm">Bounce Rate</div>
                <div className="text-primary-400 text-sm mt-1">-5.2%</div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="bg-gray-700/30 rounded-lg p-6 h-64 flex items-end justify-between">
              {/* Mock Chart Bars */}
              {[65, 45, 78, 34, 89, 56, 67, 45, 78, 89, 56, 78, 45, 67, 89].map((height, index) => (
                <div
                  key={index}
                  className="bg-primary-500 rounded-t flex-1 mx-1 opacity-80 hover:opacity-100 transition-opacity"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            {/* Bottom Stats */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-3">Top Pages</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-400">12,543</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">/blog</span>
                    <span className="text-gray-400">8,234</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">/products</span>
                    <span className="text-gray-400">5,678</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-3">Referrers</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Google</span>
                    <span className="text-gray-400">45.2%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Direct</span>
                    <span className="text-gray-400">32.1%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Twitter</span>
                    <span className="text-gray-400">12.7%</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-3">Countries</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">🇺🇸 United States</span>
                    <span className="text-gray-400">38%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">🇩🇪 Germany</span>
                    <span className="text-gray-400">24%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">🇬🇧 United Kingdom</span>
                    <span className="text-gray-400">18%</span>
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

export default Dashboard;
