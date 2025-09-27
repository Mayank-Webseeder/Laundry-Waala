import React from "react";

const Pricing = ({ pricing, pricingTab, setPricingTab }) => {
  return (
    <div>
      <section
        id="pricing"
        className="mt-12 bg-[#E9DDC9] rounded-lg p-6 shadow"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#1A1A1A]">Our Pricing</h3>
          <div className="flex items-center gap-2">
            {["All", "Delicates", "Dry Clean"].map((t) => (
              <button
                key={t}
                onClick={() => setPricingTab(t)}
                className={`px-3 py-1 rounded ${
                  pricingTab === t
                    ? "bg-[#2E2A53] text-[#F5F0E8]"
                    : "border border-[#6E5A4C] text-[#6E5A4C]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#2E2A53] text-[#F5F0E8]">
              <tr className="text-left text-xs">
                <th className="pb-2">Item</th>
                <th className="pb-2">Wash</th>
                <th className="pb-2">Iron</th>
                <th className="pb-2">Dry Clean</th>
              </tr>
            </thead>
            <tbody>
              {pricing
                .filter(
                  (p) =>
                    pricingTab === "All" ||
                    p.category === pricingTab ||
                    (pricingTab === "Delicates" && p.category === "Delicates")
                )
                .map((p, i) => (
                  <tr
                    key={p.item}
                    className={i % 2 === 0 ? "bg-[#F5F0E8]" : "bg-[#E9DDC9]"}
                  >
                    <td className="py-3 px-2">{p.item}</td>
                    <td className="py-3 px-2">{p.wash ? `₹${p.wash}` : "-"}</td>
                    <td className="py-3 px-2">{p.iron ? `₹${p.iron}` : "-"}</td>
                    <td className="py-3 px-2">{p.dry ? `₹${p.dry}` : "-"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
