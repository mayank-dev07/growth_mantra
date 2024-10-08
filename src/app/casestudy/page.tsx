"use client";
import Footer from "@/components/Footer/Footer2";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs3";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header/Headercasestudy";
import { useEffect, useState } from "react";
import Link from "next/link";
import Trending from "@/components/Trending/TrendingCaseStudy";

const services = [
  {
    title: "$300M+",
    description: "Additional revenue generated for our clients.",
  },
  {
    title: "500M+",
    description: "New app downloads through our acquisition strategies.",
  },
  {
    title: "300%",
    description: "Average ROI across all projects",
  },
  {
    title: "5M+",
    description: "New leads generated through our acquisition strategies.",
  },
  {
    title: "3M+",
    description: "transactions generated through our retention strategies.",
  },
  {
    title: "65%",
    description: "Additional revenue generated for our clients.",
  },
  {
    title: "40%",
    description: "Additional revenue generated for our clients.",
  },
  {
    title: "85%",
    description: "Additional revenue generated for our clients.",
  },
];

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <div className="h-full w-full flex flex-col md:flex-row pt-28">
        <div
          className={`w-full  h-full flex flex-col ${scrollPosition > 50 ? "pt-24" : "lg:justify-start"
            }`}
        >
          <Image
            src="/Frame.png"
            alt="frame"
            width={300}
            height={300}
            className={`z-50 transition-all duration-500 ease-in-out mix-blend-normal ${scrollPosition > 50
                ? "fixed top-[64px] lg:top-[52px] lg:left-10 transform -translate-x-15 w-[35%] md:!w-[10%] "
                : "relative"
              }`}
          />
          <div className="px-4 lg:px-10 xl:px-16 flex flex-col gap-4 justify-center  items-center sm:items-start">
            <div className="w-fit p-4 text-base lg:text-lg font-bold tracking-wider text-[#16213E] bg-[#FFEDEB] rounded-xl">
              👋 Welcome to The Growth Mantra/ Case Study
            </div>
            <div className="w-full flex flex-col gap-4 p-1 px-2 lg:px-0 justify-center  items-center ">
              <div className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold flex flex-col gap-4 text-center sm:text-left">
                Real Result Real
                <div className="flex items-center gap-2 justify-center ">
                  <div className="border-[#16213E] py-2 px-4 md:px-8 text-3xl sm:text-4xl md:text-4xl lg:text-6xl border-4 w-fit rounded-full text-[#16213E] font-bold shadow-2xl">
                    Growth
                  </div>
                </div>
              </div>
              <div className="text-[#425466] text-base md:text-lg py-2 text-center sm:text-left">
                Discover how The Growth Mantra transforms businesses across
                industries
              </div>
              <div className="w-full flex justify-center ">
                <Link href="/contactus" passHref>
                  <div className="group rounded-full w-fit px-4 py-2 flex text-sm md:text-base lg:text-xl font-bold text-white bg-[#16213E] hover:bg-white hover:text-[#16213E] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
                    Explore Our Case Studies
                    <div className="p-3 bg-white rounded-full text-[#16213E] group-hover:bg-[#16213E] group-hover:text-white transition-all duration-300 ease-in-out">
                      <ArrowRight />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-12 gap-8">
        <div className="w-full h-full flex flex-col justify-center items-center text-[#B2B7BE]">
          SOME OF OUR TRUSTED CLIENTS
        </div>
        <div className="w-full flex justify-center items-center gap-4 lg:gap-12 flex-wrap">
          <Image src="/sponser1.png" alt="sponser" width={110} height={110} />
          <Image src="/sponser2.png" alt="sponser" width={110} height={110} />
          <Image src="/sponser3.png" alt="sponser" width={110} height={110} />
          <Image src="/sponser4.png" alt="sponser" width={110} height={110} />
          <Image src="/sponser5.png" alt="sponser" width={110} height={110} />
          <Image src="/sponser6.png" alt="sponser" width={110} height={110} />
        </div>
      </div>
      {/* Thank you for reaching out to The Growth Mantra. We're excited about the possibility of partnering with you to drive exceptional growth for your business. */}
      /
      {/* <div className="w-full flex flex-col gap-4 lg:flex-row lg:gap-8 justify-center items-center px-12 py-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 items-center">
          <div className="bg-white shadow-lg rounded-lg p-6  flex flex-col justify-center text-start">
            <h2 className="text-xl font-semibold text-black">Sarah Chen</h2>
            <span className="text-base text-gray-300">CMO</span>
            <p className="mt-4 text-gray-600 overflow-hidden">
              {`"The Growth Mantra didn't just meet our expectations – they
              shattered them. Their data-driven approach and relentless focus on
              results transformed our acquisition strategy. We're now seeing a
              consistent 40% month-over-month growth in new customers."`}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 items-center">
          <div className="bg-white shadow-lg rounded-lg p-6  flex flex-col justify-center text-start">
            <h2 className="text-xl font-semibold text-black">
              Michael Rodriguez
            </h2>
            <span className="text-base text-gray-300">Founder</span>
            <p className="mt-4 text-gray-600 overflow-hidden">
              {`"Working with The Growth Mantra was a game-changer for our e-commerce business. Their CRO expertise helped us optimize our funnel, resulting in a 75% increase in conversion rates. They're not just service providers; they're true growth partners."`}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 items-center">
          <div className="bg-white shadow-lg rounded-lg p-6  flex flex-col justify-center text-start">
            <h2 className="text-xl font-semibold text-black">
              Amanda Thompson
            </h2>
            <span className="text-base text-gray-300">
              Head of Customer Success
            </span>
            <p className="mt-4 text-gray-600 overflow-hidden">
              {`"The team at The Growth Mantra has an uncanny ability to identify and capitalize on growth opportunities. Their retention strategies helped us reduce churn by 50% and significantly boost customer lifetime value. I can't recommend them enough!"`}
            </p>
          </div>
        </div>
      </div> */}
      <div className="h-full w-full flex flex-col md:flex-row pt-12 ">
        <div className="w-full px-4 lg:px-10 xl:px-16 flex flex-col gap-4 justify-center  items-center ">
          <div className="w-full flex flex-col gap-4 p-1 px-2 lg:px-0 justify-center  items-center">
            <div className="text-2xl md:text-3xl font-semibold flex flex-col gap-4 text-center tracking-widest">
              Our Impact in Numbers
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-5 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-y-8 sm:px-6 lg:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white  p-4 sm:p-6  flex flex-col h-full" // Make sure to set height to full
            >
              <div className="flex-grow">
                <h3 className="text-xl md:text-4xl text-[#16213E] font-bold text-center py-3">
                  {service.title}
                </h3>
                <p className="text-base pt-2 text-[#8A8A8A] text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full bg-[#16213E]">
        <section className="flex px-3 md:px-10 py-6 justify-center items-center flex-col md:flex-row">
          <div className="md:w-full text-[1.3rem] my-1 md:text-5xl font-bold  text-white flex flex-col justify-center items-center">
            Ready to Be Our Next Success Story?
            <p className="text-lg md:text-xl py-3 font-normal tracking-wide">
              {`Let's unlock your business's full potential together`}
            </p>
          </div>
        </section>
        <button className="m-auto mb-10 group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base text-[#16213E] bg-white hover:text-white hover:bg-[#16213E] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
          Schedule a call
          <div className="p-2 bg-[#16213E] rounded-full text-white group-hover:text-[#16213E] group-hover:bg-white transition-all duration-300 ease-in-out">
            <ArrowRight />
          </div>
        </button>
      </div>
      <WhyChooseUs />
      <div className="w-full h-full bg-[#16213E] px-2 md:px-16 py-16  ">
        <div className="w-full h-full bg-white flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full flex justify-center lg:justify-start items-center px-4 lg:pe-12">
            <Image src="/case.png" alt="casestudy" width={350} height={350} />
          </div>
          <div className="w-full lg:w-[120%] flex flex-col justify-start items-center text-[#16213E] pt-5 px-6 ">
            <p
              className="tracking-widest text-xl lg:text-2xl xl:text-3xl"
              style={{ lineHeight: "3rem" }}
            >
              Effective Growth Strategies can increase revenue by up to
              <span className="text-2xl lg:text-4xl xl:text-5xl font-bold">
                &nbsp;33%&nbsp;
              </span>
              in the first{" "}
              <span className="text-2xl lg:text-4xl xl:text-5xl font-bold">
                &nbsp;SIX&nbsp;
              </span>{" "}
              months.
            </p>
            <div className="py-4 w-full flex justify-center items-center">
              <Link href="/contactus">
                <div className="group rounded-full w-fit px-5 py-2 flex text-sm md:text-base lg:text-lg xl:text-xl hover:text-white hover:bg-[#16213E] bg-white text-[#16213E] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                  Schedule&nbsp;a&nbsp;Call
                  <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#16213E] group-hover:text-[#16213E]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full px-4 lg:px-28 py-16">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="w-full lg:w-1/2 bg-[#16213E] text-white rounded-[15px] shadow-2xl ">
            <div className="px-4 md:px-10 pt-5 md:pt-12 ">
              <div className="text-lg md:text-2xl lg:text-3xl">
                Diagnose&nbsp;Your
                <br />
                Growth&nbsp;Blockers
              </div>
              <div className="py-6 text-base md:text-lg lg:text-xl  flex justify-center items-start">
                Uncover the hidden obstacles holding your startup back. Our
                expert consultants will analyze your business, identify critical
                bottlenecks, and provide a custom action plan to skyrocket your
                growth. Limited offer: Claim your complimentary strategy session
                (Valued at $400) now
              </div>
            </div>

            <div className="md:px-12 py-8 w-full flex justify-center md:justify-start items-center">
              <Link href="/contactus" passHref>
                <div className="group rounded-full w-fit px-2.5 lg:px-4 py-1.5 flex text-sm md:text-base hover:text-white hover:bg-[#16213E] bg-white text-[#16213E] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                  <p>Reveal&nbsp;Your&nbsp;Growth&nbsp;Potential</p>
                  <div className="p-2 lg:p-3 group-hover:bg-white rounded-full text-white bg-[#16213E] group-hover:text-[#16213E]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 rounded-[15px] shadow-2xl ">
            <div className="px-4 md:px-10 pt-5 md:pt-12 ">
              <div className="text-lg md:text-2xl lg:text-3xl text-[#16213E]">
                Partner&nbsp;with&nbsp;Proven
                <br />
                Growth&nbsp;Catalysts
              </div>
              <div className="py-6 text-base md:text-lg lg:text-xl  flex justify-center items-start">
                Looking for more than just advice? Our team of seasoned
                consultants doesn&apos;t just strategize - we execute. From
                refining your go-to-market strategy to optimizing your product
                for scalability, we&apos;re here to drive tangible results and
                exponential growth for your startup.
              </div>
            </div>

            <div className="md:px-12 py-8 w-full flex justify-center md:justify-start items-center">
              <Link href="/contactus" passHref>
                <div className="group rounded-full w-fit px-4 lg:px-4 py-1.5 flex text-sm md:text-base hover:bg-white hover:text-[#16213E] text-white bg-[#16213E] border-[1px] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                  <p>Amplify&nbsp;Your&nbsp;Growth</p>
                  <div className="p-2 lg:p-3 group-hover:text-white rounded-full bg-white text-black group-hover:bg-[#16213E]">
                    <ArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Trending />
      <Footer />
    </>
  );
}
