import { useState } from 'react'
import type { WorkProject } from '../../data/work'
import { transformationContent } from '../../data/work'

type ProjectTransformationProps = {
  project: WorkProject
}

export function ProjectTransformation({ project }: ProjectTransformationProps) {
  const [view, setView] = useState<'before' | 'after'>('after')
  const hasBefore = Boolean(project.beforePreview)
  const activeImage = view === 'before' && hasBefore ? project.beforePreview! : project.preview
  const timeline = project.transformationTimeline ?? []

  return (
    <section className="section-padding border-y border-border bg-surface-muted">
      <div className="container-wide">
        <div className="max-w-3xl">
          <h2 className="heading-section text-ink">{transformationContent.headline}</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {transformationContent.copy}
          </p>
        </div>

        {hasBefore ? (
          <div className="mt-8 inline-flex rounded-full bg-surface-muted p-1">
            {(['before', 'after'] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setView(option)}
                className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  view === option
                    ? 'bg-accent text-canvas'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        ) : null}

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
          <img
            src={activeImage}
            alt={`${project.title} ${hasBefore ? view : 'after'} preview`}
            className="block h-auto w-full object-cover"
            style={{ objectPosition: project.objectPosition }}
            loading="lazy"
            decoding="async"
          />
          {!hasBefore && project.transformationCaption ? (
            <p className="border-t border-border px-6 py-4 text-sm italic text-ink-muted">
              {project.transformationCaption}
            </p>
          ) : null}
        </div>

        {timeline.length > 0 ? (
          <div className="mt-12 max-w-2xl">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">
              Transformation timeline
            </h3>
            <ol className="relative mt-6 space-y-8 border-l border-border pl-6">
              {timeline.map((step, index) => (
                <li key={step.title} className="relative">
                  <span
                    className={`absolute -left-[1.8125rem] top-1 h-3 w-3 rounded-full border-2 ${
                      index === timeline.length - 1
                        ? 'border-accent bg-accent'
                        : 'border-accent bg-surface'
                    }`}
                    aria-hidden="true"
                  />
                  <h4 className="text-sm font-bold text-ink">{step.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </div>
    </section>
  )
}
