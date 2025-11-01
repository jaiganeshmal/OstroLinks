import React from "react";
import { FaArrowRight, FaSolarPanel, FaBatteryFull, FaIndustry, FaLeaf } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Solar panel installation",
    description: "Nemo enim ipsam voluptatem quia voluptas aut aut fugit, sed quia conseqntur magni.",
    image: "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/service-3.jpg", // replace with your image path
    icon: <FaSolarPanel />,
  },
  {
    id: 2,
    title: "Battery storage solutions",
    description: "Nemo enim ipsam voluptatem quia voluptas aut aut fugit, sed quia conseqntur magni.",
    image: "https://cdn.pixabay.com/photo/2024/07/15/17/32/ai-generated-8897488_1280.jpg",
    icon: <FaBatteryFull />,
  },
  {
    id: 3,
    title: "Commercial & industrial solutions",
    description: "Nemo enim ipsam voluptatem quia voluptas aut aut fugit, sed quia conseqntur magni.",
    image: "https://cdn.pixabay.com/photo/2024/01/10/16/11/solar-8499901_1280.jpg",
    icon: <FaIndustry />,
  },
  {
    id: 4,
    title: "Energy storage solutions",
    description: "Nemo enim ipsam voluptatem quia voluptas aut aut fugit, sed quia conseqntur magni.",
    image: "https://cdn.pixabay.com/photo/2024/03/26/11/57/solar-8656654_1280.jpg",
    icon: <FaLeaf />,
  },
];

const ServicesSection = () => {
  return (
    <section className="w-[95%] mx-auto bg-[#052A1F] py-8 rounded-xl ">
      <div className="w-11/12 md:w-4/5 mx-auto text-center">
        {/* Top Label */}
        <p className="text-sm text-[#DEFFB9] uppercase tracking-widest mb-2">
          🌱 Our Services
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Sustainable solar energy <span className="text-[#DEFFB9]">for every need</span>
        </h2>

        {/* Grid of Services */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden rounded-2xl group"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "350px",
              }}
            >
              {/* Top Right Icon */}
              <div className="absolute top-4 right-4 bg-[#DEFFB9] text-[#052A1F] p-4 rounded-full text-lg shadow-md">
                {service.icon}
              </div>

              {/* Bottom Left Info Box */}
              <div className="absolute bottom-0 left-0 w-[80%] bg-[#19745A] text-left p-5 rounded-tr-2xl">
                <h3 className="text-[#DEFFB9] text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-white text-sm mb-3">{service.description}</p>
                <button className="flex items-center gap-2 text-white hover:gap-3 transition-all duration-300">
                  Learn More <FaArrowRight />
                </button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
