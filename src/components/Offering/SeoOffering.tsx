import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const services = [
  {
    title: "Keyword Research",
    description:
      "Uncover high-intent keywords driving conversions in your target audience.",
    point1: "Targeting wrong keywords?",
    point2: "Competitor keywords unknown?",
    point3: "Search intent unclear?",
  },
  {
    title: "On-Page SEO",
    description:
      "Optimize every element for maximum search visibility and engagement.",
    point1: "Rankings dropping post-update?",
    point2: "Technical SEO issues?",
    point3: "Low click-through rates?",
  },
  {
    title: "Content Strategy for SEO",
    description:
      "Create ranking content aligning search visibility with business goals.",
    point1: "Content not ranking?",
    point2: "High bounce rates?",
    point3: "Low organic conversions?",
  },
];

const CheckmarkIcon = () => (
  <div className="w-[30px] h-[30px] flex justify-center items-center mr-2">
    <Image
      width={30}
      height={30}
      src="/success.png" // Replace with the actual path to your PNG
      alt="Checkmark Icon"
      className="w-full h-full object-contain"
    />
  </div>
);

const SeoOffering = () => {
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
                <Link href="/contactus2" passHref>
                  <div className="group rounded-full w-fit px-4 py-2 flex text-sm md:text-base text-white bg-[#E74C3C] hover:bg-white hover:text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-2 cursor-pointer transition-all duration-500 ease-in-out">
                    Schedule&nbsp;a&nbsp;Call
                    <div className="p-2 bg-white rounded-full text-black group-hover:bg-[#E74C3C] group-hover:text-white transition-all duration-300 ease-in-out">
                      <ArrowRight />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="py-6 px-4 w-full flex justify-center items-center">
        <Link href="/contactus2" passHref>
          <div className="group rounded-full w-fit px-4 py-2 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-2 cursor-pointer transition-all duration-500 ease-in-out font-bold">
            {` Invisible in Search? Get Your SEO Audit Now!`}
            <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
              <ArrowRight />
            </div>
          </div>
        </Link>
      </div>
      <hr className="border-t-2 w-full" />
    </>
  );
};

export default SeoOffering;
