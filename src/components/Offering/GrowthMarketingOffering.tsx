import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const services = [
  {
    title: "Multi-Channel Strategy",
    description: "Develop cohesive strategy across channels to maximum impact",
    point1: "Marketing efforts fragmented?",
    point2: `Channel performance unclear?`,
    point3: `Audience reach is limited?`,
  },
  {
    title: "Performance Marketing",
    description: "Implement data-driven campaigns devlivering measurable ROI",
    point1: "Marketing ROI unknown?",
    point2: "Campaigns underperforming?",
    point3: "Data-driven decisions lacking?",
  },
  {
    title: "Customer Acquisition",
    description: "Develop strategies to attract new custtomers effectively ",
    point1: "New customer growth stagnant?",
    point2: "Acquisition costs too high?",
    point3: "Target audience not responding?",
  },

  {
    title: "Customer Retention",
    description: "Implement tactics to increase customer lifetime value",
    point1: "Customer churn rate high?",
    point2: "Lifetime value declining?",
    point3: "Loyality programs ineffective?",
  },
];
// const services2 = [
// ]

const CheckmarkIcon = () => (
  <div className="w-[30px] h-[30px] flex justify-center items-center mr-3">
    <Image
      width={30}
      height={30}
      src="/Success.svg" // Replace with the actual path to your PNG
      alt="Checkmark Icon"
      className="w-full h-full object-contain"
    />
  </div>
);

const GrowthMarketingOffering = () => {
  return (
    <>
      <section className="bg-[#576D2C] p-4 lg:p-10 text-white w-full">
        <div className="text-start mb-8 flex flex-col gap-3 md:gap-6">
          <h2 className="text-5xl lg:text-7xl font-bold mb-2">
            Our GrowthMarketingOffering
          </h2>
          <p className="text-lg lg:text-xl w-fit tracking-wider flex flex-col gap-1 text-[#DFDFDF]">
            <span>
              Explore our comprehensive suite of services designed to fuel your
            </span>
            <span>growth at every stage of your business journey.</span>
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-4 lg:grid-rows-1 gap-6 sm:px-10 lg:px-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white text-[#576D2C] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex-grow">
                  <h3 className="text-lg  text-black font-bold">
                    {service.title}
                  </h3>
                  <p className="text-base  pt-1 text-[#8A8A8A]">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-col gap-4 mt-2">
                  {/* Checkpoint 1 */}
                  <div className="flex items-center">
                    <CheckmarkIcon />
                    <p className="text-sm text-black font-semibold">
                      {service.point1}
                    </p>
                  </div>

                  {/* Checkpoint 2 */}
                  <div className="flex items-center">
                    <CheckmarkIcon />
                    <p className="text-sm text-black font-semibold">
                      {service.point2}
                    </p>
                  </div>

                  {/* Checkpoint 3 */}
                  <div className="flex items-center">
                    <CheckmarkIcon />
                    <p className="text-sm text-black font-semibold">
                      {service.point3}
                    </p>
                  </div>
                </div>

                <div className="w-full flex justify-center mt-8">
                  <Link href="/contactus" passHref>
                    <div className="group rounded-full w-fit px-4 py-2 flex text-sm text-white bg-[#576D2C] hover:bg-white hover:text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-2 cursor-pointer transition-all duration-500 ease-in-out">
                      Schedule&nbsp;a&nbsp;Call
                      <div className="p-2 bg-white rounded-full text-black group-hover:bg-[#576D2C] group-hover:text-white transition-all duration-300 ease-in-out">
                        <ArrowRight />
                      </div>
                    </div>
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-8 px-2 w-full flex justify-center items-center">
        <Link href="/contactus" passHref>
        <div className="group rounded-full w-fit px-6 py-4 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#576D2C] bg-white text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
          {`Marketing Not Driving Growth? Get Your Optimized Strategy Now!`}
          <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#576D2C] group-hover:text-[#576D2C]">
            <ArrowRight />
          </div>
        </div>
        </Link>
      </div>
      <hr className="border-t-2 w-full" />
    </>
  );
};

export default GrowthMarketingOffering;
