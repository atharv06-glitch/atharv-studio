import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  { id: 1, title: 'Discovery & Strategy', desc: 'We dive deep into your brand, understanding your goals, audience, and market to lay a solid foundation.' },
  { id: 2, title: 'UX/UI Design', desc: 'Wireframing and high-fidelity prototyping to ensure a seamless, engaging user journey that converts.' },
  { id: 3, title: 'Development', desc: 'Writing clean, scalable code. We build robust systems that load fast and perform beautifully.' },
  { id: 4, title: 'Launch & Iterate', desc: 'Thorough QA, smooth deployment, and continuous optimization based on real user data.' }
]

export default function Process() {
  const containerRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the line height
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        { 
          scaleY: 1, 
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: '.process-timeline',
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: true
          }
        }
      )

      // Fade up steps
      gsap.utils.toArray('.process-step').forEach((step, i) => {
        const dot = step.querySelector('.process-dot')
        const content = step.querySelector('.process-content')
        
        // Dot pop
        gsap.fromTo(dot, 
          { scale: 0 }, 
          { scale: 1, duration: 0.5, ease: 'back.out(1.7)', scrollTrigger: { trigger: step, start: 'top 50%' } }
        )
        // Content fade
        gsap.fromTo(content,
          { opacity: 0, x: i % 2 === 0 ? 30 : -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: step, start: 'top 50%' } }
        )
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-24 lg:py-40 bg-bgc">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="mb-24 text-center">
          <span className="bg-ink text-bgc px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold inline-block mb-6">
            Our Process
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-ink">
            How We Work.
          </h2>
        </div>

        <div className="process-timeline relative max-w-4xl mx-auto pb-12">
          {/* Central Line Background */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-bdr -translate-x-1/2 rounded-full"></div>
          {/* Animated SVG Line (Foreground) */}
          <div ref={lineRef} className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-accent -translate-x-1/2 rounded-full z-0"></div>

          <div className="flex flex-col gap-12 lg:gap-24 relative z-10">
            {STEPS.map((s, i) => (
              <div key={s.id} className={`process-step relative flex flex-col md:flex-row items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-bgc border-4 border-accent z-10 process-dot shadow-[0_0_0_8px_var(--color-bgc)]"></div>

                {/* Content */}
                <div className="process-content w-full md:w-1/2 pl-16 md:px-16 pt-0">
                  <div className={`flex flex-col ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="font-mono text-accent text-5xl font-extrabold opacity-20 mb-2">0{s.id}</span>
                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-ink mb-4">{s.title}</h3>
                    <p className="text-muted text-lg leading-relaxed">{s.desc}</p>
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
