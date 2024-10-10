import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    href: "/StrategyPlanning",
    title: "Strategy & Planning",
    description:
      "Transform your vision into a concrete roadmap for success. Our strategic planning help you navigate the complex startup landscape, identify opportunities, and mitigate risks.",
  },
  {
    href: "/UserPersona",
    title: "User Persona Identification",
    description:
      "Understand your customers at a deeper level. We use advanced analytics and market research to create detailed user personas, ensuring your products and marketing resonate with your target audience.",
  },
  {
    href: "/GoToMarket",
    title: "Go-to-Market Strategy",
    description:
      "Launch your product or enter new markets with confidence. Our go-to-market strategies are designed to maximize impact, minimize risk, and accelerate adoption.",
  },
  {
    href: "/BrandSolution",
    title: "Brand Solutions",
    description:
      "Build a brand that stands out in a crowded marketplace. We help you craft a compelling brand story, visual identity, and messaging that captures your unique value proposition.",
  },
  {
    href: "/GrowthMarketing",
    title: "Growth Marketing",
    description:
      "Accelerate your growth with data-driven marketing strategies. We integrate cutting-edge tactics across channels to drive acquisition, engagement, and retention.",
  },
  {
    href: "/ProductGrowth",
    title: "Product Growth",
    description:
      "Align your product development with market needs and user expectations. Our product growth strategies ensure you're building features that drive adoption and retention.",
  },
];

const Offering = () => {
  return (
    <>
      <section className="bg-[#576D2C] p-4 lg:p-10 text-white w-full">
        <div className="text-start mb-8 flex flex-col gap-3 md:gap-6">
          <h2 className="text-5xl lg:text-7xl font-bold mb-2">Our Offering</h2>
          <p className="text-lg lg:text-xl w-fit tracking-wider flex flex-col gap-1 text-[#DFDFDF]">
            <span>
              Explore our comprehensive suite of services designed to fuel your
            </span>
            <span>growth at every stage of your business journey.</span>
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4 sm:px-10 lg:px-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white text-[#576D2C] p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl text-black font-bold">
                    {service.title}
                  </h3>
                  <p className="text-base md:pt-2 text-[#8A8A8A]">
                    {service.description}
                  </p>
                </div>
                <div className="w-full flex justify-center mt-4">
                  <Link
                    href={service.href}
                    className="group rounded-full w-fit px-4 py-2 flex text-sm md:text-base bg-white text-[#576D2C] hover:text-white hover:bg-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-2 cursor-pointer transition-all duration-500 ease-in-out"
                  >
                    Learn More
                    <div className="p-2 bg-[#576D2C] rounded-full text-white group-hover:text-[#576D2C] group-hover:bg-white transition-all duration-300 ease-in-out">
                      <ArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t-2 w-full" />
    </>
  );
};

export default Offering;
