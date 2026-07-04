import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STACK = [
  'React', 'Next.js', 'Tailwind CSS', 'GSAP', 'TypeScript', 'Node.js', 
  'Framer Motion', 'Vite', 'Figma', 'AWS', 'Vercel', 'PostgreSQL'
]

export default function TechStack() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.tech-item', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.05, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-24 lg:py-40 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="mb-16 lg:mb-24 text-center max-w-3xl mx-auto">
          <span className="bg-ink text-bgc px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold inline-block mb-6">
            Our Stack
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
            Tools we master.
          </h2>
          <p className="mt-6 text-muted text-lg lg:text-xl">
            We don't just use frameworks; we understand them deeply. Our stack is optimized for performance, scalability, and developer experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-5xl mx-auto">
          {STACK.map((tech, i) => (
            <div 
              key={i} 
              className="tech-item px-6 py-4 rounded-2xl border border-bdr bg-bgc shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-none"
            >
              <span className="font-mono text-lg lg:text-xl font-bold text-ink">{tech}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
