import React from "react";
import TrendingSwiper from "./TrendingSwiper";
import { ArrowRight } from "lucide-react";

const Trending = () => {
  return (
    <>
      <div className="h-full py-10 w-full flex flex-col lg:flex-row justify-center items-start pt-4 px-4 lg:pt-16 lg:px-12">
        <div className="w-full lg:w-5/12  h-full p-5 lg:p-12 flex flex-col gap-8">
          <p className="text-4xl lg:text-6xl text-[#E74C3C]">
            Trending Services
          </p>
          <p className="text-lg text-[#8A8A8A]">
            Explore our latest articles and case studies to stay ahead in your
            industry.
          </p>
          <div className="group rounded-full w-fit  px-4 py-3 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
            <p>Schedule&nbsp;a&nbsp;call</p>
            <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12 h-full">
          <TrendingSwiper />
        </div>
      </div>
      <hr className="border-t-2 w-full" />
      <div className="py-8 w-full flex justify-center items-center px-4">
        <div
          className="group rounded-full w-full lg:w-1/3 px-5 py-4 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider justify-start lg:justify-center items-center gap-4 cursor-pointer relative
        transition-all duration-500 ease-in-out font-bold"
        >
          Unlock your Growth now
          <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C] absolute right-4 lg:right-10">
            <ArrowRight />
          </div>
        </div>
      </div>
      <hr className="border-t-2 w-full" />
    </>
  );
};

export default Trending;
