import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa"; // ✅ Fixed import

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#052A1F] ">
      {/* Container */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Left - Logo */}
        <div className="text-2xl font-bold text-white tracking-wide">
          <Link to="/">OstroLinks</Link>
        </div>

        {/* Middle - Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-[#DEFFB9] transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#DEFFB9] transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-[#DEFFB9] transition duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#DEFFB9] transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Right - Desktop Button */}
        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-[#19745A] text-white px-5 py-2 rounded-full hover:bg-[#DEFFB9] hover:text-[#052A1F] transition duration-300"
          >
            Get in Touch
            <FaArrowRight />
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#052A1F] border-t border-[#19745A]">
          <ul className="flex flex-col items-center py-4 space-y-4 text-white font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#DEFFB9] transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#DEFFB9] transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#DEFFB9] transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#DEFFB9] transition duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 bg-[#19745A] text-white px-5 py-2 rounded-full hover:bg-[#DEFFB9] hover:text-[#052A1F] transition duration-300"
              >
                Get in Touch
                <FaArrowRight />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
