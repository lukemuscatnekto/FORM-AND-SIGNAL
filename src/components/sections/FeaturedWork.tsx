import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getLiveWorkProjects } from '../../data/work'
import { Reveal } from '../motion/Reveal'
import { Button } from '../ui/Button'
import { TextHighlight } from '../ui/TextHighlight'
import { WorkPreview } from '../ui/WorkPreview'

export function FeaturedWork() {
  const featuredProjects = getLiveWorkProjects().slice(0, 2)

  return (
    <section id="work" className="section-padding bg-canvas">
      <div className="container-wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="label-sm">Selected Work</p>
            <h2 className="heading-section mt-4 text-ink">
              Launch systems that <TextHighlight>get results</TextHighlight>
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
          >
            View All Work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <article className="card-interactive group flex h-full flex-col overflow-hidden">
                <WorkPreview
                  title={project.title}
                  preview={project.preview}
                  status={project.status}
                  assetFile={project.assetFile}
                  objectPosition={project.objectPosition}
                  size="card"
                  featured={index === 0}
                />
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                    {project.sector}
                  </p>
                  <span className="mt-2 inline-flex w-fit rounded-full bg-surface-muted px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink-soft">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">{project.subtitle}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                  <div className="mt-6">
                    <Button to={`/work/${project.slug}`} variant="secondary" showArrow>
                      View Project
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-end lg:hidden">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
          >
            View All Work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
