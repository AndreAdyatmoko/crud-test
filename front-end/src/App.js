import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/LandingPage/home'
import Login from './view/login'
import Profile from './feature/profile/profile'
import LoginPage from './pages/LoginPage/loginPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
