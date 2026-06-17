import type { ReactNode } from 'react'

type ShowcaseFrameProps = {
  children: ReactNode
  label: string
  className?: string
}

export function ShowcaseFrame({ children, label, className = '' }: ShowcaseFrameProps) {
  return (
    <figure
      className={`overflow-hidden rounded-3xl border border-border bg-surface ${className}`.trim()}
    >
      <div className="p-8 sm:p-10">
        <figcaption className="label-sm tracking-widest">{label}</figcaption>
        <div className="mt-6">{children}</div>
      </div>
    </figure>
  )
}
