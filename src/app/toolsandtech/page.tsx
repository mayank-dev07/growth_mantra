import Footer from "@/components/Footer/Footer2";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header/Header3";
import Link from "next/link";

export default function Contactus() {
  return (
    <>
      <Header />
      <section className="flex justify-between flex-col-reverse md:flex-row  mt-44">
        <div className="md:pl-10 pl-2 text-3xl my-3 text-black sm:text-5xl lg:text-7xl font-bold flex flex-col gap-4">
          Master the tools that
          <div className="flex items-center gap-2 flex-wrap ">
            <div className="border-[#16213E] py-1 px-4  border-4 w-fit rounded-full text-[#16213E] font-bold shadow-2xl">
              Power
            </div>
            <div className="text-nowrap">Digital Growth</div>
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
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Google Ads, Facebook Ads, LinkedIn Ads, Twitter Ads, Microsoft
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
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Salesforce, HubSpot CRM, Zoho CRM, Pipedrive, Freshsales,
                Nimble: Robust customer relationship management platforms for
                managing your sales pipeline and customer interactions.
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                LinkedIn Sales Navigator: A powerful tool for B2B lead
                generation and sales outreach.
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Keap, SharpSpring: Comprehensive CRM and automation platforms
                for small to mid-sized businesses.
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
              nurture, and retain:
            </strong>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Mailchimp, ActiveCampaign, Klaviyo, ConvertKit, Constant
                Contact, Sendinblue, AWeber: Powerful platforms for creating
                segmented, automated, and data-driven email campaigns.
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Brevo (formerly Sendinblue): SMS and email automation for
                effective omnichannel marketing.
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
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Hootsuite, Sprout Social, Buffer, CoSchedule, Planoly: Manage,
                schedule, and analyze social media content across platforms.
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Loomly: A user-friendly tool for managing and collaborating on
                social content.
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Onlypult: Instagram-first tool that helps with scheduling,
                publishing, and analytics on visual content.
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Canva: Easy-to-use design platform for creating social graphics
                that captivate.
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
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Ahrefs, SEMrush, Moz, Ubersuggest, Screaming Frog: Comprehensive
                SEO platforms for keyword research, competitor analysis, site
                audits, and backlink tracking.
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Yoast SEO: Optimizing WordPress sites for search engines with
                easy-to-use tools.
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                BuzzSumo: Content research and influencer identification for
                crafting viral content.
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
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Google Analytics, Hotjar, Mixpanel, Crazy Egg, Matomo: Track
                user behavior, heatmaps, and conversion paths to refine your
                marketing strategies.
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Looker Studio (formerly Google Data Studio): Data visualization
                platform to build custom reports that track KPIs and performance
                metrics.
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Oribi: AI-powered analytics platform for in-depth website
                performance monitoring.
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Kissmetrics: Advanced behavior analytics for tracking user
                activity across your website and apps.
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
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Shopify, BigCommerce, WooCommerce, Magento, PrestaShop: Leading
                eCommerce platforms for building and scaling online stores.
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Amazon Product Listings, A+ Content: Specializing in Amazon
                listing optimization to increase visibility and sales.
              </li>
              <li className="flex items-center hover:text-[#16213E] transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Lead Forensics: B2B lead generation tool that identifies
                visitors to your site and turns them into leads.
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
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
                />
                Zapier, Integromat (Make), Tray.io, Workato: Automate workflows
                and connect various platforms to streamline operations.
              </li>
              <li className="flex items-center hover:text-gray-300 transition duration-300">
                <img
                  src="/SuccessContact.png"
                  alt="SuccessContact"
                  className="w-5 h-5 mr-2"
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
