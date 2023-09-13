import React from 'react'
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route index element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='*' element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App