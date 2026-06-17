import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { ReactNode } from 'react'
import { useFinePointer } from '../../hooks/useFinePointer'
import { usePrefersReducedMotion } from '../../hooks/useReducedMotion'

type MagneticProps = {
  children: ReactNode
  className?: string
  strength?: number
}

export function Magnetic({ children, className = '', strength = 0.25 }: MagneticProps) {
  const finePointer = useFinePointer()
  const reduceMotion = usePrefersReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.6 })

  if (!finePointer || reduceMotion) {
    return <span className={className}>{children}</span>
  }

  return (
    <motion.span
      className={`inline-flex ${className}`.trim()}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        const offsetX = event.clientX - (rect.left + rect.width / 2)
        const offsetY = event.clientY - (rect.top + rect.height / 2)
        x.set(offsetX * strength)
        y.set(offsetY * strength)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.span>
  )
}
