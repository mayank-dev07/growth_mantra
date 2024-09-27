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
  {
    title: "Brand Solutions",
    description:
      "Build a brand that stands out in a crowded marketplace. We help you craft a compelling brand story, visual identity, and messaging that captures your unique value proposition.",
  },
  {
    title: "Growth Marketing",
    description:
      "Accelerate your growth with data-driven marketing strategies. We integrate cutting-edge tactics across channels to drive acquisition, engagement, and retention.",
  },
  {
    title: "Product Growth",
    description: "Align your product development with market needs and user expectations. Our product growth strategies ensure you're building features that drive adoption and retention.",
  },
 
];

const Offering = () => {
  return (
    <>
      <section className="bg-[#576D2C] p-4 lg:p-12 text-white w-full">
        <div className="text-start mb-10 flex flex-col gap-3 md:gap-8">
          <h2 className="text-6xl lg:text-8xl font-bold mb-2">Our Offering</h2>
          <p className="text-lg lg:text-2xl w-fit tracking-wider flex flex-col gap-1 text-[#DFDFDF]">
            <span>
              Explore our comprehensive suite of services designed to fuel your
            </span>
            <span>growth at every stage of your business journey.</span>
          </p>
        </div>
        <div className="grid grid-cols-2  grid-rows-4 lg:grid-cols-4 lg:grid-rows-2  gap-2 lg:gap-y-8 sm:px-12 lg:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-[#576D2C] p-3 sm:p-5 lg:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col "
            >
              <div className="flex-grow">
                <h3 className="text-lg md:text-2xl text-black font-bold">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg pt-4 text-[#8A8A8A]">
                  {service.description}
                </p>



              </div>
              <div className="w-full flex justify-center md:justify-start">
                <div className="group rounded-full w-fit px-4 py-2 flex text-sm md:text-base lg:text-xl font-bold text-white bg-[#576D2C] hover:bg-white hover:text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
                 Schedule a Call
                  <div className="p-3 bg-white rounded-full text-black group-hover:bg-[#576D2C] group-hover:text-white transition-all duration-300 ease-in-out">
                    <ArrowRight />
                  </div>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>
    
      <hr className="border-t-2 w-full" />
    </>
  );
};

export default Offering;
