import CaseStudy from "@/components/CaseStudy/CaseStudy";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Trending from "@/components/Trending/Trending";

import MarketHero from "@/components/Hero/Market";
import MarketOffering from "@/components/Offering/MarketOffering";
import Market from "@/components/Pulse/Market";

export default function Home() {
  return (
    <>
      <Header />
      <MarketHero/>
      <MarketOffering/>
      <Market/>
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
