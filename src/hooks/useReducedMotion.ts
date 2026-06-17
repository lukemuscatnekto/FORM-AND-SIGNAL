import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

function subscribe(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(QUERY)
  mediaQuery.addEventListener('change', onStoreChange)
  return () => mediaQuery.removeEventListener('change', onStoreChange)
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches
}

function getServerSnapshot() {
  return false
}

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

/** Alias for spec compatibility. */
export const useReducedMotion = usePrefersReducedMotion
