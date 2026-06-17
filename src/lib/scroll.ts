import type Lenis from 'lenis'

const NAV_OFFSET = -96

let lenisInstance: Lenis | null = null

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance
}

export function getLenisInstance() {
  return lenisInstance
}

export function scrollToId(id: string) {
  const element = document.getElementById(id)
  if (!element) return

  if (lenisInstance) {
    lenisInstance.scrollTo(element, { offset: NAV_OFFSET })
    return
  }

  const top = element.getBoundingClientRect().top + window.scrollY + NAV_OFFSET
  window.scrollTo({ top, behavior: 'auto' })
}

/** @deprecated Use scrollToId */
export function scrollToSection(id: string) {
  scrollToId(id)
}

export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: false })
    return
  }
  window.scrollTo({ top: 0, behavior: 'auto' })
}
