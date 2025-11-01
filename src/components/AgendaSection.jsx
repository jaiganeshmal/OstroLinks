import React from "react";

const AgendaSection = () => {
  const agendaItems = [
    { title: "Introduction", number: "01" },
    { title: "Solar Solution", number: "02" },
    { title: "Solar Products", number: "03" },
    { title: "Electrical Components", number: "04" },
    { title: "Cable Management", number: "05" },
    { title: "UPVC Pipes Manufacture", number: "06" },
    { title: "Road Map", number: "07" },
    { title: "Projects", number: "08" },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-white to-[#e6f3f3]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl overflow-hidden">
        
        {/* Left Image */}
        <div className="relative">
          <img
            src='https://oc-static.poweredbyproctors.co.uk/public/images/wp/18/07/03/EU_-offshore_wind_farm.jpg?VersionId=GDsRp57WG0drtsS8J85CMbnzb07cx_Zu'
            alt="Agenda"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#006d6d]/20"></div>
        </div>

        {/* Right Content */}
        <div className="p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,#ffffff,transparent_50%)]"></div>
          
          <h2 className="text-4xl font-bold mb-8 relative z-10">Agenda</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 relative z-10">
            {agendaItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b border-white/40 pb-2">
                <span className="text-lg font-medium">{item.title}</span>
                <span className="font-bold text-xl">{item.number}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
