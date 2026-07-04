import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CtaSection() {
  const ref = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content > *',
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true }
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section ref={ref} id="contact" className="relative overflow-hidden py-28 lg:py-40 bg-surface">

      {/* Background circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'rgba(255,255,255,0.03)' }} aria-hidden="true" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'rgba(255,255,255,0.03)' }} aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.15 }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="cta-content grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="flex flex-col items-start gap-6 text-left">
            <div className="inline-flex items-center gap-2 bg-bdr/70 backdrop-blur-sm border border-bdr text-ink/80 font-mono text-xs px-4 py-2 rounded-full uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Let's Work Together
            </div>

            <h2
              className="font-display font-extrabold text-ink leading-[0.92] tracking-tight break-words hyphens-auto w-full"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Ready to Build<br />Something<br />Extraordinary?
            </h2>

            <p className="text-muted text-base max-w-md leading-relaxed">
              Let's bring your idea to life — start with a free 30-minute strategy call. No sales pitch, just real talk about your project.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center gap-4 pt-2 w-full">
              <a
                href="mailto:hello@atharvstudio.com"
                className="inline-flex items-center justify-center gap-2 bg-white text-accent px-8 py-3.5 rounded-full text-xs font-bold hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 group"
              >
                Book a Free Call
                <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
              </a>
              <a
                href="mailto:hello@atharvstudio.com"
                className="inline-flex items-center justify-center gap-2 border border-bdr text-ink px-8 py-3.5 rounded-full text-xs font-semibold hover:border-accent hover:text-accent transition-all duration-300"
              >
                hello@atharvstudio.com
              </a>
            </div>
            
            <p className="text-muted/60 text-[10px] font-mono mt-2">✦ We respond to every inquiry within 24 hours</p>
          </div>

          {/* Right Column: Minimalist Interactive Form */}
          <div className="w-full">
            <div className="glass-card-liquid rounded-[1.75rem] p-8 md:p-10">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center">
                    <svg width="18" height="18" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-ink text-xl">Thank you!</h3>
                  <p className="text-muted text-sm max-w-xs">Your inquiry has been received. We will get in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-wider text-ink/70">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pb-3 bg-transparent border-b border-ink/15 text-ink text-sm placeholder-ink/30 focus:border-accent focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-wider text-ink/70">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pb-3 bg-transparent border-b border-ink/15 text-ink text-sm placeholder-ink/30 focus:border-accent focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="flex flex-col gap-2 text-left">
                    <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-wider text-ink/70">Project Details</label>
                    <textarea
                      id="message"
                      rows="3"
                      placeholder="Tell us about your project or idea..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pb-3 bg-transparent border-b border-ink/15 text-ink text-sm placeholder-ink/30 resize-none focus:border-accent focus:outline-none transition-colors duration-200"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-accent text-white font-bold text-xs hover:bg-accent-dark shadow-[0_12px_30px_rgba(62,44,35,0.12)] hover:shadow-[0_18px_40px_rgba(62,44,35,0.18)] transition-all duration-300"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
