import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    /* ── FIX: quickTo needs one axis per call, not a 'css' object ── */
    const dotX  = gsap.quickTo(dot,  'left', { duration: 0.08, ease: 'none' })
    const dotY  = gsap.quickTo(dot,  'top',  { duration: 0.08, ease: 'none' })
    const ringX = gsap.quickTo(ring, 'left', { duration: 0.45, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'top',  { duration: 0.45, ease: 'power3.out' })

    const onMove = (e) => {
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }

    const onEnter = () => {
      gsap.to(ring, { scale: 1.8, opacity: 0.5, duration: 0.3 })
      gsap.to(dot,  { scale: 0,   duration: 0.2 })
    }
    const onLeave = () => {
      gsap.to(ring, { scale: 1,  opacity: 1,  duration: 0.3 })
      gsap.to(dot,  { scale: 1,  duration: 0.2 })
    }
    const onDown = () => gsap.to(ring, { scale: 0.75, duration: 0.1 })
    const onUp   = () => gsap.to(ring, { scale: 1,    duration: 0.2 })

    /* Set initial position off-screen until first mouse move */
    gsap.set([dot, ring], { left: -100, top: -100 })

    const targets = document.querySelectorAll('a, button')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', zIndex: 9999, pointerEvents: 'none',
          width: 8, height: 8, borderRadius: '50%',
          background: 'var(--color-accent)',
          transform: 'translate(-50%, -50%)',
          willChange: 'left, top',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', zIndex: 9998, pointerEvents: 'none',
          width: 34, height: 34, borderRadius: '50%',
          border: '1.5px solid var(--color-accent)',
          transform: 'translate(-50%, -50%)',
          opacity: 0.6,
          willChange: 'left, top',
        }}
      />
    </>
  )
}
