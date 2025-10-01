import React from "react";
import Driver from "../assets/driver.png";

const Review = () => {
  return (
    <div className="bg-[#F5F0E8] min-h-screen flex flex-col items-center px-6 md:px-2 lg:px-12 py-12">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#2E2A53] text-center leading-snug">
        Professional Laundry Services Near You: <br />
        <span className="text-[#2E2A53]">
          Free Pickup and Doorstep Delivery
        </span>
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-center max-w-3xl text-[#1A1A1A] text-base md:text-lg">
        At Laundrywala, we make laundry hassle-free with complimentary home
        pickup and doorstep delivery on orders above ₹349 in our serviceable
        locations. With our easy-to-use website or app, scheduling your laundry
        has never been simpler. Select a time that suits your routine, and we’ll
        take care of the rest. Trust us to handle your clothes with expert care
        and enjoy the comfort of clean, fresh{" "}
        <a href="#" className="text-[#2E2A53] underline hover:text-[#6E5A4C]">
          laundry near you.
        </a>
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl items-center">
        {/* Standard Delivery */}
        <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition border border-[#E9DDC9] hover:border-[#6E5A4C]">
          <div className="w-16 h-16 flex items-center justify-center mx-auto bg-[#E9DDC9] rounded-full">
            <span className="text-2xl">🕑</span>
          </div>
          <h3 className="text-xl font-bold text-center mt-4 text-[#2E2A53]">
            Standard Delivery
          </h3>
          <p className="text-center mt-2 text-[#1A1A1A] text-sm">
            Hassle-Free Regular Delivery (48–72 Hours). Perfect for your
            everyday laundry needs with no extra charges.
          </p>
        </div>

        {/* Express Delivery */}
        <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition border border-[#E9DDC9] hover:border-[#6E5A4C]">
          <div className="w-16 h-16 flex items-center justify-center mx-auto bg-[#E9DDC9] rounded-full">
            <span className="text-2xl">🚚</span>
          </div>
          <h3 className="text-xl font-bold text-center mt-4 text-[#2E2A53]">
            Express Delivery
          </h3>
          <p className="text-center mt-2 text-[#1A1A1A] text-sm">
            Need your laundry fast? Get it delivered within 24 hours at a
            minimal extra charge.
          </p>
        </div>

        <div className="flex justify-center h-80 gap-5">
          <img
            src={Driver}
            alt="Laundry Delivery"
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
