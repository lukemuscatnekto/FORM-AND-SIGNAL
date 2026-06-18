import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { usePrefersReducedMotion } from './hooks/useReducedMotion'
import { EASE } from './lib/animations'
import { ScrollTrigger } from './lib/gsap'
import { HomePage } from './pages/HomePage'
import { ShowcasePage } from './pages/ShowcasePage'
import { WorkDetailPage } from './pages/WorkDetailPage'
import { PricingPage } from './pages/PricingPage'
import { WorkPage } from './pages/WorkPage'

const PRIMARY_ROUTES = ['/', '/studio', '/pricing'] as const

export default function App() {
  const location = useLocation()
  const reduceMotion = usePrefersReducedMotion()
  const isPrimaryRoute = PRIMARY_ROUTES.includes(
    location.pathname as (typeof PRIMARY_ROUTES)[number],
  )

  const routes = (
    <Routes location={location}>
      <Route path="/" element={<HomePage />} />
      <Route path="/studio" element={<ShowcasePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/approach" element={<Navigate to="/studio" replace />} />
      <Route path="/showcase" element={<Navigate to="/studio" replace />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/work/:slug" element={<WorkDetailPage />} />
    </Routes>
  )

  return (
    <Layout>
      {isPrimaryRoute && !reduceMotion ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            onAnimationComplete={() => ScrollTrigger.refresh()}
          >
            {routes}
          </motion.div>
        </AnimatePresence>
      ) : (
        routes
      )}
    </Layout>
  )
}
