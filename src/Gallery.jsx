import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, LoaderCircle } from "lucide-react";
import {axiosInstance} from "./utils/axiosInstance";

const MehndiGallery = () => {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        const res = await axiosInstance.get("/admin/blogs");
        setDesigns(res.data || []);
      } finally {
        setLoading(false);
      }
    };
    fetchDesigns();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-amber-50">
        <LoaderCircle className="w-10 h-10 text-amber-700 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-amber-50 min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 py-20 pt-[100px]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-900 mb-4">
            Traditional & Modern Designs
          </h1>
          <p className="text-lg text-amber-700">
            Explore intricate patterns from bridal henna to contemporary body art
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map(({ _id, title, src }) => (
            <Link
              to={`/design/${_id}`}
              key={_id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={src}
                alt={title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-transparent p-6 flex items-end">
                <h2 className="text-amber-50 text-xl font-semibold">{title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="flex justify-center mb-12">
        <a
          href="https://wa.me/917417419381?text=I%20want%20a%20custom%20design"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-lg px-6 py-3 rounded-full shadow transition duration-300"
        >
          <MessageCircle size={20} />
          I want a custom design
        </a>
      </div>
    </div>
  );
};

export default MehndiGallery;
