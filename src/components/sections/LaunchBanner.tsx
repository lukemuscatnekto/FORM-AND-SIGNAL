import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getVerifiedLiveProjects } from '../../data/work'
import { canVisitLiveSite, getProjectLiveUrl } from '../../lib/urls'

export function LaunchBanner() {
  const liveProjects = getVerifiedLiveProjects()

  if (liveProjects.length === 0) return null

  const project = liveProjects[0]
  const liveUrl = getProjectLiveUrl(project)
  const showVisitSite = canVisitLiveSite(project) && liveUrl

  return (
    <section className="section-padding border-y border-border bg-gradient-to-r from-surface to-canvas">
      <div className="container-wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4 sm:items-center">
            <img
              src={project.preview}
              alt={`${project.title} preview`}
              className="h-16 w-16 shrink-0 rounded-lg border border-border object-cover"
              style={{ objectPosition: project.objectPosition }}
              loading="lazy"
              decoding="async"
            />
            <div>
              <div className="flex items-center gap-2">
                <p className="label-sm">Recently Launched</p>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                    animate={{ opacity: [1, 0.45, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    aria-hidden="true"
                  />
                  Live
                </span>
              </div>
              <h2 className="mt-1 text-lg font-semibold text-ink">{project.title}</h2>
              <p className="mt-1 text-sm text-ink-muted">
                Mobile car detailing website, live now.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            {showVisitSite ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Visit Site
                <ExternalLink className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
