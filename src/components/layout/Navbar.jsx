import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { Moon, Sun } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

const CTA_LINK = 'https://wa.me/+919529085991?text=Hi%20Atharv,%20I%27d%20like%20to%20talk%20about%20a%20project.'

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.3 }
      )
    })

    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      ctx.revert()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/85 backdrop-blur-xl border-b border-bdr shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-2.5 z-10">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-sm leading-none">A</span>
            </div>
            <span className="font-display font-bold text-xl text-ink tracking-tight">
              Atharv<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={handleNavClick}
                className="text-sm font-medium text-muted hover:text-ink transition-colors duration-200 relative after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-muted hover:text-ink hover:bg-surface transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-accent-dark transition-all duration-300 group"
            >
              Let's talk
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-1 flex flex-col gap-[5px]"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-0.5 bg-ink transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-bgc flex flex-col items-center justify-start gap-8 pt-28 pb-10 overflow-y-auto transition-all duration-400 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {NAV_LINKS.map(link => (
          <Link
            key={link.href}
            to={link.href}
            onClick={handleNavClick}
            className="font-display font-bold text-4xl text-ink hover:text-accent transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
        <button 
          onClick={() => {
            toggleTheme();
            setMenuOpen(false);
          }}
          className="flex items-center gap-3 font-display font-bold text-2xl text-ink hover:text-accent transition-colors mt-4"
        >
          {isDark ? <><Sun size={24}/> Light Mode</> : <><Moon size={24}/> Dark Mode</>}
        </button>
        <div className="flex flex-col items-center gap-4 mt-4 w-full px-10">
          <Link
            to="/contact"
            onClick={handleNavClick}
            className="w-full text-center bg-accent text-white py-3.5 rounded-full font-semibold text-base hover:bg-accent-dark transition-colors duration-200"
          >
            Start a Project →
          </Link>
        </div>
        {/* Contact Info at bottom */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <a href="tel:+1-212-456-7890" className="text-muted hover:text-ink transition-colors duration-200">+1-212-456-7890</a>
          <a href="mailto:hello@atharvstudio.com" className="font-bold text-ink hover:text-accent transition-colors duration-200">hello@atharvstudio.com</a>
        </div>
      </div>
    </>
  )
}
