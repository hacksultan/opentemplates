const MembershipSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-600 font-medium mb-4">MEMBERSHIPS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start a membership for<br />
            your biggest fans.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Earn a recurring income by accepting monthly or yearly
            subscriptions. Share exclusive content, or just give them a
            way to support your work on an ongoing basis.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
          {/* Membership tiers */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl w-full">
            {/* Basic Tier */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-yellow-400 transition-colors">
              <div className="mb-4">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Seedling</h3>
                <p className="text-gray-600 text-sm">Get my latest posts</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">$3</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="text-left text-sm text-gray-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Access to supporter-only posts
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Direct message access
                </li>
              </ul>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full font-medium transition-colors">
                Join
              </button>
            </div>

            {/* Premium Tier */}
            <div className="bg-white border-2 border-yellow-400 rounded-2xl p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-medium">
                  Most popular
                </span>
              </div>
              <div className="mb-4">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600">💎</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Premium</h3>
                <p className="text-gray-600 text-sm">Everything + exclusive videos</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">$9</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="text-left text-sm text-gray-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Everything in Seedling
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Exclusive tutorial videos
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Discord community access
                </li>
              </ul>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full font-medium transition-colors">
                Join
              </button>
            </div>

            {/* VIP Tier */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:border-yellow-400 transition-colors">
              <div className="mb-4">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600">👑</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">VIP</h3>
                <p className="text-gray-600 text-sm">The ultimate fan experience</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">$25</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="text-left text-sm text-gray-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Everything in Premium
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  1-on-1 monthly video calls
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Early access to new content
                </li>
              </ul>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full font-medium transition-colors">
                Join
              </button>
            </div>
          </div>

          {/* Revenue display */}
          <div className="text-center lg:text-left">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Monthly earnings</h4>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-green-600">$1,650</span>
                <p className="text-gray-600 text-sm">from 286 members</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">🌱 Seedling (200)</span>
                  <span className="font-medium">$600</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">💎 Premium (80)</span>
                  <span className="font-medium">$720</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">👑 VIP (6)</span>
                  <span className="font-medium">$150</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-green-600">$1,650</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembershipSection
