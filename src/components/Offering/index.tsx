// components/OurOffering.js
import React from "react";
import {
  DollarSign,
  RefreshCw,
  Settings,
  TrendingUp,
  Mail,
  Search,
  Users,
  Monitor,
} from "lucide-react"; // Import icons from Lucide
import Image from "next/image";

const services = [
  {
    title: "Acquisition Mastery",
    description:
      "Accelerate new customer acquisition with data-driven strategies and campaigns.",
    icon: "/Earnings.png",
  },
  {
    title: "Retention Revolution",
    description:
      "Transform how you build customer loyalty with personalized engagement campaigns.",
    icon: "/SVG.png",
  },
  {
    title: "Funnel Optimization",
    description:
      "Maximize conversions by refining every step of your marketing funnel.",
    icon: "/Conversion_Optimization.png",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Boost conversion rates with strategic A/B testing and user behavior analysis.",
    icon: "/Conversion.png",
  },
  {
    title: "Email Marketing Engine",
    description:
      "Design targeted email sequences that nurture and convert leads.",
    icon: "/email_marketing.png",
  },
  {
    title: "SEO Domination",
    description: "Climb search engine rankings through strategic SEO tactics.",
    icon: "/Seo.png",
  },
  {
    title: "CRM Growth Engine",
    description:
      "Leverage data to personalize and scale customer interactions.",
    icon: "/sales.png",
  },
  {
    title: "UX for Exponential Growth",
    description: "Create intuitive experiences that drive repeat business.",
    icon: "/ux.png",
  },
];

const Offering = () => {
  return (
    <section className="bg-[#E74C3C] p-24 text-white">
      <div className="text-start mb-10 flex flex-col gap-8">
        <h2 className="text-9xl font-bold mb-4">Our Offering</h2>
        <p className="text-4xl w-fit tracking-wider flex flex-col gap-4 text-[#DFDFDF]">
          <span>
            Explore our comprehensive suite of services designed to fuel your
          </span>
          <span>growth at every stage of your business journey.</span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-[#E74C3C] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center items-center">
              <Image
                src={`${service.icon}`}
                className="transform !object-contain w-1/2 h-[200px]"
                alt="service"
                width={180}
                height={180}
              ></Image>
            </div>
            <div className="pt-8">
              <h3 className="text-3xl font-medium py-4 text-black">
                {service.title}
              </h3>
            </div>
            <p className="text-xl text-[#8A8A8A]">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offering;
