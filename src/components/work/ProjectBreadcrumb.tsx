import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { WorkProject } from '../../data/work'

type ProjectBreadcrumbProps = {
  projectTitle: string
  category: WorkProject['category']
}

export function ProjectBreadcrumb({ projectTitle, category }: ProjectBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link to="/work" className="transition-colors hover:text-ink">
            Work
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </li>
        <li className="text-ink-muted">{category}</li>
        <li aria-hidden="true">
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </li>
        <li className="font-medium text-ink">{projectTitle}</li>
      </ol>
    </nav>
  )
}
