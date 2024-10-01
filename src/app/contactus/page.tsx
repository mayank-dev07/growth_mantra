import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/Form/Contact";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header/Header3";
const content1: { [key: string]: string } = {
  "Strategy & Planning":
    "Transform your vision into a concrete roadmap for success",
  "User Persona Identification": "Understand your customers at a deeper level",
  "Go-to-Market Strategy":
    "Launch products or enter new markets with confidence",
  "Brand Solutions": "Build a brand that stands out in a crowded marketplace",
  "Growth Marketing":
    "Accelerate your growth with data-driven marketing strategies",
  "Product Growth":
    "Align your product development with market needs and user expectations",
};

export default function Contactus() {
  return (
    <>
      <Header />
      <section className="flex justify-between flex-col-reverse md:flex-row mt-44">
        <div className="md:pl-10 pl-2 text-3xl my-3 text-[#576D2C] md:text-7xl font-bold flex flex-col gap-4">
          <div className="flex items-center gap-2 flex-wrap ">
            <div className="text-nowrap">Unlock Your</div>
            <div className="border-[#576D2C] py-1 px-4  border-4 w-fit rounded-full text-[#576D2C] font-bold shadow-2xl">
              Growth
            </div>
          </div>
          <div className="text-nowrap">Potential with Expert</div>
          <div>Consulting</div>
        </div>

        <div>
          <div className="bg-[#576D2C] text-nowrap py-3 md:p-10 px-12 text-3xl font-black text-white md:rounded-l-3xl md:rounded-none rounded-r-3xl md:w-auto w-8/12">
            Contact Us
          </div>
        </div>
      </section>
      <section className="lg:px-10 px-2 md:px-6 sm:px-2 md:w-2/3 text-gray-600 my-5">
        Ready to transform your business trajectory? The Growth Mantra&apos;s
        consulting team is here to provide the strategic insights and actionable
        plans you need to achieve exponential growth.
      </section>
      <h1 className="md:px-10 px-3 my-8 text-3xl md:text-6xl font-bold text-[#576D2C]">
        Our Consulting Expertise
      </h1>

      <ul>
        {Object.keys(content1).map((key: string) => (
          <li
            key={key + "list"}
            className="md:px-10 px-3 py-3 flex text-sm md:text-xl gap-x-1 "
          >
            <Image src={"/success.svg"} alt="" width={20} height={20} />
            <p className="font-bold text-[#576D2C]">
              {key} :{" "}
              <span className="text-black font-normal">{content1[key]}</span>
            </p>
          </li>
        ))}
      </ul>

      <div className="w-full bg-[#576D2C] py-7 my-5 text-white text-sm md:text-4xl font-bold m-auto text-center">
        Whatever growth challenge you&apos;re facing, our expert
        <br /> consultants are ready to help you overcome it.
      </div>
      <section className="flex px-3 md:px-10 my-5 justify-around md:items-center flex-col md:flex-row">
        <div className="md:w-2/5 text-[1.3rem] my-1 md:text-8xl font-bold  text-[#576D2C]">
          Get in touch
        </div>
        <div className="md:w-2/5 space-y-2">
          <div className="text-lg md:text-2xl font-bold">
            Schedule a Strategy Session
          </div>
          <div className=" md:text-lg text-gray-700">
            Book a complimentary 45-minute strategy session with one of our
            senior consultants to discuss your business challenges and growth
            goals.
          </div>
          <div className="group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base  text-white bg-[#576D2C] hover:bg-white hover:text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
            Book Your Free Strategy Session
            <div className="p-2  bg-white rounded-full text-black group-hover:bg-[#576D2C] group-hover:text-white transition-all duration-300 ease-in-out">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="flex flex-col md:flex-row px-3 md:px-8 gap-8 my-16 justify-around md:items-center">
        {/* Adjusting heading size for responsiveness */}
        <div className="md:w-2/5 text-[2.5rem] sm:text-[3rem] md:text-8xl font-bold my-1 text-[#576D2C]">
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
          <div className="group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base text-white bg-[#576D2C] hover:bg-white hover:text-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
            Book Your Free Strategy Session
            <div className="p-2 bg-white rounded-full text-black group-hover:bg-[#576D2C] group-hover:text-white transition-all duration-300 ease-in-out">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-left mb-6 sm:mb-8 md:mb-10"
          style={{ color: "#576D2C" }}
        >
          What our clients say
        </h2>
        {/* Cards Section */}
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 md:space-x-8 space-y-6 sm:space-y-0">
          {/* Card 1 */}
          <div className="bg-white w-full sm:w-[300px] p-6 sm:p-8 shadow-md rounded-md border">
            <h3 className="text-xl sm:text-2xl font-semibold">Sarah J.</h3>
            <p className="text-sm text-gray-500 mb-4">CEO Of TechStart Inc.</p>
            <p className="text-gray-600">
              &quot;The Growth Mantra team transformed our approach to customer
              acquisition. Their insights and strategies helped us achieve a
              150% increase in qualified leads within just three months.&quot;
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white w-full sm:w-[300px] p-6 sm:p-8 shadow-md rounded-md border">
            <h3 className="text-xl sm:text-2xl font-semibold">Mark L.</h3>
            <p className="text-sm text-gray-500 mb-4">
              Founder Of ScaleUp Solutions
            </p>
            <p className="text-gray-600">
              &quot;Working with The Growth Mantra was a game-changer for our
              scaling strategy. Their holistic approach and data-driven insights
              gave us the roadmap we needed to double our revenue in a
              year.&quot;
            </p>
          </div>
        </div>
      </div>

      <section className="my-16 text-xl md:text-4xl md:px-16 text-center m-auto line">
        <p className="md:leading-[70px]">
          <span className="text-[#576D2C] text-3xl md:text-6xl">
            Ready to elevate your business growth?
          </span>
          <br />
          Reach out today and let&apos;s start crafting your success story
          together.
        </p>
        <button className=" m-auto mt-10 group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base  text-[#576D2C] bg-white hover:text-white hover:bg-[#576D2C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
          Start Your Growth Journey
          <div className="p-2  bg-[#576D2C] rounded-full text-white group-hover:text-[#576D2C] group-hover:bg-white transition-all duration-300 ease-in-out">
            <ArrowRight />
          </div>
        </button>
      </section>
      <Footer />
    </>
  );
}
