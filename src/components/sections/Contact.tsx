import { useEffect, useState } from 'react'
import {
  getContactHref,
  getEmailHref,
  getPrimaryCtaLabel,
  siteConfig,
} from '../../data/site'
import { inquiryFoundingBanner } from '../../data/inquiry'
import { Button } from '../ui/Button'
import { TextHighlight } from '../ui/TextHighlight'
import { InquiryForm } from './InquiryForm'

function readFoundingParam(): boolean {
  return new URLSearchParams(window.location.search).get('founding') === 'true'
}

export function Contact() {
  const [foundingApplied, setFoundingApplied] = useState(readFoundingParam)

  useEffect(() => {
    const applyFounding = () => {
      setFoundingApplied(true)
      window.history.replaceState(null, '', '/#contact')
    }

    if (readFoundingParam()) {
      applyFounding()
    }

    window.addEventListener('fs:founding-inquiry', applyFounding)
    return () => window.removeEventListener('fs:founding-inquiry', applyFounding)
  }, [])

  return (
    <section id="contact" className="section-padding scroll-mt-20 bg-canvas">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="label-sm">Let&apos;s talk</p>
            <h2 className="heading-section mt-4">
              Ready to launch something <TextHighlight>stronger</TextHighlight>?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-[1.7] text-ink-muted sm:text-base sm:leading-relaxed">
              Share a quick brief below. We will review what you are building and help shape the
              direction before you go live.
            </p>

            <div className="mt-8 hidden flex-col items-stretch justify-center gap-3 md:flex sm:flex-row sm:items-center">
              <Button
                href={getContactHref()}
                external={Boolean(siteConfig.bookingUrl)}
                className="w-full sm:w-auto"
              >
                {getPrimaryCtaLabel()}
              </Button>
              <Button
                href={getEmailHref()}
                variant="secondary"
                showArrow={false}
                className="w-full sm:w-auto"
              >
                Email the studio
              </Button>
            </div>
          </div>

          <div className="form-panel relative mt-10">
            <div
              className="pointer-events-none absolute -inset-px rounded-[1.5rem] bg-gradient-to-b from-accent/10 via-transparent to-transparent opacity-60"
              aria-hidden="true"
            />
            <div className="form-panel-header relative">
              <p className="text-sm font-semibold text-ink">Project inquiry</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                A few details help us understand scope, timeline, and the right next step.
              </p>
            </div>
            <div className="form-panel-body relative">
              <div className="mb-6 rounded-xl border border-[#4C6BFF]/20 bg-[#4C6BFF]/10 p-3">
                <p className="text-sm font-medium text-[#4C6BFF]">
                  {inquiryFoundingBanner.headline}
                </p>
                <p className="mt-0.5 text-[13px] text-[#8A8A93]">
                  {foundingApplied
                    ? inquiryFoundingBanner.helperApplied
                    : inquiryFoundingBanner.helperDefault}
                </p>
              </div>
              <InquiryForm foundingPreselected={foundingApplied} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
