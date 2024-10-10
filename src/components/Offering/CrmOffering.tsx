import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const services = [
  {
    title: "Push Notifications/ Interactions",
    description:
      "Craft timely, relevant push notifications that engage users effectively.",
    point1: "Are your notifications ignored?",
    point2: "Push messages causing user churn?",
    point3: "Unsure when to send notifications?",
  },
  {
    title: "Customer Journey Mapping",
    description:
      "Visualize and optimize customer interactions for enhanced personalization.",
    point1: "Str customer touchpoints?",
    point2: "High drop-off rates?",
    point3: "Missing key conversion opportunities?",
  },
  {
    title: "Customer Journey Optimization",
    description:
      "Create seamless, personalized experiences from first touch to loyalty.",
    point1: "Low customer retention?",
    point2: "Inconsistent user experiences?",
    point3: "Struggling with personalization?",
  },
];

const CheckmarkIcon = () => (
  <div className="w-[30px] h-[30px] flex justify-center items-center mr-2">
    <Image
      width={30}
      height={30}
      src="/assets/success_red.png" // Replace with the actual path to your PNG
      alt="Checkmark Icon"
      className="w-full h-full object-contain"
    />
  </div>
);

const CrmOffering = () => {
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
                <Link href="/ContactUs" passHref>
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
        <Link href="/ContactUs" passHref>
          <div className="group rounded-full w-fit px-4 py-2 flex text-sm md:text-base lg:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-2 cursor-pointer transition-all duration-500 ease-in-out font-bold">
            {`Stop Losing Customers - Get Your CRM Growth Consultation
`}
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

export default CrmOffering;
