import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SeoHero from "@/components/Hero/Seo";
import SeoOffering from "@/components/Offering/SeoOffering";
import Seo from "@/components/Pulse/Seo";

import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services for Growth | Growth Mantra",
  description:
    "Dominate search engine rankings with our tailored SEO strategies designed for long-term results.",
};

export default function Home() {
  return (
    <>
      <Header />

      <SeoHero />
      <SeoOffering />
      <Seo />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
