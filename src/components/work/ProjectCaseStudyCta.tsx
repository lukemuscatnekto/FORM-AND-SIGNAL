import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { caseStudyCta, getNextWorkProject, type WorkProject } from '../../data/work'
import { siteLinks } from '../../data/site'
import { Button } from '../ui/Button'

type ProjectCaseStudyCtaProps = {
  project: WorkProject
}

export function ProjectCaseStudyCta({ project }: ProjectCaseStudyCtaProps) {
  const nextProject = getNextWorkProject(project.slug)

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <div className="card-soft mx-auto max-w-3xl px-6 py-10 text-center sm:px-10 sm:py-12">
          <h2 className="heading-section text-ink">{caseStudyCta.headline}</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
            {caseStudyCta.copy}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button
              href="https://wa.me/35677424141"
              external
              variant="primary"
              className="w-full btn-primary-shadow sm:w-auto"
            >
              Book a Call
            </Button>
            <Button to="/work" variant="secondary" showArrow={false} className="w-full sm:w-auto">
              View All Work
            </Button>
          </div>

          <Link
            to={`/work/${nextProject.slug}`}
            className="mt-10 inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
          >
            Next: {nextProject.title}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-6 text-center">
          <Button
            href={siteLinks.contact}
            variant="ghost"
            showArrow={false}
            className="text-ink-muted hover:text-accent"
          >
            Or send a project brief
          </Button>
        </div>
      </div>
    </section>
  )
}
