import { FaArrowRightLong } from "react-icons/fa6";
import Service from "./Service";

const Services = () => {
  return (
    <div className="py-8 lg:py-[124px]">
      <h3 className="text-center sora font-semibold text-xl lg:text-5xl text-[#072B4A] mb-6 lg:mb-16">
        Things We’re <span className="text-[#2EB8A2]">Good At</span>{" "}
      </h3>
      <Service></Service>
      <div className="flex justify-center">
        <button className="flex items-center gap-3 rounded-xl py-4 px-8 bg-[#0C98EB] hover:bg-[#0C98EB] sora text-lg text-white font-semibold">
          See All
          <FaArrowRightLong></FaArrowRightLong>
        </button>
      </div>
    </div>
  );
};

export default Services;
