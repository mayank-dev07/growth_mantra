import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Acquisition from "@/components/Hero/Acquisition";
import AcquisitionOffering from "@/components/Offering/AcquisitionOffering";
import Acquire from "@/components/Pulse/Acquire";
import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Acquisition Strategies | Growth Mantra",
  description:
    "Master customer acquisition with tailored strategies to increase leads and drive business growth.",
};

export default function Home() {
  return (
    <>
      <Header />
      <Acquisition />
      <AcquisitionOffering />
      <Acquire />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
