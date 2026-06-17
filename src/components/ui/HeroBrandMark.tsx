import logoMark from '../../assets/form-signal-logo-transparent.png'

type HeroBrandMarkProps = {
  className?: string
}

export function HeroBrandMark({ className = '' }: HeroBrandMarkProps) {
  return (
    <div className={`relative inline-flex ${className}`.trim()}>
      <div
        className="pointer-events-none absolute inset-0 -z-10 scale-[1.4] bg-[radial-gradient(circle,rgb(76_107_255_/_0.09)_0%,transparent_68%)]"
        aria-hidden="true"
      />
      <img
        src={logoMark}
        alt="FORM & SIGNAL"
        width={110}
        height={110}
        decoding="async"
        className="relative h-auto w-[78px] object-contain drop-shadow-[0_0_24px_rgba(79,124,255,0.22)] md:w-[96px] lg:w-[110px]"
      />
    </div>
  )
}
