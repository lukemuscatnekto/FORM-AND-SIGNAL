/** Brand motion tokens — single easing curve, 200–600ms durations. */
export const EASE = [0.22, 1, 0.36, 1] as const

export const DUR = {
  fast: 0.2,
  base: 0.4,
  slow: 0.6,
} as const

/** GSAP-compatible ease string approximating EASE. */
export const GSAP_EASE = 'power2.out' as const

/** @deprecated Use DUR */
export const DURATION = {
  fast: DUR.fast,
  normal: DUR.base,
  slow: DUR.slow,
  reveal: DUR.base,
} as const

/** @deprecated Use GSAP_EASE */
export const EASE_LEGACY = {
  smooth: GSAP_EASE,
  premium: GSAP_EASE,
  snappy: GSAP_EASE,
} as const

export const HOVER_EASE = EASE
