import { Contact } from '../components/sections/Contact'
import { ShowcaseGallery } from '../components/showcase/ShowcaseGallery'
import { ShowcaseHero } from '../components/showcase/ShowcaseHero'
import { ShowcaseMetadata } from '../components/showcase/ShowcaseMetadata'

export function ShowcasePage() {
  return (
    <article>
      <ShowcaseHero />
      <ShowcaseMetadata />
      <ShowcaseGallery />
      <Contact />
    </article>
  )
}
