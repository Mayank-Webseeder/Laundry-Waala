import React from "react";

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
      >
        <div className="md:col-span-2 bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold">About Laundry Waala</h3>
          <p className="mt-3 text-gray-600">
            Laundry Waala brings professional laundry and dry cleaning services
            to your doorstep. We focus on quality, quick turnaround, and safe
            handling of your garments. Our trained staff follows hygienic
            processes and uses eco-friendly products.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
            <li>Pickup & Delivery</li>
            <li>Eco detergents</li>
            <li>Online payments</li>
            <li>Order tracking</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h4 className="font-semibold">Quick Contact</h4>
          <p className="text-sm text-gray-600 mt-2">
            Call or WhatsApp us for same-day queries.
          </p>
          <div className="mt-3 text-sm">
            <div>
              <strong>Phone:</strong> +91 98765 43210
            </div>
            <div className="mt-2">
              Address: Serviceable areas across the city
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
