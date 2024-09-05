import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import Navbar from './components/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
'react-router-dom'
function App() {
return (


  <Router>
    <Navbar/>
  <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  </Router>
)
}

export default App
