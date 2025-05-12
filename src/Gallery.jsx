import React from "react";
import { db } from "./data";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const MehndiGallery = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 py-16 pt-[100px]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4">
            Traditional & Modern Designs
          </h1>
          <p className="text-lg text-amber-700">
            Explore intricate patterns from bridal henna to contemporary body art
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {db.map(({ id, title, src }) => (
            <Link to={`/design/${id}`}
              key={id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent p-6 flex items-end">
                <h2 className="text-amber-50 text-xl font-semibold">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <div className="flex justify-center mb-10">
        <a
          href="https://wa.me/917417419381?text=I%20want%20a%20custom%20design"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
        >
          <MessageCircle size={20} />
          I want a custom design
        </a>
      </div>
    </div>
  );
};

export default MehndiGallery;