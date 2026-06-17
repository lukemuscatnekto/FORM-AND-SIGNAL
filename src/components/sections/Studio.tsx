import { studioPillars } from '../../data/process'
import { Parallax } from '../motion/Parallax'
import { StaggerChildren } from '../motion/StaggerChildren'
import { SectionHeader } from '../ui/SectionHeader'
import { StudioValueMark } from '../ui/StudioValueMark'
import { TextHighlight } from '../ui/TextHighlight'

export function Studio() {
  return (
    <section id="studio" className="section-padding scroll-mt-20 bg-canvas">
      <div className="container-wide">
        <SectionHeader
          label="Who we are"
          title={
            <>
              We care about more than <TextHighlight>pretty pixels</TextHighlight>
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <StaggerChildren
            className="space-y-5 text-[0.95rem] leading-[1.75] text-ink-muted md:space-y-4 sm:text-base sm:leading-relaxed"
            stagger={0.1}
            start="top 75%"
            duration={0.6}
          >
            <p>
              FORM & SIGNAL helps businesses avoid launching with disconnected pieces — a logo,
              a website, and content that do not match. Instead, we build the digital launch
              foundation as one connected system.
            </p>
            <p>
              That matters because first impressions decide whether people trust you. We work with
              small brands, startups, and local businesses that need to look established and
              launch-ready from day one — without the overhead of a large agency.
            </p>
            <p>
              Every project is shaped around one job: making you look credible, clear, and ready to
              grow the moment you go live.
            </p>
          </StaggerChildren>

          <Parallax yFrom={50} yTo={-50} end="bottom top" className="grid gap-4">
            <StaggerChildren className="grid gap-4" stagger={0.1} start="top 75%" duration={0.6}>
              {studioPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface px-6 py-6 sm:px-7 sm:py-7"
                >
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/40 to-transparent" />
                  <span className="absolute inset-y-0 left-0 w-0.5 bg-accent/60" />
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-muted">
                      <StudioValueMark type={pillar.mark} />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold tracking-[-0.01em] text-ink sm:text-lg">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </StaggerChildren>
          </Parallax>
        </div>
      </div>
    </section>
  )
}
