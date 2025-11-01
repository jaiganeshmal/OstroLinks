import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaArrowRight,
} from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className="bg-white py-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#052A1F] mb-5">
            Let’s Connect <br /> and Power Your Future ⚡
          </h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Have a project in mind or want to explore solar energy solutions?  
            Fill out the form and our team will reach out within 24 hours.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: FaFacebookF, label: "Facebook" },
              { icon: FaInstagram, label: "Instagram" },
              { icon: FaLinkedinIn, label: "LinkedIn" },
              { icon: FaXTwitter, label: "Twitter" },
            ].map(({ icon: Icon, label }, index) => (
              <a
                key={index}
                href="#"
                aria-label={label}
                className="w-10 h-10 bg-[#EAF7EF] hover:bg-[#19745A] text-[#19745A] hover:text-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white/70 backdrop-blur-md border border-green-100 shadow-xl rounded-3xl p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-[#052A1F] mb-6">
            Send Us a Message
          </h3>

          <form className="space-y-5">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3.5 rounded-xl border border-gray-300 bg-[#f9fdfb] text-[#052A1F] text-sm focus:border-[#19745A] focus:ring-2 focus:ring-[#19745A]/30 outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3.5 rounded-xl border border-gray-300 bg-[#f9fdfb] text-[#052A1F] text-sm focus:border-[#19745A] focus:ring-2 focus:ring-[#19745A]/30 outline-none transition-all"
              />
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3.5 rounded-xl border border-gray-300 bg-[#f9fdfb] text-[#052A1F] text-sm focus:border-[#19745A] focus:ring-2 focus:ring-[#19745A]/30 outline-none transition-all"
              />
              <select className="w-full p-3.5 rounded-xl border border-gray-300 bg-[#f9fdfb] text-gray-500 text-sm focus:border-[#19745A] focus:ring-2 focus:ring-[#19745A]/30 outline-none transition-all">
                <option>Select Service</option>
                <option>Residential Solar</option>
                <option>Commercial Solar</option>
                <option>Consultation</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3.5 rounded-xl border border-gray-300 bg-[#f9fdfb] text-[#052A1F] text-sm focus:border-[#19745A] focus:ring-2 focus:ring-[#19745A]/30 outline-none resize-none transition-all"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="bg-[#19745A] hover:bg-[#0E3D2C] text-white font-semibold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 w-full md:w-auto transition-all shadow-md hover:shadow-lg"
            >
              Send Message <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
