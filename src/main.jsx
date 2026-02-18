import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/theme.css'
import './styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* ensure scrolling and route-change feels consistent */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)