import type { WorkProject } from '../../data/work'
import { getResultValueClass } from '../../lib/urls'
import { WorkPreview } from '../ui/WorkPreview'
import { ProjectBreadcrumb } from './ProjectBreadcrumb'
import { ProjectLiveSiteButton } from './ProjectLiveSiteButton'

type ProjectHeroProps = {
  project: WorkProject
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="section-padding pt-24 sm:pt-32">
      <div className="container-wide">
        <ProjectBreadcrumb projectTitle={project.title} category={project.category} />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-14">
          <div>
            <p className="label-sm">{project.subtitle}</p>
            <div className="relative mt-4 sm:min-h-[3.25rem]">
              <h1 className="heading-section pr-0 text-ink sm:pr-52">{project.title}</h1>
              <ProjectLiveSiteButton project={project} />
            </div>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted">
              {project.heroDescription}
            </p>

            <div className="mt-8 flex rounded-lg bg-surface-muted px-5 py-3">
              {project.results.map((result, index) => (
                <div
                  key={result.label}
                  className={`flex flex-1 flex-col ${
                    index < project.results.length - 1 ? 'border-r border-border pr-4' : ''
                  } ${index > 0 ? 'pl-4' : ''}`}
                >
                  <span className="label-sm text-[10px]">{result.label}</span>
                  <span
                    className={`mt-1 text-sm font-bold ${getResultValueClass(result.value)}`}
                  >
                    {result.value}
                  </span>
                </div>
              ))}
            </div>

            <dl className="mt-8 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <dt className="label-sm">Client</dt>
                <dd className="mt-1.5 text-sm text-ink">{project.clientName}</dd>
              </div>
              <div>
                <dt className="label-sm">Location</dt>
                <dd className="mt-1.5 text-sm text-ink">{project.clientLocation}</dd>
              </div>
              <div>
                <dt className="label-sm">Services</dt>
                <dd className="mt-1.5 text-sm text-ink">{project.tags.join(' · ')}</dd>
              </div>
              <div>
                <dt className="label-sm">Year</dt>
                <dd className="mt-1.5 text-sm text-ink">{project.projectDate}</dd>
              </div>
            </dl>
          </div>

          <div className="group overflow-hidden rounded-2xl border border-border bg-surface-muted">
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
