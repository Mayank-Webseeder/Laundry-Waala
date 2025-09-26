import React from "react";
import { myData } from "./DummyData";

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
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-pink-500 flex items-center justify-center text-white font-bold">
              LW
            </div>
            <div>
              <h1 className="text-lg font-semibold">Laundry Waala</h1>
              <p className="text-xs text-gray-500">Clean. Fast. Trusted.</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-pink-600">
              Services
            </a>
            <a href="#pricing" className="hover:text-pink-600">
              Pricing
            </a>
            <a href="#about" className="hover:text-pink-600">
              About
            </a>
            <a href="#faqs" className="hover:text-pink-600">
              FAQs
            </a>
            <button
              onClick={() => openBooking()}
              className="ml-2 bg-pink-600 text-white px-4 py-2 rounded-md shadow"
            >
              Book Pickup
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="p-2 rounded-md border"
            >
              {mobileNavOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {mobileNavOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 flex flex-col gap-3">
              <a href="#services" onClick={() => setMobileNavOpen(false)}>
                Services
              </a>
              <a href="#pricing" onClick={() => setMobileNavOpen(false)}>
                Pricing
              </a>
              <a href="#about" onClick={() => setMobileNavOpen(false)}>
                About
              </a>
              <a href="#faqs" onClick={() => setMobileNavOpen(false)}>
                FAQs
              </a>
              <button
                onClick={() => {
                  setMobileNavOpen(false);
                  openBooking();
                }}
                className="bg-pink-600 text-white px-4 py-2 rounded-md"
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
            className="bg-white max-w-md w-full rounded-lg p-6 shadow"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Request Pickup</h4>
              <button
                type="button"
                onClick={() => setShowBooking(false)}
                className="text-gray-500"
              >
                Close
              </button>
            </div>

            <label className="block mt-4 text-sm">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1 p-2 border rounded"
            />
            {errors.name && (
              <div className="text-xs text-red-600 mt-1">{errors.name}</div>
            )}

            <label className="block mt-3 text-sm">Phone</label>
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full mt-1 p-2 border rounded"
              placeholder="10-digit number"
            />
            {errors.phone && (
              <div className="text-xs text-red-600 mt-1">{errors.phone}</div>
            )}

            <label className="block mt-3 text-sm">Address</label>
            <textarea
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full mt-1 p-2 border rounded"
              rows={3}
            />
            {errors.address && (
              <div className="text-xs text-red-600 mt-1">{errors.address}</div>
            )}

            <label className="block mt-3 text-sm">Service</label>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="w-full mt-1 p-2 border rounded"
            >
              {myData.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </select>

            <div className="mt-4 flex items-center justify-between">
              <button
                type="submit"
                className="bg-pink-600 text-white px-4 py-2 rounded"
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
                className="text-sm"
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
