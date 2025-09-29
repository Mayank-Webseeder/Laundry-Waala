import React from "react";

// You would place the logo image in your project's 'public' or 'src/assets' folder
// For this example, let's assume the logo is accessible via an import or public path.

const EstreewallaAbout = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-12 pb-20 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading Section */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-10 text-center leading-tight">
          Learn More About Estreewalla – India's Premier Ironing and Pressing
          Chain
        </h1>

        {/* Content Box (The main white card section) */}

        {/* Sub-section Header */}
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 border-b border-gray-200 pb-2">
            — Why Choose Estreewalla?
          </h2>
        </div>

        {/* Service Section 1: Expert Pressing */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Expert Ironing and Pressing Services
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Estreewalla is dedicated to providing **top-notch pressing and
            finishing services** that ensure your garments look flawless. Our
            skilled professionals use specialized, high-grade equipment to
            handle every fabric, from delicate silks to heavy cottons. We
            guarantee a crisp, wrinkle-free finish that maintains the quality
            and prolongs the life of your clothes—making sure you are truly
            **"Press to Impress"** every time.
          </p>
        </div>

        {/* Service Section 2: Convenient Solutions */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Convenient Doorstep Ironing Solutions
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We know how busy life can get, and that’s why Estreewalla is here to
            take ironing off your to-do list. With **seamless doorstep pickup
            and delivery**, we fit pressing into your schedule effortlessly.
            From everyday officewear to special occasion garments, we ensure
            your wardrobe is always crisp, ready to wear, and saving you
            valuable time. Just book, and we handle the rest!
          </p>
        </div>

        {/* You can add more sections here */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
            Our Commitment to Quality
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Quality is at the core of Estreewalla. We don't just iron; we
            professionally finish. Every garment undergoes a final quality check
            to ensure every crease is sharp and every fold is perfect before it
            leaves our facility. This unwavering commitment is what makes us
            India's most trusted name in garment pressing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EstreewallaAbout;
