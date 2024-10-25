import { BsFillTelephoneFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import "./layout.css";
const AboutUs = () => {
  return (
    <div className="bg-[#F0F8FF]">
      <div className="max-w-[1440px] mx-5 sm:mx-8 marginXY xl:mx-auto py-8 sm:py-[72px] lg:py-[124px] grid grid-rows-1 xl:grid-cols-2 gap-6 relative">
        <div className="relative row-span-1">
          <div className="">
            <img
              src="../../images/aboutus-img.png"
              alt=""
              className="rounded-xl h-auto xl:h-[560px] w-auto xl:w-[703px] abtImg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[20%] rounded-xl"></div>
          </div>
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <img src="../../images/play.png" alt="" />
          </div>
        </div>
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl xl:w-[825px] xl:h-[486px] xl:absolute xl:right-0 xl:bottom-[20%] row-span-1">
          <h3 className="sora text-[#072B4A] text-xl sm:text-3xl lg:text-[48px] font-semibold mb-4">
            A Little Bit <span className="text-[#2EB8A2]">About Us</span>
          </h3>
          <p className="sora text-[#334155] text-xs sm:text-base lg:text-lg mb-4">
            Incepted in 2015, Mediusware Ltd. has been serving as a leading IT
            Solution provider in USA & Bangladesh. Our aim is to help businesses
            all around the world by providing the digital solutions according to
            their need. Serving a number of renowned companies from the USA, UK,
            and many other countries, we have already created a wide range of
            satisfied clients!
          </p>
          <div className="flex gap-4 justify-start- mb-8">
            <div className="bg-[#F1F5F9] p-4 rounded-xl w-full lg:w-[243px]">
              <h3 className="sora font-semibold text-xl sm:text-3xl lg:text-3xl mb-2 text-[#072B4A]">
                800+
              </h3>
              <p className="sora text-[#072B4A] text-xs sm:text-base">
                Projects Completed
              </p>
            </div>
            <div className="bg-[#F1F5F9] p-4 rounded-xl w-full lg:w-[243px]">
              <h3 className="sora font-semibold text-xl sm:text-3xl lg:text-3xl mb-2 text-[#072B4A]">
                100+
              </h3>
              <p className="sora text-[#072B4A] text-xs sm:text-base">
                Team Members
              </p>
            </div>
            <div className="bg-[#F1F5F9] p-4 rounded-xl w-full lg:w-[243px]">
              <h3 className="sora font-semibold text-xl sm:text-3xl lg:text-3xl mb-2 text-[#072B4A]">
                1000+
              </h3>
              <p className="sora text-[#072B4A] text-xs sm:text-base">
                Happy Customers
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-6">
            <div className="flex justify-start">
              <button className="flex justify-center items-center gap-3 w-full rounded-xl py-[10px] lg:py-4 px-8 bg-[#0C98EB] hover:bg-[#0C98EB] sora text-sm lg:text-lg text-white font-semibold">
                <BsFillTelephoneFill className="text-xl lg:text-2xl"></BsFillTelephoneFill>
                Contact Us
              </button>
            </div>
            <div className="flex justify-start">
              <button className="flex justify-center items-center gap-3 w-full rounded-xl py-[10px] lg:py-4 px-8 sora text-sm lg:text-lg text-[#072B4A] font-semibold border border-[#072B4A]">
                Company Deck
                <FiDownload className="text-xl lg:text-2xl"></FiDownload>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
