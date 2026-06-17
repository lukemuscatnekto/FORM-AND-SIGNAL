import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { DURATION, GSAP_EASE } from '../../lib/animations'
import { gsap, isMotionEnabled, ScrollTrigger } from '../../lib/gsap'
import { ProcessTimeline } from '../ui/ProcessTimeline'

export function Process() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!isMotionEnabled() || !sectionRef.current) return

      const root = sectionRef.current
      const steps = root.querySelectorAll('.process-step')
      const horizontalLine = root.querySelector('.process-line-h') as SVGLineElement | null
      const verticalLine = root.querySelector('.process-line-v') as SVGLineElement | null

      gsap.from(steps, {
        opacity: 0,
        y: 40,
        duration: DURATION.normal,
        ease: GSAP_EASE,
        stagger: 0.2,
        scrollTrigger: {
          trigger: root,
          start: 'top 85%',
          once: true,
        },
      })

      const animateLine = (line: SVGLineElement | null) => {
        if (!line) return
        const length = line.getTotalLength()
        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
        })
        gsap.to(line, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top 85%',
            end: 'bottom 60%',
            scrub: true,
          },
        })
      }

      animateLine(horizontalLine)
      animateLine(verticalLine)

      root.querySelectorAll('.process-step-node').forEach((node) => {
        ScrollTrigger.create({
          trigger: node,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.fromTo(
              node,
              { scale: 1 },
              {
                scale: 1.1,
                duration: 0.2,
                ease: GSAP_EASE,
                yoyo: true,
                repeat: 1,
              },
            )
          },
        })
      })
    },
    { scope: sectionRef },
  )

  return (
    <section id="process" ref={sectionRef} className="section-padding scroll-mt-20 bg-canvas">
      <div className="container-wide">
        <div className="mb-10">
          <p className="label-sm">How we work</p>
          <h2 className="heading-section mt-4">From first signal to final launch</h2>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:p-12">
          <ProcessTimeline />
        </div>
      </div>
    </section>
  )
}
