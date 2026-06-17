import { useSyncExternalStore } from 'react'

const QUERY = '(pointer: fine)'

function subscribe(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(QUERY)
  mediaQuery.addEventListener('change', onStoreChange)
  return () => mediaQuery.removeEventListener('change', onStoreChange)
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches
}

function getServerSnapshot() {
  return true
}

export function useFinePointer(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
