import { siteLinks } from '../../data/site'
import logoMark from '../../assets/form-signal-logo-transparent.png'
import { SiteLink } from '../ui/SiteLink'
import { TextHighlight } from '../ui/TextHighlight'

export function ShowcaseHero() {
  return (
    <section className="section-padding relative overflow-hidden bg-canvas">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_42%,rgb(76_107_255_/_0.08),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="container-wide relative">
        <nav aria-label="Breadcrumb" className="text-sm text-ink-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <SiteLink href={siteLinks.studio} className="transition-colors hover:text-ink">
                Studio
              </SiteLink>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-ink">Our approach</li>
          </ol>
        </nav>

        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">
          <div className="mb-8 flex justify-center">
            <img
              src={logoMark}
              alt="FORM & SIGNAL mark"
              width={112}
              height={112}
              decoding="async"
              className="h-auto w-[84px] object-contain opacity-95 drop-shadow-[0_0_22px_rgba(79,124,255,0.18)] md:w-[96px] lg:w-[112px]"
            />
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Built to look <TextHighlight>established</TextHighlight>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-[1.75] text-ink-muted sm:text-base sm:leading-relaxed">
            Our own brand system — identity, interface and launch assets — built as the case study
            for how FORM & SIGNAL works.
          </p>
        </div>
      </div>
    </section>
  )
}
