import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FunnelHero from "@/components/Hero/Funnel";
import Funnel from "@/components/Pulse/Funnel";
import FunnelOffering from "@/components/Offering/FunnelOffering";

import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Funnel Optimization | Growth Mantra",
  description:
    "Optimize your sales funnel to convert more leads into loyal customers with our expert strategies",
};

export default function Home() {
  return (
    <>
      <Header />
      <FunnelHero />
      <FunnelOffering />
      <Funnel />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
