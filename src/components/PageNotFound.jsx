import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 text-center px-6">
      {/* 404 Text */}
      <h1 className="text-[120px] md:text-[160px] font-extrabold text-[#00796B] leading-none">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 max-w-lg mt-3">
        Oops! The page you’re looking for doesn’t exist or might have been moved.  
        Let’s get you back on track.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 bg-[#00796B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#00564d] transition-all"
      >
        <FaHome className="text-lg" />
        Back to Home
      </Link>

      {/* Decorative Circle */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#00796B]/10 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#00796B]/10 blur-3xl"></div>
    </section>
  );
};

export default PageNotFound;
