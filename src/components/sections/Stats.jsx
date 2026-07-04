import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: 120, label: 'Projects Completed', suffix: '+' },
  { value: 15, label: 'Awards Won', suffix: '' },
  { value: 99, label: 'Client Satisfaction', suffix: '%' },
  { value: 5, label: 'Years of Experience', suffix: '+' },
]

export default function Stats() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = document.querySelectorAll('.stat-counter')
      
      gsap.fromTo('.stat-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            once: true
          }
        }
      )

      counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'))
        
        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: target,
              duration: 2,
              snap: { innerHTML: 1 },
              ease: 'power3.out',
              onUpdate: function() {
                counter.innerHTML = Math.ceil(this.targets()[0].innerHTML)
              }
            })
          }
        })
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-surface border-y border-bdr">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-ink text-bgc px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold">
                Stats & Facts
              </span>
              <div className="h-px bg-bdr flex-1"></div>
            </div>
            <h2 className="font-display font-bold text-ink text-3xl md:text-4xl leading-tight mb-4">
              High quality web design solutions you can trust.
            </h2>
            <p className="text-muted text-base leading-relaxed">
              We focus on building digital experiences that drive real results. From startup launches to enterprise platforms, we deliver excellence.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 w-full">
            {STATS.map((stat, i) => (
              <div key={i} className="stat-item flex flex-col gap-2">
                <div className="flex items-baseline gap-1">
                  <span 
                    className="stat-counter font-display font-extrabold text-ink text-5xl md:text-6xl"
                    data-target={stat.value}
                  >
                    0
                  </span>
                  <span className="font-display font-bold text-accent text-4xl">{stat.suffix}</span>
                </div>
                <span className="text-muted text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
