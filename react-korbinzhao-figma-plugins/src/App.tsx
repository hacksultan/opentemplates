import Header from './components/Header';
import Hero from './components/Hero';
import PluginsSection from './components/PluginsSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <PluginsSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;