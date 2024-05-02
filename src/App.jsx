import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Reserve from './pages/Reserve'
import Store from './pages/Store'
import About from './pages/About'
import { Route, Routes } from "react-router-dom"
import Footer from './components/Footer/Footer'

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme)
  }, [theme])

  return (
    
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
       
      <Footer theme={theme} setTheme={setTheme} />

    </div>
   )
}

export default App