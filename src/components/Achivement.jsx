import "./layout.css";
const Achivement = () => {
  return (
    <div className="bg-[#F0F8FF]">
      <div className="max-w-[1440px] mx-5 sm:mx-8 marginXY xl:mx-auto py-8 sm:py-[72px] lg:py-[124px]">
        <h3 className="text-center sora font-semibold text-xl sm:text-3xl lg:text-5xl text-[#072B4A] mb-4 lg:mb-6">
          Achievements <span className="text-[#2EB8A2]">& Awards</span>{" "}
        </h3>
        <p className="text-center sora text-[#334155] text-xs sm:text-base lg:text-lg font-normal mb-6 lg:mb-16">
          People know us for our top-notch work and great customer service, all
          of whom have expressed nothing <br className="sm:hidden" /> but
          positive feedback about our services. Take a moment to see for
          yourself.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <img className="rounded-lg" src="../../images/clutch.jpg" alt="" />
          <img className="rounded-lg" src="../../images/upwork.jpg" alt="" />
          <img className="rounded-lg" src="../../images/google.jpg" alt="" />
          <img className="rounded-lg" src="../../images/swd.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Achivement;
