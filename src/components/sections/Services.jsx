import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const SERVICES = [
  { id: '01', title: 'Web Development', desc: 'Custom platforms built for scale. We specialize in React, Node, WordPress and Shopify.', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { id: '02', title: 'UI/UX Design', desc: 'Premium, conversion-focused interfaces that elevate your brand and engage your users.', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { id: '03', title: 'SEO & Strategy', desc: 'Data-driven visibility. We optimize architecture and content so you get found.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { id: '04', title: 'Branding', desc: 'Visual identities that resonate. From logos to complete design systems.', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' }
]

export default function Services() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in sticky header
      gsap.fromTo('.svc-sticky-header', 
        { opacity: 0, x: -30 }, 
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.svc-sticky-header', start: 'top 80%' } }
      )

      // Fade in cards
      gsap.utils.toArray('.svc-card').forEach((card) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%' } }
        )
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="services" className="py-24 lg:py-40 bg-bgc">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Sticky Left Column */}
          <div className="w-full lg:w-1/3 svc-sticky-header lg:sticky top-32">
            <span className="bg-ink text-bgc px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold inline-block mb-6">
              Our Capabilities
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-ink mb-6">
              What We Do Best.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              We specialize in delivering high-end digital solutions that solve real business problems. From code to canvas, we've got you covered.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 font-semibold text-ink hover:text-accent transition-colors">
              View all services <span className="text-xl">→</span>
            </Link>
          </div>

          {/* Scrolling Right Column */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="svc-card bg-surface rounded-[2rem] p-10 lg:p-14 border border-bdr">
                <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                  <div className="flex-1">
                    <span className="font-mono text-accent text-lg mb-4 block font-bold">{s.id}</span>
                    <h3 className="font-display font-bold text-3xl text-ink mb-4">{s.title}</h3>
                    <p className="text-muted text-lg leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <svg width="24" height="24" fill="none" stroke="currentColor" className="text-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={s.icon}/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
