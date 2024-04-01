import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <React.StrictMode>
  <Toaster position="top-center" />
    <App />
  </React.StrictMode>,
  </ThemeProvider>
)
