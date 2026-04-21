const ComparisonSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Make 20% or more,<br />
            compared to other platforms.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Buy Me a Coffee */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-8 text-center relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                Best choice
              </span>
            </div>
            
            <div className="mb-6">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Buy Me a Coffee</h3>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Set up a membership</h4>
                <p className="text-sm text-gray-600">Create recurring subscriptions and share exclusive content with your biggest supporters</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">4 free integrations</h4>
                <p className="text-sm text-gray-600">Connect with Discord, YouTube, Twitch and more to manage your community in one place</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Email marketing</h4>
                <p className="text-sm text-gray-600">Launch email campaigns to build stronger relationships with your supporters and promote your work</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Extras</h4>
                <p className="text-sm text-gray-600">Commission widgets, embeddable posts and much more to help you grow your business</p>
              </div>
            </div>

            <div className="text-center">
              <span className="text-3xl font-bold text-green-600">5%</span>
              <p className="text-gray-600 text-sm">Platform fee</p>
            </div>
          </div>

          {/* Other platforms */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Other platforms</h3>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Your privacy counts</h4>
                <p className="text-sm text-gray-600">We treat all account information and any files uploaded with the utmost privacy</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">No privacy delays</h4>
                <p className="text-sm text-gray-600">Get paid on time without delays from us.We transfer your money right away</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Only premium APIs</h4>
                <p className="text-sm text-gray-600">You've put a lot of work into building your 100% that is API compatible with Zapier, IFTTT</p>
              </div>
            </div>

            <div className="text-center">
              <span className="text-3xl font-bold text-red-600">8-12%</span>
              <p className="text-gray-600 text-sm">Platform fee</p>
            </div>
          </div>

          {/* Traditional methods */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
            <div className="mb-6">
              <div className="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Traditional methods</h3>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Complex setup</h4>
                <p className="text-sm text-gray-600">Requires technical knowledge to set up payment processing and manage subscriptions</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">High maintenance</h4>
                <p className="text-sm text-gray-600">Ongoing costs for hosting, security, and platform maintenance</p>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Limited features</h4>
                <p className="text-sm text-gray-600">Basic payment processing without creator-specific tools and integrations</p>
              </div>
            </div>

            <div className="text-center">
              <span className="text-3xl font-bold text-orange-600">15%+</span>
              <p className="text-gray-600 text-sm">Total costs</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-8">
            Join over 1,000,000 creators earning more with Buy Me a Coffee
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
            Start earning more today
          </button>
        </div>
      </div>
    </section>
  )
}

export default ComparisonSection
