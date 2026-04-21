import React, { useState } from 'react';
import { ChevronRight, Copy, Check, Download, BookOpen, Code2 } from 'lucide-react';
import { gettingStartedSteps } from '../data/mockData';

const GettingStartedSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [copiedCode, setCopiedCode] = useState<number | null>(null);

  const copyToClipboard = (code: string, stepIndex: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(stepIndex);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section className="py-24 bg-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-900 mb-6">
            Get started in{' '}
            <span className="gradient-text">minutes</span>
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
            Install Tailwind CSS and start building amazing user interfaces in just a few simple steps.
          </p>
        </div>

        {/* Installation Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Step Navigation */}
          <div className="space-y-4">
            {gettingStartedSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border-2 ${
                  activeStep === index
                    ? 'border-primary-200 bg-white shadow-lg'
                    : 'border-transparent bg-white hover:border-accent-200 hover:shadow-md'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                    activeStep === index
                      ? 'bg-primary-500 text-white'
                      : 'bg-accent-100 text-accent-600'
                  }`}>
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-2 ${
                      activeStep === index ? 'text-primary-900' : 'text-accent-900'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      activeStep === index ? 'text-primary-700' : 'text-accent-600'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-all duration-300 ${
                    activeStep === index 
                      ? 'text-primary-600 rotate-90' 
                      : 'text-accent-400'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="sticky top-8">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-1 shadow-2xl">
              <div className="bg-accent-900 rounded-xl overflow-hidden">
                {/* Code editor header */}
                <div className="flex items-center justify-between px-6 py-4 bg-accent-800 border-b border-accent-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-accent-400 text-sm font-mono">
                    Step {gettingStartedSteps[activeStep].step}
                  </div>
                  <button
                    onClick={() => copyToClipboard(gettingStartedSteps[activeStep].code, activeStep)}
                    className="flex items-center px-3 py-1 bg-accent-700 hover:bg-accent-600 text-accent-200 rounded text-sm transition-colors duration-200"
                  >
                    {copiedCode === activeStep ? (
                      <>
                        <Check className="h-4 w-4 mr-1" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </>
                    )}
                  </button>
                </div>

                {/* Code content */}
                <div className="p-6 min-h-[200px] overflow-x-auto">
                  <pre className="text-accent-100 font-mono text-sm leading-relaxed">
                    <code>{gettingStartedSteps[activeStep].code}</code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Step indicator */}
            <div className="mt-6 flex justify-center space-x-2">
              {gettingStartedSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-primary-500 scale-125'
                      : 'bg-accent-300 hover:bg-accent-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Start Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 border border-accent-200 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl text-accent-900 mb-4">Quick Install</h3>
            <p className="text-accent-600 mb-6">
              Get up and running with Tailwind CSS in under a minute using our CDN link.
            </p>
            <button className="btn-primary w-full">
              Try CDN Version
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 border border-accent-200 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code2 className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl text-accent-900 mb-4">Framework Guides</h3>
            <p className="text-accent-600 mb-6">
              Step-by-step guides for popular frameworks like React, Vue, Angular, and more.
            </p>
            <button className="btn-secondary w-full">
              Browse Guides
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 border border-accent-200 shadow-sm hover:shadow-lg transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl text-accent-900 mb-4">Documentation</h3>
            <p className="text-accent-600 mb-6">
              Comprehensive documentation with examples, best practices, and advanced topics.
            </p>
            <button className="btn-secondary w-full">
              Read Docs
            </button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-white rounded-2xl p-12 border border-accent-200 shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-accent-900 mb-6">
            Ready to transform your workflow?
          </h3>
          <p className="text-xl text-accent-600 mb-8 max-w-2xl mx-auto">
            Join millions of developers who are building faster, more maintainable user interfaces with Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-10 py-4">
              Get Started Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="btn-secondary text-lg px-10 py-4">
              <BookOpen className="mr-2 h-5 w-5" />
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection;
