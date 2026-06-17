import { transformationContent } from '../../data/work'

export function ProjectTransformation() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-wide">
        <div className="max-w-3xl">
          <h2 className="heading-section text-2xl sm:text-3xl">{transformationContent.headline}</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {transformationContent.copy}
          </p>
        </div>
      </div>
    </section>
  )
}
