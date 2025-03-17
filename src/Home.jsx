import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <header className="fixed w-full top-0 bg-amber-900 z-50 shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-amber-50 text-3xl font-cursive hover:text-amber-200 transition-colors">
              Mehndi Artistry
            </h1>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="text-amber-50 hover:text-amber-200 transition-colors font-medium">Home</a>
              <a href="#gallery" className="text-amber-50 hover:text-amber-200 transition-colors font-medium">Gallery</a>
              <a href="#about" className="text-amber-50 hover:text-amber-200 transition-colors font-medium">About</a>
              <a href="#contact" className="text-amber-50 hover:text-amber-200 transition-colors font-medium">Contact</a>
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
              <a href="#home" className="block text-amber-50 hover:text-amber-200">Home</a>
              <a href="#gallery" className="block text-amber-50 hover:text-amber-200">Gallery</a>
              <a href="#about" className="block text-amber-50 hover:text-amber-200">About</a>
              <a href="#contact" className="block text-amber-50 hover:text-amber-200">Contact</a>
            </div>
          )}
        </nav>
      </header>
    );
  };
  
  const Footer = () => {
    return (
      <footer className="bg-amber-900 text-amber-50 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-cursive">Mehndi Artistry</h3>
              <p className="text-amber-200">Preserving tradition through intricate henna designs</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-amber-200 flex items-center gap-2"><span>→</span>Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-200 flex items-center gap-2"><span>→</span>Terms of Service</a></li>
                <li><a href="#" className="hover:text-amber-200 flex items-center gap-2"><span>→</span>FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-amber-800 p-2 rounded-full hover:bg-amber-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="bg-amber-800 p-2 rounded-full hover:bg-amber-700">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@mehndiartistry.com
                </p>
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 234 567 890
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-700 mt-8 pt-6 text-center text-amber-200">
            <p>© 2023 Mehndi Artistry. Preserving cultural heritage through art</p>
          </div>
        </div>
      </footer>
    );
  };
  
  const HomePage = () => {
    return (
      <div className="bg-amber-50">
        <Header />
        <main className="pt-[68px]">
          <section className="relative h-screen bg-[url('/images/image1.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-800/50">
              <div className="container mx-auto px-6 h-full flex items-center">
                <div className="max-w-2xl text-amber-50 space-y-8">
                  <h1 className="text-6xl font-bold leading-tight">Where Tradition Meets Modern Artistry</h1>
                  <p className="text-xl font-light max-w-xl">Experience the timeless beauty of henna through our master artists, blending centuries-old techniques with contemporary designs</p>
                  <div className="flex gap-4">
                    <button className="bg-emerald-600 text-amber-50 px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all hover:scale-105">
                      Book Session Now
                    </button>
                    <button className="border-2 border-amber-50 text-amber-50 px-8 py-4 rounded-lg hover:bg-amber-50/20 transition-all">
                      View Portfolio
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <section className="container mx-auto px-6 py-24">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">Cultural Design Heritage</h2>
              <p className="text-amber-700 max-w-3xl mx-auto text-lg">Discover the rich tapestry of mehndi artistry spanning across continents and generations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img src="./images/image2.jpg" alt="Arabic Design" className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform"/>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl text-amber-50 font-semibold mb-2">Arabic Elegance</h3>
                  <p className="text-amber-200">Fluid patterns and floral motifs characteristic of Middle Eastern traditions</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img src="./images/image4.jpg" alt="Indian Design" className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform"/>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl text-amber-50 font-semibold mb-2">Indian Intricacy</h3>
                  <p className="text-amber-200">Detailed peacock and mandala patterns from South Asian celebrations</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img src="./images/image3.jpg" alt="Modern Design" className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform"/>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl text-amber-50 font-semibold mb-2">Contemporary Fusion</h3>
                  <p className="text-amber-200">Modern interpretations blending multiple cultural influences</p>
                </div>
              </div>
            </div>
          </section>
  
          <section className="bg-amber-900/10 py-24">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-amber-900 mb-8">The Art of Henna</h2>
                <div className="grid md:grid-cols-3 gap-8 text-amber-800">
                  <div className="space-y-4 p-6 bg-amber-50 rounded-xl">
                    <div className="text-emerald-600 text-4xl">100+</div>
                    <h4 className="font-semibold">Design Patterns</h4>
                    <p className="text-sm">Unique traditional and modern designs</p>
                  </div>
                  <div className="space-y-4 p-6 bg-amber-50 rounded-xl">
                    <div className="text-emerald-600 text-4xl">8+</div>
                    <h4 className="font-semibold">Years Experience</h4>
                    <p className="text-sm">Mastering cultural techniques</p>
                  </div>
                  <div className="space-y-4 p-6 bg-amber-50 rounded-xl">
                    <div className="text-emerald-600 text-4xl">100%</div>
                    <h4 className="font-semibold">Natural Ingredients</h4>
                    <p className="text-sm">Safe, organic henna mixtures</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default HomePage;