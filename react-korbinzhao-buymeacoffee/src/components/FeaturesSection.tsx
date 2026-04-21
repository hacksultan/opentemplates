const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Designed for creators,<br />
            not for businesses.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  We don't call them "customers" or "transactions." They are your
                  <span className="text-yellow-600"> supporters.</span>
                </h3>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  You get to <span className="text-yellow-600">talk to a human</span> for help.
                  Quick and easy! Just like we're right here.
                </h3>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  You think <span className="text-yellow-600">100% ownership</span> of your
                  supporters. We never email them unless
                  you ask us to expose them the features.
                </h3>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  You get paid instantly to your bank.
                  <span className="text-yellow-600"> No more 30-day delays.</span>
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Additional features */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% ownership</h3>
              <p className="text-gray-600 text-sm">
                Your audience remains yours. We never share their data or contact them.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant payouts</h3>
              <p className="text-gray-600 text-sm">
                Get paid instantly to your bank account. No waiting periods.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Privacy focused</h3>
              <p className="text-gray-600 text-sm">
                We never collect or sell your data. Your privacy is our priority.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Creator-first</h3>
              <p className="text-gray-600 text-sm">
                Built specifically for creators, not adapted from business tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
