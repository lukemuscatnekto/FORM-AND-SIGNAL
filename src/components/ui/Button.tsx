import type { ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { buildHashHref, parseHashLink } from '../../utils/hashLink'
import { scrollToId } from '../../lib/scroll'

type ButtonProps = {
  children: ReactNode
  href?: string
  to?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  external?: boolean
  showArrow?: boolean
}

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const variants = {
  primary: 'bg-accent text-white btn-primary-shadow hover:bg-accent-hover',
  secondary:
    'border border-border-strong bg-surface-muted text-ink hover:border-accent/30 hover:bg-surface',
  ghost: 'text-ink-muted hover:text-ink',
}

function HashButtonLink({
  href,
  className,
  content,
  external,
}: {
  href: string
  className: string
  content: ReactNode
  external?: boolean
}) {
  const location = useLocation()
  const navigate = useNavigate()
  const { path, search, hash } = parseHashLink(href)

  if (!hash) {
    if (external || href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={className} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      )
    }

    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    )
  }

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (path !== '/') return

    const targetHref = buildHashHref(path, search, hash)

    if (location.pathname === '/') {
      event.preventDefault()
      scrollToId(hash.slice(1))
      window.history.replaceState(null, '', targetHref)
      if (search.includes('founding=true')) {
        window.dispatchEvent(new CustomEvent('fs:founding-inquiry'))
      }
      return
    }

    event.preventDefault()
    navigate(targetHref)
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {content}
    </a>
  )
}

export function Button({
  children,
  href,
  to,
  variant = 'primary',
  className = '',
  external,
  showArrow = true,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {showArrow && variant !== 'ghost' ? <span aria-hidden="true">→</span> : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <HashButtonLink href={href} className={classes} content={content} external={external} />
    )
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  )
}
