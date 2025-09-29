import React from "react";

const Details = () => {
  const steps = [
    {
      title: "SORTING & INSPECTION",
      desc: "For the best cleaning result, we sort your clothes by color type of fabric.",
      icon: "🔎",
    },
    {
      title: "STAIN TREATMENT",
      desc: "Tough spots are pre-treated to increase the chances of successful removal.",
      icon: "🧴",
    },
    {
      title: "DRYING",
      desc: "Drying your clothes carefully using effective and gentle methods.",
      icon: "🌬️",
    },
    {
      title: "WASHING",
      desc: "We use advanced machines and eco-friendly detergents for perfect cleaning.",
      icon: "🧺",
    },
    {
      title: "PACKAGING",
      desc: "We’ll carefully fold your laundry and have it ready for pickup.",
      icon: "📦",
    },
    {
      title: "PICKUP",
      desc: "Your freshly folded and pressed laundry is prepared and waiting.",
      icon: "🚚",
    },
  ];

  return (
    <div>
      <section className="bg-[#F5F0E8] w-full py-16 px-6  ">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2E2A53] leading-snug">
              Laundrywala – India’s Most Trusted Laundry and Dry Cleaning Chain
            </h2>
            <p className="mt-6 text-[#1A1A1A] text-base leading-relaxed">
              Laundrywala is transforming fabric care across 20+ cities in India
              with reliable and premium laundry services. Combining advanced
              technology with expert care, we ensure your clothes receive the
              attention they deserve. From routine{" "}
              <span className="text-[#6E5A4C] font-semibold">laundry</span> to
              professional{" "}
              <span className="text-[#6E5A4C] font-semibold">dry cleaning</span>
              ,{" "}
              <span className="text-[#6E5A4C] font-semibold">
                home cleaning
              </span>
              , and{" "}
              <span className="text-[#6E5A4C] font-semibold">
                shoe cleaning
              </span>
              , we deliver unmatched convenience and quality tailored to your
              needs.
            </p>

            <p className="mt-4 text-[#1A1A1A] text-base leading-relaxed">
              Scheduling your{" "}
              <span className="font-semibold">laundry, ironing</span>, or{" "}
              <span className="font-semibold">steam iron</span> services has
              never been simpler. Call us at +91-9876543219 or visit our website
              to book your service in just a few clicks. With plans to expand to
              over 1000 locations, Laundrywala is committed to bringing
              world-class laundry solutions closer to you.
            </p>

            <p className="mt-4 text-[#1A1A1A] text-base leading-relaxed">
              Laundrywala also offers exciting franchise opportunities in
              India’s thriving laundry industry. As one of the fastest-growing
              laundry brands, we empower our franchise partners with
              comprehensive training, a proven business model, and effective
              marketing support. Join the Laundrywala family and grow with us as
              we redefine fabric care across India.
            </p>
          </div>

          {/* Right Process Steps */}
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-[#E9DDC9] rounded-lg p-6 shadow-sm hover:border-[#6E5A4C] hover:shadow-md transition"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E9DDC9] text-2xl">
                    {step.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#2E2A53] uppercase">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-[#1A1A1A] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
