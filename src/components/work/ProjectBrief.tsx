import { Clock, Globe, LayoutGrid, type LucideIcon } from 'lucide-react'
import type { WorkProject } from '../../data/work'
import { getResultValueClass } from '../../lib/urls'

type ProjectBriefProps = {
  project: WorkProject
}

const resultIcons: Record<string, LucideIcon> = {
  Delivery: Clock,
  Pages: LayoutGrid,
  Status: Globe,
}

function getResultIcon(label: string): LucideIcon {
  return resultIcons[label] ?? Globe
}

export function ProjectBrief({ project }: ProjectBriefProps) {
  return (
    <section className="section-padding border-t border-border bg-surface">
      <div className="container-wide">
        <h2 className="heading-section text-ink">Project Brief</h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">
              The Challenge
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">{project.challenge}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">
              The Solution
            </h3>
            <p className="mt-4 text-base leading-relaxed text-ink">{project.solution}</p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.results.map((result) => {
            const Icon = getResultIcon(result.label)

            return (
              <div
                key={result.label}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <p className="label-sm mt-4 text-[10px]">{result.label}</p>
                <p className={`mt-1 text-base font-bold ${getResultValueClass(result.value)}`}>
                  {result.value}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
