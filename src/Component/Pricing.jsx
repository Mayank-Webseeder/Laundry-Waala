import React from "react";

const Pricing = ({ pricing, pricingTab, setPricingTab }) => {
  return (
    <div>
      <section id="pricing" className="mt-12 bg-white rounded-lg p-6 shadow">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Our Pricing</h3>
          <div className="flex items-center gap-2">
            {["All", "Delicates", "Dry Clean"].map((t) => (
              <button
                key={t}
                onClick={() => setPricingTab(t)}
                className={`px-3 py-1 rounded ${
                  pricingTab === t ? "bg-pink-600 text-white" : "border"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-500">
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
                .map((p) => (
                  <tr key={p.item} className="border-t">
                    <td className="py-3">{p.item}</td>
                    <td className="py-3">{p.wash ? `₹${p.wash}` : "-"}</td>
                    <td className="py-3">{p.iron ? `₹${p.iron}` : "-"}</td>
                    <td className="py-3">{p.dry ? `₹${p.dry}` : "-"}</td>
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
