import React from "react";
import { assets } from "../assets/global";

const Loader = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-[#F8FAF9] overflow-hidden">

      {/* 🌀 Ambient Gradient Aura */}
      <div className="absolute w-[420px] h-[420px] bg-gradient-to-tr from-[#19745A]/20 via-[#43A047]/10 to-transparent rounded-full blur-[100px] animate-[pulseGlow_6s_ease-in-out_infinite]"></div>

      {/* 🟢 3D Spinning Halo */}
      <div className="relative">
        <div className="absolute inset-0 border-[4px] border-[#19745A]/30 border-t-transparent rounded-full animate-[spin_5s_linear_infinite]"></div>
        <div className="absolute inset-2 border-[4px] border-[#43A047]/20 border-b-transparent rounded-full animate-[spinReverse_8s_linear_infinite]"></div>

        {/* 🌞 Logo in center */}
        <div className="relative z-10 bg-white p-3 rounded-full shadow-[0_0_35px_rgba(25,116,90,0.25)]">
          <img
            src={assets.logo}
            alt="OstroLinks Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>

      {/* 🔤 Brand Name */}
      <h1 className="mt-8 text-4xl md:text-5xl font-extrabold text-[#052A1F] tracking-tight">
        Ostro<span className="text-[#19745A]">Links</span>
      </h1>

      {/* 💬 Tagline */}
      <p className="mt-2 text-gray-600 text-sm md:text-base font-medium">
        Connecting Energy. Empowering Change.
      </p>

      {/* ⚡ Dynamic progress line */}
      <div className="relative w-56 h-[5px] mt-10 bg-gray-200 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#19745A] via-[#43A047] to-[#19745A] animate-[energyMove_1.8s_linear_infinite]"></div>
      </div>

      {/* 🌱 Floating energy orbs */}
      <div className="absolute bottom-28 flex gap-3">
        <span className="w-3 h-3 bg-[#19745A]/90 rounded-full animate-[bounce_1.6s_infinite] delay-[0ms]"></span>
        <span className="w-3 h-3 bg-[#19745A]/60 rounded-full animate-[bounce_1.6s_infinite] delay-[150ms]"></span>
        <span className="w-3 h-3 bg-[#19745A]/40 rounded-full animate-[bounce_1.6s_infinite] delay-[300ms]"></span>
      </div>
    </div>
  );
};

export default Loader;
