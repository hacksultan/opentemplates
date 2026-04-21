import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8 bg-yellow-400">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-800 ring-1 ring-gray-900/20 hover:ring-gray-900/30">
            Announcing our new AI-powered features.{' '}
            <a href="#" className="font-semibold text-gray-900">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Voice to text like magic
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            SuperWhisper transforms your voice into perfectly formatted text in seconds. 
            Whether you're writing emails, taking notes, or creating content, 
            our AI-powered transcription makes it effortless.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Download for Mac
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Watch demo <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:w-[72.1875rem]" />
      </div>
    </section>
  );
};

export default Hero;
