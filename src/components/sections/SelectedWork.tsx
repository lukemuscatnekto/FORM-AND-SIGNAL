import { TextHighlight } from '../ui/TextHighlight'
import { workProjects } from '../../data/work'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'
import { WorkPreview } from '../ui/WorkPreview'

// Work section hidden from homepage until 2–3 completed projects are ready.
export function SelectedWork() {
  return (
    <section id="work" className="section-padding scroll-mt-20">
      <div className="container-wide">
        <SectionHeader
          label="Selected work"
          title={
            <>
              Built to be seen.
              <br />
              Designed to <TextHighlight>perform</TextHighlight>.
            </>
          }
          badge="Coming soon"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
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
                  {project.subtitle}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>
                <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
                  {project.tags.join(' · ')}
                </p>
                <div className="mt-auto pt-7">
                  <Button to={`/work/${project.slug}`} variant="secondary" showArrow>
                    View project
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
