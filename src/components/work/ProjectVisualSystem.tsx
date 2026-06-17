import type { WorkProject } from '../../data/work'
import { WorkPreview } from '../ui/WorkPreview'

type ProjectVisualSystemProps = {
  project: WorkProject
}

export function ProjectVisualSystem({ project }: ProjectVisualSystemProps) {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <h2 className="heading-section text-2xl sm:text-3xl">Visual system</h2>
        <p className="mt-4 max-w-2xl text-base text-ink-muted">
          One direction across every touchpoint — built to feel established from the first
          impression.
        </p>

        <div className="group mt-10 overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-[0_24px_70px_-42px_rgba(17,17,17,0.18)]">
          <WorkPreview
            title={project.title}
            preview={project.preview}
            status={project.status}
            assetFile={project.assetFile}
            objectPosition={project.objectPosition}
            size="hero"
            showStatus={false}
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
          {project.visualLabels.map((label) => (
            <span
              key={label}
              className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-ink-muted"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
