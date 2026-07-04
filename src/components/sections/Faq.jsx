import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FAQS = [
  {
    q: 'What services does your agency offer?',
    a: 'We provide end-to-end digital solutions including custom web design & development (React, Next.js, WordPress, Shopify), native & cross-platform mobile application development, full brand identity packages, UI/UX research, and data-driven digital growth strategies.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary by complexity. Standard landing pages or corporate sites usually take 3-4 weeks. Larger custom applications, e-commerce platforms, or full product design scopes typically span 6-12 weeks, including wireframing, styling, build, and QA.',
  },
  {
    q: 'Do you offer custom designs, or do you use templates?',
    a: 'We design and build every single project completely from scratch. No templates, no pre-built themes, ever. This ensures your brand is unique, performs lightning-fast, and is fully tailored to your conversion goals.',
  },
  {
    q: 'What is the cost of a project?',
    a: 'We operate on a transparent, flat-rate monthly subscription model or provide upfront, fixed project quotes. There are no hidden fees, scope-creep surcharges, or hourly surprises. Explore our pricing plans or book a free call to get a tailored estimate.',
  },
  {
    q: 'Do you provide ongoing support after project completion?',
    a: 'Yes, we provide thorough post-launch support and handoff. We offer paused or ongoing retainer plans for continuous feature iterations, SEO monitoring, CMS maintenance, and priority bug support so you are never left in the dark.',
  },
]

export default function Faq() {
  const ref = useRef(null)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-hd > *',
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.faq-hd', start: 'top 82%', once: true }
        }
      )
      gsap.fromTo('.faq-item',
        { opacity: 0, y: 35 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.faq-list', start: 'top 78%', once: true }
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section ref={ref} id="faq" className="py-28 lg:py-36 bg-bgc border-b border-bdr">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
          
          {/* Header left */}
          <div className="faq-hd lg:col-span-5 flex flex-col gap-5 pr-0 lg:pr-8">
            <div>
              <span className="eyebrow">Support</span>
              <h2 className="font-display font-extrabold text-ink leading-tight break-words" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Frequently<br />Asked Questions
              </h2>
            </div>
            <p className="text-muted text-base max-w-xs leading-relaxed">
              Have a different question? Don't hesitate to reach out — we respond to all inquiries within 24 hours.
            </p>
          </div>

          {/* Accordion right */}
          <div className="faq-list lg:col-span-7 flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`faq-item glass-card-liquid rounded-2xl transition-all duration-300 ${
                    isOpen ? 'border-accent/30 bg-accent-soft/5' : ''
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-ink text-base md:text-lg">
                      {faq.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border border-bdr bg-surface flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 border-accent/20 bg-accent-soft/10' : ''
                      }`}
                    >
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        stroke={isOpen ? 'var(--color-accent)' : 'var(--color-ink)'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 1l4 4 4-4" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: isOpen ? '250px' : '0px',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="px-6 pb-6 text-muted text-sm leading-relaxed border-t border-bdr/50 pt-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
