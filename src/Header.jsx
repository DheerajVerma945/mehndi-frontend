import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <header className="fixed w-full top-0 bg-amber-900 z-50 shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-amber-50 text-3xl font-bold transition-colors">
              Mehndi Artistry
            </Link>
            
            <div className="hidden md:flex space-x-8 items-center">
              <NavLink 
                to="/gallery" 
                className={({ isActive }) => `text-amber-50 transition-colors ${isActive ? 'border-b-2 border-amber-50' : ''}`}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => `text-amber-50 transition-colors ${isActive ? 'border-b-2 border-amber-50' : ''}`}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => `text-amber-50 transition-colors ${isActive ? 'border-b-2 border-amber-50' : ''}`}
              >
                Contact
              </NavLink>
            </div>
  
            <button 
              className="md:hidden text-amber-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
  
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <NavLink to="/gallery" className="block text-amber-50">Gallery</NavLink>
              <NavLink to="/about" className="block text-amber-50">About</NavLink>
              <NavLink to="/contact" className="block text-amber-50">Contact</NavLink>
            </div>
          )}
        </nav>
      </header>
    );
  };

export default Header
