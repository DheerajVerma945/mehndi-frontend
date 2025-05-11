import React from 'react';
import { HeartIcon, HandIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-16 pt-[100px]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">About Us</h1>
          <p className="text-lg text-amber-700 mb-8">
            We are a passionate team dedicated to creating beautiful and unique Mehndi designs for our customers. 
            Our mission is to make every occasion special by adding a personal touch with intricate henna artistry.
          </p>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-amber-800 mb-4">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-6 bg-amber-100 rounded-lg shadow-md">
                <HeartIcon className="w-8 h-8 text-amber-700 mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-amber-800 mb-2">Personalized Mehndi Designs</h3>
                <p className="text-amber-600">
                  We create custom designs based on your preferences, ensuring each design is unique and meaningful.
                </p>
              </div>

              <div className="p-6 bg-amber-100 rounded-lg shadow-md">
                <HandIcon className="w-8 h-8 text-amber-700 mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-amber-800 mb-2">Handcrafted Artistry</h3>
                <p className="text-amber-600">
                  Our artists use traditional techniques to create stunning designs that are perfect for weddings, festivals, and other celebrations.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-amber-800 mb-4">Our Location</h2>
            <div className="flex items-center justify-center p-6 bg-amber-100 rounded-lg shadow-md">
              <MapPinIcon className="w-8 h-8 text-amber-700 mr-4" />
              <p className="text-lg text-amber-700">Meerut, India</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-amber-800 mb-4">Get In Touch</h2>
            <div className="flex items-center justify-center p-6 bg-amber-100 rounded-lg shadow-md">
              <PhoneIcon className="w-8 h-8 text-amber-700 mr-4" />
              <p className="text-lg text-amber-700">Call us at: +91 9797818400</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
