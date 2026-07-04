import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const VALUES = [
  {
    title: 'Design-Driven',
    desc: 'We believe aesthetics drive conversions. Every pixel is placed with intent, ensuring your digital presence feels premium and trustworthy.'
  },
  {
    title: 'Performance-Obsessed',
    desc: 'Speed is a feature, not an afterthought. We optimize rendering, animations, and assets so your product loads instantly on any device.'
  },
  {
    title: 'Future-Proof',
    desc: 'We build on scalable, modern architectures. Clean code and proper documentation mean your platform can grow effortlessly.'
  }
]

export default function CoreValues() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.value-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%'
          }
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-24 lg:py-40 bg-bgc border-y border-bdr">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="mb-20">
          <span className="eyebrow">Philosophy</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight max-w-3xl">
            How we approach building digital products.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {VALUES.map((val, i) => (
            <div key={i} className="value-card group">
              <div className="w-12 h-12 rounded-full bg-accent-soft text-accent flex items-center justify-center font-display font-bold text-xl mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                0{i + 1}
              </div>
              <h3 className="font-display font-bold text-2xl text-ink mb-4">{val.title}</h3>
              <p className="text-muted leading-relaxed text-lg">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
