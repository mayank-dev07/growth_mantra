"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
const slides = [
  {
    id: 1,
    company: "Ai Corporation. 2023",
    project: "Ai Wave - Ai Chatbot Mobile App",
  },
  {
    id: 2,
    company: "Tech Solutions. 2023",
    project: "Tech Guru - AI-Powered Platform",
  },
  {
    id: 3,
    company: "Future Innovations. 2023",
    project: "InnoX - Smart Home Solutions",
  },
  {
    id: 4,
    company: "Creative Minds. 2023",
    project: "CreatiX - Mobile Art App",
  },
  {
    id: 5,
    company: "Bright AI. 2023",
    project: "BrightBot - AI-powered Assistant",
  },
  {
    id: 6,
    company: "NextGen Tech. 2023",
    project: "NextGen Cloud Solutions",
  },
];
const content1 = [
  "We work with a limited number of companies at any given time",
  "Our selection process is thorough to ensure a perfect fit.",
  "We only partner with businesses where we can drive significant, measurable impact",
];

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-full w-full flex flex-col md:flex-row pt-40">
        <div className="w-full px-4 lg:px-10 xl:px-16 flex flex-col gap-4 justify-center  items-center ">
          <div className="w-full flex flex-col gap-4 p-1 px-2 lg:px-0 justify-center  items-center">
            <div className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold flex flex-col gap-4 text-center ">
              Thank You for
              <div className="flex items-center gap-2 justify-center">
                Choosing
                <div className="border-[#E74C3C] py-2 px-4 md:px-8 text-3xl sm:text-4xl md:text-4xl lg:text-6xl border-4 w-fit rounded-full text-[#E74C3C] font-bold shadow-2xl">
                  Growth
                </div>
              </div>
            </div>
            <div className="text-[#425466] text-base md:text-lg py-2 text-center sm:text-left">
              {`"You're One Step Closer to Transforming Your Business"`}
            </div>
          </div>
        </div>
      </div>
      {/* Thank you for reaching out to The Growth Mantra. We're excited about the possibility of partnering with you to drive exceptional growth for your business. */}

      <section className="my-16 text-xl md:text-4xl md:px-16 text-center m-auto line w-[93%]">
        <p className="md:leading-[60px]">
          <span>Thank you for reaching out to</span>
          <span className="text-[#E74C3C] ">&nbsp;The Growth Mantra.</span>
          <span>
            &nbsp;{" "}
            {`We're excited about the possibility of partnering with you to
            drive`}
          </span>
          <span className="text-[#E74C3C]">&nbsp;exceptional growth</span>
          <span>&nbsp;business.</span>
        </p>
      </section>
      <div className="h-full w-full flex flex-col md:flex-row pt-12 ">
        <div className="w-full px-4 lg:px-10 xl:px-16 flex flex-col gap-4 justify-center  items-center ">
          <div className="w-full flex flex-col gap-4 p-1 px-2 lg:px-0 justify-center  items-center">
            <div className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold flex flex-col gap-4 text-center ">
              What&nbsp;happens&nbsp;next
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 lg:flex-row lg:gap-8 justify-center items-center">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 items-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-64 h-64 flex flex-col justify-center text-center">
            <h2 className="text-xl font-semibold text-red-500">Review</h2>
            <p className="mt-4 text-gray-600 overflow-hidden">
              Our team of growth experts will carefully review your submission
              within the next 48 hours.
            </p>
          </div>
          <div className="flex mt-4">
            <Image
              src="/line.png"
              alt="Arrow"
              width={50}
              height={10}
              className="transform rotate-90 lg:rotate-0"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 items-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-64 h-64 flex flex-col justify-center text-center">
            <h2 className="text-xl font-semibold text-red-500">Evaluation</h2>
            <p className="mt-4 text-gray-600 overflow-hidden">
              {` We'll evaluate how our expertise aligns with your unique needs and
              growth potential.`}
            </p>
          </div>
          <div className="flex mt-4">
            <Image
              src="/line.png"
              alt="Arrow"
              width={50}
              height={10}
              className="transform rotate-90 lg:rotate-0"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 items-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-64 h-64 flex flex-col justify-center text-center">
            <h2 className="text-xl font-semibold text-red-500">Response</h2>
            <p className="mt-4 text-gray-600 overflow-hidden">
              {`If we determine there's a strong fit, we'll reach out to schedule
              your personalized strategy session.`}
            </p>
          </div>
        </div>
      </div>

      <div className="h-full w-full flex flex-col md:flex-row pt-12 ">
        <div className="w-full px-4 lg:px-10 xl:px-16 flex flex-col gap-4 justify-center  items-center ">
          <div className="w-full flex flex-col gap-4 p-1 px-2 lg:px-0 justify-center  items-center">
            <div className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold flex flex-col gap-4 text-center ">
              Committed to Your
              <div className="flex items-center gap-2 justify-center">
                Success
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* At The Growth Mantra, we believe in delivering unparalleled results. To maintain our high standards of service and ensure transformative outcomes */}
      <section className="my-10 text-xl md:text-3xl md:px-16 text-center m-auto line w-[93%]">
        <p className="md:leading-[60px]">
          <span>At The Growth Mantra, we believe in</span>
          <span className="text-[#E74C3C] ">
            &nbsp;delivering unparalleled results.
          </span>
          <span>To maintain our</span>
          <span className="text-[#E74C3C]">
            &nbsp;high standards of service
          </span>
          <span>&nbsp;and ensure transformative outcomes,</span>
        </p>
      </section>
      <div className="w-full flex justify-center items-center">
        <ul>
          {content1.map((item, index) => (
            <li
              key={index}
              className="md:px-10 px-3 py-3 flex text-sm md:text-xl gap-x-1 container"
            >
              <Image
                src={"/success.png"}
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="font-bold text-[#E74C3C]">
                <span className=" font-normal">{item}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      {/* This approach allows us to dedicate our full expertise and resources to each client's success. */}
      <section className="my-16 text-xl md:text-4xl md:px-16 text-center m-auto line w-[93%]">
        <p className="md:leading-[60px]">
          <span>This approach allows us to dedicate</span>
          <span className="text-[#E74C3C] ">
            &nbsp;our full expertise and resources
          </span>
          <span>to each</span>
          <span className="text-[#E74C3C]">&nbsp;{`client's success.`}</span>
        </p>
      </section>

      <div className="w-full flex justify-center ">
        <div className="group rounded-full w-fit px-4 py-2 flex text-sm md:text-base lg:text-xl font-bold bg-white text-[#E74C3C] hover:text-white hover:bg-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
          While You Wait, Explore Our Success Stories
          <div className="p-3 text-white rounded-full bg-[#E74C3C] group-hover:text-[#E74C3C] group-hover:bg-white transition-all duration-300 ease-in-out">
            <ArrowRight />
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <section className="my-16 text-xl md:text-4xl md:px-16 text-center m-auto line w-[93%]">
        <p className="md:leading-[60px]">
          <span> {`Discover how we've helped businesses like yours`}</span>
          <span className="text-[#E74C3C] ">
            &nbsp;achieve remarkable growth.
          </span>
          <span>To maintain our</span>
          <span className="text-[#E74C3C]">
            &nbsp;Our case studies showcase the power of our
          </span>
          <span>&nbsp;data-driven strategies and personalized approach.</span>
        </p>
      </section>
      <div className="w-full h-full bg-[#16213E] px-2 md:px-16 py-16  ">
        <div className="w-full pt-20 flex flex-col gap-2 pb-3">
          <p className="text-5xl lg:text-7xl text-white">Featured Case Study</p>
          <p className="text-2xl text-white py-6">
            Highlighting successful projects with links to full case studies
          </p>
        </div>
        <div className="rounded-3xl w-full bg-[#E74C3C] h-full ">
          <div className="w-full flex justify-center items-center">
            <div className="py-6 w-11/12 lg:w-10/12 xl:w-8/12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 xl:gap-6">
              <div className="w-full flex justify-center items-center">
                <p className="px-20  w-full py-3 flex justify-center items-center border-white border-[1px] bg-transparent text-white rounded-full font-bold transition-all hover:bg-white hover:text-[#E74C3C] text-sm md:text-base">
                  All&nbsp;Work
                </p>
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="px-20  w-full py-3 flex justify-center items-center border-white border-[1px] bg-transparent text-white rounded-full font-bold transition-all hover:bg-white hover:text-[#E74C3C] text-sm md:text-base">
                  UI/UX&nbsp;Design
                </p>
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="px-20  w-full py-3 flex justify-center items-center border-white border-[1px] bg-transparent text-white rounded-full font-bold transition-all hover:bg-white hover:text-[#E74C3C] text-sm md:text-base">
                  Digital&nbsp;Marketing
                </p>
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="px-20  w-full py-3 flex justify-center items-center border-white border-[1px] bg-transparent text-white rounded-full font-bold transition-all hover:bg-white hover:text-[#E74C3C] text-sm md:text-base">
                  Branding
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-start items-start h-full pb-5 p-8 px-2 md:px-12 lg:gap-8">
            <div className="w-full lg:w-1/3 h-full m-0 lg:m-4">
              <div className="h-full md:h-[400px] rounded-3xl grid grid-cols-1 content-between text-2xl ">
                <div className="w-full flex flex-col justify-start items-center lg:px-8 text-white">
                  Explore our latest articles and case studies to stay ahead in
                  your industry.
                  <div className="py-8 w-full flex justify-center md:justify-start items-center">
                    <div className="group rounded-full w-fit px-4 py-1.5 flex text-sm md:text-base lg:text-lg xl:text-xl hover:text-white hover:bg-[#E74C3C] bg-white text-[#E74C3C] border-[1px] shadow-xl tracking-wider justify-between items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out font-bold">
                      <p>Schedule&nbsp;a&nbsp;call</p>
                      <div className="p-2 group-hover:bg-white rounded-full text-white bg-[#E74C3C] group-hover:text-[#E74C3C]">
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-start lg:ml-8 items-center">
                  <div className="w-full lg:w-8/12 flex gap-x-20 justify-center lg:justify-start items-center">
                    <div className="w-20 h-20 flex justify-center items-center prev rounded-full bg-white">
                      <ChevronLeft size={30} />
                    </div>
                    <div className="w-20 h-20 flex justify-center items-center next rounded-full bg-white">
                      <ChevronRight size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full lg:w-2/3 gap-2 overflow-hidden">
              <Swiper
                spaceBetween={10}
                navigation={{
                  nextEl: ".next",
                  prevEl: ".prev",
                }}
                loop={true}
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="bg-white h-[400px] rounded-3xl p-6 text-sm md:text-base lg:text-lg flex flex-col justify-between">
                      <div>{slide.company}</div>
                      <div>{slide.project}</div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col md:flex-row pt-12 ">
        <div className="w-full px-4 lg:px-10 xl:px-16 flex flex-col gap-4 justify-center  items-center ">
          <div className="w-full flex flex-col gap-4 p-1 px-2 lg:px-0 justify-center  items-center">
            <div className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold flex flex-col gap-4 text-center ">
              Preparing&nbsp;for&nbsp;Your
              <div className="flex items-center gap-2 justify-center">
                Growth Journey
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-fulll flex justify-center items-center mt-10">
        <p className="text-[#E74C3C] container text-center text-xl md:text-2xl">
          {` We appreciate your interest in The Growth Mantra. Our commitment to
          exclusivity means that if selected, you'll receive our unpided
          attention and expertise. We look forward to the possibility of
          partnering with you on your growth journey`}
        </p>
      </div>
      <section className="flex px-3 md:px-10 py-12 mt-10 justify-around md:items-center flex-col md:flex-row bg-[#E74C3C] text-white">
        <div className=" space-y-2">
          <div className="text-xl md:text-2xl text-white text-center">
            {` In the meantime, if you have any urgent questions, please don't
            hesitate to reach out to us at`}
            <br />
            <span className="font-bold">contact@thegrowthmantra.com</span>
          </div>
        </div>
      </section>
      <div className="w-full h-full ">
        <section className="flex px-3 md:px-10 justify-around md:items-center flex-col md:flex-row">
          <section className="my-10 text-xl md:text-4xl md:px-16 text-center m-auto line w-[80%]">
            <p className="md:leading-[60px] tracking-wider">
              <span>Thank you for considering</span>
              <span className="text-[#E74C3C] ">
                &nbsp;The Growth Mantra as your growth partner.&nbsp;
              </span>
              <span>{`We're excited about the potential to
                drive extraordinary results for your business.`}</span>
            </p>
          </section>
        </section>
        <button className="m-auto mb-10 group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base text-[#E74C3C] bg-white hover:text-white hover:bg-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
          Back to Home
          <div className="p-2 bg-[#E74C3C] rounded-full text-white group-hover:text-[#E74C3C] group-hover:bg-white transition-all duration-300 ease-in-out">
            <ArrowRight />
          </div>
        </button>
      </div>
      <Footer />
    </>
  );
}
