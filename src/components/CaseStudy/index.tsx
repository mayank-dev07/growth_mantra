"use client";

import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const services = [
  {
    title: "$300M+",
    description: "Additional revenue generated for our clients.",
  },
  {
    title: "500M+",
    description: "New app downloads through our acquisition strategies.",
  },
  {
    title: "300%",
    description: "Average ROI across all projects",
  },
  {
    title: "5M+",
    description: "New leads generated through our acquisition strategies.",
  },
  {
    title: "3M+",
    description: "transactions generated through our retention strategies.",
  },
  {
    title: "65%",
    description: "Additional revenue generated for our clients.",
  },
  {
    title: "40%",
    description: "Additional revenue generated for our clients.",
  },
  {
    title: "85%",
    description: "Additional revenue generated for our clients.",
  },
];

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
              <Link href="/contactus2">
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
      <div className="w-full h-full px-4 lg:px-28 py-16">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="w-full lg:w-1/2 bg-[#E84C3D] text-white rounded-[15px] shadow-2xl ">
            <div className="px-4 md:px-10 pt-5 md:pt-12 ">
              <div className="text-lg md:text-2xl lg:text-3xl">
                Diagnose&nbsp;Your
                <br />
                Growth&nbsp;Blockers
              </div>
              <div className="py-6 text-base md:text-lg lg:text-xl  flex justify-center items-start">
                Uncover the hidden obstacles holding your startup back. Our
                expert consultants will analyze your business, identify critical
                bottlenecks, and provide a custom action plan to skyrocket your
                growth. Limited offer: Claim your complimentary strategy session
                (Valued at $400) now
              </div>
            </div>

            <div className="md:px-12 py-8 w-full flex justify-center md:justify-start items-center">
              <Link href="/contactus2" passHref>
                <div className="group rounded-full w-fit px-2.5 lg:px-4 py-1.5 flex text-sm md:text-base hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                  <p>Reveal&nbsp;Your&nbsp;Growth&nbsp;Potential</p>
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
              <div className="py-6 text-base md:text-lg lg:text-xl  flex justify-center items-start">
                Looking for more than just advice? Our team of seasoned
                consultants doesn&apos;t just strategize - we execute. From
                refining your go-to-market strategy to optimizing your product
                for scalability, we&apos;re here to drive tangible results and
                exponential growth for your startup.
              </div>
            </div>

            <div className="md:px-12 py-8 w-full flex justify-center md:justify-start items-center">
              <Link href="/contactus2" passHref>
                <div className="group rounded-full w-fit px-4 lg:px-4 py-1.5 flex text-sm md:text-base hover:bg-white hover:text-[#E74C3C] text-white bg-[#E74C3C] border-[1px] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                  <p>Amplify&nbsp;Your&nbsp;Growth</p>
                  <div className="p-2 lg:p-3 group-hover:text-white rounded-full bg-white text-black group-hover:bg-[#E74C3C]">
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
