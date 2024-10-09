import React from "react"; // Ensure React is imported
import Footer from "@/components/Footer/Footer2"; // Adjust the path as necessary
import Header from "@/components/Header/Header3"; // Adjust the path as necessary

const toolsData = [
  {
    headline: "Advertising & Lead Generation",
    subHeadline:
      "Maximize your reach and conversion potential with cutting-edge advertising platforms that deliver results.",
    tools: [
      "Google Ads, Facebook Ads, LinkedIn Ads, Twitter Ads, Microsoft Advertising, Amazon Ads: From search and display ads to social media advertising, we manage your PPC campaigns for optimized ROI.",
      "Taboola, Outbrain: Native advertising platforms that help you reach your target audience with content-based ads.",
      "AdRoll: Retargeting ads across platforms to re-engage lost customers.",
      "SharpSpring, HubSpot, Keap: Comprehensive lead generation and marketing automation for nurturing leads and converting them into customers.",
    ],
    valueProposition:
      "Whether through PPC on Google Ads or retargeting with AdRoll, our expertise ensures that every ad dollar is spent efficiently. We implement advanced strategies to target the right audience, drive traffic, and convert leads into sales.",
  },
  {
    headline: "CRM & Sales Automation",
    subHeadline:
      "Foster meaningful customer relationships and streamline your sales processes with advanced CRM systems.",
    tools: [
      "Salesforce, HubSpot CRM, Zoho CRM, Pipedrive, Freshsales, Nimble: Robust customer relationship management platforms for managing your sales pipeline and customer interactions.",
      "LinkedIn Sales Navigator: A powerful tool for B2B lead generation and sales outreach.",
      "Keap, SharpSpring: Comprehensive CRM and automation platforms for small to mid-sized businesses.",
    ],
    valueProposition:
      "Our team integrates and optimizes CRMs like Salesforce and HubSpot, ensuring that your customer interactions are seamless, automated, and tailored to enhance sales and retention. From B2B outreach via LinkedIn Sales Navigator to end-to-end automation through Keap, we have the tools to scale your customer management efforts.",
  },
  {
    headline: "Email Marketing",
    subHeadline:
      "Reach your customers with tailored email campaigns that convert, nurture, and retain.",
    tools: [
      "Mailchimp, ActiveCampaign, Klaviyo, ConvertKit, Constant Contact, Sendinblue, AWeber: Powerful platforms for creating segmented, automated, and data-driven email campaigns.",
      "Brevo (formerly Sendinblue): SMS and email automation for effective omnichannel marketing.",
      "Litmus: Email testing and optimization to ensure that every email looks perfect across devices and platforms.",
    ],
    valueProposition:
      "Our team uses advanced email marketing platforms like Klaviyo for eCommerce and ActiveCampaign for complex automation workflows. We build personalized journeys that increase engagement and maximize conversions, ensuring your message lands perfectly with every customer.",
  },
  {
    headline: "Social Media Management",
    subHeadline:
      "Stay on top of social engagement with intuitive tools that simplify management and boost impact.",
    tools: [
      "Hootsuite, Sprout Social, Buffer, CoSchedule, Planoly: Manage, schedule, and analyze social media content across platforms.",
      "Loomly: A user-friendly tool for managing and collaborating on social content.",
      "Onlypult: Instagram-first tool that helps with scheduling, publishing, and analytics on visual content.",
      "Canva: Easy-to-use design platform for creating social graphics that captivate.",
    ],
    valueProposition:
      "Whether scheduling posts on Hootsuite or creating stunning visuals on Canva, our team ensures that your social media strategy is well-coordinated and consistently engaging. We help you create, publish, and monitor posts across all platforms with ease.",
  },
  {
    headline: "SEO & Content Marketing",
    subHeadline:
      "Get found online with expert SEO and content marketing strategies that build your brand and drive organic traffic.",
    tools: [
      "Ahrefs, SEMrush, Moz, Ubersuggest, Screaming Frog: Comprehensive SEO platforms for keyword research, competitor analysis, site audits, and backlink tracking.",
      "Yoast SEO: Optimizing WordPress sites for search engines with easy-to-use tools.",
      "BuzzSumo: Content research and influencer identification for crafting viral content.",
    ],
    valueProposition:
      "With tools like SEMrush and Ahrefs, we ensure that your content ranks at the top of search results. From on-page SEO with Yoast to competitor analysis with Moz, we optimize your website and content to attract high-intent organic traffic.",
  },
  {
    headline: "Analytics & Reporting",
    subHeadline:
      "Measure your success with actionable insights derived from powerful analytics tools.",
    tools: [
      "Google Analytics, Hotjar, Mixpanel, Crazy Egg, Matomo: Track user behavior, heatmaps, and conversion paths to refine your marketing strategies.",
      "Looker Studio (formerly Google Data Studio): Data visualization platform to build custom reports that track KPIs and performance metrics.",
      "Oribi: AI-powered analytics platform for in-depth website performance monitoring.",
      "Kissmetrics: Advanced behavior analytics for tracking user activity across your website and apps.",
    ],
    valueProposition:
      "Our expertise in tools like Google Analytics and Hotjar enables us to track every interaction on your site, turning data into actionable insights. We build custom dashboards with Looker Studio, ensuring that you always have visibility into your marketing performance.",
  },
  {
    headline: "Ecommerce & Lead Conversion",
    subHeadline:
      "Drive more conversions and increase your revenue with optimized eCommerce and lead generation platforms.",
    tools: [
      "Shopify, BigCommerce, WooCommerce, Magento, PrestaShop: Leading eCommerce platforms for building and scaling online stores.",
      "Amazon Product Listings, A+ Content: Specializing in Amazon listing optimization to increase visibility and sales.",
      "Lead Forensics: B2B lead generation tool that identifies visitors to your site and turns them into leads.",
    ],
    valueProposition:
      "From optimizing your Amazon listings to building a store on Shopify, our team ensures that your eCommerce presence is well-managed, streamlined, and designed to convert visitors into loyal customers.",
  },
  {
    headline: "Automation & Integration",
    subHeadline:
      "Simplify processes and increase efficiency with our mastery of integration and automation platforms.",
    tools: [
      "Zapier, Integromat (Make), Tray.io, Workato: Automate workflows and connect various platforms to streamline operations.",
      "CleverTap, MoEngage: Lifecycle marketing platforms that enable personalized and automated user journeys across channels.",
    ],
    valueProposition:
      "Our team helps you scale efficiently by automating repetitive tasks and integrating your systems for seamless operations. Whether connecting platforms with Zapier or orchestrating customer journeys with MoEngage, we optimize every step of your workflow.",
  },
];

const ToolsAndTechnologyExpertise: React.FC = () => {
  return (
    <>
      <Header />
      <section className="px-3 md:px-10 py-12 mt-40">
        <h1 className="text-3xl font-bold text-[#16213E]">
          Master the Tools That Power Digital Growth
        </h1>
        <h2 className="mt-4 text-lg text-[#6B6E8E]">
          At The Growth Mantra, we combine deep expertise and best-in-class
          tools to drive exceptional growth for your business. Our experience
          spans across multiple platforms essential for executing successful
          marketing, sales, and growth strategies. Let us show you how we
          leverage these tools to deliver superior results.
        </h2>

        {toolsData.map((tool, index) => (
          <div key={index} className="my-8">
            <h3 className="font-semibold text-xl text-[#16213E]">
              {tool.headline}
            </h3>
            <h4 className="text-lg text-[#6B6E8E]">{tool.subHeadline}</h4>
            <ul className="list-disc ml-5 mt-2">
              {tool.tools.map((t, i) => (
                <li key={i} className="text-[#6B6E8E]">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[#6B6E8E]">
              <strong>Value Proposition:</strong> {tool.valueProposition}
            </p>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default ToolsAndTechnologyExpertise; // Ensure this is the default export
