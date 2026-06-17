import type { ReactNode } from 'react'
import { useScrollToHash } from '../../hooks/useScrollToHash'
import { Footer } from './Footer'
import { Header } from './Header'

type LayoutProps = {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  useScrollToHash()

  return (
    <div className="min-h-screen overflow-x-hidden bg-canvas text-ink">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
