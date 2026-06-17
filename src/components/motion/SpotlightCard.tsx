import type { MouseEvent, ReactNode } from 'react'
import { useFinePointer } from '../../hooks/useFinePointer'

type SpotlightCardProps = {
  children: ReactNode
  className?: string
}

export function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const finePointer = useFinePointer()

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (!finePointer) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    event.currentTarget.style.setProperty('--x', `${x}px`)
    event.currentTarget.style.setProperty('--y', `${y}px`)
  }

  return (
    <article
      onMouseMove={finePointer ? handleMove : undefined}
      className={`spotlight-card group relative overflow-hidden ${className}`.trim()}
    >
      {finePointer ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(440px circle at var(--x, 50%) var(--y, 50%), rgba(76,107,255,.12), transparent 60%)',
          }}
          aria-hidden="true"
        />
      ) : null}
      <div className="relative z-10 h-full transition-transform duration-200 group-hover:-translate-y-1">
        {children}
      </div>
    </article>
  )
}
