import { useGSAP } from '@gsap/react'
import { Clock, MapPin } from 'lucide-react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import heroBgNormal from '../../assets/form-signal-hero-background.png'
import heroBgUpsideDown from '../../assets/form-signal-hero-background-upside-down.png'
import logoMark from '../../assets/form-signal-logo-transparent.png'
import { FOUNDING_CONFIG } from '../../data/pricing'
import { workProjects } from '../../data/work'
import { getPrimaryCtaHref, getPrimaryCtaLabel, getSecondaryCtaHref, getSecondaryCtaLabel } from '../../data/site'
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion'
import { GSAP_EASE } from '../../lib/animations'
import { gsap, isMotionEnabled } from '../../lib/gsap'
import { Magnetic } from '../motion/Magnetic'
import { Button } from '../ui/Button'
import { HeroHeadline } from './HeroHeadline'

const heroShowcaseProjects = workProjects.filter((project) =>
  ['driven-gloss', 'master-of-detailing'].includes(project.slug),
)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const showcaseRef = useRef<HTMLDivElement>(null)
  const reduceMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (!isMotionEnabled() || reduceMotion || !showcaseRef.current) return

      gsap.fromTo(
        showcaseRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          ease: GSAP_EASE,
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: 'top 85%',
            end: 'top 45%',
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
      <img
        src={heroBgUpsideDown}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[82vh] w-full object-cover object-[center_42%] opacity-85"
      />
      <img
        src={heroBgNormal}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[105vh] w-full object-cover object-[center_78%] opacity-85"
      />

      <div
        className="absolute inset-x-0 top-[55vh] h-[45vh] bg-gradient-to-b from-transparent via-black/25 to-transparent"
        aria-hidden="true"
      />

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

        <p className="mx-auto mt-6 max-w-lg text-base leading-[1.75] text-ink-muted md:text-lg">
          FORM & SIGNAL is a digital launch studio. We build the branding, websites and content that
          make small brands, startups and local businesses look credible and ready to grow.
        </p>

        <div className="relative mt-8 w-full">
          <div
            className="pointer-events-none absolute inset-x-8 -inset-y-6 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgb(76_107_255_/_0.1),transparent_72%)]"
            aria-hidden="true"
          />
          <div className="relative flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Magnetic className="w-full sm:flex-1">
              <Button to={getPrimaryCtaHref()} className="btn-primary-shadow w-full">
                {getPrimaryCtaLabel()}
              </Button>
            </Magnetic>
            <Magnetic className="w-full sm:flex-1">
              <Button
                href={getSecondaryCtaHref()}
                variant="secondary"
                showArrow={false}
                className="w-full"
              >
                {getSecondaryCtaLabel()}
              </Button>
            </Magnetic>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-ink-muted">2 businesses launched</span>
          </div>
          <span className="hidden h-3 w-px bg-border sm:block" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-ink-soft" aria-hidden="true" />
            <span className="text-xs font-medium text-ink-muted">Malta-based</span>
          </div>
          <span className="hidden h-3 w-px bg-border sm:block" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <Clock className="h-3 w-3 text-ink-soft" aria-hidden="true" />
            <span className="text-xs font-medium text-ink-muted">5-day delivery</span>
          </div>
          <span className="hidden h-3 w-px bg-border sm:block" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-accent"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-accent">
              {FOUNDING_CONFIG.spotsRemaining} founding spots left
            </span>
          </div>
        </div>

        <div ref={showcaseRef} className="mx-auto mt-16 w-full max-w-3xl md:mt-20 lg:mt-24">
          <p className="text-sm text-ink-muted">Recent launches — built as the case studies.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {heroShowcaseProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="card-interactive overflow-hidden rounded-xl border border-border bg-surface text-left transition-[border-color] duration-200 hover:border-border-strong"
              >
                <img
                  src={project.preview}
                  alt={`${project.title} website preview`}
                  className="h-40 w-full object-cover"
                  style={{ objectPosition: project.objectPosition }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-4">
                  <p className="text-sm font-semibold text-ink">{project.title}</p>
                  <p className="mt-1 text-xs text-ink-muted">
                    {project.status === 'Live' ? 'Live site' : project.statusDetail}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              See our work
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
