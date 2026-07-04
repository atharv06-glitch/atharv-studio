import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null)
  const percentRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Check if already loaded in this session to not annoy users
    const hasLoaded = sessionStorage.getItem('atharv-preloader')
    if (hasLoaded) {
      onComplete()
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('atharv-preloader', 'true')
          onComplete()
        }
      })

      // Simulate loading progress
      const obj = { value: 0 }
      tl.to(obj, {
        value: 100,
        duration: 2,
        ease: 'power3.inOut',
        onUpdate: () => setProgress(Math.round(obj.value))
      })

      // Exit animation
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.2
      })
    }, containerRef)

    return () => ctx.revert()
  }, [onComplete])

  if (sessionStorage.getItem('atharv-preloader')) return null

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-inverted-bg flex flex-col items-center justify-center text-bgc"
    >
      <div className="flex flex-col items-center">
        <span className="font-display font-bold text-6xl lg:text-8xl tracking-tighter mb-4 text-ghost">
          Atharv.
        </span>
        <div className="flex items-center gap-4">
          <div className="w-32 h-[2px] bg-white/20 overflow-hidden relative">
             <div 
               className="absolute top-0 left-0 h-full bg-white transition-all duration-75"
               style={{ width: `${progress}%` }}
             ></div>
          </div>
          <span ref={percentRef} className="font-mono text-sm tracking-widest">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  )
}
