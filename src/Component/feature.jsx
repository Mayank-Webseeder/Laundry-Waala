import React from "react";
import {
  FaMobileAlt,
  FaTruckPickup,
  FaTshirt,
  FaShippingFast,
} from "react-icons/fa";

const Pricing = () => {
  const features = [
    {
      title: "Effortless Scheduling",
      desc: "Book your laundry pickup in just a few clicks with our easy-to-use app.",
      icon: <FaMobileAlt />,
    },
    {
      title: "Doorstep Pickup",
      desc: "We collect laundry at your convenience with hassle-free doorstep pickup.",
      icon: <FaTruckPickup />,
    },
    {
      title: "Professional Cleaning",
      desc: "Eco-friendly cleaning for every fabric with advanced techniques.",
      icon: <FaTshirt />,
    },
    {
      title: "On-Time Delivery",
      desc: "Fresh, clean clothes delivered right at your doorstep, always on time.",
      icon: <FaShippingFast />,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#F5F0E8] to-[#E9DDC9] py-20 px-6">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/clean-textile.png')]"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#2E2A53] mb-6 leading-snug">
          We Collect, Clean, and Deliver <br />
          <span className="text-[#6E5A4C]">Laundrywala Makes Life Easier!</span>
        </h2>
        <p className="text-lg text-[#1A1A1A] max-w-3xl mx-auto mb-14">
          At Laundrywala, we provide reliable laundry and dry cleaning services
          designed to make your life hassle-free. From professional garment
          handling to timely delivery, we ensure your clothes get the care they
          deserve.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-[#C9B9A5] rounded-2xl p-8 shadow-md 
                       hover:shadow-2xl hover:scale-105 hover:border-[#6E5A4C] 
                       transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E9DDC9] text-[#6E5A4C] text-3xl mb-6 
                            group-hover:bg-[#6E5A4C] group-hover:text-white transition duration-300"
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#2E2A53] mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-[#1A1A1A] leading-relaxed">
                {item.desc}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#6E5A4C] group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
