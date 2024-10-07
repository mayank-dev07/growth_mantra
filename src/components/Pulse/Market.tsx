import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Market = () => {
  return (
    <>
      <div className="w-full h-full pt-8">
        <div className="w-full flex flex-col justify-center items-start px-4 lg:px-16 gap-10">
          <div className="text-3xl md:text-4xl lg:text-7xl text-[#576D2C] w-full flex flex-col gap-4">
            <p>Our Growth Mantra:</p>
            <p className="text-[#B2B7BE] flex gap-2 lg:gap-6">
              The
              <span className="text-[#576D2C]">LAUNCH</span>
              Protocol
            </p>
          </div>
          <p className="text-lg lg:text-xl tracking-wide leading-relaxed w-full text-left">
            {`Go-to-market approach driving successful product launches`}
          </p>
        </div>

        <div className="relative h-fit pb-20">
          <div className="absolute inset-52 top-[-80px] left-0 w-full">
            <Image
              src="/treevector.png"
              alt="tree"
              width={900}
              height={500}
              className="object-fill lg:object-contain h-[850px] lg:h-[1050px] w-fit mt-6"
            />
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[12%] mt-12">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">L</span>&nbsp;-&nbsp;Learn
              </p>
              <div className="text-lg lg:text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-4 gap-3 bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left ">
                  Conduct comprehensive market research and customer analysis
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[8%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">A</span>&nbsp;-&nbsp;Analyze
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                  Evaluate competitive landscape and identify market gaps
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[3%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">U</span>
                &nbsp;-&nbsp;Understand
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                  Define your unique value proposition and target segments
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[6%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">N</span>&nbsp;-&nbsp;Navigate
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 gap-3 bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                  Develop channel strategies and partnerships
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[20%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">C</span>
                &nbsp;-&nbsp;Communicate&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                  {`Craft compelling meszaging and content strategies`}
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[35%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">H</span>
                &nbsp;-&nbsp;Harmonize&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                  {`Align all elements of your go-to-market strategy for maximum impact`}
                </p>
              </div>
            </div>
          </div>

        </div>

        <hr className="border-t-2 w-full" />
        <div className="py-8 w-full flex justify-center items-center px-4">
          <Link href="/contactus2" passHref>
            <div
              className="group rounded-full w-fit px-6 py-4 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#576D2C] bg-white text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer
          transition-all duration-500 ease-in-out font-bold"
            >
              Launch Anxiety? Boost the LAUNCH Protocol Now!
              <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#576D2C] group-hover:text-[#576D2C]">
                <ArrowRight />
              </div>
            </div>
          </Link>
        </div>
        <hr className="border-t-2 w-full" />
      </div>
    </>
  );
};

export default Market;
