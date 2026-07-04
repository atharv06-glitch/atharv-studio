import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEO from '../components/ui/SEO'
import PageHero from '../components/ui/PageHero'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const containerRef = useRef(null)
  const horizontalSectionRef = useRef(null)
  const scrollTweenRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Removed custom hero animations

      // 2. Image Clip-path Reveal
      const revealImages = document.querySelectorAll('.reveal-image')
      revealImages.forEach((img) => {
        gsap.fromTo(img, 
          { clipPath: 'inset(100% 0 0 0)' },
          { 
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.5,
            ease: 'power4.inOut',
            scrollTrigger: {
              trigger: img,
              start: 'top 85%',
            }
          }
        )
      })

      // 3. Horizontal Scroll
      const horizontalContent = document.querySelector('.horizontal-content')
      const panels = gsap.utils.toArray('.horizontal-panel')
      
      let mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        if (horizontalContent && horizontalSectionRef.current) {
          scrollTweenRef.current = gsap.to(horizontalContent, {
            x: () => -(horizontalContent.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
              trigger: horizontalSectionRef.current,
              pin: true,
              scrub: 1,
              snap: 1 / (panels.length - 1),
              start: 'top top',
              end: () => '+=' + (horizontalContent.scrollWidth - window.innerWidth),
              invalidateOnRefresh: true,
            }
          })
        }
      });

      // Text fade ups
      gsap.utils.toArray('.fade-up').forEach((elem) => {
        gsap.fromTo(elem,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%'
            }
          }
        )
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={containerRef} className="bg-bgc overflow-x-hidden text-ink">
      <SEO title="About Us" description="Learn more about Atharv Studio." />
      
      <PageHero 
        eyebrow="About Us"
        title="Building Digital Ecosystems"
        subtitle="From Design to Deployment. We engineer premium experiences that elevate your brand."
        ghostText="ABOUT"
      />

      {/* 2. Who We Are (Asymmetrical Grid & Reveal) */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-surface">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Modern office architecture" 
              className="reveal-image w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-start gap-8 fade-up">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-ink">Who We Are</h2>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              We are a dedicated, two-person digital studio specializing in high-performance web architecture and premium aesthetics. By operating as a highly focused duo, we combine technical precision with striking visual design to help brands establish a commanding online presence. 
            </p>
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              At <span className="font-display font-bold text-ink">Atharv studio</span>, we believe that the most powerful digital products come from hands-on, meticulous craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Horizontal Scroll (What We Do) */}
      <section ref={horizontalSectionRef} className="bg-surface lg:h-[100svh] flex flex-col lg:flex-row items-center overflow-hidden border-y border-bdr">
        <div className="horizontal-content flex flex-col lg:flex-row h-full w-full lg:w-[300vw]">
          
          {/* Panel 1 */}
          <div className="horizontal-panel w-full lg:w-screen h-auto lg:h-full flex flex-col justify-center px-6 lg:px-24 relative py-20 lg:py-0 border-b border-bdr lg:border-none">
            <div className="lg:absolute lg:top-32 lg:left-24 mb-10 lg:mb-0">
              <span className="font-mono text-sm tracking-widest uppercase text-accent font-semibold">Our Capabilities</span>
            </div>
            <div className="max-w-4xl relative">
              <span className="font-display text-accent text-[8rem] md:text-[14rem] font-extrabold leading-none opacity-[0.04] absolute -top-12 -left-4 md:-top-24 md:-left-12 -z-10">01</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl md:text-7xl text-ink mb-6 mt-4 lg:mt-0">Custom Web Development</h2>
              <p className="text-muted text-lg md:text-xl md:text-2xl leading-relaxed max-w-2xl">
                Architecting robust Full-Stack platforms and bespoke environments using WordPress and Shopify. We manage the entire digital lifecycle, ensuring every touchpoint is optimized for speed, scalability, and user engagement.
              </p>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="horizontal-panel w-full lg:w-screen h-auto lg:h-full flex flex-col justify-center px-6 lg:px-24 relative py-20 lg:py-0 border-b border-bdr lg:border-none">
            <div className="max-w-4xl relative">
              <span className="font-display text-accent text-[8rem] md:text-[14rem] font-extrabold leading-none opacity-[0.04] absolute -top-12 -left-4 md:-top-24 md:-left-12 -z-10">02</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl md:text-7xl text-ink mb-6 mt-4 lg:mt-0">Premium UI Design</h2>
              <p className="text-muted text-lg md:text-xl md:text-2xl leading-relaxed max-w-2xl">
                Crafting clean, minimal, and high-end user interfaces that elevate your brand's digital identity. Every pixel is placed with intention to create experiences that are both visually stunning and highly intuitive.
              </p>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="horizontal-panel w-full lg:w-screen h-auto lg:h-full flex flex-col justify-center px-6 lg:px-24 relative py-20 lg:py-0">
            <div className="max-w-4xl relative">
              <span className="font-display text-accent text-[8rem] md:text-[14rem] font-extrabold leading-none opacity-[0.04] absolute -top-12 -left-4 md:-top-24 md:-left-12 -z-10">03</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl md:text-7xl text-ink mb-6 mt-4 lg:mt-0">Search & Visibility</h2>
              <p className="text-muted text-lg md:text-xl md:text-2xl leading-relaxed max-w-2xl">
                Implementing strategic SEO listings and optimizations to ensure your platform gets discovered by the right audience. A beautiful website is only effective if people can actually find it.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. The Advantage (Split Layout) */}
      <section className="py-24 lg:py-40 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col items-start gap-8 fade-up">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-ink">The Advantage</h2>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              Because we are a compact team of two, our clients get direct, unfiltered access to the developers and designers actually building their products. 
            </p>
            <p className="text-muted text-lg md:text-xl leading-relaxed">
              There is no middle management and no bloated timelines—just efficient, high-end digital engineering tailored to your specific goals.
            </p>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-surface">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
              alt="Minimalist building architecture" 
              className="reveal-image w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

    </main>
  )
}
