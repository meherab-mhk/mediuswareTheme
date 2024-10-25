import { GoArrowRight } from "react-icons/go";
import { VscSend } from "react-icons/vsc";
import "./layout.css";
const Inquiry = () => {
  return (
    <div className="max-w-[1440px] mx-5 sm:mx-8 marginXY xl:mx-auto pb-8 sm:pb-[72px] lg:pb-[124px]">
      <div className="grid xl:grid-cols-2 gap-8">
        <div className="col-span-1">
          <div className="relative">
            <img
              className="w-[124px] sm:w-auto"
              src="../../images/ceo-img.png"
              alt=""
            />
            <div className="bg-[#A5EADA4D] p-4 lg:p-6 rounded-xl absolute left-[110px] sm:left-[200px] bottom-0 backdrop-blur-lg lg:w-[374px]">
              <h3 className="sora text-[#072B4A] text-lg sm:text-2xl font-semibold mb-2">
                Md. Shahinur Rahman
              </h3>
              <p className="sora text-[#072B4A] text-xs sm:text-base font-normal">
                Managing Director, Mediusware Ltd
              </p>
            </div>
          </div>
          <p className="sora text-[#072B4A] text-sm sm:text-lg font-normal mt-4 lg:mt-8">
            I'd be excited to talk with you about your projects or what you
            need.
          </p>
          <p className="sora text-[#072B4A] text-sm sm:text-lg font-normal mt-4">
            Fill in the form or send us an email to{" "}
            <span className="text-[#007ACC] underline font-semibold">
              “info@mediusware.com”
            </span>
          </p>
          <p className="sora text-[#072B4A] font-bold text-xl mt-4 lg:mt-8">
            Talk to you in less than 24hs.
          </p>
          <div className="bg-[#F0F8FF] p-4 lg:p-6 rounded-xl mt-4 lg:mt-8">
            <h3 className="sora text-[#072B4A] text-lg sm:text-xl font-semibold mb-2">
              Book a call
            </h3>
            <p className="sora text-[#072B4A] text-xs sm:text-base font-normal mb-4 lg:mb-8">
              Feel free to select a time at your convenience!
            </p>
            <a className="flex items-center gap-2 sora text-[#0C98EB] text-sm sm:text-base font-semibold">
              Let’s Talk
              <GoArrowRight className="text-2xl"></GoArrowRight>
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-[#F0F8FF] p-4 lg:p-6 rounded-xl">
            <h3 className="sora text-[#072B4A] text-lg sm:text-2xl font-semibold mb-4">
              Got an idea? We’ve got the skills.
            </h3>
            <p className="sora text-[#072B4A] text-xs sm:text-base font-normal mb-8">
              Fill out our contact form and we’ll get in touch!
            </p>
            <div className="flex flex-col gap-6 mb-6 lg:mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="mb-2 sora text-sm sm:text-base font-normal text-[#072B4A]"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="mb-2 sora text-sm sm:text-base font-normal text-[#072B4A]"
                  >
                    Email*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="mb-2 sora text-sm sm:text-base font-normal text-[#072B4A]"
                  >
                    Phone Number
                    <span className="text-[#64748B]"> (Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Phone"
                    className="rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="mb-2 sora text-sm sm:text-base font-normal text-[#072B4A]"
                  >
                    Company Name
                    <span className="text-[#64748B]"> (Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Company Name"
                    className="rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="mb-2 sora text-sm sm:text-base font-normal text-[#072B4A]"
                >
                  Deep details about your query
                  <span className="text-[#64748B]"> (Optional)</span>
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Tell us more about your query"
                  className="h-[120px] rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                ></textarea>
              </div>
              {/* <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="mb-2 sora font-normal text-[#072B4A]"
                >
                  Name*
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="mb-2 sora font-normal text-[#072B4A]"
                >
                  Email*
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="mb-2 sora font-normal text-[#072B4A]"
                >
                  Phone Number
                  <span className="text-[#64748B]"> (Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor=""
                  className="mb-2 sora font-normal text-[#072B4A]"
                >
                  Company Name
                  <span className="text-[#64748B]"> (Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                />
              </div> */}
              {/* <div className="flex flex-col col-span-2">
                <label
                  htmlFor=""
                  className="mb-2 sora font-normal text-[#072B4A]"
                >
                  Deep details about your query
                  <span className="text-[#64748B]"> (Optional)</span>
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Tell us more about your query"
                  className="h-[120px] rounded-lg border border-[#CBD5E1] py-3 px-4 sora text-[#475569] text-base font-normal focus:outline-none"
                ></textarea>
              </div> */}
            </div>
            <div className="flex justify-center sm:justify-end">
              <button className="flex justify-center items-center gap-2 rounded-xl py-3 px-6 bg-[#0C98EB] hover:bg-[#0C98EB] sora text-lg text-white font-semibold w-full sm:w-auto">
                Submit Inquiry
                <VscSend className="text-2xl"></VscSend>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
