import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

let motionEnabled = true

export function initGsapMotion() {
  if (typeof window === 'undefined') return

  motionEnabled = !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!motionEnabled) {
    gsap.globalTimeline.timeScale(0)
  }
}

export function isMotionEnabled() {
  return motionEnabled
}

export { gsap, ScrollTrigger }
