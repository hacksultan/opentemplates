import React from 'react';
import { TrendingUp, Eye, Star, Award } from 'lucide-react';
import { posts } from '../data/mockData';

const Sidebar: React.FC = () => {
  // Sort posts by different criteria
  const trendingPosts = [...posts].sort((a, b) => b.views - a.views).slice(0, 4);
  const mostViewedPosts = [...posts].sort((a, b) => b.views - a.views).slice(0, 2);
  const editorsPicks = posts.filter(post => post.author.role === 'Editor & Author').slice(0, 2);
  const featuredArticles = posts.slice(0, 2);

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <aside className="space-y-8">
      {/* Trending Section */}
      <div className="sidebar-section">
        <div className="flex items-center mb-6">
          <TrendingUp className="h-5 w-5 text-primary-600 mr-2" />
          <h3 className="font-heading text-lg font-semibold text-gray-900">Trending</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">Popular this week</p>
        
        <div className="space-y-6">
          {trendingPosts.map((post, index) => (
            <div key={post.id} className="group">
              <div className="flex items-start space-x-4">
                {/* Ranking Number */}
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-sm font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <span>{formatViews(post.views)} Views</span>
                  </div>
                  <div className="mb-1">
                    <span className="inline-flex px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                    <a href={`#post-${post.id}`}>{post.title}</a>
                  </h4>
                  <div className="flex items-center text-xs text-gray-500 mt-2">
                    <Eye className="h-3 w-3 mr-1" />
                    <span>{formatViews(post.views)} Views</span>
                  </div>
                </div>
              </div>
              
              {index < trendingPosts.length - 1 && (
                <div className="border-b border-gray-100 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Most Viewed Section */}
      <div className="sidebar-section">
        <div className="flex items-center mb-6">
          <Eye className="h-5 w-5 text-accent-600 mr-2" />
          <h3 className="font-heading text-lg font-semibold text-gray-900">Most viewed</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">Popular with readers</p>
        
        <div className="space-y-4">
          {mostViewedPosts.map((post, index) => (
            <div key={post.id} className="group flex space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-accent-100 text-accent-700 rounded-full flex items-center justify-center text-xs font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="flex-1 min-w-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-24 rounded-lg object-cover mb-2 group-hover:scale-105 transition-transform duration-200"
                />
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                  <a href={`#post-${post.id}`}>{post.title}</a>
                </h4>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Eye className="h-3 w-3 mr-1" />
                  <span>{formatViews(post.views)} Views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editors Picks Section */}
      <div className="sidebar-section">
        <div className="flex items-center mb-6">
          <Star className="h-5 w-5 text-yellow-600 mr-2" />
          <h3 className="font-heading text-lg font-semibold text-gray-900">Editors Picks</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">Chosen by the editor</p>
        
        <div className="space-y-6">
          {editorsPicks.map((post) => (
            <div key={post.id} className="group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-32 rounded-lg object-cover mb-3 group-hover:scale-105 transition-transform duration-200"
              />
              <div className="text-xs text-gray-500 mb-1">
                Posted in <span className="font-medium text-primary-600">{post.category}</span>
              </div>
              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                <a href={`#post-${post.id}`}>{post.title}</a>
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="sidebar-section">
        <div className="flex items-center mb-6">
          <Award className="h-5 w-5 text-purple-600 mr-2" />
          <h3 className="font-heading text-lg font-semibold text-gray-900">Featured articles</h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">We love these</p>
        
        <div className="space-y-6">
          {featuredArticles.map((post) => (
            <div key={post.id} className="group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-32 rounded-lg object-cover mb-3 group-hover:scale-105 transition-transform duration-200"
              />
              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2 mb-2">
                <a href={`#post-${post.id}`}>{post.title}</a>
              </h4>
              <div className="text-xs text-gray-500">
                Posted by <span className="font-medium text-gray-700">{post.author.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="sidebar-section bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <h3 className="font-heading text-lg font-semibold mb-2">
          Never trust atoms; they make up everything
        </h3>
        <p className="text-gray-300 text-sm mb-6">
          Continuing melancholy especially so to. Me unpleasing impossible 
          in attachment announcing so astonished
        </p>
        
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            subscribe
          </button>
        </form>
        
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="terms"
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-white/20 rounded bg-white/10"
          />
          <label htmlFor="terms" className="ml-2 text-xs text-gray-300">
            I agree to the terms & conditions
          </label>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
