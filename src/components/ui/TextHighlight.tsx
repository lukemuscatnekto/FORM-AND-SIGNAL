import type { ReactNode } from 'react'

type TextHighlightProps = {
  children: ReactNode
}

export function TextHighlight({ children }: TextHighlightProps) {
  return <span className="text-highlight">{children}</span>
}
