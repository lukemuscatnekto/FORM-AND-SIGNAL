import Lenis from 'lenis'
import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { scrollToTop, setLenisInstance } from '../../lib/scroll'

type SmoothScrollProviderProps = {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const reduceMotion = usePrefersReducedMotion()
  const location = useLocation()

  useEffect(() => {
    if (reduceMotion) {
      setLenisInstance(null)
      return
    }

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })

    setLenisInstance(lenis)
    lenis.on('scroll', ScrollTrigger.update)

    const onTick = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
      setLenisInstance(null)
    }
  }, [reduceMotion])

  useEffect(() => {
    scrollToTop()
    ScrollTrigger.refresh()
  }, [location.pathname])

  return children
}
