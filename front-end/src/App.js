import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/LandingPage/home'
import LoginPage from './pages/LoginPage/loginPage'
import Navbar from './pages/navbar/navbar'
import Footer from './pages/footer/footer'
import About from './pages/about/about'
import Contact from './pages/contact/contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
