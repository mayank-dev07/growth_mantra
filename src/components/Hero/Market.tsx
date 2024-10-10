"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import VerticalSwiper from "../VerticalSwiper8";
import Link from "next/link";
import Sponsor from "../Sponsor";

const MarketHero = () => {
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
      <div className="h-full w-full flex flex-col md:flex-row pt-32">
        <div
          className={`w-full md:w-7/12 h-full flex flex-col ${scrollPosition > 50 ? "pt-24" : "lg:justify-start"
            }`}
        >
          <Link href="/">
            <Image
              src="/assets/logo/main_logo.png"
              alt="frame"
              width={300}
              height={300}
              className={`z-50 transition-all duration-500 ease-in-out mix-blend-normal ${scrollPosition > 50
                ? "fixed top-[80px] lg:top-[52px] lg:left-10 transform -translate-x-15 w-[35%] md:!w-[10%] "
                : "relative"
                }`}
            />
          </Link>
          <div className="px-4 lg:px-10 xl:px-16 flex flex-col gap-4 justify-center sm:justify-start items-center sm:items-start">
            <div className="w-fit p-4 text-base lg:text-lg font-bold tracking-wider text-[#576D2C] bg-[#FFEDEB] rounded-xl">
              The Growth Mantra - Go-to-Market Strategy
            </div>
            <div className="w-full flex flex-col gap-4 p-1 px-2 lg:px-0 justify-center sm:justify-start items-center sm:items-start text-[#576D2C]">
              <div className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold flex flex-col gap-4 text-center sm:text-left">
                Transform Vision into
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  Actionable
                  <div className="border-[#576D2C] py-2 px-2 md:px-8 text-3xl sm:text-4xl md:text-4xl lg:text-5xl border-4 w-fit rounded-full text-[#576D2C] font-bold shadow-2xl">
                    Growth
                  </div>
                </div>
                Strategies
              </div>
              <div className="text-[#425466] text-base md:text-lg py-2 text-center sm:text-left">
                Launch Products That Acutally Sell
              </div>
              <div className="w-full flex justify-center md:justify-start">
                <Link href="/ContactUs" passHref>
                  <div className="group rounded-full w-fit px-4 py-2 flex text-sm md:text-base lg:text-xl font-bold text-white bg-[#576D2C] hover:bg-white hover:text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
                    Supercharge Your Market Entry
                    <div className="p-3 bg-white rounded-full text-black group-hover:bg-[#576D2C] group-hover:text-white transition-all duration-300 ease-in-out">
                      <ArrowRight />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-5/12 pt-4 mr-2 md:mr-4 lg:pt-12 flex justify-center items-center">
          <div className="w-full  lg:w-full flex justify-center items-center -z-10 md:-z-0">
            <VerticalSwiper />
          </div>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="w-full h-full flex flex-col justify-center items-center text-[#B2B7BE]">
          SOME OF OUR TRUSTED CLIENTS
        </div>
        <Sponsor />
      </div>
    </>
  );
};

export default MarketHero;
