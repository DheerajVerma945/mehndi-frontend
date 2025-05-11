import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 py-16 pt-[100px]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">Contact Us</h1>
          <p className="text-lg text-amber-700 mb-8">
            We'd love to hear from you! Reach out to us for any inquiries or to book a mehndi design session.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-amber-100 rounded-lg shadow-md">
              <MailIcon className="w-8 h-8 text-amber-700 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-amber-800 mb-2">Email</h3>
              <p className="text-amber-600">contact@mehndidesigns.com</p>
            </div>

            <div className="p-6 bg-amber-100 rounded-lg shadow-md">
              <PhoneIcon className="w-8 h-8 text-amber-700 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-amber-800 mb-2">Phone</h3>
              <p className="text-amber-600">+91 9797818400</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-amber-800 mb-4">Our Location</h2>
            <div className="flex items-center justify-center p-6 bg-amber-100 rounded-lg shadow-md">
              <MapPinIcon className="w-8 h-8 text-amber-700 mr-4" />
              <p className="text-lg text-amber-700">Meerut, India</p>
            </div>
          </div>

          <form className="bg-amber-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-amber-800 mb-4">Send us a message</h3>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-amber-50 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-amber-50 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                className="w-full p-3 bg-amber-50 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-amber-700 hover:bg-amber-800 text-amber-50 rounded-full transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
