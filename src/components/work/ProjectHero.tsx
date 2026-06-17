import type { WorkProject } from '../../data/work'
import { ProjectBreadcrumb } from './ProjectBreadcrumb'
import { WorkPreview } from '../ui/WorkPreview'

type ProjectHeroProps = {
  project: WorkProject
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <ProjectBreadcrumb projectTitle={project.title} />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:items-start">
          <div>
            <p className="label-sm">{project.subtitle}</p>
            <h1 className="heading-section mt-4">{project.title}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
              {project.heroDescription}
            </p>

            <dl className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  Sector
                </dt>
                <dd className="mt-1.5 text-sm text-ink">{project.sector}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  Services
                </dt>
                <dd className="mt-1.5 text-sm text-ink">{project.tags.join(' · ')}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  Year
                </dt>
                <dd className="mt-1.5 text-sm text-ink">{project.year}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  Status
                </dt>
                <dd className="mt-1.5 text-sm text-ink">{project.status}</dd>
              </div>
            </dl>
          </div>

          <div className="group overflow-hidden rounded-2xl border border-border bg-surface-muted shadow-[0_24px_70px_-42px_rgba(17,17,17,0.2)]">
            <WorkPreview
              title={project.title}
              preview={project.preview}
              status={project.status}
              assetFile={project.assetFile}
              objectPosition={project.objectPosition}
              size="hero"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
