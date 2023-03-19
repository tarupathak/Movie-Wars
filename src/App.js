import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import LandingPage from './Pages/Landing Page'
import Footer from './Components/Footer'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Navbar />
    <LandingPage/>
    <Footer />
    </div>
  )
}

export default App