const Header = () => {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-black font-bold">☕</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Buy me a Coffee</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              FAQ
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Wall of Love
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Resources
            </a>
          </nav>

          {/* Auth buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Log in
            </button>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
