import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import heroBgNormal from '../../assets/form-signal-hero-background.png'
import heroBgUpsideDown from '../../assets/form-signal-hero-background-upside-down.png'
import logoMark from '../../assets/form-signal-logo-transparent.png'
import {
  getContactHref,
  getPrimaryCtaLabel,
  getSecondaryCtaHref,
  getSecondaryCtaLabel,
  siteConfig,
} from '../../data/site'
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion'
import { GSAP_EASE } from '../../lib/animations'
import { gsap, isMotionEnabled } from '../../lib/gsap'
import { Magnetic } from '../motion/Magnetic'
import { Parallax } from '../motion/Parallax'
import { Button } from '../ui/Button'
import { HeroVisual } from '../ui/HeroVisual'
import { HeroHeadline } from './HeroHeadline'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const figureRef = useRef<HTMLElement>(null)
  const reduceMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (!isMotionEnabled() || reduceMotion || !figureRef.current) return

      const mockup = figureRef.current.querySelector('.hero-mockup-inner')
      if (!mockup) return

      gsap.fromTo(
        mockup,
        { scale: 0.92, y: 40 },
        {
          scale: 1,
          y: 0,
          ease: GSAP_EASE,
          scrollTrigger: {
            trigger: figureRef.current,
            start: 'top 85%',
            end: 'top 35%',
            scrub: true,
          },
        },
      )
    },
    { scope: sectionRef, dependencies: [reduceMotion] },
  )

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[150vh] overflow-hidden bg-black !py-0 text-center"
    >
      {/* Upper upside-down background layer */}
      <img
        src={heroBgUpsideDown}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[82vh] w-full object-cover object-[center_42%] opacity-85"
      />
      {/* Lower normal background layer */}
      <img
        src={heroBgNormal}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[105vh] w-full object-cover object-[center_78%] opacity-85"
      />

      {/* Soft blend between top and bottom images */}
      <div
        className="absolute inset-x-0 top-[55vh] h-[45vh] bg-gradient-to-b from-transparent via-black/25 to-transparent"
        aria-hidden="true"
      />

      {/* Global overlays */}
      <div className="absolute inset-0 bg-black/14" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/18 to-black/55"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[150vh] w-full max-w-7xl flex-col items-center px-6 pb-16 pt-24 md:px-8 md:pt-28 lg:pt-32">
        <p className="text-xs uppercase tracking-[0.35em] text-white/55">
          Now taking on launches for Q3
        </p>

        <img
          src={logoMark}
          alt="FORM & SIGNAL mark"
          width={150}
          height={150}
          decoding="async"
          className="mx-auto mt-10 h-auto w-[110px] object-contain drop-shadow-[0_0_30px_rgba(79,124,255,0.24)] md:mt-12 md:w-[128px] lg:w-[150px]"
        />

        <div className="mt-10 w-full md:mt-12">
          <HeroHeadline />
        </div>

        <p className="mx-auto mt-6 max-w-lg text-base leading-[1.75] text-[#8A8A93] md:text-lg">
          FORM & SIGNAL is a digital launch studio. We build the branding, websites and content that
          make small brands, startups and local businesses look credible and ready to grow.
        </p>

        <div className="relative mt-8 w-full">
          <div
            className="pointer-events-none absolute inset-x-8 -inset-y-6 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgb(76_107_255_/_0.1),transparent_72%)]"
            aria-hidden="true"
          />
          <div className="relative flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Magnetic className="w-full sm:w-auto">
              <Button
                href={getContactHref()}
                external={Boolean(siteConfig.bookingUrl)}
                className="w-full sm:w-auto"
              >
                {getPrimaryCtaLabel()}
              </Button>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <Button
                href={getSecondaryCtaHref()}
                variant="secondary"
                showArrow={false}
                className="w-full sm:w-auto"
              >
                {getSecondaryCtaLabel()}
              </Button>
            </Magnetic>
          </div>
        </div>

        <figure
          ref={figureRef}
          className="relative mx-auto mt-16 w-full max-w-[92vw] md:mt-20 md:max-w-[640px] lg:mt-24 lg:max-w-[760px]"
        >
          <Parallax className="relative w-full">
            <div className="hero-mockup-glow pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="hero-mockup-inner relative z-10 mx-auto w-full max-w-[640px] lg:max-w-[760px]">
              <HeroVisual />
            </div>
          </Parallax>
          <figcaption className="mt-3 text-center text-sm text-[#A2A8B3]">
            Our own launch system — built as the case study.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
