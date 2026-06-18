import { Button } from '../ui/Button'

const TRUST_INITIALS = ['DG', 'Mo', '+']

export function WorkWithMeCta() {
  return (
    <section className="section-padding bg-gradient-to-b from-surface to-canvas">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-sm">Start Your Project</p>
          <h2 className="heading-section mt-4 text-ink">Ready to look launch-ready?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
            I help Malta service businesses build websites that get customers. No templates. No
            fluff. Just results.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              href="https://wa.me/35677424141"
              external
              variant="primary"
              className="btn-primary-shadow"
            >
              Book a Free Call
            </Button>
            <Button to="/pricing" variant="secondary" showArrow={false}>
              See Pricing
            </Button>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex -space-x-2">
              {TRUST_INITIALS.map((initial) => (
                <span
                  key={initial}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-muted text-xs font-semibold text-ink-muted"
                >
                  {initial}
                </span>
              ))}
            </div>
            <p className="text-sm text-ink-muted">
              Trusted by detailers, barbers &amp; salons in Malta
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
