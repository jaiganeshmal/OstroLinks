import React from "react";
import { FiPlayCircle, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    company: "Hooks",
    text: "OstroLinks completely changed how we use energy. Our monthly bills dropped significantly, and the installation process was smooth from start to finish. The team was professional, responsive, and truly passionate about green energy.",
    name: "Michael Green",
    role: "CEO Hookscreative",
    rating: "4.9/5",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    company: "Kanba",
    text: "We partnered with OstroLinks for our office building’s solar project, and the results exceeded expectations. Not only did we save money, but our carbon footprint decreased dramatically.",
    name: "Sarah Collins",
    role: "Facility Manager",
    rating: "4.8/5",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    company: "Radiyal",
    text: "Our manufacturing facility now runs mostly on solar energy thanks to OstroLinks. The investment paid off within the first year. Their expertise and dedication are commendable.",
    name: "Linda Perez",
    role: "Operations Manager",
    rating: "4.9/5",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="bg-[#f0f9f5] py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 self-start md:sticky md:top-20">
          <button className="inline-block border border-green-700 text-green-700 rounded-full px-4 py-1 uppercase text-sm font-medium hover:bg-green-700 hover:text-white transition">
            Client Stories
          </button>

          <h2 className="text-3xl md:text-4xl font-semibold text-green-900 mt-4 mb-4">
            What our clients say about OstroLinks
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Our clients share how OstroLinks solar energy solutions transformed
            their homes and businesses, helping them contribute to a greener
            world.
          </p>

          <button className="bg-[#197258] hover:bg-[#033a2a] text-white font-medium px-6 py-2 rounded-full flex items-center gap-2">
            View All Testimonials <FiArrowRight />
          </button>
        </div>

        {/* RIGHT STACKED SCROLL EFFECT */}
        <div className="md:w-1/2 relative md:h-[220vh]">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`transition-transform duration-500 ${
                index === 0 ? "mt-0" : "mt-[50px]"
              } ${"md:sticky md:top-24"}`}
              style={{
                zIndex: index + 1, // ✅ next card comes on top
              }}
            >
              <div className="bg-white rounded-xl shadow-md border border-green-100 backdrop-blur-sm p-6 transition-all duration-300">
                {/* COMPANY */}
                <p className="uppercase text-green-700 font-semibold mb-2">
                  {item.company}
                </p>

                <div className="flex gap-4">
                  {/* IMAGE */}
                  <div className="relative w-20 h-28 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xs font-medium">
                      <FiPlayCircle className="mr-1" /> Play Video
                    </button>
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* NAME + RATING */}
                <div className="flex justify-between items-center mt-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-gray-500">{item.role}</p>
                  </div>
                  <p className="text-green-700 font-medium">⭐ {item.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
