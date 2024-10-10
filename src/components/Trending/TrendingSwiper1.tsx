"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function TrendingSwiper() {
  return (
    <>
      <Swiper
        breakpoints={{
          1200: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={10}
        freeMode={true}
        autoplay={{
          delay: 2400,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="lg:!h-fit w-full"
      >
        <SwiperSlide>
          <div className="p-0 lg:p-4 w-full h-full">
            <Link href="/strategyPlanning" className="h-fit flex flex-col ">
              <Image
                src="/assets/trending_services/Acquisition_Mastery.png"
                alt="image"
                width={400}
                height={400}
                className="object-contain !h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col lg:flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-full lg:w-1/12 text-[#333333] text-2xl font-bold">
                  01
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">
                  <div className="text-[#576D2C] text-xl lg:text-lg font-bold">
                    Strategy & Planning
                  </div>
                  <div className="text-base">
                    Turn vision into action with strategic startup roadmaps.
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-4 w-full h-full">
            <Link
              href="/userpersonaidentification"
              className="h-fit flex flex-col "
            >
              <Image
                src="/assets/trending_services/Retention_Revolution.png"
                alt="image"
                width={400}
                height={400}
                className="object-contain !h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col lg:flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-full lg:w-1/12 text-[#333333] text-2xl font-bold">
                  02
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">
                  <div className="text-[#576D2C] text-xl lg:text-lg font-bold">
                    User Persona Identification
                  </div>
                  <div className="text-base">
                    Create personas using analytics for deeper customer insight.
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-4 w-full h-full">
            <Link href="/brandSolution" className="h-fit flex flex-col ">
              <Image
                src="/assets/trending_services/Funnel_Optimization.png"
                alt="image"
                width={400}
                height={400}
                className="object-contain !h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col lg:flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-full lg:w-1/12 text-[#333333] text-2xl font-bold">
                  03
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">
                  <div className="text-[#576D2C] text-xl lg:text-lg font-bold">
                    Brand Solutions
                  </div>
                  <div className="text-base">
                    Craft a standout brand identity, story, and messaging.
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-4 w-full h-full">
            <Link href="/growthMarketing" className="h-fit flex flex-col ">
              <Image
                src="/assets/trending_services/Conversion_Rate_Optimization_(CRO).png"
                alt="image"
                width={400}
                height={400}
                className="object-contain !h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col lg:flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-full lg:w-1/12 text-[#333333] text-2xl font-bold">
                  04
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">
                  <div className="text-[#576D2C] text-xl lg:text-lg font-bold">
                    Growth Marketing
                  </div>
                  <div className="text-base">
                    Drive growth using data-driven, cross-channel marketing
                    tactics.
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
