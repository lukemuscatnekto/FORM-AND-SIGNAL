import { useGSAP } from '@gsap/react'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { DURATION, GSAP_EASE } from '../../lib/animations'
import { gsap, isMotionEnabled } from '../../lib/gsap'

type StaggerChildrenProps = {
  children: ReactNode
  className?: string
  stagger?: number
  y?: number
  scale?: number
  duration?: number
  ease?: string
  start?: string
  childSelector?: string
}

export function StaggerChildren({
  children,
  className = '',
  stagger = 0.1,
  y = 20,
  scale,
  duration = DURATION.reveal,
  ease = GSAP_EASE,
  start = 'top 75%',
  childSelector,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!isMotionEnabled() || !ref.current) return

      const targets = childSelector
        ? ref.current.querySelectorAll(childSelector)
        : ref.current.children

      if (!targets.length) return

      gsap.from(targets, {
        opacity: 0,
        y,
        ...(scale !== undefined ? { scale } : {}),
        duration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: ref.current,
          start,
          once: true,
        },
      })
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
