import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { PiMapPinAreaFill } from "react-icons/pi";
import "./layout.css";
const Footer = () => {
  return (
    <div className="bg-[#072B4A]">
      <div className="max-w-[1440px] mx-5 sm:mx-8 marginXY xl:mx-auto pt-8 sm:pt-[72px] lg:pt-[124px] pb-5 sm:pb-10">
        <div className="grid footergrid xl:grid-cols-2  gap-8 mb-6 lg:mb-16">
          <div className="col-span-1">
            <div className="flex justify-center sm:justify-start">
              <img className="mb-8" src="../../images/Logo.svg" alt="" />
            </div>
            <div className="flex justify-center sm:justify-start items-center gap-3 mb-8">
              <a>
                <img src="../../images/linkedin.svg" alt="" />
              </a>
              <a>
                <img src="../../images/x.svg" alt="" />
              </a>
              <a>
                <img src="../../images/fb.svg" alt="" />
              </a>
              <a>
                <img src="../../images/youtube.svg" alt="" />
              </a>
            </div>
            <div className="flex justify-start items-center gap-2 lg:gap-4">
              <img
                className="w-full xl:w-auto"
                src="../../images/clutch.png"
                alt=""
              />
              <img
                className="w-full xl:w-auto"
                src="../../images/google.png"
                alt=""
              />
              <img
                className="w-full xl:w-auto"
                src="../../images/upwork.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 ">
              <div className="flex flex-col text-white col-span-1">
                <h3 className="sora text-base sm:text-xl lg:text-2xl font-semibold mb-6">
                  Company
                </h3>
                <ul className="flex sm:flex-col gap-3">
                  <li className="sora text-xs sm:text-sm lg:text-base font-normal">
                    Home
                  </li>
                  <li className="sora text-xs sm:text-sm lg:text-base font-normal">
                    Services
                  </li>
                  <li className="sora text-xs sm:text-sm lg:text-base font-normal">
                    Projects
                  </li>
                  <li className="sora text-xs sm:text-sm lg:text-base font-normal">
                    About Us
                  </li>
                  <li className="sora text-xs sm:text-sm lg:text-base font-normal">
                    Contact
                  </li>
                </ul>
              </div>
              <div className="flex gap-8 col-span-2">
                <div className="flex flex-col text-white">
                  <h3 className="sora text-base sm:text-xl lg:text-2xl font-semibold mb-6">
                    Services
                  </h3>
                  <ul>
                    <li className="sora text-xs sm:text-sm lg:text-base font-normal mb-3">
                      Software Development{" "}
                    </li>
                    <li className="sora text-xs sm:text-sm lg:text-base font-normal mb-3">
                      UI/UX Design & Dev
                    </li>
                    <li className="sora text-xs sm:text-sm lg:text-base font-normal mb-3">
                      Web Development
                    </li>
                    <li className="sora text-xs sm:text-sm lg:text-base font-normal mb-3">
                      API Integration
                    </li>
                    <li className="sora text-xs sm:text-sm lg:text-base font-normal mb-3">
                      Mobile App Design
                    </li>
                    <li className="sora text-xs sm:text-sm lg:text-base font-normal mb-3">
                      E commerce Solutions
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col text-white">
                  <h3 className="sora text-2xl font-semibold mb-6"></h3>
                  <ul>
                    <li className="sora text-xs sm:text-sm lg:text-base font-normal mt-8 mb-3">
                      Mobile App Development
                    </li>
                    <li className="sora text-xs sm:text-sm lg:text-base font-normal mb-3">
                      Enterprise Solution
                    </li>
                    <li className="sora text-xs sm:text-sm lg:text-base font-normal mb-3">
                      SQA Solution
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="flex flex-col text-white col-span-1">
                <h3 className="sora text-2xl font-semibold mb-6">Services</h3>
                <ul>
                  <li className="sora text-xs lg:text-base font-normal mb-3">
                    Software Development{" "}
                  </li>
                  <li className="sora text-xs lg:text-base font-normal mb-3">
                    UI/UX Design & Dev
                  </li>
                  <li className="sora text-xs lg:text-base font-normal mb-3">
                    Web Development
                  </li>
                  <li className="sora text-xs lg:text-base font-normal mb-3">
                    API Integration
                  </li>
                  <li className="sora text-xs lg:text-base font-normal mb-3">
                    Mobile App Design
                  </li>
                  <li className="sora text-xs lg:text-base font-normal mb-3">
                    E commerce Solutions
                  </li>
                </ul>
              </div>
              <div className="flex flex-col text-white col-span-1">
                <h3 className="sora text-2xl font-semibold mb-6"></h3>
                <ul>
                  <li className="sora text-xs lg:text-base font-normal mt-8 mb-3">
                    Mobile App Development
                  </li>
                  <li className="sora text-xs lg:text-base font-normal mb-3">
                    Enterprise Solution
                  </li>
                  <li className="sora text-xs lg:text-base font-normal mb-3">
                    SQA Solution
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 pb-6 sm:pb-12 lg:pb-12 border-b border-[#065186]">
          <div className="bg-[#FFFFFF1A] p-4 lg:p-6 rounded-xl flex flex-col sm:flex-row gap-3 lg:gap-6 col-span-1">
            <img
              className="w-[72px] sm:w-auto"
              src="../../images/loc-usa.png"
              alt=""
            />
            <div className="text-white">
              <h3 className="sora text-base sm:text-xl lg:text-2xl font-semibold mb-6">
                USA Office
              </h3>
              <ul>
                <li className="flex items-center gap-2 lg:gap-4 sora text-xs sm:text-sm lg:text-base font-normal mb-4">
                  <PiMapPinAreaFill className="text-base lg:text-2xl"></PiMapPinAreaFill>
                  1903 commonwealth st, Houston tx 77006, USA
                </li>
                <li className="flex items-center gap-2 lg:gap-4 sora text-xs sm:text-sm lg:text-base font-normal mb-4">
                  <BsFillTelephoneFill className="text-base lg:text-2xl"></BsFillTelephoneFill>{" "}
                  +1 (978) 431-0122
                </li>
                <li className="flex items-center gap-2 lg:gap-4 sora text-xs sm:text-sm lg:text-base font-normal mb-4">
                  <FaEnvelope className="text-base lg:text-2xl"></FaEnvelope>{" "}
                  info@mediusware.com
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#FFFFFF1A] p-4 lg:p-6 rounded-xl flex flex-col sm:flex-row gap-3 lg:gap-6 col-span-1">
            <img
              className="w-[72px] sm:w-auto"
              src="../../images/loc-bd.png"
              alt=""
            />
            <div className="text-white">
              <h3 className="sora text-base sm:text-xl lg:text-2xl font-semibold mb-6">
                Bangladesh Office
              </h3>
              <ul>
                <li className="flex items-center gap-2 lg:gap-4 sora text-xs sm:text-sm lg:text-base font-normal mb-4">
                  <PiMapPinAreaFill className="text-base lg:text-2xl"></PiMapPinAreaFill>
                  1903 commonwealth st, Houston tx 77006, USA
                </li>
                <li className="flex items-center gap-2 lg:gap-4 sora text-xs sm:text-sm lg:text-base font-normal mb-4">
                  <BsFillTelephoneFill className="text-base lg:text-2xl"></BsFillTelephoneFill>{" "}
                  +880 1750-020408
                </li>
                <li className="flex items-center gap-2 lg:gap-4 sora text-xs sm:text-sm lg:text-base font-normal mb-4">
                  <FaEnvelope className="text-base lg:text-2xl"></FaEnvelope>{" "}
                  info@mediusware.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h3 className="text-center sora text-white text-sm lg:text-base font-medium mt-6 sm:mt-12 lg:mt-10">
          © 2015-2024 Mediusware ltd. All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
