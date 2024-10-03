import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const leverageItems = [
  "Create personalized customer experiences",
  "Develop multi-channel growth plans",
  "Customer journey mapping ",
  "Identifying key performance indicators (KPIs)",
];

const synthesizesItems = [
  " Integrate marketing, sales, and product strategies",
  "Align business goals with marketing objectives",
  "Combine short-term tactics with long-term vision ",
  "Blend creativity with data-driven decision making",
];

const executeItems = [
  " Implement strategies with agile methodologies",
  "Conduct regular A/B testing and optimization ",
  "Monitor KPIs and adjust tactics in real-time tems",
];

const Crm = () => {
  return (
    <>
      <div className="w-full h-full pt-8">
        <div className="w-full  flex flex-col justify-center items-center px-4 lg:px-16 gap-10">
          <div className="text-3xl md:text-4xl lg:text-7xl text-[#E74C3C] w-full justify-start items-start flex flex-col gap-4">
            <p>Our Growth Mantra:</p>
            <p className="text-[#B2B7BE] flex gap-2 lg:gap-6">
              The
              <span className="text-[#E74C3C]">RELAATE</span>
              Framework
            </p>
          </div>
          <p className="text-lg lg:text-xl tracking-wide leading-relaxed">
            {`Our proven framework transforms CRMs into powerful growth engines.

`}
          </p>
        </div>
        <div className="relative h-fit pb-20 ">
          <div className="absolute inset-52 top-[-60px] left-0 w-full">
            <Image
              src="/treevector.png"
              alt="tree"
              width={1000}
              height={600}
              className="object-fill lg:object-contain h-[1110px] w-fit"
            />
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[20%] mt-10">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#E74C3C]">R</span>&nbsp;-&nbsp;Review
              </p>
              <div className="text-lg lg:text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-4 gap-3 bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      <p className="leading-normal text-[#E74C3C] font-bold test-base md:text-lg text-left ">
                      We analyze your current CRM data and processes


                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-base lg:text-lg text-gray-700">
                        {probeItems.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[10%] mt-10">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#E74C3C]">E</span>&nbsp;-&nbsp;Engage
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      <p className="leading-normal text-[#E74C3C] font-bold test-base md:text-lg text-left">
                      We develop strategies for meaningful customer interactions


                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-base lg:text-lg text-gray-700">
                        {uncoverItems.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[5%] mt-10">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#E74C3C]">L</span>
                &nbsp;-&nbsp;Leverage
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline !border-b-0">
                      <p className="leading-normal text-[#E74C3C] font-bold test-base md:text-lg text-left">
                      We utilize data insights to personalize experiences


                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-base lg:text-lg text-gray-700">
                        {leverageItems.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[10%] mt-10">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#E74C3C]">A</span>&nbsp;-&nbsp;Align
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 gap-3 bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      <p className="leading-normal text-[#E74C3C] font-bold test-base md:text-lg text-left">
                      We ensure CRM strategies support overall business goals


                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-base lg:text-lg text-gray-700">
                        {synthesizesItems.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[30%] mt-10">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#E74C3C]">T</span>
                &nbsp;-&nbsp;Track&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      <p className="leading-normal text-[#E74C3C] font-bold test-base md:text-lg text-left">
                        {` We monitor KPIs and customer feedback

`}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-base lg:text-lg text-gray-700">
                        {executeItems.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[42%] mt-10">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#E74C3C]">E</span>
                &nbsp;-&nbsp;Evolve
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline !border-b-0">
                      <p className="leading-normal text-[#E74C3C] font-bold test-base md:text-lg text-left">
                      We continuously refine and improve CRM strategies

                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-base lg:text-lg text-gray-700">
                        {leverageItems.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 mt-1.5 bg-[#E74C3C] rounded-full flex-shrink-0 mr-3"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t-2 w-full mt-10" />
        <div className="py-8 w-full flex justify-center items-center px-4">
          <div
            className="group rounded-full w-fit px-6 py-4 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer
          transition-all duration-500 ease-in-out font-bold"
          >
           Master the Art of CRM Growth - Book Your Strategy Session Today!


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

export default Crm;
