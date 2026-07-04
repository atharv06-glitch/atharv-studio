import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const text = "We don't just build websites. We engineer digital ecosystems that merge striking aesthetics with uncompromising performance. Every pixel placed, every line of code written, is done with deliberate intent to elevate your brand."

export default function Approach() {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.reveal-word', 
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'bottom 70%',
            scrub: true,
          }
        }
      )
    }, containerRef)
    
    return () => ctx.revert()
  }, [])
  
  return (
    <section ref={containerRef} className="py-32 lg:py-48 bg-surface border-y border-bdr">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-px bg-accent"></span>
          <span className="font-mono text-sm uppercase tracking-widest text-accent font-semibold">The Philosophy</span>
        </div>
        <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl leading-relaxed text-ink max-w-4xl">
          {text.split(' ').map((word, i) => (
            <span key={i} className="reveal-word inline-block mr-[1ch]">
              {word}
            </span>
          ))}
        </h2>
      </div>
    </section>
  )
}
