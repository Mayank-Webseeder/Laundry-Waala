import React from "react";

import Heroimg from "../assets/hero1.png";
import Motion from "./Motion";
import { motion } from "framer-motion";

const HeroSection = ({ locateMe, openBooking }) => {
  const NAVY = "#2E2A53";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF8E7] via-[#F5F0E8] to-[#E8E1D5]">
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#6E5A4C]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2E2A53]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
            Laundrywala – Premium <br />
            Laundry & Dry Cleaning <br />
            <span className="text-[#6E5A4C]">Services</span>
          </h1>

          <Motion
            text="Clean Clothes, Happy Life"
            speed={70}
            className="mt-2 text-2xl font-bold text-[#2E2A53]"
          />

          <p className="mt-5 text-gray-700 leading-relaxed">
            Doorstep laundry service with eco-friendly detergents. Fast pickup,
            reliable cleaning, and secure delivery right to your home.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => openBooking()}
              className="bg-[#2E2A53] hover:bg-[#3a355d] transition-all duration-300 text-white px-7 py-3 rounded-xl shadow-md hover:shadow-lg text-sm font-medium"
            >
              Book Pickup
            </button>
            <button
              onClick={locateMe}
              className="border border-[#6E5A4C] text-[#6E5A4C] hover:bg-[#6E5A4C]/10 transition-all duration-300 px-7 py-3 rounded-xl text-sm font-medium"
            >
              Locate Me
            </button>
          </div>

          {/* Features */}
          <div className="flex justify-center md:justify-start gap-6 lg:gap-10 mt-12">
            <FeatureItem icon="🧴" text="Expert Care" color={NAVY} />
            <FeatureItem icon="🛵" text="Super Fast Delivery" color={NAVY} />
            <FeatureItem icon="💧" text="Fresh & Pressed" color={NAVY} />
          </div>
        </div>

        {/* Right Image with motion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center"
        >
          <motion.img
            src={Heroimg}
            alt="Laundry Service"
            className="rounded-2xl shadow-xl w-full max-w-md"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, text }) => (
  <div className="flex flex-col items-center bg-white/70 backdrop-blur-sm shadow-sm rounded-lg px-4 py-3 hover:shadow-md transition duration-300">
    <div className="text-2xl mb-1">{icon}</div>
    <p className="text-xs sm:text-sm font-medium text-gray-800">{text}</p>
  </div>
);

export default HeroSection;
