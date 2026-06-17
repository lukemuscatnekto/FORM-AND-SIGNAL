import { useGSAP } from '@gsap/react'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { DURATION, GSAP_EASE } from '../../lib/animations'
import { gsap, isMotionEnabled } from '../../lib/gsap'

type FadeInProps = {
  children: ReactNode
  className?: string
  y?: number
  duration?: number
  start?: string
  delay?: number
}

export function FadeIn({
  children,
  className = '',
  y = 20,
  duration = DURATION.reveal,
  start = 'top 75%',
  delay = 0,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!isMotionEnabled() || !ref.current) return

      gsap.from(ref.current, {
        opacity: 0,
        y,
        duration,
        delay,
        ease: GSAP_EASE,
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
