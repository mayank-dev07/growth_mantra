"use client";
import React from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import Image from "next/image";

const Trending = () => {
  return (
    <>
      <div className="h-full py-10 w-full flex flex-col lg:flex-row justify-center items-start pt-4 px-4 lg:pt-16 lg:px-12">
        <div className="w-full lg:w-5/12  h-full  lg:p-12 flex flex-col gap-8">
          <p className="text-4xl lg:text-6xl text-[#576D2C]">
            Trending Offerings
          </p>
          <p className="text-lg text-[#8A8A8A]">
            Explore our latest articles and case studies to stay ahead in your
            industry.
          </p>
          <div className="pb-8 md:py-4 w-full flex justify-center md:justify-start items-center">
            <div className="group rounded-full w-fit px-5 py-2 flex text-sm md:text-base lg:text-lg xl:text-xl hover:text-white hover:bg-[#576D2C] bg-white text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
              Schedule a call
              <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#576D2C] group-hover:text-[#576D2C]">
                <ArrowRight />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start lg:ml-8 items-center mt-28">
            <div className="w-full lg:w-8/12 flex gap-x-20 justify-center lg:justify-start items-center">
              <div className="w-28 h-28 flex justify-center items-center prev rounded-full bg-white">
                <ChevronLeft size={30} />
              </div>
              <div className="w-28 h-28 flex justify-center items-center next rounded-full bg-white">
                <ChevronRight size={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12 h-full">
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
                    src="/verticalswiper.png"
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
                      <div className="text-[#E74C3C] text-base lg:text-xl font-bold">
                        Acquisition Mastery
                      </div>
                      <div className="text-base lg:text-lg">
                        Supercharge your new customer acquisition, lead
                        generation, and traffic with precision-targeted paid
                        ads, social strategies, and affiliate marketing.
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
                      02
                    </div>
                    <div className="w-full lg:w-11/12 flex flex-col gap-2 ps-4">
                      <div className="text-[#E74C3C] text-base lg:text-xl font-bold">
                        Retention Revolution
                      </div>
                      <div className="text-base lg:text-lg">
                        Transform one-time users into loyal advocates with
                        advanced retention analysis and personalized
                        re-engagement campaigns.
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
                      <div className="text-[#E74C3C] text-base lg:text-xl font-bold">
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
                      <div className="text-[#E74C3C] text-base lg:text-xl font-bold">
                        Conversion Rate Optimization (CRO)
                      </div>
                      <div className="text-base lg:text-lg">
                        Leverage customer data to create personalized journeys
                        that nurture relationships and drive long-term value.
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
                      <div className="text-[#E74C3C] text-base lg:text-xl font-bold">
                        Email Marketing Engine
                      </div>
                      <div className="text-base lg:text-lg">
                        Design engaging drip sequences that educate, nurture,
                        and convert your audience at scale.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <hr className="border-t-2 w-full" />
      <div className="py-8 w-full flex justify-center items-center px-4">
        <div
          className="group rounded-full w-full lg:w-1/2 px-5 py-4 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#576D2C] bg-white text-[#576D2C] border-[1px] shadow-xl tracking-wider justify-start lg:justify-center items-center gap-4 cursor-pointer relative
        transition-all duration-500 ease-in-out font-bold"
        >
          Unlock your Growth now
          <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#576D2C] group-hover:text-[#576D2C] absolute right-4 lg:right-10">
            <ArrowRight />
          </div>
        </div>
      </div>
      <hr className="border-t-2 w-full" />
    </>
  );
};

export default Trending;
