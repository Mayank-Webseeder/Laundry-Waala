import React from "react";
import Heroimg from "../assets/Heroimg.png";
import Motion from "./Motion";
const HeroSection = ({ locateMe, openBooking }) => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
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
        </div>
        <div>
          <img src={Heroimg} alt="Laundry" className="rounded-lg shadow-lg" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
