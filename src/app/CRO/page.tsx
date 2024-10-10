import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CroHero from "@/components/Hero/Cro";
import CroOffering from "@/components/Offering/CroOffering";
import Cro from "@/components/Pulse/Cro";
import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization Services | Growth Mantra",
  description:
    "Boost your conversion rates with data-driven strategies that maximize every customer interaction.",
};

export default function Home() {
  return (
    <>
      <Header />

      <CroHero />
      <CroOffering />
      <Cro />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
