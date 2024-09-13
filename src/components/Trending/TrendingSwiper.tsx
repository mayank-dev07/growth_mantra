"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function TrendingSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="!h-[90vh] w-full"
      >
        <SwiperSlide>
          <div className="p-0 lg:p-12 w-full h-full">
            <p className="text-xl py-2 text-[#6F6F6F]">Creative</p>
            <div className="h-fit flex flex-col shadow-lg">
              <Image
                src="/verticalswiper.png"
                alt="image"
                width={900}
                height={800}
                className="object-left !h-[300px] lg:!h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col lg:flex-row justify-between gap-4 w-full tracking-tight lg:tracking-wide">
                <div className="w-full lg:w-1/12 text-[#333333] text-3xl font-bold">
                  01
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-4">
                  <div className="text-[#E74C3C] text-base lg:text-xl font-semibold">
                    Acquisition Mastery
                  </div>
                  <div>
                    Supercharge your new customer acquisition, lead generation,
                    and traffic with precision-targeted paid ads, social
                    strategies, and affiliate marketing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-12 w-full h-full">
            <p className="text-xl py-2 text-[#6F6F6F]">Creative</p>
            <div className="h-fit flex flex-col shadow-lg">
              <Image
                src="/verticalswiper.png"
                alt="image"
                width={900}
                height={800}
                className="object-left !h-[300px] lg:!h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col lg:flex-row justify-between gap-4 w-full tracking-tight lg:tracking-wide">
                <div className="w-full lg:w-1/12 text-[#333333] text-3xl font-bold">
                  01
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-4">
                  <div className="text-[#E74C3C] text-base lg:text-xl font-semibold">
                    Acquisition Mastery
                  </div>
                  <div>
                    Supercharge your new customer acquisition, lead generation,
                    and traffic with precision-targeted paid ads, social
                    strategies, and affiliate marketing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-12 w-full h-full">
            <p className="text-xl py-2 text-[#6F6F6F]">Creative</p>
            <div className="h-fit flex flex-col shadow-lg">
              <Image
                src="/verticalswiper.png"
                alt="image"
                width={900}
                height={800}
                className="object-left !h-[300px] lg:!h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col lg:flex-row justify-between gap-4 w-full tracking-tight lg:tracking-wide">
                <div className="w-full lg:w-1/12 text-[#333333] text-3xl font-bold">
                  01
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-4">
                  <div className="text-[#E74C3C] text-base lg:text-xl font-semibold">
                    Acquisition Mastery
                  </div>
                  <div>
                    Supercharge your new customer acquisition, lead generation,
                    and traffic with precision-targeted paid ads, social
                    strategies, and affiliate marketing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-0 lg:p-12 w-full h-full">
            <p className="text-xl py-2 text-[#6F6F6F]">Creative</p>
            <div className="h-fit flex flex-col shadow-lg">
              <Image
                src="/verticalswiper.png"
                alt="image"
                width={900}
                height={800}
                className="object-left !h-[300px] lg:!h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col lg:flex-row justify-between gap-4 w-full tracking-tight lg:tracking-wide">
                <div className="w-full lg:w-1/12 text-[#333333] text-3xl font-bold">
                  01
                </div>
                <div className="w-full lg:w-11/12 flex flex-col gap-4">
                  <div className="text-[#E74C3C] text-base lg:text-xl font-semibold">
                    Acquisition Mastery
                  </div>
                  <div>
                    Supercharge your new customer acquisition, lead generation,
                    and traffic with precision-targeted paid ads, social
                    strategies, and affiliate marketing.
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
