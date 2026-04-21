const ShopSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-600 font-medium mb-4">SHOP</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Introducing Shop,<br />
            the creative way to sell.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The things you'd like to sell probably do not belong in a Shopify store. Shop is
            designed from the ground up with creators in mind. Whether it's a 1:1 Zoom call, art
            commissions, or an eBook, Shop is for you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-16">
          {/* Shop interface mockup */}
          <div className="max-w-md w-full">
            {/* Shop item card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
              <div className="relative">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white rounded-2xl p-6 mx-4">
                      <span className="text-4xl mb-2 block">📚</span>
                      <h3 className="font-bold text-gray-900">Design Book</h3>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white rounded-full px-3 py-1 text-sm font-medium text-gray-900">
                    Digital
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Design Book</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">
                  A comprehensive guide to modern design principles and best practices.
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$45.00</span>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-medium transition-colors">
                    Buy
                  </button>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Over <span className="font-semibold">7.5k</span> digital downloads this month
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="max-w-md">
            <div className="space-y-8">
              <div>
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl">💳</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">One-click checkout</h3>
                <p className="text-gray-600">
                  Your customers can buy your products with just one click. No account required.
                </p>
              </div>

              <div>
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your private space</h3>
                <p className="text-gray-600">
                  We never interfere with the customer relationship that you've worked so hard to build.
                </p>
              </div>

              <div>
                <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your data remains RÖT</h3>
                <p className="text-gray-600">
                  We'll notify when someone gets something but you can export and own all your customer data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShopSection
