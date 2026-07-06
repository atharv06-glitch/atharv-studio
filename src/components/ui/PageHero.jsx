import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function PageHero({ eyebrow, title, subtitle, ghostText }) {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })

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
        .fromTo('.hero-title-reveal',
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo('.hero-sub',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.4'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="pt-20">
      <section className="relative min-h-[70vh] lg:min-h-[85vh] flex flex-col overflow-hidden bg-bgc border-b border-bdr">
        
        {/* Video background (Reusing same stock video for consistency) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] pointer-events-none"
        >
          <source src="https://cdn.pixabay.com/video/2020/05/25/40134-424840801_large.mp4" type="video/mp4" />
        </video>

        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-surface/40 backdrop-blur-[4px] pointer-events-none" />

        {/* Radial fade over grid/video */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 75% 75% at 50% 50%, transparent 10%, var(--color-bgc) 100%)' }}
          aria-hidden="true"
        />

        {/* Main content wrapper */}
        <div className="flex-1 flex flex-col justify-center w-full pb-32 md:pb-20 pt-16 lg:pt-24">
          <div className="relative z-10 max-w-5xl mx-auto w-full px-6 text-center">

            {/* Eyebrow */}
            {eyebrow && (
              <div
                className="hero-eyebrow inline-flex items-center gap-2 bg-accent-soft text-accent text-xs font-mono px-4 py-2 rounded-full mb-8 border border-accent/15"
                style={{ opacity: 0 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {eyebrow}
              </div>
            )}

            {/* Headline and Ghost Text Wrapper */}
            <div className="relative">
              {/* Ghost outline text */}
              {ghostText && (
                <div
                  className="hero-ghost absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-full flex justify-center pointer-events-none select-none"
                  aria-hidden="true"
                  style={{ opacity: 0 }}
                >
                  <span
                    className="font-display font-extrabold leading-none opacity-10 md:opacity-80"
                    style={{
                      fontSize: 'clamp(4rem, 16vw, 12rem)',
                      WebkitTextStroke: '1px var(--color-ink)',
                      color: 'transparent',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {ghostText}
                  </span>
                </div>
              )}

              {/* Headline */}
              <h1 className="relative z-10 font-display font-extrabold leading-snug md:leading-[1] tracking-tight mb-8">
                <span className="block">
                  <span
                    className="hero-title-reveal inline-block text-ink py-2"
                    style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)', opacity: 0 }}
                  >
                    {title}
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            {subtitle && (
              <p
                className="hero-sub text-muted text-base md:text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ opacity: 0 }}
              >
                {subtitle}
              </p>
            )}

          </div>
        </div>
      </section>
    </div>
  )
}
