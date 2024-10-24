const Service = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center lg:w-[1440px] mx-5 lg:mx-auto gap-6 mb-12">
      <div className="card bg-[#072B4A99] image-full w-[350px] lg:w-[464px] h-[234px] lg:h-[364px] shadow-xl rounded-xl col-span-1">
        <figure>
          <img
            src="../../images/software.jfif"
            alt="pc-img"
            className="w-full"
          />
        </figure>
        <div className="flex flex-col justify-end text-white p-6 z-10">
          <h2 className="sora text-xl lg:text-2xl font-semibold mb-2">
            Software Development
          </h2>
          <p className="sora text-normal text-sm lg:text-base">
            Relieve the Burden of Software Development and Project Management.
          </p>
        </div>
      </div>
      <div className="card bg-[#072B4A99] image-full w-[350px] lg:w-[464px] h-[234px] lg:h-[364px] shadow-xl rounded-xl">
        <figure>
          <img src="../../images/web.jfif" alt="pc-img" className="w-full" />
        </figure>
        <div className="flex flex-col justify-end text-white p-6 z-10">
          <h2 className="sora text-xl lg:text-2xl font-semibold mb-2">
            Web Development
          </h2>
          <p className="sora text-normal text-sm lg:text-base">
            We offer One-Of-A-Kind web development solutions to businesses all
            around the world. Our...
          </p>
        </div>
      </div>
      <div className="card bg-[#072B4A99] image-full w-[350px] lg:w-[464px] h-[234px] lg:h-[364px] shadow-xl rounded-xl">
        <figure>
          <img src="../../images/mobile.jfif" alt="pc-img" className="w-full" />
        </figure>
        <div className="flex flex-col justify-end text-white p-6 z-10">
          <h2 className="sora text-xl lg:text-2xl font-semibold mb-2">
            Mobile App Development
          </h2>
          <p className="sora text-normal text-sm lg:text-base">
            Innovative solutions tailored to your needs, delivering seamless
            user experiences.
          </p>
        </div>
      </div>
      <div className="card bg-[#072B4A99] image-full w-[350px] lg:w-[464px] h-[234px] lg:h-[364px] shadow-xl rounded-xl">
        <figure>
          <img
            src="../../images/ecommerce.jfif"
            alt="pc-img"
            className="w-full"
          />
        </figure>
        <div className="flex flex-col justify-end text-white p-6 z-10">
          <h2 className="sora text-xl lg:text-2xl font-semibold mb-2">
            E-commerce Solution
          </h2>
          <p className="sora text-normal text-sm lg:text-base">
            E-commerce websites need to be user-friendly, but attractive at the
            same time.
          </p>
        </div>
      </div>
      <div className="card bg-[#072B4A99] image-full w-[350px] lg:w-[464px] h-[234px] lg:h-[364px] shadow-xl rounded-xl">
        <figure>
          <img src="../../images/uiux.jfif" alt="pc-img" className="w-full" />
        </figure>
        <div className="flex flex-col justify-end text-white p-6 z-10">
          <h2 className="sora text-xl lg:text-2xl font-semibold mb-2">
            UI/UX Design
          </h2>
          <p className="sora text-normal text-sm lg:text-base">
            Crafting interfaces that enhance user experiences, elevating brand
            engagement effortlessly.
          </p>
        </div>
      </div>
      <div className="card bg-[#072B4A99] image-full w-[350px] lg:w-[464px] h-[234px] lg:h-[364px] shadow-xl rounded-xl">
        <figure>
          <img src="../../images/api.jfif" alt="pc-img" className="w-full" />
        </figure>
        <div className="flex flex-col justify-end text-white p-6 z-10">
          <h2 className="sora text-xl lg:text-2xl font-semibold mb-2">
            API Integration
          </h2>
          <p className="sora text-normal text-sm lg:text-base">
            Bridging platforms for effortless data flow, enabling enhanced
            operational efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
