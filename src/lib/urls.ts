import type { WorkProject } from '../data/work'

export function getProjectLiveUrl(project: WorkProject): string | undefined {
  if (!project.liveUrl) return undefined

  if (!project.liveUrl.startsWith('http')) {
    return `https://${project.liveUrl}`
  }

  return project.liveUrl
}

export function canVisitLiveSite(project: WorkProject): boolean {
  return (
    project.status === 'Live' &&
    Boolean(project.liveUrl) &&
    project.urlVerified === true
  )
}

/** @deprecated Use canVisitLiveSite for public links */
export function isProjectLive(project: WorkProject): boolean {
  return canVisitLiveSite(project)
}

export function getResultValueClass(value: string): string {
  const normalized = value.trim().toLowerCase()

  if (normalized === 'live') return 'text-emerald-400'
  if (normalized === 'in progress') return 'text-accent'
  if (normalized === 'coming soon') return 'text-amber-400'

  return 'text-ink'
}
