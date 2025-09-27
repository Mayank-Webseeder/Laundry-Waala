import React from "react";

const Review = () => {
  return (
    <div>
      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-[#6E5A4C] mb-8 text-center">
          Happy Customers Say
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#E9DDC9] p-6 rounded-lg shadow hover:shadow-lg">
            <p className="text-[#6E5A4C] italic">
              "Excellent service! Clothes returned spotless."
            </p>
            <div className="mt-4 font-semibold text-[#2E2A53]">Amit</div>
          </div>
          <div className="bg-[#E9DDC9] p-6 rounded-lg shadow hover:shadow-lg">
            <p className="text-[#6E5A4C] italic">
              "Quick pickup and delivery. Highly recommend."
            </p>
            <div className="mt-4 font-semibold text-[#2E2A53]">Neha</div>
          </div>
          <div className="bg-[#E9DDC9] p-6 rounded-lg shadow hover:shadow-lg">
            <p className="text-[#6E5A4C] italic">
              "Friendly staff and eco-friendly detergents."
            </p>
            <div className="mt-4 font-semibold text-[#2E2A53]">Ravi</div>
          </div>
        </div>

        <section className="flex flex-col md:flex-row justify-center items-center gap-10 bg-[#F5F0E8] py-12 rounded-lg shadow max-w-4xl mx-auto">
          <div className="text-center">
            <h4 className="text-3xl font-bold text-[#2E2A53]">⭐ 4.9 / 5</h4>
            <p className="text-[#6E5A4C] text-sm mt-2">
              Average Customer Rating
            </p>
          </div>
          <div className="w-px h-12 bg-[#C9B9A5] hidden md:block"></div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-[#2E2A53]">10,000+</h4>
            <p className="text-[#6E5A4C] text-sm mt-2">
              Happy Customers Served
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Review;
