import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Acquisition Mastery",
    description:
      "Accelerate new customer acquisition with data-driven strategies and campaigns.",
  },
  {
    title: "Retention Revolution",
    description:
      "Transform how you build customer loyalty with personalized engagement campaigns.",
  },
  {
    title: "Funnel Optimization",
    description:
      "Maximize conversions by refining every step of your marketing funnel.",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Boost conversion rates with strategic A/B testing and user behavior analysis.",
  },
  {
    title: "Email Marketing Engine",
    description:
      "Design targeted email sequences that nurture and convert leads.",
  },
  {
    title: "SEO Domination",
    description: "Climb search engine rankings through strategic SEO tactics.",
  },
  {
    title: "CRM Growth Engine",
    description:
      "Leverage data to personalize and scale customer interactions.",
  },
  {
    title: "UX for Exponential Growth",
    description: "Create intuitive experiences that drive repeat business.",
  },
];

const Offering = () => {
  return (
    <>
      <section className="bg-[#E74C3C] p-4 lg:p-12 text-white w-full">
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
              className="bg-white text-[#E74C3C] p-3 sm:p-5 lg:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col "
            >
              <div className="flex-grow">
                <h3 className="text-lg md:text-2xl text-black font-bold">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg pt-4 text-[#8A8A8A]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="py-8 px-2 w-full flex justify-center items-center">
        <div className="group rounded-full w-fit px-6 py-4 flex text-sm md:text-base lg:text-xl hover:text-white  hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
          {`Ready to Outpace Your Competition? Let's Talk Growth`}
          <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
            <ArrowRight />
          </div>
        </div>
      </div>
      <hr className="border-t-2 w-full" />
    </>
  );
};

export default Offering;
