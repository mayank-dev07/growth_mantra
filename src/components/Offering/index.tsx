import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Acquisition Mastery",
    href: "/acquisition",
    description:
      "Precision-targeted strategies skyrocket lead generation and new customer acquisition.",
  },
  {
    title: "Retention Revolution",
    href: "/retention",
    description:
      "Transform users into loyal advocates with personalized re-engagement campaigns.",
  },
  {
    title: "Funnel Optimization",
    href: "/funnel",
    description:
      "Craft high-converting funnels guiding prospects from awareness to purchase.",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    href: "/conversionrateoptimization",
    description:
      "Boost conversions with data-driven A/B testing and flow enhancements.",
  },
  {
    title: "Email Marketing Engine",
    href: "/emailmarketingengine",
    description:
      "Design engaging sequences that nurture and convert audiences at scale.",
  },
  {
    title: "SEO Domination",
    href: "/searchengineoptimization",
    description:
      "Climb rankings with strategies driving organic growth and thought leadership.",
  },
  {
    title: "CRM Growth Engine",
    href: "/crm",
    description:
      "Leverage data for personalized journeys driving long-term customer value.",
  },
  {
    title: "Sales Growth",
    href: "/salesgrowth",
    description:
      "Empower sales teams with proven strategies to close more deals.",
  },
];

const Offering = () => {
  return (
    <>
      <section className="bg-[#E74C3C] p-4 lg:p-10 text-white w-full">
        <div className="text-start mb-8 flex flex-col gap-3 md:gap-6">
          <h2 className="text-5xl lg:text-7xl font-bold mb-2">Our Offering</h2>
          <p className="text-lg lg:text-xl w-fit tracking-wider flex flex-col gap-1 text-[#DFDFDF]">
            <span>
              Explore our comprehensive suite of services designed to fuel your
            </span>
            <span>growth at every stage of your business journey.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-2 lg:gap-y-8 sm:px-6 lg:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-[#E74C3C] p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full" // Make sure to set height to full
            >
              <div className="flex-grow">
                <h3 className="text-lg md:text-xl text-black font-bold">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg pt-2 text-[#8A8A8A]">
                  {service.description}
                </p>
              </div>
              <div className="w-full flex justify-center mt-4 align-middle">
                <Link
                  href={service.href}
                  className="group rounded-full w-fit px-4 py-2 flex text-sm md:text-base bg-white text-[#E74C3C] hover:text-white hover:bg-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-2 cursor-pointer transition-all duration-500 ease-in-out"
                >
                  Learn More
                  <div className="p-2 bg-[#E74C3C] rounded-full text-white group-hover:text-[#E74C3C] group-hover:bg-white transition-all duration-300 ease-in-out">
                    <ArrowRight />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="py-8 px-2 w-full flex justify-center items-center">
        <Link href="/contactus" passHref>
          <div className="group rounded-full w-fit px-6 py-3 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
            {`Ready to Outpace Your Competition? Let's Talk Growth`}
            <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
              <ArrowRight />
            </div>
          </div>
        </Link>
      </div>
      <hr className="border-t-2 w-full" />
    </>
  );
};

export default Offering;
