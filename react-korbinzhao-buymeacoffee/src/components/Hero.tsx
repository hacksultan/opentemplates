const Hero = () => {
  return (
    <section className="bg-white pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Star rating */}
          <div className="flex justify-center items-center mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">Loved by 1,000,000+ creators</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Fund your<br />
            <span className="text-yellow-400">creative work</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Accept support. Start a membership. Shop to your
            audience. It's easier than you think.
          </p>

          {/* CTA Button */}
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
            Start my page
          </button>

          {/* Additional info */}
          <p className="text-sm text-gray-500 mt-4">
            It's free and takes less than 2 minutes!
          </p>
        </div>

        {/* Hero illustration/avatars */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            {/* Creator avatars arranged in a pattern */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              {/* First row */}
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">👩‍🎨</span>
              </div>
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">🎵</span>
              </div>
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              
              {/* Second row */}
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">🎬</span>
              </div>
              <div className="bg-yellow-400 rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold">
                ☕
              </div>
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">🎮</span>
              </div>
              
              {/* Third row */}
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">📸</span>
              </div>
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">✍️</span>
              </div>
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
