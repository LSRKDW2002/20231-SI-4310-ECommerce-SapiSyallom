import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import { useEffect } from 'react'
import './css/products.css'
import './css/inputproduct.css'
import './css/navbar.css'
import './css/all.css'
import './css/fullproduk.css'
import './css/loginreg.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
