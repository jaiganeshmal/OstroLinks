import React from "react";
import { FaSun, FaBolt, FaTools, FaWind } from "react-icons/fa";

const points = [
  {
    id: "01",
    icon: <FaSun size={22} />,
    text: "We provide best solar solutions & services for Industries, Commercial, Agriculture, and Residential sectors. We also offer Solar Lights and poles for industrial use.",
  },
  {
    id: "02",
    icon: <FaBolt size={22} />,
    text: "We are trusted suppliers of Electrical Components in Pakistan, including Breakers (ABB/Schneider/Himel/CHINT), Energy Analyzers (Janitza/Circutor), and complete LV monitoring systems.",
  },
  {
    id: "03",
    icon: <FaTools size={22} />,
    text: "We manufacture Cable Trays, Ladders, Distribution Boards, and UPVC pipes of all sizes with durable quality standards.",
  },
  {
    id: "04",
    icon: <FaWind size={22} />,
    text: "We supply VFDs (ABB/Danfoss/INVT), Solar Inverters, and Panels — providing wind and solar power solutions for small-scale industries.",
  },
];

const AboutSection = () => {
  return (
    <section className="w-full py-10 bg-gradient-to-b from-white to-[#f4faf7] px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-[#052A1F] mb-3">About Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            OstroLinks is one of Pakistan’s leading solar and electrical
            solution providers, delivering innovative, energy-efficient, and
            eco-friendly technologies that empower industries and communities.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {points.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300"
            >
              <div className="flex-shrink-0 relative">
                <div className="w-14 h-14 rounded-full bg-[#19745A] flex items-center justify-center text-white font-semibold text-lg">
                  {item.icon}
                </div>
                <span className="absolute -top-3 -right-3 w-7 h-7 flex items-center justify-center bg-white text-[#19745A] text-sm font-bold border border-[#19745A] rounded-full shadow-sm">
                  {item.id}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed text-base text-left">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
