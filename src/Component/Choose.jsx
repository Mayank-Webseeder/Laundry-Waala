import React from "react";

const Choose = () => {
  return (
    <div>
      <section
        id="about"
        className="max-w-6xl mx-auto px-4 py-16 bg-[#E9DDC9] rounded-lg shadow my-10"
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-[#6E5A4C]">
          Why Choose Us
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-[#F5F0E8] p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-3xl mb-4">🚚</div>
            <h4 className="font-semibold mb-2 text-[#2E2A53]">
              Pickup & Delivery
            </h4>
            <p className="text-[#6E5A4C] text-sm">
              Hassle-free door-to-door service at your convenience.
            </p>
          </div>
          <div className="bg-[#F5F0E8] p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-3xl mb-4">🧼</div>
            <h4 className="font-semibold mb-2 text-[#2E2A53]">
              Eco-Friendly Cleaning
            </h4>
            <p className="text-[#6E5A4C] text-sm">
              Gentle detergents and safe processes for your garments.
            </p>
          </div>
          <div className="bg-[#F5F0E8] p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-3xl mb-4">⏱️</div>
            <h4 className="font-semibold mb-2 text-[#2E2A53]">
              Fast Turnaround
            </h4>
            <p className="text-[#6E5A4C] text-sm">
              Reliable and prompt laundry service with quality assurance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
