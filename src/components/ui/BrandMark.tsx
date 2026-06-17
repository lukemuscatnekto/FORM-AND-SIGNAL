import { useId } from 'react'

type BrandMarkProps = {
  className?: string
  showBackground?: boolean
  label?: string
}

export function BrandMark({
  className = 'h-8 w-8',
  showBackground = true,
  label,
}: BrandMarkProps) {
  const gradientId = useId().replace(/:/g, '')

  return (
    <svg
      viewBox="0 0 32 32"
      role={label ? 'img' : undefined}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="18"
          y1="10"
          x2="30"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4C6BFF" />
          <stop offset="1" stopColor="#5875FF" />
        </linearGradient>
      </defs>
      {showBackground ? (
        <rect width="32" height="32" rx="8" fill="#141419" stroke="rgb(255 255 255 / 0.06)" />
      ) : null}
      <rect x="5.5" y="25" width="2.5" height="2.5" rx="0.5" fill="#4C6BFF" />
      <text
        x="8"
        y="22"
        fill="#F2F2F3"
        fontSize="15"
        fontWeight="700"
        fontFamily="Satoshi, ui-sans-serif, system-ui, sans-serif"
      >
        F
      </text>
      <path
        d="M18.5 11.5c2 0 3.8 1 4.8 2.6"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M18.5 16c2.6 0 4.9 1.1 6.2 2.9"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M18.5 20.5c3.2 0 6 1.3 7.6 3.5"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  )
}
