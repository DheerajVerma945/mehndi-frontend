import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-amber-50 text-lg transition-colors ${
      isActive ? "border-b-2 border-amber-50" : ""
    }`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 w-full bg-amber-900 z-50 shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-amber-50 text-2xl sm:text-3xl font-bold tracking-wide"
            onClick={closeMenu}
          >
            Mehndi Artistry
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/gallery" className={navLinkClass} onClick={closeMenu}>
              Gallery
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
              Contact
            </NavLink>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-50"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden flex flex-col mt-4 space-y-4">
            <NavLink to="/gallery" className={navLinkClass} onClick={closeMenu}>
              Gallery
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
              About
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
