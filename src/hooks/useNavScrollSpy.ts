import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SECTION_IDS = ['services', 'process', 'studio', 'contact'] as const

export type NavSectionId = (typeof SECTION_IDS)[number] | null

export function useNavScrollSpy(): NavSectionId {
  const location = useLocation()
  const [active, setActive] = useState<NavSectionId>(null)

  useEffect(() => {
    if (location.pathname !== '/') {
      setActive(null)
      return
    }

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (element): element is HTMLElement => Boolean(element),
    )

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id as NavSectionId)
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [location.pathname])

  return active
}
