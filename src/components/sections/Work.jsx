import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import { Link } from 'react-router-dom'
import { PROJECTS } from '../../data/projects'

export default function Work() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.work-item').forEach((item) => {
        const img = item.querySelector('.work-img')
        const content = item.querySelector('.work-content')
        
        // Clip-path reveal for image container
        gsap.fromTo(item, 
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 1.5, ease: 'power4.inOut', scrollTrigger: { trigger: item, start: 'top 85%' } }
        )

        // Parallax zoom for image inside container
        gsap.fromTo(img,
          { scale: 1.2 },
          { scale: 1, ease: 'none', scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true } }
        )

        // Slide up content
        gsap.fromTo(content,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 80%' } }
        )
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="work" className="py-24 lg:py-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="mb-16 lg:mb-24">
          <span className="bg-ink text-bgc px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold inline-block mb-6">
            Featured Work
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-ink">
            Selected Projects.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS.map((p, i) => (
            <Link 
              to={`/portfolio/${p.id}`}
              key={p.id} 
              className={`work-item group relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square lg:aspect-[4/5] block cursor-none ${i % 2 !== 0 ? 'md:mt-16 lg:mt-24' : ''}`}
            >
              <img src={p.img} alt={p.title} className="work-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="work-content absolute bottom-0 left-0 p-8 md:p-10 w-full">
                <span className="text-white/80 font-mono text-xs lg:text-sm uppercase tracking-widest mb-3 block">{p.type}</span>
                <h3 className="font-display font-bold text-2xl lg:text-4xl text-white">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
