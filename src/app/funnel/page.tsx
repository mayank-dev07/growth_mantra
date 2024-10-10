import CaseStudy from "@/components/CaseStudy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FunnelHero from "@/components/Hero/Funnel";
import Funnel from "@/components/Pulse/Funnel";
import FunnelOffering from "@/components/Offering/FunnelOffering";

import Trending from "@/components/Trending";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs2";

export default function Home() {
  return (
    <>
      <Header />
      <FunnelHero/>
      <FunnelOffering/>
      <Funnel/>
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
