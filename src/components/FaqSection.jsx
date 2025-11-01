import { useState } from "react";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa";

const faqs = [
  {
    question: "How long does a solar installation take?",
    answer:
      "A typical residential installation takes 1–3 days after site preparation and approvals are complete.",
  },
  {
    question: "What maintenance do solar panels require?",
    answer:
      "Solar panels require very little maintenance. Occasional cleaning and routine inspection are enough to keep them efficient.",
  },
  {
    question: "How much can I save by switching to solar?",
    answer:
      "Savings depend on your location, energy consumption, and system size — most homeowners see a 40–60% reduction in bills.",
  },
  {
    question: "Will solar panels work on cloudy or rainy days?",
    answer:
      "Yes, solar panels still generate electricity even on cloudy or rainy days — though output may be slightly reduced.",
  },
  {
    question: "Does OstroLinks offer warranties on its systems?",
    answer:
      "Yes — we provide 25-year performance warranties, ensuring reliability and peace of mind.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <section className="bg-[#f4faf6] py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-green-100">
            <img
              src="https://img.freepik.com/free-photo/portrait-smiling-engineer-standing-near-solar-panels_1262-14874.jpg?w=800"
              alt="Solar expert"
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="bg-[#042b20] text-white rounded-2xl p-7 shadow-md">
            <h4 className="text-xl font-semibold mb-2">
              Have more questions?
            </h4>
            <p className="text-sm text-green-100 mb-5">
              We’re happy to help you understand everything about going solar.
            </p>
            <button className="bg-[#19745A] hover:bg-[#0E3D2C] text-white px-5 py-2.5 rounded-full flex items-center gap-2 font-medium transition-all">
              Contact Us <FaArrowRight size={13} />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <button className="text-xs font-medium border border-[#19745A] rounded-full px-4 py-1 text-[#19745A] uppercase tracking-wide mb-5 hover:bg-[#19745A] hover:text-white transition-all">
            FAQs
          </button>

          <h2 className="text-4xl md:text-5xl font-semibold text-[#052A1F] mb-10 leading-snug">
            Frequently asked <br /> questions
          </h2>

          {/* ACCORDION */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-sm border transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#19745A] border-[#19745A] text-white shadow-md"
                    : "bg-white border-gray-200 hover:border-[#19745A]/40"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-medium transition-all"
                >
                  <span
                    className={`text-base ${
                      activeIndex === index
                        ? "text-white"
                        : "text-[#052A1F] hover:text-[#19745A]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="ml-4">
                    {activeIndex === index ? (
                      <FaMinus className="text-white" />
                    ) : (
                      <FaPlus className="text-[#19745A]" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    activeIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <div
                    className={`px-6 pb-5 text-sm leading-relaxed ${
                      activeIndex === index
                        ? "text-green-100"
                        : "text-gray-600"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
