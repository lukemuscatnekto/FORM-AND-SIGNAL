import { ExternalLink } from 'lucide-react'
import type { WorkProject } from '../../data/work'
import { canVisitLiveSite, getProjectLiveUrl } from '../../lib/urls'

type ProjectLiveSiteButtonProps = {
  project: WorkProject
}

const linkClassName =
  'inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-ink-muted transition-all duration-200 hover:border-border-strong hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

export function ProjectLiveSiteButton({ project }: ProjectLiveSiteButtonProps) {
  const liveUrl = getProjectLiveUrl(project)
  const showLiveButton = canVisitLiveSite(project) && liveUrl

  if (!showLiveButton) return null

  const content = (
    <>
      <span
        className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"
        aria-hidden="true"
      />
      View Live Site
      <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
    </>
  )

  return (
    <>
      <div className="mt-4 sm:hidden">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={linkClassName}>
          {content}
        </a>
      </div>
      <div className="absolute right-0 top-0 hidden sm:block">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={linkClassName}>
          {content}
        </a>
      </div>
    </>
  )
}
