import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <PricingSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;