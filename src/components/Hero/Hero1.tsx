"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import VerticalSwiper from "../VerticalSwiper1";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-full w-full flex lg:flex-row flex-col pt-20 lg:pt-28 gap-10 lg:gap-0">
        {/* Left Section */}
        <div
          className={`w-full lg:w-8/12 h-full flex flex-col ${scrollPosition > 50 ? "pt-36" : "lg:justify-start"}`}
        >
          <Image
            src="/Frame.png"
            alt="frame"
            width={400}
            height={400}
            className={`z-50 transition-all duration-500 ease-in-out mix-blend-normal ${scrollPosition > 50
              ? "fixed top-[64px] lg:top-[52px] lg:left-10 transform -translate-x-15 w-[35%] md:!w-[12%] "
              : "relative"
            }`}
          />

          <div className="px-4 lg:px-10 xl:px-16 flex flex-col gap-6 justify-center items-center lg:items-start">
            <div className="w-fit p-4 text-sm lg:text-lg font-bold tracking-wider text-[#576D2C] bg-[#F4F4F4] rounded-xl">
              👋 Welcome to The Growth Mantra
            </div>

            <div className="w-full flex flex-col gap-4 p-1 justify-center items-center lg:items-start">
              <div className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-bold flex flex-col gap-2 sm:gap-3 text-[#576D2C]">
                Transform Vision into
                <div className="flex items-center gap-2">
                  <div>Actionable</div>
                  <div className="border-[#576D2C] py-2 px-4 md:px-6 text-2xl sm:text-3xl md:text-4xl border-4 w-fit rounded-full text-[#576D2C] font-bold shadow-2xl">
                    Growth
                  </div>
                </div>
                Strategies
              </div>

              <div className="text-[#425466] text-sm md:text-base xl:text-lg py-2">
                Your strategic partner for sustainable growth
              </div>

              <div className="w-full flex justify-center lg:justify-start">
                <div className="group rounded-full w-fit px-4 py-2 flex text-sm md:text-base lg:text-lg font-bold text-white bg-[#576D2C] hover:bg-white hover:text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
                  Unlock Your Business Growth
                  <div className="p-3 bg-white rounded-full text-black group-hover:bg-[#576D2C] group-hover:text-white transition-all duration-300 ease-in-out">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full h-full lg:w-4/12 pt-4 lg:pt-8 xl:pt-12 flex justify-center items-center">
          <div className="w-full md:w-3/4 lg:w-full flex justify-center items-center -z-10 md:-z-0">
            <VerticalSwiper />
          </div>
        </div>
      </div>

      {/* Trusted Clients Section */}
      <div className="flex flex-col py-12 gap-10">
        <div className="w-full h-full flex flex-col justify-center items-center text-[#B2B7BE]">
          SOME OF OUR TRUSTED CLIENTS
        </div>
        <div className="w-full flex justify-center items-center gap-7 lg:gap-12 flex-wrap">
          <Image
            src="/sponser1.png"
            alt="sponser"
            width={110}
            height={110}
          ></Image>{" "}
          <Image
            src="/sponser2.png"
            alt="sponser"
            width={110}
            height={110}
          ></Image>{" "}
          <Image
            src="/sponser3.png"
            alt="sponser"
            width={110}
            height={110}
          ></Image>{" "}
          <Image
            src="/sponser4.png"
            alt="sponser"
            width={110}
            height={110}
          ></Image>{" "}
          <Image
            src="/sponser5.png"
            alt="sponser"
            width={110}
            height={110}
          ></Image>{" "}
          <Image
            src="/sponser6.png"
            alt="sponser"
            width={110}
            height={110}
          ></Image>{" "}
        </div>
      </div>
    </>
  );
};

export default Hero;
