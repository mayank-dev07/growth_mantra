import CaseStudy from "@/components/CaseStudy/CaseStudy";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Trending from "@/components/Trending/Trending";

import MarketHero from "@/components/Hero/Market";
import MarketOffering from "@/components/Offering/MarketOffering";
import Market from "@/components/Pulse/Market";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Go-to-Market Strategy Services | Growth Mantra",
  description:
    "Launch with confidence using our tailored go-to-market strategies that drive growth and success.",
};

export default function Home() {
  return (
    <>
      <Header />
      <MarketHero />
      <MarketOffering />
      <Market />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
