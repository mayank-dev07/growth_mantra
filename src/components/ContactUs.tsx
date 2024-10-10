"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Header from "./Header/Header3";
import ContactForm from "./Form/Contact2";
import Footer from "./Footer/Footer2";

const content1: { [key: string]: string } = {
  "Acquisition Mastery":
    "Supercharge your customer acquisition and lead generation",
  "Retention Revolution": "Transform one-time users into loyal brand advocates",
  "Funnel Optimization ":
    "Craft high-converting funnels that boost your bottom line",
  "CRM Growth Engine":
    "Leverage customer data for personalized, high-impact journeys",
  "Conversion Rate Optimization (CRO)":
    "Unlock hidden revenue with data-driven enhancements",
  "Email Marketing Engine": "Design engaging sequences that convert at scale",
  "Sales Acceleration ": "Empower your team to close more deals, faster",
  "SEO Domination":
    "Climb the search rankings and establish thought leadership",
};

export default function ContactUs() {
  const contactFormRef = useRef<HTMLDivElement>(null);
  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header />
      <section className="flex justify-between flex-col-reverse md:flex-row  mt-44">
        <div className="md:pl-10 pl-2 text-3xl my-3 text-black sm:text-5xl lg:text-7xl font-bold flex flex-col gap-4">
          <div className="flex items-center gap-2 flex-wrap ">
            <div className="text-nowrap">Your</div>
            <div className="border-[#16213E] py-1 px-4  border-4 w-fit rounded-full text-[#16213E] font-bold shadow-2xl">
              Growth
            </div>
          </div>
          <div className="text-nowrap">Journey Starts Here</div>
        </div>

        <div>
          <div className="bg-[#16213E] text-nowrap py-3 md:p-10 px-12 text-3xl font-black text-white md:rounded-l-3xl md:rounded-none rounded-r-3xl md:w-auto w-8/12">
            Contact Us
          </div>
        </div>
      </section>
      <section className="lg:px-10 px-2 md:px-6 sm:px-2 md:w-2/3 text-gray-600 my-5">
        {`Ready to unlock your business's full potential? The Growth Mantra team is
        here to guide you every step of the way.`}
      </section>
      <h1 className="md:px-10 px-3 my-8 text-3xl md:text-6xl font-bold text-[#16213E]">
        Our Growth-Driving Services
      </h1>
      <ul>
        {Object.keys(content1).map((key: string) => (
          <li
            key={key + "list"}
            className="md:px-10 px-3 py-3 flex text-sm md:text-xl gap-x-1 "
          >
            <Image
              src={"/SuccessContact.png"}
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="font-bold text-[#16213E]">
              {key} :{" "}
              <span className="text-black font-normal">{content1[key]}</span>
            </p>
          </li>
        ))}
      </ul>
      <div className="w-full bg-[#16213E] py-7 my-5 text-white text-sm md:text-4xl font-bold m-auto text-center  m-">
        <div className=" inline">Not sure which service you need?</div>
        Don&apos;t worry – our experts will
        <br /> help you identify the
        <div className="inline">&nbsp;best solutions</div> for your unique
        challenges.
      </div>
      <section className="flex px-3 md:px-10 my-5 justify-around md:items-center flex-col md:flex-row">
        <div className="md:w-2/5 text-[1.3rem] my-1 md:text-8xl font-bold  text-[#16213E]">
          Get in Touch
        </div>
        <div className="md:w-2/5 space-y-2">
          <div className="text-lg md:text-2xl font-bold">
            Schedule a Service Consultation
          </div>
          <div className=" md:text-lg text-gray-700">
            Book a free 30-minute call with our service experts to discuss your
            specific needs and how we can help.
          </div>
          <button
            onClick={scrollToContactForm}
            className="group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base  text-white bg-[#16213E] hover:bg-white hover:text-[#16213E] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out"
          >
            Book Your Free Consultation
            <div className="p-2  bg-white rounded-full text-black group-hover:bg-[#16213E] group-hover:text-white transition-all duration-300 ease-in-out">
              <ArrowRight />
            </div>
          </button>
        </div>
      </section>
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
      <section className="flex flex-col lg:flex-row px-3 md:px-12 my-16 gap-12 justify-around lg:items-center">
        {/* Adjusting heading size for responsiveness */}
        <div className="md:w-2/5 text-[1.5rem] sm:text-3xl md:text-7xl  font-bold my-1 text-[#16213E]">
          Our Consultants Impact
        </div>

        <div className="md:w-4/5 space-y-4">
          <div className="text-lg font-bold text-gray-600">
            &quot;The Growth Mantra&apos;s consulting team revolutionized our
            go-to-market strategy. Their insights helped us capture market share
            50% faster than projected.&quot;
          </div>
          <div className="italic text-gray-600">- Michael L., CEO</div>
          <div className="text-lg font-bold text-gray-600">
            &quot;Working with their consultants on our user persona
            identification transformed our product development. We&apos;ve seen
            a 40% increase in user engagement since implementing their
            recommendations.&quot;
          </div>
          <div className="italic text-gray-600">- Sarah K., Founder</div>
          <button
            onClick={scrollToContactForm}
            className="group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base text-white bg-[#16213E] hover:bg-white hover:text-[#16213E] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out"
          >
            Book Your Free Strategy Session
            <div className="p-2 bg-white rounded-full text-black group-hover:bg-[#16213E] group-hover:text-white transition-all duration-300 ease-in-out">
              <ArrowRight />
            </div>
          </button>
        </div>
      </section>
      {/*  */}
      <section className="my-16 text-xl md:text-4xl md:px-16 text-center m-auto line w-[93%]">
        <p className="md:leading-[70px]">
          <span className="text-[#16213E] text-3xl md:text-6xl">
            Ready to leverage our growth-driving services?
          </span>
          <br />
          Reach out&nbsp;
          {`today and let's craft your success story together.`}
        </p>
        <button
          onClick={scrollToContactForm}
          className="m-auto mt-10 group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base text-[#16213E] bg-white hover:text-white hover:bg-[#16213E] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out"
        >
          Elevate Your Growth Now
          <div className="p-2 bg-[#16213E] rounded-full text-white group-hover:text-[#16213E] group-hover:bg-white transition-all duration-300 ease-in-out">
            <ArrowRight />
          </div>
        </button>
      </section>
      <section className="my-16 text-xl md:text-4xl md:px-16 text-center m-auto line w-[93%]">
        <p className="md:leading-[70px]">
          <span className="text-[#16213E] text-3xl md:text-6xl">
            {`At The Growth Mantra, our services don't just drive growth – they
            revolutionize it`}
          </span>
        </p>
      </section>

      <Footer />
    </>
  );
}
