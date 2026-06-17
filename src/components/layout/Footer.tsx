import { footerLinks, getEmailHref, siteConfig } from '../../data/site'
import { FooterWordmark } from '../ui/Logo'
import { SiteLink } from '../ui/SiteLink'

export function Footer() {
  return (
    <footer className="border-t border-border bg-canvas">
      <div className="container-wide section-padding-compact">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <FooterWordmark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              {siteConfig.footerCopy}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">About</p>
            <ul className="mt-3 space-y-2">
              {footerLinks.studio.map((link) => (
                <li key={link.label}>
                  <SiteLink
                    href={link.href}
                    className="inline-flex min-h-10 items-center text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">What we do</p>
            <ul className="mt-3 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <SiteLink
                    href={link.href}
                    className="inline-flex min-h-10 items-center text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Connect</p>
            <ul className="mt-3 space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  {'social' in link && link.social ? (
                    <SiteLink
                      href={siteConfig.instagram}
                      external
                      className="inline-flex min-h-10 items-center text-sm text-ink-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </SiteLink>
                  ) : 'email' in link && link.email ? (
                    <a
                      href={getEmailHref()}
                      className="inline-flex min-h-10 items-center text-sm text-ink-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  ) : 'href' in link ? (
                    <SiteLink
                      href={link.href}
                      className="inline-flex min-h-10 items-center text-sm text-ink-muted transition-colors hover:text-accent"
                    >
                      {link.label}
                    </SiteLink>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-4 text-sm text-ink-soft">
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
      </div>
    </footer>
  )
}
