import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RetentionHero from "@/components/Hero/Retention";
import RetentionOffering from "@/components/Offering/RetentionOffering";
import Retain from "@/components/Pulse/Retain";
import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Retention Strategies | Growth Mantra",
  description:
    "Enhance customer retention and loyalty with our proven strategies for long-term business success.",
};

export default function Home() {
  return (
    <>
      <Header />
      <RetentionHero />
      <RetentionOffering />
      <Retain />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
