"use client";

import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const CaseStudy = () => {
  return (
    <>
      <div className="w-full h-full bg-[#16213E] px-2 md:px-16 py-16  ">
        <div className="w-full h-full bg-white flex flex-col lg:flex-row justify-between items-center py-6">
          <div className="w-full flex justify-center lg:justify-start items-center px-4 lg:pe-12">
            <Image
              src="/casestudy.png"
              alt="casestudy"
              width={350}
              height={350}
            />
          </div>
          <div className="w-full lg:w-[120%] flex flex-col justify-start items-center text-[#E74C3C] pt-5 px-6 ">
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
              <Link href="/contactus">
                <div className="group rounded-full w-fit px-5 py-2 flex text-sm md:text-base lg:text-lg xl:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                  Schedule&nbsp;a&nbsp;Call
                  <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full px-2 lg:px-20 py-5 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2  w-full h-full">
          <div className="bg-[#E84C3D] text-white rounded-[15px] shadow-2xl flex flex-col">
            <div className="px-4 md:px-10 pt-5 md:pt-12 flex-grow">
              <div className="text-lg md:text-2xl lg:text-3xl">
                Diagnose&nbsp;Your
                <br />
                Growth&nbsp;Blockers
              </div>
              <div className="py-6 text-base md:text-lg  flex justify-center items-start">
                {`Discover what's secretly holding your startup back. Let our
                expert consultants dive in, pinpoint key bottlenecks, and craft
                a tailored action plan to ignite your growth. Ready to elevate
                your business? Get started today!`}
              </div>
            </div>

            <div className="md:px-12 py-8 w-full flex justify-center md:justify-start items-center mt-auto">
              <Link href="/contactus" passHref>
                <div className="group rounded-full w-fit px-2.5 lg:px-4 py-1.5 flex text-sm hover:text-white hover:bg-[#E84C3D] bg-white text-[#E84C3D] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                  <p>Book&nbsp;Your&nbsp;Free&nbsp;Growth&nbsp;Consultation</p>

                  <div className="p-2 lg:p-3 group-hover:bg-white rounded-full text-white bg-[#E84C3D] group-hover:text-[#E84C3D]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="rounded-[15px] shadow-2xl flex flex-col">
            <div className="px-4 md:px-10 pt-5 md:pt-12 flex-grow">
              <div className="text-lg md:text-2xl lg:text-3xl text-[#E84C3D]">
                Partner&nbsp;with&nbsp;Proven
                <br />
                Growth&nbsp;Catalysts
              </div>
              <div className="py-6 text-base md:text-lg  flex justify-center items-start">
                {`Need more than just advice? Our seasoned consultants do more
                than strategize—we execute. Whether it's refining your
                go-to-market strategy or scaling your product, we're hands-on to
                deliver real results and fuel exponential growth. Ready to see
                the impact firsthand?`}
              </div>
            </div>

            <div className="md:px-12 py-8 w-full flex justify-center md:justify-start items-center mt-auto">
              <Link href="/contactus" passHref>
                <div className="group rounded-full w-fit px-4 lg:px-4 py-1.5 flex text-sm hover:bg-white hover:text-[#E84C3D] text-white bg-[#E84C3D] border-[1px] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                  <p>Amplify&nbsp;Your&nbsp;Growth</p>
                  <div className="p-2 lg:p-3 group-hover:text-white rounded-full bg-white text-black group-hover:bg-[#E84C3D]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-full px-4 lg:px-28 py-16">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="w-full lg:w-1/2 bg-[#E84C3D] text-white rounded-[15px] shadow-2xl ">
            <div className="px-4 md:px-10 pt-5 md:pt-12 ">
              <div className="text-lg md:text-2xl lg:text-3xl">
                Diagnose&nbsp;Your
                <br />
                Growth&nbsp;Blockers
              </div>
              <div className="py-6 text-base md:text-lg   flex justify-center items-start">
                Discover what's secretly holding your startup back. Let our
                expert consultants dive in, pinpoint key bottlenecks, and craft
                a tailored action plan to ignite your growth. Ready to elevate
                your business? Get started today!
              </div>
            </div>

            <div className="md:px-12 py-8 mt-5 w-full flex justify-center md:justify-start items-center">
              <Link href="/contactus" passHref>
                <div className="group rounded-full w-fit px-2.5 lg:px-4 py-1.5 flex text-sm hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                  <p>Book&nbsp;Your&nbsp;Free&nbsp;Growth&nbsp;Consultation</p>
                  <div className="p-2 lg:p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-[15px] shadow-2xl ">
            <div className="px-4 md:px-10 pt-5 md:pt-12 ">
              <div className="text-lg md:text-2xl lg:text-3xl text-[#E74C3C]">
                Partner&nbsp;with&nbsp;Proven
                <br />
                Growth&nbsp;Catalysts
              </div>
              <div className="py-6 text-base md:text-lg   flex justify-center items-start">
                {`Need more than just advice? Our seasoned consultants do more
                than strategize—we execute. Whether it's refining your
                go-to-market strategy or scaling your product, we're hands-on to
                deliver real results and fuel exponential growth. Ready to see
                the impact firsthand?`}
              </div>
            </div>

            <div className="md:px-12 py-8 w-full flex justify-center md:justify-start items-center">
              <Link href="/contactus" passHref>
                <div className="group rounded-full w-fit px-4 lg:px-4 py-1.5 flex text-sm  hover:bg-white hover:text-[#E74C3C] text-white bg-[#E74C3C] border-[1px] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                  <p>Amplify&nbsp;Your&nbsp;Growth</p>
                  <div className="p-2 lg:p-3 group-hover:text-white rounded-full bg-white text-black group-hover:bg-[#E74C3C]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CaseStudy;
