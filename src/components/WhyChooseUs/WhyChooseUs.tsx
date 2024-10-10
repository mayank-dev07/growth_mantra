import React from "react";
import AutoCarousel from "./AutoCarousel";
import { ArrowRight } from "lucide-react";
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

const WhyChooseUs = () => {
  return (
    <div className="w-full h-full flex flex-col ">
      <div className="h-full w-full flex flex-col md:flex-row pt-12 ">
        <div className="w-full px-4 lg:px-10 xl:px-16 flex flex-col gap-4 justify-center  items-center ">
          <div className="w-full flex flex-col gap-4 p-1 px-2 lg:px-0 justify-center  items-center">
            <div className="text-3xl md:text-5xl font-semibold flex flex-col gap-4 text-center tracking-widest text-[#576D2C]">
              Our Impact in Numbers
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-5 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-2 lg:gap-y-8 sm:px-6 lg:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 flex flex-col h-full shadow-lg" // Added shadow
            >
              <div className="flex-grow">
                <h3 className="text-xl md:text-4xl text-[#16213E] font-bold text-center py-3">
                  {service.title}
                </h3>
                <p className="text-base md:pt-2 text-[#8A8A8A] text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full bg-[#576D2C]">
        <section className="flex px-3 md:px-10 py-6 justify-center items-center flex-col md:flex-row">
          <div className="md:w-full text-[1.3rem] my-1 md:text-5xl font-bold  text-white flex flex-col justify-center items-center text-center">
            Ready to Be Our Next Success Story?
            <p className="text-lg md:text-xl py-3 font-normal tracking-wide">
              {`Let's unlock your business's full potential together`}
            </p>
          </div>
        </section>
        <Link
          href="/contactus"
          className="m-auto mb-10 group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base text-[#576D2C] bg-white hover:text-white hover:bg-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out"
        >
          Schedule a call
          <div className="p-2 bg-[#576D2C] rounded-full text-white group-hover:text-[#576D2C] group-hover:bg-white transition-all duration-300 ease-in-out">
            <ArrowRight />
          </div>
        </Link>
      </div>
      <div className=" flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 py-2 lg:py-0 flex justify-center items-center">
          <p className="text-3xl lg:text-5xl font-bold text-[#576D2C] leading-snug">
            WHY
            <br />
            CHOOSE US?
          </p>
        </div>
        <div className="w-full lg:w-1/2 py-0 flex justify-center">
          <AutoCarousel />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
