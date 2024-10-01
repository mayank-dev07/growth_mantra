"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function VerticalSwiper() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="!h-[670px] lg:!min-h-[70vh] w-full [&_.swiper-pagination-bullet-active]:!bg-[#576D2C] [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet]:!border-2 [&_.swiper-pagination-bullet]:!border-[#576D2C] [&_.swiper-pagination-bullet]:!w-5 [&_.swiper-pagination-bullet]:!h-5 [&_.swiper-pagination-bullet]:!p-3"
      >
        <SwiperSlide>
          <div className="pe-12  lg:ps-28 w-full h-fit flex jsutify-center items-center">
            <Image
              src="/assets/consulting_home/swiper1.svg"
              alt="image"
              width={900}
              height={800}
<<<<<<< Updated upstream
              className="object-contain !h-[500px]  rounded-lg"
=======
              className="object-left !h-[500px]  rounded-lg"
>>>>>>> Stashed changes
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pe-12  lg:ps-28 w-full h-fit flex jsutify-center items-center">
            <Image
              src="/assets/consulting_home/swiper2.svg"
              alt="image"
              width={900}
              height={800}
<<<<<<< Updated upstream
              className="object-contain  !h-[500px]   rounded-lg"
=======
              className="object-left  !h-[500px]   rounded-lg"
>>>>>>> Stashed changes
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pe-12  lg:ps-28 w-full h-fit flex jsutify-center items-center">
            <Image
              src="/assets/consulting_home/swiper3.svg"
              alt="image"
              width={900}
              height={800}
<<<<<<< Updated upstream
              className="object-contain  !h-[500px]   rounded-lg"
=======
              className="object-left  !h-[500px]   rounded-lg"
>>>>>>> Stashed changes
            ></Image>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pe-12  lg:ps-28 w-full h-fit flex jsutify-center items-center ">
            <Image
              src="/assets/consulting_home/swiper4.svg"
              alt="image"
              width={900}
              height={800}
<<<<<<< Updated upstream
              className="object-contain !h-[500px]   rounded-lg"
=======
              className="object-left !h-[500px]   rounded-lg"
>>>>>>> Stashed changes
            ></Image>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="pe-12  lg:ps-28 w-full h-fit flex jsutify-center items-center">
            <Image
              src="/assets/consulting_home/swiper5.svg"
              alt="image"
              width={900}
              height={800}
<<<<<<< Updated upstream
              className="object-contain  !h-[500px]   rounded-lg"
=======
              className="object-left  !h-[500px]   rounded-lg"
>>>>>>> Stashed changes
            ></Image>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
