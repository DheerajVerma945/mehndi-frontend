import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {axiosInstance} from "./utils/axiosInstance";
import {
  MapPinIcon,
  ClockIcon,
  FileTextIcon,
  MessageCircle,
  LoaderCircle,
} from "lucide-react";

const Design = () => {
  const { id } = useParams();
  const [design, setDesign] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDesign = async () => {
      try {
        const res = await axiosInstance.get(`/admin/blogs/${id}`);
        setDesign(res.data);
      } catch {
        setDesign(null);
      } finally {
        setLoading(false);
      }
    };
    fetchDesign();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-amber-50">
        <LoaderCircle className="w-10 h-10 text-amber-700 animate-spin" />
      </div>
    );
  }

  if (!design) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-amber-50 px-4">
        <p className="text-3xl text-amber-900 font-semibold mb-2">Design not found</p>
        <p className="text-amber-600 text-center">Please check the design ID and try again</p>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl overflow-hidden shadow-lg mb-10">
          <img
            src={design.src}
            alt={design.name}
            className="w-full h-[380px] sm:h-[500px] object-cover object-center"
          />
        </div>

        <h1 className="text-4xl font-bold text-center text-amber-900 mb-2">
          {design.name}
        </h1>
        <p className="text-center text-lg text-amber-700 mb-6">{design.title}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">

          <div className="flex items-center bg-white p-5 rounded-2xl shadow">
            <ClockIcon className="text-amber-700 w-6 h-6 mr-4" />
            <div>
              <p className="text-sm text-amber-600">Application Time</p>
              <p className="text-amber-900 font-medium">{design.time} minutes</p>
            </div>
          </div>

          <div className="sm:col-span-2 bg-white p-5 rounded-2xl shadow flex">
            <FileTextIcon className="text-amber-700 w-6 h-6 mr-4 mt-1" />
            <p className="text-amber-800 leading-relaxed">{design.about}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href={`https://wa.me/917417419381?text=Hey,%20I%20want%20to%20book%20${encodeURIComponent(
              design.title
            )}%20design`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-green-700 hover:bg-green-800 text-white text-lg rounded-full transition"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Book via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Design;
