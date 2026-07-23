import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import TrustStrip from "./components/TrustStrip"
import Services from "./components/Services"
import FeelItBanner from "./components/FeelItBanner"
import Process from "./components/Process"
import About from "./components/About"
import PromoBanner from "./components/PromoBanner"
import StatsBanner from "./components/StatsBanner"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import BlogTeasers from "./components/BlogTeasers"
import Newsletter from "./components/Newsletter"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Highlights />
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
    </>
  )
}
