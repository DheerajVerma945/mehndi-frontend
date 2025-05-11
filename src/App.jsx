import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Home'
import About from './About'
import Contact from './Contact'
import Gallery from './Gallery'
import Design from './Design'
import Header from './Header'
import Footer from './Footer'
import ErrorPage from './Error'
import PrivacyPolicy from './Privacy'
import TermsAndConditions from './TC'

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
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />

        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
