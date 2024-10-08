import CaseStudy from "@/components/CaseStudy/CaseStudy";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Trending from "@/components/Trending/Trending";
import StrategyHero from "@/components/Hero/Strategy";
import StrategyOffering from "@/components/Offering/StrategyOffering";
import Strategy from "@/components/Pulse/Strategy";

export default function Home() {
  return (
    <>
      <Header />
      <StrategyHero />
      <StrategyOffering />
      <Strategy />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
