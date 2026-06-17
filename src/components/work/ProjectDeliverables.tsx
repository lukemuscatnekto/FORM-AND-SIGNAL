type ProjectDeliverablesProps = {
  items: string[]
}

export function ProjectDeliverables({ items }: ProjectDeliverablesProps) {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <h2 className="heading-section text-2xl sm:text-3xl">What We Built</h2>
        <p className="mt-4 max-w-2xl text-base text-ink-muted">
          A connected launch system — not a standalone website.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-border-strong sm:p-6"
            >
              <span className="text-sm font-medium leading-snug text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
