import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UnderConstruction from './components/UnderConstruction/UnderConstruction.jsx'
import Home from './Sections/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Router>
      <Routes>
        <Route path='/' element={<UnderConstruction />} />
        <Route path='/wip' element={<Home />} />
        </Routes>
        </Router>
  </React.StrictMode>,
)
