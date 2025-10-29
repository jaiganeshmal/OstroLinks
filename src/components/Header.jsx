import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { assets } from "../assets/global";

const Header = () => {
  return (
    <section className="relative w-full h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={assets.headerVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-3xl">
        {/* Top - 3 round images */}
        <div className="flex justify-center items-center mb-1">
          <img
            src={assets.img1}
            alt="Customer 1"
            className="w-12 h-12 rounded-full border-2 border-[#DEFFB9] shadow-lg"
          />
          <img
            src={assets.img2}
            alt="Customer 2"
            className="w-12 h-12 rounded-full border-2 border-[#DEFFB9] shadow-lg"
          />
          <img
            src={assets.img3}
            alt="Customer 3"
            className="w-12 h-12 rounded-full border-2 border-[#DEFFB9] shadow-lg"
          />
        </div>

        {/* Satisfaction Text */}
        <p className="text-[#DEFFB9] text-sm font-medium mb-4">
          25k Customer satisfaction
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Powering the future <br />
          <span className="text-[#DEFFB9]">with clean energy</span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-200 mb-8 leading-relaxed">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi.
        </p>

        {/* Buttons Row */}
        <div className="flex justify-center gap-4 flex-wrap">
          {/* First Button */}
          <button className="flex items-center gap-2 bg-[#DEFFB9] text-[#052A1F] font-semibold px-5 py-3 rounded-full hover:bg-[#c8f299] transition duration-300">
            Free Consultations
            <FaArrowRight />
          </button>

          {/* Second Button */}
          <button className="flex items-center gap-2 border border-[#DEFFB9] text-white font-semibold px-5 py-3 rounded-full hover:bg-[#DEFFB9] hover:text-[#052A1F] transition duration-300">
            Explore Services
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
