import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './js/app'

import './scss/antispam.scss'
import './scss/reset.scss'
import './scss/base.scss'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('public/assets/service-worker.js').then(r => {
      console.log('SW registered: ', r)
    }).catch(e => {
      console.log('SW registration failed: ', e)
    })
  })
}
