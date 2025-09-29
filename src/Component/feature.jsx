import React from "react";
import Eco from "../assets/eco.png";
const Pricing = () => {
  const features = [
    {
      title: "Effortless Scheduling",
      desc: "Book Your Laundry Pickup in Just a Few Clicks.",
      icon: "📱",
    },
    {
      title: "Doorstep Pickup",
      desc: "Seamless Pickup at Your Convenience.",
      icon: "📦",
    },
    {
      title: "Professional Cleaning",
      desc: "Eco-Friendly Cleaning for Every Fabric.",
      icon: "🧺",
    },
    {
      title: "On-Time Delivery",
      desc: "Fresh, Clean Clothes Delivered Right at Your Doorstep.",
      icon: "🛵",
    },
  ];
  return (
    <div>
      <section className="px-6 py-16 max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2E2A53] text-center mb-4">
          We Collect, Clean, and Deliver – Laundrywala Makes Life Easier!
        </h2>
        <p className="text-center text-[#1A1A1A] max-w-3xl mx-auto mb-12">
          At Laundrywala, we offer reliable laundry and dry cleaning services
          designed to make your life easier. From careful garment handling to
          on-time delivery at your doorstep, we ensure your clothes are treated
          with the utmost care and professionalism.
        </p>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5F0E8] border border-[#C9B9A5] rounded-2xl p-6 text-center shadow-md 
                       hover:bg-[#E9DDC9] hover:shadow-xl hover:scale-105 
                       transition duration-300 cursor-pointer flex flex-col items-center"
            >
              <div className="text-5xl mb-4 text-[#6E5A4C]">{item.icon}</div>
              <h3 className="text-xl font-bold text-[#2E2A53]">{item.title}</h3>
              <p className="text-sm text-[#1A1A1A] mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
