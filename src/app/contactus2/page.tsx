import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/Form/Contact2";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header/Header2";
const content1: { [key: string]: string } = {
  "Acquisition Mastery":
    "Transform your vision into a concrete roadmap for success",
  "Retention Revolution": "Understand your customers at a deeper level",
  "Funnel Optimization ":
    "Launch products or enter new markets with confidence",
  "CRM Growth Engine": "Build a brand that stands out in a crowded marketplace",
  "Conversion Rate Optimization (CRO)":
    "Accelerate your growth with data-driven marketing strategies",
  "Sales Acceleration ":
    "Align your product development with market needs and user expectations",
  "SEO Domination":
    " Align your product development with market needs and user expectations",
};

export default function Contactus() {
  return (
    <>
      <Header />
      <section className="flex justify-between flex-col-reverse md:flex-row  mt-44">
        <div className="md:pl-10 pl-2 text-3xl my-3 text-black md:text-7xl font-bold flex flex-col gap-4">
          <div className="flex items-center gap-2 flex-wrap ">
            <div className="text-nowrap">Your</div>
            <div className="border-[#E74C3C] py-1 px-4  border-4 w-fit rounded-full text-[#E74C3C] font-bold shadow-2xl">
              Growth
            </div>
          </div>
          <div className="text-nowrap">Journey Starts Here</div>
        </div>

        <div>
          <div className="bg-[#E74C3C] text-nowrap py-3 md:p-10 px-12 text-3xl font-black text-white md:rounded-l-3xl md:rounded-none rounded-r-3xl md:w-auto w-8/12">
            Contact Us
          </div>
        </div>
      </section>
      <section className="lg:px-10 px-2 md:px-6 sm:px-2 md:w-2/3 text-gray-600 my-5">
        Ready to unlock your businesss full potential? The Growth Mantra team is
        here to guide you every step of the way.
      </section>
      <h1 className="md:px-10 px-3 my-8 text-3xl md:text-6xl font-bold text-[#E74C3C]">
        Our Consulting Expertise
      </h1>

      <ul>
        {Object.keys(content1).map((key: string) => (
          <li
            key={key + "list"}
            className="md:px-10 px-3 py-3 flex text-sm md:text-xl gap-x-1 "
          >
            <Image src={"/success.svg"} alt="" width={20} height={20} />
            <p className="font-bold text-[#E74C3C]">
              {key} :{" "}
              <span className="text-black font-normal">{content1[key]}</span>
            </p>
          </li>
        ))}
      </ul>

      <div className="w-full bg-[#E74C3C] py-7 my-5 text-white text-sm md:text-4xl font-bold m-auto text-center  m-">
        <div className=" inline">Not sure which service you need?</div>
        Don&apos;t worry – our experts will
        <br /> help you identify the
        <div className="inline">best solutions</div> for your unique challenges.
      </div>

      <section className="flex px-3 md:px-10 my-5 justify-around md:items-center flex-col md:flex-row">
        <div className="md:w-2/5 text-[1.3rem] my-1 md:text-8xl font-bold  text-[#E74C3C]">
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
          <div className="group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base  text-white bg-[#E74C3C] hover:bg-white hover:text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
            Book Your Free Strategy Session
            <div className="p-2  bg-white rounded-full text-black group-hover:bg-[#E74C3C] group-hover:text-white transition-all duration-300 ease-in-out">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="flex flex-col md:flex-row px-3 md:px-10 my-16 justify-around md:items-center">
        {/* Adjusting heading size for responsiveness */}
        <div className="md:w-2/5 text-[1.5rem] sm:text-[2rem] md:text-8xl font-bold my-1 text-[#E74C3C]">
          Our Consultants Impact
        </div>

        <div className="md:w-2/5 space-y-4">
          <div className="text-lg font-bold text-gray-600">
            &quot;The Growth Mantra&apos;s consulting team revolutionized our
            go-to-market strategy. Their insights helped us capture market share
            50% faster than projected.&quot;
          </div>
          <div className="italic text-gray-600">
            - Michael L., CEO of InnovateTech
          </div>
          <div className="text-lg font-bold text-gray-600">
            &quot;Working with their consultants on our user persona
            identification transformed our product development. We&apos;ve seen
            a 40% increase in user engagement since implementing their
            recommendations.&quot;
          </div>
          <div className="italic text-gray-600">
            - Sarah K., Founder of UserFirst Solutions
          </div>
          {/* Responsive button */}
          <div className="group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base text-white bg-[#E74C3C] hover:bg-white hover:text-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
            Book Your Free Strategy Session
            <div className="p-2 bg-white rounded-full text-black group-hover:bg-[#E74C3C] group-hover:text-white transition-all duration-300 ease-in-out">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-left mb-6 sm:mb-8 md:mb-10"
          style={{ color: "#E74C3C" }}
        >
          What our clients say
        </h2>
        {/* Cards Section */}
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 md:space-x-8 space-y-6 sm:space-y-0">
          {/* Card 1 */}
          <div className="bg-white w-full sm:w-[300px] p-6 sm:p-8 shadow-md rounded-md border">
            <h3 className="text-xl sm:text-2xl font-semibold">Emily R. </h3>
            <p className="text-sm text-gray-500 mb-4">-CMO of ShopSmart</p>
            <p className="text-gray-600">
              &quot;
              {`"The Growth Mantra's CRO service transformed our e-commerce platform. We saw a 25% increase in conversion rates within just two months!"`}
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white w-full sm:w-[300px] p-6 sm:p-8 shadow-md rounded-md border">
            <h3 className="text-xl sm:text-2xl font-semibold">Alex T.</h3>
            <p className="text-sm text-gray-500 mb-4">
              Head of Marketing at Techno Solutions
            </p>
            <p className="text-gray-600">
              &quot;Their Email Marketing Engine service revitalized our
              customer engagement. Open rates increased by 40%, and we saw a 25%
              boost in repeat purchases.&quot;
            </p>
          </div>
        </div>
      </div>

      <section className="my-16 text-xl md:text-4xl md:px-16 text-center m-auto line w-[93%]">
        <p className="md:leading-[70px]">
          <span className="text-[#E74C3C] text-3xl md:text-6xl">
            Ready to leverage our growth-driving services?
          </span>
          <br />
          Reach out
          {`today and let's craft your success story together.`}
        </p>
        <button className="m-auto mt-10 group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base text-[#E74C3C] bg-white hover:text-white hover:bg-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
          Start Your Growth Journey
          <div className="p-2 bg-[#E74C3C] rounded-full text-white group-hover:text-[#E74C3C] group-hover:bg-white transition-all duration-300 ease-in-out">
            <ArrowRight />
          </div>
        </button>
      </section>

      <Footer />
    </>
  );
}
