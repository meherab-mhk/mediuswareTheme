import { FaArrowRightLong } from "react-icons/fa6";
import Project from "./Project";
import "./layout.css";
const Projects = () => {
  return (
    <div className="max-w-[1440px] mx-5 sm:mx-8 marginXY xl:mx-auto pt-8 pb-12 sm:py-[72px] lg:py-[124px]">
      <h3 className="sora font-semibold text-xl sm:text-3xl lg:text-5xl text-[#072B4A] mb-4 lg:mb-6">
        Projects We’d Hang on{" "}
        <span className="text-[#2EB8A2]">Our Refrigerator</span>{" "}
      </h3>
      <div className="flex flex-col lg:flex-row justify-between mb-6 lg:mb-16">
        <p className="sora text-[#334155] text-xs sm:text-base lg:text-lg font-normal lg:w-[1140px] mb-4">
          Discover our latest work, showcasing innovative solutions and
          successful collaborations that highlight our expertise in delivering
          high-quality software development projects.
        </p>
        <div>
          <button className="flex items-center gap-3 rounded-xl py-3 lg:py-4 px-6 lg:px-8 bg-[#0C98EB] hover:bg-[#0C98EB] sora text-base lg:text-lg text-white font-semibold">
            See All
            <FaArrowRightLong></FaArrowRightLong>
          </button>
        </div>
      </div>
      <Project></Project>
    </div>
  );
};

export default Projects;
