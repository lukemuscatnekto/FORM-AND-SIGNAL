import { Hero } from '../components/sections/Hero'
import { LaunchBanner } from '../components/sections/LaunchBanner'
import { AudienceStrip } from '../components/sections/AudienceStrip'
import { Services } from '../components/sections/Services'
import { Trust } from '../components/sections/Trust'
import { Process } from '../components/sections/Process'
import { Studio } from '../components/sections/Studio'
import { LaunchTransformation } from '../components/sections/LaunchTransformation'
import { FeaturedWork } from '../components/sections/FeaturedWork'
import { PricingSection } from '../components/sections/PricingSection'
import { Contact } from '../components/sections/Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <LaunchBanner />
      <AudienceStrip />
      <Services />
      <Trust />
      <Process />
      <Studio />
      <LaunchTransformation />
      <FeaturedWork />
      <PricingSection />
      <Contact />
    </>
  )
}
