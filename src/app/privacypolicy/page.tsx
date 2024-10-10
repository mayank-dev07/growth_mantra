// app/privacy-policy/page.tsx

import React from "react";
import Footer from "@/components/Footer/Footer2"; // Adjust the import path as needed
import Header from "@/components/Header/Header3"; // Adjust the import path as needed

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Header />
      <section className="px-3 md:px-10 py-12 mt-44">
        {" "}
        {/* Added mt-8 for the whole section */}
        <h1 className="text-3xl font-bold text-[#16213E]">Privacy Policy</h1>
        <p className="text-[#6B6E8E]">Last Updated: 9 Oct 2024</p>
        <p>
          The Growth Mantra (“we,” “our,” or “us”) is committed to protecting
          the privacy of our clients, users, and website visitors. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your
          personal information when you visit our website [Insert Website URL]
          (the “Site”) or use our services. By using our Site or services, you
          agree to the terms outlined in this Privacy Policy.
        </p>
        <div className="font-semibold text-2xl text-[#16213E] mt-6">
          1. Information We Collect
        </div>{" "}
        {/* Using div instead of h2 and increased font size */}
        <p>We may collect the following types of information from users:</p>
        <div className="font-semibold text-xl text-[#16213E] mt-4">
          A. Personal Information
        </div>{" "}
        {/* Using div instead of h3 */}
        <p>
          When you interact with our Site or use our services, we may ask for
          personal information, including but not limited to:
        </p>
        <ul className="list-disc pl-5 text-[#6B6E8E]">
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Company Name</li>
          <li>Website URL</li>
          <li>Billing Information (for payments)</li>
        </ul>
        <div className="font-semibold text-xl text-[#16213E] mt-4">
          B. Non-Personal Information
        </div>{" "}
        {/* Using div instead of h3 */}
        <p>We may also collect non-personal information, such as:</p>
        <ul className="list-disc pl-5 text-[#6B6E8E]">
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>IP address</li>
          <li>Geolocation data</li>
          <li>Referring website</li>
          <li>Pages visited on our Site</li>
          <li>Time spent on pages</li>
        </ul>
        <p>
          This information helps us understand how users engage with our Site
          and improve our services.
        </p>
        <div className="font-semibold text-2xl text-[#16213E] mt-6">
          2. How We Use Your Information
        </div>{" "}
        {/* Using div instead of h2 and increased font size */}
        <p>We use the information collected for the following purposes:</p>
        <ul className="list-disc pl-5 text-[#6B6E8E]">
          <li>
            Service Delivery: To provide the services you request, such as
            consultations or marketing services.
          </li>
          <li>
            Customer Support: To respond to inquiries, provide assistance, and
            resolve issues.
          </li>
          <li>
            Marketing & Communications: To send promotional materials,
            newsletters, and information about our services (with your consent).
          </li>
          <li>
            Analytics: To analyze website traffic, user behavior, and improve
            the user experience.
          </li>
          <li>Billing & Payments: To process payments for our services.</li>
          <li>
            Legal Compliance: To comply with legal obligations and enforce our
            agreements.
          </li>
        </ul>
        <div className="font-semibold text-2xl text-[#16213E] mt-6">
          3. Cookies and Tracking Technologies
        </div>{" "}
        {/* Using div instead of h2 and increased font size */}
        <p>
          Our Site uses cookies and other tracking technologies (such as web
          beacons and pixels) to enhance your experience. Cookies are small
          files placed on your device that help us understand how users interact
          with our Site. We use the following types of cookies:
        </p>
        <ul className="list-disc pl-5 text-[#6B6E8E]">
          <li>Essential Cookies: Necessary for the operation of the Site.</li>
          <li>
            Performance Cookies: Used to collect information about how visitors
            use our Site.
          </li>
          <li>
            Functional Cookies: Remember your preferences to improve your
            experience.
          </li>
          <li>
            Targeting Cookies: Used to deliver relevant advertisements to users.
          </li>
        </ul>
        <p>
          You can control cookies through your browser settings. However,
          disabling cookies may affect the functionality of the Site.
        </p>
        <div className="font-semibold text-2xl text-[#16213E] mt-6">
          4. Sharing Your Information
        </div>{" "}
        {/* Using div instead of h2 and increased font size */}
        <p>We may share your personal information in the following ways:</p>
        <ul className="list-disc pl-5 text-[#6B6E8E]">
          <li>
            Third-Party Service Providers: We may share your information with
            trusted service providers who assist us in delivering our services,
            such as payment processors, hosting providers, or marketing tools.
            These third parties are required to keep your information
            confidential and secure.
          </li>
          <li>
            Business Transfers: In the event of a merger, acquisition, or sale
            of assets, your information may be transferred to the new entity.
          </li>
          <li>
            Legal Requirements: We may disclose your information if required by
            law or to protect our rights, safety, or the rights of others.
          </li>
        </ul>
        <p>
          We do not sell or rent your personal information to third parties.
        </p>
        <div className="font-semibold text-2xl text-[#16213E] mt-6">
          5. Data Security
        </div>{" "}
        {/* Using div instead of h2 and increased font size */}
        <p>
          We take data security seriously and use a variety of measures to
          protect your personal information from unauthorized access, use, or
          disclosure. These measures include encryption, secure servers, and
          regular security audits. However, no data transmission over the
          internet can be guaranteed to be 100% secure. While we strive to
          protect your information, we cannot guarantee its absolute security.
        </p>
        <div className="font-semibold text-2xl text-[#16213E] mt-6">
          6. Your Rights and Choices
        </div>{" "}
        {/* Using div instead of h2 and increased font size */}
        <p>
          Depending on your location and applicable privacy laws, you may have
          the following rights regarding your personal information:
        </p>
        <ul className="list-disc pl-5 text-[#6B6E8E]">
          <li>
            Access: Request access to the personal information we hold about
            you.
          </li>
          <li>
            Correction: Request corrections to inaccurate or incomplete
            information.
          </li>
          <li>Deletion: Request the deletion of your personal information.</li>
          <li>
            Objection: Object to the processing of your personal information for
            marketing purposes.
          </li>
          <li>
            Data Portability: Request a copy of your personal information in a
            structured, machine-readable format.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at [Insert Contact
          Email]. We will respond to your request in accordance with applicable
          laws.
        </p>
        <div className="font-semibold text-2xl text-[#16213E] mt-6">
          7. Data Retention
        </div>{" "}
        {/* Using div instead of h2 and increased font size */}
        <p>
          We retain your personal information only for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law. Once personal
          information is no longer needed, we securely delete or anonymize it.
        </p>
        <div className="font-semibold text-2xl text-[#16213E] mt-6">
          8. International Transfers
        </div>{" "}
        {/* Using div instead of h2 and increased font size */}
        <p>
          Your personal information may be transferred to and processed in
          countries other than your own. These countries may have data
          protection laws that are different from the laws of your country.
          However, we take measures to ensure that your personal information is
          protected in accordance with this Privacy Policy.
        </p>
        <div className="font-semibold text-2xl text-[#16213E] mt-6">
          9. Children’s Privacy
        </div>{" "}
        {/* Using div instead of h2 and increased font size */}
        <p>
          Our services are not intended for individuals under the age of 16. We
          do not knowingly collect personal information from children. If we
          become aware that we have collected information from a child under 16,
          we will take steps to delete that information.
        </p>
        <div className="font-semibold text-2xl text-[#16213E] mt-6">
          10. Third-Party Links
        </div>{" "}
        {/* Using div instead of h2 and increased font size */}
        <p>
          Our Site may contain links to third-party websites or services that
          are not controlled by us. We are not responsible for the privacy
          practices of these third parties. We encourage you to review the
          privacy policies of any third-party websites you visit.
        </p>
        <div className="font-semibold text-2xl text-[#16213E] mt-6">
          11. Changes to This Privacy Policy
        </div>{" "}
        {/* Using div instead of h2 and increased font size */}
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify you of any material changes by posting the new
          Privacy Policy on our Site with an updated effective date. Your
          continued use of the Site after any changes constitutes your
          acceptance of the new policy.
        </p>
        <div className="font-semibold text-2xl text-[#16213E] mt-6">
          12. Contact Us
        </div>{" "}
        {/* Using div instead of h2 and increased font size */}
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <p>
          The Growth Mantra <br />
          Email: contact@thegrowthmantra.com
        </p>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
