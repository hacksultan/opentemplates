import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import CollaborationSection from './components/CollaborationSection';
import APISection from './components/APISection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <CollaborationSection />
        <APISection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;