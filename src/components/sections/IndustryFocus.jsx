import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ShoppingBag, Rocket, HeartPulse, Hotel, Dumbbell, Building2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const INDUSTRIES = [
  {
    title: 'E-Commerce',
    desc: 'High-converting storefronts built for scale and seamless user journeys.',
    icon: ShoppingBag,
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SaaS & Startups',
    desc: 'Sleek marketing sites and dashboards that communicate complex value.',
    icon: Rocket,
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Healthcare',
    desc: 'Trustworthy, accessible platforms for patients and providers.',
    icon: HeartPulse,
    img: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Hospitality',
    desc: 'Premium booking experiences that showcase luxury and drive reservations.',
    icon: Hotel,
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Fitness',
    desc: 'High-energy digital presences that convert visitors into loyal members.',
    icon: Dumbbell,
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Real Estate',
    desc: 'Property showcases with interactive visual clarity and elegant layouts.',
    icon: Building2,
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
  }
]

export default function IndustryFocus() {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      
      mm.add("(min-width: 1024px)", () => {
        const scrollContainer = scrollRef.current;
        
        gsap.to(scrollContainer, {
          x: () => -(scrollContainer.scrollWidth - window.innerWidth) + "px",
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: 'center center',
            end: () => "+=" + (scrollContainer.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true
          }
        })
      });
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="lg:h-screen w-full bg-ink text-bgc overflow-hidden flex flex-col justify-center relative py-24 lg:py-0">
      
      {/* Section Header */}
      <div className="lg:absolute top-12 md:top-24 left-6 md:left-12 lg:left-24 z-10 px-6 lg:px-0 mb-8 lg:mb-0">
        <span className="text-accent font-mono text-sm uppercase tracking-widest font-semibold block mb-4">
          Who We Help
        </span>
        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-tight">
          Industries we <br className="hidden md:block"/> <span className="text-transparent" style={{ WebkitTextStroke: '1px var(--color-bgc)' }}>master.</span>
        </h2>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="w-full overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar pb-6 lg:pb-0">
        <div ref={scrollRef} className="flex flex-nowrap w-max items-center lg:mt-32 px-6 lg:px-[10vw]">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon
            return (
              <div 
                key={i} 
                className="w-[85vw] md:w-[60vw] lg:w-[30vw] h-[50vh] lg:h-[55vh] flex-shrink-0 mr-6 lg:mr-12 relative group rounded-3xl overflow-hidden snap-center"
              >
                {/* Image Background */}
                <img 
                  src={ind.img} 
                  alt={ind.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-6 group-hover:-translate-y-4 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="transform lg:translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-white mb-3">{ind.title}</h3>
                    <p className="text-white/80 text-base lg:text-lg leading-relaxed lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 lg:delay-100">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}
