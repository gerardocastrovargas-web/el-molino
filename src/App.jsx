import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCarousel from './components/ProductCarousel'
import Story from './components/Story'
import Faq from './components/Faq'
import ContactFooter from './components/ContactFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory text-coal">
      <Navbar />
      <main>
        <Hero />
        <ProductCarousel />
        <Story />
        <Faq />
      </main>
      <ContactFooter />
    </div>
  )
}
