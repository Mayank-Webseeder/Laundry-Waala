import fea1 from "../assets/fea1.jpg";
import fea2 from "../assets/fea2.jpg";
import fea3 from "../assets/fea3.jpg";
import fea4 from "../assets/fea4.jpg";

const features = [
  {
    img: fea1,
    title: "Eco-Friendly Cleaning Machines",
    desc: "Gentle on clothes, kind to the planet.",
  },
  {
    img: fea2,
    title: "Certified Wool Care Technology",
    desc: "Special care for delicate fabrics.",
  },
  {
    img: fea3,
    title: "Expert Fabric Specialists",
    desc: "Experience you can trust.",
  },
  {
    img: fea4,
    title: "Sustainable Cleaning Solutions",
    desc: "Clean clothes, cleaner future.",
  },
];

const WhyUs = () => {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto bg-[#F9F6F1]">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#2E2A53] mb-6 leading-snug">
            Laundrywala – <br /> Your Clothes, Our Care.
          </h2>
          <div className="w-20 h-1 bg-[#6E5A4C] mb-8"></div>
          <p className="text-lg text-[#5C5046] leading-relaxed mb-6">
            At <span className="font-semibold text-[#2E2A53]">Laundrywala</span>
            , we go beyond just cleaning clothes. Our eco-friendly processes and
            expert fabric specialists ensure your garments are handled with
            precision and care.
          </p>
          <p className="text-[#8B7967] font-semibold mb-6">
            Trusted by <span className="text-[#2E2A53]">90,000+ customers</span>
            – we’re ready to serve you too!
          </p>
          <button className="bg-[#6E5A4C] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#2E2A53] transition font-semibold">
            Schedule Pickup
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg bg-[#E9DDC9] border border-[#6E5A4C] hover:shadow-2xl hover:scale-[1.02] transition duration-300"
            >
              {/* Background image */}
              <img
                src={feature.img}
                alt={feature.title}
                className="w-full h-72 object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent"></div>

              {/* Text content */}
              <div className="absolute bottom-4 left-4 text-[#F5F0E8]">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm mt-1">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
