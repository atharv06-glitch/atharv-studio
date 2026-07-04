import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PLANS = [
  {
    name: 'Launch',
    price: '$699',
    period: '/month',
    desc: 'Ideal for startups and boutique businesses taking their first steps online.',
    features: [
      'Competitive research & insights',
      'Wireframing & design concept',
      'Basic analytics & tracking setup',
      'Standard contact form integration',
    ],
    popular: false,
  },
  {
    name: 'Scale',
    price: '$1,699',
    period: '/month',
    desc: 'Perfect for growing brands needing advanced custom setups, animations, and depth.',
    features: [
      'Everything in Launch Plan',
      'Custom design & dev (up to 10 pages)',
      'Liquid glass custom components',
      'Full SEO setup & optimization',
      'Priority email & chat support',
    ],
    popular: true,
  },
  {
    name: 'Elevate',
    price: '$3,499',
    period: '/month',
    desc: 'Best suited for established businesses wanting a fully tailored digital experience.',
    features: [
      'Everything in Scale Plan',
      'Full e-commerce & checkout pipeline',
      'Dynamic custom GSAP animations',
      'Branded newsletter & email templates',
      '12-month post-launch priority support',
    ],
    popular: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.prc-hd > *',
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.prc-hd', start: 'top 82%', once: true }
        }
      )
      gsap.fromTo('.prc-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.prc-grid', start: 'top 78%', once: true }
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="pricing" className="py-28 lg:py-36 bg-bgc border-b border-bdr">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="prc-hd flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="eyebrow">Pricing Plans</span>
            <h2 className="font-display font-extrabold text-ink leading-tight" style={{ fontSize: 'clamp(2.2rem,5vw,3.8rem)' }}>
              Transparent pricing<br />built for your growth
            </h2>
          </div>
          <p className="text-muted text-base max-w-xs leading-relaxed">
            Simple subscription pricing with fixed monthly quotes. Cancel or pause anytime.
          </p>
        </div>

        {/* Grid cards */}
        <div className="prc-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PLANS.map(p => (
            <div
              key={p.name}
              className={`prc-card glass-card-liquid rounded-[1.75rem] p-8 flex flex-col justify-between ${
                p.popular ? 'border-accent/40 bg-accent-soft/10 ring-1 ring-accent/15' : ''
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-ink text-xl">{p.name}</h3>
                  {p.popular && (
                    <span className="inline-flex items-center gap-1 bg-accent text-white font-mono text-[9px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      ✦ Popular
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1.5 mb-5">
                  <span className="font-display font-extrabold text-ink leading-none" style={{ fontSize: 'clamp(2.2rem,4vw,2.8rem)' }}>
                    {p.price}
                  </span>
                  <span className="text-muted text-xs font-mono">{p.period}</span>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-6 pb-6 border-b border-bdr">
                  {p.desc}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <p className="text-xs font-mono uppercase tracking-wider text-ink/65 mb-4">What's Included:</p>
                  <ul className="space-y-3">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5">
                        <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full bg-accent-soft flex items-center justify-center">
                          <svg width="9" height="9" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 12 12">
                            <path d="M2 6l3 3 5-5" />
                          </svg>
                        </span>
                        <span className="text-ink/85 text-xs leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <a
                href="#contact"
                className={`w-100 py-3.5 rounded-full text-center text-xs font-bold transition-all duration-300 ${
                  p.popular
                    ? 'bg-accent text-white hover:bg-accent-dark'
                    : 'border border-bdr bg-surface text-ink hover:border-accent hover:text-accent'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
