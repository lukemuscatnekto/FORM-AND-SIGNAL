export function ShowcaseMetadata() {
  const items = [
    {
      label: 'Services',
      value: 'Branding, Websites, Launch Systems',
    },
    {
      label: 'Sector',
      value: 'Digital',
    },
    {
      label: 'Year',
      value: '2025',
    },
  ] as const

  return (
    <section className="relative z-10 -mt-12 sm:-mt-16">
      <div className="container-wide">
        <div className="rounded-3xl border border-border bg-surface p-8 shadow-[0_-24px_80px_-24px_rgb(76_107_255_/_0.14)] sm:p-10">
          <dl className="grid gap-8 sm:grid-cols-3 sm:gap-6">
            {items.map((item) => (
              <div key={item.label}>
                <dt className="label-sm tracking-widest">
                  {item.label}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-ink sm:text-lg">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
