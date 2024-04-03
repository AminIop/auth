import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, NotFound } from './screens'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App