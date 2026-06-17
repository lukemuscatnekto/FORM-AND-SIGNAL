type ProjectBriefProps = {
  brief: string
}

export function ProjectBrief({ brief }: ProjectBriefProps) {
  return (
    <section className="border-t border-border bg-surface">
      <div className="container-wide">
        <div className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft">
            The Brief
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted sm:text-xl sm:leading-relaxed">
            {brief}
          </p>
        </div>
      </div>
    </section>
  )
}
