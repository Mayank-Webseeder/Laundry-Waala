import React from "react";
import { Phone, MessageCircle } from "lucide-react";
const contact = () => {
  return (
    <div>
      <div className="fixed right-4 bottom-6 flex flex-col gap-3 z-40">
        <a
          href="tel:+919876543210"
          className="bg-[#F5F0E8] p-3 rounded-full shadow flex items-center justify-center"
        >
          <Phone size={24} />
        </a>
        <a
          href="https://wa.me/919876543610"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 p-3 rounded-full shadow text-white"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
};

export default contact;
