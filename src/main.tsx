import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SmoothScrollProvider } from './components/motion/SmoothScrollProvider'
import App from './App'
import { initGsapMotion } from './lib/gsap'
import './index.css'

initGsapMotion()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScrollProvider>
        <App />
      </SmoothScrollProvider>
    </BrowserRouter>
  </StrictMode>,
)
