import { useMemo, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  getWorkTestimonials,
  workFilterCategories,
  workProjects,
  type WorkFilterCategory,
  type WorkProject,
} from '../data/work'
import { siteLinks } from '../data/site'
import { getProjectLiveUrl, canVisitLiveSite, getResultValueClass } from '../lib/urls'
import { Button } from '../components/ui/Button'
import { WorkPreview } from '../components/ui/WorkPreview'
import { WorkWithMeCta } from '../components/work/WorkWithMeCta'
import { Contact } from '../components/sections/Contact'

function ProjectResultsBar({ results }: { results: WorkProject['results'] }) {
  return (
    <div className="mt-6 flex rounded-lg bg-surface-muted px-4 py-3">
      {results.map((result, index) => (
        <div
          key={result.label}
          className={`flex flex-1 flex-col items-center text-center ${
            index < results.length - 1 ? 'border-r border-border' : ''
          }`}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
            {result.label}
          </span>
          <span
            className={`mt-1 text-sm font-bold ${getResultValueClass(result.value)}`}
          >
            {result.value}
          </span>
        </div>
      ))}
    </div>
  )
}

function WorkProjectCard({ project, featured }: { project: WorkProject; featured: boolean }) {
  const liveUrl = getProjectLiveUrl(project)
  const showVisitSite = canVisitLiveSite(project) && liveUrl

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      className="card-interactive group flex h-full flex-col overflow-hidden"
    >
      <WorkPreview
        title={project.title}
        preview={project.preview}
        status={project.status}
        assetFile={project.assetFile}
        objectPosition={project.objectPosition}
        size="card"
        featured={featured}
      />
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
          {project.sector}
        </p>
        <span className="mt-2 inline-flex w-fit rounded-full bg-surface-muted px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink-soft">
          {project.category}
        </span>
        <h2 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
          {project.title}
        </h2>
        <p className="mt-2 text-sm text-ink-muted">{project.subtitle}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <ProjectResultsBar results={project.results} />

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
            <dd className="mt-1 text-sm text-ink">{project.statusDetail}</dd>
          </div>
        </dl>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          <Button to={`/work/${project.slug}`} variant="secondary" showArrow>
            View Project
          </Button>
          {showVisitSite ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink-muted transition-all duration-200 hover:border-border-strong hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              Visit Site
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  )
}

export function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<WorkFilterCategory>('All')
  const testimonials = getWorkTestimonials()
  const featuredTestimonial = testimonials[0]?.testimonial

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return workProjects
    return workProjects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <section className="section-padding pt-24 sm:pt-32">
        <div className="container-wide">
          <p className="label-sm">Selected Work</p>
          <h1 className="heading-section mt-4 max-w-3xl text-ink">
            Launch systems built to look established from day one.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
            Complete launch systems for brands that need to look credible, trustworthy, and ready
            to grow — brand direction, websites, content, and launch presence in one connected flow.
          </p>

          <div className="mt-10 -mx-5 overflow-x-auto px-5 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-2 pb-1 sm:w-auto sm:flex-wrap">
              {workFilterCategories.map((category) => {
                const isActive = activeCategory === category

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      isActive
                        ? 'border-accent bg-accent text-canvas'
                        : 'border-border bg-surface text-ink-muted hover:border-border-strong hover:text-ink'
                    }`}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>

          <motion.div layout className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <WorkProjectCard
                  key={project.slug}
                  project={project}
                  featured={index === 0 && activeCategory === 'All'}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {featuredTestimonial ? (
            <div className="card-soft mt-16 border-l-2 border-l-accent p-8 sm:p-10">
              <blockquote className="font-serif text-lg italic leading-relaxed text-ink-muted">
                &ldquo;{featuredTestimonial.quote}&rdquo;
              </blockquote>
              <p className="label-sm mt-6">
                — {featuredTestimonial.author}
                {testimonials[0]?.clientName ? `, ${testimonials[0].clientName}` : ''}
              </p>
            </div>
          ) : null}

          <div className="glow-accent mt-16 rounded-2xl border border-border bg-surface p-10 text-center sm:p-14">
            <h2 className="heading-section text-ink">Have a project in mind?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
              I build launch-ready websites for Malta service businesses. Let&apos;s talk.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={siteLinks.contact} variant="primary" className="btn-primary-shadow">
                Start a project
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WorkWithMeCta />
      <Contact />
    </>
  )
}
