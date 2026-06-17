import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToId } from '../lib/scroll'

export function useScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.replace('#', '')
    const timer = window.setTimeout(() => scrollToId(id), 50)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])
}
