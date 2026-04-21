import React, { useState } from 'react';
import { Check, Crown, Zap, ArrowRight, HelpCircle } from 'lucide-react';
import { pricingPlans } from '../data/mockData';

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const getDiscountedPrice = (price: number) => {
    return isAnnual ? Math.floor(price * 0.83) : price; // 17% off annually
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <Crown className="h-4 w-4 mr-2" />
            Simple, transparent pricing
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-900 mb-6">
            Choose the plan that
            <br />
            <span className="gradient-text">fits your business</span>
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Start with our free trial, then choose a plan that scales with your needs. 
            No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white border border-accent-200 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isAnnual
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-accent-600 hover:text-accent-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                isAnnual
                  ? 'bg-primary-500 text-white shadow-sm'
                  : 'text-accent-600 hover:text-accent-900'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-1 bg-gradient-to-r from-secondary-500 to-primary-500 text-white text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? 'border-primary-300 shadow-xl scale-105 ring-4 ring-primary-100'
                  : 'border-accent-200 shadow-lg hover:shadow-xl hover:border-primary-200'
              } ${
                hoveredPlan === plan.id ? 'transform hover:scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-accent-900 mb-2">{plan.name}</h3>
                  <p className="text-accent-600 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl md:text-5xl font-bold text-accent-900">
                      ${getDiscountedPrice(plan.price)}
                    </span>
                    <span className="text-accent-600 ml-2">/{plan.period}</span>
                  </div>
                  
                  {isAnnual && (
                    <div className="text-sm text-accent-500 mt-2">
                      <span className="line-through">${plan.price}/month</span>
                      <span className="text-green-600 ml-2 font-medium">Save 17%</span>
                    </div>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-primary-500 mt-0.5" />
                      </div>
                      <span className="text-accent-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'bg-accent-100 hover:bg-primary-100 text-accent-900 hover:text-primary-600 border-2 border-transparent hover:border-primary-200'
                  }`}
                >
                  {plan.id === 'starter' ? 'Start Free Trial' : `Choose ${plan.name}`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-accent-900 mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-accent-200">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-accent-900 mb-2">
                      Can I change plans anytime?
                    </h4>
                    <p className="text-accent-600 text-sm">
                      Yes, you can upgrade or downgrade your plan at any time. 
                      Changes take effect immediately with prorated billing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-accent-200">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-accent-900 mb-2">
                      Is there a free trial?
                    </h4>
                    <p className="text-accent-600 text-sm">
                      Yes! We offer a 14-day free trial with full access to all features. 
                      No credit card required.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-accent-200">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-accent-900 mb-2">
                      What about data security?
                    </h4>
                    <p className="text-accent-600 text-sm">
                      Your data is encrypted and stored securely. We're SOC 2 certified 
                      and compliant with all major data protection regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-accent-200">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-accent-900 mb-2">
                      Do you offer refunds?
                    </h4>
                    <p className="text-accent-600 text-sm">
                      We offer a 30-day money-back guarantee. If you're not satisfied, 
                      we'll refund your payment no questions asked.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-accent-200">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-accent-900 mb-2">
                      Can I integrate with my existing tools?
                    </h4>
                    <p className="text-accent-600 text-sm">
                      Yes! We integrate with 100+ popular accounting, banking, 
                      and business tools including QuickBooks, Xero, and more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-accent-200">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-accent-900 mb-2">
                      What support do you provide?
                    </h4>
                    <p className="text-accent-600 text-sm">
                      We provide email support for all plans, with priority support 
                      and phone access for Professional and Enterprise customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-12 text-white max-w-4xl mx-auto">
            <Zap className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to revolutionize your accounting?
            </h3>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their financial processes with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
            <p className="text-sm text-primary-200 mt-4">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
