import React from 'react';
import { 
  Clock, 
  MessageCircle, 
  Eye, 
  Share2, 
  Twitter, 
  Facebook, 
  Pocket,
  MessageSquare,
  Calendar
} from 'lucide-react';
import { categories } from '../data/mockData';
import type { Post } from '../data/mockData';

interface PostCardProps {
  post: Post;
  featured?: boolean;
  compact?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({ post, featured = false, compact = false }) => {
  const category = categories.find(cat => cat.name === post.category);
  
  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  if (compact) {
    return (
      <article className="group">
        <div className="flex space-x-4">
          <div className="flex-shrink-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-16 h-16 rounded-lg object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              {category && (
                <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${category.color}`}>
                  {category.name}
                </span>
              )}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
              {post.title}
            </h3>
            <div className="flex items-center text-xs text-gray-500 mt-2">
              <Eye className="h-3 w-3 mr-1" />
              <span>{formatViews(post.views)} Views</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`blog-card group ${featured ? 'lg:col-span-2' : ''}`}>
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            featured ? 'h-64 lg:h-80' : 'h-48'
          }`}
        />
        
        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className={`category-badge ${category.color}`}>
              {category.name}
            </span>
          </div>
        )}

        {/* Social Share - appears on hover */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex flex-col space-y-2">
            <span className="text-xs text-white font-medium">Share</span>
            <button className="social-share bg-white/90 backdrop-blur-sm text-gray-700 hover:text-blue-600 rounded-full p-2">
              <Twitter className="h-4 w-4" />
            </button>
            <button className="social-share bg-white/90 backdrop-blur-sm text-gray-700 hover:text-blue-800 rounded-full p-2">
              <Facebook className="h-4 w-4" />
            </button>
            <button className="social-share bg-white/90 backdrop-blur-sm text-gray-700 hover:text-red-600 rounded-full p-2">
              <Pocket className="h-4 w-4" />
            </button>
            <button className="social-share bg-white/90 backdrop-blur-sm text-gray-700 hover:text-green-600 rounded-full p-2">
              <MessageSquare className="h-4 w-4" />
            </button>
            <button className="social-share bg-white/90 backdrop-blur-sm text-gray-700 hover:text-purple-600 rounded-full p-2">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
        {/* Author Info */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center text-sm">
              <span className="text-gray-600">Posted by </span>
              <span className="font-medium text-gray-900 ml-1">{post.author.name}</span>
            </div>
            <div className="text-xs text-gray-500">{post.author.role}</div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="text-right">
              <div className="flex items-center text-xs text-gray-500">
                <Eye className="h-3 w-3 mr-1" />
                <span>{formatViews(post.views)} Views</span>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className={`font-heading font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 mb-3 ${
          featured ? 'text-2xl lg:text-3xl' : 'text-xl'
        }`}>
          <a href={`#post-${post.id}`} className="hover:underline">
            {post.title}
          </a>
        </h2>

        {/* Excerpt */}
        <p className={`text-gray-600 mb-4 ${featured ? 'text-lg' : 'text-base'}`}>
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <div className="mb-6">
          <a 
            href={`#post-${post.id}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group/link"
          >
            read more{post.title}
            <span className="ml-1 group-hover/link:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.publishedAt}</span>
            </div>
            <div className="flex items-center">
              <MessageCircle className="h-4 w-4 mr-1" />
              <span>{post.comments} Comments</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime} Min Read</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            <span>{formatViews(post.views)} Views</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
