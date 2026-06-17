import { workProjects } from '../data/work'
import { Button } from '../components/ui/Button'
import { WorkPreview } from '../components/ui/WorkPreview'

export function WorkPage() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <p className="label-sm">Selected Work</p>
        <h1 className="heading-section mt-4 max-w-3xl">
          Launch systems built to look established from day one.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
          Complete launch systems for brands that need to look credible, trustworthy, and
          ready to grow — brand direction, websites, content, and launch presence in one
          connected flow.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {workProjects.map((project) => (
            <article
              key={project.slug}
              className="card-interactive group flex h-full flex-col overflow-hidden"
            >
              <WorkPreview
                title={project.title}
                preview={project.preview}
                status={project.status}
                assetFile={project.assetFile}
                objectPosition={project.objectPosition}
                size="card"
              />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                  {project.sector}
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-ink-muted">{project.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{project.description}</p>
                <dl className="mt-6 space-y-3 border-t border-border pt-6">
                  <div>
                    <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                      Services
                    </dt>
                    <dd className="mt-1 text-sm text-ink">{project.tags.join(' · ')}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                      Status
                    </dt>
                    <dd className="mt-1 text-sm text-ink">{project.status}</dd>
                  </div>
                </dl>
                <div className="mt-auto pt-7">
                  <Button to={`/work/${project.slug}`} variant="secondary" showArrow>
                    View Project
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
