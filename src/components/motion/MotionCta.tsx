import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion'
import { DUR, EASE } from '../../lib/animations'

type MotionCtaProps = {
  children: ReactNode
  className?: string
}

export function MotionCta({ children, className = '' }: MotionCtaProps) {
  const reduceMotion = usePrefersReducedMotion()

  if (reduceMotion) {
    return <span className={`inline-flex ${className}`.trim()}>{children}</span>
  }

  return (
    <motion.span
      className={`inline-flex ${className}`.trim()}
      whileHover={{
        y: -2,
        boxShadow: '0 0 20px rgba(76,107,255,0.12)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: DUR.fast, ease: EASE }}
    >
      {children}
    </motion.span>
  )
}
