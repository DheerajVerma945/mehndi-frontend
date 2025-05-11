import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Home'
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import Design from './Design'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/design/:id" element={<Design />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
