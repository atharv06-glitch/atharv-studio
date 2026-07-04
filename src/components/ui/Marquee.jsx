import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const ITEMS = [
  'App Development', 'Web Development', 'UI / UX Design',
  'Shopify', 'WordPress', 'Digital Strategy',
  'Brand Identity', 'Mobile Apps', 'E-Commerce', 'Performance SEO',
]

export default function Marquee() {
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    /* ── FIX: simple repeat loop — no modifiers/wrap needed ── */
    const anim = gsap.to(track, {
      x: '-50%',          // move left by exactly half (two identical sets)
      duration: 30,
      ease: 'none',
      repeat: -1,         // loop forever
    })

    return () => anim.kill()
  }, [])

  /* Render items TWICE so the loop is seamless */
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div
      className="bg-bdr overflow-hidden py-4"
      aria-hidden="true"
      style={{ userSelect: 'none' }}
    >
      <div ref={trackRef} className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center shrink-0 text-[11px] font-mono text-ink uppercase tracking-widest px-6"
          >
            <span className="text-accent mr-5 text-xs">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
