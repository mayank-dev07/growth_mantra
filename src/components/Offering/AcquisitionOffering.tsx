import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Traffic and Leads",
    description:
      "Drive targeted traffic, convert visitors into high-quality, qualified leads",
    point1: "Struggling to reach your target audience?",
    point2: "Need more leads to fuel your sales pipeline?",
    point3: "Losing potential customers?",
  },
  {
    title: "Paid Ads",
    description:
      "Maximize ROI with strategic PPC campaigns across major platforms.",
    point1: "Ads not delivering results?",
    point2: "Want to optimize your PPC campaigns?",
    point3: "Struggling to reach the right audience?",
  },
  {
    title: "Paid Social",
    description:
      "Craft engaging, platform-specific campaigns that convert scrollers into customers.",
    point1: "Not seeing results from social media?",
    point2: "Want to improve engagement and conversions?",
    point3: "Missing your target audience online?",
  },
 
];
const service2 = [ {
  title: "Post Campaign Optimization",
  description:
    "Continuously improve campaigns, adapting to market changes and behaviors",
  point1: "Campaigns underperforming over time?",
  point2: "Lacking data-driven improvements?",
  point3: "Market changes hurting results?",
},
{
  title: "Affiliate Marketing",
  description:
    "Expand reach through strategic partnerships and affiliate network management",
  point1: "Looking to expand reach cost-effectively?",
  point2: "Need a reliable referral system?",
  point3: "Need help building an affiliate network?",
},]


const CheckmarkIcon = () => (
  <div className="w-[30px] h-[30px] flex justify-center items-center mr-2">
    <Image
      width={30}
      height={30}
      src="/Success.png" 
      alt="Checkmark Icon"
      className="w-full h-full object-contain"
    />
  </div>
);

const AcquisitionOffering = () => {
  return (
    <>
      <section className="bg-[#E74C3C] p-4 lg:p-8 text-white w-full">
        <div className="text-start mb-6 flex flex-col gap-2 md:gap-4">
          <h2 className="text-4xl lg:text-6xl font-bold mb-2">Our Offering</h2>
          <p className="text-lg lg:text-xl w-fit tracking-wider flex flex-col gap-1 text-[#DFDFDF]">
            <span>
              Explore our comprehensive suite of services designed to fuel your
            </span>
            <span>growth at every stage of your business journey.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 sm:px-8 lg:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-[#E74C3C] p-4 lg:p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="text-lg md:text-xl text-black font-bold">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg pt-2 text-[#8A8A8A]">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center">
                  <CheckmarkIcon />
                  <p className="text-lg text-black font-semibold">
                    {service.point1}
                  </p>
                </div>
                <div className="flex items-center">
                  <CheckmarkIcon />
                  <p className="text-lg text-black font-semibold">
                    {service.point2}
                  </p>
                </div>
                <div className="flex items-center">
                  <CheckmarkIcon />
                  <p className="text-lg text-black font-semibold">
                    {service.point3}
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-center mt-8">
                <div className="group rounded-full w-fit px-4 py-2 flex text-sm md:text-base text-white bg-[#E74C3C] hover:bg-white hover:text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-2 cursor-pointer transition-all duration-500 ease-in-out">
                  Schedule a Call
                  <div className="p-2 bg-white rounded-full text-black group-hover:bg-[#E74C3C] group-hover:text-white transition-all duration-300 ease-in-out">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 sm:px-8 lg:px-0 mx-auto mt-6 lg:w-[60%] ">
          {service2.map((service, index) => (
            <div
              key={index}
              className="bg-white text-[#E74C3C] p-4 lg:p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex-grow">
                <h3 className="text-lg md:text-xl text-black font-bold">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg pt-2 text-[#8A8A8A]">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center">
                  <CheckmarkIcon />
                  <p className="text-lg text-black font-semibold">
                    {service.point1}
                  </p>
                </div>
                <div className="flex items-center">
                  <CheckmarkIcon />
                  <p className="text-lg text-black font-semibold">
                    {service.point2}
                  </p>
                </div>
                <div className="flex items-center">
                  <CheckmarkIcon />
                  <p className="text-lg text-black font-semibold">
                    {service.point3}
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-center mt-8">
                <div className="group rounded-full w-fit px-4 py-2 flex text-sm md:text-base text-white bg-[#E74C3C] hover:bg-white hover:text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-2 cursor-pointer transition-all duration-500 ease-in-out">
                  Schedule a Call
                  <div className="p-2 bg-white rounded-full text-black group-hover:bg-[#E74C3C] group-hover:text-white transition-all duration-300 ease-in-out">
                    <ArrowRight />
                  </div>
                </div>
              </div>
            </div>
         ) )}
        </div>
      </section>

      <div className="py-6 px-4 w-full flex justify-center items-center">
        <div className="group rounded-full w-fit px-4 py-2 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-2 cursor-pointer transition-all duration-500 ease-in-out font-bold">
          {`Stop Wasting Ad Budget- Unlock Acquisition Growth Now`}
          <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
            <ArrowRight />
          </div>
        </div>
      </div>
      <hr className="border-t-2 w-full" />
    </>
  );
};

export default AcquisitionOffering;
