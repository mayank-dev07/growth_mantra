import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const CaseStudy = (props: Props) => {
  return (
    <>
      <div className="w-full h-full bg-[#16213E] px-4 lg:px-16  py-32">
        <div className="w-full h-full bg-white flex flex-col lg:flex-row justify-between itms-center">
          <div className="w-full flex flex-col justify-start items-center text-2xl lg:text-4xl text-[#E74C3C] py-8 px-6 lg:px-12">
            <p className=" leading-loose font-medium">
              Effective Growth Strategies can increase revenue by up to
              <span className="text-4xl lg:text-6xl font-semibold">
                &nbsp;33%&nbsp;
              </span>
              in the first{" "}
              <span className="text-4xl lg:text-6xl font-semibold">
                &nbsp;SIX&nbsp;
              </span>{" "}
              months.
            </p>
            <div className="py-8 w-full flex justify-start items-center">
              <div className="group rounded-full w-fit px-6 py-4 flex text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer">
                Schedule a call
                <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end items-center px-4 lg:px-12">
            <Image
              src="/casestudy.png"
              alt="casestudy"
              width={450}
              height={450}
            ></Image>
          </div>
        </div>
        <div className="w-full pt-32 flex flex-col gap-4">
          <p className="text-7xl lg:text-9xl text-white">Featured Case Study</p>
          <p className="text-3xl text-white my-12">
            Highlighting successful projects with links to full case studies
          </p>
        </div>
        <div className="rounded-3xl w-full bg-[#E74C3C] h-full ">
          <div className="w-full flex justify-center items-center">
            <div className="py-20 w-11/12 lg:w-8/12 grid grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="w-full flex justify-center items-center">
                <p className="px-20 lg:px-16 w-full py-3 flex justify-center items-center border-white border-[1px] bg-transparent text-white rounded-full font-medium">
                  All&nbsp;Work[20]
                </p>
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="px-20 lg:px-16 w-full py-3 flex justify-center items-center border-white border-[1px] bg-transparent text-white rounded-full font-medium">
                  UI/UX&nbsp;Design[10]
                </p>
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="px-20 lg:px-16 w-full py-3 flex justify-center items-center border-white border-[1px] bg-transparent text-white rounded-full font-medium">
                  Digital&nbsp;Marketing[5]
                </p>
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="px-20 lg:px-16 w-full py-3 flex justify-center items-center border-white border-[1px] bg-transparent text-white rounded-full font-medium">
                  Branding&nbsp;[5]
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-start items-start h-full pb-20 px-4 lg:px-16 gap-8">
            <div className="w-full lg:w-1/3 h-full m-0 lg:m-4">
              <div className=" h-[500px] rounded-3xl grid grid-cols-1 content-between text-2xl p-4">
                <div className="w-full flex flex-col justify-start items-center px-2 lg:px-12 text-white">
                  Explore our latest articles and case studies to stay ahead in
                  your industry.
                  <div className="py-8 w-full flex justify-center items-center">
                    <div className="group rounded-full w-full px-6 py-4 flex text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer">
                      <p>Schedule&nbsp;a&nbsp;call</p>
                      <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <div className="w-full lg:w-8/12 flex justify-between items-center">
                    <div className="w-24 h-24 flex justify-center items-center rounded-full bg-white">
                      <ChevronLeft size={40} />
                    </div>
                    <div className="w-24 h-24 flex justify-center items-center rounded-full bg-white">
                      <ChevronRight size={40} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/3 h-full m-0 lg:m-4">
              <div className=" bg-white h-[500px] rounded-3xl grid grid-cols-1 content-between text-2xl p-4">
                <div className="w-full flex justify-start items-center px-12">
                  Ai Corporation. 2023
                </div>
                <div className="w-full flex justify-center items-center">
                  Ai Wave - Ai Chatbot Mobile App
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 h-full m-0 lg:m-4">
              <div className=" bg-white h-[500px] rounded-3xl grid grid-cols-1 content-between text-2xl p-4">
                <div className="w-full flex justify-start items-center px-12">
                  Ai Corporation. 2023
                </div>
                <div className="w-full flex justify-center items-center">
                  Ai Wave - Ai Chatbot Mobile App
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center px-0 lg:px-32">
        <div className="w-full lg:w-1/2 bg-[#E84C3D] text-white p-8 lg:p-24 rounded-[3%] shadow-2xl">
          <div className="text-6xl">Diagnose Your Growth Blockers</div>
          <div className="py-8 text-2xl">
            Uncover the hidden obstacles holding your startup back. Our expert
            consultants will analyze your business, identify critical
            bottlenecks, and provide a custom action plan to skyrocket your
            growth. Limited offer: Claim your complimentary strategy session
            (Valued at $400) now
          </div>
          <div className="py-4 w-full flex justify-start items-center">
            <div className="group rounded-full w-fit px-4 lg:px-6 py-2 flex text-base lg:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C]  shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer">
              <p>Reveal&nbsp;Your&nbsp;Growth&nbsp;Potential</p>
              <div className="p-2 lg:p-4 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-[#E84C3D] bg-white p-8 lg:p-24 rounded-[3%] shadow-2xl">
          <div className="text-6xl">Partner with Proven Growth Catalysts</div>
          <div className="py-8 text-2xl">
            Looking for more than just advice? Our team of seasoned consultants
            doesn't just strategize - we execute. From refining your
            go-to-market strategy to optimizing your product for scalability,
            we're here to drive tangible results and exponential growth for your
            startup.
          </div>
          <div className="py-4 w-full flex justify-start items-center">
            <div className="group rounded-full w-fit px-4 lg:px-6 py-2 flex text-xl hover:bg-white hover:text-[#E74C3C] text-white bg-[#E74C3C] border-[1px] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer">
              <p>Amplify&nbsp;Your&nbsp;Growth</p>
              <div className="p-2 lg:p-4 group-hover:text-white rounded-full bg-white text-black group-hover:bg-[#E74C3C]">
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
