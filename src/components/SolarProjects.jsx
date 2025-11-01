import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    date: "5 SEP, 2025",
    title: "Green Valley Homes",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia ipsam consequuntur magni dolores eos qui ratione voluptatem, tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet.",
    capacity: "250 kWp",
    industry: "Residential rooftop",
    location: "California, USA",
    image:
      "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/about-1.jpg",
  },
  {
    id: 2,
    date: "25 AUG, 2024",
    title: "Sunrise Office Tower",
    desc: "Nemo enim ipsam voluptatem quia voluptas aut aut fugit, se quia ipsam consequuntur magni dolores eos qui ratione voluptatem, tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet.",
    capacity: "150 kWp",
    industry: "Commercial building",
    location: "Sydney, Australia",
    image:
      "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/about-2.jpg",
  },
];

const SolarProjects = () => {
  return (
    <section className="bg-[#F8FCFA] text-gray-900 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Link
            to="#"
            className="inline-block text-sm text-[#19745A] border border-[#19745A] rounded-full px-4 py-1 uppercase tracking-wide hover:bg-[#19745A] hover:text-white transition duration-300"
          >
            Our Projects
          </Link>
          <h2 className="text-3xl md:text-4xl font-bold text-[#052A1F] mt-4 leading-snug">
            Proven solar solutions across every sector
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            Discover how our solar innovations are transforming industries worldwide.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative rounded-3xl overflow-hidden group shadow-xl"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[480px] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay Card */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "right-0" : "left-0"
                } bg-white/95 backdrop-blur-sm md:w-[480px] p-8 md:p-10 rounded-3xl shadow-2xl transition-all duration-300 group-hover:-translate-y-2`}
              >
                {/* Date */}
                <p className="text-xs text-gray-500 uppercase mb-2 tracking-wider">
                  {project.date}
                </p>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold text-[#052A1F] mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Meta Data */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div>
                    <p className="text-gray-500 text-xs">CAPACITY</p>
                    <p className="font-semibold text-[#19745A]">
                      {project.capacity}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">INDUSTRY</p>
                    <p className="font-semibold text-[#19745A]">
                      {project.industry}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">LOCATION</p>
                    <p className="font-semibold text-[#19745A]">
                      {project.location}
                    </p>
                  </div>
                </div>

                {/* Read More Button */}
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-[#19745A] font-medium hover:text-[#052A1F] transition-all duration-200"
                >
                  Read More
                  <FiArrowRight className="text-lg" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolarProjects;
