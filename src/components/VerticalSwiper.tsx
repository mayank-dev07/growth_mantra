"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules"; // Ensure this import path matches your Swiper version
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function VerticalSwiper() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="!h-[65vh] lg:!h-[80vh] w-full [&_.swiper-pagination-bullet-active]:!bg-[#E74C3C] [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:!border-2 [&_.swiper-pagination-bullet]:!border-[#E74C3C] [&_.swiper-pagination-bullet]:!w-5 [&_.swiper-pagination-bullet]:!h-5 [&_.swiper-pagination-bullet]:!p-3"
      >
        <SwiperSlide>
          <div className="pe-16 ps-2 w-full h-fit ">
            <div className="h-fit flex flex-col shadow-md">
              <Image
                src="/verticalswiper.png"
                alt="image"
                width={900}
                height={800}
                className="object-left !h-[300px]  lg:!h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col gap-4 w-full tracking-wide">
                <p className="text-2xl font-medium">
                  Struggling to Acquire New Customers or Quality Lead?
                </p>
                <p>
                  Our multi-channel acquisition strategies turn traffic into
                  qualified prospects
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-2xl underline underline-offset-8">
                    Boost your Acquisition
                  </p>
                  <div className="p-2 lg:p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pe-16 ps-2 w-full h-fit">
            <div className="h-fit flex flex-col shadow-md">
              <Image
                src="/verticalswiper.png"
                alt="image"
                width={900}
                height={800}
                className="object-left  !h-[300px]  lg:!h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col gap-4 w-full tracking-wide">
                <p className="text-2xl font-medium">
                  Struggling to Acquire New Customers or Quality Lead?
                </p>
                <p>
                  Our multi-channel acquisition strategies turn traffic into
                  qualified prospects
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-2xl underline underline-offset-8">
                    Boost your Acquisition
                  </p>
                  <div className="p-2 lg:p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pe-16 ps-2 w-full h-fit">
            <div className="h-fit flex flex-col shadow-md">
              <Image
                src="/verticalswiper.png"
                alt="image"
                width={900}
                height={800}
                className="object-left  !h-[300px]  lg:!h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col gap-4 w-full tracking-wide">
                <p className="text-2xl font-medium">
                  Struggling to Acquire New Customers or Quality Lead?
                </p>
                <p>
                  Our multi-channel acquisition strategies turn traffic into
                  qualified prospects
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-2xl underline underline-offset-8">
                    Boost your Acquisition
                  </p>
                  <div className="p-2 lg:p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pe-16 ps-2 w-full h-fit">
            <div className="h-fit flex flex-col shadow-md">
              <Image
                src="/verticalswiper.png"
                alt="image"
                width={900}
                height={800}
                className="object-left  !h-[300px]  lg:!h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col gap-4 w-full tracking-wide">
                <p className="text-2xl font-medium">
                  Struggling to Acquire New Customers or Quality Lead?
                </p>
                <p>
                  Our multi-channel acquisition strategies turn traffic into
                  qualified prospects
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-2xl underline underline-offset-8">
                    Boost your Acquisition
                  </p>
                  <div className="p-2 lg:p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pe-16 ps-2 w-full h-fit">
            <div className="h-fit flex flex-col shadow-md">
              <Image
                src="/verticalswiper.png"
                alt="image"
                width={900}
                height={800}
                className="object-left  !h-[300px]  lg:!h-[500px] rounded-lg"
              ></Image>
              <div className="p-5 flex flex-col gap-4 w-full tracking-wide">
                <p className="text-2xl font-medium">
                  Struggling to Acquire New Customers or Quality Lead?
                </p>
                <p>
                  Our multi-channel acquisition strategies turn traffic into
                  qualified prospects
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-2xl underline underline-offset-8">
                    Boost your Acquisition
                  </p>
                  <div className="p-2 lg:p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                    <ArrowRight />
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
