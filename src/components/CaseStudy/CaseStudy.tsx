"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const CaseStudy = () => {
  const slides = [
    {
      id: 1,
      company: "Ai Corporation. 2023",
      project: "Ai Wave - Ai Chatbot Mobile App",
    },
    {
      id: 2,
      company: "Tech Solutions. 2023",
      project: "Tech Guru - AI-Powered Platform",
    },
    {
      id: 3,
      company: "Future Innovations. 2023",
      project: "InnoX - Smart Home Solutions",
    },
    {
      id: 4,
      company: "Creative Minds. 2023",
      project: "CreatiX - Mobile Art App",
    },
    {
      id: 5,
      company: "Bright AI. 2023",
      project: "BrightBot - AI-powered Assistant",
    },
    {
      id: 6,
      company: "NextGen Tech. 2023",
      project: "NextGen Cloud Solutions",
    },
  ];

  return (
    <>
      <div className="w-full h-full bg-[#576D2C] px-2 md:px-16 py-10  ">
        <div className="w-full h-full bg-white flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full flex justify-center lg:justify-start items-center px-4 lg:pe-12">
            <Image
              src="/casestudy2.png"
              alt="casestudy"
              width={350}
              height={350}
            />
          </div>
          <div className="w-full lg:w-[120%] flex flex-col justify-start items-center text-[#576D2C] pt-6 px-6">
            <p
              className="tracking-widest text-xl lg:text-2xl xl:text-3xl"
              style={{ lineHeight: "3rem" }}
            >
              Effective Growth Strategies can increase revenue by up to
              <span className="text-2xl lg:text-4xl xl:text-5xl font-bold">
                &nbsp;33%&nbsp;
              </span>
              in the first{" "}
              <span className="text-2xl lg:text-4xl xl:text-5xl font-bold">
                &nbsp;SIX&nbsp;
              </span>{" "}
              months.
            </p>
            <div className="py-4 w-full flex justify-center items-center">
              <Link href="/contactus2">
                <div className="group rounded-full w-fit px-5 py-2 flex text-sm md:text-base lg:text-lg xl:text-xl hover:text-white hover:bg-[#576D2C] bg-white text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                  Schedule&nbsp;a&nbsp;Call
                  <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#576D2C] group-hover:text-[#576D2C]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full px-4 lg:px-28 py-5 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2  w-full h-full">
          <div className="bg-[#576D2C] text-white rounded-[15px] shadow-2xl flex flex-col">
            <div className="px-4 md:px-10 pt-5 md:pt-12 flex-grow">
              <div className="text-lg md:text-2xl lg:text-3xl">
                Break&nbsp;Free&nbsp;from
                <br />
                Growth&nbsp;Stasis
              </div>
              <div className="py-6 text-base md:text-lg lg:text-xl flex justify-center items-start">
                {`Stuck at the same level? Our expert consultants pinpoint the roadblocks and craft tailored strategies to kickstart your next growth phase. It's time to push beyond limits.`}
              </div>
            </div>

            <div className="md:px-12 py-8 w-full flex justify-center md:justify-start items-center mt-auto">
              <Link href="/contactus2" passHref>
                <div className="group rounded-full w-fit px-2.5 lg:px-4 py-1.5 flex text-[12px] md:text-base hover:text-white hover:bg-[#576D2C] bg-white text-[#576D2C] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                  <p>Diagnose&nbsp;Your&nbsp;Growth&nbsp;Challenges</p>
                  <div className="p-2 lg:p-3 group-hover:bg-white rounded-full text-white bg-[#576D2C] group-hover:text-[#576D2C]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="rounded-[15px] shadow-2xl flex flex-col">
            <div className="px-4 md:px-10 pt-5 md:pt-12 flex-grow">
              <div className="text-lg md:text-2xl lg:text-3xl text-[#576D2C]">
                Accelerate&nbsp;Growth&nbsp;
                <br />
                With&nbsp;Proven&nbsp;Expertise
              </div>
              <div className="py-6 text-base md:text-lg lg:text-xl flex justify-center items-start">
                Stop dreaming about growth—make it happen. Our seasoned
                consultants have a track record of transforming ambition into
                measurable success for businesses like yours. Let’s turn your
                growth goals into reality.
              </div>
            </div>

            <div className="md:px-12 py-8 w-full flex justify-center md:justify-start items-center mt-auto">
              <Link href="/contactus2" passHref>
                <div className="group rounded-full w-fit px-4 lg:px-4 py-1.5 flex text-[12px] md:text-base hover:bg-white hover:text-[#576D2C] text-white bg-[#576D2C] border-[1px] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                  <p>Partner&nbsp;with&nbsp;Growth&nbsp;Catalysts</p>
                  <div className="p-2 lg:p-3 group-hover:text-white rounded-full bg-white text-black group-hover:bg-[#576D2C]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
