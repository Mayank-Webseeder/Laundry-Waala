import React from "react";

const Pricing = () => {
  return (
    <div>
      <section
        id="pricing"
        className="max-w-6xl mx-auto px-4 py-16 bg-[#E9DDC9] rounded-lg shadow my-10"
      >
        <h3 className="text-2xl font-bold text-[#6E5A4C] mb-8">
          Subscription Plans
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#F5F0E8] p-6 rounded-lg shadow hover:shadow-lg text-center">
            <h4 className="font-semibold text-lg text-[#2E2A53]">Basic</h4>
            <p className="text-[#6E5A4C] mt-2">₹499/month - 10 items</p>
            <button className="mt-4 bg-[#2E2A53] text-[#F5F0E8] px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
          <div className="bg-[#F5F0E8] p-6 rounded-lg shadow hover:shadow-lg text-center">
            <h4 className="font-semibold text-lg text-[#2E2A53]">Standard</h4>
            <p className="text-[#6E5A4C] mt-2">₹899/month - 20 items</p>
            <button className="mt-4 bg-[#2E2A53] text-[#F5F0E8] px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
          <div className="bg-[#F5F0E8] p-6 rounded-lg shadow hover:shadow-lg text-center">
            <h4 className="font-semibold text-lg text-[#2E2A53]">Premium</h4>
            <p className="text-[#6E5A4C] mt-2">₹1299/month - 30 items</p>
            <button className="mt-4 bg-[#2E2A53] text-[#F5F0E8] px-4 py-2 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
