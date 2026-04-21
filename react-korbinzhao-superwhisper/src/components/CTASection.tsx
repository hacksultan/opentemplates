import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-yellow-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to transform your workflow?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Join thousands of professionals who use SuperWhisper to boost their productivity. 
            Start your free trial today and experience the magic of AI-powered transcription.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Download for Free
            </a>
            <a
              href="#"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start 14-day Trial
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
