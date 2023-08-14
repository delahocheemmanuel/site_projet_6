import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../assets/Pages/Home'
import About from '../assets/Pages/About'

import Accommodation from '../assets/Pages/Accommodation'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />{' '}
      {/* Route pour la page "About" */}
      <Route
        exact
        path="/accommodation/:cardId"
        element={<Accommodation />}
      /> 
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
