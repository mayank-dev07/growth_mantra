import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Data Analysis and Segmentation",
    description: "Identify Key customer characteristics using advaced analytis",
    point1: "Customer data underutilized?",
    point2: `Segments poorly defined?`,
    point3: `Marketing efforts scattered?`,
  },
  {
    title: "Customer Interviews and Surveys",
    description:
      "Reveal customer motivations through expert qualitative research.",
    point1: "Customer motivations unclear?",
    point2: " Product-customer misalignment?",
    point3: "Feedback collection ineffective?",
  },
  {
    title: "Behavioral Mapping",
    description:
      "Visualize customer journeys to improve engagement opportunities",
    point1: "Customer journeys confusing?",
    point2: "Touchpoints ineffective?",
    point3: "Engagement opportunities missed?",
  },
  {
    title: "Persona Creation and Validation",
    description: "Develop acatioinable personas to guiding business decisions",
    point1: "Marketing messages missing the mark?",
    point2: "Product development unfocused?",
    point3: "Customer needs misunderstood?",
  },
];

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

const UpiOffering = () => {
  return (
    <>
      <section className="bg-[#576D2C] p-4 lg:p-10 text-white w-full">
        <div className="text-start mb-8 flex flex-col gap-3 md:gap-6">
          <h2 className="text-5xl lg:text-7xl font-bold mb-2">
            Our UpiOffering
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
                  <div className="group rounded-full w-fit px-4 py-2 flex text-sm  text-white bg-[#576D2C] hover:bg-white hover:text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-2 cursor-pointer transition-all duration-500 ease-in-out">
                    Schedule&nbsp;a&nbsp;Call
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
        <div className="group rounded-full w-fit px-6 py-4 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#576D2C] bg-white text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
          {`Targeting Wrong Audience? Discover Your True Customers Now!`}
          <div className="p-3 group-hover:bg-white rounded-full text-white bg-[#576D2C] group-hover:text-[#576D2C]">
            <ArrowRight />
          </div>
        </div>
      </div>
      <hr className="border-t-2 w-full" />
    </>
  );
};

export default UpiOffering;
