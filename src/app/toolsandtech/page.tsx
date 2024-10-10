import Footer from "@/components/Footer/Footer2";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header/Header3";
import Link from "next/link";
import Trending from "@/components/Trending/TrendingCaseStudy";
import Image from "next/image";

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

export default function Contactus() {
  return (
    <>
      <Header />
      <section className="flex justify-between flex-col-reverse md:flex-row  mt-44">
        <div className="md:pl-10 pl-2 text-3xl my-3 text-black sm:text-5xl lg:text-7xl font-bold flex flex-col gap-4">
          Master the tools that
          <div className="flex items-center gap-2 flex-wrap ">
            Power Digital
            <div className="border-[#16213E] py-1 px-4  border-4 w-fit rounded-full text-[#16213E] font-bold shadow-2xl">
              Growth
            </div>
          </div>
        </div>

        <div>
          <div className="bg-[#16213E] text-nowrap py-3 md:p-10 px-12 text-3xl font-black text-white md:rounded-l-3xl md:rounded-none rounded-r-3xl md:w-auto w-fit">
            Tools and Tech
          </div>
        </div>
      </section>
      <section className="lg:px-10 px-2 md:px-6 sm:px-2 md:w-2/3 text-gray-600 my-5">
        {` At The Growth Mantra, we combine deep expertise and best-in-class tools to drive exceptional growth for your business. Our experience spans across multiple platforms essential for executing successful marketing, sales, and growth strategies. Let us show you how we leverage these tools to deliver superior results.`}
      </section>

      <section className="flex flex-col md:flex-row justify-around items-start md:items-center px-5 md:px-10 py-12 bg-white rounded-lg shadow-lg">
        <div className="md:w-2/5 text-[1.5rem] md:text-6xl font-bold text-[#16213E] mb-4 md:mb-0">
          Advertising & Lead Generation
        </div>
        <div className="md:w-2/5 space-y-4 text-gray-700">
          <div className="text-lg">
            <strong>
              Maximize your reach and conversion potential with cutting-edge
              advertising platforms that deliver results:
            </strong>
            <ul className="list-disc mt-2 space-y-2">
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Google Ads, Meta Ads, LinkedIn Ads, Twitter Ads, Microsoft
                Advertising, Amazon Ads
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Taboola, Outbrain
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                AdRoll
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                SharpSpring, HubSpot, Keap
              </li>
            </ul>
            <br />
            <strong>Value Proposition:</strong> Whether through PPC on Google
            Ads or retargeting with AdRoll, our expertise ensures that every ad
            dollar is spent efficiently. We implement advanced strategies to
            target the right audience, drive traffic, and convert leads into
            sales.
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around items-start md:items-center px-5 md:px-10 py-12 bg-[#16213E] rounded-lg shadow-lg">
        <div className="md:w-2/5 text-[1.5rem] md:text-6xl font-bold text-white mb-4 md:mb-0">
          CRM & Sales Automation
        </div>
        <div className="md:w-2/5 space-y-4 text-white">
          <div className="text-lg">
            <strong className="text-white">
              Foster meaningful customer relationships and streamline your sales
              processes with advanced CRM systems:
            </strong>
            <ul className="list-disc mt-2 space-y-2">
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2 invert"
                />
                Salesforce, HubSpot CRM, Zoho CRM, Pipedrive, Freshsales, Nimble
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2 invert"
                />
                LinkedIn Sales Navigator
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2 invert"
                />
                Keap, SharpSpring
              </li>
            </ul>
            <br />
            <strong className="text-white">Value Proposition:</strong> Our team
            integrates and optimizes CRMs like Salesforce and HubSpot, ensuring
            that your customer interactions are seamless, automated, and
            tailored to enhance sales and retention. From B2B outreach via
            LinkedIn Sales Navigator to end-to-end automation through Keap, we
            have the tools to scale your customer management efforts.
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around items-start md:items-center px-5 md:px-10 py-12 bg-white rounded-lg shadow-lg">
        <div className="md:w-2/5 text-[1.5rem] md:text-6xl font-bold text-[#16213E] mb-4 md:mb-0">
          Email Marketing
        </div>
        <div className="md:w-2/5 space-y-4 text-gray-700">
          <div className="text-lg">
            <strong>
              Reach your customers with tailored email campaigns that convert,
              nurture, and retain
            </strong>
            <ul className="list-disc mt-2 space-y-2">
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Mailchimp, ActiveCampaign, Klaviyo, ConvertKit, Constant
                Contact, Sendinblue, AWeber
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Brevo (formerly Sendinblue)
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Litmus: Email testing and optimization to ensure that every
                email looks perfect across devices and platforms.
              </li>
            </ul>
            <br />
            <strong>Value Proposition:</strong> Our team uses advanced email
            marketing platforms like Klaviyo for eCommerce and ActiveCampaign
            for complex automation workflows. We build personalized journeys
            that increase engagement and maximize conversions, ensuring your
            message lands perfectly with every customer.
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around items-start md:items-center px-5 md:px-10 py-12 bg-[#16213E] rounded-lg shadow-lg">
        <div className="md:w-2/5 text-[1.5rem] md:text-6xl font-bold text-white mb-4 md:mb-0">
          Social Media Management
        </div>
        <div className="md:w-2/5 space-y-4 text-white">
          <div className="text-lg">
            <strong>
              Stay on top of social engagement with intuitive tools that
              simplify management and boost impact:
            </strong>
            <ul className="list-disc mt-2 space-y-2">
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2 invert"
                />
                Hootsuite, Sprout Social, Buffer, CoSchedule, Planoly
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2 invert"
                />
                Loomly
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2 invert"
                />
                Onlypult
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2 invert"
                />
                Canva
              </li>
            </ul>
            <br />
            <strong>Value Proposition:</strong> Whether scheduling posts on
            Hootsuite or creating stunning visuals on Canva, our team ensures
            that your social media strategy is well-coordinated and consistently
            engaging. We help you create, publish, and monitor posts across all
            platforms with ease.
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around items-start md:items-center px-5 md:px-10 py-12 bg-white rounded-lg shadow-lg">
        <div className="md:w-2/5 text-[1.5rem] md:text-6xl font-bold text-[#16213E] mb-4 md:mb-0">
          SEO & Content Marketing
        </div>
        <div className="md:w-2/5 space-y-4 text-gray-700">
          <div className="text-lg">
            <strong>
              Get found online with expert SEO and content marketing strategies
              that build your brand and drive organic traffic:
            </strong>
            <ul className="list-disc mt-2 space-y-2">
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Ahrefs, SEMrush, Moz, Ubersuggest, Screaming Frog
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Yoast SEO
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                BuzzSumo
              </li>
            </ul>
            <br />
            <strong>Value Proposition:</strong> With tools like SEMrush and
            Ahrefs, we ensure that your content ranks at the top of search
            results. From on-page SEO with Yoast to competitor analysis with
            Moz, we optimize your website and content to attract high-intent
            organic traffic.
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around items-start md:items-center px-5 md:px-10 py-12 bg-[#16213E] rounded-lg shadow-lg">
        <div className="md:w-2/5 text-[1.5rem] md:text-6xl font-bold text-white mb-4 md:mb-0">
          Analytics & Reporting
        </div>
        <div className="md:w-2/5 space-y-4 text-white">
          <div className="text-lg">
            <strong>
              Measure your success with actionable insights derived from
              powerful analytics tools:
            </strong>
            <ul className="list-disc mt-2 space-y-2">
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2 invert"
                />
                Google Analytics, Hotjar, Mixpanel, Crazy Egg, Matomo
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2 invert"
                />
                Looker Studio (formerly Google Data Studio)
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2 invert"
                />
                Oribi
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2 invert"
                />
                Kissmetrics
              </li>
            </ul>
            <br />
            <strong>Value Proposition:</strong> Our expertise in tools like
            Google Analytics and Hotjar enables us to track every interaction on
            your site, turning data into actionable insights. We build custom
            dashboards with Looker Studio, ensuring that you always have
            visibility into your marketing performance.
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-around items-start md:items-center px-5 md:px-10 py-12 bg-white rounded-lg shadow-lg">
        <div className="md:w-2/5 text-[1.5rem] md:text-6xl font-bold text-[#16213E] mb-4 md:mb-0">
          Ecommerce & Lead Conversion
        </div>
        <div className="md:w-2/5 space-y-4 text-gray-700">
          <div className="text-lg">
            <strong>
              Drive more conversions and increase your revenue with optimized
              eCommerce and lead generation platforms:
            </strong>
            <ul className="list-disc mt-2 space-y-2">
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Shopify, BigCommerce, WooCommerce, Magento, PrestaShop
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Amazon Product Listings, A+ Content
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Lead Forensics
              </li>
            </ul>
            <br />
            <strong>Value Proposition:</strong> From optimizing your Amazon
            listings to building a store on Shopify, our team ensures that your
            eCommerce presence is well-managed, streamlined, and designed to
            convert visitors into loyal customers.
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-around items-start md:items-center px-5 md:px-10 py-12 bg-[#16213E] rounded-lg shadow-lg">
        <div className="md:w-2/5 text-[1.5rem] md:text-6xl font-bold text-white mb-4 md:mb-0">
          Automation & Integration
        </div>
        <div className="md:w-2/5 space-y-4 text-white">
          <div className="text-lg">
            <strong>
              Simplify processes and increase efficiency with our mastery of
              integration and automation platforms:
            </strong>
            <ul className="list-disc mt-2 space-y-2">
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2 invert"
                />
                Zapier, Integromat (Make), Tray.io, Workato
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2 invert"
                />
                CleverTap, MoEngage: Lifecycle marketing platforms that enable
                personalized and automated user journeys across channels.
              </li>
            </ul>
            <br />
            <strong>Value Proposition:</strong> Our team helps you scale
            efficiently by automating repetitive tasks and integrating your
            systems for seamless operations. Whether connecting platforms with
            Zapier or orchestrating customer journeys with MoEngage, we optimize
            every step of your workflow.
          </div>
        </div>
      </section>

      <div className="w-full h-full bg-white">
        <section className="flex flex-col md:flex-row justify-around md:items-center px-3 md:px-10 py-12">
          <div className="md:w-2/5 text-[1.3rem] my-1 md:text-5xl font-bold text-[#16213E]">
            Ready to Scale with Confidence?
          </div>
          <div className="md:w-2/5 space-y-2">
            <div className="md:text-lg text-gray-700">
              {`With our deep expertise in the industry's most advanced tools, you can trust that we will deliver tailored, results-driven strategies that propel your business forward.`}
            </div>
          </div>
        </section>
        <Link
          href="/contactus"
          className="m-auto mb-10 group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base text-white bg-[#16213E] hover:bg-white hover:text-[#16213E] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out"
        >
          Schedule a Call
          <div className="p-2 bg-white rounded-full text-[#16213E] group-hover:bg-[#16213E] group-hover:text-white transition-all duration-300 ease-in-out">
            <ArrowRight />
          </div>
        </Link>
      </div>

      <div className="h-full w-full flex flex-col md:flex-row pt-12 ">
        <div className="w-full px-4 lg:px-10 xl:px-16 flex flex-col gap-4 justify-center  items-center ">
          <div className="w-full flex flex-col gap-4 p-1 px-2 lg:px-0 justify-center  items-center">
            <div className="text-3xl md:text-5xl font-bold flex flex-col gap-4 text-center tracking-widest">
              Our Impact in Numbers
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-5 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-2 lg:gap-y-8 sm:px-6 lg:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white  p-4 sm:p-6  flex flex-col h-full shadow-lg" // Make sure to set height to full
            >
              <div className="flex-grow">
                <h3 className="text-xl md:text-4xl text-[#16213E] font-bold text-center py-3">
                  {service.title}
                </h3>
                <p className="text-base md:pt-2 text-[#8A8A8A] text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full bg-[#16213E]">
        <section className="flex px-3 md:px-10 py-6 justify-center items-center flex-col md:flex-row">
          <div className="md:w-full text-[1.3rem] my-1 md:text-5xl font-bold  text-white flex flex-col justify-center items-center text-center">
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
              <div className="text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-start">
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
              <div className="text-lg md:text-2xl lg:text-3xl text-[#16213E]  font-bold text-center md:text-start">
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
