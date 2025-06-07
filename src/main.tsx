import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './scss/antispam.scss'
import './scss/reset.scss'
import './scss/base.scss'

import App from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
