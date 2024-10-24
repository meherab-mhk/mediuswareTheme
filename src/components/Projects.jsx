import { FaArrowRightLong } from "react-icons/fa6";
import Project from "./Project";
const Projects = () => {
  return (
    <div className="lg:w-[1440px] mx-5 lg:mx-auto pt-8 pb-12 lg:py-[124px]">
      <h3 className="sora font-semibold text-xl lg:text-5xl text-[#072B4A] mb-4 lg:mb-6">
        Projects We’d Hang on{" "}
        <span className="text-[#2EB8A2]">Our Refrigerator</span>{" "}
      </h3>
      <div className="flex flex-col lg:flex-row justify-between mb-6 lg:mb-16">
        <p className="sora text-[#334155] text-xs lg:text-lg font-normal lg:w-[1140px] mb-4">
          Discover our latest work, showcasing innovative solutions and
          successful collaborations that highlight our expertise in delivering
          high-quality software development projects.
        </p>
        <div>
          <button className="flex items-center gap-3 rounded-xl py-4 px-8 bg-[#0C98EB] hover:bg-[#0C98EB] sora text-lg text-white font-semibold">
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
