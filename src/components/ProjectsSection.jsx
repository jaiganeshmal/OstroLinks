import React from "react";

const projects = [
  "350 kW On-grid Solar system at Al Shahbaz Group, Site area, Karachi.",
  "150 kW On-grid Solar system at Union PVC pipes, Karachi.",
  "150 kW On-grid Solar system at CH Aslam ICE Factory, Muzaffargarh.",
  "130 kW On-grid Solar system Punjab.",
  "40 kW On-grid solar system extension at Al Shahbaz Group, Karachi.",
  "25 kW On-grid solar system at Hajvery Sweets factory, Alipur.",
  "20 kW On-grid solar system at Aiman Hospital, UCH Shareef.",
  "20 kW On-grid solar system at Hajvery Sweets shop, Alipur.",
  "20 kW On-grid solar system at Hajvery Sweets House, Alipur.",
  "20 kW On-grid Hybrid solar system at Al Manan Town, Alipur.",
  "15 kW On-grid Hybrid solar system at North Nazimabad, Karachi.",
  "15 kW On-grid Hybrid solar system at Madrisa Gulzar e Madina, Muzaffargarh.",
  "12 kW On-grid Hybrid solar system at Masjid Bait-ur-Rehman, PIB Karachi.",
  "10 kW On-grid solar system at Al Manan Town, Alipur."
];

const projectImages = [
  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80",
  "https://cdn.pixabay.com/photo/2025/02/21/14/33/ai-generated-9422328_1280.png",
  "https://cdn.pixabay.com/photo/2020/10/24/07/29/man-5680696_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/08/21/17/26/solar-photovoltaic-2666106_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/01/10/16/05/solar-8499874_1280.jpg"
];

const ProjectsSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#f4f9f6] py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#19745A]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#19745A]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#052A1F] mb-4">
          Our <span className="text-[#19745A]">Projects</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Delivering clean, efficient, and sustainable solar energy solutions across Pakistan.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column: list */}
          <ul className="text-left space-y-3">
            {projects.map((p, i) => (
              <li
                key={i}
                className="text-gray-700 text-base leading-relaxed flex items-start gap-3"
              >
                <span className="text-[#19745A] text-lg mt-[2px]">•</span> {p}
              </li>
            ))}
          </ul>

          {/* Right column: image gallery */}
          <div className="grid grid-cols-2 gap-4 justify-center">
            {projectImages.map((img, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]"
              >
                <img
                  src={img}
                  alt={`Project ${idx + 1}`}
                  className="w-full h-44 md:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-[#19745A]/20 hover:bg-transparent transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
