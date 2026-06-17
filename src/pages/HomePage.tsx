import { Hero } from '../components/sections/Hero'
import { AudienceStrip } from '../components/sections/AudienceStrip'
import { Services } from '../components/sections/Services'
import { Trust } from '../components/sections/Trust'
import { Process } from '../components/sections/Process'
import { Studio } from '../components/sections/Studio'
import { LaunchTransformation } from '../components/sections/LaunchTransformation'
import { Contact } from '../components/sections/Contact'
// Work section hidden until 2–3 completed projects are ready.
// Routes remain available: /work, /work/driven-gloss, /work/master-of-detailing

export function HomePage() {
  return (
    <>
      <Hero />
      <AudienceStrip />
      <Services />
      <Trust />
      <Process />
      <Studio />
      <LaunchTransformation />
      <Contact />
    </>
  )
}
