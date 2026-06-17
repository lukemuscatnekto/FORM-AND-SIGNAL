import { getContactHref, getPrimaryCtaLabel } from '../../data/site'
import { caseStudyCta } from '../../data/work'
import { Button } from '../ui/Button'

export function ProjectCaseStudyCta() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <div className="card-soft mx-auto max-w-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
          <h2 className="heading-section text-2xl sm:text-3xl">{caseStudyCta.headline}</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
            {caseStudyCta.copy}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href={getContactHref()} className="w-full sm:w-auto">
              {getPrimaryCtaLabel()}
            </Button>
            <Button to="/work" variant="secondary" showArrow={false} className="w-full sm:w-auto">
              Back to Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
