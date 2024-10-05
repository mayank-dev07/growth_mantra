import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
const BrandSolution = () => {
  return (
    <>
      <div className="w-full h-full pt-8">
        <div className="w-full flex flex-col justify-center items-start px-4 lg:px-16 gap-10">
          <div className="text-3xl md:text-4xl lg:text-7xl text-[#576D2C] w-full flex flex-col gap-4">
            <p>Our Growth Mantra:</p>
            <p className="text-[#B2B7BE] flex gap-2 lg:gap-6">
              The
              <span className="text-[#576D2C]">ESSENCE</span>
              Model
            </p>
          </div>
          <p className="text-lg lg:text-xl tracking-wide leading-relaxed w-full text-left">
            {`Go-to-BrandSolution approach driving successful product launches`}
          </p>
        </div>

        <div className="relative h-fit pb-20">
          <div className="absolute inset-52 top-[-90px] left-0 w-full">
            <Image
              src="/treevector.png"
              alt="tree"
              width={900}
              height={500}
              className="object-fill lg:object-contain h-[850px] lg:h-[1250px] w-fit mt-6"
            />
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[12%] mt-12">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">E</span>&nbsp;-&nbsp;Explore
              </p>
              <div className="text-lg lg:text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-4 gap-3 bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left ">
                Dive deep into your business, market, and customer insights
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[8%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">S</span>&nbsp;-&nbsp;Syntesize
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                  Distill key findings into core brand elements
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[3%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">S</span>
                &nbsp;-&nbsp;Structure
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                 Build a robust brand architecture and positioning
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[6%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">E</span>&nbsp;-&nbsp;Express
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 gap-3 bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
              Develop visual and verbal brand expressions
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[15%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">N</span>
                &nbsp;-&nbsp;Nurture&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                  {`Cultivate brand loyality through consistent expreriences`}
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[25%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">E</span>
                &nbsp;-&nbsp;Evalutate&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                  {`Continuously assess and rfine brand perfomance`} 
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end right-0 lg:right-[35%] mt-5 lg:mt-[68px]">
            <div className="h-auto w-11/12 lg:w-[50%] tracking-wide">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">C</span>
                &nbsp;-&nbsp;Communicate&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">
                <p className="leading-normal text-[#576D2C] font-bold text-sm md:text-lg text-left">
                  {`Align all elements of your go-to-BrandSolution strategy for maximum impact`} 
                </p>
              </div>
            </div>
          </div>
         
        </div>

        <hr className="border-t-2 w-full" />
        <div className="py-8 w-full flex justify-center items-center px-4">
          <Link href="/contactus" passHref>
          <div
            className="group rounded-full w-fit px-6 py-4 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#576D2C] bg-white text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer
          transition-all duration-500 ease-in-out font-bold"
          >
           Brand Impact Weak? Disover Your ESSENCE Today!
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

export default BrandSolution;
