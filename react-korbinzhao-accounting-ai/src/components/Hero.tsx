import React from 'react';
import { ArrowRight, Play, CheckCircle, TrendingUp, Users, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-8">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Trusted by 10,000+ accounting professionals
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-900 mb-6 leading-tight">
              <span className="gradient-text">AI Meets</span>
              <br />
              Accounting
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-accent-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Revolutionize your financial processes with intelligent automation. 
              Save 80% of your time on routine tasks and focus on strategic growth.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center text-accent-700">
                <CheckCircle className="h-5 w-5 text-primary-500 mr-3" />
                <span className="font-medium">AI-Powered Automation</span>
              </div>
              <div className="flex items-center text-accent-700">
                <CheckCircle className="h-5 w-5 text-primary-500 mr-3" />
                <span className="font-medium">Real-time Insights</span>
              </div>
              <div className="flex items-center text-accent-700">
                <CheckCircle className="h-5 w-5 text-primary-500 mr-3" />
                <span className="font-medium">100% Accurate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-primary text-lg px-8 py-4 shadow-xl">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <button className="btn-secondary text-lg px-8 py-4 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-accent-600">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-primary-500" />
                <span>10,000+ users</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-primary-500" />
                <span>80% time saved</span>
              </div>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2">4.9/5 rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-accent-200 overflow-hidden transform hover:scale-105 transition-transform duration-300">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-4 text-white">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Financial Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="metric-card">
                    <div className="text-2xl font-bold text-primary-600 mb-1">$127,450</div>
                    <div className="text-sm text-accent-600">Monthly Revenue</div>
                    <div className="text-xs text-green-600 mt-1">↗ +12.5%</div>
                  </div>
                  <div className="metric-card">
                    <div className="text-2xl font-bold text-primary-600 mb-1">$38,220</div>
                    <div className="text-sm text-accent-600">Net Profit</div>
                    <div className="text-xs text-green-600 mt-1">↗ +24.1%</div>
                  </div>
                </div>

                {/* Chart Simulation */}
                <div className="bg-accent-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-accent-700 mb-3">Revenue Trend</div>
                  <div className="flex items-end space-x-1 h-20">
                    {[40, 65, 45, 80, 60, 95, 70, 85, 75, 100, 90, 110].map((height, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-primary-400 to-primary-500 rounded-t flex-1"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-accent-700 mb-3">Recent Activity</div>
                  {[
                    { desc: 'Client Payment - ABC Corp', amount: '+$8,750', type: 'income' },
                    { desc: 'Software License Renewal', amount: '-$2,450', type: 'expense' },
                    { desc: 'Marketing Campaign', amount: '-$1,500', type: 'expense' },
                  ].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-accent-100 last:border-0">
                      <div className="text-sm text-accent-700">{tx.desc}</div>
                      <div className={`text-sm font-medium ${tx.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                        {tx.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full opacity-80 animate-bounce-gentle"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-400 rounded-full opacity-80 animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
