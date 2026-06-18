import { services } from '../../data/services'
import { Reveal } from '../motion/Reveal'
import { SpotlightCard } from '../motion/SpotlightCard'
import { SectionHeader } from '../ui/SectionHeader'

export function Services() {
  return (
    <section id="services" className="section-padding bg-canvas">
      <div className="container-wide">
        <SectionHeader
          label="What we do"
          title="Everything your brand needs to launch properly"
          description="Four services that work as one system — from first impression to a launch that performs. For barbers, detailers, salons, and trades in Malta."
        />

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.05} className="h-full">
              <SpotlightCard className="card-interactive flex h-full flex-col border border-border bg-surface p-7 transition-[border-color] duration-300 hover:border-white/12 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-semibold tabular-nums tracking-[0.08em] text-accent">
                    {service.number}
                  </span>
                  <span
                    className="text-lg text-ink-soft transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-[-0.02em] text-ink sm:text-[1.35rem]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-[1.75] text-ink-muted sm:text-[0.95rem]">
                  {service.description}
                </p>

                <div className="mt-7 border-t border-border pt-5">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-ink-soft">
                    <span className="uppercase">Outcome</span>
                    <span className="text-ink-muted"> · {service.outcome}</span>
                  </p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
