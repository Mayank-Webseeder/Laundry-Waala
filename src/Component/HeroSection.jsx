import React from "react";
import { myData } from "./DummyData";
import CountUp from "react-countup";
const HeroSection = ({ locateMe, openBooking }) => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Laundry Waala — Fast, Reliable Laundry Near You
          </h2>
          <p className="mt-4 text-gray-600">
            We pick up, clean, and deliver your clothes using eco-friendly
            detergents. Book a pickup, track your order, and pay online — simple
            as that.
          </p>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => openBooking()}
              className="bg-pink-600 text-white px-5 py-3 rounded-lg shadow"
            >
              Book Pickup
            </button>
            <button onClick={locateMe} className="border px-5 py-3 rounded-lg">
              Locate Me
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="font-semibold">
                {" "}
                <CountUp end={4.9} duration={3} decimals={1} suffix="+" />
              </div>
              <div className="text-xs">Customer rating</div>
            </div>
            <div className="bg-white p-3 rounded shadow-sm">
              <div className="font-semibold">
                <CountUp end={3000} duration={10} suffix="+" />
              </div>
              <div className="text-xs">Orders completed</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-white rounded-lg p-6 shadow-inner">
          <div className="grid grid-cols-2 gap-4">
            {myData.map((s) => (
              <div key={s.title} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-sm font-semibold">{s.title}</div>
                <p className="text-xs text-gray-500 mt-1">{s.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-xs text-gray-600">ETA: {s.eta}</div>
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

          <div className="mt-4 text-xs text-gray-500">
            Trusted by hundreds of households — door-to-door service.
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
