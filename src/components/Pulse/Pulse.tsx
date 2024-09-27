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

const Pulse = () => {
  return (
    <>
      <div className="w-full h-full pt-8">
        <div className="w-full  flex flex-col justify-center items-center px-4 lg:px-16 gap-10">
          <div className="text-3xl md:text-4xl lg:text-7xl text-[#576D2C] w-full justify-start items-start flex flex-col gap-4">
            <p>Our Growth Mantra:</p>
            <p className="text-[#B2B7BE] flex gap-2 lg:gap-6">
              The
              <span className="text-[#576D2C]">PULSE</span>
              Framework
            </p>
          </div>
          <p className="text-lg lg:text-xl tracking-wide leading-relaxed">
            {` At The Growth Mantra, we've developed a unique, process-oriented
            approach to solving business and marketing challenges across
            industries. We call it the PULSE Framework - a strategic, powerful,
            and adaptable system that drives sustainable growth for startups and
            businesses at any stage.`}
          </p>
        </div>
        <div className="relative h-fit pb-20">
          <div className="absolute inset-52 top-[-20px] left-0 w-full">
            <Image
              src="/treevector.png"
              alt="tree"
              width={900}
              height={500}
              className="object-fill lg:object-contain h-[1100px] w-fit"
            />
          </div>

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[20%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">E</span>&nbsp;-&nbsp;Evaluate
              </p>
              <div className="text-lg lg:text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-4 gap-3 bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left ">
                      Conduct a comprehensive analysis of your current position, market, and competition
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-base lg:text-lg text-gray-700">
                        {probeItems.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 mt-1.5 bg-[#576D2C] rounded-full flex-shrink-0 mr-3"></span>
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
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[14%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">L</span>&nbsp;-&nbsp;Leverage
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left">
                      Identify and capitalize on your unique strengths and market opportunities
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-base lg:text-lg text-gray-700">
                        {uncoverItems.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 mt-1.5 bg-[#576D2C] rounded-full flex-shrink-0 mr-3"></span>
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

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[18%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">E</span>
                &nbsp;-&nbsp;Engage
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline !border-b-0">
                      <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left">
                      Develop strategies to deeply connect with your target audience
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-base lg:text-lg text-gray-700">
                        {leverageItems.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 mt-1.5 bg-[#576D2C] rounded-full flex-shrink-0 mr-3"></span>
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

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[35%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">V</span>&nbsp;-&nbsp;Validate
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-6 md:py-4 gap-3 bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left">
                      We develop targeted content and offers for each funnel stage
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-base lg:text-lg text-gray-700">
                        {synthesizesItems.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 mt-1.5 bg-[#576D2C] rounded-full flex-shrink-0 mr-3"></span>
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

          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[12%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">A</span>
                &nbsp;-&nbsp;Adapt&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left">
                        {`Continuously refine your approach based on real-world results`}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-base lg:text-lg text-gray-700">
                        {executeItems.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 mt-1.5 bg-[#576D2C] rounded-full flex-shrink-0 mr-3"></span>
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
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[12%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">T</span>
                &nbsp;-&nbsp;Transform&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left">
                        {`Implement transformative changes that drive significant growth`}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-base lg:text-lg text-gray-700">
                        {executeItems.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 mt-1.5 bg-[#576D2C] rounded-full flex-shrink-0 mr-3"></span>
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
          <div className="relative z-20 flex flex-col w-full justify-center items-center lg:items-end lg:right-[12%] mt-16">
            <div className="h-auto w-10/12 lg:w-[45%] tracking-wide">
              <p className="text-3xl lg:text-4xl font-bold">
                <span className="text-[#576D2C]">E</span>
                &nbsp;-&nbsp;Expand&nbsp;
              </p>
              <div className="text-lg flex flex-col w-full shadow-2xl rounded-2xl py-4 px-2 md:px-4  bg-white">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:no-underline">
                      <p className="leading-normal text-[#576D2C] font-bold test-base md:text-lg text-left">
                        {`Scale successful strategies to new markets or product lines`}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-base lg:text-lg text-gray-700">
                        {executeItems.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="h-2 w-2 mt-1.5 bg-[#576D2C] rounded-full flex-shrink-0 mr-3"></span>
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
