import { Link } from 'react-router-dom'
import logoMark from '../../assets/form-signal-logo-transparent.png'
import { siteConfig } from '../../data/site'
import { BrandWordmark } from './BrandWordmark'

export { logoMark }

export type LogoSize = 'sm' | 'md' | 'lg'

type LogoProps = {
  size?: LogoSize
  iconOnly?: boolean
  withWordmark?: boolean
  showTagline?: boolean
  className?: string
}

const iconConfig: Record<
  LogoSize,
  { className: string; wordmarkClassName: string }
> = {
  sm: {
    className: 'h-8 w-auto md:h-9 lg:h-10',
    wordmarkClassName: 'text-[10px] tracking-[0.14em]',
  },
  md: {
    className: 'h-8 w-auto md:h-9 lg:h-10',
    wordmarkClassName: 'text-[11px] tracking-[0.16em]',
  },
  lg: {
    className: 'h-8 w-auto md:h-9 lg:h-10',
    wordmarkClassName: 'text-xs tracking-[0.18em]',
  },
}

export function LogoMark({
  size = 'md',
  className = '',
  alt = 'FORM & SIGNAL',
}: {
  size?: LogoSize
  className?: string
  alt?: string
}) {
  const config = iconConfig[size]

  return (
    <img
      src={logoMark}
      alt={alt}
      width={40}
      height={40}
      decoding="async"
      className={`shrink-0 object-contain transition-[filter] duration-300 group-hover:drop-shadow-[0_0_10px_rgba(76,107,255,0.12)] ${config.className} ${className}`.trim()}
    />
  )
}

export function Logo({
  size = 'md',
  iconOnly = false,
  withWordmark = true,
  showTagline = false,
  className = '',
}: LogoProps) {
  const config = iconConfig[size]
  const showText = withWordmark && !iconOnly

  return (
    <Link
      to="/"
      aria-label="FORM & SIGNAL home"
      className={`group inline-flex max-w-full shrink-0 items-center rounded-sm transition-opacity duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${showText ? 'gap-2.5 sm:gap-3' : ''} ${className}`.trim()}
    >
      <LogoMark size={size} className={config.className} />

      {showText ? (
        <span className="min-w-0 text-left leading-none">
          <BrandWordmark className={config.wordmarkClassName} />
          {showTagline ? (
            <span className="mt-1 block text-[11px] font-medium tracking-[0.02em] text-ink-muted">
              {siteConfig.tagline}
            </span>
          ) : null}
        </span>
      ) : null}
    </Link>
  )
}

export function FooterWordmark({ className = '' }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="FORM & SIGNAL home"
      className={`inline-flex flex-col items-start transition-opacity duration-300 hover:opacity-90 ${className}`.trim()}
    >
      <BrandWordmark className="text-xs tracking-[0.18em]" />
      <span className="mt-1 block text-[11px] font-medium tracking-[0.02em] text-ink-muted">
        {siteConfig.tagline}
      </span>
    </Link>
  )
}
