import { Navigate, useParams } from 'react-router-dom'
import { getWorkProject } from '../data/work'
import { ProjectHero } from '../components/work/ProjectHero'
import { ProjectBrief } from '../components/work/ProjectBrief'
import { ProjectDeliverables } from '../components/work/ProjectDeliverables'
import { ProjectTransformation } from '../components/work/ProjectTransformation'
import { ProjectVisualSystem } from '../components/work/ProjectVisualSystem'
import { ProjectCaseStudyCta } from '../components/work/ProjectCaseStudyCta'

export function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getWorkProject(slug) : undefined

  if (!project) {
    return <Navigate to="/work" replace />
  }

  return (
    <article>
      <ProjectHero project={project} />
      <ProjectBrief brief={project.brief} />
      <ProjectDeliverables items={project.deliverables} />
      <ProjectTransformation />
      <ProjectVisualSystem project={project} />
      <ProjectCaseStudyCta />
    </article>
  )
}
