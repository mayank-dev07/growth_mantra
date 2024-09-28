import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";


const Pulse = () => {
  return (
    <>
      <div className="w-full h-full pt-8">
        <div className="w-full  flex flex-col justify-center items-center px-4 lg:px-16 gap-10">
          <div className="text-3xl md:text-4xl lg:text-7xl text-[#576D2C] w-full justify-start items-start flex flex-col gap-4">
            <p>Our Growth Mantra:</p>
            <p className="text-[#B2B7BE] flex gap-2 lg:gap-6">
              The
              <span className="text-[#576D2C]">COMPASS</span>
              Framework
            </p>
          </div>
          <p className="text-lg lg:text-xl tracking-wide leading-relaxed">
            {` Strategic planning approach guiding startups towards sustainable growth.`}
          </p>
        </div>
        <div className="relative h-fit pb-20">
          <div className="absolute inset-0 z-10 flex align-middle justify-normal m-10">
            <Image
              src="/GrowthMantra.png"
              alt="Growth Mantra"
              width={200} // Adjust width as needed
              height={200} // Adjust height as needed
              className="object-contain"
            />
          </div>
          <div className="absolute inset-0 top-0 left-0 w-full">
            <Image
              src="/treeVector2.png"
              alt="tree"
              width={900}
              height={500}
              className="object-fill lg:object-contain h-[1100px] w-auto"
            />
          </div>
          <div className="absolute inset-0 top-0 left-[-400px] w-full flex justify-center">
            <Image
              src="/treedots.png"
              alt="tree dots"
              width={100}
              height={700}
              className="object-fill lg:object-contain h-[1110px] w-[1290px]"
            />
          </div>



          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[31%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">C</span>&nbsp;-&nbsp;Clarify
              </p>
              <div className="text-lg lg:text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-4 gap-3 bg-white">

                <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left ">
                Define your vision and long-term objectives
                </p>


              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[22%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">O</span>&nbsp;-&nbsp;Observe
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">

                <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left">
                Conduct comprehensive market and competitive analysis
                </p>

              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[18%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">M</span>
                &nbsp;-&nbsp;Map
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">

                <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left">
                Outline potential growth paths and scenarios
                </p>

              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[17%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">P</span>&nbsp;-&nbsp;Prioritize
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 gap-3 bg-white">

                <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left">
                Identify and rank key initiatives based on impact and feasibility
                </p>

              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[18%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">A</span>
                &nbsp;-&nbsp;Align&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">

                <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left">
                  {`Ensure all strategies and tactics support your core objectives`}
                </p>

              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[22%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">S</span>
                &nbsp;-&nbsp;Systematize&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">

                <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left">
                  {`Develop systems and processes to execute your strategy`}
                </p>

              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[31%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">E</span>
                &nbsp;-&nbsp;Sync&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">

                <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left">
                  {`Regularly review and adjust your strategy to stay on course`}
                </p>

              </div>
            </div>
          </div>
        </div>

        <hr className="border-t-2 w-full" />
        <div className="py-8 w-full flex justify-center items-center px-4">
          <div
            className="group rounded-full w-fit px-6 py-4 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#576D2C] bg-white text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer
          transition-all duration-500 ease-in-out font-bold"
          >
            Experience the ELEVATE Advantage - Book Your Strategy Session Today!
            <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#576D2C] group-hover:text-[#576D2C]">
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
