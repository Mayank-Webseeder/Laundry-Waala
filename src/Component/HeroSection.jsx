import React from "react";
import Heroimg from "../assets/Heroimg.png";
import Motion from "./Motion";
import { motion } from "framer-motion";
const HeroSection = ({ locateMe, openBooking }) => {
  const NAVY = "#2E2A53";
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-4xl font-bold text-[#1A1A1A] leading-snug">
            Laundrywala – Premium <br />
            Laundry & Dry Cleaning <br />
            Services{" "}
          </h2>
          <Motion
            text="Clean Clothes, Happy Life"
            speed={70} //
            className="text-4xl font-extrabold text-[#6E5A4C]"
          />

          <p className="mt-4 text-[#2E2A53]">
            Doorstep laundry service with eco-friendly detergents. Fast pickup,
            reliable cleaning, and secure delivery right to your home.
          </p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => openBooking()}
              className="bg-[#2E2A53] text-[#F5F0E8] px-6 py-3 rounded-lg shadow"
            >
              Book Pickup
            </button>
            <button
              onClick={locateMe}
              className="border border-[#6E5A4C] text-[#6E5A4C] px-6 py-3 rounded-lg"
            >
              Locate Me
            </button>
          </div>
          <div className="flex justify-center text-black md:justify-start space-x-8 lg:space-x-12 mt-10 border-t border-gray-200 pt-6">
            <FeatureItem icon="%" text="Expert Care" color={NAVY} />
            <FeatureItem icon="🛵" text="Super Fast Delivery" color={NAVY} />
            <FeatureItem icon="💧" text="Fresh & Pressed" color={NAVY} />
          </div>
        </div>
        <div>
          <motion.img
            src={Heroimg}
            alt="Laundry"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0 }} // start me invisible
            animate={{ opacity: 1 }} // end me visible
            transition={{ duration: 1.5 }} // fade duration (seconds)
          />
        </div>
      </section>
    </div>
  );
};
const FeatureItem = ({ icon, text }) => (
  <div className="flex flex-col items-center max-w-[100px]">
    <div className="text-3xl mb-2 text-yellow-400">{icon}</div>
    <p className="text-xs sm:text-sm text-gray-700 text-center">{text}</p>
  </div>
);

export default HeroSection;
