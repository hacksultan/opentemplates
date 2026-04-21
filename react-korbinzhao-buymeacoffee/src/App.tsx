import Header from './components/Header'
import Hero from './components/Hero'
import CoffeeSection from './components/CoffeeSection'
import MembershipSection from './components/MembershipSection'
import ShopSection from './components/ShopSection'
import PublishSection from './components/PublishSection'
import FeaturesSection from './components/FeaturesSection'
import ComparisonSection from './components/ComparisonSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CoffeeSection />
      <MembershipSection />
      <ShopSection />
      <PublishSection />
      <FeaturesSection />
      <ComparisonSection />
      <Footer />
    </div>
  )
}

export default App