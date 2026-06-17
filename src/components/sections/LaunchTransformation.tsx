import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { launchTransformation } from '../../data/launchTransformation'
import { siteLinks } from '../../data/site'
import { DURATION, GSAP_EASE } from '../../lib/animations'
import { gsap, isMotionEnabled, ScrollTrigger } from '../../lib/gsap'
import { Button } from '../ui/Button'
import { TextHighlight } from '../ui/TextHighlight'

function AfterIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="mt-0.5 h-4 w-4 shrink-0 text-[#4C6BFF]"
    >
      <path
        d="M3.5 8.25 6.5 11.25 12.5 4.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function LaunchTransformation() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!isMotionEnabled() || !sectionRef.current) return

      const cards = sectionRef.current.querySelectorAll('.transformation-card')
      gsap.from(cards, {
        opacity: 0,
        y: 40,
        duration: DURATION.normal,
        ease: GSAP_EASE,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })

      const afterCard = sectionRef.current.querySelector('.after-card')
      if (afterCard) {
        const checks = afterCard.querySelectorAll('.after-check')
        const border = afterCard.querySelector('.after-border-draw')

        gsap.set(checks, { scale: 0, opacity: 0 })
        if (border) gsap.set(border, { scaleY: 0 })

        ScrollTrigger.create({
          trigger: afterCard,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to(checks, {
              scale: 1,
              opacity: 1,
              duration: 0.2,
              stagger: 0.1,
              ease: GSAP_EASE,
            })
            if (border) {
              gsap.to(border, {
                scaleY: 1,
                duration: DURATION.reveal,
                ease: GSAP_EASE,
              })
            }
          },
        })
      }
      const founding = sectionRef.current.querySelector('.founding-rate-block')
      if (founding) {
        gsap.from(founding, {
          opacity: 0,
          y: 24,
          duration: DURATION.reveal,
          ease: GSAP_EASE,
          scrollTrigger: {
            trigger: founding,
            start: 'top 85%',
            once: true,
          },
        })
      }
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="section-padding bg-canvas">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Launch like you <TextHighlight>{launchTransformation.titleHighlight}</TextHighlight>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-[#8A8A93]">
            {launchTransformation.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6 lg:mt-12">
          <article className="transformation-card rounded-2xl border border-white/[0.06] bg-[#141419] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#8A8A93]">
              {launchTransformation.before.label}
            </p>
            <ul className="mt-5">
              {launchTransformation.before.items.map((item, index) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 py-2.5 text-base leading-relaxed text-[#A2A8B3] ${
                    index < launchTransformation.before.items.length - 1
                      ? 'border-b border-white/[0.04]'
                      : ''
                  }`}
                >
                  <span className="select-none text-[#8A8A93]" aria-hidden="true">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="after-card transformation-card relative overflow-hidden rounded-2xl border border-white/[0.06] border-l-2 border-l-[#4C6BFF] bg-[#141419] p-6 md:p-8">
            <span
              className="after-border-draw pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-top bg-[#4C6BFF]"
              aria-hidden="true"
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4C6BFF]">
              {launchTransformation.after.label}
            </p>
            <ul className="mt-5">
              {launchTransformation.after.items.map((item, index) => (
                <li
                  key={item}
                  className={`flex gap-3 py-2 text-base leading-relaxed text-[#F2F2F3] ${
                    index < launchTransformation.after.items.length - 1
                      ? 'border-b border-white/[0.04]'
                      : ''
                  }`}
                >
                  <span className="after-check inline-flex shrink-0">
                    <AfterIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="founding-rate-block mt-10 text-center md:mt-12">
          <span className="animate-founding-pulse mb-4 inline-flex items-center gap-2 rounded-full border border-[#4C6BFF]/20 bg-[#4C6BFF]/10 px-4 py-2 text-sm font-medium text-[#4C6BFF]">
            {launchTransformation.foundingRate.badge}
          </span>

          <h3 className="text-2xl font-bold text-white md:text-3xl">
            {launchTransformation.foundingRate.headline}
          </h3>

          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-[#8A8A93]">
            {launchTransformation.foundingRate.copy}
          </p>

          <p className="mx-auto mt-2 max-w-md text-base leading-relaxed text-[#8A8A93]">
            {launchTransformation.foundingRate.standardPricing}
          </p>

          <p className="mt-6 text-sm">
            <span className="font-medium text-[#F2F2F3]">
              {launchTransformation.foundingRate.scarcityLabel}
            </span>
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:items-center">
            <Button
              href={siteLinks.foundingContact}
              className="w-full px-8 py-3.5 transition-transform duration-200 hover:scale-105 sm:w-auto"
            >
              {launchTransformation.foundingRate.ctaLabel}
            </Button>
            <p className="text-[13px] text-[#6B7280]">
              {launchTransformation.foundingRate.ctaHelper}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
