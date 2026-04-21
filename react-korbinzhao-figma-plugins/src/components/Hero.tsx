import React from 'react';
import { 
  Search, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Star,
  Users,
  Download,
  TrendingUp
} from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pt-16 pb-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 animate-gradient"></div>
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99,102,241,0.1) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Subtle Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-blue-400/6 to-cyan-400/6 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Hero Content */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full text-gray-700 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2 text-primary-500" />
            Trusted by 2.5M+ designers worldwide
            <Star className="h-4 w-4 ml-2 text-yellow-500" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            We craft{' '}
            <span className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              revolutionary
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Figma plugins
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your design workflow with our revolutionary plugins. 
            From AI-powered tools to seamless integrations, discover the future of design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <button className="group relative inline-flex items-center bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="relative z-10 flex items-center">
                Discover our plugins
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white hover:border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
              <Zap className="mr-2 h-5 w-5" />
              View showcase
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:bg-white/90 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">20+</div>
              <div className="text-gray-600 text-xs md:text-sm">Revolutionary Plugins</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:bg-white/90 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">2.5M+</div>
              <div className="text-gray-600 text-xs md:text-sm">Happy Users</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:bg-white/90 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">50M+</div>
              <div className="text-gray-600 text-xs md:text-sm">Downloads</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-4 hover:bg-white/90 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">4.9★</div>
              <div className="text-gray-600 text-xs md:text-sm">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-2 shadow-lg">
              <div className="flex items-center">
                <Search className="ml-4 h-6 w-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search plugins, features, or categories..."
                  className="flex-1 bg-transparent border-none outline-none px-4 py-4 text-lg text-gray-900 placeholder-gray-500 focus:placeholder-gray-400"
                />
                <button className="bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button className="px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            <span className="flex items-center">
              <Sparkles className="h-4 w-4 mr-2" />
              All
            </span>
          </button>
          <button className="px-6 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-600 hover:bg-white hover:text-gray-900 hover:border-gray-300 rounded-full text-sm font-medium transition-all duration-200">
            <span className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Assets
            </span>
          </button>
          <button className="px-6 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-600 hover:bg-white hover:text-gray-900 hover:border-gray-300 rounded-full text-sm font-medium transition-all duration-200">
            <span className="flex items-center">
              <Zap className="h-4 w-4 mr-2" />
              Plugins & widgets
            </span>
          </button>
        </div>

        {/* Floating Plugin Icons */}
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Subtle floating elements */}
            <div className="absolute top-10 left-10 animate-float">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl opacity-20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Download className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <div className="absolute top-32 right-20 animate-float" style={{animationDelay: '2s'}}>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg opacity-25 backdrop-blur-sm flex items-center justify-center shadow-md">
                <Sparkles className="h-5 w-5 text-purple-600" />
              </div>
            </div>
            <div className="absolute bottom-20 left-1/4 animate-float" style={{animationDelay: '4s'}}>
              <div className="w-11 h-11 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl opacity-20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Star className="h-5 w-5 text-pink-600" />
              </div>
            </div>
            <div className="absolute bottom-32 right-10 animate-float" style={{animationDelay: '1s'}}>
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg opacity-25 backdrop-blur-sm flex items-center justify-center shadow-sm">
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
            </div>
            <div className="absolute top-1/2 left-16 animate-float" style={{animationDelay: '3s'}}>
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-lg opacity-20 backdrop-blur-sm flex items-center justify-center shadow-md">
                <Users className="h-5 w-5 text-cyan-600" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
