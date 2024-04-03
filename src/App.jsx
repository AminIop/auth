import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Home, NotFound } from './screens'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App