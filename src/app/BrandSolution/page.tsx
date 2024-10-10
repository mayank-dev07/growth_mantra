import CaseStudy from "@/components/CaseStudy/CaseStudy";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Trending from "@/components/Trending/Trending";
import BrandSolutionHero from "@/components/Hero/BrandSolution";
import BrandSolutionOffering from "@/components/Offering/BrandSolutionOffering";
import BrandSolution from "@/components/Pulse/BrandSolution";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Solutions for Businesses | Growth Mantra",
  description:
    "Strengthen your brand with our innovative brand solutions that resonate with your audience",
};

export default function Home() {
  return (
    <>
      <Header />
      <BrandSolutionHero />
      <BrandSolutionOffering />
      <BrandSolution />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
