import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Offering from "@/components/Offering";
import Pulse from "@/components/Pulse";
import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Services for Growth | Growth Mantra",
  description:
    "Explore a wide range of growth-driven services designed to help your business thrive.",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Offering />
      <Pulse />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
