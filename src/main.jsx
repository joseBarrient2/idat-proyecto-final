import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Componentes/home.jsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <Home />
    </BrowserRouter>
)
