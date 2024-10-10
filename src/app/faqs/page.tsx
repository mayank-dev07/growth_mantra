import React from "react";
import Footer from "@/components/Footer/Footer2";
import Header from "@/components/Header/Header3";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqsData = [
  {
    question: "1. What services does The Growth Mantra provide?",
    answer: (
      <>
        We offer a wide range of services to help businesses grow, including:
        <ul className="list-disc ml-5">
          <li>
            <strong>Customer Acquisition:</strong> Using targeted PPC (Pay-Per-Click) Advertising tools like Google Ads, Microsoft Advertising, Facebook Ads, Amazon Ads, Twitter Ads, LinkedIn Ads, and Quick Commerce Ads to attract and convert high-quality leads.
          </li>
          <li>
            <strong>Retention Strategies:</strong> Leveraging advanced CRM systems like Salesforce, HubSpot CRM, CleverTap, Zoho CRM, Pipedrive, Freshsales, Nimble, and Klaviyo to keep customers engaged and loyal.
          </li>
          <li>
            <strong>Email Marketing:</strong> Building successful email campaigns with platforms like Mailchimp, Constant Contact, Sendinblue, ConvertKit, ActiveCampaign, AWeber, and Klaviyo.
          </li>
          <li>
            <strong>SEO & Content Marketing:</strong> Utilizing top SEO tools like Ahrefs, Moz, SEMrush, Screaming Frog, Yoast SEO, and Ubersuggest to increase organic traffic and search engine rankings.
          </li>
          <li>
            <strong>Ecommerce Growth:</strong> Enhancing online store performance on platforms like Shopify, Magento, BigCommerce, WooCommerce, PrestaShop, and Squarespace Commerce, along with managing Amazon Product Listings and A+ Content.
          </li>
          <li>
            <strong>Analytics:</strong> Analyzing user behavior and optimizing campaigns with Google Analytics, Hotjar, Kissmetrics, Mixpanel, Crazy Egg, Matomo, CleverTap, and MoEngage for actionable insights.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "2. How does The Growth Mantra differ from other growth consulting firms?",
    answer: (
      <>
        Our unique PULSE and ELEVATE frameworks allow us to thoroughly analyze
        your business and market, uncover hidden opportunities, and execute
        data-driven strategies for sustained growth. We combine our deep
        expertise in industry-leading tools like Zapier, Integromat, IFTTT,
        PieSync, Tray.io, Workato, CleverTap, and MoEngage to integrate systems,
        automate workflows, and streamline operations. We don’t just provide
        advice – we actively execute, test, and refine our strategies for
        maximum impact.
      </>
    ),
  },
  {
    question: "3. What industries do you specialize in?",
    answer: (
      <>
        We work across a variety of industries, including but not limited to:
        <ul className="list-disc ml-5">
          <li>SaaS and Technology</li>
          <li>E-commerce</li>
          <li>Healthcare</li>
          <li>Financial Services</li>
          <li>Professional Services</li>
          <li>Retail and Consumer Goods</li>
        </ul>
        Our expertise in tools like Hootsuite, Buffer, Sprout Social, Later,
        Planoly, and CoSchedule allows us to tailor social media strategies for
        businesses in various sectors, ensuring maximum engagement and
        visibility.
      </>
    ),
  },
  {
    question: "4. How can you help improve our customer acquisition process?",
    answer: (
      <>
        We use a combination of PPC Advertising, SEO, and social media
        strategies to drive high-quality traffic to your site. With tools like
        Google Ads, Facebook Ads, Amazon Ads, and LinkedIn Ads, we create highly
        targeted campaigns that convert. Our expertise in Zapier, Integromat,
        and Tray.io also allows us to automate and integrate your acquisition
        channels for better efficiency.
      </>
    ),
  },
  {
    question: "5. What is your approach to customer retention?",
    answer: (
      <>
        Our RETAIN framework focuses on analyzing customer behavior and
        implementing personalized re-engagement campaigns. By leveraging CRM
        systems like Salesforce, HubSpot, and Klaviyo, we create tailored
        experiences that keep customers loyal and boost Customer Lifetime Value
        (CLV). Additionally, we use CleverTap and MoEngage to power personalized
        push notifications and customer journey optimizations.
      </>
    ),
  },
  {
    question: "6. Do you offer custom growth strategies for startups?",
    answer: (
      <>
        Yes, our ELEVATE framework is designed specifically for startups. We
        evaluate your market position, help you refine your business goals, and
        craft tailored growth strategies using tools like Shopify, Magento, and
        BigCommerce for e-commerce startups, and Eventbrite, Whova, and Hopin
        for event-based businesses.
      </>
    ),
  },
  {
    question: "7. What is conversion rate optimization (CRO) and how can it help my business?",
    answer: (
      <>
        CRO is the process of increasing the percentage of website visitors who
        take a desired action, such as making a purchase or signing up for a
        newsletter. Using tools like Hotjar, Mixpanel, Crazy Egg, and Google
        Analytics, we analyze user behavior, optimize the user journey, and
        conduct A/B testing to increase conversions. Our CONVERT framework
        ensures that every step of your funnel is optimized for results.
      </>
    ),
  },
  {
    question: "8. How does your Go-to-Market (GTM) strategy work?",
    answer: (
      <>
        We develop comprehensive go-to-market strategies that ensure the success
        of new product launches. With the LAUNCH protocol, we perform in-depth
        market research, analyze competition, and create targeted campaigns
        using tools like Ahrefs, SEMrush, and Moz for SEO, combined with
        Eventbrite, Splash, and Cvent for event-driven campaigns.
      </>
    ),
  },
  {
    question: "9. Can you help us with SEO and content marketing?",
    answer: (
      <>
        Absolutely. We specialize in SEO Strategy & Optimization using top tools
        like Ahrefs, SEMrush, Screaming Frog, and Yoast SEO to help your website
        rank higher on search engines and attract more organic traffic. For
        content marketing, we use platforms like WordPress, Medium, and BuzzSumo
        to create and distribute content that resonates with your audience and
        builds brand authority.
      </>
    ),
  },
  {
    question: "10. How can I track the progress of the strategies you implement?",
    answer: (
      <>
        We provide comprehensive reporting using tools like Google Analytics,
        Mixpanel, and Hotjar to track user behavior and campaign performance.
        For CRM and retention metrics, we rely on platforms like Salesforce,
        HubSpot, and CleverTap to continuously monitor and improve engagement.
        Our team will regularly update you on key performance indicators (KPIs)
        and suggest optimizations based on real-time data.
      </>
    ),
  },
  {
    question: "11. What is the typical process for working with The Growth Mantra?",
    answer: (
      <>
        Our process starts with an initial consultation, during which we assess
        your business needs. We then apply our PULSE or ELEVATE frameworks to
        craft a tailored growth strategy using the right combination of tools,
        such as Hootsuite for social media management, Mailchimp for email
        marketing, or CJ Affiliate for affiliate marketing. Regular performance
        reviews and optimizations ensure that the strategy evolves with your
        business.
      </>
    ),
  },
  {
    question: "12. How can I get started?",
    answer: (
      <>
        You can reach out to us through our Contact Us page to schedule a free
        strategy session. During this session, we will diagnose your growth
        challenges and explore how our expertise in tools like Zapier, HubSpot
        CRM, Google Ads, and Mailchimp can help you achieve your goals.
      </>
    ),
  },
  {
    question: "13. What size companies do you typically work with?",
    answer: (
      <>
        We work with businesses of all sizes, from startups aiming to establish
        their market presence to larger enterprises looking to scale and
        optimize their existing strategies. Our experience spans across
        platforms like Shopify, Magento, and WooCommerce for e-commerce, as well
        as Airtable and SurveyMonkey for offline marketing.
      </>
    ),
  },
  {
    question: "14. What is the cost of your services?",
    answer: (
      <>
        Our services are customized based on your specific needs. After our
        initial consultation, we will provide a tailored proposal detailing the
        scope of work and associated costs. Our pricing depends on the
        complexity and scale of the project, including the integration of tools
        like Salesforce, Google Analytics, and Zoho CRM.
      </>
    ),
  },
  {
    question: "15. How long does it take to see results?",
    answer: (
      <>
        The timeline for results varies depending on the service and current
        state of your business. For instance, PPC campaigns with Google Ads or
        LinkedIn Ads can yield results within weeks, while SEO strategies with
        Ahrefs or SEMrush might take a few months to fully develop. Our team
        will provide realistic expectations based on your goals.
      </>
    ),
  },
];


const FAQs: React.FC = () => {
  return (
    <>
      <Header />
      <section className="px-3 md:px-10 py-12 mt-40">
        <h1 className="text-3xl font-bold text-[#16213E] text-center mb-8">
          Frequently Asked Questions (FAQs)
        </h1>

        <div className="text-lg lg:text-xl flex flex-col w-full shadow-2xl rounded-2xl px-6 py-8 gap-6 bg-white">
          <Accordion type="single" collapsible>
            {faqsData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <h2 className="leading-normal text-[#16213e] font-bold text-base md:text-lg text-left">
                    {faq.question}
                  </h2>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-base lg:text-lg text-gray-700">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <Footer />
    </>
  );
};


export default FAQs;
