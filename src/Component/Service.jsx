const features = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28gruKoizEG8p6yORG5XE_voXkj6ZuCoirJs7iGiKlS-mwV7UTwfnEzuL8RruPMJWemk&usqp=CAU",
    title: "Eco-Friendly Cleaning Machines",
    desc: "Gentle on clothes, kind to the planet.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Yl_zEOaJkrhvh1uMdOFiX8z-aRdUBcVp5w&s",
    title: "Certified Wool Care Technology",
    desc: "Special care for delicate fabrics.",
  },
  {
    img: "https://media.istockphoto.com/id/1408980050/photo/woman-unloading-laundry-from-white-washing-machine.jpg?s=612x612&w=0&k=20&c=DnyVgB0GGb-1WGy68-gJodF7-sJT-F8mDntCR9JC5NA=",
    title: "Expert Fabric Specialists",
    desc: "Experience you can trust.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiGq6TrJ1Taoi8x53ub0bTG7fu24G5uYDkg&s",
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

        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-[#E0D6CC]"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-20 h-20 object-contain mb-5"
              />
              <h3 className="text-lg font-bold text-[#2E2A53] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#5C5046] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
