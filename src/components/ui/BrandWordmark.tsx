type BrandWordmarkProps = {
  className?: string
}

export function BrandWordmark({ className = '' }: BrandWordmarkProps) {
  return (
    <span className={`font-semibold uppercase text-ink ${className}`.trim()}>
      FORM <span className="text-accent">&</span> SIGNAL
    </span>
  )
}
