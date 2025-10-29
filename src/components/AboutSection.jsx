import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full py-10 bg-white text-center px-6 md:px-0">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#052A1F] mb-6">
          About Us
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          We are committed to delivering clean energy solutions through modern
          solar technology, helping homes and businesses save on costs, go
          green, and ensure a sustainable future of renewable energy and a good
          life.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
