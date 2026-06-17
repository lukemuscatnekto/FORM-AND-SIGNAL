import type { MouseEvent, ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { buildHashHref, parseHashLink } from '../../utils/hashLink'
import { scrollToId } from '../../lib/scroll'

type SiteLinkProps = {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
  external?: boolean
}

export function SiteLink({ href, children, className, onClick, external }: SiteLinkProps) {
  const location = useLocation()
  const navigate = useNavigate()

  if (external || href.startsWith('http') || href.startsWith('mailto:')) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  const hashIndex = href.indexOf('#')

  if (hashIndex !== -1) {
    const { path, search, hash } = parseHashLink(href)

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.()

      if (path !== '/') return

      const targetHref = buildHashHref(path, search, hash)

      if (location.pathname === '/') {
        event.preventDefault()
        scrollToId(hash.slice(1))
        window.history.replaceState(null, '', targetHref)
        return
      }

      event.preventDefault()
      navigate(targetHref)
    }

    return (
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}
