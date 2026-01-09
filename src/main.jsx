import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// 根據環境動態設置 basename
// 開發環境使用 '/'，生產環境（GitHub Pages）使用 '/Buger-O-clock/'
const basename = import.meta.env.PROD ? '/Buger-O-clock/' : '/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
