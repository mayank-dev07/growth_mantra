import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const probeItems = [
  "Market research, Ideal Customer Profile, and competitor analysis",
  "Comprehensive data analysis",
  "Customer journey mapping",
  "Identifying key performance indicators (KPIs)",
];
const uncoverItems = [
  "Reveal untapped market segments",
  "Identify bottlenecks in the customer journey",
  "Discover underutilized channels or resources",
  "Pinpoint areas for optimization and innovation",
];

const Pulse = (props: Props) => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full min-h-screen flex flex-col justify-center items-center px-16 gap-10">
          <div className="text-9xl text-[#E74C3C] w-full justify-start items-start flex flex-col gap-4">
            <p>Our Growth Mantra:</p>
            <p className="text-[#B2B7BE] flex gap-6">
              The
              <span className="text-[#E74C3C]">PULSE</span>
              Framework
            </p>
          </div>
          <p className="text-4xl tracking-wide leading-normal">
            At The Growth Mantra, we've developed a unique, process-oriented
            approach to solving business and marketing challenges across
            industries. We call it the PULSE Framework - a strategic, powerful,
            and adaptable system that drives sustainable growth for startups and
            businesses at any stage.
          </p>
        </div>
        <div className="relative h-auto pb-20">
          <div className="absolute inset-52 top-[-90px] left-0">
            <Image
              src="/treevector.png"
              alt="tree"
              width={1000}
              height={500}
              className="object-left  h-full"
            />
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[150px] mt-20">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-7xl font-medium">
                <span className="text-[#E74C3C]">P</span>&nbsp;-&nbsp;Probe
              </p>
              <div className="text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-12 gap-3 bg-white">
                <p className="leading-normal text-[#E74C3C] font-medium">
                  We begin by deeply probing your business ecosystem, market
                  dynamics, and customer behavior. This involves:
                </p>
                <ul className="space-y-2 text-xl text-gray-700">
                  {probeItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[50px] mt-20">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-7xl font-medium">
                <span className="text-[#E74C3C]">U</span>&nbsp;-&nbsp;Uncover
              </p>
              <div className="text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-12 gap-3 bg-white">
                <p className="leading-normal text-[#E74C3C] font-medium">
                  With insights from our probe, we uncover hidden opportunities
                  and challenges:
                </p>
                <ul className="space-y-2 text-xl text-gray-700">
                  {uncoverItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[120px] mt-20">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-7xl font-medium">
                <span className="text-[#E74C3C]">U</span>&nbsp;-&nbsp;Uncover
              </p>
              <div className="text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-12 gap-3 bg-white">
                <p className="leading-normal text-[#E74C3C] font-medium">
                  With insights from our probe, we uncover hidden opportunities
                  and challenges:
                </p>
                <ul className="space-y-2 text-xl text-gray-700">
                  {uncoverItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[400px] mt-20">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-7xl font-medium">
                <span className="text-[#E74C3C]">U</span>&nbsp;-&nbsp;Uncover
              </p>
              <div className="text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-12 gap-3 bg-white">
                <p className="leading-normal text-[#E74C3C] font-medium">
                  With insights from our probe, we uncover hidden opportunities
                  and challenges:
                </p>
                <ul className="space-y-2 text-xl text-gray-700">
                  {uncoverItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[800px] mt-20">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-7xl font-medium">
                <span className="text-[#E74C3C]">U</span>&nbsp;-&nbsp;Uncover
              </p>
              <div className="text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-12 gap-3 bg-white">
                <p className="leading-normal text-[#E74C3C] font-medium">
                  With insights from our probe, we uncover hidden opportunities
                  and challenges:
                </p>
                <ul className="space-y-2 text-xl text-gray-700">
                  {uncoverItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-2 w-full" />
        <div className="py-8 w-full flex justify-center items-center">
          <div className="group rounded-full w-fit px-6 py-4 flex text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer">
            Ready to Outpace Your Competition? Let's Talk Growth
            <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
              <ArrowRight />
            </div>
          </div>
        </div>
        <hr className="border-t-2 w-full" />
      </div>
    </>
  );
};

export default Pulse;
