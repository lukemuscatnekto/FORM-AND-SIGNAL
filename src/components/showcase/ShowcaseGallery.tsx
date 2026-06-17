import type { ReactNode } from 'react'
import { HoverLift } from '../motion/HoverLift'
import { StaggerChildren } from '../motion/StaggerChildren'
import { ShowcaseFrame } from './ShowcaseFrame'
import {
  ColorSystemPreview,
  DeviceMockupPreview,
  HomepageHeroPreview,
  LogoConstructionPreview,
  ProcessTimelinePreview,
  ServiceCardsPreview,
  SocialMockupPreview,
  StationeryMockupPreview,
  TypographyPreview,
} from './ShowcasePreviews'

function GalleryItem({ children }: { children: ReactNode }) {
  return (
    <div className="showcase-gallery-item">
      <HoverLift>{children}</HoverLift>
    </div>
  )
}

export function ShowcaseGallery() {
  return (
    <section className="section-padding">
      <StaggerChildren
        className="container-wide space-y-8 sm:space-y-10 lg:space-y-12"
        childSelector=".showcase-gallery-item"
        y={30}
        scale={0.95}
        stagger={0.15}
        start="top 80%"
        duration={0.7}
      >
        <GalleryItem>
          <ShowcaseFrame label="Logo construction">
            <LogoConstructionPreview />
          </ShowcaseFrame>
        </GalleryItem>

        <div className="showcase-gallery-item grid gap-6 sm:gap-8 lg:grid-cols-2">
          <HoverLift>
            <ShowcaseFrame label="Typography">
              <TypographyPreview />
            </ShowcaseFrame>
          </HoverLift>
          <HoverLift>
            <ShowcaseFrame label="Color system">
              <ColorSystemPreview />
            </ShowcaseFrame>
          </HoverLift>
        </div>

        <div className="showcase-gallery-item grid gap-6 sm:gap-8 lg:grid-cols-2">
          <HoverLift>
            <ShowcaseFrame label="Homepage hero">
              <HomepageHeroPreview />
            </ShowcaseFrame>
          </HoverLift>
          <HoverLift>
            <ShowcaseFrame label="Service cards">
              <ServiceCardsPreview />
            </ShowcaseFrame>
          </HoverLift>
        </div>

        <GalleryItem>
          <ShowcaseFrame label="Process timeline">
            <ProcessTimelinePreview />
          </ShowcaseFrame>
        </GalleryItem>

        <div className="showcase-gallery-item grid gap-6 sm:gap-8 lg:grid-cols-2">
          <HoverLift>
            <ShowcaseFrame label="Social mockup">
              <SocialMockupPreview />
            </ShowcaseFrame>
          </HoverLift>
          <HoverLift>
            <ShowcaseFrame label="Stationery">
              <StationeryMockupPreview />
            </ShowcaseFrame>
          </HoverLift>
        </div>

        <GalleryItem>
          <ShowcaseFrame label="Device mockup">
            <DeviceMockupPreview />
          </ShowcaseFrame>
        </GalleryItem>
      </StaggerChildren>
    </section>
  )
}
