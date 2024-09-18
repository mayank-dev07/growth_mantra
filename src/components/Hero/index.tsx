"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import VerticalSwiper from "../VerticalSwiper";

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
      <div className="h-full lg:min-h-screen w-full flex lg:flex-row flex-col pt-28">
        <div
          className={`w-full lg:w-8/12 lg:min-h-screen flex flex-col  ${
            scrollPosition > 50 ? "lg:justify-center" : "lg:justify-start"
          }`}
        >
          <Image
            src="/Frame.png"
            alt="frame"
            width={400}
            height={400}
            className={`z-50 transition-all duration-500 ease-in-out mix-blend-normal ${
              scrollPosition > 50
                ? "lg:fixed lg:top-[52px] lg:left-10 transform -translate-x-15 !w-[11.3%] "
                : "relative"
            }`}
          />
          <div
            className={`px-0 lg:px-10 xl:px-16 flex flex-col gap-4 justify-center sm:justify-start items-center sm:items-start
          ${scrollPosition > 50 ? "pt-32" : ""}`}
          >
            <div className="w-fit p-4 text-lg font-bold tracking-wider text-[#E74C3C] bg-[#FFEDEB] rounded-xl ">
              👋 Welcome to The Growth Mantra
            </div>
            <div className="w-full flex flex-col gap-6 p-1 px-2 lg:px-0 justify-center sm:justify-start items-center sm:items-start">
              <div className="text-3xl sm:text-4xl md:text-7xl xl:text-8xl font-bold flex flex-col gap-4">
                Your&nbsp;North&nbsp;Star
                <div className="flex items-center gap-2">
                  <div className="border-[#E74C3C] py-2 px-4 md:px-8 text-2xl sm:text-3xl md:text-7xl  border-4 w-fit rounded-full text-[#E74C3C] font-bold shadow-2xl">
                    Growth
                  </div>
                  Catalyst
                </div>
              </div>
              <div className="text-[#425466] text-base md:text-lg py-4">
                Your strategic partner for sustainable growth
              </div>
              <div className="w-full flex justify-center md:justify-start">
                <div className="group rounded-full w-fit px-4 py-2 flex text-base md:text-xl font-bold text-white bg-[#E74C3C] hover:bg-white hover:text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
                  Unlock your Growth now
                  <div className="p-3 bg-white rounded-full text-black group-hover:bg-[#E74C3C] group-hover:text-white transition-all duration-300 ease-in-out">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12 py-12 flex justify-center items-center">
          <div className="w-full md:w-1/2 lg:w-full flex justify-center items-center -z-10">
            <VerticalSwiper />
          </div>
        </div>
      </div>

      <div className="flex flex-col py-12 gap-8">
        <div className="w-full h-full flex flex-col justify-center items-center text-[#B2B7BE]">
          SOME OF OUR TRUSTED CLIENTS
        </div>
        <div className="w-full flex justify-center items-center gap-6 lg:gap-12 flex-wrap">
          <Image
            src="/sponser1.png"
            alt="sponser"
            width={130}
            height={130}
          ></Image>{" "}
          <Image
            src="/sponser2.png"
            alt="sponser"
            width={130}
            height={130}
          ></Image>{" "}
          <Image
            src="/sponser3.png"
            alt="sponser"
            width={130}
            height={130}
          ></Image>{" "}
          <Image
            src="/sponser4.png"
            alt="sponser"
            width={130}
            height={130}
          ></Image>{" "}
          <Image
            src="/sponser5.png"
            alt="sponser"
            width={130}
            height={130}
          ></Image>{" "}
          <Image
            src="/sponser6.png"
            alt="sponser"
            width={130}
            height={130}
          ></Image>{" "}
        </div>
      </div>
    </>
  );
};

export default Hero;
