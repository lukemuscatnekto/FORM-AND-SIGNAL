import type { Service } from '../../data/services'

type ServiceIconProps = {
  icon: Service['icon']
  className?: string
}

export function ServiceIcon({ icon, className = 'h-7 w-7' }: ServiceIconProps) {
  const primary = 'stroke-accent'
  const structure = 'stroke-ink/45'

  if (icon === 'branding') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
        <rect x="4.5" y="4.5" width="15" height="15" rx="1.5" className={structure} strokeWidth="1.25" />
        <path d="M4.5 9h15M9 4.5v15M15 4.5v15" className={structure} strokeWidth="1" />
        <rect x="10" y="10" width="4" height="4" rx="0.75" className={primary} strokeWidth="1.5" />
      </svg>
    )
  }

  if (icon === 'website') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
        <rect x="3.5" y="5" width="17" height="14" rx="2" className={primary} strokeWidth="1.5" />
        <path d="M3.5 9h17" className={structure} strokeWidth="1.25" />
        <rect x="6.5" y="11.5" width="4.5" height="3" rx="0.75" className={structure} strokeWidth="1.25" />
        <rect x="12.5" y="11.5" width="5" height="3" rx="0.75" className={structure} strokeWidth="1.25" />
        <path d="M6.5 16.5h11" className={structure} strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    )
  }

  if (icon === 'content') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
        <rect x="7" y="6" width="11" height="7" rx="1.25" className={structure} strokeWidth="1.25" />
        <rect x="5" y="9" width="11" height="7" rx="1.25" className={structure} strokeWidth="1.25" />
        <rect x="8" y="12" width="11" height="7" rx="1.25" className={primary} strokeWidth="1.5" />
        <path
          d="M4 19.5c2-1.5 3.5-1.5 5 0s3 1.5 5 0 3-1.5 5 0"
          className={primary}
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <circle cx="5.5" cy="17.5" r="2" className={primary} strokeWidth="1.5" />
      <circle cx="11.5" cy="12" r="2" className={primary} strokeWidth="1.5" />
      <circle cx="18.5" cy="6.5" r="2" className={primary} strokeWidth="1.5" />
      <path
        d="M7 16.5 10 13.5 13.5 14.5 16.5 8.5"
        className={primary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16.5 8.5 18.5 6.5" className={structure} strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}
