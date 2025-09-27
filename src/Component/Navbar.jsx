import React from "react";
import { myData } from "./DummyData";
import Estreewala from "../assets/Estreewala.png";
const Navbar = ({
  mobileNavOpen,
  setMobileNavOpen,
  openBooking,
  setShowBooking,
  showBooking,
  submitBooking,
  errors,
  form,
  setForm,
}) => {
  return (
    <div>
      <header className="bg-[#E9DDC9] shadow sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-[#6E5A4C] flex items-center justify-center text-white font-bold  shadow-md">
              <img src={Estreewala} alt="Estreewala" />
            </div>

            <div>
              <h1 className="text-lg font-semibold  text-[#2E2A53]">
                Estree Walla
              </h1>
              <p className="text-xs text-[#6E5A4C]">Clean. Fast. Trusted.</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-[#2E2A53]">
              Services
            </a>
            <a href="#pricing" className="hover:text-[#2E2A53]">
              Pricing
            </a>
            <a href="#about" className="hover:text-[#2E2A53]">
              Why Choose Us
            </a>
            <a href="#faqs" className="hover:text-[#2E2A53]">
              FAQs
            </a>
            <button
              onClick={() => openBooking()}
              className="ml-2 bg-[#2E2A53] text-[#F5F0E8] px-4 py-2 rounded-md shadow"
            >
              Book Pickup
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="p-2 rounded-md border border-[#C9B9A5]"
            >
              {mobileNavOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {mobileNavOpen && (
          <div className="md:hidden bg-[#E9DDC9] border-t">
            <div className="px-4 py-4 flex flex-col gap-3">
              <a href="#services" onClick={() => setMobileNavOpen(false)}>
                Services
              </a>
              <a href="#pricing" onClick={() => setMobileNavOpen(false)}>
                Pricing
              </a>
              <a href="#about" onClick={() => setMobileNavOpen(false)}>
                Why Choose Us
              </a>
              <a href="#faqs" onClick={() => setMobileNavOpen(false)}>
                FAQs
              </a>
              <button
                onClick={() => {
                  setMobileNavOpen(false);
                  openBooking();
                }}
                className="bg-[#2E2A53] text-[#F5F0E8] px-4 py-2 rounded-md"
              >
                Book Pickup
              </button>
            </div>
          </div>
        )}
      </header>
      {showBooking && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <form
            onSubmit={submitBooking}
            className="bg-[#F5F0E8] max-w-md w-full rounded-lg p-6 shadow"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-[#2E2A53]">Request Pickup</h4>
              <button
                type="button"
                onClick={() => setShowBooking(false)}
                className="text-[#6E5A4C]"
              >
                Close
              </button>
            </div>

            <label className="block mt-4 text-sm text-[#2E2A53]">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1 p-2 border border-[#C9B9A5] rounded"
            />
            {errors.name && (
              <div className="text-xs text-red-600 mt-1">{errors.name}</div>
            )}

            <label className="block mt-3 text-sm text-[#2E2A53]">Phone</label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full mt-1 p-2 border border-[#C9B9A5] rounded"
              placeholder="10-digit number"
            />
            {errors.phone && (
              <div className="text-xs text-red-600 mt-1">{errors.phone}</div>
            )}

            <label className="block mt-3 text-sm text-[#2E2A53]">Address</label>
            <textarea
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full mt-1 p-2 border border-[#C9B9A5] rounded"
              rows={3}
            />
            {errors.address && (
              <div className="text-xs text-red-600 mt-1">{errors.address}</div>
            )}

            <label className="block mt-3 text-sm text-[#2E2A53]">Service</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full mt-1 p-2 border border-[#C9B9A5] rounded"
            >
              {myData.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </select>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#2E2A53] text-[#F5F0E8] px-4 py-2 rounded"
              >
                Request Pickup
              </button>
              <button
                type="button"
                onClick={() => {
                  setForm({
                    ...form,
                    address: location
                      ? `Lat:${location.lat.toFixed(
                          4
                        )}, Lng:${location.lng.toFixed(4)}`
                      : form.address,
                  });
                }}
                className="text-sm text-[#6E5A4C] hover:underline"
              >
                Use My Location
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;
