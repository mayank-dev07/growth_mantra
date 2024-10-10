import React from "react"; // Ensure React is imported
import Footer from "@/components/Footer/Footer2"; // Adjust the path as necessary
import Header from "@/components/Header/Header3"; // Adjust the path as necessary

const termsData = [
  {
    title: "Last Updated: 9th Oct 2024",
    content: (
      <>
        Welcome to The Growth Mantra (“we,” “our,” or “us”). By accessing or
        using our website located at [Insert Website URL] (the “Site”), or by
        engaging our services, you agree to comply with and be bound by the
        following terms and conditions (the “Terms”). Please review the
        following carefully. If you do not agree to these Terms, you should not
        use the Site or our services.
      </>
    ),
  },
  {
    title: "1. Acceptance of Terms",
    content: (
      <>
        By using this Site or our services, you agree to be bound by these
        Terms, as well as any additional terms, guidelines, and policies
        referenced herein or available by hyperlink. These Terms apply to all
        users of the Site, including without limitation users who are browsers,
        customers, clients, or contributors of content.
      </>
    ),
  },
  {
    title: "2. Use of the Site",
    content: (
      <>
        You agree to use the Site and our services only for lawful purposes. You
        must not:
        <ul className="list-disc ml-5">
          <li>Engage in any activity that is unlawful or fraudulent;</li>
          <li>
            Use the Site in a manner that could disable, overburden, damage, or
            impair the Site;
          </li>
          <li>
            Violate the security of the Site, such as by attempting to gain
            unauthorized access to the Site, accounts, or computer networks
            connected to the Site.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Services",
    content: (
      <>
        The Growth Mantra provides growth consulting and marketing services,
        including but not limited to customer acquisition, retention strategies,
        funnel optimization, and SEO services. All services provided will be
        subject to a separate contract or agreement that outlines specific
        terms, deliverables, and fees. These Terms apply to the use of the Site
        and to any contracts or agreements entered into with us.
      </>
    ),
  },
  {
    title: "4. Intellectual Property",
    content: (
      <>
        All content on this Site, including but not limited to text, graphics,
        logos, images, data compilations, and software, is the property of The
        Growth Mantra and is protected by international copyright and trademark
        laws. You may not reproduce, distribute, modify, or otherwise exploit
        our content without our prior written consent.
      </>
    ),
  },
  {
    title: "5. Limitation of Liability",
    content: (
      <>
        To the fullest extent permitted by law, The Growth Mantra shall not be
        liable for any damages that result from the use or inability to use the
        Site or our services. This includes, but is not limited to, direct,
        indirect, incidental, punitive, and consequential damages.
      </>
    ),
  },
  {
    title: "6. No Guarantees",
    content: (
      <>
        While we strive to provide the best possible strategies and consulting
        services, we do not guarantee specific results or outcomes. The
        performance and results of our services depend on a variety of factors
        beyond our control, including but not limited to the market, business
        model, and execution of the strategies we recommend.
      </>
    ),
  },
  {
    title: "7. Third-Party Links",
    content: (
      <>
        Our Site may contain links to third-party websites or services that are
        not owned or controlled by The Growth Mantra. We have no control over,
        and assume no responsibility for, the content, privacy policies, or
        practices of any third-party websites or services. You acknowledge and
        agree that we are not liable for any damage or loss caused by your use
        of any such content or services.
      </>
    ),
  },
  {
    title: "8. Payment and Fees",
    content: (
      <>
        All fees for services provided by The Growth Mantra will be outlined in
        the specific agreements or contracts you enter into with us. Payments
        are due in accordance with the payment schedule in the contract, and
        failure to pay on time may result in suspension or termination of
        services.
      </>
    ),
  },
  {
    title: "9. Cancellation and Termination",
    content: (
      <>
        Either party may terminate a service agreement by providing written
        notice in accordance with the terms of the contract. In the event of
        termination, the client will be responsible for payment of all services
        provided up to the date of termination. The Growth Mantra reserves the
        right to terminate access to the Site and its services for any user who
        violates these Terms.
      </>
    ),
  },
  {
    title: "10. Confidentiality",
    content: (
      <>
        Both parties agree to keep confidential any information that is
        identified as confidential during the course of our relationship. This
        includes business strategies, client lists, proprietary tools, and other
        information that is not publicly available. Confidentiality obligations
        shall continue after the termination of our business relationship.
      </>
    ),
  },
  {
    title: "11. Privacy Policy",
    content: (
      <>
        Your use of the Site and our services is also governed by our [Privacy
        Policy], which can be found at [Insert Link to Privacy Policy]. This
        policy explains how we collect, use, and protect your personal
        information.
      </>
    ),
  },
  {
    title: "12. Governing Law",
    content: (
      <>
        These Terms are governed by and construed in accordance with the laws of
        [Insert Jurisdiction], without regard to its conflict of law principles.
        Any disputes arising under these Terms will be subject to the exclusive
        jurisdiction of the courts in [Insert Jurisdiction].
      </>
    ),
  },
  {
    title: "13. Changes to These Terms",
    content: (
      <>
        The Growth Mantra reserves the right to update or modify these Terms at
        any time without prior notice. Any changes will be effective immediately
        upon posting on the Site. It is your responsibility to review these
        Terms periodically for updates or changes.
      </>
    ),
  },
  {
    title: "14. Contact Information",
    content: (
      <>
        If you have any questions about these Terms, please contact us at:
        <div className="ml-5 mt-2">
          <strong>The Growth Mantra</strong>
          <br />
          Email: contact@thegrowthmantra.com
        </div>
      </>
    ),
  },
];

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Header />
      {/* Terms and Conditions Section */}
      <section className="px-3 md:px-10 py-12 mt-40">
        <h1 className="text-3xl font-bold text-[#16213E]">
          Terms and Conditions
        </h1>

        {termsData.map((term, index) => (
          <div key={index} className="my-4">
            <h2 className="font-semibold text-lg text-[#16213E]">
              {term.title}
            </h2>
            <p className="text-[#6B6E8E]">{term.content}</p>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
};

export default TermsAndConditions; // Ensure this is the default export
