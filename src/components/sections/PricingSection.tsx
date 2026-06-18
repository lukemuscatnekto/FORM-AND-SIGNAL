import { motion } from 'framer-motion'
import { Check, Crown, Mail, MessageCircle, Rocket, X, Zap, type LucideIcon } from 'lucide-react'
import { getContactHref, getEmailHref } from '../../data/site'
import {
  FOUNDING_CONFIG,
  getFoundingBadgeLabel,
  getFoundingBottomCtaLine,
  getFoundingDeliveryNote,
  getFoundingUrgencyLine,
} from '../../data/pricing'
import { getWhatsAppHref } from '../../lib/email'
import { Button } from '../ui/Button'
import { TextHighlight } from '../ui/TextHighlight'

const SUBTITLE =
  'Website, Google presence, and Instagram starter pack — built for Malta service businesses that are tired of looking invisible online.'

type TierFeature = {
  text: string
  included: boolean
}

type Tier = {
  id: string
  name: string
  title: string
  desc: string
  price: number
  delivery: string
  icon: LucideIcon
  popular: boolean
  features: TierFeature[]
  cta: string
  variant: 'primary' | 'secondary'
}

type Step = {
  num: string
  title: string
  desc: string
  time: string
}

type ComparisonRow = {
  feature: string
  starter: boolean | string
  standard: boolean | string
  premium: boolean | string
  standardAccent?: boolean
  premiumAccent?: boolean
}

const tiers: Tier[] = [
  {
    id: 'starter',
    name: 'Starter',
    title: 'Launch Kit',
    desc: 'For businesses that need to exist online — fast.',
    price: 397,
    delivery: '3 days',
    icon: Zap,
    popular: false,
    features: [
      { text: '1-page landing site (mobile-first)', included: true },
      { text: 'WhatsApp click-to-chat button', included: true },
      { text: 'Contact form + lead capture', included: true },
      { text: 'Google Business Profile setup', included: true },
      { text: 'Basic on-page SEO', included: true },
      { text: 'Instagram templates', included: false },
      { text: 'Quote / booking funnel', included: false },
      { text: 'Review system setup', included: false },
    ],
    cta: 'Get Started',
    variant: 'secondary',
  },
  {
    id: 'standard',
    name: 'Standard',
    title: 'Launch Kit Plus',
    desc: 'The complete package. Most businesses choose this.',
    price: 647,
    delivery: '5 days',
    icon: Rocket,
    popular: true,
    features: [
      { text: '3-5 page website (Home, Services, About, Contact, Gallery)', included: true },
      { text: 'WhatsApp + contact form + lead capture', included: true },
      { text: 'Google Business Profile + optimization', included: true },
      { text: '5 Instagram post templates (Canva)', included: true },
      { text: 'Basic analytics dashboard', included: true },
      { text: 'Full on-page SEO + speed optimization', included: true },
      { text: 'Quote / booking funnel', included: false },
      { text: '10 ready-to-post Instagram assets', included: false },
    ],
    cta: 'Book This Package',
    variant: 'primary',
  },
  {
    id: 'premium',
    name: 'Premium',
    title: 'Full Launch System',
    desc: 'For businesses ready to dominate their category.',
    price: 947,
    delivery: '7 days',
    icon: Crown,
    popular: false,
    features: [
      { text: 'Everything in Standard, plus:', included: true },
      { text: 'Quote / booking funnel (Calendly or custom)', included: true },
      { text: '10 Instagram posts — ready to publish', included: true },
      { text: 'Google review system + email templates', included: true },
      { text: '1 month of priority support', included: true },
      { text: 'Branded PDF handover guide', included: true },
      { text: 'Competitor analysis + keyword research', included: true },
      { text: '1 month content calendar', included: true },
    ],
    cta: 'Go Premium',
    variant: 'primary',
  },
]

const steps: Step[] = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: '15-minute call to understand your business, goals, and what you need.',
    time: 'Day 0',
  },
  {
    num: '02',
    title: 'Design Direction',
    desc: 'I send you a mood board and site structure. You approve or adjust.',
    time: 'Day 1',
  },
  {
    num: '03',
    title: 'Build & Content',
    desc: 'I build the site, write the copy, and optimize everything for mobile.',
    time: 'Days 2–3',
  },
  {
    num: '04',
    title: 'Review & Revise',
    desc: 'You review the live demo. I make revisions within 48 hours.',
    time: 'Day 4',
  },
  {
    num: '05',
    title: 'Launch & Handover',
    desc: 'Site goes live. Google Business Profile optimized. You get the keys.',
    time: 'Day 5',
  },
]

const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Pages',
    starter: '1 landing page',
    standard: '3–5 pages',
    premium: '3–5 pages',
    standardAccent: true,
    premiumAccent: true,
  },
  { feature: 'Mobile-First Design', starter: true, standard: true, premium: true },
  { feature: 'WhatsApp Chat Button', starter: true, standard: true, premium: true },
  { feature: 'Contact / Lead Form', starter: true, standard: true, premium: true },
  {
    feature: 'Google Business Profile',
    starter: 'Setup only',
    standard: 'Setup + Optimization',
    premium: 'Setup + Optimization',
    standardAccent: true,
    premiumAccent: true,
  },
  {
    feature: 'SEO',
    starter: 'Basic',
    standard: 'Full on-page + speed',
    premium: 'Full + competitor research',
    standardAccent: true,
    premiumAccent: true,
  },
  {
    feature: 'Instagram Templates',
    starter: false,
    standard: '5 Canva templates',
    premium: '10 ready-to-post assets',
    premiumAccent: true,
  },
  { feature: 'Booking / Quote Funnel', starter: false, standard: false, premium: true },
  { feature: 'Review System', starter: false, standard: false, premium: true },
  { feature: 'Analytics', starter: false, standard: true, premium: true },
  {
    feature: 'Support',
    starter: false,
    standard: false,
    premium: '1 month priority',
    premiumAccent: true,
  },
  { feature: 'Delivery Time', starter: '3 days', standard: '5 days', premium: '7 days' },
]

function renderComparisonCell(
  value: boolean | string,
  column: 'starter' | 'standard' | 'premium',
  row: ComparisonRow,
) {
  if (value === true) {
    return <span className="text-accent">✓</span>
  }

  if (value === false) {
    return <span className="text-ink-soft/40">—</span>
  }

  const accent =
    (column === 'standard' && row.standardAccent) ||
    (column === 'premium' && row.premiumAccent)

  return (
    <span className={accent ? 'font-medium text-accent' : 'text-ink-muted'}>{value}</span>
  )
}

type PricingSectionProps = {
  hideHeader?: boolean
}

export function PricingSection({ hideHeader = false }: PricingSectionProps) {
  const contactHref = getContactHref()

  return (
    <div id="pricing">
      {!hideHeader ? (
        <section className="section-padding bg-canvas pt-16 sm:pt-20">
          <div className="container-wide">
            <div className="max-w-3xl text-left">
              <p className="label-sm">Packages</p>
              <h2 className="heading-section mt-4 text-ink">
                The <TextHighlight>Launch Kit</TextHighlight>
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-ink-muted">{SUBTITLE}</p>
            </div>
          </div>
        </section>
      ) : null}

      <section className={`section-padding bg-canvas ${hideHeader ? 'pt-0' : 'pt-10 sm:pt-12'}`}>
        <div className="container-wide">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => {
              const Icon = tier.icon

              return (
                <motion.div
                  key={tier.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`relative flex flex-col rounded-2xl border p-8 transition-[border-color] duration-200 hover:border-border-strong ${
                    tier.popular
                      ? 'border-border-strong bg-gradient-to-b from-[#18150f] to-surface'
                      : 'card-interactive border-border bg-surface'
                  }`}
                >
                  {tier.popular ? (
                    <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-canvas">
                      Most Popular
                    </span>
                  ) : null}

                  <div
                    className={`mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border ${
                      tier.popular
                        ? 'border-accent/20 bg-accent/10'
                        : 'border-border bg-surface-muted'
                    }`}
                  >
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>

                  <p className="label-sm">{tier.name}</p>
                  <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-ink">{tier.title}</h3>
                  <p className="mt-2 text-sm leading-[1.7] text-ink-muted">{tier.desc}</p>

                  {tier.id === 'starter' ? (
                    <>
                      <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
                        <span
                          className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        {getFoundingBadgeLabel()}
                      </span>
                      <div className="mt-4 flex items-baseline gap-3">
                        <span className="text-4xl font-bold tracking-[-0.02em] text-accent">
                          €{FOUNDING_CONFIG.foundingPrice}
                        </span>
                        <span className="text-lg text-ink-soft line-through">
                          €{FOUNDING_CONFIG.regularPrice}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-ink-muted">{getFoundingDeliveryNote()}</p>
                      <p className="mt-3 text-sm text-ink-muted">
                        Delivered in <span className="font-semibold text-ink">{tier.delivery}</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="mt-6 flex items-baseline gap-2">
                        <span className="text-4xl font-bold tracking-[-0.02em] text-ink">
                          €{tier.price}
                        </span>
                        <span className="text-sm text-ink-muted">one-time</span>
                      </div>
                      <p className="mt-3 text-sm text-ink-muted">
                        Delivered in <span className="font-semibold text-ink">{tier.delivery}</span>
                      </p>
                    </>
                  )}

                  <ul className="mt-8 flex flex-1 flex-col gap-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature.text}
                        className={`flex items-start gap-2.5 text-sm leading-[1.6] ${
                          feature.included ? 'text-ink-muted' : 'text-ink-soft line-through'
                        }`}
                      >
                        {feature.included ? (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                        ) : (
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft/50" aria-hidden="true" />
                        )}
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button
                      href={contactHref}
                      variant={tier.variant}
                      className={`w-full ${tier.variant === 'primary' ? 'btn-primary-shadow' : ''}`}
                      showArrow={tier.variant === 'primary'}
                    >
                      {tier.cta}
                    </Button>
                    {tier.id === 'starter' ? (
                      <p className="mt-2 text-xs text-accent">{getFoundingUrgencyLine()}</p>
                    ) : null}
                    {tier.id === 'standard' || tier.id === 'premium' ? (
                      <p className="mt-2 text-xs text-ink-soft">Standard &amp; Premium at full price</p>
                    ) : null}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-canvas pt-16 sm:pt-20">
        <div className="container-wide">
          <div className="max-w-3xl text-left">
            <p className="label-sm">Process</p>
            <h2 className="heading-section mt-4 text-ink">How It Works</h2>
            <p className="mt-4 text-base leading-[1.75] text-ink-muted">
              From first message to live launch — here&apos;s the exact process.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                  Step {step.num}
                </p>
                <h3 className="mt-3 text-[15px] font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-ink-muted">{step.desc}</p>
                <span className="mt-4 inline-block rounded-full bg-surface-muted px-3 py-1 text-xs font-semibold text-ink-soft">
                  {step.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-canvas pt-16 sm:pt-20">
        <div className="container-wide">
          <div className="max-w-3xl text-left">
            <p className="label-sm">Compare</p>
            <h2 className="heading-section mt-4 text-ink">What&apos;s Included</h2>
            <p className="mt-4 text-base leading-[1.75] text-ink-muted">
              Clear breakdown so you know exactly what you&apos;re getting.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="min-w-[640px] w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-4 pr-4 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    Feature
                  </th>
                  <th className="pb-4 px-4 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    Starter €{FOUNDING_CONFIG.foundingPrice}
                  </th>
                  <th className="pb-4 px-4 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                    Standard €647
                  </th>
                  <th className="pb-4 px-4 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                    Premium €947
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-4 pr-4 font-medium text-ink">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {renderComparisonCell(row.starter, 'starter', row)}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {renderComparisonCell(row.standard, 'standard', row)}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {renderComparisonCell(row.premium, 'premium', row)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-canvas py-16 sm:py-20">
        <div className="container-wide">
          <div className="rounded-2xl border border-border bg-surface p-10 text-center sm:p-16">
            <h2 className="heading-section text-ink">Ready to launch?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-[1.75] text-ink-muted">
              Book a free 15-minute discovery call. No pitch, no pressure — just a conversation
              about what you need.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm text-accent">{getFoundingBottomCtaLine()}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-canvas transition-all duration-200 hover:bg-accent-hover btn-primary-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                Book on WhatsApp
              </a>
              <a
                href={getEmailHref()}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:border-border-strong hover:text-ink-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Mail className="h-[18px] w-[18px]" aria-hidden="true" />
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
