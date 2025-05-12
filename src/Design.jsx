import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ImageIcon, FileTextIcon, MapPinIcon, ClockIcon, MessageCircle } from 'lucide-react';
import { db } from './data';
import Footer from './Footer';

const Design = () => {
  const { id } = useParams();
  const [design, setDesign] = useState(null);

  useEffect(() => {
    const data = db.find((item) => item.id === id);
    setDesign(data || null);
  }, [id]);

  if (!design) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl text-amber-800">Design not found</p>
        <p className="text-amber-600 mt-2">Please check the design ID and try again</p>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-16 pt-[100px]">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-xl mb-8">
            <img
              src={`../${design.src}`}
              alt={design.name}
              className="w-full h-96 object-cover object-center"
            />
          </div>

          <h1 className="text-4xl font-bold text-amber-900 text-center mb-2">
            {design.name}
          </h1>
          <p className="text-lg text-amber-700 text-center mb-6">{design.title}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center p-4 bg-amber-100 rounded-lg">
              <MapPinIcon className="w-6 h-6 text-amber-700 mr-3" />
              <div>
                <p className="text-sm text-amber-600">Origin</p>
                <p className="font-medium text-amber-900">{design.originated}</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-amber-100 rounded-lg">
              <ClockIcon className="w-6 h-6 text-amber-700 mr-3" />
              <div>
                <p className="text-sm text-amber-600">Application Time</p>
                <p className="font-medium text-amber-900">{design.time}</p>
              </div>
            </div>

            <div className="flex items-start p-4 bg-amber-100 rounded-lg sm:col-span-2">
              <FileTextIcon className="w-6 h-6 text-amber-700 mr-3 mt-1" />
              <p className="text-amber-800 leading-relaxed">{design.about}</p>
            </div>
          </div>

          <a
            href={`https://wa.me/917417419381?text=Hey%20I%20want%20to%20book%20${encodeURIComponent(design.id)}%20design`}
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-amber-700 hover:bg-amber-800 text-amber-50 rounded-full transition-colors duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Book Design via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Design;
