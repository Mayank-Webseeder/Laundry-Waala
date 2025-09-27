import React, { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Pricing from "./Component/Pricing";

import Service from "./Component/Service";
import Footer from "./Component/footer";
import Contact from "./Component/contact";
import Choose from "./Component/Choose";
import Review from "./Component/Review";
import FAQs from "./Component/FAQs";
import Cta from "./Component/Cta";

const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    service: "Wash & Fold",
  });
  const [errors, setErrors] = useState({});
  const [location, setLocation] = useState(null);
  const [pricingTab, setPricingTab] = useState("All");

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMobileNavOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function openBooking(service = "Wash & Fold") {
    setForm((f) => ({ ...f, service }));
    setShowBooking(true);
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter a valid 10-digit phone";
    if (!form.address.trim()) e.address = "Please provide pickup address";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submitBooking(ev) {
    ev.preventDefault();
    if (!validate()) return;

    alert(
      `Pickup requested for ${form.name} (Service: ${form.service}). We'll contact you at ${form.phone}.`
    );
    setShowBooking(false);
    setForm({ name: "", phone: "", address: "", service: "Wash & Fold" });
    setErrors({});
  }

  function locateMe() {
    if (!navigator.geolocation) {
      alert("Geolocation not supported in this browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setLocation(coords);
      },
      (err) => {
        alert("Unable to fetch location: " + err.message);
      }
    );
  }

  const pricing = [
    { item: "Shirt", category: "All", wash: 25, iron: 10, dry: 40 },
    { item: "T-Shirt", category: "All", wash: 20, iron: 8, dry: 35 },
    { item: "Jeans", category: "All", wash: 60, iron: 15, dry: 90 },
    { item: "Suit", category: "Delicates", wash: 0, iron: 120, dry: 300 },
  ];

  const faqs = [
    {
      q: "How long until my laundry is ready?",
      a: "Standard turnaround is 24-72 hours depending on service and item.",
    },
    {
      q: "Do you offer pickup and delivery?",
      a: "Yes — pickup & delivery available. Book via the pickup form.",
    },
    {
      q: "What payment methods do you accept?",
      a: "Card, UPI, and cash on delivery.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#1A1A1A]">
      <Navbar
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
        openBooking={openBooking}
        showBooking={showBooking}
        setShowBooking={setShowBooking}
        submitBooking={submitBooking}
        errors={errors}
        setErrors={setErrors}
        form={form}
        setForm={setForm}
      ></Navbar>
      <main className="max-w-6xl mx-auto px-4 py-10">
        <HeroSection
          locateMe={locateMe}
          openBooking={openBooking}
        ></HeroSection>
        <Choose></Choose>
        <Service openBooking={openBooking}></Service>
        <Pricing
          setPricingTab={setPricingTab}
          pricingTab={pricingTab}
          pricing={pricing}
        ></Pricing>
        <Review></Review>
        <FAQs faqs={faqs}></FAQs>
        <Cta openBooking={openBooking}></Cta>

        <Footer></Footer>
        <Contact></Contact>
        {location && (
          <div className="fixed left-4 bottom-4 bg-[#F5F0E8] p-3 rounded shadow text-sm z-40">
            Located at {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
