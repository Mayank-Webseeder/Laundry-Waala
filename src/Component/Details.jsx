import React from "react";
import rew1 from "../assets/rew1.jpg";
import rew2 from "../assets/rew2.jpg";
import rew3 from "../assets/rew3.jpg";
import rew4 from "../assets/rew4.jpg";
import rew5 from "../assets/rew5.jpg";
import rew6 from "../assets/rew6.jpg";
const Details = () => {
  const steps = [
    {
      title: "SORTING & INSPECTION",
      desc: "For the best cleaning result, we sort your clothes by color type of fabric.",
      img: rew1,
    },
    {
      title: "STAIN TREATMENT",
      desc: "Tough spots are pre-treated to increase the chances of successful removal.",
      img: rew2,
    },
    {
      title: "DRYING",
      desc: "Drying your clothes carefully using effective and gentle methods.",
      img: rew3,
    },
    {
      title: "WASHING",
      desc: "We use advanced machines and eco-friendly detergents for perfect cleaning.",
      img: rew4,
    },
    {
      title: "PACKAGING",
      desc: "We’ll carefully fold your laundry and have it ready for pickup.",
      img: rew5,
    },
    {
      title: "PICKUP",
      desc: "Your freshly folded and pressed laundry is prepared and waiting.",
      img: rew6,
    },
  ];

  return (
    <div>
      <section className="bg-[#F5F0E8] w-full py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2E2A53] leading-snug text-center md:text-left">
              Laundrywala – India’s Most Trusted Laundry & Dry Cleaning Chain
            </h2>

            <p className="text-[#1A1A1A] text-base md:text-lg lg:text-xl leading-relaxed text-justify md:text-left">
              Laundrywala is transforming fabric care across{" "}
              <span className="font-semibold text-[#6E5A4C]">
                20+ cities in India
              </span>{" "}
              with reliable and premium laundry services. Combining advanced
              technology with expert care, we ensure your clothes receive the
              attention they deserve. From routine{" "}
              <span className="font-semibold text-[#6E5A4C]">laundry</span> to
              professional{" "}
              <span className="font-semibold text-[#6E5A4C]">dry cleaning</span>
              ,
              <span className="font-semibold text-[#6E5A4C]">
                {" "}
                home cleaning
              </span>
              , and{" "}
              <span className="font-semibold text-[#6E5A4C]">
                shoe cleaning
              </span>
              , we deliver unmatched convenience and quality tailored to your
              needs.
            </p>

            <p className="text-[#1A1A1A] text-base md:text-lg lg:text-xl leading-relaxed text-justify md:text-left">
              Scheduling your{" "}
              <span className="font-semibold">laundry, ironing</span>, or{" "}
              <span className="font-semibold">steam iron</span> services has
              never been simpler. Call us at{" "}
              <span className="font-semibold text-[#6E5A4C]">
                +91-9876543219
              </span>{" "}
              or visit our website to book your service in just a few clicks.
              With plans to expand to over{" "}
              <span className="font-semibold text-[#6E5A4C]">
                1000 locations
              </span>
              , Laundrywala is committed to bringing world-class laundry
              solutions closer to you.
            </p>

            <p className="text-[#1A1A1A] text-base md:text-lg lg:text-xl leading-relaxed text-justify md:text-left">
              Laundrywala also offers exciting{" "}
              <span className="font-semibold text-[#6E5A4C]">
                franchise opportunities
              </span>{" "}
              in India’s thriving laundry industry. As one of the
              fastest-growing laundry brands, we empower our franchise partners
              with comprehensive training, a proven business model, and
              effective marketing support. Join the Laundrywala family and grow
              with us as we redefine fabric care across India.
            </p>

            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block bg-[#6E5A4C] hover:bg-[#2E2A53] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
              >
                Book Your Service Now
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden h-72 w-full shadow-sm hover:shadow-lg hover:scale-[1.03] transition duration-300"
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg md:text-xl font-bold">{step.title}</h3>
                  <p className="text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
