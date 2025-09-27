import React from "react";

const footer = () => {
  return (
    <div>
      <footer className="py-8 text-sm text-[#6E5A4C] text-center">
        © {new Date().getFullYear()} Laundry Waala — Clean clothes, happy life.
      </footer>
    </div>
  );
};

export default footer;
