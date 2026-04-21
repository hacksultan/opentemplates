import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      content: "Localise has transformed how we handle internationalization. The AI-powered translations combined with human review have reduced our time-to-market by 60% while maintaining quality.",
      author: "Sarah Johnson",
      role: "Head of Product",
      company: "TechCorp",
      avatar: "SJ",
      rating: 5,
    },
    {
      content: "The API integration was seamless and the real-time collaboration features have made working with our distributed translation team incredibly efficient.",
      author: "Marco Rodriguez",
      role: "Engineering Manager", 
      company: "GlobalApp",
      avatar: "MR",
      rating: 5,
    },
    {
      content: "Best-in-class localization platform. The workflow automation and quality assurance features are exactly what we needed to scale globally.",
      author: "Emily Chen",
      role: "Localization Director",
      company: "StartupXYZ", 
      avatar: "EC",
      rating: 5,
    },
  ];

  const stats = [
    { value: '4.8/5', label: 'G2 Rating', subtext: 'Based on 500+ reviews' },
    { value: '8,000+', label: 'Happy Customers', subtext: 'Across 50+ countries' },
    { value: '99.9%', label: 'Uptime SLA', subtext: 'Enterprise-grade reliability' },
    { value: '24/7', label: 'Support', subtext: 'Expert help when you need it' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by teams at{' '}
            <span className="gradient-text">successful companies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers say about their experience with Localise
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary-200" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to join thousands of happy customers?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see why teams choose Localise for their 
            internationalization needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Start free trial
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Schedule demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
