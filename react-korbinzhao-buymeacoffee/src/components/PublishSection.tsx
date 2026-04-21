const PublishSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Publish your best work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Buy Me a Coffee makes it easy to publish free and exclusive content. Try different
            formats such as audio, video and make it members-only to drive more memberships.
          </p>
        </div>

        {/* Media grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Video post */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
              <p className="text-white text-sm font-medium">Behind the scenes</p>
              <p className="text-white/80 text-xs">Video • 5 min</p>
            </div>
          </div>

          {/* Audio post */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-sm font-medium">Podcast Episode #12</p>
                <p className="text-xs opacity-80">Audio • 45 min</p>
              </div>
            </div>
          </div>

          {/* Blog post */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-bold text-lg mb-2">
                  10 Design Tips for Beginners
                </h3>
                <p className="text-white/80 text-sm">
                  Essential principles every designer should know...
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-xs">Article • 8 min read</span>
                <div className="bg-white rounded-full px-3 py-1">
                  <span className="text-purple-600 text-xs font-medium">Members only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery post */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="bg-white rounded-lg aspect-square"></div>
                <div className="bg-white rounded-lg aspect-square"></div>
                <div className="bg-white rounded-lg aspect-square"></div>
                <div className="bg-white rounded-lg aspect-square flex items-center justify-center">
                  <span className="text-gray-600 text-xs">+12</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
              <p className="text-white text-sm font-medium">Photo gallery</p>
              <p className="text-white/80 text-xs">16 photos</p>
            </div>
          </div>

          {/* Live stream */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm font-medium">Live Q&A Session</p>
                <p className="text-xs opacity-80">Starting in 2 hours</p>
              </div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                🔴 LIVE
              </span>
            </div>
          </div>

          {/* Tutorial */}
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative group hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <p className="text-sm font-medium">Tutorial Series</p>
                <p className="text-xs opacity-80">5 videos • Premium</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-50 rounded-2xl px-8 py-6">
            <div className="text-center">
              <span className="block text-3xl font-bold text-gray-900">50M+</span>
              <span className="text-gray-600 text-sm">Posts published</span>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-gray-900">2.5M+</span>
              <span className="text-gray-600 text-sm">Active creators</span>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-gray-900">100M+</span>
              <span className="text-gray-600 text-sm">Monthly views</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PublishSection
