"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import { Navigation } from "swiper/modules";
import Image from "next/image";

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

        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        loop={true}
        modules={[Navigation]}
        className="lg:!h-fit w-full"
      >
        <SwiperSlide>
          <div className="p-0 lg:p-4 w-full h-full">
            <div className="h-fit flex flex-col ">
              <Image

                src="/TrendingSwiper1.png"

                alt="image"
                width={900}
                height={800}
                className="object-left !h-[280px] lg:!h-[400px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col lg:flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-full lg:w-1/12 text-[#333333] text-3xl font-bold">
                  01
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">

                  <div className="text-[#576D2C] text-base lg:text-xl font-bold">
                  Strategy & Planning
                  </div>
                  <div className="text-base lg:text-lg">
                  Transform your vision into a concrete roadmap for success. Our strategic planning services help you navigate the complex startup landscape, identify opportunities, and mitigate risks.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-4 w-full h-full">
            <div className="h-fit flex flex-col ">
              <Image

                src="/TrendingSwiper2.png"

                alt="image"
                width={900}
                height={800}
                className="object-left !h-[280px] lg:!h-[400px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col lg:flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-full lg:w-1/12 text-[#333333] text-3xl font-bold">
                  02
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">

                  <div className="text-[#576D2C] text-base lg:text-xl font-bold">
                  User Persona
                  Identification
                  </div>
                  <div className="text-base lg:text-lg">
                  Understand your customers at a deeper level. We use advanced analytics and market research to create detailed user personas, ensuring your products and marketing resonate with your target au.

                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-4 w-full h-full">
            <div className="h-fit flex flex-col ">
              <Image
                src="/verticalswiper.png"
                alt="image"
                width={900}
                height={800}
                className="object-left !h-[280px] lg:!h-[400px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col lg:flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-full lg:w-1/12 text-[#333333] text-3xl font-bold">
                  03
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">
                  <div className="text-[#576D2C] text-base lg:text-xl font-bold">
                    Funnel Optimization
                  </div>
                  <div className="text-base lg:text-lg">
                    Craft high-converting funnels that guide prospects
                    seamlessly from awareness to purchase and beyond.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-4 w-full h-full">
            <div className="h-fit flex flex-col ">
              <Image
                src="/verticalswiper.png"
                alt="image"
                width={900}
                height={800}
                className="object-left !h-[280px] lg:!h-[400px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col lg:flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-full lg:w-1/12 text-[#333333] text-3xl font-bold">
                  04
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">

                  <div className="text-[#576D2C] text-base lg:text-xl font-bold">
                    Conversion Rate Optimization (CRO)
                  </div>
                  <div className="text-base lg:text-lg">
                    Leverage customer data to create personalized journeys that
                    nurture relationships and drive long-term value.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-4 w-full h-full">
            <div className="h-fit flex flex-col ">
              <Image
                src="/verticalswiper.png"
                alt="image"
                width={900}
                height={800}
                className="object-left !h-[280px] lg:!h-[400px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col lg:flex-row justify-between gap-4 w-full  tracking-tight lg:tracking-wide">
                <div className="w-full lg:w-1/12 text-[#333333] text-3xl font-bold">
                  05
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">
                  <div className="text-[#576D2C] text-base lg:text-xl font-bold">

                    Email Marketing Engine
                  </div>
                  <div className="text-base lg:text-lg">
                    Design engaging drip sequences that educate, nurture, and
                    convert your audience at scale.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
