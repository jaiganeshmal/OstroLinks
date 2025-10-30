import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const experts = [
  {
    name: "Ethan Carter",
    role: "Chief Executive Officer",
    image:
      "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/post-1.jpg",
  },
  {
    name: "Olivia Bennett",
    role: "Head of Engineering",
    image:
      "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/post-2.jpg",
  },
  {
    name: "Brilianz Brandon",
    role: "Project Manager",
    image:
      "https://demo.awaikenthemes.com/solor/wp-content/uploads/2024/03/post-3.jpg",
  },
  {
    name: "Sophia Martinez",
    role: "Energy Consultant",
    image:
      "https://img.freepik.com/free-photo/portrait-young-female-engineer-standing-solar-station-with-arms-crossed_1303-29951.jpg?w=500",
  },
];

const OurExperts = () => {
  return (
    <section className="w-[96%] mx-auto bg-[#042b20] text-white py-10 rounded-2xl">
      <div className="max-w-7xl mx-auto text-center px-4 md:px-8">
        {/* Section Tag */}
        <button className="text-sm font-medium border border-[#66FFB2] rounded-full px-6 py-2 text-[#66FFB2] uppercase tracking-wider mb-3 hover:bg-[#66FFB2] hover:text-[#042b20] transition duration-300 shadow-sm hover:shadow-[0_0_12px_#66FFB2]">
          Our Experts
        </button>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-green-100 mb-6 leading-tight max-w-3xl mx-auto">
          Meet the brilliant minds behind our innovation
        </h2>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {experts.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-[#063826] shadow-md hover:shadow-xl hover:shadow-[#66FFB2]/20 transition-all duration-500"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[370px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500"></div>

              {/* Social Icons */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {[FaInstagram, FaXTwitter, FaLinkedinIn].map((Icon, i) => (
                  <button
                    key={i}
                    className="bg-[#0a3d2f]/90 hover:bg-[#66FFB2] text-white hover:text-[#042b20] w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>

              {/* Info Box */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#19745A]/95 p-5 text-left rounded-t-xl translate-y-10 group-hover:translate-y-0 transition-all duration-500 backdrop-blur-sm">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-200">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExperts;
