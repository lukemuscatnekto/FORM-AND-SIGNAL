import type { ReactNode } from 'react'

type SectionHeaderProps = {
  label: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  badge?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  badge,
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`mb-12 max-w-3xl md:mb-14 ${alignment}`}>
      <div className={`flex flex-wrap items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <p className="label-sm">{label}</p>
        {badge ? (
          <span className="rounded-full border border-border bg-surface-muted px-3 py-1 text-[11px] font-medium text-ink-muted">
            {badge}
          </span>
        ) : null}
      </div>
      <h2 className="heading-section mt-4 text-ink">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-[1.75] text-ink-muted">{description}</p>
      ) : null}
    </div>
  )
}
