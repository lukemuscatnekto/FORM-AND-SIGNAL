import { Contact } from '../components/sections/Contact'
import { PricingSection } from '../components/sections/PricingSection'
import { TextHighlight } from '../components/ui/TextHighlight'

const SUBTITLE =
  'Website, Google presence, and Instagram starter pack — built for Malta service businesses that are tired of looking invisible online.'

export function PricingPage() {
  return (
    <article>
      <section className="section-padding pt-24 sm:pt-32">
        <div className="container-wide">
          <div className="max-w-3xl text-left">
            <p className="label-sm">Packages</p>
            <h1 className="heading-hero mt-4 text-ink">
              The <TextHighlight>Launch Kit</TextHighlight>
            </h1>
            <p className="mt-4 text-base leading-[1.75] text-ink-muted">{SUBTITLE}</p>
          </div>
        </div>
      </section>

      <PricingSection hideHeader />
      <Contact />
    </article>
  )
}
