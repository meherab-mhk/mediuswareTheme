const Service = () => {
  return (
    <div className="grid grid-cols-3 justify-center items-center w-[1440px] mx-auto gap-6 mb-12">
      <div className="card bg-[#072B4A99] image-full w-[464px] h-[364px] shadow-xl rounded-xl col-span-1">
        <figure>
          <img
            src="../../images/software.jfif"
            alt="pc-img"
            className="w-full"
          />
        </figure>
        <div className="flex flex-col justify-end text-white p-6 z-10">
          <h2 className="sora text-2xl font-semibold">Software Development</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className="card bg-[#072B4A99] image-full w-[464px] h-[364px] shadow-xl rounded-xl">
        <figure>
          <img src="../../images/web.jfif" alt="pc-img" className="w-full" />
        </figure>
        <div className="flex flex-col justify-end text-white p-6 z-10">
          <h2 className="sora text-2xl font-semibold">Web Development</h2>
          <p>
            We offer One-Of-A-Kind web development solutions to businesses all
            around the world. Our team is ...
          </p>
        </div>
      </div>
      <div className="card bg-[#072B4A99] image-full w-[464px] h-[364px] shadow-xl rounded-xl">
        <figure>
          <img src="../../images/mobile.jfif" alt="pc-img" className="w-full" />
        </figure>
        <div className="flex flex-col justify-end text-white p-6 z-10">
          <h2 className="sora text-2xl font-semibold">
            Mobile App Development
          </h2>
          <p>
            Innovative solutions tailored to your needs, delivering seamless
            user experiences.
          </p>
        </div>
      </div>
      <div className="card bg-[#072B4A99] image-full w-[464px] h-[364px] shadow-xl rounded-xl">
        <figure>
          <img
            src="../../images/ecommerce.jfif"
            alt="pc-img"
            className="w-full"
          />
        </figure>
        <div className="flex flex-col justify-end text-white p-6 z-10">
          <h2 className="sora text-2xl font-semibold">E-commerce Solution</h2>
          <p>
            E-commerce websites need to be user-friendly, but attractive at the
            same time.
          </p>
        </div>
      </div>
      <div className="card bg-[#072B4A99] image-full w-[464px] h-[364px] shadow-xl rounded-xl">
        <figure>
          <img src="../../images/uiux.jfif" alt="pc-img" className="w-full" />
        </figure>
        <div className="flex flex-col justify-end text-white p-6 z-10">
          <h2 className="sora text-2xl font-semibold">UI/UX Design</h2>
          <p>
            Crafting interfaces that enhance user experiences, elevating brand
            engagement effortlessly.
          </p>
        </div>
      </div>
      <div className="card bg-[#072B4A99] image-full w-[464px] h-[364px] shadow-xl rounded-xl">
        <figure>
          <img src="../../images/api.jfif" alt="pc-img" className="w-full" />
        </figure>
        <div className="flex flex-col justify-end text-white p-6 z-10">
          <h2 className="sora text-2xl font-semibold">API Integration</h2>
          <p>
            Bridging platforms for effortless data flow, enabling enhanced
            operational efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
