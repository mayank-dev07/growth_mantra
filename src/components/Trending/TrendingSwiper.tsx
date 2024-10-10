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
            <Link href="/Acquisition" className="h-fit flex flex-col ">
              <Image
                src="/assets/trending_services/Acquisition_Mastery.png"
                alt="image"
                width={400}
                height={400}
                className="object-contain !h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-fit lg:w-1/12 text-[#333333] text-2xl font-bold">
                  01
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">
                  <div className="text-[#E74C3C] text-xl lg:text-lg font-bold">
                    Acquisition Mastery
                  </div>
                  <div className="text-base">
                    Boost acquisition, leads, and traffic with precise paid ads,
                    social, and affiliate strategies.
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-4 w-full h-full">
            <Link href="/Retention" className="h-fit flex flex-col ">
              <Image
                src="/assets/trending_services/Retention_Revolution.png"
                alt="image"
                width={400}
                height={400}
                className="object-contain !h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-fit lg:w-1/12 text-[#333333] text-2xl font-bold">
                  02
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">
                  <div className="text-[#E74C3C] text-xl lg:text-lg font-bold">
                    Retention Revolution
                  </div>
                  <div className="text-base">
                    Turn users into loyal advocates with retention analysis and
                    personalized campaigns
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-4 w-full h-full">
            <Link href="/FunnelMarketing" className="h-fit flex flex-col ">
              <Image
                src="/assets/trending_services/Funnel_Optimization.png"
                alt="image"
                width={400}
                height={400}
                className="object-contain !h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-fit lg:w-1/12 text-[#333333] text-2xl font-bold">
                  03
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">
                  <div className="text-[#E74C3C] text-xl lg:text-lg font-bold">
                    Funnel Optimization
                  </div>
                  <div className="text-base">
                    Create funnels that guide prospects smoothly from awareness
                    to purchase.
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-4 w-full h-full">
            <Link
              href="/CRO"
              className="h-fit flex flex-col "
            >
              <Image
                src="/assets/trending_services/Conversion_Rate_Optimization_(CRO).png"
                alt="image"
                width={400}
                height={400}
                className="object-contain !h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-fit lg:w-1/12 text-[#333333] text-2xl font-bold">
                  04
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">
                  <div className="text-[#E74C3C] text-xl lg:text-lg font-bold">
                    Conversion Rate Optimization
                  </div>
                  <div className="text-base">
                    Use customer data to personalize journeys, nurturing
                    relationships for lasting value.
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-4 w-full h-full">
            <Link href="/EmailMarketing" className="h-fit flex flex-col ">
              <Image
                src="/assets/trending_services/Email_Marketing_Engine.png"
                alt="image"
                width={400}
                height={400}
                className="object-contain !h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-fit lg:w-1/12 text-[#333333] text-2xl font-bold">
                  05
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">
                  <div className="text-[#E74C3C] text-xl lg:text-lg font-bold">
                    Email Marketing Engine
                  </div>
                  <div className="text-base">
                    Create drip sequences to educate, nurture, and convert
                    audiences at scale.
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
