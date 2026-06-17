import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { services } from '../../data/services'
import { LogoMark } from '../ui/Logo'
import { BrandWordmark } from '../ui/BrandWordmark'
import { HeroVisual } from '../ui/HeroVisual'
import { ProcessTimeline } from '../ui/ProcessTimeline'
import { TextHighlight } from '../ui/TextHighlight'
import { MockupTilt } from '../motion/MockupTilt'
import { GSAP_EASE } from '../../lib/animations'
import { gsap, isMotionEnabled } from '../../lib/gsap'

const specPills = ['Satoshi', 'Canela serif', 'Signal waves · 3 arcs', 'F mark · blue dot'] as const

export function LogoConstructionPreview() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!isMotionEnabled() || !rootRef.current) return

      gsap.from(rootRef.current.querySelectorAll('.spec-pill'), {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: GSAP_EASE,
        stagger: 0.08,
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 80%',
          once: true,
        },
      })
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} className="rounded-2xl bg-canvas px-6 py-20 sm:px-8 sm:py-24">
      <div className="relative mx-auto flex max-w-md flex-col items-center">
        <div className="relative flex items-center justify-center">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `
                linear-gradient(rgb(255 255 255 / 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgb(255 255 255 / 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
            }}
            aria-hidden="true"
          />
          <div className="relative flex items-center justify-center p-10 sm:p-12">
            <div className="absolute inset-0 border border-dashed border-white/10" aria-hidden="true" />
            <div
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10"
              aria-hidden="true"
            />
            <div
              className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10"
              aria-hidden="true"
            />
            <LogoMark size="lg" className="relative h-24 w-24 sm:h-32 sm:w-32" />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {specPills.map((pill) => (
            <span
              key={pill}
              className="spec-pill rounded-full border border-border bg-surface px-3 py-1 text-xs text-ink-muted"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function TypographyPreview() {
  return (
    <div className="rounded-2xl bg-canvas p-6 sm:p-8">
      <div className="border-b border-border pb-6">
        <p className="text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
          Look <TextHighlight>established</TextHighlight>
        </p>
      </div>

      <div className="border-b border-border py-6">
        <p className="text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
          From first signal to final launch
        </p>
      </div>

      <div className="border-b border-border py-6">
        <p className="text-sm leading-[1.75] text-ink-muted">
          Satoshi at 14–16px with relaxed line height for clarity across long-form studio copy and
          service descriptions.
        </p>
      </div>

      <div className="border-b border-border py-6">
        <p className="text-2xl text-ink sm:text-3xl">
          Built to look <TextHighlight>established</TextHighlight>
        </p>
        <p className="mt-2 text-sm text-ink-muted">Canela Italic · accent highlights</p>
      </div>

      <div className="flex flex-col gap-4 border-b border-border py-6 sm:flex-row sm:items-baseline sm:gap-6">
        <div className="flex items-baseline gap-4">
          <span className="text-5xl font-semibold text-ink">Aa</span>
          <span className="text-sm text-ink-muted">Satoshi · 400 / 500 / 600 / 700</span>
        </div>
      </div>

      <div className="flex items-baseline gap-4 pt-6">
        <span className="font-serif text-5xl italic text-accent">Aa</span>
        <span className="text-sm text-ink-muted">Canela · Regular Italic</span>
      </div>
    </div>
  )
}

const colorSwatches = [
  { name: 'Canvas', value: '#0B0D12' },
  { name: 'Light', value: '#F2F2F3' },
  { name: 'Muted', value: '#A2A8B3' },
  { name: 'Accent', value: '#4C6BFF' },
] as const

function ColorSwatch({ name, value }: { name: string; value: string }) {
  return (
    <div className="color-swatch overflow-hidden rounded-xl border border-border">
      <div
        className="h-16 sm:h-[4.5rem]"
        style={{ backgroundColor: value }}
        aria-hidden="true"
      />
      <div className="bg-canvas px-3 py-2.5">
        <p className="text-sm font-medium text-ink">{name}</p>
        <p className="mt-0.5 font-mono text-xs text-ink-soft">{value}</p>
      </div>
    </div>
  )
}

export function ColorSystemPreview() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!isMotionEnabled() || !rootRef.current) return

      gsap.from(rootRef.current.querySelectorAll('.color-swatch'), {
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: GSAP_EASE,
        stagger: 0.1,
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 80%',
          once: true,
        },
      })
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} className="grid grid-cols-2 gap-3">
      {colorSwatches.map((swatch) => (
        <ColorSwatch key={swatch.name} {...swatch} />
      ))}
    </div>
  )
}

export function HomepageHeroPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-canvas p-5 shadow-[0_24px_70px_-40px_rgb(76_107_255_/_0.18)] sm:p-6">
      <div className="text-center">
        <p className="label-sm">Now taking on launches for Q3</p>
        <p className="mx-auto mt-4 max-w-[18ch] text-lg font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-xl">
          Look established the day you <TextHighlight>go live</TextHighlight>
        </p>
      </div>
      <MockupTilt className="relative mx-auto mt-6 max-w-[280px]">
        <div className="hero-mockup-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 scale-[0.88] origin-top sm:scale-100">
          <HeroVisual />
        </div>
      </MockupTilt>
    </div>
  )
}

export function ServiceCardsPreview() {
  const featured = services.slice(0, 2)

  return (
    <div className="grid gap-4">
      {featured.map((service) => (
        <article
          key={service.number}
          className="card-interactive flex flex-col border border-border bg-surface p-5 sm:p-6"
        >
          <div className="flex items-start justify-between gap-3">
            <span className="text-sm font-semibold tabular-nums tracking-[0.08em] text-accent">
              {service.number}
            </span>
            <span className="text-lg text-ink-soft" aria-hidden="true">
              →
            </span>
          </div>
          <h3 className="mt-4 text-lg font-bold tracking-[-0.02em] text-ink">{service.title}</h3>
          <p className="mt-2 text-sm leading-[1.75] text-ink-muted">{service.description}</p>
          <div className="mt-5 border-t border-border pt-4">
            <p className="text-[10px] font-semibold tracking-[0.2em] text-ink-soft">
              <span className="uppercase">Outcome</span>
              <span className="text-ink-muted"> · {service.outcome}</span>
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export function ProcessTimelinePreview() {
  return (
    <div className="rounded-2xl border border-border bg-canvas px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
      <ProcessTimeline ringClassName="ring-canvas" />
    </div>
  )
}

export function SocialMockupPreview() {
  return (
    <MockupTilt className="flex items-center justify-center rounded-2xl bg-canvas px-6 py-12 sm:py-16">
      <div className="w-full max-w-[220px] overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
          <LogoMark size="sm" className="h-7 w-7" />
          <div>
            <p className="text-[10px] font-semibold text-ink">formandsignalstudio</p>
            <p className="text-[9px] text-ink-soft">Digital Launch Studio</p>
          </div>
        </div>
        <div className="bg-surface-muted p-4">
          <div className="rounded-xl border border-border bg-canvas p-4">
            <LogoMark size="sm" className="h-10 w-10" />
            <p className="mt-4 text-[10px]">
              <BrandWordmark />
            </p>
            <p className="mt-1 text-[10px] leading-relaxed text-ink-muted">
              Look established the day you go live.
            </p>
            <div className="mt-4 h-16 rounded-lg bg-accent/10" />
          </div>
        </div>
        <div className="flex gap-4 border-t border-border px-4 py-2.5 text-[10px] text-ink-soft">
          <span>♡</span>
          <span>◌</span>
          <span>↗</span>
        </div>
      </div>
    </MockupTilt>
  )
}

export function StationeryMockupPreview() {
  return (
    <MockupTilt className="flex items-center justify-center rounded-2xl bg-canvas px-6 py-12 sm:py-16">
      <div className="w-full max-w-[240px] rotate-[-2deg] rounded-xl border border-border bg-surface p-6 shadow-[0_24px_60px_-30px_rgb(76_107_255_/_0.2)]">
        <LogoMark size="sm" className="h-10 w-10" />
        <p className="mt-5 text-[10px]">
          <BrandWordmark />
        </p>
        <p className="mt-1 text-[10px] text-ink-soft">Digital Launch Studio</p>
        <div className="my-4 h-px bg-border" />
        <p className="text-[10px] leading-relaxed text-ink-muted">
          Established from day one — branding, websites and launch systems built as one coherent
          direction.
        </p>
      </div>
    </MockupTilt>
  )
}

export function DeviceMockupPreview() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-canvas px-4 py-8 sm:px-8">
      <div className="hero-mockup-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <figure className="relative z-10 mx-auto w-full max-w-[720px] md:max-w-[860px]">
        <MockupTilt className="mx-auto w-[80%]">
          <HeroVisual />
        </MockupTilt>
        <figcaption className="mt-4 text-center text-sm text-[#A2A8B3]">
          FORM & SIGNAL — built to look established.
        </figcaption>
      </figure>
    </div>
  )
}
