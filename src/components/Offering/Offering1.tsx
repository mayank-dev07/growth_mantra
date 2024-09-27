import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Strategy & Planning",
    description:
      "Transform your vision into a concrete roadmap for success. Our strategic planning services help you navigate the complex startup landscape, identify opportunities, and mitigate risks.",
  },
  {
    title: "User Personal Identification",
    description:
      "Understand your customers at a deeper level. We use advanced analytics and market research to create detailed user personas, ensuring your products and marketing resonate with your target audience.",
  },
  {
    title: "Go-to-Market Strategy",
    description:
      "Launch your product or enter new markets with confidence. Our go-to-market strategies are designed to maximize impact, minimize risk, and accelerate adoption",
  },
];

const Offering = () => {
  return (
    <>
      <section className="bg-[#576D2C] p-4 lg:p-16 text-white w-full">
        <div className="text-start mb-10 flex flex-col gap-3 md:gap-8">
          <h2 className="text-6xl lg:text-8xl font-bold mb-2">Our Offering</h2>
          <p className="text-lg lg:text-2xl w-fit tracking-wider flex flex-col gap-1 text-[#DFDFDF]">
            <span>
              Explore our comprehensive suite of services designed to fuel your
            </span>
            <span>growth at every stage of your business journey.</span>
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3  grid-rows-1 lg:grid-cols-3 lg:grid-rows-1  gap-6 sm:px-32 lg:px-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white text-[#576D2C] p-3 sm:p-5 lg:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col "
              >
                <div className="flex-grow">
                  <h3 className="text-lg md:text-2xl text-black font-bold">
                    {service.title}
                  </h3>
                  <p className="text-base md:text-lg pt-4 text-[#8A8A8A]">
                    {service.description}
                  </p>
                </div>
                <div className="w-full flex justify-center  mt-12">
                  <div className="group rounded-full w-fit px-2 py-2 flex text-sm md:text-base  text-white bg-[#576D2C] hover:bg-white hover:text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
                    Schedule a Call
                    <div className="p-2 bg-white rounded-full text-black group-hover:bg-[#576D2C] group-hover:text-white transition-all duration-300 ease-in-out">
                      <ArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-8 px-2 w-full flex justify-center items-center">
        <div className="group rounded-full w-fit px-6 py-4 flex text-sm md:text-base lg:text-xl hover:text-white  hover:bg-[#576D2C] bg-white text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
          {`Lost in Business Chaos? Get Your Strategic Roadmap Now!`}
          <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#576D2C] group-hover:text-[#576D2C]">
            <ArrowRight />
          </div>
        </div>
      </div>
      <hr className="border-t-2 w-full" />
    </>
  );
};

export default Offering;
