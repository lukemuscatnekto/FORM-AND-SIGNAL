import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { launchTransformation } from '../../data/launchTransformation'
import {
  FOUNDING_CONFIG,
  FOUNDING_PRICING_LINK,
  getFoundingCopy,
  getFoundingCtaNote,
  getFoundingHeadline,
  getFoundingStandardPricing,
} from '../../data/pricing'
import { DURATION, GSAP_EASE } from '../../lib/animations'
import { gsap, isMotionEnabled, ScrollTrigger } from '../../lib/gsap'
import { Button } from '../ui/Button'
import { TextHighlight } from '../ui/TextHighlight'

function AfterIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
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
          <h2 className="heading-section text-ink">
            Launch like you <TextHighlight>{launchTransformation.titleHighlight}</TextHighlight>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-ink-muted">
            {launchTransformation.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6 lg:mt-12">
          <article className="transformation-card card-soft p-6 md:p-8">
            <p className="label-sm">{launchTransformation.before.label}</p>
            <ul className="mt-5">
              {launchTransformation.before.items.map((item, index) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 py-2.5 text-base leading-relaxed text-ink-muted ${
                    index < launchTransformation.before.items.length - 1
                      ? 'border-b border-border'
                      : ''
                  }`}
                >
                  <span className="select-none text-ink-soft" aria-hidden="true">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="after-card transformation-card relative overflow-hidden rounded-2xl border border-border border-l-2 border-l-accent bg-surface p-6 md:p-8">
            <span
              className="after-border-draw pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-top bg-accent"
              aria-hidden="true"
            />
            <p className="label-sm text-accent">{launchTransformation.after.label}</p>
            <ul className="mt-5">
              {launchTransformation.after.items.map((item, index) => (
                <li
                  key={item}
                  className={`flex gap-3 py-2 text-base leading-relaxed text-ink ${
                    index < launchTransformation.after.items.length - 1
                      ? 'border-b border-border'
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

        <div className="mt-8 text-center">
          <Link
            to="/work/driven-gloss"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            See how we did this for Driven Gloss
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="founding-rate-block glow-accent mt-10 rounded-2xl border border-border bg-surface p-8 text-center md:mt-12 md:p-10">
          <p className="label-sm text-accent">{FOUNDING_CONFIG.tierTitle}</p>

          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            Founding rate —{' '}
            <motion.span
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              {FOUNDING_CONFIG.spotsRemaining} spots left
            </motion.span>
          </span>

          <h3 className="heading-section mt-6 text-ink">{getFoundingHeadline()}</h3>

          <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-muted">
            {getFoundingCopy()}
          </p>

          <p className="mx-auto mt-2 max-w-md text-base leading-relaxed text-ink-muted">
            {getFoundingStandardPricing()}
          </p>

          <p className="mt-6 text-sm font-medium text-ink">Limited founding spots</p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:items-center">
            <Button href={FOUNDING_PRICING_LINK} className="btn-primary-shadow w-full sm:w-auto">
              Claim a founding spot
            </Button>
            <p className="text-[13px] text-ink-soft">No commitment to enquire.</p>
            <p className="text-xs text-ink-soft">{getFoundingCtaNote()}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
