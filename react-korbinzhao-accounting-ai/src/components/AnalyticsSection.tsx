import React, { useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, PieChart, Filter, Download, Eye } from 'lucide-react';
import { financialMetrics, monthlyRevenueData, expenseBreakdown, recentTransactions } from '../data/mockData';

const AnalyticsSection: React.FC = () => {
  const [activeView, setActiveView] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('6months');

  return (
    <section className="py-24 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-primary-200 text-primary-800 rounded-full text-sm font-medium mb-6 shadow-sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            Real-time Analytics
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-900 mb-6">
            Insights that drive
            <br />
            <span className="gradient-text">smarter decisions</span>
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
            Get a complete picture of your financial health with AI-powered analytics 
            and predictive insights that help you stay ahead.
          </p>
        </div>

        {/* Dashboard Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white rounded-xl p-4 shadow-sm border border-accent-200">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <button
              onClick={() => setActiveView('overview')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeView === 'overview'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'text-accent-600 hover:bg-accent-100'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveView('revenue')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeView === 'revenue'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'text-accent-600 hover:bg-accent-100'
              }`}
            >
              Revenue
            </button>
            <button
              onClick={() => setActiveView('expenses')}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeView === 'expenses'
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'text-accent-600 hover:bg-accent-100'
              }`}
            >
              Expenses
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-accent-200 rounded-lg text-accent-700 bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="1month">Last Month</option>
              <option value="3months">Last 3 Months</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
            </select>
            <button className="p-2 text-accent-600 hover:bg-accent-100 rounded-lg transition-colors">
              <Filter className="h-5 w-5" />
            </button>
            <button className="p-2 text-accent-600 hover:bg-accent-100 rounded-lg transition-colors">
              <Download className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {financialMetrics.map((metric, index) => (
            <div key={index} className="dashboard-card hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  metric.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {metric.trend === 'up' ? <TrendingUp className="h-6 w-6" /> : <TrendingDown className="h-6 w-6" />}
                </div>
                <div className={`text-sm font-medium flex items-center ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change}
                  {metric.trend === 'up' ? <TrendingUp className="h-4 w-4 ml-1" /> : <TrendingDown className="h-4 w-4 ml-1" />}
                </div>
              </div>
              <div className="text-3xl font-bold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">
                {metric.value}
              </div>
              <div className="text-accent-600 text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Analytics Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Revenue Chart */}
          <div className="lg:col-span-2 dashboard-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-accent-900">Revenue vs Expenses</h3>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary-500 rounded mr-2"></div>
                  <span className="text-accent-600">Revenue</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-secondary-500 rounded mr-2"></div>
                  <span className="text-accent-600">Expenses</span>
                </div>
              </div>
            </div>
            
            <div className="h-80">
              {/* Chart Simulation */}
              <div className="flex items-end space-x-4 h-full">
                {monthlyRevenueData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                    <div className="flex flex-col items-center space-y-1 w-full">
                      {/* Revenue Bar */}
                      <div
                        className="bg-gradient-to-t from-primary-400 to-primary-500 rounded-t w-full transition-all duration-1000 hover:from-primary-500 hover:to-primary-600"
                        style={{ height: `${(data.revenue / 130000) * 200}px` }}
                        title={`Revenue: $${data.revenue.toLocaleString()}`}
                      ></div>
                      {/* Expenses Bar */}
                      <div
                        className="bg-gradient-to-t from-secondary-400 to-secondary-500 rounded-t w-full transition-all duration-1000 hover:from-secondary-500 hover:to-secondary-600"
                        style={{ height: `${(data.expenses / 130000) * 200}px` }}
                        title={`Expenses: $${data.expenses.toLocaleString()}`}
                      ></div>
                    </div>
                    <div className="text-xs text-accent-600 font-medium">{data.month}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="dashboard-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-accent-900">Expense Breakdown</h3>
              <PieChart className="h-5 w-5 text-accent-500" />
            </div>

            <div className="space-y-4">
              {expenseBreakdown.map((expense, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: `hsl(${index * 72}, 70%, 50%)` }}
                    ></div>
                    <span className="text-accent-700 font-medium">{expense.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-accent-900 font-semibold">${expense.amount.toLocaleString()}</div>
                    <div className="text-xs text-accent-500">{expense.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-accent-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-accent-900">Total</span>
                <span className="font-bold text-lg text-accent-900">
                  ${expenseBreakdown.reduce((sum, exp) => sum + exp.amount, 0).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mt-8 dashboard-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-accent-900">Recent Transactions</h3>
            <div className="flex items-center space-x-2">
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">View All</button>
              <Eye className="h-4 w-4 text-accent-500" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-accent-200">
                  <th className="text-left py-3 px-4 font-medium text-accent-600">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-accent-600">Description</th>
                  <th className="text-left py-3 px-4 font-medium text-accent-600">Category</th>
                  <th className="text-right py-3 px-4 font-medium text-accent-600">Amount</th>
                  <th className="text-center py-3 px-4 font-medium text-accent-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-accent-100 hover:bg-accent-50 transition-colors">
                    <td className="py-4 px-4 text-sm text-accent-700">{transaction.date}</td>
                    <td className="py-4 px-4 text-sm text-accent-900 font-medium">{transaction.description}</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {transaction.category}
                      </span>
                    </td>
                    <td className={`py-4 px-4 text-sm text-right font-semibold ${
                      transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      ${Math.abs(transaction.amount).toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        transaction.status === 'completed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Insights Box */}
        <div className="mt-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-white">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <BarChart3 className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-primary-100 mb-4">
                Based on your financial patterns, here are some recommendations:
              </p>
              <ul className="space-y-2 text-sm text-primary-100">
                <li>• Your marketing ROI has increased 24% this quarter - consider scaling successful campaigns</li>
                <li>• Office expenses are 15% above industry average - review vendor contracts</li>
                <li>• Cash flow is strong - good time to invest in growth opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
