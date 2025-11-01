import React from "react";
import { FaLightbulb, FaCogs, FaRocket, FaChartLine } from "react-icons/fa";

const steps = [
  {
    icon: <FaLightbulb />,
    title: "Ideation Phase",
    desc: "Brainstorm creative concepts to spark innovation.",
    color: "from-[#00C9A7] to-[#007F73]",
  },
  {
    icon: <FaCogs />,
    title: "Development Stage",
    desc: "Transform innovative ideas into real-world solutions.",
    color: "from-[#00B4D8] to-[#0077B6]",
  },
  {
    icon: <FaRocket />,
    title: "Implementation",
    desc: "Launch and deploy with speed and precision.",
    color: "from-[#FF6F61] to-[#C62828]",
  },
  {
    icon: <FaChartLine />,
    title: "Scaling & Growth",
    desc: "Expand impact and measure sustainable progress.",
    color: "from-[#AB47BC] to-[#6A1B9A]",
  },
];

const Roadmap = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#f7fdfa] to-[#ecf7f3] py-10 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-3">
        <h2 className="text-5xl font-extrabold text-[#052A1F]">
          Innovation <span className="text-[#009e73]">Roadmap Journey</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          A visually captivating roadmap guiding ideas into real-world innovation.
        </p>
      </div>

      {/* Curved Road (SVG) */}
      <div className="relative w-[95%] max-w-7xl mx-auto">
        <svg
          viewBox="0 0 1200 300"
          className="absolute top-0 left-0 w-full opacity-40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,220 Q300,60 600,220 T1200,220"
            stroke="#004d40"
            strokeWidth="12"
            strokeDasharray="40 20"
            fill="transparent"
            strokeLinecap="round"
          />
        </svg>

        {/* Steps */}
        <div className="relative flex justify-between items-center flex-wrap mt-12 z-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center text-center w-[45%] md:w-auto transition-all duration-500 hover:scale-105"
            >
              {/* Glowing Icon Bubble */}
              <div
                className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${step.color} shadow-[0_0_30px_rgba(0,0,0,0.2)] flex items-center justify-center text-white text-4xl font-bold transition-transform duration-500 group-hover:scale-110`}
              >
                {/* Inner Glow Ring */}
                <div className="absolute inset-0 rounded-full border-[3px] border-white/40 animate-pulse blur-[1px]"></div>

                {step.icon}

                {/* Bottom 3D shadow */}
                <div className="absolute bottom-[-6px] left-0 w-full h-[10px] bg-black/10 rounded-full blur-md"></div>
              </div>

              {/* Connector Line */}
              <div className="w-[3px] h-12 bg-gradient-to-b from-[#19745A]/60 to-transparent mt-2"></div>

              {/* Text */}
              <h3 className="text-lg md:text-xl font-semibold text-[#052A1F] mt-4">
                {step.title}
              </h3>
              <p className="text-gray-500 mt-2 max-w-[200px] leading-snug text-sm">
                {step.desc}
              </p>

              {/* Neon Hover Glow */}
              <div className="absolute inset-0 blur-2xl bg-[#00c896]/20 opacity-0 group-hover:opacity-100 transition duration-700 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Blurs for Depth */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00c896]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#005a44]/20 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Roadmap;
