import React from "react";
import { myData } from "./DummyData";
const Service = ({ openBooking, faqs }) => {
  return (
    <div>
      <section id="services" className="mt-8">
        <h3 className="text-lg font-semibold">Services</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {myData.map((s) => (
            <div
              key={s.title}
              className="bg-white p-4 rounded shadow flex flex-col"
            >
              <div className="font-semibold">{s.title}</div>
              <p className="text-xs text-gray-500 flex-1 mt-2">{s.desc}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-gray-600">ETA {s.eta}</span>
                <button
                  onClick={() => openBooking(s.title)}
                  className="text-pink-600 text-xs"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="faqs" className="mt-8 bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold">FAQs</h3>
        <div className="mt-4 space-y-2">
          {faqs.map((f, idx) => (
            <details key={idx} className="p-3 border rounded">
              <summary className="font-medium cursor-pointer">{f.q}</summary>
              <p className="mt-2 text-sm text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
