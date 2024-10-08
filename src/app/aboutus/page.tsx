import Footer from "@/components/Footer/Footer2";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header/Header3";
import Link from "next/link";
const content1: { [key: string]: string } = {
  "The Growth Mantra Frameworks":
    "Our approaches using different proprietary frameworks for solving complex growth challenges, ensuring a comprehensive and adaptable strategy for your business.",
  "Data-Driven Decision Making":
    "We don't guess – we analyze. Every strategy is rooted in robust data and market insights.",
  "Cross-Industry Expertise":
    "Our team brings diverse experience from tech startups to Fortune 500 companies, allowing us to apply best practices across sectors.",
  "Holistic Growth Approach":
    "We look at the big picture, integrating strategies across marketing, sales, product, and brand for cohesive growth.",
  "Continuous Innovation":
    "The market never stands still, and neither do we. We're always at the forefront of growth tactics and technologies.",
};

const content2: { [key: string]: string } = {
  Integrity:
    "We believe in transparent, ethical practices that build long-term partnerships.",
  Innovation: "We constantly push boundaries to find new ways to drive growth.",
  Impact:
    "We measure our success by the tangible results we deliver for our clients.",
  Collaboration:
    "We work closely with your team, integrating our expertise with your vision.",
};
export default function Contactus() {
  return (
    <>
      <Header />
      <section className="flex justify-between flex-col-reverse md:flex-row  mt-44">
        <div className="md:pl-10 pl-2 text-3xl my-3 text-black md:text-7xl font-bold flex flex-col gap-4">
          Catalysts for
          <div className="flex items-center gap-2 flex-wrap ">
            <div className="text-nowrap">Transformative</div>
            <div className="border-[#16213E] py-1 px-4  border-4 w-fit rounded-full text-[#16213E] font-bold shadow-2xl">
              Growth
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#16213E] text-nowrap py-3 md:p-10 px-12 text-3xl font-black text-white md:rounded-l-3xl md:rounded-none rounded-r-3xl md:w-auto w-8/12">
            About Us
          </div>
        </div>
      </section>
      <section className="lg:px-10 px-2 md:px-6 sm:px-2 md:w-2/3 text-gray-600 my-5">
        {` At The Growth Mantra, we're more than just consultants – we're your
        partners in navigating the complex landscape of business growth.`}
      </section>

      <section className="flex px-3 md:px-10 py-12 justify-around md:items-center flex-col md:flex-row">
        <div className="md:w-2/5 text-[1.3rem] my-1 md:text-8xl font-bold  text-[#16213E]">
          Our Story
        </div>
        <div className="md:w-2/5 space-y-2">
          <div className=" md:text-lg text-gray-700">
            Founded in 2018 by a team of seasoned entrepreneurs and growth
            marketers, The Growth Mantra was born out of a simple yet powerful
            idea: growth should be strategic, data-driven, and tailored to each
            unique business.
            <br />
            <br />
            {` We've experienced firsthand the challenges of scaling startups and
            the pitfalls of unfocused growth strategies. This deep understanding
            drives our passion for helping businesses like yours achieve
            sustainable, meaningful growth.`}
          </div>
        </div>
      </section>

      <section className="flex px-3 md:px-10 py-12 justify-around md:items-center flex-col md:flex-row bg-[#16213E] text-white">
        <div className="md:w-2/5 text-[1.3rem] my-1 md:text-8xl font-bold ">
          Our Mission
        </div>
        <div className="md:w-2/5 space-y-2">
          <div className=" md:text-lg text-white">
            To empower businesses with the strategies, tools, and insights
            needed to achieve exponential growth in an ever-evolving market
            landscape.
          </div>
        </div>
      </section>

      <section className="flex px-3 md:px-10 my-12 justify-around md:items-start flex-col md:flex-row">
        <div className="md:w-2/5 text-[1.3rem] my-1 md:text-8xl font-bold  text-[#16213E] ">
          What sets us apart
        </div>
        <div className="md:w-2/5 space-y-2">
          <ul>
            {Object.keys(content1).map((key: string) => (
              <li
                key={key + "list"}
                className=" py-3 flex text-sm md:text-xl gap-x-1 "
              >
                <p className="font-bold text-[#16213E]">
                  {key} :
                  <span className="text-black font-normal">
                    {content1[key]}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="flex px-3 md:px-10 py-12 justify-around md:items-center flex-col md:flex-row bg-[#16213E] text-white">
        <div className="md:w-2/5 text-[1.3rem] my-1 md:text-8xl font-bold ">
          Our Team
        </div>
        <div className="md:w-2/5 space-y-2">
          <div className=" md:text-lg text-white">
            {`Led by industry veterans with proven track records in scaling
            businesses, our team combines strategic thinking with hands-on
            execution skills. From growth scientists to creative strategists,
            we've assembled a diverse group of experts dedicated to your growth.`}
          </div>
        </div>
      </section>

      <section className="flex px-3 md:px-10 my-12 justify-around md:items-start flex-col md:flex-row">
        <div className="md:w-2/5 text-[1.3rem] my-1 md:text-8xl font-bold  text-[#16213E] ">
          Our Values
        </div>
        <div className="md:w-2/5 space-y-2">
          <ul>
            {Object.keys(content2).map((key: string) => (
              <li
                key={key + "list"}
                className=" py-3 flex text-sm md:text-xl gap-x-1 "
              >
                <p className="font-bold text-[#16213E]">
                  {key} :{" "}
                  <span className="text-black font-normal">
                    {content2[key]}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="w-full h-full bg-[#16213E]">
        <section className="flex px-3 md:px-10 py-12 justify-around md:items-center flex-col md:flex-row">
          <div className="md:w-2/5 text-[1.3rem] my-1 md:text-5xl font-bold  text-white">
            Ready to Unlock Your Growth Potential?
          </div>
          <div className="md:w-2/5 space-y-2">
            <div className=" md:text-lg text-white">
              {` Don't let growth challenges hold you back. Partner with The Growth
              Mantra and transform your business trajectory.`}
            </div>
          </div>
        </section>
        <Link
          href="/contactus"
          className="m-auto mb-10 group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base text-[#16213E] bg-white hover:text-white hover:bg-[#16213E] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out"
        >
          Start Your Growth Journey
          <div className="p-2 bg-[#16213E] rounded-full text-white group-hover:text-[#16213E] group-hover:bg-white transition-all duration-300 ease-in-out">
            <ArrowRight />
          </div>
        </Link>
      </div>

      <section className="my-16 text-xl md:text-5xl md:px-16 text-center m-auto line w-[93%]">
        <p className="md:leading-[70px]">
          <span className="text-[#16213E] ">At The Growth Mantra,</span>
          <span>{`we don't just predict the future of business growth`}</span>
          <span className="text-[#16213E]">{`– we help you create it`}</span>
        </p>
      </section>

      <Footer />
    </>
  );
}
