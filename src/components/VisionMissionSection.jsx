import React from "react";
import { FaCheck } from "react-icons/fa6";

const VisionMissionSection = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 items-stretch">

        {/* LEFT BOX */}
        <div
          className="bg-cover bg-center rounded-2xl p-8 text-white flex flex-col justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60')",
          }}
        >
          <h2 className="text-5xl font-bold mb-2">40,000+</h2>
          <h3 className="text-2xl font-semibold mb-3">Completed Projects</h3>
          <p className="text-gray-100 text-sm leading-relaxed">
            From healthcare to infrastructure, we’ve successfully delivered
            thousands of projects across industries.
          </p>
        </div>

        {/* MIDDLE BOX */}
        <div className="flex flex-col gap-6">
          {/* Vision Box */}
          <div className="bg-[#052A1F] text-white rounded-2xl p-8 flex-1">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              To empower businesses with smart, sustainable, and connected
              digital solutions that drive growth and innovation.
            </p>
          </div>

          {/* Mission Box */}
          <div className="bg-[#DEFFB9] text-[#052A1F] rounded-2xl p-8 flex-1">
            <h3 className="text-2xl font-semibold mb-4">Our Missions</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#19745A]" />
                Deliver top-tier technology solutions
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#19745A]" />
                Build long-term client relationships
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#19745A]" />
                Foster innovation & sustainability
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT BOX */}
        <div
          className="bg-cover bg-center rounded-2xl md:h-auto h-[50vh]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60')",
          }}
        ></div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
