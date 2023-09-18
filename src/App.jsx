import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import About from './pages/about/About';
import QualityPage from './pages/quality/QualityPage';
import ContactPage from './pages/Contact/ContactPage';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1000,
      once: true,
      easing: "ease-out"
    })
  })
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/quality" element={<QualityPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App