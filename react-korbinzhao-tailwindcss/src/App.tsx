import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import ComponentsSection from './components/ComponentsSection';
import PerformanceSection from './components/PerformanceSection';
import GettingStartedSection from './components/GettingStartedSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <ComponentsSection />
        <PerformanceSection />
        <GettingStartedSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;