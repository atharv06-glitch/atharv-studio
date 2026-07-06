import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const text = "We don't just build websites. We engineer digital ecosystems that merge striking aesthetics with uncompromising performance. Every pixel placed, every line of code written, is done with deliberate intent to elevate your brand."

export default function Approach() {
  const containerRef = useRef(null)
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal animation
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

      // Image reveal and float animation
      gsap.fromTo('.philosophy-img-container',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%'
          }
        }
      )
      
      gsap.to('.philosophy-img', {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

    }, containerRef)
    
    return () => ctx.revert()
  }, [])
  
  return (
    <section ref={containerRef} className="py-32 lg:py-48 bg-surface border-y border-bdr">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-px bg-accent"></span>
            <span className="font-mono text-sm uppercase tracking-widest text-accent font-semibold">The Philosophy</span>
          </div>
          <h2 className="font-display font-medium text-2xl md:text-3xl lg:text-4xl leading-relaxed text-ink">
            {text.split(' ').map((word, i) => (
              <span key={i} className="reveal-word inline-block mr-[1ch]">
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Animated Image (Replace src with your own image or 3D model later) */}
        <div className="flex-1 w-full flex justify-center lg:justify-end philosophy-img-container">
          <div className="relative rounded-3xl overflow-hidden w-full max-w-md aspect-square shadow-2xl">
            <img 
              src="/philosophy_image.png" 
              alt="Philosophy" 
              className="philosophy-img w-full h-full object-cover rounded-2xl"
            />
            {/* Soft glow behind the image */}
            <div className="absolute inset-0 bg-accent/20 blur-3xl -z-10 rounded-full scale-75"></div>
          </div>
        </div>

      </div>
    </section>
  )
}
