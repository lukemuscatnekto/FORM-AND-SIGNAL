import { useGSAP } from '@gsap/react'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { gsap, isMotionEnabled, ScrollTrigger } from '../../lib/gsap'

type ParallaxProps = {
  children: ReactNode
  className?: string
  yFrom?: number
  yTo?: number
  end?: string
  scrub?: boolean | number
}

export function Parallax({
  children,
  className = '',
  yFrom = 30,
  yTo = -30,
  end = '500px top',
  scrub = true,
}: ParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!isMotionEnabled() || !containerRef.current || !targetRef.current) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        gsap.fromTo(
          targetRef.current,
          { y: yFrom },
          {
            y: yTo,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end,
              scrub,
            },
          },
        )
      })

      return () => mm.revert()
    },
    { scope: containerRef, dependencies: [yFrom, yTo, end] },
  )

  return (
    <div ref={containerRef} className={className}>
      <div ref={targetRef}>{children}</div>
    </div>
  )
}
