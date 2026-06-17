import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

type MockupTiltProps = {
  children: ReactNode
  className?: string
}

export function MockupTilt({ children, className = '' }: MockupTiltProps) {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const update = () => setEnabled(media.matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  if (!enabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={`${className}`.trim()} style={{ perspective: 1000 }}>
      <motion.div
        whileHover={{ rotateY: 3, rotateX: 3 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
