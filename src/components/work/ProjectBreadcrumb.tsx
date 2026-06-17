import { Link } from 'react-router-dom'

type ProjectBreadcrumbProps = {
  projectTitle: string
}

export function ProjectBreadcrumb({ projectTitle }: ProjectBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/" className="transition-colors hover:text-ink">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link to="/work" className="transition-colors hover:text-ink">
            Work
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="font-medium text-ink">{projectTitle}</li>
      </ol>
    </nav>
  )
}
