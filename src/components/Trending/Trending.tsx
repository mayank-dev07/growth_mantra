import React from "react";
import { ArrowRight } from "lucide-react";
import TrendingSwiper from "./TrendingSwiper1";
const Trending = () => {
  return (
    <>
      <div className="h-full py-10 w-full flex flex-col lg:flex-row justify-center items-start pt-4 px-4 lg:pt-16 lg:px-12">
        <div className="w-full lg:w-5/12  h-full  lg:p-12 flex flex-col gap-8">
          <p className="text-4xl lg:text-6xl text-[#576D2C]">
            Trending Offerings
          </p>
          <p className="text-lg text-[#8A8A8A]">
            Explore our latest articles and case studies to stay ahead in your
            industry.
          </p>
          <div className="pb-8 md:py-4 w-full flex justify-center md:justify-start items-center">
            <div className="group rounded-full w-fit px-5 py-2 flex text-sm md:text-base lg:text-lg xl:text-xl hover:text-white hover:bg-[#576D2C] bg-white text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
              Schedule a call
              <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#576D2C] group-hover:text-[#576D2C]">
                <ArrowRight />
              </div>
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
          className="group rounded-full w-full lg:w-1/2 px-5 py-4 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#576D2C] bg-white text-[#576D2C] border-[1px] shadow-xl tracking-wider justify-start lg:justify-center items-center gap-4 cursor-pointer relative
        transition-all duration-500 ease-in-out font-bold"
        >
          Unlock your Growth now
          <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#576D2C] group-hover:text-[#576D2C] absolute right-4 lg:right-10">
            <ArrowRight />
          </div>
        </div>
      </div>
      <hr className="border-t-2 w-full" />
    </>
  );
};

export default Trending;
