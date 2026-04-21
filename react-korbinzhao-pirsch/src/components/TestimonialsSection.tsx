import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechStart',
      avatar: 'SC',
      content: "Pirsch has completely transformed how we understand our users. The privacy-first approach means we can get insights without worrying about compliance.",
      rating: 5
    },
    {
      name: 'Marcus Weber',
      role: 'Founder',
      company: 'Digital Agency',
      avatar: 'MW',
      content: "Finally, an analytics tool that respects user privacy while still providing the data we need. Setup was incredibly simple.",
      rating: 5
    },
    {
      name: 'Elena Rodriguez',
      role: 'Marketing Director',
      company: 'E-commerce Co',
      avatar: 'ER',
      content: "The real-time insights and clean interface make it easy to track what matters. No more cookie banners cluttering our site!",
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Developer',
      company: 'Freelancer',
      avatar: 'DK',
      content: "Integration took literally 2 minutes. The API is well-documented and the dashboard is intuitive. Highly recommended!",
      rating: 5
    },
    {
      name: 'Anna Schmidt',
      role: 'UX Designer',
      company: 'Design Studio',
      avatar: 'AS',
      content: "Love how clean and focused the interface is. Shows exactly what I need without overwhelming me with unnecessary data.",
      rating: 5
    },
    {
      name: 'Tom Johnson',
      role: 'CEO',
      company: 'SaaS Startup',
      avatar: 'TJ',
      content: "Switched from Google Analytics and never looked back. Better insights, better privacy, better user experience overall.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Happy Customers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Thousands of websites trust Pirsch for their analytics needs. See what they have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">50,000+</div>
            <div className="text-gray-400">Websites</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-400">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
