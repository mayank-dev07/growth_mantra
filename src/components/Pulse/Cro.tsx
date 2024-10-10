import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Cro = () => {
  return (
    <>
      <div className="w-full h-full pt-8">
        <div className="w-full  flex flex-col justify-center items-center px-4 lg:px-16 gap-10">
          <div className="text-2xl md:text-4xl lg:text-7xl text-[#E74C3C] w-full justify-start items-start flex flex-col gap-4">
            <p>Our Growth Mantra:</p>
            <p className="text-[#B2B7BE] flex gap-2 lg:gap-6">
              The
              <span className="text-[#E74C3C]">CONVERT</span>
              Framework
            </p>
          </div>
          <p className="text-lg lg:text-xl tracking-wide leading-relaxed mb-10">
            {`Our proven framework systematically boosts conversion rates across industries.

`}
          </p>
        </div>
        <div className="relative h-fit pb-20 ">
        <div className="absolute inset-52 top-[-90px] left-0 w-full hidden md:block">
  <Image
    src="/assets/logo/final_tree.png"
    alt="tree"
    width={1000}
    height={600}
    className="object-fill lg:object-contain h-[1100px] w-fit"
  />
</div>


          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[20%] mt-10">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#E74C3C]">C</span>&nbsp;-&nbsp;Collect
              </p>
              <div className="text-lg lg:text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-4 gap-3 bg-white">
                <div>
                  <div>
                    <p className="leading-normal text-[#E74C3C] font-bold test-base md:text-lg text-left ">
                      We gather comprehensive data on user behavior and current
                      conversion rates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[10%] mt-10">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#E74C3C]">O</span>&nbsp;-&nbsp;Observe
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <div>
                  <div>
                    <p className="leading-normal text-[#E74C3C] font-bold test-base md:text-lg text-left">
                      We analyze user journeys and identify conversion
                      bottlenecks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[5%] mt-10">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#E74C3C]">N</span>
                &nbsp;-&nbsp;Navigate
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <div>
                  <div>
                    <p className="leading-normal text-[#E74C3C] font-bold test-base md:text-lg text-left">
                      We map out optimization strategies for each stage of the
                      user flow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[10%] mt-10">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#E74C3C]">V</span>&nbsp;-&nbsp;Validate
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 gap-3 bg-white">
                <div>
                  <div>
                    <p className="leading-normal text-[#E74C3C] font-bold test-base md:text-lg text-left">
                      We conduct rigorous A/B tests to prove hypotheses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[15%] mt-10">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#E74C3C]">E</span>
                &nbsp;-&nbsp;Evaluate&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">
                <div>
                  <div>
                    <p className="leading-normal text-[#E74C3C] font-bold test-base md:text-lg text-left">
                      {` We analyze test results and calculate impact on key metrics


`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[20%] mt-10">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#E74C3C]">R</span>
                &nbsp;-&nbsp;Refine
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <div>
                  <div>
                    <p className="leading-normal text-[#E74C3C] font-bold test-base md:text-lg text-left">
                      We implement winning variations and iterate on insights
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[30%] mt-10">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#E74C3C]">T</span>
                &nbsp;-&nbsp;Track
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <div>
                  <div>
                    <p className="leading-normal text-[#E74C3C] font-bold test-base md:text-lg text-left">
                      We continuously monitor performance and identify new
                      optimization opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t-2 w-full mt-10" />
        <div className="py-8 w-full flex justify-center items-center px-4">
          <Link href="/contactus" passHref>
            <div
              className="group rounded-full w-fit px-6 py-4 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer
          transition-all duration-500 ease-in-out font-bold"
            >
              Master the Art of Conversion - Book Your CRO Strategy Session
              Today!
              <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                <ArrowRight />
              </div>
            </div>
          </Link>
        </div>
        <hr className="border-t-2 w-full" />
      </div>
    </>
  );
};

export default Cro;
