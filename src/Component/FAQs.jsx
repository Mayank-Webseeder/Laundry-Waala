import React from "react";

const FAQs = ({ faqs }) => {
  return (
    <div>
      <section
        id="faqs"
        className="max-w-6xl mx-auto px-4 py-16 bg-[#F5F0E8] rounded-lg shadow my-10"
      >
        <h3 className="text-2xl font-bold text-[#6E5A4C] mb-8 text-center">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((f, idx) => (
            <details
              key={idx}
              className="p-4 border border-[#C9B9A5] rounded hover:shadow"
            >
              <summary className="cursor-pointer font-semibold text-[#2E2A53]">
                {f.q}
              </summary>
              <p className="mt-2 text-[#6E5A4C] text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQs;
