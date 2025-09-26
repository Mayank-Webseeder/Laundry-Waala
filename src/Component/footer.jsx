import React from "react";

const footer = () => {
  return (
    <div>
      <footer className="mt-10 py-8 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} Laundry Waala — Clean clothes, happy life.
      </footer>
    </div>
  );
};

export default footer;
