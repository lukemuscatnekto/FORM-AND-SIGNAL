import { whyFormAndSignal } from '../../data/trust'
import { StaggerChildren } from '../motion/StaggerChildren'
import { SectionHeader } from '../ui/SectionHeader'

export function Trust() {
  return (
    <section className="section-padding bg-surface-muted">
      <div className="container-wide">
        <SectionHeader
          label={whyFormAndSignal.label}
          title={whyFormAndSignal.title}
          description={whyFormAndSignal.description}
        />

        <StaggerChildren
          className="grid gap-4 lg:grid-cols-3 lg:gap-5"
          stagger={0.1}
          start="top 75%"
          duration={0.6}
        >
          {whyFormAndSignal.pillars.map((pillar) => (
            <article
              key={pillar.number}
              className="group rounded-2xl border border-border bg-surface p-6 transition-[border-color,box-shadow] duration-200 hover:border-accent/20 sm:p-7"
              style={{ boxShadow: '0 0 40px -24px rgb(76 107 255 / 0.12)' }}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold tabular-nums text-accent">{pillar.number}</span>
                <span className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug tracking-[-0.02em] text-ink">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-ink-muted">{pillar.description}</p>
            </article>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
