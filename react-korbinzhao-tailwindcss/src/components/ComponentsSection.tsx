import React, { useState } from 'react';
import { Code, Eye, Copy, Check } from 'lucide-react';
import { componentExamples } from '../data/mockData';

const ComponentsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('preview');
  const [selectedComponent, setSelectedComponent] = useState(componentExamples[0]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const categories = [...new Set(componentExamples.map(c => c.category))];

  const copyToClipboard = (code: string, componentId: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(componentId);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section className="py-24 bg-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-900 mb-6">
            Beautiful components,{' '}
            <span className="gradient-text">crafted with care</span>
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
            Over 500+ professionally designed components that you can copy and paste into your apps. 
            All built with Tailwind CSS and completely customizable.
          </p>
        </div>

        {/* Component Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white hover:bg-primary-50 text-accent-700 hover:text-primary-600 rounded-lg border border-accent-200 hover:border-primary-200 font-medium transition-all duration-200 shadow-sm hover:shadow"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main Component Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Component List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-accent-200 shadow-sm overflow-hidden">
              <div className="p-4 bg-accent-50 border-b border-accent-200">
                <h3 className="font-semibold text-accent-900">Components</h3>
              </div>
              <div className="divide-y divide-accent-100">
                {componentExamples.map((component) => (
                  <button
                    key={component.id}
                    onClick={() => setSelectedComponent(component)}
                    className={`w-full text-left p-4 hover:bg-accent-50 transition-colors duration-200 ${
                      selectedComponent.id === component.id ? 'bg-primary-50 border-r-2 border-primary-500' : ''
                    }`}
                  >
                    <div className="font-medium text-accent-900 mb-1">{component.name}</div>
                    <div className="text-sm text-accent-600">{component.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Component Preview/Code */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-xl border border-accent-200 shadow-sm overflow-hidden">
              {/* Tab Header */}
              <div className="flex items-center justify-between p-4 bg-accent-50 border-b border-accent-200">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`flex items-center px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      activeTab === 'preview'
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-accent-600 hover:text-accent-900'
                    }`}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`flex items-center px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      activeTab === 'code'
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-accent-600 hover:text-accent-900'
                    }`}
                  >
                    <Code className="h-4 w-4 mr-2" />
                    Code
                  </button>
                </div>

                {activeTab === 'code' && (
                  <button
                    onClick={() => copyToClipboard(selectedComponent.code, selectedComponent.id)}
                    className="flex items-center px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    {copiedCode === selectedComponent.id ? (
                      <>
                        <Check className="h-4 w-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                {activeTab === 'preview' ? (
                  <div className="component-preview min-h-[400px] flex items-center justify-center">
                    <div dangerouslySetInnerHTML={{ __html: selectedComponent.code }} />
                  </div>
                ) : (
                  <div className="bg-accent-900 rounded-lg overflow-hidden">
                    <div className="p-6">
                      <pre className="text-accent-100 font-mono text-sm leading-relaxed overflow-x-auto">
                        <code>{selectedComponent.code}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Component Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {componentExamples.map((component) => (
            <div key={component.id} className="bg-white rounded-xl border border-accent-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300">
              {/* Preview */}
              <div className="component-preview h-48 flex items-center justify-center border-b border-accent-100">
                <div 
                  dangerouslySetInnerHTML={{ __html: component.code }} 
                  className="scale-75 origin-center"
                />
              </div>
              
              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-accent-900">{component.name}</h3>
                  <span className="text-xs text-accent-500 bg-accent-100 px-2 py-1 rounded">
                    {component.category}
                  </span>
                </div>
                <p className="text-sm text-accent-600 mb-4">{component.description}</p>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedComponent(component)}
                    className="flex-1 btn-secondary text-sm py-2"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </button>
                  <button
                    onClick={() => copyToClipboard(component.code, component.id)}
                    className="btn-primary text-sm py-2 px-3"
                  >
                    {copiedCode === component.id ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to build something amazing?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join thousands of developers who are already building incredible user interfaces with Tailwind CSS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Browse all components
              </button>
              <button className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Get started free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
