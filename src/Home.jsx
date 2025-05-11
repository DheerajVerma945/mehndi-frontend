import { useState } from "react";
import { Link, NavLink } from "react-router-dom";





const HomePage = () => {
  return (
    <div className="bg-amber-50">
      <main className="pt-[68px]">
        <section className="relative h-screen bg-[url('/images/image1.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-amber-800/50">
            <div className="container mx-auto px-6 h-full flex items-center">
              <div className="max-w-2xl text-amber-50 space-y-8">
                <h1 className="text-6xl font-bold leading-tight">Where Tradition Meets Modern Artistry</h1>
                <p className="text-xl font-light max-w-xl">Experience the timeless beauty of henna through our master artists</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-amber-900 mb-6">Cultural Design Heritage</h2>
            <p className="text-amber-700 max-w-3xl mx-auto text-lg">Discover the rich tapestry of mehndi artistry</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img src="/images/image2.jpg" alt="Arabic Design" className="w-full h-96 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 p-6 flex flex-col justify-end">
                <h3 className="text-2xl text-amber-50 font-semibold mb-2">Arabic Elegance</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img src="/images/image4.jpg" alt="Indian Design" className="w-full h-96 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 p-6 flex flex-col justify-end">
                <h3 className="text-2xl text-amber-50 font-semibold mb-2">Indian Intricacy</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-xl">
              <img src="/images/image3.jpg" alt="Modern Design" className="w-full h-96 object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/80 p-6 flex flex-col justify-end">
                <h3 className="text-2xl text-amber-50 font-semibold mb-2">Contemporary Fusion</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;