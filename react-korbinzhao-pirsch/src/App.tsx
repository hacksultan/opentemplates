import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import SetupSection from './components/SetupSection';
import InsightsSection from './components/InsightsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Dashboard />
      <SetupSection />
      <InsightsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
