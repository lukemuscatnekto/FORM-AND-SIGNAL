type StudioValueMarkProps = {
  type: 'strategic' | 'premium' | 'launch'
}

export function StudioValueMark({ type }: StudioValueMarkProps) {
  if (type === 'strategic') {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4" fill="none">
        <path d="M4 14 10 4l6 10" className="stroke-accent" strokeWidth="1.25" strokeLinejoin="round" />
        <path d="M6.5 11.5h7" className="stroke-ink-soft" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    )
  }

  if (type === 'premium') {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4" fill="none">
        <rect x="4" y="4" width="12" height="12" rx="2" className="stroke-accent" strokeWidth="1.25" />
        <path d="M7 10h6M10 7v6" className="stroke-ink-soft" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4" fill="none">
      <circle cx="5.5" cy="14.5" r="1.5" className="stroke-accent" strokeWidth="1.25" />
      <circle cx="10" cy="10" r="1.5" className="stroke-accent" strokeWidth="1.25" />
      <circle cx="14.5" cy="5.5" r="1.5" className="stroke-accent" strokeWidth="1.25" />
      <path
        d="M6.5 13.5 9 11.5 11.5 12.5 14 6.5"
        className="stroke-accent"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
