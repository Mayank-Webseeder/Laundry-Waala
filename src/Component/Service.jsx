import React from "react";
import { myData } from "./DummyData";
const Service = ({ openBooking }) => {
  return (
    <div>
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-[#6E5A4C] mb-8">Our Services</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {myData.map((s) => (
            <div
              key={s.title}
              className="bg-[#E9DDC9] p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col"
            >
              <div className="font-semibold text-lg text-[#2E2A53]">
                {s.title}
              </div>
              <p className="text-[#6E5A4C] flex-1 mt-2">{s.desc}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-[#6E5A4C]">ETA {s.eta}</span>
                <button
                  onClick={() => openBooking(s.title)}
                  className="text-[#2E2A53] text-sm font-semibold border border-[#2E2A53] px-2 py-1 rounded"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
