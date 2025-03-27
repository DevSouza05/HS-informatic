import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { setup } from 'twind';
import App from './App.jsx'

setup()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
