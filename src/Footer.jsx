import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-amber-900 text-amber-50 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-cursive">Mehndi Artistry</h3>
              <p className="text-amber-200">Preserving tradition through intricate henna designs</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Policies</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="hover:text-amber-200">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-amber-200">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-700 mt-8 pt-6 text-center text-amber-200">
            <p>© 2025 Mehndi Artistry</p>
          </div>
        </div>
      </footer>
    );
  };

export default Footer
