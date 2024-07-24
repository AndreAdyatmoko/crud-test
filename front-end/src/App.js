import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/LandingPage/home'
import LoginPage from './pages/LoginPage/loginPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
