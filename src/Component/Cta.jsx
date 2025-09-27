import React from "react";

const Cta = ({ openBooking }) => {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h3 className="text-3xl font-bold mb-4 text-[#6E5A4C]">
          Ready to Get Started?
        </h3>
        <p className="text-[#2E2A53] mb-6">
          Book your laundry pickup now and enjoy hassle-free clean clothes!
        </p>
        <button
          onClick={() => openBooking()}
          className="bg-[#2E2A53] text-[#F5F0E8] px-6 py-3 rounded-lg shadow"
        >
          Book Pickup
        </button>
      </section>
    </div>
  );
};

export default Cta;
