const Newsletter = () => {
  return (
    <div className="lg:w-[1440px] mx-5 lg:mx-auto my-8 lg:my-[124px] ">
      <div className=" bg-[#072B4A] rounded-xl p-4 lg:p-16 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div className="text-center lg:text-start">
          <h3 className="sora text-white text-lg lg:text-3xl font-semibold mb-2">
            Want to know what we are up to?
          </h3>
          <p className="sora text-white text-xs lg:text-lg font-normal mb-6">
            Subscribe to our newsletter.
          </p>
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter your email"
            className="mr-4 w-full rounded-lg border border-[#CBD5E1] py-[10px] lg:py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
          />
          <button className="rounded-xl py-[10px] lg:py-3 px-6 bg-[#0C98EB] hover:bg-[#0C98EB] sora text-sm lg:text-lg text-white font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
