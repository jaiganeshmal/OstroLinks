import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa6";
import { assets } from "../assets/global";

const Footer = () => {
  return (
    <footer className="bg-[#042B20] text-white pt-10 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 🌞 Company Info */}
        <div>
          {/* ✅ Logo + Text Row */}
          <div className="flex items-center mb-2">
            <img
              src={assets.logo}
              alt="OstroLinks Logo"
              className="size-10 object-contain"
              loading="lazy"
            />
            <h2 className="text-2xl font-semibold tracking-wide text-white">
              Ostro<span className="text-[#DEFFB9]">Links</span>
            </h2>
          </div>

          <p className="text-gray-200 text-sm leading-relaxed mb-4">
            Empowering a sustainable future through innovative solar energy
            solutions and eco-friendly technologies for a brighter tomorrow.
          </p>

          {/* 📞 Contact Info */}
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2 text-gray-200">
              <FaPhone size={14} className="text-[#DEFFB9]" />
              +92 311 7117234
            </p>
            <p className="flex items-center gap-2 text-gray-200">
              <FaEnvelope size={14} className="text-[#DEFFB9]" />
              info@ostrolinks.com
            </p>
          </div>
        </div>

        {/* 🧭 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#DEFFB9]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="hover:text-[#DEFFB9] cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-[#DEFFB9] cursor-pointer transition">
              Services
            </li>
            <li className="hover:text-[#DEFFB9] cursor-pointer transition">
              Projects
            </li>
            <li className="hover:text-[#DEFFB9] cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* ⚙️ Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#DEFFB9]">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="hover:text-[#DEFFB9] cursor-pointer transition">
              Solar Solution
            </li>
            <li className="hover:text-[#DEFFB9] cursor-pointer transition">
              Solar Products
            </li>
            <li className="hover:text-[#DEFFB9] cursor-pointer transition">
              Electrical Components
            </li>
            <li className="hover:text-[#DEFFB9] cursor-pointer transition">
              Cable Management
            </li>
            <li className="hover:text-[#DEFFB9] cursor-pointer transition">
              UPVC Pipes manufacture
            </li>
          </ul>
        </div>

        {/* 🌐 Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#DEFFB9]">
            Follow Us
          </h3>
          <p className="text-gray-200 text-sm mb-4">
            Stay connected with us for solar insights and green energy updates.
          </p>
          <div className="flex items-center gap-3">
            {[
              FaFacebookF,
              FaInstagram,
              FaLinkedinIn,
              FaXTwitter,
              FaYoutube,
            ].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 text-black hover:text-white rounded-full bg-[#DEFFB9] flex items-center justify-center hover:bg-[#197258] transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-600 mt-12 pt-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} OstroLinks. All rights reserved.
      </div>

      {/* Back to top */}
      <a
        href="#top"
        className="absolute bottom-6 right-6 text-black hover:text-white bg-[#DEFFB9] hover:bg-[#197258] p-3 rounded-full shadow-lg transition"
        title="Back to top"
      >
        <FaArrowUp size={16} />
      </a>
    </footer>
  );
};

export default Footer;
