import React from "react";
import TrendingSwiper from "./TrendingSwiper";
import { ArrowRight } from "lucide-react";

const Trending = () => {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-start p-4 lg:p-16">
        <div className="w-full lg:w-5/12  h-full p-5 lg:p-12 flex flex-col gap-8">
          <p className="text-4xl lg:text-9xl text-[#E74C3C]">
            Trending Services
          </p>
          <p className="text-2xl text-[#8A8A8A]">
            Explore our latest articles and case studies to stay ahead in your
            industry.
          </p>
          <div className="group rounded-full w-full lg:w-1/2 px-6 py-4 flex text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer">
            <p>Schedule&nbsp;a&nbsp;call</p>
            <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
              <ArrowRight />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12 h-full">
          <TrendingSwiper />
        </div>
      </div>
      <hr className="border-t-2 w-full" />
      <div className="py-8 w-full flex justify-center items-center">
        <div className="group rounded-full w-full lg:w-1/2 px-6 py-6 flex text-xl lg:text-2xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider justify-between lg:justify-center items-center gap-4 cursor-pointer relative">
          Unlock your Growth now
          <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C] absolute right-10">
            <ArrowRight />
          </div>
        </div>
      </div>
      <hr className="border-t-2 w-full" />
    </>
  );
};

export default Trending;
