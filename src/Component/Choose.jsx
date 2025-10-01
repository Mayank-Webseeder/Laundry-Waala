import React from "react";
import Ser1 from "../assets/service1.jpg";
import Ser2 from "../assets/ser2.jpg";
import Ser3 from "../assets/Heroimg.jpg";
const services = [
  {
    title: "Laundry",
    desc: "Enjoy fresh, clean, folded laundry — more time for what matters most.",
    img: Ser1,
  },
  {
    title: "Dry Cleaning",
    desc: "Refresh your garments with our expert dry cleaning — book now!",
    img: Ser3,
  },
  {
    title: "Ironing",
    desc: "Get wrinkle-free perfection — expert ironing that keeps you looking sharp!",
    img: Ser2,
  },
];

const Choose = () => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto bg-[#F5F0E8]">
      <h2 className="text-3xl font-bold text-[#2E2A53] text-center mb-4">
        Our Services
      </h2>
      <p className="text-center text-[#6E5A4C] mb-10 max-w-2xl mx-auto">
        Discover All That Laundrywala Has to Offer – Tailored Cleaning Services
        for Your Wardrobe.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg bg-[#E9DDC9] border border-[#6E5A4C] hover:shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-[#F5F0E8]">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm mt-1">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Choose;
