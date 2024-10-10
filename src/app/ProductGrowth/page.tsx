import CaseStudy from "@/components/CaseStudy/CaseStudy";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Trending from "@/components/Trending/Trending";
import ProductGrowthHero from "@/components/Hero/ProductGrowth";
import ProductGrowthOffering from "@/components/Offering/ProductGrowthOffering";
import ProductGrowth from "@/components/Pulse/ProductGrowth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Growth Strategies | Growth Mantra",
  description:
    "Scale your products effectively with our expert product growth strategies tailored to market demands.",
};

export default function Home() {
  return (
    <>
      <Header />
      <ProductGrowthHero />
      <ProductGrowthOffering />
      <ProductGrowth />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
