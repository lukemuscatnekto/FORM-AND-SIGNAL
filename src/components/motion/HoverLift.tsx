import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { HOVER_EASE } from '../../lib/animations'

type HoverLiftProps = HTMLMotionProps<'div'> & {
  children: ReactNode
}

export function HoverLift({ children, className = '', ...props }: HoverLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: HOVER_EASE }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
