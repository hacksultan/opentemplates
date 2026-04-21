const CoffeeSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Give your audience<br />
            an easy way to say thanks.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Buy Me a Coffee makes supporting fun and easy. In just a couple of taps, your fans
            can make the payment (buy you a coffee) and leave a message.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
          {/* Coffee interface mockup */}
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Buy Adriel a coffee</h3>
              <p className="text-gray-600 text-sm mt-1">Thanks for visiting!</p>
            </div>

            {/* Coffee selection */}
            <div className="mb-6">
              <div className="flex space-x-2 mb-4">
                <button className="flex-1 bg-yellow-400 text-black py-2 px-4 rounded-full text-sm font-medium">
                  ☕ × 1
                </button>
                <button className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm font-medium">
                  ☕ × 3
                </button>
                <button className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-full text-sm font-medium">
                  ☕ × 5
                </button>
              </div>
              
              <div className="text-right mb-4">
                <span className="text-2xl font-bold">$5</span>
              </div>
            </div>

            {/* Message input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Say something nice... (optional)
              </label>
              <textarea 
                className="w-full p-3 border border-gray-200 rounded-lg resize-none"
                rows={3}
                placeholder="Thanks for creating awesome content!"
              />
            </div>

            {/* Name input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input 
                type="text"
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Someone"
              />
            </div>

            {/* Support button */}
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-full font-semibold transition-colors">
              Support $5
            </button>
          </div>

          {/* Features list */}
          <div className="max-w-md">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">No signup required</h4>
                  <p className="text-gray-600 text-sm">Your supporters can contribute without creating an account</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Powered by Stripe</h4>
                  <p className="text-gray-600 text-sm">Secure payments via Stripe. We never store credit card information</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mobile optimized</h4>
                  <p className="text-gray-600 text-sm">Looks great and works perfectly on all devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoffeeSection
