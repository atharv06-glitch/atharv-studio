import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Marquee from '../ui/Marquee'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 })

      /* Use fromTo so end state is always explicit — prevents opacity stuck at 0 */
      tl
        .fromTo('.hero-ghost',
          { opacity: 0, scale: 1.06 },
          { opacity: 0.5, scale: 1, duration: 1.6, ease: 'power2.out' }
        )
        .fromTo('.hero-eyebrow',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.9'
        )
        .fromTo('.hero-word',
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo('.hero-sub',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo('.hero-cta',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
          '-=0.3'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef}>
      <section className="relative min-h-[115vh] flex flex-col overflow-hidden bg-bgc pt-24 lg:pt-32">

        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        >
          <source src="https://cdn.pixabay.com/video/2020/05/25/40134-424840801_large.mp4" type="video/mp4" />
        </video>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-surface/30 backdrop-blur-[2px] pointer-events-none" />

        {/* Radial fade over grid/video */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 20%, var(--color-bgc) 100%)' }}
          aria-hidden="true"
        />



        {/* Main content wrapper */}
        <div className="flex-1 flex flex-col justify-center w-full">
          <div className="relative z-10 max-w-5xl mx-auto w-full px-6 text-center">

          {/* Eyebrow */}
          <div
            className="hero-eyebrow inline-flex items-center gap-2 bg-accent-soft text-accent text-xs font-mono px-4 py-2 rounded-full mb-8 border border-accent/15"
            style={{ opacity: 0 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Digital Agency &nbsp;·&nbsp; Est. 2026
          </div>

          {/* Headline and Ghost Text Wrapper */}
          <div className="relative">
            {/* Ghost outline text */}
            <div
              className="hero-ghost absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-full flex justify-center pointer-events-none select-none"
              aria-hidden="true"
              style={{ opacity: 0 }}
            >
              <span
                className="font-display font-extrabold leading-none opacity-40 md:opacity-100"
                style={{
                  fontSize: 'clamp(3.5rem, 18vw, 14rem)',
                  WebkitTextStroke: '1.5px var(--color-ink)',
                  color: 'transparent',
                  letterSpacing: '-0.04em',
                }}
              >
                ATHARV
              </span>
            </div>

            {/* Headline */}
            <h1 className="relative z-10 font-display font-extrabold leading-[0.88] tracking-tight mb-8">
              <span className="clip-word">
                <span
                  className="hero-word inline-block text-ink"
                  style={{ fontSize: 'clamp(2.4rem, 9vw, 7rem)', opacity: 0 }}
                >
                  We Craft
                </span>
              </span>
              <span className="clip-word">
                <span
                  className="hero-word inline-block text-accent"
                  style={{ fontSize: 'clamp(2.8rem, 10vw, 8.5rem)', opacity: 0 }}
                >
                  Digital
                </span>
              </span>
              <span className="clip-word">
                <span
                  className="hero-word inline-block text-ink"
                  style={{ fontSize: 'clamp(2.4rem, 9vw, 7rem)', opacity: 0 }}
                >
                  Products
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="hero-sub text-muted text-lg md:text-xl max-w-lg mx-auto leading-relaxed mb-10"
            style={{ opacity: 0 }}
          >
            From concept to launch — we build apps, websites, and brand experiences that move businesses forward.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="hero-cta inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent-dark transition-all duration-300 shadow-[0_20px_40px_rgba(74,21,75,0.18)] group"
              style={{ opacity: 0 }}
            >
              Start a Project
              <span className="bg-white text-accent w-6 h-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ml-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </a>
            <a
              href="#work"
              className="hero-cta inline-flex items-center gap-2 border border-bdr bg-surface text-ink px-8 py-4 rounded-full text-sm font-semibold hover:border-accent hover:text-accent transition-all duration-300"
              style={{ opacity: 0 }}
            >
              View Our Work
            </a>
          </div>
        </div>
        </div>
      </section>

      <Marquee />
    </div>
  )
}
