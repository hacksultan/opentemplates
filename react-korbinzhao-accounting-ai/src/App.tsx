import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import AnalyticsSection from './components/AnalyticsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <AnalyticsSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;