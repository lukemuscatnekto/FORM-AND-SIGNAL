import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion'
import { DUR, EASE } from '../../lib/animations'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const reduceMotion = usePrefersReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: DUR.base, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}
