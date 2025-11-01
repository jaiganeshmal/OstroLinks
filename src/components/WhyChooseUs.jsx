import React from "react";
import { FaLeaf, FaCoins, FaCogs, FaBolt } from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf />,
    title: "Eco-friendly approach",
    text: "Nemo enim ipsam voluptatem quia voluptas aut aut fugit, se quia ipsum consequuntur magni dolores eos qui ratione voluptatem.",
  },
  {
    icon: <FaCoins />,
    title: "Cost efficiency",
    text: "Nemo enim ipsam voluptatem quia voluptas aut aut fugit, se quia ipsum consequuntur magni dolores eos qui ratione voluptatem.",
  },
  {
    icon: <FaCogs />,
    title: "Innovative technology",
    text: "Nemo enim ipsam voluptatem quia voluptas aut aut fugit, se quia ipsum consequuntur magni dolores eos qui ratione voluptatem.",
  },
  {
    icon: <FaBolt />,
    title: "Sustainable impact",
    text: "Nemo enim ipsam voluptatem quia voluptas aut aut fugit, se quia ipsum consequuntur magni dolores eos qui ratione voluptatem.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start gap-10">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 space-y-4">
          {/* Label */}
          <p className="text-sm text-[#19745A] uppercase tracking-widest font-semibold">
            🌱 Why Choose Us
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#052A1F] leading-snug">
            Trusted partner for <br /> sustainable solar energy
          </h2>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/cta-image.jpg" // replace with your own image
              alt="Solar Team"
              className="w-full h-[300px] object-cover"
              loading="lazy"
            />
          </div>

          {/* Trusted Partner Block */}
          <div className="bg-[#052A1F] text-white rounded-2xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-medium">
              🌱 Trusted by 450+ Partners
            </p>
            <div className="flex items-center gap-6 text-gray-300 text-sm">
              <span>HOOKS</span>
              <span>FOX HUB</span>
              <span>HEXLAB</span>
              <span>MUZICA</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-5 rounded-2xl ${
                index === 3 ? "bg-[#DEFFB9]" : "bg-[#F3F8F6]"
              }`}
            >
              {/* Icon */}
              <div className="bg-[#19745A] text-white p-3 rounded-full text-lg flex items-center justify-center">
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-[#052A1F] mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
