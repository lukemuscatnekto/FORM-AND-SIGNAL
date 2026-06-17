import { useEffect, useState } from 'react'
import {
  getContactHref,
  getPrimaryCtaLabel,
  navLinks,
  siteConfig,
  siteLinks,
} from '../../data/site'
import { useNavScrollSpy } from '../../hooks/useNavScrollSpy'
import { Magnetic } from '../motion/Magnetic'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'
import { SiteLink } from '../ui/SiteLink'

function navSectionId(href: string): string | null {
  const hashIndex = href.indexOf('#')
  if (hashIndex === -1) return null
  return href.slice(hashIndex + 1)
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeSection = useNavScrollSpy()
  const closeMenu = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-canvas/85 backdrop-blur-md transition-[padding,border-color] duration-200 ${
        scrolled ? 'border-border/80 py-2' : 'border-border py-3 sm:py-4'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <Logo size="md" withWordmark />

        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-6" aria-label="Primary">
            {navLinks.map((link) => {
              const sectionId = navSectionId(link.href)
              const isActive = sectionId !== null && activeSection === sectionId

              return (
                <SiteLink
                  key={link.label}
                  href={link.href}
                  className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </SiteLink>
              )
            })}
          </nav>

          <div className="flex items-center gap-4">
            <SiteLink
              href={siteLinks.contact}
              className={`nav-link text-[#A2A8B3] hover:text-[#F2F2F3] ${activeSection === 'contact' ? 'nav-link-active' : ''}`}
            >
              Contact
            </SiteLink>
            <Magnetic>
              <Button href={getContactHref()} external={Boolean(siteConfig.bookingUrl)}>
                {getPrimaryCtaLabel()}
              </Button>
            </Magnetic>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-px w-4 bg-ink transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
            <span className={`block h-px w-4 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-4 bg-ink transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-border bg-surface px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <SiteLink
                key={link.label}
                href={link.href}
                className="min-h-10 py-1.5 text-base font-medium text-ink"
                onClick={closeMenu}
              >
                {link.label}
              </SiteLink>
            ))}
            <SiteLink
              href={siteLinks.contact}
              className="min-h-10 py-1.5 text-base text-[#A2A8B3] transition-colors hover:text-[#F2F2F3]"
              onClick={closeMenu}
            >
              Contact
            </SiteLink>
            <Button
              href={getContactHref()}
              className="mt-1 w-full"
              external={Boolean(siteConfig.bookingUrl)}
            >
              {getPrimaryCtaLabel()}
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
