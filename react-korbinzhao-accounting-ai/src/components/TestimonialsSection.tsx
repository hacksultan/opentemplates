import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight, Users, TrendingUp, Clock } from 'lucide-react';
import { testimonials } from '../data/mockData';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4 mr-2" />
            Customer Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-900 mb-6">
            Trusted by accounting
            <br />
            <span className="gradient-text">professionals worldwide</span>
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
            See how AI Meets Accounting has transformed the way businesses handle their finances.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200/50">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary-600 mb-2">10,000+</div>
            <div className="text-accent-600">Happy Customers</div>
          </div>
          
          <div className="text-center bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-8 border border-secondary-200/50">
            <div className="flex items-center justify-center w-16 h-16 bg-secondary-500 rounded-full mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-secondary-600 mb-2">80%</div>
            <div className="text-accent-600">Time Saved</div>
          </div>
          
          <div className="text-center bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200/50">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary-600 mb-2">99%</div>
            <div className="text-accent-600">Accuracy Rate</div>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className="relative mb-16">
          <div 
            className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-20">
              <Quote className="h-16 w-16 text-primary-500" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-primary-50 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ArrowLeft className="h-5 w-5 text-accent-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white hover:bg-primary-50 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ArrowRight className="h-5 w-5 text-accent-600" />
            </button>

            <div className="text-center relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-2xl md:text-3xl font-medium text-accent-900 mb-8 leading-relaxed max-w-4xl mx-auto">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-accent-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-accent-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-primary-600 font-medium">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary-500 scale-125'
                      : 'bg-accent-300 hover:bg-accent-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`feature-card group transition-all duration-300 ${
                index === currentTestimonial ? 'ring-2 ring-primary-200 bg-primary-50' : ''
              }`}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-accent-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3 border-t border-accent-200 pt-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-accent-900">{testimonial.name}</div>
                  <div className="text-sm text-accent-600">{testimonial.role}</div>
                  <div className="text-sm text-primary-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white border border-accent-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-accent-900 mb-4">
              Join thousands of satisfied customers
            </h3>
            <p className="text-accent-600 mb-6">
              Start your free trial today and see why accounting professionals choose AI Meets Accounting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8 py-3">
                Start Free Trial
              </button>
              <button className="btn-secondary px-8 py-3">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
