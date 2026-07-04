import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value:50,  suffix:'+',  label:'Projects Delivered' },
  { value:98,  suffix:'%',  label:'Client Retention'   },
  { value:3,   suffix:'+',  label:'Years Experience'   },
  { value:24,  suffix:'/7', label:'Support Available'  },
]

const REASONS = [
  { t:'No templates. Ever.',      d:'Every project is custom-designed and custom-built to fit your brand, your users, and your goals.' },
  { t:'End-to-end delivery.',     d:'Design, code, deployment — handled by one team. No hand-off headaches, no lost context.' },
  { t:'Transparent pricing.',     d:'Fixed quotes before we start. No surprise invoices, no scope-creep billing.' },
  { t:'Long-term partnership.',   d:'Post-launch support, iterations, and growth are part of how we work.' },
]

export default function WhyUs() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.why-hd > *',
        { opacity:0, y:28 },
        { opacity:1, y:0, duration:0.8, stagger:0.1, ease:'power3.out',
          scrollTrigger:{ trigger:'.why-hd', start:'top 82%', once:true } }
      )

      /* Counter animation */
      ref.current.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.dataset.val, 10)
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target, duration: 2, ease: 'power2.out',
          snap: { v: 1 },
          onUpdate() { el.textContent = Math.round(obj.v) },
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
        })
      })

      gsap.fromTo('.stat-card',
        { opacity:0, y:35 },
        { opacity:1, y:0, duration:0.8, stagger:0.08, ease:'power3.out',
          scrollTrigger:{ trigger:'.stats-row', start:'top 80%', once:true } }
      )
      gsap.fromTo('.reason-card',
        { opacity:0, y:35 },
        { opacity:1, y:0, duration:0.8, stagger:0.09, ease:'power3.out',
          scrollTrigger:{ trigger:'.reasons-grid', start:'top 78%', once:true } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} id="about" className="py-28 lg:py-36 bg-surface border-y border-bdr">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="why-hd max-w-2xl mb-20">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="font-display font-extrabold text-ink leading-tight mb-5" style={{ fontSize:'clamp(2.2rem,5vw,3.8rem)' }}>
            We Don't Just Build.<br />We Think.
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            Great execution starts with deep understanding. We care about your outcomes, not just deliverables.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-row grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {STATS.map(s => (
            <div key={s.label} className="stat-card glass-card-liquid rounded-2xl p-8 text-center">
              <div className="font-display font-extrabold text-ink leading-none mb-2" style={{ fontSize:'clamp(2.4rem,5vw,3.4rem)' }}>
                <span className="stat-num" data-val={s.value}>0</span>
                <span className="text-accent">{s.suffix}</span>
              </div>
              <p className="text-muted text-sm font-mono">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="reasons-grid grid grid-cols-1 sm:grid-cols-2 gap-5">
          {REASONS.map((r, i) => (
            <div key={i} className="reason-card glass-card-liquid flex gap-5 rounded-2xl p-8">
              <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-accent-soft flex items-center justify-center">
                <svg width="12" height="12" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 12 12">
                  <path d="M2 6l3 3 5-5"/>
                </svg>
              </div>
              <div>
                <h3 className="font-display font-bold text-ink text-lg mb-2">{r.t}</h3>
                <p className="text-muted text-sm leading-relaxed">{r.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
