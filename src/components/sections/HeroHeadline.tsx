import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { DUR, GSAP_EASE } from '../../lib/animations'
import { gsap, isMotionEnabled } from '../../lib/gsap'
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion'

export function HeroHeadline() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const reduceMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (!isMotionEnabled() || reduceMotion || !headlineRef.current) return

      const lines = headlineRef.current.querySelectorAll('.hero-line-inner')

      const timeline = gsap.timeline({ delay: 0.12 })

      timeline.fromTo(
        lines,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: DUR.slow,
          ease: GSAP_EASE,
          stagger: 0.08,
        },
      )

      return () => {
        timeline.kill()
      }
    },
    { scope: headlineRef, dependencies: [reduceMotion] },
  )

  return (
    <h1
      ref={headlineRef}
      className="mx-auto max-w-3xl overflow-visible text-4xl font-bold leading-[1.12] text-white md:text-5xl md:leading-[1.1] lg:text-6xl"
    >
      <span className="block overflow-hidden">
        <span className="hero-line-inner block">Look established the day you</span>
      </span>
      <span className="block overflow-hidden pb-2">
        <span className="hero-line-inner block overflow-visible">
          <span
            className="inline-block overflow-visible pb-2 text-[#4F7CFF] italic font-medium leading-[1.08] tracking-[-0.035em] no-underline decoration-transparent"
            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
          >
            go live
          </span>
        </span>
      </span>
    </h1>
  )
}
