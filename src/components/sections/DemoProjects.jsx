import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { DEMOS } from '../../data/demos'

gsap.registerPlugin(ScrollTrigger)

export default function DemoProjects() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.demo-item').forEach((item) => {
        const img = item.querySelector('.demo-img')
        const content = item.querySelector('.demo-content')
        
        gsap.fromTo(item, 
          { clipPath: 'inset(100% 0 0 0)' },
          { clipPath: 'inset(0% 0 0 0)', duration: 1.5, ease: 'power4.inOut', scrollTrigger: { trigger: item, start: 'top 85%' } }
        )

        gsap.fromTo(img,
          { scale: 1.2 },
          { scale: 1, ease: 'none', scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true } }
        )

        gsap.fromTo(content,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 80%' } }
        )
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="demos" className="py-24 lg:py-40 bg-surface border-t border-bdr">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="bg-ink text-bgc px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold inline-block mb-6">
              Live Previews
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-ink">
              Client Demo Projects.
            </h2>
          </div>
          <p className="max-w-sm text-text font-mono text-sm uppercase tracking-wider">
            Explore our high-performance, premium landing pages designed specifically for various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {DEMOS.map((p, i) => (
            <Link 
              to={`/portfolio/${p.id}`}
              key={p.id} 
              className={`demo-item group relative rounded-3xl overflow-hidden aspect-[16/10] md:aspect-square lg:aspect-[4/3] block cursor-pointer ${i % 2 !== 0 ? 'md:mt-16 lg:mt-24' : ''}`}
            >
              <img src={p.img} alt={p.title} className="demo-img absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>
              <div className="demo-content absolute bottom-0 left-0 p-8 md:p-10 w-full">
                <span className="text-white/80 font-mono text-xs lg:text-sm uppercase tracking-widest mb-3 block flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  {p.type}
                </span>
                <h3 className="font-display font-bold text-2xl lg:text-4xl text-white flex items-center gap-4 group-hover:gap-6 transition-all">
                  {p.title} 
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
