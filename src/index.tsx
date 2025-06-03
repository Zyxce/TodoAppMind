import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/base/normalize.css'
import './styles/base/variables.css'
import './styles/index.css'
import App from './components/App'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

const root: ReactDOM.Root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
