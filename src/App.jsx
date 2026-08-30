import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/ui/Preloader'
import PageTransition from './components/ui/PageTransition'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/ui/CustomCursor'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ProcessPage from './pages/ProcessPage'
import ContactPage from './pages/ContactPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import DemosPage from './pages/DemosPage'
import NotFoundPage from './pages/NotFoundPage'
export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Optionally tie ScrollTrigger to Lenis if using GSAP
    // (Ensure you don't overwrite if GSAP is already handling scroll triggers smoothly elsewhere, but basic Lenis is safe)
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
          <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
          <Route path="/demos" element={<PageTransition><DemosPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/process" element={<PageTransition><ProcessPage /></PageTransition>} />
          <Route path="/portfolio/:id" element={<PageTransition><ProjectDetailsPage /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
