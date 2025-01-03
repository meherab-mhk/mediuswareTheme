const Hero = () => {
  return (
    <div className="hero lg:min-h-screen py-12 sm:py-[72px] lg:py-[200px]">
      <div className="hero-content sm:px-0 sm:mx-12  text-center">
        <div className="">
          <h1 className="sora font-bold text-white text-3xl sm:text-5xl sm:leading-[60px] lg:text-[96px] lg:leading-[126px] mb-6 lg:mb-8">
            Transforming Your Ideas into{" "}
            <span className="text-[#2EB8A2]">Digital Outcomes</span>{" "}
          </h1>
          <p className="sora text-xs sm:text-sm lg:text-lg font-medium text-white mb-8 lg:mb-16">
            Our global journey needs your expertise. Align with our brand ethos
            and help us reach new heights across the world.
          </p>
          <div className="flex justify-center">
            <button className="flex items-center gap-3 rounded-xl py-4 px-8 bg-[#0C98EB] hover:bg-[#0C98EB] sora text-base lg:text-lg text-white font-semibold">
              <img
                className="w-5 lg:w-6"
                src="../../images/phone-call-01.svg"
                alt="telephone-ring-icon"
              />
              Talk to Someone
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
