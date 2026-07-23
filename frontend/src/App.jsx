import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import FeelItBanner from './components/FeelItBanner'
import Process from './components/Process'
import About from './components/About'
import PromoBanner from './components/PromoBanner'
import StatsBanner from './components/StatsBanner'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import BlogTeasers from './components/BlogTeasers'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#12091f] text-[#e6e1f0]">
      <Navbar />

      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <FeelItBanner />
        <Process />
        <About />
        <PromoBanner />
        <StatsBanner />
        <Testimonials />
        <FAQ />
        <BlogTeasers />
        <Newsletter />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App

